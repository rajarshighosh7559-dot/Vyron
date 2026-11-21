export const DOMAINS = {
  transport: {
    id: "transport",
    name: "Transportation",
    fullName: "Transportation & Flow",
    accent: "#315b48",
    softBg: "#e3eae2",
    description: "Traffic flow, congestion, route diversions, and accessibility",
    baselineLabel: "11.4 min avg transit delay",
    baseline: 11.4,
    unit: "min delay",
  },
  environment: {
    id: "environment",
    name: "Environment",
    fullName: "Environment",
    accent: "#4c7a56",
    softBg: "#e7eee5",
    description: "Air quality, noise spikes, micro-climate heat, and greenery",
    baselineLabel: "64 AQI · 58 dB ambient",
    baseline: 64.0,
    unit: "AQI",
  },
  health: {
    id: "health",
    name: "Public Health",
    fullName: "Public Health & Safety",
    accent: "#a27c45",
    softBg: "#f3ede2",
    description: "Emergency access, service pressure, and safety thresholds",
    baselineLabel: "6.2 min EMS response",
    baseline: 6.2,
    unit: "min EMS",
  },
  behavior: {
    id: "behavior",
    name: "Human Behaviour",
    fullName: "Aggregate Human Behavior",
    accent: "#5d6f7a",
    softBg: "#e6ebed",
    description: "Movement, queue fatigue, route compliance, and crowd demand",
    baselineLabel: "91% compliance · low fatigue",
    baseline: 91.0,
    unit: "% compliance",
  },
};

export const simulationDomains = [
  { name: "Transportation", description: "Traffic flow, congestion and accessibility" },
  { name: "Environment", description: "Air quality, noise and urban greenery" },
  { name: "Public Health", description: "Healthcare access and service pressure" },
  { name: "Human Behaviour", description: "Movement, demand and behavioural patterns" },
];

export const durationOptions = [
  "1 hour",
  "6 hours",
  "12 hours",
  "24 hours",
  "7 days",
  "30 days",
  "1 year",
];

export const scenarioTemplates = [
  {
    title: "Close a major road",
    description: "What if a major road near a busy hospital was closed during rush hour?",
    location: "Kolkata",
    duration: "6 hours",
    severity: 86,
    domains: ["Transportation", "Environment", "Public Health", "Human Behaviour"],
  },
  {
    title: "Expand urban greenery",
    description: "What if the city increased green spaces across densely populated areas?",
    location: "Kolkata",
    duration: "1 year",
    severity: 42,
    isPositiveIntervention: true,
    domains: ["Transportation", "Environment", "Public Health", "Human Behaviour"],
  },
  {
    title: "Make public transport free",
    description: "What if public transport became free for all residents?",
    location: "Kolkata",
    duration: "30 days",
    severity: 65,
    domains: ["Transportation", "Environment", "Public Health", "Human Behaviour"],
  },
  {
    title: "Gate 2 campus closure",
    description: "What if Gate 2 stays closed during recess at Techno India University?",
    location: "Salt Lake Sector V, Kolkata",
    duration: "6 hours",
    severity: 74,
    domains: ["Transportation", "Environment", "Public Health", "Human Behaviour"],
  },
];

export function seededRandom(seed) {
  let s = seed % 2147483647;
  if (s <= 0) s += 2147483646;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

export function hashString(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return Math.abs(h);
}

export function runMonteCarloSimulation(config) {
  const {
    description = "",
    location = "Kolkata",
    duration = "6 hours",
    severity = 72,
    iterations = 1000,
    domains = ["Transportation", "Environment", "Public Health", "Human Behaviour"],
    isPositiveIntervention = false,
  } = config;

  const seed = hashString(`${description}|${location}|${duration}|${severity}|${iterations}|${domains.join(",")}`);
  const rand = seededRandom(seed);
  const factor = severity / 100;
  const sign = isPositiveIntervention ? -1 : 1;

  const domainMetrics = {
    Transportation: {
      baseline: 11.4,
      unit: "min delay",
      meanShift: sign * (4.2 + factor * 11.8),
      volatility: 1.6 + factor * 2.9,
      riskScore: isPositiveIntervention ? Math.max(18, Math.round(42 - factor * 24)) : Math.min(96, Math.round(45 + factor * 48)),
      headline: isPositiveIntervention ? "Modal shift reduces road bottlenecks across corridor" : "Corridor congestion increases via route diversion & queues",
    },
    Environment: {
      baseline: 64.0,
      unit: "AQI",
      meanShift: sign * (8.5 + factor * 26.0),
      volatility: 3.2 + factor * 6.5,
      riskScore: isPositiveIntervention ? Math.max(15, Math.round(38 - factor * 22)) : Math.min(94, Math.round(40 + factor * 46)),
      headline: isPositiveIntervention ? "Localized heat island eases; air quality improves" : "Idling queues & thermal load elevate local emissions & noise",
    },
    "Public Health": {
      baseline: 6.2,
      unit: "min EMS",
      meanShift: sign * (1.1 + factor * 4.6),
      volatility: 0.7 + factor * 1.4,
      riskScore: isPositiveIntervention ? Math.max(16, Math.round(35 - factor * 18)) : Math.min(95, Math.round(42 + factor * 50)),
      headline: isPositiveIntervention ? "Clearer emergency lanes & lower heat-stress pressure" : "Emergency corridor impedance & facility demand pressure",
    },
    "Human Behaviour": {
      baseline: 91.0,
      unit: "% compliance",
      meanShift: -sign * (7.0 + factor * 24.0),
      volatility: 2.5 + factor * 5.2,
      riskScore: isPositiveIntervention ? Math.max(20, Math.round(36 - factor * 14)) : Math.min(92, Math.round(44 + factor * 45)),
      headline: isPositiveIntervention ? "Higher pedestrian comfort & predictable routing" : "Wait-time fatigue drives informal detours & crowding",
    },
  };

  const domainDistributions = {};
  Object.keys(domainMetrics).forEach((dKey) => {
    const m = domainMetrics[dKey];
    const samples = [];
    for (let i = 0; i < iterations; i++) {
      const u1 = Math.max(1e-6, rand());
      const u2 = rand();
      const z = Math.sqrt(-2.0 * Math.log(u1)) * Math.cos(2.0 * Math.PI * u2);
      const val = Math.max(1, m.baseline + m.meanShift + z * m.volatility);
      samples.push(val);
    }
    samples.sort((a, b) => a - b);
    const p10 = samples[Math.floor(iterations * 0.1)];
    const p50 = samples[Math.floor(iterations * 0.5)];
    const p90 = samples[Math.floor(iterations * 0.9)];

    domainDistributions[dKey] = {
      ...m,
      enabled: domains.includes(dKey),
      p10: Number(p10.toFixed(1)),
      p50: Number(p50.toFixed(1)),
      p90: Number(p90.toFixed(1)),
      deltaPct: Number((((p50 - m.baseline) / m.baseline) * 100).toFixed(1)),
    };
  });

  const compositeSamples = [];
  const baseSystemRisk = isPositiveIntervention ? 34 : 52 + factor * 34;
  for (let i = 0; i < iterations; i++) {
    const u1 = Math.max(1e-6, rand());
    const u2 = rand();
    const z = Math.sqrt(-2.0 * Math.log(u1)) * Math.cos(2.0 * Math.PI * u2);
    const tailSkew = z > 1.2 ? (z - 1.2) * 5.5 : 0;
    const score = Math.min(99, Math.max(8, baseSystemRisk + z * 7.8 + tailSkew));
    compositeSamples.push(score);
  }
  compositeSamples.sort((a, b) => a - b);

  const binCount = 10;
  const minVal = Math.floor(compositeSamples[0]);
  const maxVal = Math.ceil(compositeSamples[compositeSamples.length - 1]);
  const step = Math.max(1, (maxVal - minVal) / binCount);

  const bins = Array.from({ length: binCount }, (_, idx) => {
    const start = minVal + idx * step;
    const end = start + step;
    const count = compositeSamples.filter((v) =>
      idx === binCount - 1 ? v >= start && v <= end : v >= start && v < end
    ).length;
    return {
      range: `${Math.round(start)}–${Math.round(end)}`,
      frequency: Number(((count / iterations) * 100).toFixed(1)),
      isTailRisk: (start + end) / 2 >= 75,
    };
  });

  return {
    id: `SIM-${seed.toString().slice(0, 5)}`,
    iterations,
    lowBound: Math.round(compositeSamples[Math.floor(iterations * 0.1)]),
    medianOutcome: Math.round(compositeSamples[Math.floor(iterations * 0.5)]),
    highBound: Math.round(compositeSamples[Math.floor(iterations * 0.9)]),
    exceedanceProb: Number(
      ((compositeSamples.filter((v) => v >= 75).length / iterations) * 100).toFixed(1)
    ),
    domains: domainDistributions,
    bins,
  };
}
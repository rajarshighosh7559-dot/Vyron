import React, { useState, useMemo, useEffect } from "react";
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Download,
  Eye,
  EyeOff,
  FileText,
  GitBranch,
  HeartPulse,
  Info,
  KeyRound,
  Layers,
  LayoutDashboard,
  Leaf,
  Lock,
  LogOut,
  Mail,
  MapPin,
  Menu,
  Play,
  RefreshCw,
  Route,
  Server,
  Settings,
  ShieldAlert,
  ShieldCheck,
  Sliders,
  Sparkles,
  TrendingUp,
  User,
  UserPlus,
  Users,
  X,
} from "lucide-react";

// ============================================================================
// SELF-CONTAINED CRISP VYRON SVG LOGO & DYNAMIC FAVICON
// ============================================================================

function VyronLogo({ size = 44, showWordmark = false, className = "" }) {
  const uid = React.useId().replace(/:/g, "");
  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 rounded-[6px] shadow-sm border border-[#1d3549]"
        aria-label="VYRON Emblem"
      >
        <defs>
          <radialGradient id={`bg-${uid}`} cx="50%" cy="40%" r="65%">
            <stop offset="0%" stopColor="#12283d" />
            <stop offset="100%" stopColor="#07111d" />
          </radialGradient>
          <linearGradient id={`cyan-${uid}`} x1="15" y1="15" x2="105" y2="105" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="50%" stopColor="#2dd4bf" />
            <stop offset="100%" stopColor="#0ea5e9" />
          </linearGradient>
          <linearGradient id={`amber-${uid}`} x1="25" y1="20" x2="98" y2="95" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#fbbf24" />
            <stop offset="55%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#d97706" />
          </linearGradient>
        </defs>

        {/* Deep Navy Backdrop */}
        <rect width="120" height="120" rx="14" fill={`url(#bg-${uid})`} />

        {/* Streaming Left Data Pathways & Nodes */}
        <path
          d="M14 52 H34 C42 52 47 56 54 56"
          stroke={`url(#cyan-${uid})`}
          strokeWidth="3.2"
          strokeLinecap="round"
        />
        <path
          d="M18 62 H37 C44 62 49 58 55 57"
          stroke={`url(#cyan-${uid})`}
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M12 72 H33 C41 72 47 64 55 59"
          stroke={`url(#cyan-${uid})`}
          strokeWidth="3.2"
          strokeLinecap="round"
        />
        <path
          d="M22 81 H38 C45 81 50 70 56 61"
          stroke="#0284c7"
          strokeWidth="2.8"
          strokeLinecap="round"
        />
        <circle cx="14" cy="44" r="2.7" fill="#38bdf8" />
        <circle cx="24" cy="45" r="2.3" fill="#2dd4bf" />
        <circle cx="21" cy="62" r="3" fill="#f59e0b" />
        <circle cx="15" cy="81" r="2.6" fill="#2dd4bf" />
        <circle cx="56" cy="57" r="3.6" fill="#38bdf8" />

        {/* Outer V-Contour & Neural Labyrinth Arcs */}
        <path
          d="M35 30 C48 18 74 18 88 32 L106 18 L95 44 C101 58 95 76 80 91 C69 102 58 106 52 96 C45 84 37 68 32 52"
          stroke={`url(#cyan-${uid})`}
          strokeWidth="4.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Amber-Gold Consequence Ribbons */}
        <path
          d="M39 27 L47 43 M53 38 C61 33 71 35 76 43"
          stroke={`url(#amber-${uid})`}
          strokeWidth="4.2"
          strokeLinecap="round"
        />
        <path
          d="M84 48 L101 55 L86 67"
          stroke={`url(#amber-${uid})`}
          strokeWidth="4.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M77 52 C83 64 81 79 69 90"
          stroke={`url(#amber-${uid})`}
          strokeWidth="4.2"
          strokeLinecap="round"
        />

        {/* Inner Interlocking V-Core */}
        <path
          d="M48 49 C54 32 71 29 79 41 L61 78 C55 88 46 84 42 73"
          stroke={`url(#cyan-${uid})`}
          strokeWidth="4.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M68 66 C73 61 78 65 75 73 C72 80 65 81 63 75 Z"
          stroke={`url(#cyan-${uid})`}
          strokeWidth="3.4"
        />
        <path
          d="M90 27 L98 22 L94 33"
          stroke="#2dd4bf"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {showWordmark && (
        <div className="min-w-0">
          <div className="font-serif-display text-[21px] font-bold tracking-[2.4px] leading-none bg-gradient-to-r from-[#14b8a6] via-[#0f766e] to-[#1e293b] bg-clip-text text-transparent">
            VYRON
          </div>
          <span className="block mt-1 text-[8px] font-bold tracking-[1.1px] text-[#5e695f] uppercase leading-tight">
            EVERY DECISION HAS A CONSEQUENCE
          </span>
        </div>
      )}
    </div>
  );
}

const VYRON_FAVICON_DATA_URI =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
      <rect width="120" height="120" rx="22" fill="#081220"/>
      <path d="M14 54 H54 M14 70 H54" stroke="#2dd4bf" stroke-width="5" stroke-linecap="round"/>
      <circle cx="21" cy="62" r="4.5" fill="#f59e0b"/>
      <path d="M35 30 C48 18 74 18 88 32 L106 18 L95 44 C101 58 95 76 80 91 C69 102 58 106 52 96 C45 84 37 68 32 52" fill="none" stroke="#38bdf8" stroke-width="6.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M84 48 L101 55 L86 67 M77 52 C83 64 81 79 69 90" fill="none" stroke="#f59e0b" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M48 49 C54 32 71 29 79 41 L61 78" fill="none" stroke="#2dd4bf" stroke-width="6" stroke-linecap="round"/>
    </svg>`
  );

// ============================================================================
// CRYPTOGRAPHIC PASSWORD HASHING & DEVICE-ISOLATED ACCOUNT STORAGE
// ============================================================================

const USERS_REGISTRY_KEY = "vyron_users_registry_v2";
const ACTIVE_SESSION_KEY = "vyron_active_session_v2";
const WORKSPACE_PREFIX = "vyron_workspace_v2_";

function generateRandomSalt(length = 16) {
  const bytes = new Uint8Array(length);
  if (typeof window !== "undefined" && window.crypto?.getRandomValues) {
    window.crypto.getRandomValues(bytes);
  } else {
    for (let i = 0; i < length; i++) bytes[i] = Math.floor(Math.random() * 256);
  }
  return Array.from(bytes, (b) => b.toString(16).padStart(2, "0")).join("");
}

async function hashPasswordWithSalt(password, salt) {
  const payload = `${salt}:${password}:VYRON_AUTH_V2`;
  if (typeof window !== "undefined" && window.crypto?.subtle) {
    const encoded = new TextEncoder().encode(payload);
    const digest = await window.crypto.subtle.digest("SHA-256", encoded);
    return Array.from(new Uint8Array(digest), (b) =>
      b.toString(16).padStart(2, "0")
    ).join("");
  }
  let h1 = 0xdeadbeef ^ salt.length;
  let h2 = 0x41c6ce57 ^ password.length;
  for (let i = 0; i < payload.length; i++) {
    const ch = payload.charCodeAt(i);
    h1 = Math.imul(h1 ^ ch, 2654435761);
    h2 = Math.imul(h2 ^ ch, 1597334677);
  }
  h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
  h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
  return (4294967296 * (2097151 & h2) + (h1 >>> 0)).toString(16).padStart(16, "0");
}

function loadUsersRegistry() {
  try {
    const raw = localStorage.getItem(USERS_REGISTRY_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveUsersRegistry(registry) {
  try {
    localStorage.setItem(USERS_REGISTRY_KEY, JSON.stringify(registry));
  } catch {
    // Ignore quota errors
  }
}

function loadUserWorkspace(userId) {
  try {
    const raw = localStorage.getItem(`${WORKSPACE_PREFIX}${userId}`);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && Array.isArray(parsed.history) && parsed.history.length > 0 && parsed.simConfig) {
        return parsed;
      }
    }
  } catch {
    // Fallback to clean workspace
  }

  const starterPreset = SCENARIO_PRESETS[0];
  const initialSimConfig = {
    prompt: starterPreset.prompt,
    location: starterPreset.location,
    timeWindow: starterPreset.timeWindow,
    trigger: starterPreset.trigger,
    severity: starterPreset.severity,
    iterations: 1000,
    selectedDomains: ["transport", "environment", "health", "behavior"],
  };
  const initialRun = runMonteCarloSimulation(initialSimConfig);

  return {
    defaultRuns: 1000,
    riskAlertThreshold: 75,
    promptInput: starterPreset.prompt,
    simConfig: initialSimConfig,
    history: [initialRun],
  };
}

function saveUserWorkspace(userId, workspace) {
  try {
    localStorage.setItem(`${WORKSPACE_PREFIX}${userId}`, JSON.stringify(workspace));
  } catch {
    // Ignore storage quota errors
  }
}

// ============================================================================
// DESIGN SYSTEM & DOMAIN CONFIGURATION
// ============================================================================

const DOMAINS = {
  transport: {
    id: "transport",
    name: "Transportation & Flow",
    shortName: "Transportation",
    icon: Route,
    accent: "#315b48",
    softBg: "#e3eae2",
    description: "Traffic congestion, pedestrian bottlenecks, route diversions, and evacuation accessibility.",
    baselineLabel: "11.4 min avg transit delay",
    unit: "min",
  },
  environment: {
    id: "environment",
    name: "Environment",
    shortName: "Environment",
    icon: Leaf,
    accent: "#4c7a56",
    softBg: "#e7eee5",
    description: "Localized air quality/emissions, noise spikes, micro-climate heat buildup, and waste overflow.",
    baselineLabel: "64 AQI · 58 dB ambient",
    unit: "AQI",
  },
  health: {
    id: "health",
    name: "Public Health & Safety",
    shortName: "Public Health",
    icon: HeartPulse,
    accent: "#a27c45",
    softBg: "#f3ede2",
    description: "Emergency response delays, facility overcrowding, hygiene risks, and safety thresholds.",
    baselineLabel: "6.2 min EMS response",
    unit: "min",
  },
  behavior: {
    id: "behavior",
    name: "Aggregate Human Behavior",
    shortName: "Human Behavior",
    icon: Users,
    accent: "#5d6f7a",
    softBg: "#e6ebed",
    description: "Crowd dynamics, queue wait-time fatigue, route detour compliance, and panic velocity.",
    baselineLabel: "91% compliance · low fatigue",
    unit: "%",
  },
};

const SCENARIO_PRESETS = [
  {
    id: "canteen-gate",
    title: "North Canteen Gate Closure (Lunch Peak)",
    category: "Campus / Facility Flow",
    prompt: "What if the north canteen gate is closed during lunch?",
    location: "North Canteen & Central Courtyard",
    timeWindow: "Peak Lunch Window (12:15 – 13:45)",
    trigger: "Gate Closure / 100% North Access Restriction",
    severity: 74,
    domains: ["transport", "environment", "health", "behavior"],
  },
  {
    id: "hospital-arterial",
    title: "Hospital Arterial Road Closure (Rush Hour)",
    category: "Urban Emergency & Mobility",
    prompt: "What if the main arterial road near City General Hospital is closed during evening rush hour?",
    location: "Hospital Sector Arterial Corridor",
    timeWindow: "Evening Rush Hour (17:00 – 20:00)",
    trigger: "2-Lane Arterial Blockage & Detour",
    severity: 86,
    domains: ["transport", "environment", "health", "behavior"],
  },
  {
    id: "green-canopy",
    title: "35% Urban Green Canopy & Cool-Corridor Expansion",
    category: "Climate & Micro-Environment",
    prompt: "What if urban tree canopy and shaded pedestrian corridors are expanded by 35% across the central district?",
    location: "Central Commercial & Transit District",
    timeWindow: "Summer Midday Peak (11:00 – 16:00)",
    trigger: "+35% Canopy Coverage & Cool Pavement",
    severity: 42,
    isPositiveIntervention: true,
    domains: ["transport", "environment", "health", "behavior"],
  },
  {
    id: "zero-fare-transit",
    title: "Zero-Fare Public Transit Pilot",
    category: "Demand & Crowd Dynamics",
    prompt: "What if public buses and metro feeder shuttles become free across the metropolitan core?",
    location: "Metropolitan Transit Network",
    timeWindow: "Weekday Commute Cycle (07:30 – 21:00)",
    trigger: "100% Fare Subsidy / Demand Surge",
    severity: 65,
    domains: ["transport", "environment", "health", "behavior"],
  },
];

// ============================================================================
// NLP INTENT ROUTER & GUARDRAIL ENGINE
// ============================================================================

function analyzePromptIntent(rawPrompt) {
  const text = rawPrompt.trim();
  const lower = text.toLowerCase();

  if (!text) {
    return {
      isValid: false,
      status: "empty",
      reason: "Enter a systemic 'What if...' question to initialize variable extraction.",
    };
  }

  const personalPatterns = [
    /\b(break up|girlfriend|boyfriend|crush|marry|divorce|lonely|depressed|sad|love me|my life|my exam|cheat on|should i quit my job)\b/i,
    /\b(astrology|horoscope|zodiac|lottery|stock pick|crypto price)\b/i,
  ];

  const isPersonal = personalPatterns.some((rx) => rx.test(lower));
  if (isPersonal) {
    return {
      isValid: false,
      status: "redirected",
      reason:
        "VYRON analyzes multi-domain systemic, urban, campus, and infrastructure decisions rather than personal, emotional, or speculative financial advice. Try asking how a physical, policy, or operational change affects crowd flow, environment, or public safety.",
    };
  }

  const isMitigation =
    /\b(expand|tree|green|canopy|free|subsid|add|open|improve|solar|bike|lane|ventilat|park)\b/i.test(
      lower
    );

  let location = "Central District Corridor";
  if (lower.includes("canteen") || lower.includes("gate")) {
    location = "North Canteen & South Gate Complex";
  } else if (lower.includes("hospital") || lower.includes("ambulance") || lower.includes("clinic")) {
    location = "Medical District & Arterial Access";
  } else if (lower.includes("kolkata") || lower.includes("bridge") || lower.includes("highway")) {
    location = "Primary Urban Arterial & Junction";
  } else if (lower.includes("campus") || lower.includes("university") || lower.includes("school")) {
    location = "Main Academic & Pedestrian Campus";
  } else if (lower.includes("metro") || lower.includes("bus") || lower.includes("transport")) {
    location = "Metropolitan Transit & Feeder Grid";
  }

  let timeWindow = "Peak Operational Window (2 Hours)";
  if (lower.includes("lunch")) timeWindow = "Lunch Peak Window (12:15 – 13:45)";
  else if (lower.includes("rush") || lower.includes("evening")) timeWindow = "Evening Rush Hour (17:00 – 20:00)";
  else if (lower.includes("morning")) timeWindow = "Morning Commute Peak (08:00 – 10:30)";
  else if (lower.includes("night")) timeWindow = "Night Operations Window (22:00 – 05:00)";
  else if (lower.includes("summer") || lower.includes("heat")) timeWindow = "Midday Thermal Peak (11:30 – 15:30)";

  let trigger = "Operational Policy / Infrastructure Perturbation";
  if (lower.includes("close") || lower.includes("closed") || lower.includes("block")) {
    trigger = "Access Closure & Forced Route Diversion";
  } else if (lower.includes("free") || lower.includes("fare")) {
    trigger = "Zero-Fare Demand Elasticity Shock";
  } else if (lower.includes("tree") || lower.includes("green") || lower.includes("canopy")) {
    trigger = "Ecological & Micro-Climate Infrastructure Expansion";
  } else if (lower.includes("outage") || lower.includes("power")) {
    trigger = "Grid / Signal Infrastructure Disruption";
  }

  let severity = isMitigation ? 44 : 72;
  if (lower.includes("major") || lower.includes("emergency") || lower.includes("complete")) {
    severity = isMitigation ? 38 : 84;
  }

  return {
    isValid: true,
    status: "validated",
    isPositiveIntervention: isMitigation,
    location,
    timeWindow,
    trigger,
    severity,
    confidence: 0.94,
  };
}

// ============================================================================
// DETERMINISTIC + STOCHASTIC MONTE CARLO & DEPENDENCY GRAPH ENGINE
// ============================================================================

function seededRandom(seed) {
  let s = seed % 2147483647;
  if (s <= 0) s += 2147483646;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

function hashString(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return Math.abs(h);
}

function runMonteCarloSimulation(config) {
  const {
    prompt,
    location,
    timeWindow,
    trigger,
    severity,
    iterations = 1000,
    selectedDomains = ["transport", "environment", "health", "behavior"],
  } = config;

  const intent = analyzePromptIntent(prompt);
  const isPositive = intent.isPositiveIntervention;
  const seed = hashString(`${prompt}|${location}|${severity}|${iterations}|${selectedDomains.join(",")}`);
  const rand = seededRandom(seed);

  const factor = severity / 100;
  const sign = isPositive ? -1 : 1;

  const domainMetrics = {
    transport: {
      baseline: 11.4,
      unit: "min delay",
      meanShift: sign * (4.2 + factor * 11.8),
      volatility: 1.6 + factor * 2.9,
      riskScore: isPositive ? Math.max(18, Math.round(42 - factor * 24)) : Math.min(96, Math.round(45 + factor * 48)),
      headline: isPositive
        ? "Modal shift reduces road bottlenecks by 22%"
        : "South corridor congestion spikes +68% via bottleneck diversion",
    },
    environment: {
      baseline: 64.0,
      unit: "AQI",
      meanShift: sign * (8.5 + factor * 26.0),
      volatility: 3.2 + factor * 6.5,
      riskScore: isPositive ? Math.max(15, Math.round(38 - factor * 22)) : Math.min(94, Math.round(40 + factor * 46)),
      headline: isPositive
        ? "Localized heat island drops 2.1°C; PM2.5 curtailed"
        : "Idling queue & HVAC load elevate localized emissions & noise",
    },
    health: {
      baseline: 6.2,
      unit: "min EMS",
      meanShift: sign * (1.1 + factor * 4.6),
      volatility: 0.7 + factor * 1.4,
      riskScore: isPositive ? Math.max(16, Math.round(35 - factor * 18)) : Math.min(95, Math.round(42 + factor * 50)),
      headline: isPositive
        ? "Clearer emergency lanes & lower thermal heat-stress risk"
        : "Emergency corridor impedance & indoor crowd density pressure",
    },
    behavior: {
      baseline: 91.0,
      unit: "% compliance",
      meanShift: -sign * (7.0 + factor * 24.0),
      volatility: 2.5 + factor * 5.2,
      riskScore: isPositive ? Math.max(20, Math.round(36 - factor * 14)) : Math.min(92, Math.round(44 + factor * 45)),
      headline: isPositive
        ? "Higher pedestrian comfort & predictable commuter routing"
        : "Wait-time fatigue triggers informal shortcuts & queue spillover",
    },
  };

  const compositeSamples = [];
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
    const mean = samples.reduce((acc, v) => acc + v, 0) / iterations;

    domainDistributions[dKey] = {
      ...m,
      enabled: selectedDomains.includes(dKey),
      p10: Number(p10.toFixed(1)),
      p50: Number(p50.toFixed(1)),
      p90: Number(p90.toFixed(1)),
      mean: Number(mean.toFixed(1)),
      deltaPct: Number((((p50 - m.baseline) / m.baseline) * 100).toFixed(1)),
    };
  });

  const baseSystemRisk = isPositive ? 34 : 52 + factor * 34;
  for (let i = 0; i < iterations; i++) {
    const u1 = Math.max(1e-6, rand());
    const u2 = rand();
    const z = Math.sqrt(-2.0 * Math.log(u1)) * Math.cos(2.0 * Math.PI * u2);
    const tailSkew = z > 1.2 ? (z - 1.2) * 5.5 : 0;
    const score = Math.min(99, Math.max(8, baseSystemRisk + z * 7.8 + tailSkew));
    compositeSamples.push(score);
  }
  compositeSamples.sort((a, b) => a - b);

  const binCount = 12;
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
      midpoint: Math.round((start + end) / 2),
      count,
      frequency: Number(((count / iterations) * 100).toFixed(1)),
      isTailRisk: (start + end) / 2 >= 75,
    };
  });

  const timeSeries = [
    { t: "T+0m", baseline: 28, simulated: 29, upper: 32, lower: 26 },
    { t: "T+15m", baseline: 30, simulated: isPositive ? 27 : Math.round(44 + factor * 18), upper: isPositive ? 31 : Math.round(52 + factor * 21), lower: isPositive ? 23 : Math.round(37 + factor * 14) },
    { t: "T+30m", baseline: 33, simulated: isPositive ? 24 : Math.round(54 + factor * 24), upper: isPositive ? 29 : Math.round(64 + factor * 26), lower: isPositive ? 20 : Math.round(45 + factor * 19) },
    { t: "T+45m", baseline: 34, simulated: isPositive ? 22 : Math.round(58 + factor * 28), upper: isPositive ? 27 : Math.round(70 + factor * 27), lower: isPositive ? 18 : Math.round(48 + factor * 22) },
    { t: "T+60m", baseline: 32, simulated: isPositive ? 20 : Math.round(55 + factor * 26), upper: isPositive ? 25 : Math.round(68 + factor * 26), lower: isPositive ? 17 : Math.round(45 + factor * 20) },
    { t: "T+90m", baseline: 29, simulated: isPositive ? 19 : Math.round(47 + factor * 20), upper: isPositive ? 24 : Math.round(58 + factor * 22), lower: isPositive ? 16 : Math.round(38 + factor * 16) },
    { t: "T+120m", baseline: 27, simulated: isPositive ? 18 : Math.round(39 + factor * 15), upper: isPositive ? 22 : Math.round(49 + factor * 18), lower: isPositive ? 15 : Math.round(31 + factor * 12) },
  ];

  const graphNodes = buildScenarioGraph(prompt, trigger, location, isPositive, domainDistributions);

  const compositeP50 = Math.round(compositeSamples[Math.floor(iterations * 0.5)]);
  const compositeP10 = Math.round(compositeSamples[Math.floor(iterations * 0.1)]);
  const compositeP90 = Math.round(compositeSamples[Math.floor(iterations * 0.9)]);
  const exceedanceProb = Number(
    ((compositeSamples.filter((v) => v >= 75).length / iterations) * 100).toFixed(1)
  );

  return {
    id: `SIM-${seed.toString().slice(0, 5)}`,
    timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    prompt,
    location,
    timeWindow,
    trigger,
    severity,
    iterations,
    isPositiveIntervention: isPositive,
    compositeStats: {
      lowBound: compositeP10,
      medianOutcome: compositeP50,
      highBound: compositeP90,
      exceedanceProb,
    },
    domains: domainDistributions,
    bins,
    timeSeries,
    graph: graphNodes,
    narrative: buildPlainLanguageSynthesis(
      prompt,
      location,
      timeWindow,
      isPositive,
      domainDistributions,
      compositeP50,
      exceedanceProb,
      iterations
    ),
  };
}

function buildScenarioGraph(prompt, trigger, location, isPositive, domains) {
  const nodes = [
    {
      id: "n1",
      order: 0,
      domain: "trigger",
      label: trigger.length > 34 ? `${trigger.slice(0, 32)}…` : trigger,
      fullTitle: prompt,
      x: 14,
      y: 50,
      metricBaseline: "Normal Operations",
      metricSimulated: location,
      delay: "T+0 min",
      impactPct: isPositive ? "-35% stress" : "+100% shock",
      summary: `Primary intervention applied at ${location}. Acts as the root perturbation node in the NetworkX directed acyclic graph.`,
    },
    {
      id: "n2",
      order: 1,
      domain: "transport",
      label: isPositive ? "Transit Modal Shift" : "Corridor Rerouting & Queue",
      fullTitle: "1st-Order Mobility & Flow Redistribution",
      x: 39,
      y: 23,
      metricBaseline: `${domains.transport.baseline} min`,
      metricSimulated: `${domains.transport.p50} min`,
      delay: "T+6 min",
      impactPct: `${domains.transport.deltaPct > 0 ? "+" : ""}${domains.transport.deltaPct}%`,
      summary: domains.transport.headline,
    },
    {
      id: "n3",
      order: 1,
      domain: "behavior",
      label: isPositive ? "Commuter Route Comfort" : "Queue Fatigue & Detours",
      fullTitle: "1st-Order Crowd & Behavioral Adaptation",
      x: 39,
      y: 77,
      metricBaseline: `${domains.behavior.baseline}%`,
      metricSimulated: `${domains.behavior.p50}%`,
      delay: "T+9 min",
      impactPct: `${domains.behavior.deltaPct > 0 ? "+" : ""}${domains.behavior.deltaPct}%`,
      summary: domains.behavior.headline,
    },
    {
      id: "n4",
      order: 2,
      domain: "environment",
      label: isPositive ? "Micro-Climate Cooling" : "Idling Emissions & Noise",
      fullTitle: "2nd-Order Environmental & Acoustic Shift",
      x: 66,
      y: 21,
      metricBaseline: `${domains.environment.baseline} AQI`,
      metricSimulated: `${domains.environment.p50} AQI`,
      delay: "T+22 min",
      impactPct: `${domains.environment.deltaPct > 0 ? "+" : ""}${domains.environment.deltaPct}%`,
      summary: domains.environment.headline,
    },
    {
      id: "n5",
      order: 2,
      domain: "health",
      label: isPositive ? "Thermal & Air Relief" : "Facility Overcrowding",
      fullTitle: "2nd-Order Density & Hygiene Thresholds",
      x: 66,
      y: 78,
      metricBaseline: "68% capacity",
      metricSimulated: isPositive ? "54% capacity" : "93% capacity",
      delay: "T+28 min",
      impactPct: isPositive ? "-14%" : "+25%",
      summary: "Secondary convergence of diverted pedestrian/vehicle volume into adjacent corridors.",
    },
    {
      id: "n6",
      order: 3,
      domain: "health",
      label: isPositive ? "EMS Corridor Resilience" : "Emergency Access Delay",
      fullTitle: "3rd-Order Public Safety & Emergency Response",
      x: 88,
      y: 50,
      metricBaseline: `${domains.health.baseline} min`,
      metricSimulated: `${domains.health.p50} min`,
      delay: "T+45 min",
      impactPct: `${domains.health.deltaPct > 0 ? "+" : ""}${domains.health.deltaPct}%`,
      summary: domains.health.headline,
    },
  ];

  const edges = [
    { from: "n1", to: "n2", weight: 0.88, order: 1, label: "w=0.88" },
    { from: "n1", to: "n3", weight: 0.81, order: 1, label: "w=0.81" },
    { from: "n2", to: "n4", weight: 0.74, order: 2, label: "w=0.74" },
    { from: "n2", to: "n5", weight: 0.69, order: 2, label: "w=0.69" },
    { from: "n3", to: "n5", weight: 0.79, order: 2, label: "w=0.79" },
    { from: "n4", to: "n6", weight: 0.62, order: 3, label: "w=0.62" },
    { from: "n5", to: "n6", weight: 0.85, order: 3, label: "w=0.85" },
  ];

  return { nodes, edges };
}

function buildPlainLanguageSynthesis(
  prompt,
  location,
  timeWindow,
  isPositive,
  domains,
  medianRisk,
  exceedanceProb,
  iterations
) {
  if (isPositive) {
    return `Across ${iterations.toLocaleString()} Monte Carlo trials for "${prompt}" at ${location} (${timeWindow}), systemic stress drops to a typical composite index of ${medianRisk}/100. 1st-order improvements in ${domains.transport.shortName} (${domains.transport.p50} min delay vs. ${domains.transport.baseline} min baseline) propagate into 2nd-order air quality gains (${domains.environment.p50} AQI) and stronger emergency corridor clearance (${domains.health.p50} min).`;
  }
  return `Across ${iterations.toLocaleString()} Monte Carlo trials for "${prompt}" at ${location} (${timeWindow}), the system reaches a typical composite stress index of ${medianRisk}/100, with a ${exceedanceProb}% probability of breaching critical safety thresholds (>75/100). Initial 1st-order bottlenecks in ${domains.transport.shortName} (${domains.transport.baseline} → ${domains.transport.p50} min) trigger behavioral queue fatigue (${domains.behavior.p50}% compliance), cascading into 2nd-order emission spikes (${domains.environment.p50} AQI) and 3rd-order emergency response delays (${domains.health.p50} min).`;
}

// ============================================================================
// MAIN APPLICATION COMPONENT (WITH DEVICE-ISOLATED PASSWORD AUTH GATE)
// ============================================================================

export function App() {
  const [currentUser, setCurrentUser] = useState(() => {
    try {
      const sessionRaw = localStorage.getItem(ACTIVE_SESSION_KEY);
      if (!sessionRaw) return null;
      const session = JSON.parse(sessionRaw);
      const registry = loadUsersRegistry();
      return registry.find((u) => u.id === session.userId) || null;
    } catch {
      return null;
    }
  });

  const [workspace, setWorkspace] = useState(() =>
    currentUser ? loadUserWorkspace(currentUser.id) : null
  );

  useEffect(() => {
    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.head.appendChild(link);
    }
    link.type = "image/svg+xml";
    link.href = VYRON_FAVICON_DATA_URI;
    document.title = "VYRON: Every Decision Has a Consequence";
  }, []);

  useEffect(() => {
    if (currentUser && workspace) {
      saveUserWorkspace(currentUser.id, workspace);
    }
  }, [currentUser, workspace]);

  const handleAuthenticated = (userRecord) => {
    const userWorkspace = loadUserWorkspace(userRecord.id);
    try {
      localStorage.setItem(
        ACTIVE_SESSION_KEY,
        JSON.stringify({ userId: userRecord.id, loggedInAt: Date.now() })
      );
    } catch {
      // Ignore storage errors
    }
    setCurrentUser(userRecord);
    setWorkspace(userWorkspace);
    setActiveTab("Command Center");
    setGuardrailNotice(null);
    setSelectedNodeId("n1");
  };

  const handleLogout = () => {
    try {
      localStorage.removeItem(ACTIVE_SESSION_KEY);
    } catch {
      // Ignore storage errors
    }
    setCurrentUser(null);
    setWorkspace(null);
    setSidebarOpen(false);
    setGuardrailNotice(null);
  };

  const [activeTab, setActiveTab] = useState("Command Center");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [guardrailNotice, setGuardrailNotice] = useState(null);
  const [isSimulating, setIsSimulating] = useState(false);
  const [selectedNodeId, setSelectedNodeId] = useState("n1");
  const [orderFilter, setOrderFilter] = useState("all");
  const [domainFilter, setDomainFilter] = useState("all");
  const [apiEndpoint, setApiEndpoint] = useState("http://localhost:8000/api/v1/simulate");
  const [settingsSaved, setSettingsSaved] = useState(false);

  if (!currentUser || !workspace) {
    return (
      <>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:wght@500;600;700&display=swap');
          .font-serif-display { font-family: 'Playfair Display', Georgia, serif; }
        `}</style>
        <AuthGateScreen onAuthenticated={handleAuthenticated} />
      </>
    );
  }

  const updateWorkspace = (updater) => {
    setWorkspace((prev) =>
      typeof updater === "function" ? updater(prev) : { ...prev, ...updater }
    );
  };

  const promptInput = workspace.promptInput;
  const setPromptInput = (val) => {
    const nextVal = typeof val === "function" ? val(workspace.promptInput) : val;
    updateWorkspace({ promptInput: nextVal });
  };

  const simConfig = workspace.simConfig;
  const setSimConfig = (updater) => {
    updateWorkspace((prev) => ({
      ...prev,
      simConfig:
        typeof updater === "function" ? updater(prev.simConfig) : { ...prev.simConfig, ...updater },
    }));
  };

  const history = workspace.history;
  const currentResult = workspace.history[0];

  const triggerSimulationFromPrompt = (rawPrompt, overridePreset = null) => {
    const query = (rawPrompt ?? promptInput).trim();
    if (!query) {
      setGuardrailNotice({
        type: "warning",
        title: "Awaiting Scenario Hypothesis",
        message: "Enter a decision scenario or select one of the calibrated urban/campus scenarios below.",
      });
      return;
    }

    const intent = analyzePromptIntent(query);
    if (!intent.isValid) {
      setGuardrailNotice({
        type: "guardrail",
        title: "NLP Intent Guardrail — Non-Systemic Query Redirected",
        message: intent.reason,
      });
      return;
    }

    setGuardrailNotice(null);
    setIsSimulating(true);

    const nextConfig = {
      prompt: query,
      location: overridePreset?.location || intent.location,
      timeWindow: overridePreset?.timeWindow || intent.timeWindow,
      trigger: overridePreset?.trigger || intent.trigger,
      severity: overridePreset?.severity || intent.severity,
      iterations: simConfig.iterations || workspace.defaultRuns,
      selectedDomains: overridePreset?.domains || simConfig.selectedDomains,
    };

    setTimeout(() => {
      const result = runMonteCarloSimulation(nextConfig);
      updateWorkspace((prev) => ({
        ...prev,
        promptInput: query,
        simConfig: nextConfig,
        history: [result, ...prev.history.slice(0, 9)],
      }));
      setSelectedNodeId("n1");
      setIsSimulating(false);
      setActiveTab("Analytics");
    }, 450);
  };

  const runConfiguredSimulation = () => {
    if (simConfig.selectedDomains.length === 0) {
      setGuardrailNotice({
        type: "warning",
        title: "Select at least one simulation domain",
        message: "Enable at least one system domain (Transportation, Environment, Health, or Behavior) to compute cross-domain propagation.",
      });
      return;
    }
    setGuardrailNotice(null);
    setIsSimulating(true);
    setTimeout(() => {
      const result = runMonteCarloSimulation(simConfig);
      updateWorkspace((prev) => ({
        ...prev,
        promptInput: simConfig.prompt,
        history: [result, ...prev.history.slice(0, 9)],
      }));
      setSelectedNodeId("n1");
      setIsSimulating(false);
      setActiveTab("Analytics");
    }, 450);
  };

  const navItems = [
    { label: "Command Center", icon: LayoutDashboard, badge: null },
    { label: "Scenario Simulator", icon: BrainCircuit, badge: "NLP" },
    { label: "Dependency Network", icon: GitBranch, badge: "3-Order" },
    { label: "Analytics", icon: Activity, badge: `N=${currentResult.iterations}` },
    { label: "Impact Reports", icon: FileText, badge: null },
  ];

  const userInitials = currentUser.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="min-h-screen flex bg-[#f3f2ec] text-[#242b26] font-['DM_Sans',sans-serif] selection:bg-[#315b48] selection:text-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:wght@500;600;700&display=swap');
        .font-serif-display { font-family: 'Playfair Display', Georgia, serif; }
        @media print {
          .no-print { display: none !important; }
          .print-full { margin-left: 0 !important; width: 100% !important; }
        }
      `}</style>

      {/* Mobile Sidebar Backdrop */}
      {sidebarOpen && (
        <button
          onClick={() => setSidebarOpen(false)}
          aria-label="Close navigation"
          className="fixed inset-0 z-30 bg-[#19231b]/35 lg:hidden"
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`no-print fixed inset-y-0 left-0 z-40 w-[268px] bg-[#eaece5] border-r border-[#d8dbd1] flex flex-col px-5 py-6 transition-transform duration-200 lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-start justify-between gap-2 px-1 pb-7">
          <VyronLogo size={42} showWordmark={true} />
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden p-1 text-[#646e65] hover:text-[#242b26]"
          >
            <X size={18} />
          </button>
        </div>

        <div className="px-2 pb-3 text-[9px] font-bold tracking-[1.5px] text-[#858b80] uppercase">
          OBSERVATORY DESK
        </div>

        <nav className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.label;
            return (
              <button
                key={item.label}
                onClick={() => {
                  setActiveTab(item.label);
                  setSidebarOpen(false);
                }}
                className={`w-full min-h-[44px] relative flex items-center justify-between px-3 rounded-[3px] text-[12px] transition-colors ${
                  isActive
                    ? "bg-[#dce5db] text-[#203e31] font-bold border border-[#cbd8ca]"
                    : "text-[#5f6960] hover:bg-[#315b48]/[0.06] hover:text-[#203e31] border border-transparent"
                }`}
              >
                <span className="flex items-center gap-3">
                  <Icon size={17} strokeWidth={1.8} />
                  <span>{item.label}</span>
                </span>
                {item.badge && (
                  <span
                    className={`text-[9px] px-1.5 py-0.5 rounded-[2px] font-semibold ${
                      isActive
                        ? "bg-[#315b48] text-white"
                        : "bg-[#dfe3d8] text-[#5c665d]"
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
                {isActive && (
                  <span className="w-[3px] absolute top-2 right-0 bottom-2 bg-[#315b48]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Monte Carlo Engine Live Telemetry Box */}
        <div className="mt-7 p-3.5 rounded-[3px] border border-[#d4d9cf] bg-[#f0f1eb]">
          <div className="flex items-center gap-2 text-[9px] font-bold tracking-[0.9px] text-[#5e6b60]">
            <span className="w-2 h-2 rounded-full bg-[#4a8262] animate-pulse" />
            <span>MONTE CARLO ENGINE</span>
            <span className="ml-auto text-[#315b48]">ENCRYPTED</span>
          </div>

          <p className="mt-2.5 text-[11px] leading-[1.6] text-[#6a736a]">
            Private workspace isolated to <strong>{currentUser.name}</strong>.
          </p>

          <div className="h-[3px] mt-3 bg-[#d8ddd3] overflow-hidden rounded-full">
            <div className="h-full w-[88%] bg-[#315b48]" />
          </div>

          <div className="mt-2.5 flex items-center justify-between text-[9px] text-[#838a80] tracking-[0.4px]">
            <span>RUN ID: {currentResult.id}</span>
            <span>{currentResult.iterations} TRIALS</span>
          </div>
        </div>

        <div className="mt-auto pt-4 space-y-2">
          <button
            onClick={() => {
              setActiveTab("Settings");
              setSidebarOpen(false);
            }}
            className={`w-full min-h-[40px] flex items-center gap-3 px-3 rounded-[3px] text-[12px] transition-colors ${
              activeTab === "Settings"
                ? "bg-[#dce5db] text-[#203e31] font-bold border border-[#cbd8ca]"
                : "text-[#5f6960] hover:bg-[#315b48]/[0.06]"
            }`}
          >
            <Settings size={17} />
            <span>Account & Engine Settings</span>
          </button>

          {/* Signed-In User Card + Explicit Sign Out */}
          <div className="pt-3 border-t border-[#d5d9d0] flex items-center justify-between gap-2 px-1">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-8 h-8 rounded-full bg-[#315b48] text-white grid place-items-center font-serif-display font-bold text-xs border border-[#c8d2c7] shrink-0">
                {userInitials}
              </div>
              <div className="min-w-0">
                <strong className="block text-[11px] tracking-[0.2px] text-[#242b26] truncate">
                  {currentUser.name}
                </strong>
                <span className="block text-[9.5px] text-[#6d766d] truncate">
                  {currentUser.role}
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={handleLogout}
              title="Sign out and lock workspace"
              className="px-2.5 py-1.5 rounded-[2px] border border-[#d6c9b8] bg-[#f6efe6] hover:bg-[#eddcc8] text-[#8b5a2b] text-[10px] font-bold flex items-center gap-1 shrink-0 transition-colors"
            >
              <LogOut size={12} />
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="print-full flex-1 lg:ml-[268px] min-w-0 flex flex-col">
        {/* TOPBAR */}
        <header className="no-print sticky top-0 z-20 h-[66px] px-5 lg:px-10 border-b border-[#dedfd7] bg-[#f3f2ec]/95 backdrop-blur-sm flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <button
              onClick={() => setSidebarOpen(true)}
              aria-label="Open menu"
              className="lg:hidden p-1.5 text-[#315b48] hover:bg-[#e5e8df] rounded-[3px]"
            >
              <Menu size={21} />
            </button>

            <div className="hidden sm:block shrink-0">
              <VyronLogo size={30} showWordmark={false} />
            </div>

            <div className="flex items-center gap-2 text-[11px] truncate">
              <span className="text-[#315b48] font-bold tracking-[0.8px] truncate">
                VYRON: Every Decision Has a Consequence
              </span>
              <ChevronRight size={14} className="text-[#a1a69c] shrink-0" />
              <strong className="text-[#2b342c] font-semibold truncate">
                {activeTab}
              </strong>
            </div>
          </div>

          <div className="flex items-center gap-2.5 sm:gap-3.5 shrink-0">
            <div className="hidden md:flex items-center gap-2 px-2.5 py-1 rounded-[2px] bg-[#eaece4] border border-[#d8dbd1] text-[10px] font-semibold text-[#354238]">
              <Lock size={11} className="text-[#315b48]" />
              <span>{currentUser.name}</span>
            </div>

            <button
              onClick={() => setActiveTab("Scenario Simulator")}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[2px] bg-[#315b48] hover:bg-[#203e31] text-white text-[11px] font-semibold transition-colors"
            >
              <Play size={12} />
              New Simulation
            </button>

            <button
              type="button"
              onClick={handleLogout}
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-[2px] border border-[#d8dbd1] bg-[#faf9f5] hover:bg-[#f6efe6] hover:border-[#d6c9b8] text-[#5c665d] hover:text-[#8b5a2b] text-[10.5px] font-bold transition-colors"
            >
              <LogOut size={12} />
              <span className="hidden sm:inline">Sign Out</span>
            </button>
          </div>
        </header>

        {/* SIMULATION LOADING OVERLAY BANNER */}
        {isSimulating && (
          <div className="bg-[#203e31] text-white px-6 py-3 flex items-center justify-center gap-3 text-xs tracking-wide">
            <RefreshCw size={15} className="animate-spin text-[#d6c29d]" />
            <span>
              Executing NLP variable extraction & running{" "}
              <strong>{simConfig.iterations.toLocaleString()} Monte Carlo</strong>{" "}
              iterations for <strong>{currentUser.name}</strong>...
            </span>
          </div>
        )}

        {/* VIEW ROUTER */}
        <div className="flex-1 w-full max-w-[1440px] mx-auto px-5 lg:px-10 py-8">
          {activeTab === "Command Center" && (
            <CommandCenterView
              activeUser={currentUser}
              riskAlertThreshold={workspace.riskAlertThreshold}
              promptInput={promptInput}
              setPromptInput={setPromptInput}
              guardrailNotice={guardrailNotice}
              setGuardrailNotice={setGuardrailNotice}
              onRunPrompt={triggerSimulationFromPrompt}
              currentResult={currentResult}
              history={history}
              onSelectHistory={(item) => {
                updateWorkspace((prev) => ({
                  ...prev,
                  history: [item, ...prev.history.filter((h) => h.id !== item.id)],
                }));
                setActiveTab("Analytics");
              }}
              onNavigate={setActiveTab}
            />
          )}

          {activeTab === "Scenario Simulator" && (
            <ScenarioSimulatorView
              activeUser={currentUser}
              simConfig={simConfig}
              setSimConfig={setSimConfig}
              guardrailNotice={guardrailNotice}
              setGuardrailNotice={setGuardrailNotice}
              onRun={runConfiguredSimulation}
              onSelectPreset={(preset) => {
                setSimConfig((prev) => ({
                  ...prev,
                  prompt: preset.prompt,
                  location: preset.location,
                  timeWindow: preset.timeWindow,
                  trigger: preset.trigger,
                  severity: preset.severity,
                  selectedDomains: preset.domains,
                }));
                setPromptInput(preset.prompt);
                setGuardrailNotice(null);
              }}
            />
          )}

          {activeTab === "Dependency Network" && (
            <DependencyNetworkView
              result={currentResult}
              selectedNodeId={selectedNodeId}
              setSelectedNodeId={setSelectedNodeId}
              orderFilter={orderFilter}
              setOrderFilter={setOrderFilter}
              domainFilter={domainFilter}
              setDomainFilter={setDomainFilter}
              onNavigate={setActiveTab}
            />
          )}

          {activeTab === "Analytics" && (
            <AnalyticsResultsView
              activeUser={currentUser}
              result={currentResult}
              onNavigate={setActiveTab}
              onReRun={(iters) => {
                const updated = runMonteCarloSimulation({
                  ...simConfig,
                  prompt: currentResult.prompt,
                  location: currentResult.location,
                  timeWindow: currentResult.timeWindow,
                  trigger: currentResult.trigger,
                  iterations: iters,
                });
                updateWorkspace((prev) => ({
                  ...prev,
                  simConfig: { ...prev.simConfig, iterations: iters },
                  history: [updated, ...prev.history.slice(0, 9)],
                }));
              }}
            />
          )}

          {activeTab === "Impact Reports" && (
            <ImpactReportView
              activeUser={currentUser}
              result={currentResult}
              riskAlertThreshold={workspace.riskAlertThreshold}
              onNavigate={setActiveTab}
            />
          )}

          {activeTab === "Settings" && (
            <SettingsView
              activeUser={currentUser}
              onUserUpdated={(updatedUser) => setCurrentUser(updatedUser)}
              onLogout={handleLogout}
              apiEndpoint={apiEndpoint}
              setApiEndpoint={setApiEndpoint}
              defaultRuns={workspace.defaultRuns}
              setDefaultRuns={(val) => {
                updateWorkspace((prev) => ({
                  ...prev,
                  defaultRuns: val,
                  simConfig: { ...prev.simConfig, iterations: val },
                }));
              }}
              riskAlertThreshold={workspace.riskAlertThreshold}
              setRiskAlertThreshold={(val) => {
                updateWorkspace({ riskAlertThreshold: val });
              }}
              saved={settingsSaved}
              onSave={() => {
                setSettingsSaved(true);
                setTimeout(() => setSettingsSaved(false), 2500);
              }}
            />
          )}
        </div>
      </main>
    </div>
  );
}

// ============================================================================
// DEVICE-ISOLATED PASSWORD AUTHENTICATION GATE (SIGN IN / CREATE ACCOUNT)
// ============================================================================

function AuthGateScreen({ onAuthenticated }) {
  const [mode, setMode] = useState("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("Urban Systems Analyst");
  const [organization, setOrganization] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const passwordStrength = useMemo(() => {
    if (!password) return { label: "", score: 0, color: "#cbd5e1" };
    let score = 0;
    if (password.length >= 6) score += 1;
    if (password.length >= 10) score += 1;
    if (/[A-Z]/.test(password) && /[0-9]/.test(password)) score += 1;
    if (/[^A-Za-z0-9]/.test(password)) score += 1;
    if (score <= 1) return { label: "Weak (min 6 chars)", score: 1, color: "#dc2626" };
    if (score === 2) return { label: "Moderate", score: 2, color: "#d97706" };
    return { label: "Strong", score: 3, color: "#315b48" };
  }, [password]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    const cleanEmail = email.trim().toLowerCase();
    if (!cleanEmail || !password) {
      setErrorMsg("Please enter your registered email/username and password.");
      return;
    }

    setIsSubmitting(true);
    try {
      const registry = loadUsersRegistry();
      const userRecord = registry.find((u) => u.email.toLowerCase() === cleanEmail);
      if (!userRecord) {
        setErrorMsg("Invalid credentials. Please verify your email and password or create a new account.");
        setIsSubmitting(false);
        return;
      }

      const candidateHash = await hashPasswordWithSalt(password, userRecord.salt);
      if (candidateHash !== userRecord.passwordHash) {
        setErrorMsg("Invalid credentials. Please verify your email and password or create a new account.");
        setIsSubmitting(false);
        return;
      }

      onAuthenticated(userRecord);
    } catch {
      setErrorMsg("Authentication error. Please try again.");
      setIsSubmitting(false);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    const cleanName = name.trim();
    const cleanEmail = email.trim().toLowerCase();

    if (!cleanName || !cleanEmail) {
      setErrorMsg("Full name and email/username are required.");
      return;
    }
    if (password.length < 6) {
      setErrorMsg("Password must be at least 6 characters long.");
      return;
    }
    if (password !== confirmPassword) {
      setErrorMsg("Passwords do not match. Please confirm your password.");
      return;
    }

    setIsSubmitting(true);
    try {
      const registry = loadUsersRegistry();
      const exists = registry.some((u) => u.email.toLowerCase() === cleanEmail);
      if (exists) {
        setErrorMsg("An account with this email/username already exists on this device. Please sign in.");
        setIsSubmitting(false);
        return;
      }

      const salt = generateRandomSalt(16);
      const passwordHash = await hashPasswordWithSalt(password, salt);

      const newUser = {
        id: `usr_${Date.now()}_${generateRandomSalt(4)}`,
        name: cleanName,
        email: cleanEmail,
        role: role.trim() || "Systems Researcher",
        organization: organization.trim() || "Independent Observatory Desk",
        salt,
        passwordHash,
        createdAt: new Date().toISOString(),
      };

      saveUsersRegistry([...registry, newUser]);
      onAuthenticated(newUser);
    } catch {
      setErrorMsg("Could not create account. Please try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f3f2ec] text-[#242b26] font-['DM_Sans',sans-serif] flex flex-col lg:flex-row">
      {/* Left Observatory Brand Panel */}
      <div className="lg:w-[46%] bg-[#081220] text-white p-8 sm:p-12 lg:p-14 flex flex-col justify-between relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 25%, #2dd4bf 0%, transparent 45%), radial-gradient(circle at 80% 75%, #f59e0b 0%, transparent 45%)",
          }}
        />

        <div className="relative z-10">
          <div className="flex items-center gap-4">
            <VyronLogo size={64} showWordmark={false} />
            <div>
              <h1 className="font-serif-display text-3xl sm:text-4xl font-bold tracking-[3px] bg-gradient-to-r from-[#38bdf8] via-[#2dd4bf] to-[#e2e8f0] bg-clip-text text-transparent">
                VYRON
              </h1>
              <p className="text-[10.5px] font-bold tracking-[1.6px] text-[#cbd5e1] uppercase mt-1">
                EVERY DECISION HAS A CONSEQUENCE
              </p>
            </div>
          </div>

          <div className="mt-12 space-y-4 max-w-md">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-[2px] bg-white/10 border border-white/15 text-[#fbbf24] text-[10px] font-bold tracking-[1.2px] uppercase">
              <ShieldCheck size={13} /> Private Multi-Domain Simulation Platform
            </span>
            <h2 className="font-serif-display text-3xl sm:text-4xl font-medium leading-[1.2] text-white">
              Simulate ripple effects before real-world execution.
            </h2>
            <p className="text-[13px] leading-[1.8] text-[#94a3b8]">
              Test hypothetical decisions across Transportation, Environment, Public Health, and Human Behavior using NLP intent guardrails, weighted NetworkX causal graphs, and Monte Carlo simulations.
            </p>
          </div>
        </div>

        <div className="relative z-10 mt-12 pt-6 border-t border-white/10 space-y-2.5 text-[11.5px] text-[#cbd5e1]">
          <div className="flex items-center gap-2.5">
            <Lock size={14} className="text-[#2dd4bf] shrink-0" />
            <span>
              <strong>Strict Account Isolation:</strong> Password-protected SHA-256 credentials keep every user's simulation runs and scenarios completely private.
            </span>
          </div>
        </div>
      </div>

      {/* Right Authentication Form */}
      <div className="flex-1 flex items-center justify-center p-6 sm:p-10 lg:p-14">
        <div className="w-full max-w-md bg-[#faf9f5] border border-[#dedfd7] rounded-[4px] p-7 sm:p-9 shadow-[0_8px_30px_rgba(36,43,38,0.05)]">
          {/* Mode Switch Tabs */}
          <div className="grid grid-cols-2 gap-1 p-1 rounded-[3px] bg-[#eaece4] border border-[#d8dbd1] mb-6">
            <button
              type="button"
              onClick={() => {
                setMode("login");
                setErrorMsg("");
              }}
              className={`py-2 rounded-[2px] text-[11.5px] font-bold transition-colors ${
                mode === "login"
                  ? "bg-[#315b48] text-white shadow-sm"
                  : "text-[#5a665c] hover:text-[#242b26]"
              }`}
            >
              Sign In
            </button>
            <button
              type="button"
              onClick={() => {
                setMode("register");
                setErrorMsg("");
              }}
              className={`py-2 rounded-[2px] text-[11.5px] font-bold transition-colors ${
                mode === "register"
                  ? "bg-[#315b48] text-white shadow-sm"
                  : "text-[#5a665c] hover:text-[#242b26]"
              }`}
            >
              Create Account
            </button>
          </div>

          <div className="mb-5">
            <h3 className="font-serif-display text-2xl font-semibold text-[#242b26]">
              {mode === "login" ? "Access Your Observatory" : "Create Personal Account"}
            </h3>
            <p className="text-[11.5px] text-[#6d766d] mt-1">
              {mode === "login"
                ? "Enter your registered email and password to unlock your private workspace."
                : "Register a password-protected account on this device. No other user can open your workspace."}
            </p>
          </div>

          {errorMsg && (
            <div className="mb-4 p-3 rounded-[3px] bg-[#f6efe6] border border-[#e2ceb5] text-[#8b5a2b] text-[11.5px] flex items-start gap-2.5">
              <AlertTriangle size={16} className="shrink-0 mt-0.5" />
              <span>{errorMsg}</span>
            </div>
          )}

          {mode === "login" ? (
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-[10.5px] font-bold text-[#39463c] uppercase mb-1.5">
                  Email or Username
                </label>
                <div className="relative">
                  <Mail
                    size={15}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-[#777e75]"
                  />
                  <input
                    type="text"
                    autoComplete="username"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@organization.org"
                    className="w-full pl-9 pr-3.5 py-2.5 rounded-[2px] border border-[#dedfd7] bg-[#f5f5ef] text-[12.5px] text-[#242b26] focus:outline-none focus:border-[#315b48] focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10.5px] font-bold text-[#39463c] uppercase mb-1.5">
                  Password
                </label>
                <div className="relative">
                  <KeyRound
                    size={15}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-[#777e75]"
                  />
                  <input
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="w-full pl-9 pr-10 py-2.5 rounded-[2px] border border-[#dedfd7] bg-[#f5f5ef] text-[12.5px] text-[#242b26] focus:outline-none focus:border-[#315b48] focus:bg-white"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((s) => !s)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#777e75] hover:text-[#242b26]"
                  >
                    {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 rounded-[2px] bg-[#315b48] hover:bg-[#203e31] disabled:opacity-60 text-white text-[12px] font-bold flex items-center justify-center gap-2 transition-colors"
              >
                <Lock size={14} />
                <span>{isSubmitting ? "Verifying Credentials..." : "Sign In to Workspace"}</span>
              </button>

              <p className="text-center text-[11px] text-[#6d766d] pt-1">
                First time on this device?{" "}
                <button
                  type="button"
                  onClick={() => {
                    setMode("register");
                    setErrorMsg("");
                  }}
                  className="font-bold text-[#315b48] hover:underline"
                >
                  Create a protected account
                </button>
              </p>
            </form>
          ) : (
            <form onSubmit={handleRegister} className="space-y-3.5">
              <div>
                <label className="block text-[10px] font-bold text-[#39463c] uppercase mb-1">
                  Full Name
                </label>
                <div className="relative">
                  <User
                    size={14}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-[#777e75]"
                  />
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g., Aarav Sharma"
                    className="w-full pl-9 pr-3 py-2 rounded-[2px] border border-[#dedfd7] bg-[#f5f5ef] text-[12px] text-[#242b26] focus:outline-none focus:border-[#315b48] focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-[#39463c] uppercase mb-1">
                  Email or Username
                </label>
                <div className="relative">
                  <Mail
                    size={14}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-[#777e75]"
                  />
                  <input
                    type="text"
                    autoComplete="username"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="aarav@organization.org"
                    className="w-full pl-9 pr-3 py-2 rounded-[2px] border border-[#dedfd7] bg-[#f5f5ef] text-[12px] text-[#242b26] focus:outline-none focus:border-[#315b48] focus:bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] font-bold text-[#39463c] uppercase mb-1">
                    Role / Title
                  </label>
                  <input
                    type="text"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full px-3 py-2 rounded-[2px] border border-[#dedfd7] bg-[#f5f5ef] text-[12px] text-[#242b26] focus:outline-none focus:border-[#315b48]"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-[#39463c] uppercase mb-1">
                    Department / Org
                  </label>
                  <input
                    type="text"
                    value={organization}
                    onChange={(e) => setOrganization(e.target.value)}
                    placeholder="Urban Mobility Desk"
                    className="w-full px-3 py-2 rounded-[2px] border border-[#dedfd7] bg-[#f5f5ef] text-[12px] text-[#242b26] focus:outline-none focus:border-[#315b48]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-[#39463c] uppercase mb-1">
                  Create Password (Min 6 Characters)
                </label>
                <div className="relative">
                  <KeyRound
                    size={14}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-[#777e75]"
                  />
                  <input
                    type={showPassword ? "text" : "password"}
                    autoComplete="new-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Create a strong password"
                    className="w-full pl-9 pr-9 py-2 rounded-[2px] border border-[#dedfd7] bg-[#f5f5ef] text-[12px] text-[#242b26] focus:outline-none focus:border-[#315b48] focus:bg-white"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((s) => !s)}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#777e75] hover:text-[#242b26]"
                  >
                    {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
                  </button>
                </div>
                {password && (
                  <div className="mt-1.5 flex items-center justify-between text-[10px]">
                    <div className="flex gap-1 flex-1 max-w-[120px]">
                      {[1, 2, 3].map((lvl) => (
                        <span
                          key={lvl}
                          className="h-1 flex-1 rounded-full"
                          style={{
                            backgroundColor:
                              passwordStrength.score >= lvl
                                ? passwordStrength.color
                                : "#dfe3d8",
                          }}
                        />
                      ))}
                    </div>
                    <span style={{ color: passwordStrength.color }} className="font-bold">
                      {passwordStrength.label}
                    </span>
                  </div>
                )}
              </div>

              <div>
                <label className="block text-[10px] font-bold text-[#39463c] uppercase mb-1">
                  Confirm Password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  autoComplete="new-password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Re-enter password"
                  className="w-full px-3 py-2 rounded-[2px] border border-[#dedfd7] bg-[#f5f5ef] text-[12px] text-[#242b26] focus:outline-none focus:border-[#315b48] focus:bg-white"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 rounded-[2px] bg-[#315b48] hover:bg-[#203e31] disabled:opacity-60 text-white text-[12px] font-bold flex items-center justify-center gap-2 transition-colors"
              >
                <UserPlus size={14} />
                <span>
                  {isSubmitting ? "Encrypting & Creating..." : "Create Private Account"}
                </span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// VIEW 1: COMMAND CENTER
// ============================================================================

function CommandCenterView({
  activeUser,
  riskAlertThreshold,
  promptInput,
  setPromptInput,
  guardrailNotice,
  setGuardrailNotice,
  onRunPrompt,
  currentResult,
  history,
  onSelectHistory,
  onNavigate,
}) {
  const liveIntent = useMemo(() => analyzePromptIntent(promptInput), [promptInput]);

  return (
    <div className="space-y-9">
      {/* Private Authenticated User Dashboard Context Bar */}
      <div className="p-4 rounded-[3px] border border-[#d8dbd1] bg-[#faf9f5] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <VyronLogo size={38} showWordmark={false} />
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[12px] font-bold text-[#242b26]">
                {activeUser.name}'s Private Dashboard
              </span>
              <span className="px-2 py-0.5 rounded-[2px] bg-[#e3eae2] text-[#203e31] text-[9.5px] font-bold">
                {activeUser.role}
              </span>
              <span className="text-[10.5px] text-[#777e75]">
                · {activeUser.organization}
              </span>
            </div>
            <p className="text-[10.5px] text-[#6d766d] mt-0.5">
              Password-protected workspace ({activeUser.email}) · {history.length} saved simulation run{history.length === 1 ? "" : "s"} · Alert threshold {riskAlertThreshold}/100.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-center">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[2px] bg-[#edf1e9] border border-[#cfd9cb] text-[#203e31] text-[10px] font-bold">
            <Lock size={11} /> Account Isolated
          </span>
        </div>
      </div>

      {/* Hero Header */}
      <section className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 text-[#a27c45] text-[10px] font-bold tracking-[1.6px] uppercase mb-3">
            <Sparkles size={14} />
            <span>VYRON: Every Decision Has a Consequence</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-5xl font-semibold text-[#242b26] leading-[1.12] tracking-[-1.2px]">
            Test hypothetical decisions
            <br />
            <span className="text-[#315b48]">before reality pays the cost.</span>
          </h2>
          <p className="mt-4 max-w-2xl text-[13px] leading-[1.8] text-[#6d766d]">
            Describe a decision in plain English. VYRON routes your intent through a systemic guardrail, maps 1st-, 2nd-, and 3rd-order ripples across a weighted dependency graph, and runs repeated Monte Carlo simulations to reveal outcome ranges.
          </p>
        </div>

        <div className="flex items-center gap-3 px-4 py-3 rounded-[3px] border border-[#dedfd7] bg-[#eeefe9] self-start lg:self-end shrink-0">
          <VyronLogo size={34} showWordmark={false} />
          <div>
            <span className="block text-[8.5px] font-bold tracking-[0.9px] text-[#828980] uppercase">
              HYBRID ARCHITECTURE
            </span>
            <strong className="text-[11px] text-[#354137]">
              NLP Router + NetworkX + Monte Carlo
            </strong>
          </div>
        </div>
      </section>

      {/* Natural Language Scenario Prompt Box */}
      <section className="p-6 sm:p-7 rounded-[4px] border border-[#d8dcd2] bg-[#faf9f5] shadow-[0_5px_22px_rgba(38,51,39,0.035)]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-[3px] bg-[#e3eae2] border border-[#d1ddd0] text-[#315b48] grid place-items-center shrink-0">
              <BrainCircuit size={22} />
            </div>
            <div>
              <h3 className="text-[15px] font-bold text-[#2b352d]">
                What hypothetical decision are we testing?
              </h3>
              <p className="text-[11px] text-[#777e75] mt-0.5">
                NLP Intent Router extracts location, timing, and triggers before feeding the simulation graph.
              </p>
            </div>
          </div>

          <div className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-[2px] border border-[#e0d7c7] bg-[#f5f0e7] text-[#8b7046] text-[9px] font-bold tracking-[0.6px] self-start">
            <ShieldCheck size={13} />
            SYSTEMIC GUARDRAIL ACTIVE
          </div>
        </div>

        <textarea
          rows={3}
          value={promptInput}
          onChange={(e) => {
            setPromptInput(e.target.value);
            if (guardrailNotice) setGuardrailNotice(null);
          }}
          placeholder='e.g., "What if the north canteen gate is closed during lunch?"'
          className="w-full p-4 rounded-[3px] border border-[#dfe1d9] bg-[#f6f6f1] text-[13px] leading-[1.7] text-[#242b26] placeholder-[#969c91] focus:outline-none focus:border-[#315b48] focus:bg-white transition-colors"
        />

        {/* Live NLP Variable Extraction Preview Strip */}
        {promptInput.trim().length > 4 && liveIntent.isValid && (
          <div className="mt-3 p-3 rounded-[3px] bg-[#f0f2eb] border border-[#dce1d5] flex flex-wrap items-center gap-x-5 gap-y-2 text-[10.5px] text-[#455247]">
            <span className="font-bold text-[#315b48] uppercase tracking-wider text-[9px]">
              Extracted Variables:
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin size={12} className="text-[#a27c45]" />
              <strong>Location:</strong> {liveIntent.location}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock3 size={12} className="text-[#a27c45]" />
              <strong>Timing:</strong> {liveIntent.timeWindow}
            </span>
            <span className="flex items-center gap-1.5">
              <Sliders size={12} className="text-[#a27c45]" />
              <strong>Trigger:</strong> {liveIntent.trigger}
            </span>
          </div>
        )}

        {/* Guardrail Alert Box */}
        {guardrailNotice && (
          <div
            className={`mt-3 p-4 rounded-[3px] border flex items-start gap-3 text-[11.5px] leading-[1.65] ${
              guardrailNotice.type === "guardrail"
                ? "bg-[#f6efe6] border-[#e2ceb5] text-[#6e522d]"
                : "bg-[#edf1e9] border-[#cfd9cb] text-[#203e31]"
            }`}
          >
            <ShieldAlert size={18} className="shrink-0 mt-0.5 text-[#a27c45]" />
            <div>
              <strong className="block text-[12px] mb-0.5">{guardrailNotice.title}</strong>
              <span>{guardrailNotice.message}</span>
            </div>
          </div>
        )}

        <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <span className="flex items-center gap-2 text-[10.5px] text-[#777e75]">
            <Info size={14} className="text-[#315b48] shrink-0" />
            AI strictly structures parameters; outcomes are computed by NetworkX + Monte Carlo math.
          </span>

          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={() => onNavigate("Scenario Simulator")}
              className="px-3.5 py-2.5 rounded-[2px] border border-[#d6d9cf] bg-[#f3f3ed] hover:bg-[#e7e9e0] text-[#3e4a40] text-[11px] font-semibold transition-colors"
            >
              Configure Parameters
            </button>
            <button
              type="button"
              onClick={() => onRunPrompt(promptInput)}
              className="px-5 py-2.5 rounded-[2px] bg-[#315b48] hover:bg-[#203e31] text-white text-[11px] font-bold flex items-center gap-2 transition-colors"
            >
              Simulate Consequences
              <ArrowUpRight size={15} />
            </button>
          </div>
        </div>

        {/* Preset Scenario Cards */}
        <div className="mt-6 pt-5 border-t border-[#e5e5de]">
          <div className="flex items-center justify-between text-[9px] font-bold tracking-[1px] text-[#778175] uppercase mb-3">
            <span>CALIBRATED BENCHMARK SCENARIOS</span>
            <span className="hidden sm:inline text-[#959b90]">CLICK TO SIMULATE IMMEDIATELY</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {SCENARIO_PRESETS.map((preset) => (
              <button
                key={preset.id}
                onClick={() => {
                  setPromptInput(preset.prompt);
                  onRunPrompt(preset.prompt, preset);
                }}
                className="group p-3.5 rounded-[3px] border border-[#e0e2d9] bg-[#f7f7f2] hover:border-[#8fa38c] hover:bg-[#eff2ea] text-left flex flex-col justify-between transition-all"
              >
                <div>
                  <span className="text-[8.5px] font-bold tracking-[0.8px] text-[#a27c45] uppercase">
                    {preset.category}
                  </span>
                  <strong className="block text-[11.5px] font-bold text-[#2b352d] mt-1 group-hover:text-[#203e31]">
                    {preset.title}
                  </strong>
                </div>
                <div className="mt-3 pt-2 border-t border-[#e7e8e0] flex items-center justify-between text-[9.5px] text-[#6d766d]">
                  <span>{preset.timeWindow.split("(")[0].trim()}</span>
                  <ChevronRight size={14} className="text-[#315b48] group-hover:translate-x-0.5 transition-transform" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Four Coupled Domains Overview */}
      <section>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-4">
          <div>
            <span className="text-[9px] font-bold tracking-[1.4px] text-[#858b80] uppercase">
              COUPLED SYSTEM TOPOLOGY
            </span>
            <h3 className="font-serif-display text-2xl font-semibold text-[#242b26] mt-1">
              Four Interconnected Domains
            </h3>
          </div>
          <button
            onClick={() => onNavigate("Dependency Network")}
            className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#315b48] hover:underline self-start sm:self-auto"
          >
            Inspect 3-Order Dependency Graph <ArrowUpRight size={14} />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {Object.values(DOMAINS).map((dom) => {
            const Icon = dom.icon;
            const liveDomain = currentResult.domains[dom.id];
            return (
              <div
                key={dom.id}
                className="p-5 rounded-[3px] border border-[#dedfd7] bg-[#faf9f5] flex flex-col justify-between hover:border-[#b3c0b0] transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div
                      className="w-9 h-9 rounded-[3px] grid place-items-center"
                      style={{ backgroundColor: dom.softBg, color: dom.accent }}
                    >
                      <Icon size={18} />
                    </div>
                    <span className="text-[9px] font-bold px-2 py-0.5 rounded-[2px] bg-[#f1f2ec] border border-[#e0e2d9] text-[#556156]">
                      Stress {liveDomain.riskScore}/100
                    </span>
                  </div>
                  <h4 className="text-[13px] font-bold text-[#242b26] mt-3.5">{dom.name}</h4>
                  <p className="text-[11px] leading-[1.65] text-[#737c72] mt-1.5">
                    {dom.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#ecece5] flex items-center justify-between text-[10px]">
                  <span className="text-[#828980]">Baseline:</span>
                  <strong className="text-[#354137]">{dom.baselineLabel}</strong>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Recent Runs & Architectural Highlights */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2 p-5 sm:p-6 rounded-[3px] border border-[#dedfd7] bg-[#faf9f5]">
          <div className="flex items-center justify-between mb-3">
            <div>
              <span className="text-[9px] font-bold tracking-[1.4px] text-[#858b80] uppercase">
                {activeUser.name.toUpperCase()} · PRIVATE SIMULATION LEDGER
              </span>
              <h3 className="font-serif-display text-xl font-semibold text-[#242b26] mt-0.5">
                Recent Hypothetical Runs
              </h3>
            </div>
            <button
              onClick={() => onNavigate("Analytics")}
              className="text-[11px] font-bold text-[#315b48] flex items-center gap-1"
            >
              Open Active Run <ArrowUpRight size={14} />
            </button>
          </div>

          <div className="divide-y divide-[#e8e9e2]">
            {history.map((run) => (
              <div
                key={run.id}
                className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
              >
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-[2px] bg-[#e3eae2] text-[#203e31]">
                      {run.id}
                    </span>
                    <strong className="text-[12px] font-bold text-[#2b352d] truncate">
                      {run.prompt}
                    </strong>
                  </div>
                  <span className="block text-[10px] text-[#777e75] mt-1">
                    {run.location} · {run.iterations.toLocaleString()} Monte Carlo runs · Typical Risk{" "}
                    <strong>{run.compositeStats.medianOutcome}/100</strong>
                  </span>
                </div>

                <button
                  onClick={() => onSelectHistory(run)}
                  className="px-3 py-1.5 rounded-[2px] border border-[#d6d9cf] bg-[#f4f4ee] hover:bg-[#e3eae2] text-[10px] font-bold text-[#315b48] self-start sm:self-center shrink-0"
                >
                  Inspect Results
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="p-6 rounded-[3px] border border-[#d6ddd1] bg-[#e7ebe2] flex flex-col justify-between">
          <div>
            <div className="mb-4">
              <VyronLogo size={42} showWordmark={false} />
            </div>
            <span className="text-[9px] font-bold tracking-[1.4px] text-[#6d796d] uppercase">
              VYRON: Every Decision Has a Consequence
            </span>
            <h3 className="font-serif-display text-2xl font-semibold text-[#242b26] mt-2 leading-snug">
              Beyond single guesses.
              <br />
              <span className="text-[#315b48]">Mathematical causality.</span>
            </h3>
            <p className="mt-3 text-[11.5px] leading-[1.75] text-[#5e6a5f]">
              LLMs only extract structured intent variables. Every ripple metric is computed by a weighted NetworkX dependency graph and stochastic Monte Carlo trials—exposing 2nd- and 3rd-order bottlenecks across coupled domains.
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-[#cfd7c9] flex items-center justify-between text-[9.5px] font-bold tracking-[1px] text-[#315b48]">
            <span>NLP → NETWORKX → MONTE CARLO</span>
            <ArrowUpRight size={16} />
          </div>
        </div>
      </section>
    </div>
  );
}

// ============================================================================
// VIEW 2: SCENARIO SIMULATOR
// ============================================================================

function ScenarioSimulatorView({
  activeUser,
  simConfig,
  setSimConfig,
  guardrailNotice,
  setGuardrailNotice,
  onRun,
  onSelectPreset,
}) {
  const toggleDomain = (domainId) => {
    setSimConfig((prev) => {
      const exists = prev.selectedDomains.includes(domainId);
      return {
        ...prev,
        selectedDomains: exists
          ? prev.selectedDomains.filter((d) => d !== domainId)
          : [...prev.selectedDomains, domainId],
      };
    });
  };

  return (
    <div className="max-w-4xl mx-auto space-y-7">
      <div>
        <div className="flex items-center gap-2 text-[#a27c45] text-[9.5px] font-bold tracking-[1.6px] uppercase">
          <BrainCircuit size={14} />
          <span>{activeUser.name.toUpperCase()} · PARAMETERIZED EXPERIMENT DESIGN</span>
        </div>
        <h2 className="font-serif-display text-3xl sm:text-4xl font-semibold text-[#242b26] mt-2">
          Configure Multi-Domain Simulation
        </h2>
        <p className="mt-2 text-[12.5px] text-[#6d766d] leading-relaxed">
          Fine-tune extracted NLP variables, adjust perturbation severity, choose Monte Carlo sample size, and select which interconnected domains participate in the graph cascade.
        </p>
      </div>

      <div className="p-6 sm:p-8 rounded-[3px] border border-[#dedfd7] bg-[#faf9f5] shadow-[0_5px_22px_rgba(38,51,39,0.03)] space-y-6">
        {/* Preset Bar */}
        <div>
          <label className="block text-[10px] font-bold tracking-[1px] text-[#777e75] uppercase mb-2.5">
            Load Scenario Template
          </label>
          <div className="flex flex-wrap gap-2">
            {SCENARIO_PRESETS.map((preset) => (
              <button
                key={preset.id}
                type="button"
                onClick={() => onSelectPreset(preset)}
                className="px-3 py-1.5 rounded-[2px] border border-[#d8dbd1] bg-[#f4f4ee] hover:bg-[#e3eae2] hover:border-[#9eb19b] text-[10.5px] font-semibold text-[#39473b] transition-colors"
              >
                {preset.title}
              </button>
            ))}
          </div>
        </div>

        {/* Prompt Hypothesis */}
        <div>
          <label className="block text-[11px] font-bold text-[#2f3b31] mb-2">
            1. Hypothetical Decision Statement
          </label>
          <textarea
            rows={3}
            value={simConfig.prompt}
            onChange={(e) => {
              setSimConfig((prev) => ({ ...prev, prompt: e.target.value }));
              if (guardrailNotice) setGuardrailNotice(null);
            }}
            className="w-full p-3.5 rounded-[2px] border border-[#dedfd7] bg-[#f5f5ef] text-[12.5px] text-[#242b26] focus:outline-none focus:border-[#315b48] focus:bg-white"
          />
        </div>

        {/* Extracted Variables Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-[10.5px] font-bold text-[#2f3b31] mb-1.5">
              Target Location / Zone
            </label>
            <input
              type="text"
              value={simConfig.location}
              onChange={(e) => setSimConfig((prev) => ({ ...prev, location: e.target.value }))}
              className="w-full px-3 py-2.5 rounded-[2px] border border-[#dedfd7] bg-[#f5f5ef] text-[12px] text-[#242b26] focus:outline-none focus:border-[#315b48]"
            />
          </div>

          <div>
            <label className="block text-[10.5px] font-bold text-[#2f3b31] mb-1.5">
              Time Window
            </label>
            <input
              type="text"
              value={simConfig.timeWindow}
              onChange={(e) => setSimConfig((prev) => ({ ...prev, timeWindow: e.target.value }))}
              className="w-full px-3 py-2.5 rounded-[2px] border border-[#dedfd7] bg-[#f5f5ef] text-[12px] text-[#242b26] focus:outline-none focus:border-[#315b48]"
            />
          </div>

          <div>
            <label className="block text-[10.5px] font-bold text-[#2f3b31] mb-1.5">
              Primary Trigger Mechanism
            </label>
            <input
              type="text"
              value={simConfig.trigger}
              onChange={(e) => setSimConfig((prev) => ({ ...prev, trigger: e.target.value }))}
              className="w-full px-3 py-2.5 rounded-[2px] border border-[#dedfd7] bg-[#f5f5ef] text-[12px] text-[#242b26] focus:outline-none focus:border-[#315b48]"
            />
          </div>
        </div>

        {/* Severity & Monte Carlo Iterations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
          <div className="p-4 rounded-[3px] border border-[#e3e5dc] bg-[#f6f6f1]">
            <div className="flex items-center justify-between mb-2">
              <label className="text-[11px] font-bold text-[#2f3b31]">
                Perturbation Intensity
              </label>
              <span className="text-[11px] font-bold px-2 py-0.5 rounded-[2px] bg-[#315b48] text-white">
                {simConfig.severity}%
              </span>
            </div>
            <input
              type="range"
              min="15"
              max="100"
              value={simConfig.severity}
              onChange={(e) =>
                setSimConfig((prev) => ({ ...prev, severity: Number(e.target.value) }))
              }
              className="w-full accent-[#315b48] cursor-pointer"
            />
            <div className="flex justify-between text-[9px] text-[#777e75] mt-1">
              <span>Minor Adjustment (15%)</span>
              <span>Full Disruption (100%)</span>
            </div>
          </div>

          <div className="p-4 rounded-[3px] border border-[#e3e5dc] bg-[#f6f6f1]">
            <label className="block text-[11px] font-bold text-[#2f3b31] mb-2">
              Monte Carlo Simulation Runs (N)
            </label>
            <div className="grid grid-cols-4 gap-2">
              {[250, 500, 1000, 5000].map((count) => (
                <button
                  key={count}
                  type="button"
                  onClick={() => setSimConfig((prev) => ({ ...prev, iterations: count }))}
                  className={`py-2 rounded-[2px] text-[11px] font-bold border transition-colors ${
                    simConfig.iterations === count
                      ? "bg-[#315b48] text-white border-[#315b48]"
                      : "bg-white text-[#4c584e] border-[#d8dbd1] hover:border-[#315b48]"
                  }`}
                >
                  {count.toLocaleString()}
                </button>
              ))}
            </div>
            <span className="block text-[9.5px] text-[#777e75] mt-2">
              Higher iteration counts sharpen tail-risk probability estimates.
            </span>
          </div>
        </div>

        {/* Active Domains Selection */}
        <div>
          <label className="block text-[11px] font-bold text-[#2f3b31] mb-2.5">
            2. Coupled Domains Included in Propagation Graph
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {Object.values(DOMAINS).map((dom) => {
              const selected = simConfig.selectedDomains.includes(dom.id);
              const Icon = dom.icon;
              return (
                <button
                  key={dom.id}
                  type="button"
                  onClick={() => toggleDomain(dom.id)}
                  className={`p-4 rounded-[3px] border text-left flex items-start gap-3 transition-colors ${
                    selected
                      ? "border-[#7d977b] bg-[#eaf0e7]"
                      : "border-[#dedfd7] bg-[#f7f7f2] opacity-70"
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-[2px] border grid place-items-center text-[11px] font-bold shrink-0 mt-0.5 ${
                      selected
                        ? "bg-[#315b48] border-[#315b48] text-white"
                        : "border-[#bfc6ba] bg-white text-transparent"
                    }`}
                  >
                    ✓
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <Icon size={14} className="text-[#315b48]" />
                      <strong className="text-[12px] text-[#242b26]">{dom.name}</strong>
                    </div>
                    <p className="text-[10.5px] text-[#6d766d] mt-1 leading-relaxed">
                      {dom.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {guardrailNotice && (
          <div className="p-3.5 rounded-[3px] border border-[#e2ceb5] bg-[#f6efe6] text-[#6e522d] text-[11.5px]">
            <strong>{guardrailNotice.title}:</strong> {guardrailNotice.message}
          </div>
        )}

        <div className="pt-4 border-t border-[#dedfd7] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <span className="text-[10.5px] text-[#777e75]">
            Engine executes Gaussian & tail-skewed perturbation across {simConfig.selectedDomains.length} coupled domains.
          </span>
          <button
            type="button"
            onClick={onRun}
            className="px-6 py-3 rounded-[2px] bg-[#315b48] hover:bg-[#203e31] text-white text-[11.5px] font-bold flex items-center justify-center gap-2 transition-colors"
          >
            <Play size={14} />
            Run {simConfig.iterations.toLocaleString()} Monte Carlo Trials
          </button>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// VIEW 3: INTERACTIVE CROSS-DOMAIN DEPENDENCY NETWORK
// ============================================================================

function DependencyNetworkView({
  result,
  selectedNodeId,
  setSelectedNodeId,
  orderFilter,
  setOrderFilter,
  domainFilter,
  setDomainFilter,
  onNavigate,
}) {
  const { nodes, edges } = result.graph;

  const selectedNode = nodes.find((n) => n.id === selectedNodeId) || nodes[0];

  const connectedEdges = edges.filter(
    (e) => e.from === selectedNode.id || e.to === selectedNode.id
  );
  const connectedNodeIds = new Set([
    selectedNode.id,
    ...connectedEdges.map((e) => e.from),
    ...connectedEdges.map((e) => e.to),
  ]);

  const isNodeVisible = (node) => {
    const passOrder = orderFilter === "all" || node.order === Number(orderFilter);
    const passDomain =
      domainFilter === "all" || node.domain === "trigger" || node.domain === domainFilter;
    return passOrder && passDomain;
  };

  return (
    <div className="space-y-6">
      {/* Header & Controls */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
        <div>
          <span className="text-[9.5px] font-bold tracking-[1.6px] text-[#a27c45] uppercase">
            NETWORKX WEIGHTED CAUSAL GRAPH
          </span>
          <h2 className="font-serif-display text-3xl sm:text-4xl font-semibold text-[#242b26] mt-1">
            Cross-Domain Ripple Topology
          </h2>
          <p className="mt-1.5 text-[12.5px] text-[#6d766d]">
            Inspect how <strong>"{result.prompt}"</strong> propagates across 1st-, 2nd-, and 3rd-order system dependencies.
          </p>
        </div>

        {/* Interactive Order & Domain Filter Controls */}
        <div className="flex flex-wrap items-center gap-2">
          <div className="inline-flex rounded-[2px] border border-[#d8dbd1] bg-[#faf9f5] p-0.5 text-[10px]">
            {[
              { id: "all", label: "All Orders" },
              { id: "1", label: "1st-Order" },
              { id: "2", label: "2nd-Order" },
              { id: "3", label: "3rd-Order" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setOrderFilter(tab.id)}
                className={`px-2.5 py-1.5 rounded-[2px] font-bold transition-colors ${
                  orderFilter === tab.id
                    ? "bg-[#315b48] text-white"
                    : "text-[#5f6960] hover:text-[#242b26]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <select
            value={domainFilter}
            onChange={(e) => setDomainFilter(e.target.value)}
            className="px-3 py-1.5 rounded-[2px] border border-[#d8dbd1] bg-[#faf9f5] text-[10.5px] font-semibold text-[#2f3b31]"
          >
            <option value="all">All 4 Domains</option>
            <option value="transport">Transportation & Flow</option>
            <option value="environment">Environment</option>
            <option value="health">Public Health & Safety</option>
            <option value="behavior">Aggregate Human Behavior</option>
          </select>
        </div>
      </div>

      {/* Main Split Canvas + Inspector */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        {/* Interactive Graph Canvas */}
        <div className="lg:col-span-8 p-5 rounded-[3px] border border-[#dedfd7] bg-[#faf9f5] flex flex-col">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[#ecece5] text-[10px] text-[#6d766d]">
            <span>
              <strong>Cascade Tiers:</strong> Root Trigger → 1st-Order Direct → 2nd-Order Indirect → 3rd-Order Systemic
            </span>
            <span className="font-bold text-[#315b48]">
              {nodes.length} Nodes · {edges.length} Weighted Edges
            </span>
          </div>

          <div
            className="relative h-[470px] mt-4 rounded-[3px] border border-[#dedfd7] overflow-hidden"
            style={{
              backgroundColor: "#f5f4ee",
              backgroundImage: "radial-gradient(#cfd2c6 0.9px, transparent 0.9px)",
              backgroundSize: "18px 18px",
            }}
          >
            {/* Tier Guide Labels */}
            <div className="absolute top-2.5 inset-x-4 flex justify-between text-[8.5px] font-bold tracking-[1px] text-[#8d9489] uppercase pointer-events-none">
              <span>Trigger</span>
              <span>1st-Order</span>
              <span>2nd-Order</span>
              <span>3rd-Order</span>
            </div>

            {/* SVG Edges with Coupling Weights */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <defs>
                <marker
                  id="arrow-muted"
                  markerWidth="6"
                  markerHeight="6"
                  refX="5"
                  refY="3"
                  orient="auto"
                >
                  <path d="M0,0 L6,3 L0,6 Z" fill="#b7bbb0" />
                </marker>
                <marker
                  id="arrow-active"
                  markerWidth="7"
                  markerHeight="7"
                  refX="5.5"
                  refY="3.5"
                  orient="auto"
                >
                  <path d="M0,0 L7,3.5 L0,7 Z" fill="#a27c45" />
                </marker>
              </defs>

              {edges.map((edge, idx) => {
                const fromNode = nodes.find((n) => n.id === edge.from);
                const toNode = nodes.find((n) => n.id === edge.to);
                if (!fromNode || !toNode) return null;

                const isHighlighted =
                  edge.from === selectedNode.id || edge.to === selectedNode.id;
                const midX = (fromNode.x + toNode.x) / 2;
                const midY = (fromNode.y + toNode.y) / 2;

                return (
                  <g key={idx}>
                    <line
                      x1={`${fromNode.x}%`}
                      y1={`${fromNode.y}%`}
                      x2={`${toNode.x}%`}
                      y2={`${toNode.y}%`}
                      stroke={isHighlighted ? "#a27c45" : "#c4c7bc"}
                      strokeWidth={isHighlighted ? 2.4 : 1.3}
                      strokeDasharray={isHighlighted ? "none" : "4 3"}
                      markerEnd={isHighlighted ? "url(#arrow-active)" : "url(#arrow-muted)"}
                    />
                    <rect
                      x={`${midX - 3.2}%`}
                      y={`${midY - 2.3}%`}
                      width="6.4%"
                      height="4.4%"
                      rx="2"
                      fill={isHighlighted ? "#203e31" : "#faf9f5"}
                      stroke={isHighlighted ? "#203e31" : "#d8dbd1"}
                      strokeWidth="0.8"
                    />
                    <text
                      x={`${midX}%`}
                      y={`${midY + 0.7}%`}
                      textAnchor="middle"
                      fontSize="8.5"
                      fontWeight="700"
                      fill={isHighlighted ? "#ffffff" : "#6d766d"}
                    >
                      {edge.label}
                    </text>
                  </g>
                );
              })}
            </svg>

            {/* Interactive Graph Nodes */}
            {nodes.map((node) => {
              const isSelected = node.id === selectedNode.id;
              const isRelated = connectedNodeIds.has(node.id);
              const visible = isNodeVisible(node);
              const isRoot = node.domain === "trigger";
              const domInfo = DOMAINS[node.domain];

              return (
                <button
                  key={node.id}
                  onClick={() => setSelectedNodeId(node.id)}
                  style={{ left: `${node.x}%`, top: `${node.y}%` }}
                  className={`-translate-x-1/2 -translate-y-1/2 absolute z-10 w-[132px] sm:w-[154px] p-2.5 rounded-[3px] text-left transition-all border ${
                    !visible ? "opacity-25" : isRelated ? "opacity-100" : "opacity-55"
                  } ${
                    isRoot
                      ? "bg-[#203e31] border-[#203e31] text-white shadow-md"
                      : isSelected
                      ? "bg-[#e3eae2] border-[#315b48] border-2 text-[#242b26] shadow-md"
                      : "bg-[#fffefa] border-[#cfd3c7] text-[#242b26] hover:border-[#315b48]"
                  }`}
                >
                  <div className="flex items-center justify-between gap-1 text-[8px] font-bold uppercase tracking-wider">
                    <span className={isRoot ? "text-[#d6c29d]" : "text-[#a27c45]"}>
                      {isRoot ? "ROOT TRIGGER" : `ORDER ${node.order}`}
                    </span>
                    <span className={isRoot ? "text-[#b6c7bb]" : "text-[#777e75]"}>
                      {node.delay}
                    </span>
                  </div>
                  <strong className="block text-[11px] font-bold leading-snug mt-1">
                    {node.label}
                  </strong>
                  <div className="mt-1.5 flex items-center justify-between text-[9px]">
                    <span className={isRoot ? "text-[#d5dfd7]" : "text-[#6d766d]"}>
                      {domInfo ? domInfo.shortName : "Intervention"}
                    </span>
                    <span
                      className={`font-bold ${
                        isRoot ? "text-[#fbbf24]" : "text-[#315b48]"
                      }`}
                    >
                      {node.impactPct}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="mt-3.5 flex flex-wrap items-center justify-between gap-3 text-[10px] text-[#6d766d]">
            <div className="flex flex-wrap items-center gap-4">
              <span className="flex items-center gap-1.5">
                <i className="w-2.5 h-2.5 rounded-full bg-[#203e31] inline-block" /> Root Decision
              </span>
              <span className="flex items-center gap-1.5">
                <i className="w-2.5 h-2.5 rounded-full bg-[#a27c45] inline-block" /> Active Causal Link (w = coupling weight)
              </span>
            </div>
            <span>Click any node to inspect upstream & downstream effects</span>
          </div>
        </div>

        {/* Node Inspector Sidebar */}
        <div className="lg:col-span-4 p-6 rounded-[3px] border border-[#dedfd7] bg-[#faf9f5] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-[9px] font-bold tracking-[1.4px] text-[#a27c45] uppercase">
                {selectedNode.order === 0
                  ? "ROOT INTERVENTION NODE"
                  : `${selectedNode.order}${
                      selectedNode.order === 1 ? "ST" : selectedNode.order === 2 ? "ND" : "RD"
                    }-ORDER CONSEQUENCE`}
              </span>
              <span className="text-[9.5px] font-bold px-2 py-0.5 rounded-[2px] bg-[#eaece4] text-[#39473b]">
                {selectedNode.delay}
              </span>
            </div>

            <h3 className="font-serif-display text-2xl font-semibold text-[#242b26] mt-2 leading-snug">
              {selectedNode.fullTitle}
            </h3>

            <p className="mt-3 text-[12px] leading-[1.75] text-[#656f65]">
              {selectedNode.summary}
            </p>

            {/* Baseline vs Simulated Node Metrics */}
            <div className="mt-5 p-3.5 rounded-[2px] bg-[#f3f2ec] border border-[#dedfd7] grid grid-cols-2 gap-3">
              <div>
                <span className="block text-[9px] font-bold text-[#777e75] uppercase">
                  Normal Baseline
                </span>
                <strong className="block text-[14px] font-bold text-[#242b26] mt-0.5">
                  {selectedNode.metricBaseline}
                </strong>
              </div>
              <div>
                <span className="block text-[9px] font-bold text-[#a27c45] uppercase">
                  Hypothetical Outcome
                </span>
                <strong className="block text-[14px] font-bold text-[#315b48] mt-0.5">
                  {selectedNode.metricSimulated}
                </strong>
              </div>
            </div>

            {/* Coupled Edges */}
            <div className="mt-5 pt-4 border-t border-[#e5e6de]">
              <h4 className="text-[10.5px] font-bold tracking-[0.8px] text-[#4c584e] uppercase mb-2.5">
                Direct Causal Couplings ({connectedEdges.length})
              </h4>
              <div className="space-y-2">
                {connectedEdges.map((edge, idx) => {
                  const isOutgoing = edge.from === selectedNode.id;
                  const peerId = isOutgoing ? edge.to : edge.from;
                  const peerNode = nodes.find((n) => n.id === peerId);
                  if (!peerNode) return null;
                  return (
                    <button
                      key={idx}
                      onClick={() => setSelectedNodeId(peerNode.id)}
                      className="w-full p-2.5 rounded-[2px] border border-[#e3e5dc] bg-[#f7f7f2] hover:border-[#315b48] flex items-center justify-between text-left text-[11px] transition-colors"
                    >
                      <span>
                        <strong className="text-[#315b48] mr-1.5">
                          {isOutgoing ? "Triggers →" : "Driven by ←"}
                        </strong>
                        {peerNode.label}
                      </span>
                      <span className="text-[9.5px] font-bold text-[#a27c45]">
                        w={edge.weight}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <button
            onClick={() => onNavigate("Analytics")}
            className="mt-6 w-full py-2.5 rounded-[2px] bg-[#315b48] hover:bg-[#203e31] text-white text-[11px] font-bold flex items-center justify-center gap-2 transition-colors"
          >
            View Monte Carlo Distributions
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// VIEW 4: MONTE CARLO ANALYTICS & BASELINE COMPARISON
// ============================================================================

function AnalyticsResultsView({ activeUser, result, onNavigate, onReRun }) {
  const maxBinFreq = Math.max(...result.bins.map((b) => b.frequency), 1);

  return (
    <div className="space-y-8">
      {/* Header Banner */}
      <div className="p-6 rounded-[3px] bg-[#203e31] text-white flex flex-col lg:flex-row lg:items-center justify-between gap-5">
        <div className="space-y-1.5">
          <div className="flex flex-wrap items-center gap-2 text-[9.5px] font-bold tracking-[1.4px] text-[#d6c29d] uppercase">
            <span>{activeUser.name.toUpperCase()} · MONTE CARLO SIMULATION OUTPUT</span>
            <span>·</span>
            <span>RUN {result.id}</span>
          </div>
          <h2 className="font-serif-display text-2xl sm:text-3xl font-medium">
            "{result.prompt}"
          </h2>
          <div className="flex flex-wrap gap-x-5 gap-y-1 text-[11px] text-[#cfd9d1] pt-1">
            <span>
              <strong>Location:</strong> {result.location}
            </span>
            <span>
              <strong>Window:</strong> {result.timeWindow}
            </span>
            <span>
              <strong>Sample Size:</strong> {result.iterations.toLocaleString()} stochastic runs
            </span>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 shrink-0">
          {[500, 1000, 5000].map((n) => (
            <button
              key={n}
              onClick={() => onReRun(n)}
              className={`px-3 py-1.5 rounded-[2px] text-[10px] font-bold border transition-colors ${
                result.iterations === n
                  ? "bg-[#d6c29d] text-[#203e31] border-[#d6c29d]"
                  : "border-[#5e7767] text-[#e2ebe4] hover:bg-white/10"
              }`}
            >
              N={n.toLocaleString()}
            </button>
          ))}
          <button
            onClick={() => onNavigate("Impact Reports")}
            className="px-3.5 py-1.5 rounded-[2px] bg-white text-[#203e31] text-[10.5px] font-bold flex items-center gap-1.5"
          >
            <FileText size={13} /> Executive Report
          </button>
        </div>
      </div>

      {/* Side-by-Side Normal Baseline vs. Hypothetical KPI Cards */}
      <section>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-4">
          <div>
            <span className="text-[9px] font-bold tracking-[1.4px] text-[#858b80] uppercase">
              SIDE-BY-SIDE DOMAIN COMPARISON
            </span>
            <h3 className="font-serif-display text-2xl font-semibold text-[#242b26] mt-0.5">
              Normal Baseline vs. Hypothetical Outcome Ranges
            </h3>
          </div>
          <span className="text-[10.5px] text-[#6d766d]">
            Computed across {result.iterations.toLocaleString()} stochastic simulation trials
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {Object.entries(result.domains).map(([key, dom]) => {
            const meta = DOMAINS[key];
            const Icon = meta.icon;
            const isWorse =
              key === "behavior" ? dom.deltaPct < 0 : dom.deltaPct > 0;

            return (
              <div
                key={key}
                className={`p-5 rounded-[3px] border bg-[#faf9f5] flex flex-col justify-between ${
                  dom.enabled ? "border-[#dedfd7]" : "border-[#e6e7e0] opacity-55"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div
                      className="w-8 h-8 rounded-[3px] grid place-items-center"
                      style={{ backgroundColor: meta.softBg, color: meta.accent }}
                    >
                      <Icon size={16} />
                    </div>
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-[2px] ${
                        isWorse
                          ? "bg-[#f6efe6] text-[#9a6328] border border-[#e6d5bf]"
                          : "bg-[#e3eae2] text-[#203e31] border border-[#c8d8c6]"
                      }`}
                    >
                      {dom.deltaPct > 0 ? `+${dom.deltaPct}%` : `${dom.deltaPct}%`}
                    </span>
                  </div>

                  <h4 className="text-[13px] font-bold text-[#242b26] mt-3">{meta.name}</h4>

                  {/* Baseline vs Hypothetical Comparison Box */}
                  <div className="mt-3 p-3 rounded-[2px] bg-[#f3f2ec] border border-[#e2e3db] space-y-2">
                    <div className="flex items-center justify-between text-[10.5px]">
                      <span className="text-[#777e75]">Normal Baseline</span>
                      <strong className="text-[#242b26]">
                        {dom.baseline} {dom.unit}
                      </strong>
                    </div>
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-[#315b48] font-semibold">Hypothetical Expected</span>
                      <strong className="text-[#315b48] text-[13px]">
                        {dom.p50} {dom.unit}
                      </strong>
                    </div>
                    <div className="pt-1.5 border-t border-[#e2e3db] flex items-center justify-between text-[9.5px] text-[#777e75]">
                      <span>Simulated Range:</span>
                      <span>
                        {dom.p10} – {dom.p90} {dom.unit}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="mt-3.5 text-[10.5px] leading-[1.6] text-[#656f65]">
                  {dom.headline}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Monte Carlo Probability Distribution & Temporal Ripple Trajectory */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* Probability Distribution Histogram */}
        <div className="p-6 rounded-[3px] border border-[#dedfd7] bg-[#faf9f5]">
          <div className="flex items-start justify-between gap-3">
            <div>
              <span className="text-[9px] font-bold tracking-[1.3px] text-[#858b80] uppercase">
                STOCHASTIC OUTCOME DISTRIBUTION
              </span>
              <h3 className="font-serif-display text-xl font-semibold text-[#242b26] mt-0.5">
                System Stress Probability Histogram
              </h3>
              <p className="text-[10.5px] text-[#777e75] mt-1">
                Distribution of composite stress scores across {result.iterations.toLocaleString()} randomized runs.
              </p>
            </div>
            <div className="text-right shrink-0">
              <span className="block text-[9px] font-bold text-[#777e75]">TYPICAL INDEX</span>
              <strong className="font-serif-display text-2xl text-[#315b48]">
                {result.compositeStats.medianOutcome}
              </strong>
            </div>
          </div>

          {/* Histogram Bars */}
          <div className="h-[195px] pt-6 pb-2 px-2 border-b border-[#dedfd7] flex items-end gap-1.5">
            {result.bins.map((bin) => {
              const heightPct = Math.max(6, (bin.frequency / maxBinFreq) * 100);
              return (
                <div
                  key={bin.range}
                  className="flex-1 h-full flex flex-col items-center justify-end group relative"
                >
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute -top-6 bg-[#203e31] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-[2px] whitespace-nowrap pointer-events-none z-10">
                    {bin.frequency}% ({bin.range})
                  </div>
                  <div
                    style={{ height: `${heightPct}%` }}
                    className={`w-full rounded-t-[2px] transition-all ${
                      bin.isTailRisk
                        ? "bg-[#a27c45] group-hover:bg-[#876535]"
                        : "bg-[#315b48] group-hover:bg-[#203e31]"
                    }`}
                  />
                </div>
              );
            })}
          </div>

          <div className="mt-2 flex justify-between text-[9px] text-[#858b80] font-semibold">
            <span>Lower Bound: {result.compositeStats.lowBound}</span>
            <span>Typical Outcome: {result.compositeStats.medianOutcome}</span>
            <span className="text-[#a27c45]">Elevated Stress: {result.compositeStats.highBound}</span>
          </div>
        </div>

        {/* Temporal Propagation Trajectory (Baseline vs Simulated Range) */}
        <div className="p-6 rounded-[3px] border border-[#dedfd7] bg-[#faf9f5] flex flex-col justify-between">
          <div>
            <div className="flex items-start justify-between gap-3">
              <div>
                <span className="text-[9px] font-bold tracking-[1.3px] text-[#858b80] uppercase">
                  TEMPORAL CASCADE TRAJECTORY
                </span>
                <h3 className="font-serif-display text-xl font-semibold text-[#242b26] mt-0.5">
                  Baseline vs. Hypothetical Ripple Over Time
                </h3>
                <p className="text-[10.5px] text-[#777e75] mt-1">
                  Shaded band shows upper and lower Monte Carlo stress bounds from T+0 to T+120m.
                </p>
              </div>
              <span className="px-2 py-1 rounded-[2px] bg-[#f5f0e7] border border-[#e3d7c3] text-[#8b7046] text-[9px] font-bold">
                Tail Risk: {result.compositeStats.exceedanceProb}%
              </span>
            </div>

            {/* Responsive SVG Multi-Order Trajectory Chart */}
            <div className="mt-4">
              <svg viewBox="0 0 420 165" className="w-full h-[175px] overflow-visible">
                {[30, 65, 100, 135].map((y) => (
                  <line
                    key={y}
                    x1="0"
                    y1={y}
                    x2="420"
                    y2={y}
                    stroke="#e7e8e0"
                    strokeDasharray="3 4"
                  />
                ))}

                {/* Uncertainty Envelope Polygon */}
                {(() => {
                  const pts = result.timeSeries;
                  const upperPts = pts
                    .map((p, i) => `${(i / (pts.length - 1)) * 420},${150 - p.upper * 1.4}`)
                    .join(" ");
                  const lowerPts = [...pts]
                    .reverse()
                    .map(
                      (p, i) =>
                        `${((pts.length - 1 - i) / (pts.length - 1)) * 420},${
                          150 - p.lower * 1.4
                        }`
                    )
                    .join(" ");
                  const simLine = pts
                    .map((p, i) => `${(i / (pts.length - 1)) * 420},${150 - p.simulated * 1.4}`)
                    .join(" ");
                  const baseLine = pts
                    .map((p, i) => `${(i / (pts.length - 1)) * 420},${150 - p.baseline * 1.4}`)
                    .join(" ");

                  return (
                    <>
                      <polygon
                        points={`${upperPts} ${lowerPts}`}
                        fill={result.isPositiveIntervention ? "#315b48" : "#a27c45"}
                        opacity="0.14"
                      />
                      <polyline
                        fill="none"
                        stroke="#8a9288"
                        strokeWidth="2"
                        strokeDasharray="5 4"
                        points={baseLine}
                      />
                      <polyline
                        fill="none"
                        stroke={result.isPositiveIntervention ? "#315b48" : "#a27c45"}
                        strokeWidth="2.8"
                        points={simLine}
                      />
                      {pts.map((p, i) => (
                        <circle
                          key={p.t}
                          cx={(i / (pts.length - 1)) * 420}
                          cy={150 - p.simulated * 1.4}
                          r="3.5"
                          fill={result.isPositiveIntervention ? "#315b48" : "#a27c45"}
                        />
                      ))}
                    </>
                  );
                })()}
              </svg>

              <div className="flex justify-between text-[9px] font-bold text-[#858b80] mt-1">
                {result.timeSeries.map((pt) => (
                  <span key={pt.t}>{pt.t}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-3 pt-2.5 border-t border-[#ecece5] flex items-center gap-5 text-[10px] text-[#6d766d]">
            <span className="flex items-center gap-1.5">
              <i className="w-4 border-t-2 border-dashed border-[#8a9288] inline-block" /> Normal Baseline
            </span>
            <span className="flex items-center gap-1.5">
              <i
                className="w-4 border-t-2 inline-block"
                style={{ borderColor: result.isPositiveIntervention ? "#315b48" : "#a27c45" }}
              />{" "}
              Hypothetical Expected Trajectory
            </span>
          </div>
        </div>
      </section>

      {/* Plain-Language Systemic Explanation */}
      <section className="p-6 rounded-[3px] border border-[#d6ddd1] bg-[#eef1e9]">
        <div className="flex items-center gap-2 text-[9.5px] font-bold tracking-[1.4px] text-[#315b48] uppercase mb-2">
          <Sparkles size={14} />
          <span>PLAIN-LANGUAGE CAUSAL SYNTHESIS</span>
        </div>
        <p className="text-[13px] leading-[1.85] text-[#242b26]">{result.narrative}</p>
      </section>
    </div>
  );
}

// ============================================================================
// VIEW 5: EXECUTIVE IMPACT REPORTS
// ============================================================================

function ImpactReportView({ activeUser, result, riskAlertThreshold, onNavigate }) {
  const exceedsAlert = result.compositeStats.medianOutcome >= riskAlertThreshold;

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="no-print flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-[9.5px] font-bold tracking-[1.6px] text-[#a27c45] uppercase">
            DECISION BRIEFING DOSSIER · {activeUser.name.toUpperCase()}
          </span>
          <h2 className="font-serif-display text-3xl font-semibold text-[#242b26] mt-1">
            Multi-Domain Impact Report
          </h2>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={() => onNavigate("Dependency Network")}
            className="px-3.5 py-2 rounded-[2px] border border-[#d6d9cf] bg-[#faf9f5] text-[11px] font-bold text-[#39473b]"
          >
            Inspect Graph
          </button>
          <button
            onClick={() => window.print()}
            className="px-4 py-2 rounded-[2px] bg-[#315b48] hover:bg-[#203e31] text-white text-[11px] font-bold flex items-center gap-1.5"
          >
            <Download size={14} /> Export / Print Brief
          </button>
        </div>
      </div>

      {/* Report Document Sheet */}
      <article className="p-7 sm:p-10 rounded-[3px] border border-[#d6d8cf] bg-[#faf9f5] shadow-sm space-y-7">
        <div className="pb-6 border-b border-[#dedfd7] flex flex-col sm:flex-row sm:items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2.5 text-[10px] font-bold tracking-[1.4px] text-[#315b48] uppercase">
              <VyronLogo size={24} showWordmark={false} />
              <span>VYRON: Every Decision Has a Consequence · RUN {result.id}</span>
            </div>
            <h3 className="font-serif-display text-2xl sm:text-3xl font-semibold text-[#242b26] mt-2">
              "{result.prompt}"
            </h3>
            <p className="mt-2 text-[12px] text-[#6d766d]">
              Prepared by: <strong>{activeUser.name}</strong> ({activeUser.organization}) · Location: <strong>{result.location}</strong> · Trials: <strong>{result.iterations.toLocaleString()} Monte Carlo runs</strong>
            </p>
          </div>

          <div
            className={`px-4 py-3 rounded-[2px] text-right shrink-0 ${
              exceedsAlert ? "bg-[#8b3a2b] text-white" : "bg-[#203e31] text-white"
            }`}
          >
            <span className="block text-[8.5px] tracking-[1.2px] text-[#d6c29d] uppercase">
              {exceedsAlert ? `ABOVE ALERT (${riskAlertThreshold})` : "TYPICAL STRESS INDEX"}
            </span>
            <strong className="font-serif-display text-2xl">
              {result.compositeStats.medianOutcome} / 100
            </strong>
          </div>
        </div>

        <div>
          <h4 className="text-[11px] font-bold tracking-[1.1px] text-[#315b48] uppercase mb-2">
            1. Executive Summary
          </h4>
          <p className="text-[13px] leading-[1.85] text-[#2f3931]">{result.narrative}</p>
        </div>

        <div>
          <h4 className="text-[11px] font-bold tracking-[1.1px] text-[#315b48] uppercase mb-3">
            2. Domain-by-Domain Quantitative Comparison
          </h4>
          <div className="overflow-x-auto border border-[#dedfd7] rounded-[2px]">
            <table className="w-full text-left border-collapse text-[11.5px]">
              <thead>
                <tr className="bg-[#f0f1eb] border-b border-[#dedfd7] text-[#49554b] text-[10px] uppercase">
                  <th className="py-2.5 px-3.5">System Domain</th>
                  <th className="py-2.5 px-3.5">Normal Baseline</th>
                  <th className="py-2.5 px-3.5">Hypothetical Expected</th>
                  <th className="py-2.5 px-3.5">Simulated Range</th>
                  <th className="py-2.5 px-3.5">Net Shift</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e8e0]">
                {Object.entries(result.domains).map(([key, dom]) => (
                  <tr key={key}>
                    <td className="py-3 px-3.5 font-bold text-[#242b26]">
                      {DOMAINS[key].name}
                    </td>
                    <td className="py-3 px-3.5 text-[#6d766d]">
                      {dom.baseline} {dom.unit}
                    </td>
                    <td className="py-3 px-3.5 font-bold text-[#315b48]">
                      {dom.p50} {dom.unit}
                    </td>
                    <td className="py-3 px-3.5 text-[#6d766d]">
                      {dom.p10} – {dom.p90} {dom.unit}
                    </td>
                    <td className="py-3 px-3.5 font-bold text-[#a27c45]">
                      {dom.deltaPct > 0 ? `+${dom.deltaPct}%` : `${dom.deltaPct}%`}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h4 className="text-[11px] font-bold tracking-[1.1px] text-[#315b48] uppercase mb-2.5">
            3. Recommended Pre-Implementation Mitigations
          </h4>
          <ul className="space-y-2 text-[12px] text-[#3a463c] list-disc pl-5 leading-relaxed">
            <li>
              <strong>Staggered Flow & Wayfinding:</strong> Deploy dynamic signage 15 minutes prior to{" "}
              <em>{result.timeWindow}</em> to distribute pedestrian and vehicle load across secondary arteries.
            </li>
            <li>
              <strong>Dedicated Emergency Clearance:</strong> Maintain a protected 4.5-meter emergency corridor to prevent 3rd-order EMS response delays ({result.domains.health.p50} min projected).
            </li>
            <li>
              <strong>Queue Fatigue Buffering:</strong> Provide real-time wait-time indicators and shaded holding zones to prevent behavioral compliance drops ({result.domains.behavior.p50}% projected).
            </li>
          </ul>
        </div>
      </article>
    </div>
  );
}

// ============================================================================
// VIEW 6: ENGINE & ACCOUNT SECURITY SETTINGS
// ============================================================================

function SettingsView({
  activeUser,
  onUserUpdated,
  onLogout,
  apiEndpoint,
  setApiEndpoint,
  defaultRuns,
  setDefaultRuns,
  riskAlertThreshold,
  setRiskAlertThreshold,
  saved,
  onSave,
}) {
  const [profileName, setProfileName] = useState(activeUser.name);
  const [profileRole, setProfileRole] = useState(activeUser.role);
  const [profileOrg, setProfileOrg] = useState(activeUser.organization);

  const [currentPwd, setCurrentPwd] = useState("");
  const [newPwd, setNewPwd] = useState("");
  const [confirmNewPwd, setConfirmNewPwd] = useState("");
  const [pwdStatus, setPwdStatus] = useState(null);

  const handleProfileSave = () => {
    const registry = loadUsersRegistry();
    const updatedUser = {
      ...activeUser,
      name: profileName.trim() || activeUser.name,
      role: profileRole.trim() || activeUser.role,
      organization: profileOrg.trim() || activeUser.organization,
    };
    const nextRegistry = registry.map((u) =>
      u.id === activeUser.id ? updatedUser : u
    );
    saveUsersRegistry(nextRegistry);
    onUserUpdated(updatedUser);
    onSave();
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();
    setPwdStatus(null);
    if (!currentPwd || !newPwd) {
      setPwdStatus({ type: "error", text: "Enter your current password and a new password." });
      return;
    }
    if (newPwd.length < 6) {
      setPwdStatus({ type: "error", text: "New password must be at least 6 characters long." });
      return;
    }
    if (newPwd !== confirmNewPwd) {
      setPwdStatus({ type: "error", text: "New passwords do not match." });
      return;
    }

    const currentHash = await hashPasswordWithSalt(currentPwd, activeUser.salt);
    if (currentHash !== activeUser.passwordHash) {
      setPwdStatus({ type: "error", text: "Current password is incorrect." });
      return;
    }

    const newSalt = generateRandomSalt(16);
    const newHash = await hashPasswordWithSalt(newPwd, newSalt);
    const updatedUser = {
      ...activeUser,
      salt: newSalt,
      passwordHash: newHash,
    };
    const registry = loadUsersRegistry();
    saveUsersRegistry(
      registry.map((u) => (u.id === activeUser.id ? updatedUser : u))
    );
    onUserUpdated(updatedUser);
    setCurrentPwd("");
    setNewPwd("");
    setConfirmNewPwd("");
    setPwdStatus({
      type: "success",
      text: "Password updated and encrypted successfully.",
    });
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <span className="text-[9px] font-bold tracking-[1.6px] text-[#a27c45] uppercase">
            {activeUser.name.toUpperCase()} · ACCOUNT SECURITY & ENGINE PREFERENCES
          </span>
          <h2 className="font-serif-display text-3xl font-semibold text-[#242b26] mt-1">
            Account & Simulation Settings
          </h2>
          <p className="mt-1.5 text-[12.5px] text-[#6d766d]">
            Signed in as <strong>{activeUser.email}</strong>. All settings and simulations are isolated to your password-protected account.
          </p>
        </div>

        <button
          type="button"
          onClick={onLogout}
          className="px-4 py-2 rounded-[2px] border border-[#d6c9b8] bg-[#f6efe6] hover:bg-[#eddcc8] text-[#8b5a2b] text-[11px] font-bold flex items-center gap-1.5"
        >
          <LogOut size={13} /> Sign Out & Lock Account
        </button>
      </div>

      {/* Profile & Simulation Preferences */}
      <div className="p-6 sm:p-8 rounded-[3px] border border-[#dedfd7] bg-[#faf9f5] space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-[10px] font-bold text-[#2f3b31] uppercase mb-1.5">
              Display Name
            </label>
            <input
              type="text"
              value={profileName}
              onChange={(e) => setProfileName(e.target.value)}
              className="w-full px-3 py-2 rounded-[2px] border border-[#dedfd7] bg-[#f5f5ef] text-[12px] text-[#242b26]"
            />
          </div>
          <div>
            <label className="block text-[10px] font-bold text-[#2f3b31] uppercase mb-1.5">
              Role / Title
            </label>
            <input
              type="text"
              value={profileRole}
              onChange={(e) => setProfileRole(e.target.value)}
              className="w-full px-3 py-2 rounded-[2px] border border-[#dedfd7] bg-[#f5f5ef] text-[12px] text-[#242b26]"
            />
          </div>
          <div>
            <label className="block text-[10px] font-bold text-[#2f3b31] uppercase mb-1.5">
              Organization / Desk
            </label>
            <input
              type="text"
              value={profileOrg}
              onChange={(e) => setProfileOrg(e.target.value)}
              className="w-full px-3 py-2 rounded-[2px] border border-[#dedfd7] bg-[#f5f5ef] text-[12px] text-[#242b26]"
            />
          </div>
        </div>

        <div>
          <label className="block text-[11px] font-bold text-[#2f3b31] mb-1.5 flex items-center gap-2">
            <Server size={15} className="text-[#315b48]" />
            FastAPI Simulation Endpoint (Optional Remote Backend)
          </label>
          <input
            type="text"
            value={apiEndpoint}
            onChange={(e) => setApiEndpoint(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-[2px] border border-[#dedfd7] bg-[#f5f5ef] text-[12px] text-[#242b26]"
          />
          <span className="block mt-1.5 text-[10px] text-[#777e75]">
            Client-side NetworkX + Monte Carlo engine runs automatically when remote FastAPI server is offline.
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-[11px] font-bold text-[#2f3b31] mb-1.5">
              Default Monte Carlo Iterations
            </label>
            <select
              value={defaultRuns}
              onChange={(e) => setDefaultRuns(Number(e.target.value))}
              className="w-full px-3.5 py-2.5 rounded-[2px] border border-[#dedfd7] bg-[#f5f5ef] text-[12px] text-[#242b26]"
            >
              <option value={100}>100 iterations (Fast Preview)</option>
              <option value={500}>500 iterations (Standard)</option>
              <option value={1000}>1,000 iterations (Recommended)</option>
              <option value={5000}>5,000 iterations (High-Precision Tail)</option>
            </select>
          </div>

          <div>
            <label className="block text-[11px] font-bold text-[#2f3b31] mb-1.5">
              High-Stress Risk Alert Threshold ({riskAlertThreshold}/100)
            </label>
            <input
              type="range"
              min="50"
              max="95"
              value={riskAlertThreshold}
              onChange={(e) => setRiskAlertThreshold(Number(e.target.value))}
              className="w-full accent-[#315b48] mt-2"
            />
          </div>
        </div>

        <div className="pt-5 border-t border-[#dedfd7] flex items-center justify-between">
          {saved ? (
            <span className="text-[11px] font-bold text-[#315b48] flex items-center gap-1.5">
              <CheckCircle2 size={15} /> Saved to {profileName}'s private account.
            </span>
          ) : (
            <span className="text-[11px] text-[#777e75]">
              Private account ID: {activeUser.id}
            </span>
          )}

          <button
            onClick={handleProfileSave}
            className="px-5 py-2.5 rounded-[2px] bg-[#315b48] hover:bg-[#203e31] text-white text-[11px] font-bold"
          >
            Save Preferences
          </button>
        </div>
      </div>

      {/* Password Rotation Form */}
      <form
        onSubmit={handleChangePassword}
        className="p-6 sm:p-8 rounded-[3px] border border-[#dedfd7] bg-[#faf9f5] space-y-4"
      >
        <div className="flex items-center gap-2">
          <KeyRound size={16} className="text-[#a27c45]" />
          <h3 className="font-serif-display text-xl font-semibold text-[#242b26]">
            Change Account Password
          </h3>
        </div>

        {pwdStatus && (
          <div
            className={`p-3 rounded-[2px] text-[11.5px] border ${
              pwdStatus.type === "error"
                ? "bg-[#f6efe6] border-[#e2ceb5] text-[#8b5a2b]"
                : "bg-[#e3eae2] border-[#c4d4c2] text-[#203e31] font-semibold"
            }`}
          >
            {pwdStatus.text}
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-[10px] font-bold text-[#2f3b31] uppercase mb-1">
              Current Password
            </label>
            <input
              type="password"
              value={currentPwd}
              onChange={(e) => setCurrentPwd(e.target.value)}
              className="w-full px-3 py-2 rounded-[2px] border border-[#dedfd7] bg-[#f5f5ef] text-[12px]"
            />
          </div>
          <div>
            <label className="block text-[10px] font-bold text-[#2f3b31] uppercase mb-1">
              New Password
            </label>
            <input
              type="password"
              value={newPwd}
              onChange={(e) => setNewPwd(e.target.value)}
              className="w-full px-3 py-2 rounded-[2px] border border-[#dedfd7] bg-[#f5f5ef] text-[12px]"
            />
          </div>
          <div>
            <label className="block text-[10px] font-bold text-[#2f3b31] uppercase mb-1">
              Confirm New Password
            </label>
            <input
              type="password"
              value={confirmNewPwd}
              onChange={(e) => setConfirmNewPwd(e.target.value)}
              className="w-full px-3 py-2 rounded-[2px] border border-[#dedfd7] bg-[#f5f5ef] text-[12px]"
            />
          </div>
        </div>

        <div className="pt-2 flex justify-end">
          <button
            type="submit"
            className="px-4 py-2 rounded-[2px] bg-[#242b26] hover:bg-[#315b48] text-white text-[11px] font-bold transition-colors"
          >
            Update Password
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
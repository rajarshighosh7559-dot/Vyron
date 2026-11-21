import { useState, useMemo } from "react";
import { ArrowLeft, BrainCircuit, Play, RotateCcw, MapPin, Clock3, Sparkles, ArrowRight, ShieldAlert } from "lucide-react";

const scenarioTemplates = [
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

const simulationDomains = [
  { name: "Transportation", description: "Traffic flow, congestion and accessibility" },
  { name: "Environment", description: "Air quality, noise and urban greenery" },
  { name: "Public Health", description: "Healthcare access and service pressure" },
  { name: "Human Behaviour", description: "Movement, demand and behavioural patterns" },
];

const durationOptions = [
  "1 hour",
  "6 hours",
  "12 hours",
  "24 hours",
  "7 days",
  "30 days",
  "1 year",
];

const personalPatterns = [
  /\b(break up|girlfriend|boyfriend|crush|marry|divorce|lonely|depressed|sad|love me|my life|my exam|cheat on|should i quit my job)\b/i,
  /\b(astrology|horoscope|zodiac|lottery|stock pick|crypto price)\b/i,
];

function validateSystemicPrompt(rawPrompt = "") {
  const text = rawPrompt.trim();
  if (!text) {
    return {
      isValid: false,
      title: "Scenario Required",
      message: "Please enter a systemic 'What if...' decision scenario before exploring.",
    };
  }

  const isPersonal = personalPatterns.some((rx) => rx.test(text.toLowerCase()));
  if (isPersonal) {
    return {
      isValid: false,
      title: "NLP Intent Guardrail — Systemic Decisions Only",
      message:
        "VYRON analyzes multi-domain systemic, infrastructure, campus, and policy decisions rather than personal or speculative financial questions.",
    };
  }

  return { isValid: true };
}

const scenarioRules = [
  {
    keywords: ["gate", "campus", "university", "college", "recess"],
    firstTitle: "Pedestrian movement may be redirected",
    firstDescription: "Students and staff may choose alternative entrances or walking routes.",
    secondTitle: "Crowd distribution may change",
    secondDescription: "Demand may shift towards other access points, changing queueing conditions.",
    thirdTitle: "Peak access & safety bottlenecks may emerge",
    thirdDescription: "Concentrated foot traffic during peak windows can slow entry flow and emergency clearance.",
    severity: 74,
    isPositiveIntervention: false,
  },
  {
    keywords: ["road", "highway", "street", "bridge", "closure", "hospital"],
    firstTitle: "Traffic routes may change",
    firstDescription: "Vehicles may use alternative roads, changing movement patterns nearby.",
    secondTitle: "Pressure may shift to nearby routes",
    secondDescription: "Additional traffic may affect journey times and access to nearby facilities.",
    thirdTitle: "Emergency response & emission spikes may follow",
    thirdDescription: "Congested feeder streets can lengthen ambulance travel times and raise localized emissions.",
    severity: 86,
    isPositiveIntervention: false,
  },
  {
    keywords: ["greenery", "trees", "park", "green space", "canopy", "shade"],
    firstTitle: "Urban green coverage may increase",
    firstDescription: "Additional vegetation may change shade, local land use and outdoor activity.",
    secondTitle: "Local environmental conditions may change",
    secondDescription: "Potential effects include lower surface temperatures and improved outdoor comfort.",
    thirdTitle: "Walkability & public health resilience may improve",
    thirdDescription: "Shaded corridors encourage active mobility and reduce midday heat-stress exposure.",
    severity: 42,
    isPositiveIntervention: true,
  },
  {
    keywords: ["free transport", "public transport", "bus fare", "metro fare", "free"],
    firstTitle: "Travel demand may change",
    firstDescription: "A fare change may influence how frequently people use public transport.",
    secondTitle: "Transport networks may experience new demand",
    secondDescription: "Passenger volumes and service pressure may change across routes.",
    thirdTitle: "Road congestion & crowding trade-offs may shift",
    thirdDescription: "Private vehicle trips may decline while peak bus or transit occupancy rises.",
    severity: 65,
    isPositiveIntervention: false,
  },
];

const domainDescriptions = {
  Transportation: "Possible changes in movement, route choice, congestion and access.",
  Environment: "Possible changes in local emissions, noise, heat and environmental conditions.",
  "Public Health": "Possible changes in emergency access and pressure on nearby services.",
  "Human Behaviour": "Possible changes in route choices, movement patterns and crowd distribution.",
};

const defaultPathway = {
  firstTitle: "The initial conditions may change",
  firstDescription: "The proposed change could influence how people and resources move through the area.",
  secondTitle: "Connected systems may respond",
  secondDescription: "Secondary adjustments may appear across adjacent routes, facilities and schedules.",
  thirdTitle: "System-wide trade-offs may emerge",
  thirdDescription: "Further analysis is needed to identify long-horizon spillover effects and mitigations.",
  severity: 68,
  isPositiveIntervention: false,
};

function getScenarioInsights(scenario) {
  const description = (scenario.description || "").toLowerCase();
  const matchedRule = scenarioRules.find((rule) =>
    rule.keywords.some((keyword) => description.includes(keyword))
  );
  const pathway = matchedRule || defaultPathway;

  return {
    firstTitle: pathway.firstTitle,
    firstDescription: pathway.firstDescription,
    secondTitle: pathway.secondTitle,
    secondDescription: pathway.secondDescription,
    thirdTitle: pathway.thirdTitle,
    thirdDescription: pathway.thirdDescription,
    severity: scenario.severity ?? pathway.severity,
    isPositiveIntervention: scenario.isPositiveIntervention ?? pathway.isPositiveIntervention,
    domains: (scenario.domains || []).map((domain) => ({
      name: domain,
      description: domainDescriptions[domain] || "Further analysis is needed to understand this domain.",
    })),
  };
}

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
    },
    Environment: {
      baseline: 64.0,
      unit: "AQI",
      meanShift: sign * (8.5 + factor * 26.0),
      volatility: 3.2 + factor * 6.5,
      riskScore: isPositiveIntervention ? Math.max(15, Math.round(38 - factor * 22)) : Math.min(94, Math.round(40 + factor * 46)),
    },
    "Public Health": {
      baseline: 6.2,
      unit: "min EMS",
      meanShift: sign * (1.1 + factor * 4.6),
      volatility: 0.7 + factor * 1.4,
      riskScore: isPositiveIntervention ? Math.max(16, Math.round(35 - factor * 18)) : Math.min(95, Math.round(42 + factor * 50)),
    },
    "Human Behaviour": {
      baseline: 91.0,
      unit: "% compliance",
      meanShift: -sign * (7.0 + factor * 24.0),
      volatility: 2.5 + factor * 5.2,
      riskScore: isPositiveIntervention ? Math.max(20, Math.round(36 - factor * 14)) : Math.min(92, Math.round(44 + factor * 45)),
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
    const p50 = samples[Math.floor(iterations * 0.5)];
    domainDistributions[dKey] = {
      ...m,
      enabled: domains.includes(dKey),
      p50: Number(p50.toFixed(1)),
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

  return {
    id: `SIM-${seed.toString().slice(0, 5)}`,
    iterations,
    lowBound: Math.round(compositeSamples[Math.floor(iterations * 0.1)]),
    medianOutcome: Math.round(compositeSamples[Math.floor(iterations * 0.5)]),
    highBound: Math.round(compositeSamples[Math.floor(iterations * 0.9)]),
    domains: domainDistributions,
  };
}

function ScenarioForm({ onSubmit, initialValues = null }) {
  const [description, setDescription] = useState(initialValues?.description || "");
  const [location, setLocation] = useState(initialValues?.location || "Kolkata");
  const [duration, setDuration] = useState(initialValues?.duration || "6 hours");
  const [severity, setSeverity] = useState(initialValues?.severity || 72);
  const [isPositiveIntervention, setIsPositiveIntervention] = useState(
    Boolean(initialValues?.isPositiveIntervention)
  );
  const [notice, setNotice] = useState(null);
  const [selectedDomains, setSelectedDomains] = useState(
    initialValues?.domains || [
      "Transportation",
      "Environment",
      "Public Health",
      "Human Behaviour",
    ]
  );

  const toggleDomain = (domain) => {
    setSelectedDomains((current) =>
      current.includes(domain)
        ? current.filter((item) => item !== domain)
        : [...current, domain]
    );
  };

  const loadTemplate = (template) => {
    setDescription(template.description);
    setLocation(template.location);
    setDuration(template.duration);
    setSeverity(template.severity || 72);
    setIsPositiveIntervention(Boolean(template.isPositiveIntervention));
    setSelectedDomains(template.domains);
    setNotice(null);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validation = validateSystemicPrompt(description);
    if (!validation.isValid) {
      setNotice(validation);
      return;
    }
    if (selectedDomains.length === 0) {
      setNotice({
        title: "No System Selected",
        message: "Please select at least one domain to examine consequences.",
      });
      return;
    }
    setNotice(null);
    onSubmit({
      description: description.trim(),
      location: location.trim() || "Kolkata",
      duration,
      severity,
      isPositiveIntervention,
      domains: selectedDomains,
    });
  };

  const resetForm = () => {
    setDescription("");
    setLocation("Kolkata");
    setDuration("6 hours");
    setSeverity(72);
    setIsPositiveIntervention(false);
    setNotice(null);
    setSelectedDomains([
      "Transportation",
      "Environment",
      "Public Health",
      "Human Behaviour",
    ]);
  };

  return (
    <form className="scenario-form" onSubmit={handleSubmit}>
      <div className="simulator-heading">
        <div>
          <span className="eyebrow">SCENARIO DESIGN</span>
          <h2>Let's explore a possibility.</h2>
          <p>Describe a decision. VYRON will help map the systems it could affect.</p>
        </div>
        <span className="ai-indicator">
          <Sparkles size={14} />
          NLP + MONTE CARLO
        </span>
      </div>

      {notice && (
        <div
          role="alert"
          className="mb-4 p-3.5 rounded-[4px] border border-[#e2ceb5] bg-[#f6efe6] text-[#6e522d] text-xs flex items-start gap-2.5"
        >
          <ShieldAlert size={16} className="shrink-0 mt-0.5 text-[#a27c45]" />
          <div>
            <strong className="block mb-0.5">{notice.title}</strong>
            <span>{notice.message}</span>
          </div>
        </div>
      )}

      <div className="form-section">
        <label htmlFor="scenario-description">What would you like to explore?</label>
        <textarea
          id="scenario-description"
          value={description}
          onChange={(event) => {
            setDescription(event.target.value);
            if (notice) setNotice(null);
          }}
          placeholder="Imagine this... What if a major road in Kolkata was closed during rush hour?"
          rows={5}
          required
        />
        <span className="field-hint">Be specific about the decision and what might change.</span>
      </div>

      <div className="form-grid">
        <div className="form-section">
          <label htmlFor="scenario-location">
            <MapPin size={15} /> Location
          </label>
          <input
            id="scenario-location"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            placeholder="Enter a city or region"
            required
          />
        </div>

        <div className="form-section">
          <label htmlFor="scenario-duration">
            <Clock3 size={15} /> Time period
          </label>
          <select
            id="scenario-duration"
            value={duration}
            onChange={(event) => setDuration(event.target.value)}
          >
            {durationOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="form-section">
        <div className="flex items-center justify-between">
          <label htmlFor="scenario-severity">Perturbation Intensity</label>
          <span className="text-xs font-bold text-[#315b48]">{severity}%</span>
        </div>
        <input
          id="scenario-severity"
          type="range"
          min="15"
          max="100"
          value={severity}
          onChange={(e) => setSeverity(Number(e.target.value))}
          className="w-full accent-[#315b48] cursor-pointer mt-1"
        />
      </div>

      <div className="form-section">
        <label>Which systems should we examine?</label>
        <div className="domain-selector">
          {simulationDomains.map((domain) => (
            <button
              type="button"
              key={domain.name}
              className={
                selectedDomains.includes(domain.name)
                  ? "domain-option selected"
                  : "domain-option"
              }
              onClick={() => toggleDomain(domain.name)}
            >
              <span className="domain-checkbox">
                {selectedDomains.includes(domain.name) ? "✓" : ""}
              </span>
              <span>
                <strong>{domain.name}</strong>
                <small>{domain.description}</small>
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="template-section">
        <span className="field-hint">NEED AN IDEA? START WITH ONE</span>
        <div className="template-list">
          {scenarioTemplates.map((template) => (
            <button
              type="button"
              key={template.title}
              className="template-button"
              onClick={() => loadTemplate(template)}
            >
              {template.title}
              <ArrowRight size={14} />
            </button>
          ))}
        </div>
      </div>

      <div className="form-actions">
        <button type="button" className="reset-button" onClick={resetForm}>
          <RotateCcw size={15} />
          Reset
        </button>
        <button type="submit" className="run-button">
          Explore scenario
          <ArrowRight size={17} />
        </button>
      </div>
    </form>
  );
}

function Simulator() {
  const [scenario, setScenario] = useState(null);
  const [prepared, setPrepared] = useState(false);

  const handleScenarioSubmit = (data) => {
    setScenario(data);
    setPrepared(true);
  };

  const handleEdit = () => {
    setPrepared(false);
  };

  return (
    <div className="simulator-page">
      <div className="simulator-heading">
        <div className="simulator-heading-icon">
          <BrainCircuit size={23} />
        </div>
        <div>
          <span className="eyebrow">VYRON / SCENARIO RESEARCH</span>
          <h1>Explore a possibility.</h1>
          <p>Change one thing. Understand what else might change.</p>
        </div>
      </div>

      {!prepared ? (
        <ScenarioForm onSubmit={handleScenarioSubmit} initialValues={scenario} />
      ) : (
        <div className="p-6 rounded-[4px] border border-[#dedfd7] bg-[#faf9f5] space-y-4">
          <div className="flex items-center justify-between gap-3">
            <div>
              <span className="text-[10px] font-bold uppercase text-[#a27c45]">
                SCENARIO PREPARED
              </span>
              <h2 className="font-serif-display text-2xl mt-1">
                "{scenario?.description}"
              </h2>
              <p className="text-xs text-[#6d766d] mt-1">
                {scenario?.location} · {scenario?.duration} · Intensity{" "}
                {scenario?.severity}%
              </p>
            </div>
            <button
              type="button"
              onClick={handleEdit}
              className="px-4 py-2 rounded-[2px] border border-[#d8dbd1] bg-[#f4f4ee] text-xs font-bold inline-flex items-center gap-1.5"
            >
              <ArrowLeft size={14} /> Edit Scenario
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {(scenario?.domains || []).map((domain) => (
              <div
                key={domain}
                className="p-3.5 rounded-[3px] border border-[#dedfd7] bg-[#f5f5ef]"
              >
                <strong className="text-xs block text-[#203e31]">{domain}</strong>
                <p className="text-[11px] text-[#656f65] mt-1">
                  {domainDescriptions[domain] ||
                    "Systemic effects across connected pathways."}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Simulator;
import { useState } from "react";
import {
  MapPin,
  Clock3,
  Sparkles,
  ArrowRight,
  RotateCcw,
  ShieldAlert,
} from "lucide-react";

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
          <p>
            Describe a decision. VYRON will help map the systems it could affect.
          </p>
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

export default ScenarioForm;
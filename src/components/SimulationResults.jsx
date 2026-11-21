
import React from "react";
import {
  ArrowLeft,
  Activity,
  Network,
  TrendingUp,
  ShieldAlert,
  FileText,
  Clock3,
  MapPin,
  Layers3,
  GitBranch,
  Info,
  ArrowRight,
  CircleHelp,
} from "lucide-react";

import { getScenarioInsights } from "../data/scenarioInsights.js";

const domainDetails = {
  Transportation: {
    icon: "↗",
    description:
      "Movement patterns, route accessibility and possible congestion changes.",
    focus: "Mobility and flow",
  },
  Environment: {
    icon: "◌",
    description:
      "Possible changes in local air quality, noise, heat and waste conditions.",
    focus: "Environmental conditions",
  },
  "Public Health": {
    icon: "+",
    description:
      "Potential effects on emergency access, public facilities and hygiene.",
    focus: "Community wellbeing",
  },
  "Human Behaviour": {
    icon: "◎",
    description:
      "Possible changes in crowd movement, waiting behaviour and compliance.",
    focus: "People and behaviour",
  },
};

function SimulationResults({ scenario, onBack }) {
  const insights = getScenarioInsights(scenario);
  const selectedDomains = scenario?.domains || [];

  const risks = [
    {
      title: "Unverified starting conditions",
      description:
        "Actual traffic, crowd density and local infrastructure conditions have not yet been measured.",
      level: "Data limitation",
    },
    {
      title: "Indirect effects",
      description:
        "Changes in one system may influence other systems in ways that depend on local conditions.",
      level: "Uncertain",
    },
    {
      title: "Time-dependent outcomes",
      description:
        "The consequences may vary throughout the selected duration as people and systems adapt.",
      level: "Time sensitivity",
    },
  ];

  return (
    <div className="results-page">
      {/* PAGE HEADER */}
      <div className="results-heading">
        <div>
          <span className="eyebrow">VYRON / ANALYSIS REPORT</span>
          <h1>Consequences, connected.</h1>
          <p>
            Explore the possible ripple effects of a decision
            across interconnected urban systems.
          </p>
        </div>

        <button className="secondary-button" onClick={onBack}>
          <ArrowLeft size={16} />
          Back
        </button>
      </div>

      {/* PROTOTYPE NOTICE */}
      <div className="results-notice">
        <Activity size={18} />
        <div>
          <strong>Illustrative prototype</strong>
          <span>
            No live simulation engine is connected. The analysis below
            demonstrates the intended VYRON experience.
          </span>
        </div>
      </div>

      {/* SCENARIO OVERVIEW */}
      <section className="results-overview">
        <div className="results-panel scenario-panel">
          <span className="eyebrow">YOUR SCENARIO</span>
          <h2>{scenario?.description || "Untitled scenario"}</h2>

          <div className="scenario-meta">
            <span>
              <MapPin size={15} />
              {scenario?.location || "Location not specified"}
            </span>
            <span>
              <Clock3 size={15} />
              {scenario?.duration || "Duration not specified"}
            </span>
          </div>
        </div>

        <div className="results-panel domain-panel">
          <span className="eyebrow">SYSTEMS UNDER REVIEW</span>
          <h2>{selectedDomains.length} domains selected</h2>

          <div className="domain-tags">
            {selectedDomains.map((domain) => (
              <span key={domain}>{domain}</span>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT OVERVIEW */}
      <section className="results-section">
        <div className="section-heading">
          <TrendingUp size={19} />
          <h2>01 / Impact overview</h2>
        </div>

        <p className="results-section-description">
          The systems selected for analysis and the factors VYRON
          intends to examine within each one.
        </p>

        <div className="impact-grid">
          {selectedDomains.map((domain) => {
            const details = domainDetails[domain] || {
              icon: "◇",
              description:
                "Potential changes in this system will be examined.",
              focus: "System-level effects",
            };

            return (
              <div className="impact-card" key={domain}>
                <div className="impact-card-top">
                  <span className="impact-icon">{details.icon}</span>
                  <span className="impact-status">
                    Awaiting analysis
                  </span>
                </div>

                <h3>{domain}</h3>
                <p>{details.description}</p>

                <div className="impact-card-footer">
                  <span>{details.focus}</span>
                  <CircleHelp size={15} />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CONSEQUENCE PATHWAYS */}
      <section className="results-section">
        <div className="section-heading">
          <Network size={19} />
          <h2>02 / Consequence pathways</h2>
        </div>

        <p className="results-section-description">
          Explore how the initial decision could influence
          other connected systems.
        </p>

        <div className="pathway-flow">
          <div className="pathway-node primary-node">
            <span>INITIAL CHANGE</span>
            <h3>{scenario?.description}</h3>
          </div>

          <div className="pathway-connector">
            <span>01</span>
            <div />
          </div>

          <div className="pathway-node">
            <span>FIRST-ORDER EFFECT</span>
            <h3>{insights.firstTitle}</h3>
            <p>{insights.firstDescription}</p>
          </div>

          <div className="pathway-connector">
            <span>02</span>
            <div />
          </div>

          <div className="pathway-node">
            <span>SECOND-ORDER EFFECT</span>
            <h3>{insights.secondTitle}</h3>
            <p>{insights.secondDescription}</p>
          </div>

          <div className="pathway-connector">
            <span>03</span>
            <div />
          </div>

          <div className="pathway-node outcome-node">
            <span>POTENTIAL SYSTEM IMPACTS</span>

            <div className="pathway-domains">
              {insights.domains.map((domain) => (
                <div className="pathway-domain" key={domain.name}>
                  <span>{domain.name}</span>
                  <small>{domain.description}</small>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BASELINE COMPARISON */}
      <section className="results-section">
        <div className="section-heading">
          <Layers3 size={19} />
          <h2>03 / Baseline comparison</h2>
        </div>

        <p className="results-section-description">
          A future comparison will show how conditions may differ
          between the existing situation and the proposed scenario.
        </p>

        <div className="comparison-panel">
          <div className="comparison-header">
            <div>
              <span className="eyebrow">COMPARISON FRAMEWORK</span>
              <h3>Existing conditions vs. proposed change</h3>
            </div>
            <span className="comparison-badge">
              <Info size={14} />
              Not calculated
            </span>
          </div>

          <div className="comparison-columns">
            <div className="comparison-column">
              <span className="comparison-label">BASELINE</span>
              <h4>Current conditions</h4>
              <p>
                Reference data describing the existing system before
                the proposed change.
              </p>
              <span className="comparison-state">
                Awaiting baseline data
              </span>
            </div>

            <div className="comparison-arrow">
              <ArrowRight size={21} />
            </div>

            <div className="comparison-column">
              <span className="comparison-label">SCENARIO</span>
              <h4>After the proposed change</h4>
              <p>
                Estimated conditions after the scenario is introduced
                and its effects are modelled.
              </p>
              <span className="comparison-state">
                Awaiting simulation
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* RISKS */}
      <section className="results-section">
        <div className="section-heading">
          <ShieldAlert size={19} />
          <h2>04 / Risks and uncertainty</h2>
        </div>

        <p className="results-section-description">
          Important limitations and assumptions that should be
          considered before interpreting any future results.
        </p>

        <div className="risk-list">
          {risks.map((risk, index) => (
            <div className="risk-item" key={risk.title}>
              <span className="risk-number">
                0{index + 1}
              </span>

              <div className="risk-content">
                <h3>{risk.title}</h3>
                <p>{risk.description}</p>
              </div>

              <span className="risk-level">{risk.level}</span>
            </div>
          ))}
        </div>
      </section>

      {/* EXECUTIVE OBSERVATIONS */}
      <section className="results-section">
        <div className="section-heading">
          <FileText size={19} />
          <h2>05 / Executive observations</h2>
        </div>

        <div className="executive-panel">
          <span className="eyebrow">SCENARIO BRIEF</span>
          <h2>What should decision-makers consider?</h2>

          <p>
            {insights.firstDescription}
          </p>

          <p>
            {insights.secondDescription}
          </p>

          <div className="executive-footer">
            <GitBranch size={16} />
            <span>
              These observations are illustrative and require
              validation through real data and simulation.
            </span>
          </div>
        </div>
      </section>

      <div className="results-bottom">
        <span>VYRON</span>
        <span>SEE BEYOND. THINK AHEAD.</span>
      </div>
    </div>
  );
}

export default SimulationResults;


import {
  MapPin,
  Clock3,
  Activity,
  ArrowRight,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

function SimulationSummary({ scenario, onEdit, onRun }) {
  if (!scenario) return null;

  return (
    <section className="simulation-summary">
      <div className="summary-header">
        <div>
          <span className="eyebrow">SCENARIO REVIEW</span>
          <h2>Here's what we're exploring.</h2>
          <p>
            Review the details before preparing your analysis.
          </p>
        </div>

        <span className="review-status">
          <ShieldCheck size={15} />
          Ready for review
        </span>
      </div>

      <div className="summary-scenario">
        <span className="summary-label">YOUR HYPOTHETICAL SCENARIO</span>
        <h3>{scenario.description}</h3>

        <div className="summary-meta">
          <span>
            <MapPin size={15} />
            {scenario.location}
          </span>

          <span>
            <Clock3 size={15} />
            {scenario.duration}
          </span>
        </div>
      </div>

      <div className="summary-domains">
        <span className="summary-label">
          SYSTEMS INCLUDED IN THIS EXPLORATION
        </span>

        <div className="summary-domain-list">
          {scenario.domains.map((domain) => (
            <span className="summary-domain" key={domain}>
              <Activity size={13} />
              {domain}
            </span>
          ))}
        </div>
      </div>

      <div className="summary-note">
        <Sparkles size={18} />
        <p>
          <strong>What happens next?</strong>
          VYRON will prepare the selected systems for
          cross-domain impact analysis. Actual predictions
          will depend on the connected simulation engine
          and available data.
        </p>
      </div>

      <div className="summary-actions">
        <button className="reset-button" onClick={onEdit}>
          Edit scenario
        </button>

        <button className="run-button" onClick={onRun}>
          Prepare analysis
          <ArrowRight size={17} />
        </button>
      </div>
    </section>
  );
}

export default SimulationSummary;

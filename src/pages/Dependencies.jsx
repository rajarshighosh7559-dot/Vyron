import { useState, useMemo } from "react";

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
    },
    Environment: {
      baseline: 64.0,
      unit: "AQI",
      meanShift: sign * (8.5 + factor * 26.0),
      volatility: 3.2 + factor * 6.5,
    },
    "Public Health": {
      baseline: 6.2,
      unit: "min EMS",
      meanShift: sign * (1.1 + factor * 4.6),
      volatility: 0.7 + factor * 1.4,
    },
    "Human Behaviour": {
      baseline: 91.0,
      unit: "% compliance",
      meanShift: -sign * (7.0 + factor * 24.0),
      volatility: 2.5 + factor * 5.2,
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
    iterations,
    medianOutcome: Math.round(compositeSamples[Math.floor(iterations * 0.5)]),
    exceedanceProb: Number(
      ((compositeSamples.filter((v) => v >= 75).length / iterations) * 100).toFixed(1)
    ),
    domains: domainDistributions,
  };
}

const baseNodes = [
  {
    id: "decision",
    order: 0,
    title: "Gate 2 closed",
    category: "Initial decision",
    x: 50,
    y: 45,
    delay: "T+0 min",
    description:
      "The closure removes one campus entry and exit point during the recess period.",
    effects: ["pedestrian", "routes", "crowding"],
  },
  {
    id: "pedestrian",
    order: 1,
    title: "Pedestrian flow",
    category: "Movement",
    x: 22,
    y: 17,
    delay: "T+6 min",
    description:
      "People who would normally use Gate 2 may need to approach the campus through another entrance.",
    effects: ["crowding", "waiting"],
  },
  {
    id: "routes",
    order: 1,
    title: "Route changes",
    category: "Transportation",
    x: 78,
    y: 17,
    delay: "T+9 min",
    description:
      "Students and visitors may adjust their walking routes or use a different campus entrance.",
    effects: ["crowding", "access"],
  },
  {
    id: "crowding",
    order: 2,
    title: "Crowd concentration",
    category: "Human behaviour",
    x: 22,
    y: 73,
    delay: "T+18 min",
    description:
      "Redirected foot traffic may concentrate around the entrances that remain available.",
    effects: ["waiting", "access"],
  },
  {
    id: "waiting",
    order: 2,
    title: "Waiting time",
    category: "Public experience",
    x: 50,
    y: 88,
    delay: "T+25 min",
    description:
      "A higher concentration of people could increase the time needed to enter or leave the campus.",
    effects: ["access"],
  },
  {
    id: "access",
    order: 3,
    title: "Emergency access",
    category: "Public safety",
    x: 78,
    y: 73,
    delay: "T+40 min",
    description:
      "Changes in pedestrian movement may affect how easily emergency personnel can reach campus areas.",
    effects: [],
  },
];

const connections = [
  { from: "decision", to: "pedestrian", weight: "w=0.88" },
  { from: "decision", to: "routes", weight: "w=0.81" },
  { from: "pedestrian", to: "crowding", weight: "w=0.79" },
  { from: "routes", to: "crowding", weight: "w=0.72" },
  { from: "crowding", to: "waiting", weight: "w=0.84" },
  { from: "crowding", to: "access", weight: "w=0.68" },
  { from: "waiting", to: "access", weight: "w=0.85" },
];

function isConnected(a, b) {
  return connections.some(
    ({ from, to }) => (from === a && to === b) || (from === b && to === a)
  );
}

export default function Dependencies() {
  const [selected, setSelected] = useState("decision");
  const [orderFilter, setOrderFilter] = useState("all");

  const simStats = useMemo(
    () =>
      runMonteCarloSimulation({
        description: "What if Gate 2 stays closed during recess?",
        location: "Techno India University · Salt Lake Sector V",
        duration: "6 hours",
        severity: 74,
        iterations: 1000,
      }),
    []
  );

  const nodes = useMemo(() => {
    return baseNodes.map((n) => {
      if (n.id === "decision") {
        return {
          ...n,
          metric: `Stress ${simStats.medianOutcome}/100`,
        };
      }
      if (n.id === "routes" || n.id === "pedestrian") {
        const t = simStats.domains.Transportation;
        return {
          ...n,
          metric: `${t.p50} min (${t.deltaPct > 0 ? `+${t.deltaPct}%` : `${t.deltaPct}%`})`,
        };
      }
      if (n.id === "crowding" || n.id === "waiting") {
        const b = simStats.domains["Human Behaviour"];
        return {
          ...n,
          metric: `${b.p50}% (${b.deltaPct > 0 ? `+${b.deltaPct}%` : `${b.deltaPct}%`})`,
        };
      }
      const h = simStats.domains["Public Health"];
      return {
        ...n,
        metric: `${h.p50} min EMS`,
      };
    });
  }, [simStats]);

  const selectedNode = nodes.find((node) => node.id === selected) || nodes[0];

  const isRelated = (nodeId) =>
    nodeId === selected ||
    isConnected(selected, nodeId) ||
    selectedNode?.effects.includes(nodeId) ||
    nodes.find((node) => node.id === nodeId)?.effects.includes(selected);

  const isNodeVisible = (node) =>
    orderFilter === "all" || node.order === 0 || node.order === Number(orderFilter);

  return (
    <main className="dependency-page">
      <section className="dependency-heading">
        <div>
          <p className="eyebrow">SYSTEMS INTELLIGENCE / 01</p>
          <h1>Dependency Network</h1>
          <p className="dependency-subtitle">
            One decision. Multiple systems. Connected consequences.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <div className="inline-flex rounded-[3px] border border-[#d8dbd1] bg-[#faf9f5] p-0.5 text-[11px]">
            {[
              { id: "all", label: "All Orders" },
              { id: "1", label: "1st-Order" },
              { id: "2", label: "2nd-Order" },
              { id: "3", label: "3rd-Order" },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setOrderFilter(tab.id)}
                className={`px-2.5 py-1 rounded-[2px] font-semibold transition-colors ${
                  orderFilter === tab.id
                    ? "bg-[#315b48] text-white"
                    : "text-[#5f6960] hover:text-[#242b26]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="network-status">
            <span className="status-dot" />
            {simStats.iterations.toLocaleString()} Monte Carlo runs
          </div>
        </div>
      </section>

      <section className="dependency-scenario">
        <div>
          <span className="scenario-label">CURRENT EXAMPLE SCENARIO</span>
          <h2>What if Gate 2 stays closed during recess?</h2>
          <p>
            Techno India University · Salt Lake Sector V · Typical Stress{" "}
            <strong>{simStats.medianOutcome}/100</strong> (Tail Risk ≥75:{" "}
            <strong>{simStats.exceedanceProb}%</strong>)
          </p>
        </div>
        <span className="scenario-duration">6 HOURS</span>
      </section>

      <section className="network-layout">
        <div className="network-panel">
          <div className="network-panel-heading">
            <div>
              <h3>System relationship map</h3>
              <p>Select a node to explore its connections & simulated metrics</p>
            </div>
            <span className="node-count">06 NODES</span>
          </div>

          <div className="network-canvas">
            <svg
              className="network-lines"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              {connections.map(({ from, to, weight }) => {
                const a = nodes.find((node) => node.id === from);
                const b = nodes.find((node) => node.id === to);
                const active = selected === from || selected === to;
                const midX = (a.x + b.x) / 2;
                const midY = (a.y + b.y) / 2;

                return (
                  <g key={`${from}-${to}`}>
                    <line
                      x1={a.x}
                      y1={a.y}
                      x2={b.x}
                      y2={b.y}
                      className={active ? "network-line active" : "network-line"}
                    />
                    <text
                      x={midX}
                      y={midY - 1.2}
                      textAnchor="middle"
                      fontSize="2.8"
                      fontWeight="700"
                      fill={active ? "#a27c45" : "#777e75"}
                    >
                      {weight}
                    </text>
                  </g>
                );
              })}
            </svg>

            {nodes.map((node) => {
              const visible = isNodeVisible(node);
              return (
                <button
                  key={node.id}
                  className={[
                    "network-node",
                    node.id === "decision" ? "decision-node" : "",
                    selected === node.id ? "selected" : "",
                    isRelated(node.id) ? "related" : "dimmed",
                    !visible ? "opacity-30" : "",
                  ].join(" ")}
                  style={{
                    left: `${node.x}%`,
                    top: `${node.y}%`,
                  }}
                  onClick={() => setSelected(node.id)}
                  type="button"
                >
                  <span className="network-node-category">
                    {node.category} · {node.delay}
                  </span>
                  <strong>{node.title}</strong>
                  <span className="block text-[10px] opacity-80 mt-0.5">
                    {node.metric}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="network-legend">
            <span><i className="legend-dot decision-legend" /> Initial decision</span>
            <span><i className="legend-dot impact-legend" /> Connected system</span>
            <span><i className="legend-line" /> Weighted relationship</span>
          </div>
        </div>

        <aside className="node-inspector">
          <p className="eyebrow">NODE INSPECTOR</p>
          <span className="inspector-category">
            {selectedNode.category} · {selectedNode.delay}
          </span>
          <h2>{selectedNode.title}</h2>
          <p className="inspector-description">
            {selectedNode.description}
          </p>

          <div className="mt-3 p-2.5 rounded-[3px] bg-[#f3f2ec] border border-[#dedfd7] text-xs">
            <span className="text-[10px] font-bold uppercase text-[#777e75] block">
              Simulated Median Metric
            </span>
            <strong className="text-sm text-[#315b48]">{selectedNode.metric}</strong>
          </div>

          <div className="inspector-divider" />

          <h4>Direct connections</h4>
          <div className="connection-list">
            {connections
              .filter(({ from, to }) => from === selected || to === selected)
              .map(({ from, to, weight }) => {
                const otherId = from === selected ? to : from;
                const other = nodes.find((node) => node.id === otherId);

                return (
                  <button
                    key={otherId}
                    type="button"
                    className="connection-item"
                    onClick={() => setSelected(otherId)}
                  >
                    <span>
                      {other.title}{" "}
                      <small className="text-[#a27c45] font-semibold">({weight})</small>
                    </span>
                    <span className="connection-arrow">↗</span>
                  </button>
                );
              })}
          </div>

          <p className="inspector-note">
            <strong>Interpretation note</strong>
            <br />
            Connections represent plausible causal pathways and Monte Carlo ranges for this scenario.
          </p>
        </aside>
      </section>

      <section className="dependency-footer">
        <div>
          <span className="eyebrow">WHY THIS MATTERS</span>
          <h3>Consequences rarely stay in one place.</h3>
        </div>
        <p>
          A change in pedestrian movement can influence crowd distribution,
          waiting time and access conditions. VYRON is designed to make these
          relationships easier to examine.
        </p>
      </section>
    </main>
  );
}
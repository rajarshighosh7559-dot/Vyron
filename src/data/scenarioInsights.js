const personalPatterns = [
  /\b(break up|girlfriend|boyfriend|crush|marry|divorce|lonely|depressed|sad|love me|my life|my exam|cheat on|should i quit my job)\b/i,
  /\b(astrology|horoscope|zodiac|lottery|stock pick|crypto price)\b/i,
];

export function validateSystemicPrompt(rawPrompt = "") {
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

export function getScenarioInsights(scenario) {
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
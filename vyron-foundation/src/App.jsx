import { useEffect, useState } from "react";
import {
  Activity, ArrowDownRight, ArrowUpRight, Bell, BrainCircuit, Check,
  ChevronDown, ChevronRight, CircleHelp, Clock3, Command, FileText,
  GitBranch, Globe2, HeartPulse, LayoutDashboard, Leaf, Menu, Network,
  Play, Plus, Route, Search, Settings, ShieldAlert, ShieldCheck, Sparkles,
  Users, X, Zap, BarChart3, Download, SlidersHorizontal
} from "lucide-react";
import {
  Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip,
  XAxis, YAxis, BarChart, Bar
} from "recharts";
import "./App.css";

const navItems = [
  { label: "Command Center", icon: LayoutDashboard },
  { label: "Scenario Simulator", icon: BrainCircuit },
  { label: "Dependency Network", icon: GitBranch },
  { label: "Analytics", icon: BarChart3 },
  { label: "Impact Reports", icon: FileText },
];

const domainItems = [
  { name: "Transportation & Flow", detail: "Congestion, route access, pedestrian movement", icon: Route, color: "cyan", signal: "Mobility" },
  { name: "Environment", detail: "Air quality, noise, heat and waste", icon: Leaf, color: "green", signal: "Ecology" },
  { name: "Public Health & Safety", detail: "Emergency access and service pressure", icon: HeartPulse, color: "violet", signal: "Wellbeing" },
  { name: "Aggregate Human Behaviour", detail: "Crowd movement, waiting and compliance", icon: Users, color: "amber", signal: "Behaviour" },
];

const trendData = [
  { step: "Baseline", transport: 22, environment: 18, health: 14 },
  { step: "T+1", transport: 34, environment: 24, health: 20 },
  { step: "T+2", transport: 48, environment: 32, health: 29 },
  { step: "T+3", transport: 42, environment: 39, health: 35 },
  { step: "T+4", transport: 57, environment: 43, health: 41 },
  { step: "T+5", transport: 63, environment: 49, health: 46 },
];

const demoScenarios = [
  { title: "Major road closure near a hospital", domain: "Transportation", state: "Example", date: "Illustrative scenario" },
  { title: "Increase city-wide tree cover", domain: "Environment", state: "Example", date: "Illustrative scenario" },
  { title: "Free public transport during peak hours", domain: "Human behaviour", state: "Example", date: "Illustrative scenario" },
];

function Brand() {
  return <div className="brand-lockup">
    <div className="brand-symbol"><span>V</span><i /></div>
    <div><div className="brand-name">VYRON</div><div className="brand-caption">CONSEQUENCE INTELLIGENCE</div></div>
  </div>;
}

function Sidebar({ active, setActive, open, close }) {
  return <>
    {open && <button className="sidebar-scrim" onClick={close} aria-label="Close menu" />}
    <aside className={`sidebar ${open ? "sidebar-visible" : ""}`}>
      <div className="sidebar-top"><Brand /><button className="icon-button mobile-only" onClick={close} aria-label="Close menu"><X size={18}/></button></div>
      <div className="nav-caption">WORKSPACE</div>
      <nav className="nav-list">
        {navItems.map(item => {
          const Icon = item.icon;
          return <button key={item.label} className={`nav-link ${active === item.label ? "selected" : ""}`} onClick={() => {setActive(item.label); close();}}>
            <Icon size={18}/><span>{item.label}</span>{active === item.label && <i className="nav-active-dot"/>}
          </button>;
        })}
      </nav>
      <div className="sidebar-divider"/>
      <div className="nav-caption">PREFERENCES</div>
      <button className={`nav-link ${active === "Settings" ? "selected" : ""}`} onClick={() => {setActive("Settings"); close();}}><Settings size={18}/><span>Settings</span></button>
      <div className="sidebar-spacer"/>
      <div className="system-card">
        <div className="system-card-head"><span className="pulse-dot"/><span>SYSTEM STATUS</span><b>READY</b></div>
        <p>Workspace interface is running in preview mode.</p>
        <div className="system-progress"><i/></div>
        <small>FRONTEND PREVIEW · NO LIVE ENGINE</small>
      </div>
      <div className="profile-row"><div className="profile-avatar">V</div><div><strong>VYRON WORKSPACE</strong><span>Local development</span></div><ChevronDown size={15}/></div>
    </aside>
  </>;
}

function Topbar({ active, onMenu }) {
  return <header className="topbar">
    <div className="topbar-left">
      <button className="icon-button mobile-only" onClick={onMenu} aria-label="Open menu"><Menu size={20}/></button>
      <div className="crumb"><span>VYRON</span><ChevronRight size={14}/><b>{active}</b></div>
    </div>
    <div className="topbar-actions">
      <div className="workspace-chip"><span className="pulse-dot"/> LOCAL WORKSPACE</div>
      <button className="icon-button" aria-label="Search" title="Search"><Search size={18}/></button>
      <button className="icon-button notification-button" aria-label="Notifications" title="Notifications"><Bell size={18}/><i/></button>
      <div className="topbar-divider"/>
      <div className="top-avatar">V</div>
    </div>
  </header>;
}

function SectionHeading({ eyebrow, title, description, action }) {
  return <div className="section-heading">
    <div><div className="eyebrow">{eyebrow}</div><h2>{title}</h2>{description && <p>{description}</p>}</div>
    {action}
  </div>;
}

function MetricCard({ label, value, note, icon: Icon, tone = "cyan" }) {
  return <div className="metric-card">
    <div className={`metric-icon ${tone}`}><Icon size={18}/></div>
    <div className="metric-label">{label}</div>
    <div className="metric-value">{value}</div>
    <div className="metric-note">{note}</div>
  </div>;
}

function Dashboard({ setActive, setScenario }) {
  return <div className="page">
    <section className="hero">
      <div className="hero-copy">
        <div className="eyebrow"><Sparkles size={13}/> DECISION INTELLIGENCE PLATFORM</div>
        <h1>Every decision<br/><span>creates a ripple.</span></h1>
        <p>Explore how hypothetical changes can travel through connected urban systems — from the first effect to the wider consequences.</p>
        <div className="hero-actions"><button className="primary-button" onClick={() => setActive("Scenario Simulator")}><Play size={15} fill="currentColor"/> Explore a scenario <ArrowUpRight size={15}/></button><span className="hero-footnote"><ShieldCheck size={14}/> Explore possibilities. Change nothing.</span></div>
      </div>
      <div className="hero-visual" aria-label="Abstract network visualization">
        <div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="orbit orbit-three"/>
        <div className="orbit-core"><div className="core-inner"><Network size={29}/></div></div>
        <div className="orbit-node node-a"><Route size={15}/></div><div className="orbit-node node-b"><Leaf size={15}/></div><div className="orbit-node node-c"><HeartPulse size={15}/></div><div className="orbit-node node-d"><Users size={15}/></div>
        <div className="visual-label label-a">TRANSPORT</div><div className="visual-label label-b">ENVIRONMENT</div><div className="visual-label label-c">PUBLIC HEALTH</div>
      </div>
    </section>

    <section className="metrics-grid">
      <MetricCard label="CONNECTED DOMAINS" value="04" note="Initial model scope" icon={Globe2}/>
      <MetricCard label="SCENARIO EXAMPLES" value="03" note="Illustrative prompts" icon={Command} tone="violet"/>
      <MetricCard label="SIMULATION ENGINE" value="PENDING" note="Backend integration required" icon={Activity} tone="amber"/>
      <MetricCard label="WORKSPACE STATUS" value="PREVIEW" note="Frontend development mode" icon={ShieldCheck} tone="green"/>
    </section>

    <section className="content-section">
      <SectionHeading eyebrow="START EXPLORING" title="What do you want to understand?" description="Describe a real-world change and explore its possible cross-domain effects."/>
      <div className="scenario-composer">
        <div className="composer-top"><div className="composer-icon"><BrainCircuit size={20}/></div><div><strong>Scenario exploration</strong><span>Write a hypothetical situation in plain language</span></div><span className="preview-tag">PREVIEW MODE</span></div>
        <textarea placeholder="What if a major road near a busy hospital was closed during rush hour?" onChange={e => setScenario(e.target.value)} />
        <div className="composer-bottom"><span><ShieldCheck size={14}/> No real-world actions are performed.</span><button className="primary-button small" onClick={() => setActive("Scenario Simulator")}>Continue to simulator <ArrowUpRight size={14}/></button></div>
      </div>
    </section>

    <section className="content-section">
      <SectionHeading eyebrow="SYSTEM MAP" title="Four connected domains" description="The initial VYRON model considers these interconnected areas." action={<button className="text-button" onClick={() => setActive("Dependency Network")}>View network <ArrowUpRight size={14}/></button>}/>
      <div className="domain-grid">{domainItems.map((item, i) => {const Icon=item.icon; return <button className="domain-card" key={item.name} onClick={() => setActive("Dependency Network")}><div className={`domain-icon ${item.color}`}><Icon size={19}/></div><div className="domain-index">0{i+1}</div><h3>{item.name}</h3><p>{item.detail}</p><div className="domain-bottom"><span>{item.signal}</span><ChevronRight size={15}/></div></button>;})}</div>
    </section>

    <section className="bottom-grid">
      <div className="panel recent-panel"><SectionHeading eyebrow="EXPLORATION LIBRARY" title="Example scenarios" description="Starter ideas to help you explore the platform."/><div className="recent-list">{demoScenarios.map((s,i)=><button className="recent-row" key={s.title} onClick={()=>{setScenario(s.title);setActive("Scenario Simulator");}}><div className="recent-number">0{i+1}</div><div className="recent-copy"><strong>{s.title}</strong><span>{s.domain} · {s.date}</span></div><span className="example-pill">DEMO</span><ChevronRight size={16}/></button>)}</div></div>
      <div className="manifesto-panel"><div className="manifesto-glow"/><div className="eyebrow"><Zap size={13}/> THE VYRON APPROACH</div><h3>Look beyond<br/><span>the obvious.</span></h3><p>One intervention can influence multiple systems. VYRON is designed to make those connections easier to examine.</p><div className="manifesto-line">SEE BEYOND. THINK AHEAD. <ArrowUpRight size={16}/></div></div>
    </section>
    <footer className="page-footer"><span>VYRON · CONSEQUENCE INTELLIGENCE</span><span>FRONTEND PREVIEW · DATA IS ILLUSTRATIVE</span></footer>
  </div>;
}

function Simulator({ scenario, setScenario }) {
  const [localText, setLocalText] = useState(scenario || "");
  const [submitted, setSubmitted] = useState(false);
  const [horizon, setHorizon] = useState("24 hours");
  const [location, setLocation] = useState("Kolkata");
  const run = () => { if (localText.trim()) { setScenario(localText); setSubmitted(true); } };
  return <div className="page">
    <SectionHeading eyebrow="SCENARIO LAB · 01" title="Scenario Simulator" description="Translate a hypothetical decision into a structured scenario for downstream analysis."/>
    <div className="sim-layout">
      <div className="panel sim-main">
        <div className="panel-heading"><div className="panel-icon"><BrainCircuit size={19}/></div><div><h3>Define your scenario</h3><p>Describe the change, where it happens and when.</p></div></div>
        <label className="field-label" htmlFor="scenario-input">HYPOTHETICAL CHANGE</label>
        <textarea id="scenario-input" className="large-textarea" value={localText} onChange={e=>{setLocalText(e.target.value);setSubmitted(false);}} placeholder="Example: What if a major road near a hospital was closed during evening rush hour?"/>
        <div className="field-grid"><label><span className="field-label">LOCATION</span><input value={location} onChange={e=>setLocation(e.target.value)}/></label><label><span className="field-label">TIME HORIZON</span><select value={horizon} onChange={e=>setHorizon(e.target.value)}><option>6 hours</option><option>24 hours</option><option>3 days</option><option>7 days</option></select></label></div>
        <div className="form-note"><ShieldCheck size={15}/> This is a planning preview. No live simulation is run yet.</div>
        <button className="primary-button run-button" onClick={run}><Play size={15} fill="currentColor"/> Prepare scenario <ArrowUpRight size={15}/></button>
        {submitted && <div className="success-message"><Check size={16}/> Scenario captured in the frontend preview. Connect the backend to run actual analysis.</div>}
      </div>
      <aside className="panel sim-aside"><div className="eyebrow">SCENARIO STRUCTURE</div><h3>What VYRON will extract</h3><div className="extract-list"><div><span>01</span><div><b>Trigger event</b><small>The change being introduced</small></div></div><div><span>02</span><div><b>Geographic context</b><small>Location and affected area</small></div></div><div><span>03</span><div><b>Time horizon</b><small>When effects may unfold</small></div></div><div><span>04</span><div><b>Connected domains</b><small>Systems potentially affected</small></div></div></div><div className="aside-callout"><Sparkles size={17}/><p>Later, the NLP layer will convert natural language into structured model inputs.</p></div></aside>
    </div>
    <section className="content-section"><SectionHeading eyebrow="QUICK START" title="Try an example"/><div className="quick-prompts">{["What if public transport became free during peak hours?","What if tree cover increased across the city?","What if a key bridge was unavailable for one day?"].map((p,i)=><button key={p} onClick={()=>{setLocalText(p);setSubmitted(false);}}><span>0{i+1}</span>{p}<ArrowUpRight size={15}/></button>)}</div></section>
  </div>;
}

function Dependencies() {
  const nodes = [
    {id:"trigger", x:38, y:180, title:"Intervention", desc:"Initial change", tone:"node-cyan"},
    {id:"transport", x:300, y:35, title:"Transportation", desc:"Routes · Congestion", tone:"node-cyan"},
    {id:"environment", x:300, y:145, title:"Environment", desc:"Air · Noise · Heat", tone:"node-green"},
    {id:"health", x:300, y:255, title:"Public health", desc:"Access · Services", tone:"node-violet"},
    {id:"behaviour", x:300, y:365, title:"Human behaviour", desc:"Crowds · Demand", tone:"node-amber"},
    {id:"outcome", x:620, y:180, title:"System outcomes", desc:"Combined effects", tone:"node-outcome"},
  ];
  return <div className="page">
    <SectionHeading eyebrow="SYSTEMS MAP · 02" title="Dependency Network" description="Explore how a single intervention may propagate across connected domains." action={<span className="preview-tag">CONCEPT GRAPH</span>}/>
    <div className="panel graph-panel"><div className="graph-toolbar"><div><b>Cross-domain dependency model</b><span>Conceptual relationships · not calibrated weights</span></div><div className="graph-legend"><span><i className="legend-cyan"/>Direct pathway</span><span><i className="legend-violet"/>Secondary pathway</span></div></div>
      <div className="graph-canvas"><svg className="graph-lines" viewBox="0 0 900 470" preserveAspectRatio="none"><defs><marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L6,3 z" fill="#55dff3"/></marker></defs><path d="M190 220 C235 220 245 75 300 75" /><path d="M190 220 C240 220 250 185 300 185" /><path d="M190 220 C240 220 250 295 300 295" /><path d="M190 220 C235 220 245 405 300 405" /><path d="M485 75 C555 75 560 220 620 220" /><path d="M485 185 C555 185 560 220 620 220" /><path d="M485 295 C555 295 560 220 620 220" /><path d="M485 405 C555 405 560 220 620 220" /></svg>
        {nodes.map(n=><div key={n.id} className={`graph-node ${n.tone}`} style={{left:`${n.x/9}%`,top:`${n.y/4.7}%`}}><b>{n.title}</b><span>{n.desc}</span></div>)}
      </div><div className="graph-foot"><span><InfoDot/> Arrows represent conceptual influence, not measured causal coefficients.</span><button className="text-button" onClick={()=>window.alert("The graph will use calibrated dependency weights when the simulation backend is connected.")}>About this model <CircleHelp size={14}/></button></div>
    </div>
    <section className="content-section"><SectionHeading eyebrow="MODEL DOMAINS" title="Potential pathways"/><div className="domain-grid">{domainItems.map((d,i)=>{const Icon=d.icon;return <div className="domain-card static-card" key={d.name}><div className={`domain-icon ${d.color}`}><Icon size={19}/></div><div className="domain-index">0{i+1}</div><h3>{d.name}</h3><p>{d.detail}</p></div>})}</div></section>
  </div>;
}
function InfoDot(){return <span className="info-dot">i</span>}

function Analytics() {
  return <div className="page">
    <SectionHeading eyebrow="MEASUREMENT STUDIO · 03" title="Analytics" description="A visual workspace for comparing baseline conditions with hypothetical outcomes." action={<span className="preview-tag">ILLUSTRATIVE DATA</span>}/>
    <div className="metrics-grid analytics-metrics"><MetricCard label="MODEL RUNS" value="—" note="Awaiting simulation engine" icon={Activity}/><MetricCard label="RISK INDEX" value="—" note="No calculated result" icon={ShieldAlert} tone="amber"/><MetricCard label="DOMAINS TRACKED" value="04" note="Initial model scope" icon={Globe2} tone="violet"/><MetricCard label="CONFIDENCE RANGE" value="—" note="Requires calibrated model" icon={SlidersHorizontal} tone="green"/></div>
    <div className="chart-grid"><div className="panel chart-panel"><div className="panel-heading"><div><h3>Illustrative impact pathways</h3><p>Sample values to demonstrate the chart layout only.</p></div><span className="preview-tag">DEMO</span></div><div className="chart-wrap"><ResponsiveContainer width="100%" height="100%"><AreaChart data={trendData}><defs><linearGradient id="cyanFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#55dff3" stopOpacity={.22}/><stop offset="100%" stopColor="#55dff3" stopOpacity={0}/></linearGradient></defs><CartesianGrid stroke="rgba(154,178,210,.1)" strokeDasharray="3 5"/><XAxis dataKey="step" stroke="#71819a" tickLine={false} axisLine={false}/><YAxis stroke="#71819a" tickLine={false} axisLine={false}/><Tooltip contentStyle={{background:"#111c2d",border:"1px solid #26374d",borderRadius:10,color:"#e8eef8"}}/><Area type="monotone" dataKey="transport" name="Transportation" stroke="#55dff3" fill="url(#cyanFill)" strokeWidth={2}/><Area type="monotone" dataKey="environment" name="Environment" stroke="#57d6a0" fill="transparent" strokeWidth={2}/><Area type="monotone" dataKey="health" name="Public health" stroke="#9b8cff" fill="transparent" strokeWidth={2}/></AreaChart></ResponsiveContainer></div><div className="chart-legend"><span><i className="legend-cyan"/>Transportation</span><span><i className="legend-green"/>Environment</span><span><i className="legend-violet"/>Public health</span></div></div>
      <div className="panel chart-panel"><div className="panel-heading"><div><h3>Domain model coverage</h3><p>Four initial areas represented in the interface.</p></div></div><div className="coverage-list">{domainItems.map((d,i)=><div className="coverage-row" key={d.name}><span>{d.name}</span><div className="coverage-track"><i style={{width:["92%","82%","76%","68%"][i]}}/></div><b>—</b></div>)}</div><div className="aside-callout"><Activity size={17}/><p>Coverage bars are interface placeholders, not model performance scores.</p></div></div></div>
  </div>;
}

function Reports() {
  return <div className="page"><SectionHeading eyebrow="DECISION BRIEFING · 04" title="Impact Reports" description="A structured destination for simulation findings, uncertainty and domain-level explanations."/>
    <div className="report-empty panel"><div className="report-icon"><FileText size={27}/></div><div className="eyebrow">REPORT GENERATION</div><h3>Your impact reports will appear here.</h3><p>Run a scenario through the connected simulation engine to populate a report with direct effects, indirect effects, risk ranges and plain-language explanations.</p><button className="primary-button" onClick={()=>window.dispatchEvent(new CustomEvent("vyron:navigate",{detail:"Scenario Simulator"}))}>Open scenario simulator <ArrowUpRight size={15}/></button></div>
    <div className="report-feature-grid"><div className="panel feature-card"><ShieldCheck size={20}/><h4>Traceable findings</h4><p>Show which assumptions and pathways contribute to each result.</p></div><div className="panel feature-card"><BarChart3 size={20}/><h4>Uncertainty ranges</h4><p>Present ranges and distributions instead of false precision.</p></div><div className="panel feature-card"><FileText size={20}/><h4>Readable summaries</h4><p>Translate model outputs into clear, decision-focused explanations.</p></div></div>
  </div>;
}

function SettingsPage() {
  return <div className="page"><SectionHeading eyebrow="WORKSPACE CONFIGURATION" title="Settings" description="Current frontend preview configuration."/><div className="panel settings-panel"><div className="setting-row"><div><b>Workspace mode</b><span>Local development preview</span></div><span className="setting-value">PREVIEW</span></div><div className="setting-row"><div><b>Simulation API</b><span>Backend connection has not been configured.</span></div><span className="setting-value pending">NOT CONNECTED</span></div><div className="setting-row"><div><b>Data persistence</b><span>Scenario history is not stored between reloads yet.</span></div><span className="setting-value pending">NOT CONFIGURED</span></div></div></div>;
}

export default function App() {
  const [active, setActive] = useState("Command Center");
  const [scenario, setScenario] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const page = active === "Scenario Simulator" ? <Simulator scenario={scenario} setScenario={setScenario}/> :
    active === "Dependency Network" ? <Dependencies/> :
    active === "Analytics" ? <Analytics/> :
    active === "Impact Reports" ? <Reports/> :
    active === "Settings" ? <SettingsPage/> :
    <Dashboard setActive={setActive} setScenario={setScenario}/>;
  useEffect(() => {
    const navigate = (event) => { if (event.detail) setActive(event.detail); };
    window.addEventListener("vyron:navigate", navigate);
    return () => window.removeEventListener("vyron:navigate", navigate);
  }, []);
  return <div className="app-shell"><div className="ambient ambient-one"/><div className="ambient ambient-two"/><Sidebar active={active} setActive={setActive} open={menuOpen} close={()=>setMenuOpen(false)}/><main className="main-area"><Topbar active={active} onMenu={()=>setMenuOpen(true)}/>{page}</main></div>;
}

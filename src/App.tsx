import { useEffect, useMemo, useState } from 'react';
import {
  ArrowRight,
  Briefcase,
  CheckCircle2,
  ChevronDown,
  Code2,
  ChevronRight,
  Database,
  Download,
  FileText,
  GitBranch,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Workflow,
  X,
} from 'lucide-react';
import { caseStudies } from './data/caseStudies';
import { education, navItems, playgroundData, skillGroups, stats } from './data/content';

const skillIcons = {
  workflow: Workflow,
  api: Code2,
  layers: Layers3,
  gitBranch: GitBranch,
  database: Database,
  shieldCheck: ShieldCheck,
} as const;

type PlaygroundKey = keyof typeof playgroundData;
type ScenarioState = 'positive' | 'negative';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedProject, setExpandedProject] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState<PlaygroundKey>('login');
  const [activeScenario, setActiveScenario] = useState<ScenarioState>('positive');
  const [activeFrameworkLayer, setActiveFrameworkLayer] = useState('');
  const [activeSection, setActiveSection] = useState('home');

  const tabOptions = useMemo(() => Object.keys(playgroundData) as PlaygroundKey[], []);
  const scenarioData = playgroundData[activeTab][activeScenario];

  useEffect(() => {
    const targets = navItems
      .map((item) => document.querySelector(item.href))
      .filter((target): target is Element => target !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0];
        if (visible?.target.id) {
          setActiveSection(visible.target.id);
        }
      },
      { rootMargin: '-18% 0px -65% 0px', threshold: [0, 0.1, 0.3, 0.6] },
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, [menuOpen]);

  return (
    <div className="page-shell">
      <header className="site-header">
        <div className="container nav-bar">
          <a href="#home" className="brand" aria-label="Pankaj Yadav home">
            <span className="brand-photo-frame">
              <img src="/images/brand-logo.png" alt="" className="brand-photo" />
            </span>
            <span className="brand-text">Pankaj Yadav</span>
          </a>

          <nav className={`main-nav ${menuOpen ? 'open' : ''}`} aria-label="Main navigation">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={activeSection === item.href.slice(1) ? 'active' : ''}
                aria-current={activeSection === item.href.slice(1) ? 'location' : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a className="nav-project-cta" href="#experience" onClick={() => setMenuOpen(false)}>
              View Projects
              <ArrowRight size={15} />
            </a>
            <a
              className="nav-resume"
              href="/Pankaj-Yadav-Resume.pdf"
              download="Pankaj-Yadav-Resume.pdf"
              onClick={() => setMenuOpen(false)}
            >
              <Download size={15} />
              Resume
            </a>
          </nav>

          <button
            type="button"
            className="menu-toggle"
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="container hero-grid">
            <div className="hero-copy">
              <span className="availability-pill">Open to Opportunities | Immediate Joiner</span>
              <h1>
                <span>Engineering Quality.</span>
                <span className="headline-accent">Automating Confidence.</span>
              </h1>
              <h2>Pankaj Yadav <span aria-hidden="true">|</span> SDET &amp; QA Automation Engineer</h2>
              <p>
                6 years of experience building scalable automation frameworks, validating critical business workflows,
                and strengthening software quality across Banking, CRM, Trading, HRMS, and E-commerce.
              </p>
              <div className="hero-actions">
                <a href="#experience" className="button primary">
                  Explore My Work
                  <ArrowRight size={18} />
                </a>
                <a
                  className="button secondary"
                  href="/Pankaj-Yadav-Resume.pdf"
                  download="Pankaj-Yadav-Resume.pdf"
                >
                  <Download size={18} />
                  Download Resume
                </a>
                <a className="button tertiary" href="#contact">
                  Contact Me
                  <ArrowRight size={17} />
                </a>
              </div>
              <div className="hero-proof" aria-label="Selected documented experience">
                <div>
                  <strong>6 years</strong>
                  <span>Quality engineering</span>
                </div>
                <div>
                  <strong>150+ cases</strong>
                  <span>CRM UI &amp; API automation</span>
                </div>
                <div>
                  <strong>~70%</strong>
                  <span>Banking automation coverage</span>
                </div>
              </div>
              <div className="hero-stack" aria-label="Core technology stack">
                <span>Core stack</span>
                {['Selenium', 'Java', 'Playwright', 'REST Assured', 'SQL', 'Jenkins'].map((technology) => (
                  <span key={technology} className="hero-stack-item">{technology}</span>
                ))}
              </div>
              <div className="contact-inline">
                <a href="https://www.linkedin.com/in/pankajyadav-554748244" target="_blank" rel="noreferrer">
                  <Linkedin size={18} />
                  Connect on LinkedIn
                </a>
                <a href="mailto:pankajdy786@gmail.com">
                  <Mail size={18} />
                  pankajdy786@gmail.com
                </a>
                <a href="tel:+919773050367">
                  <Phone size={18} />
                  +91 97730 50367
                </a>
              </div>
            </div>

            <div className="hero-visual" aria-label="Technical automation workflow illustration">
              <svg viewBox="0 0 620 520" role="img" aria-labelledby="heroTitle heroDesc">
                <title id="heroTitle">Automation workflow illustration</title>
                <desc id="heroDesc">A modern software test automation architecture with test cases, APIs, CI/CD, and quality checks.</desc>
                <defs>
                  <linearGradient id="panelGlow" x1="0%" x2="100%" y1="0%" y2="100%">
                    <stop offset="0%" stopColor="#79d7ff" stopOpacity="0.33" />
                    <stop offset="100%" stopColor="#3a79ff" stopOpacity="0.12" />
                  </linearGradient>
                </defs>
                <rect x="45" y="45" width="530" height="430" rx="26" fill="rgba(10, 20, 33, 0.92)" stroke="rgba(142, 185, 255, 0.26)" />
                <g>
                  <rect x="88" y="100" width="128" height="72" rx="14" fill="rgba(112, 173, 255, 0.1)" stroke="rgba(142, 185, 255, 0.4)" />
                  <text x="120" y="130" className="chart-text chart-title">Test Cases</text>
                  <text x="120" y="152" className="chart-text chart-sub">Login</text>
                  <text x="120" y="170" className="chart-text chart-sub">checkout</text>
                </g>
                <g>
                  <rect x="246" y="100" width="128" height="72" rx="14" fill="rgba(112, 173, 255, 0.1)" stroke="rgba(142, 185, 255, 0.4)" />
                  <text x="278" y="130" className="chart-text chart-title">Runner</text>
                  <text x="278" y="152" className="chart-text chart-sub">Selenium</text>
                  <text x="278" y="170" className="chart-text chart-sub">Playwright</text>
                </g>
                <g>
                  <rect x="404" y="100" width="128" height="72" rx="14" fill="rgba(112, 173, 255, 0.1)" stroke="rgba(142, 185, 255, 0.4)" />
                  <text x="432" y="130" className="chart-text chart-title">Page Objects</text>
                  <text x="432" y="152" className="chart-text chart-sub">API Clients</text>
                  <text x="432" y="170" className="chart-text chart-sub">Utilities</text>
                </g>
                <g>
                  <rect x="88" y="240" width="148" height="80" rx="18" fill="rgba(105, 223, 255, 0.12)" stroke="rgba(130, 236, 255, 0.36)" />
                  <text x="116" y="276" className="chart-text chart-title">SQL / DB</text>
                  <text x="116" y="296" className="chart-text chart-sub">Validation</text>
                </g>
                <g>
                  <rect x="254" y="240" width="168" height="80" rx="18" fill="rgba(105, 223, 255, 0.12)" stroke="rgba(130, 236, 255, 0.36)" />
                  <text x="285" y="276" className="chart-text chart-title">Assertions</text>
                  <text x="285" y="296" className="chart-text chart-sub">Reporting</text>
                </g>
                <g>
                  <rect x="442" y="240" width="120" height="80" rx="18" fill="rgba(105, 223, 255, 0.12)" stroke="rgba(130, 236, 255, 0.36)" />
                  <text x="474" y="276" className="chart-text chart-title">CI/CD</text>
                  <text x="474" y="296" className="chart-text chart-sub">Jenkins</text>
                </g>
                <path d="M216 136H246" stroke="rgba(148, 180, 255, 0.7)" strokeWidth="3" strokeLinecap="round" />
                <path d="M374 136H404" stroke="rgba(148, 180, 255, 0.7)" strokeWidth="3" strokeLinecap="round" />
                <path d="M166 172V216H310V216" stroke="rgba(148, 180, 255, 0.7)" strokeWidth="3" strokeLinecap="round" />
                <path d="M310 216H310V240" stroke="rgba(148, 180, 255, 0.7)" strokeWidth="3" strokeLinecap="round" />
                <path d="M468 172V214H310V214" stroke="rgba(148, 180, 255, 0.7)" strokeWidth="3" strokeLinecap="round" />
                <path d="M310 214V240" stroke="rgba(148, 180, 255, 0.7)" strokeWidth="3" strokeLinecap="round" />
                <path d="M166 172V220H88V220" stroke="rgba(148, 180, 255, 0.7)" strokeWidth="3" strokeLinecap="round" />
                <path d="M338 320V346" stroke="rgba(148, 180, 255, 0.7)" strokeWidth="3" strokeLinecap="round" />
                <g>
                  <rect x="200" y="346" width="220" height="70" rx="18" fill="url(#panelGlow)" stroke="rgba(142, 185, 255, 0.36)" />
                  <text x="265" y="378" className="chart-text chart-title">Quality Signal</text>
                  <text x="250" y="399" className="chart-text chart-sub">Regression · Stability · Release Confidence</text>
                </g>
              </svg>
            </div>
          </div>
        </section>

        <section id="impact" className="stats-wrap section">
          <div className="container stats-grid">
            {stats.map((stat) => (
              <div key={stat.label} className="stat-card">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
                <p>{stat.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="section">
          <div className="container content-layout">
            <div className="section-heading narrow">
              <span className="eyebrow">About me</span>
              <h3>Quality engineering with a practical, outcome-focused mindset.</h3>
            </div>
            <div className="about-copy">
              <p>
                I’m a Senior SDET with 6 years of experience across manual testing, automation engineering,
                API validation, and database-backed verification. My work focuses on building reliable test
                frameworks that help teams release with confidence while reducing regression effort.
              </p>
              <p>
                I have worked with web applications, enterprise platforms, banking workflows, CRM systems,
                and analytics-driven products. I design reusable automation assets, validate backend
                behavior through SQL and API checks, and support faster release cycles with structured defect
                triage, root cause analysis, and CI/CD integration.
              </p>
            </div>
          </div>
        </section>

        <section id="skills" className="section surface-panel">
          <div className="container">
            <div className="section-heading center">
              <span className="eyebrow">Technical expertise</span>
              <h3>Hands-on testing and automation across the release lifecycle.</h3>
            </div>
            <div className="skill-grid">
              {skillGroups.map((skillGroup) => {
                const Icon = skillIcons[skillGroup.icon as keyof typeof skillIcons];
                return (
                  <div key={skillGroup.title} className="skill-card">
                    <div className="skill-icon-wrap">
                      <Icon size={18} />
                    </div>
                    <h4>{skillGroup.title}</h4>
                    <ul>
                      {skillGroup.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="experience" className="section case-studies-section">
          <div className="container">
            <div className="section-heading center">
              <span className="eyebrow">Experience &amp; Engineering Impact</span>
              <h3>Six case studies: documented work, supported outcomes, and clearly labeled illustrative designs.</h3>
            </div>
            <div className="project-grid">
              {caseStudies.map((project, index) => {
                const isExpanded = expandedProject === index;
                const firstFrameworkLayer = project.frameworkLanes[0]?.layers[0];
                const frameworkLayers = project.frameworkLanes.flatMap((lane) => lane.layers);
                const selectedFrameworkLayer =
                  frameworkLayers.find((layer) => layer.name === activeFrameworkLayer) ?? firstFrameworkLayer;
                return (
                  <article key={`${project.employer}-${project.title}`} className={`project-card ${isExpanded ? 'expanded' : ''}`}>
                    <div className="project-topline">
                      <span className="project-index">0{index + 1}</span>
                      <span>{project.period}</span>
                    </div>
                    <div className="project-header-row">
                      <div>
                        <p className="project-company">{project.employer}</p>
                        <h4>{project.title}</h4>
                      </div>
                      <span className="project-domain">{project.industry}</span>
                    </div>
                    <p className="project-role">{project.role} · {project.project}</p>
                    <p className="project-summary">{project.businessValue}</p>
                    <div className="badge-row">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="chip">{tech}</span>
                      ))}
                    </div>
                    <button
                      type="button"
                      className="expand-button"
                      onClick={() => {
                        setExpandedProject(isExpanded ? null : index);
                        if (!isExpanded && firstFrameworkLayer) {
                          setActiveFrameworkLayer(firstFrameworkLayer.name);
                        }
                      }}
                      aria-expanded={isExpanded}
                      aria-controls={`case-study-${index}`}
                    >
                      {isExpanded ? 'Close case study' : 'Explore case study'}
                      {isExpanded ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
                    </button>

                    {isExpanded && (
                      <div id={`case-study-${index}`} className="project-expanded">
                        <div className="case-overview-grid">
                          <div className="case-detail">
                            <span>Role &amp; dates</span>
                            <p>{project.role} · {project.period}</p>
                          </div>
                          <div className="case-detail">
                            <span>Project &amp; industry</span>
                            <p>{project.project} · {project.industry}</p>
                          </div>
                        </div>
                        <div className="case-detail challenge-detail">
                          <span>Engineering challenge</span>
                          <p>{project.challenge}</p>
                        </div>
                        <div className="detail-sections">
                          <div>
                            <h5>Documented contributions</h5>
                            <ul>
                              {project.solution.map((item) => (
                                <li key={item}><CheckCircle2 size={15} />{item}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h5>Resume-supported impact</h5>
                            <ul>
                              {project.impact.map((item) => (
                                <li key={item}><CheckCircle2 size={15} />{item}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <div className="case-detail business-value">
                          <span>Business value</span>
                          <p>{project.businessValue}</p>
                        </div>
                        <div className="framework-explorer">
                          <div className="framework-heading">
                            <div>
                              <span className="eyebrow">Explore the Automation Framework</span>
                              <h5>Illustrative framework design</h5>
                            </div>
                            <span className="architecture-disclaimer">Not a verified proprietary diagram</span>
                          </div>
                          <p className="framework-note">{project.frameworkNote}</p>
                          <div className="framework-lanes">
                            {project.frameworkLanes.map((lane) => (
                              <div key={lane.title} className="framework-lane">
                                <h6>{lane.title}</h6>
                                <ol className="framework-flow">
                                  {lane.layers.map((layer) => (
                                    <li key={layer.name}>
                                      <button
                                        type="button"
                                        className={`framework-layer ${selectedFrameworkLayer?.name === layer.name ? 'active' : ''}`}
                                        aria-pressed={selectedFrameworkLayer?.name === layer.name}
                                        onClick={() => setActiveFrameworkLayer(layer.name)}
                                      >
                                        <span className="framework-layer-name">{layer.name}</span>
                                        <span className="framework-layer-label">{layer.label}</span>
                                      </button>
                                    </li>
                                  ))}
                                </ol>
                              </div>
                            ))}
                          </div>
                          {selectedFrameworkLayer && (
                            <div className="framework-layer-detail" aria-live="polite">
                              <span>{selectedFrameworkLayer.label}</span>
                              <h6>{selectedFrameworkLayer.name}</h6>
                              <p>{selectedFrameworkLayer.responsibility}</p>
                            </div>
                          )}
                          <div className="framework-execution">
                            <h6>Example test execution flow</h6>
                            <ol>
                              {project.workflow.map((step) => <li key={step}>{step}</li>)}
                            </ol>
                          </div>
                          {project.proposedStructure && (
                            <div className="proposed-structure">
                              <h6>Proposed example structure — not the confirmed employer repository</h6>
                              <ul>
                                {project.proposedStructure.map((path) => <li key={path}><code>{path}</code></li>)}
                              </ul>
                            </div>
                          )}
                          {project.implementationDetails && (
                            <p className="implementation-note">{project.implementationDetails}</p>
                          )}
                        </div>
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="architecture" className="section surface-panel">
          <div className="container section-split">
            <div>
              <div className="section-heading left">
                <span className="eyebrow">Automation architecture</span>
                <h3>Illustrative reference architecture for maintainable test systems.</h3>
              </div>
              <div className="diagram-shell" aria-label="Automation architecture diagram">
                <svg viewBox="0 0 560 380" role="img" aria-labelledby="archTitle archDesc">
                  <title id="archTitle">Reference automation architecture</title>
                  <desc id="archDesc">An illustrative test architecture with test cases, runner, page objects, utilities, validation, and CI/CD.</desc>
                  <g>
                    <rect x="24" y="44" width="110" height="58" rx="16" fill="rgba(120, 197, 255, 0.08)" stroke="rgba(143, 191, 255, 0.4)" />
                    <text x="79" y="77" textAnchor="middle" className="diagram-label">Test Cases</text>
                  </g>
                  <g>
                    <rect x="156" y="44" width="120" height="58" rx="16" fill="rgba(120, 197, 255, 0.08)" stroke="rgba(143, 191, 255, 0.4)" />
                    <text x="216" y="77" textAnchor="middle" className="diagram-label">Test Runner</text>
                  </g>
                  <g>
                    <rect x="298" y="44" width="148" height="58" rx="16" fill="rgba(120, 197, 255, 0.08)" stroke="rgba(143, 191, 255, 0.4)" />
                    <text x="372" y="77" textAnchor="middle" className="diagram-label">Page Objects</text>
                    <text x="372" y="92" textAnchor="middle" className="diagram-label small">API Clients</text>
                  </g>
                  <g>
                    <rect x="172" y="150" width="152" height="62" rx="16" fill="rgba(120, 197, 255, 0.08)" stroke="rgba(143, 191, 255, 0.4)" />
                    <text x="248" y="183" textAnchor="middle" className="diagram-label">Reusable Utilities</text>
                  </g>
                  <g>
                    <rect x="340" y="150" width="164" height="62" rx="16" fill="rgba(120, 197, 255, 0.08)" stroke="rgba(143, 191, 255, 0.4)" />
                    <text x="422" y="183" textAnchor="middle" className="diagram-label">Assertions</text>
                    <text x="422" y="198" textAnchor="middle" className="diagram-label small">Validation</text>
                  </g>
                  <g>
                    <rect x="112" y="248" width="140" height="64" rx="16" fill="rgba(120, 197, 255, 0.08)" stroke="rgba(143, 191, 255, 0.4)" />
                    <text x="182" y="282" textAnchor="middle" className="diagram-label">External Data</text>
                  </g>
                  <g>
                    <rect x="258" y="248" width="134" height="64" rx="16" fill="rgba(120, 197, 255, 0.08)" stroke="rgba(143, 191, 255, 0.4)" />
                    <text x="325" y="282" textAnchor="middle" className="diagram-label">SQL / DB</text>
                  </g>
                  <g>
                    <rect x="398" y="248" width="132" height="64" rx="16" fill="rgba(120, 197, 255, 0.08)" stroke="rgba(143, 191, 255, 0.4)" />
                    <text x="464" y="282" textAnchor="middle" className="diagram-label">Jenkins CI/CD</text>
                  </g>
                  <path d="M134 73H156" stroke="rgba(143,191,255,0.7)" strokeWidth="3" />
                  <path d="M276 73H298" stroke="rgba(143,191,255,0.7)" strokeWidth="3" />
                  <path d="M448 103V150" stroke="rgba(143,191,255,0.7)" strokeWidth="3" />
                  <path d="M248 103V150" stroke="rgba(143,191,255,0.7)" strokeWidth="3" />
                  <path d="M248 212V248" stroke="rgba(143,191,255,0.7)" strokeWidth="3" />
                  <path d="M422 212V248" stroke="rgba(143,191,255,0.7)" strokeWidth="3" />
                  <path d="M182 312H414" stroke="rgba(143,191,255,0.7)" strokeWidth="3" />
                  <path d="M325 312V336H182V336" stroke="rgba(143,191,255,0.7)" strokeWidth="3" />
                  <path d="M325 312V336H464V336" stroke="rgba(143,191,255,0.7)" strokeWidth="3" />
                </svg>
              </div>
            </div>
            <div className="architecture-copy">
              <p>
                This is an illustrative test architecture, not a verified diagram of a private employer setup.
                It reflects a maintainable QA model built around reusable components, data-driven execution,
                validation, and traceable reporting.
              </p>
              <ul>
                <li>Business workflows are separated into reusable page objects and API client abstractions.</li>
                <li>External test data and SQL validation reduce flaky checks and improve defect isolation.</li>
                <li>Jenkins integration supports scheduled regression execution and CI feedback loops.</li>
                <li>Structured reporting makes debugging faster and enables better release confidence.</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="playground" className="section">
          <div className="container">
            <div className="section-heading center">
              <span className="eyebrow">QA engineering playground</span>
              <h3>Demonstration scenarios for common verification patterns.</h3>
            </div>
            <div className="playground-panel">
              <div className="tab-list" role="tablist" aria-label="QA Playground scenarios">
                {tabOptions.map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    role="tab"
                    aria-selected={activeTab === tab}
                    className={activeTab === tab ? 'active' : ''}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>
              <div className="scenario-switcher">
                <button
                  type="button"
                  className={activeScenario === 'positive' ? 'active' : ''}
                  onClick={() => setActiveScenario('positive')}
                >
                  Positive
                </button>
                <button
                  type="button"
                  className={activeScenario === 'negative' ? 'active' : ''}
                  onClick={() => setActiveScenario('negative')}
                >
                  Negative
                </button>
              </div>
              <div className="playground-card">
                <span className="demo-tag">Demonstration only</span>
                <h4>{scenarioData.title}</h4>
                <p>{scenarioData.expectation}</p>
                <ul>
                  {scenarioData.steps.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ul>
                <div className="result-box">
                  <FileText size={18} />
                  <span>{scenarioData.result}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="career" className="section career-section">
          <div className="container">
            <div className="section-heading center">
              <span className="eyebrow">Career timeline</span>
              <h3>Six employers, in resume-documented chronological order.</h3>
            </div>
            <div className="timeline">
              {[...caseStudies].reverse().map((entry) => (
                <article key={`${entry.employer}-${entry.period}`} className="timeline-item">
                  <div className="timeline-dot" aria-hidden="true" />
                  <div className="timeline-card">
                    <div className="timeline-header">
                      <div>
                        <p className="timeline-company">{entry.employer}</p>
                        <h4>{entry.role}</h4>
                      </div>
                      <span>{entry.period}</span>
                    </div>
                    <div className="timeline-meta">
                      <span>
                        <Briefcase size={15} />
                        {entry.title}
                      </span>
                      {entry.location && (
                        <span>
                          <MapPin size={15} />
                          {entry.location}
                        </span>
                      )}
                    </div>
                    <p className="timeline-project">{entry.project}</p>
                    <div className="badge-row timeline-stack">
                      {entry.technologies.map((technology) => <span className="chip" key={technology}>{technology}</span>)}
                    </div>
                    <ul>
                      {entry.solution.slice(0, 3).map((contribution) => (
                        <li key={contribution}>{contribution}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="education" className="section surface-panel">
          <div className="container">
            <div className="section-heading center">
              <span className="eyebrow">Education</span>
              <h3>Academic background and continuing learning.</h3>
            </div>
            <div className="education-grid">
              {education.map((item) => (
                <article key={item.degree} className="education-card">
                  <span className="education-period">{item.period}</span>
                  <h4>{item.degree}</h4>
                  <p>{item.institution}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="site-footer">
        <div className="container footer-card">
          <div>
            <a className="footer-brand" href="#home" aria-label="Pankaj Yadav, back to top">
              <span className="brand-photo-frame">
                <img src="/images/brand-logo.png" alt="" className="brand-photo" />
              </span>
              <span>Pankaj Yadav <small>SDET · QA Automation</small></span>
            </a>
            <span className="eyebrow">Let’s connect</span>
            <h3>Let&apos;s Build More Reliable Software.</h3>
            <p className="footer-copy">
              Looking for an SDET or QA Automation Engineer who combines structured testing, UI and API automation,
              and CI/CD practices? Let&apos;s connect.
            </p>
          </div>
          <div className="footer-links">
            <a href="mailto:pankajdy786@gmail.com">
              <Mail size={18} />
              Send an email · pankajdy786@gmail.com
            </a>
            <a href="tel:+919773050367">
              <Phone size={18} />
              Call Pankaj · +91 97730 50367
            </a>
            <a href="https://www.linkedin.com/in/pankajyadav-554748244" target="_blank" rel="noreferrer">
              <Linkedin size={18} />
              View LinkedIn profile
            </a>
            <a href="/Pankaj-Yadav-Resume.pdf" download="Pankaj-Yadav-Resume.pdf">
              <Download size={18} />
              Download Resume
            </a>
            <span>
              <MapPin size={18} />
              Noida, Uttar Pradesh, India · Immediate Joiner
            </span>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} Pankaj Yadav</span>
          <span>Selenium · Playwright · REST Assured · SQL · Jenkins</span>
        </div>
      </footer>
    </div>
  );
}

export default App;

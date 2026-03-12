type FrameworkCard = {
  href: string
  title: string
  description: string
}

const frameworkRows: { label: string; core?: boolean; cards: FrameworkCard[] }[] = [
  {
    label: 'Foundations',
    cards: [
      {
        href: '/architecture',
        title: 'Architecture',
        description: 'Foundations for reasoning about AI systems.',
      },
      {
        href: '/research',
        title: 'Research',
        description: 'Background exploration connecting systems engineering, control theory, and AI architectures.',
      },
    ],
  },
  {
    label: 'Core Framework',
    core: true,
    cards: [
      {
        href: '/correctness',
        title: 'Correctness',
        description: 'Techniques that convert probabilistic model outputs into deterministic system behavior.',
      },
      {
        href: '/primitives',
        title: 'Primitives',
        description: 'Reusable components used to construct reliability boundaries and system guarantees.',
      },
    ],
  },
  {
    label: 'Implementations',
    cards: [
      {
        href: '/systems',
        title: 'Systems',
        description: 'Applied architectures for AI-driven software.',
      },
      {
        href: '/open-source',
        title: 'Open Source',
        description: 'Libraries and tools implementing these patterns.',
      },
    ],
  },
]

export default function Home() {

  return (
    <div className="space-y-24 py-8">
      <section className="max-w-3xl space-y-5">
        <h1 className="text-3xl md:text-4xl font-light tracking-tight text-[#1A1A1A]">
          Reliable AI Systems
        </h1>
        <p className="text-[#5A5A5A] text-sm">
          Engineering patterns for building reliable real-world software with probabilistic models.
        </p>
        <div className="space-y-4 text-sm leading-relaxed text-[#5A5A5A]">
          <p>
            Modern software is beginning to interact directly with real-world systems.
          </p>
          <p>
            Examples include AI agents navigating websites, browser automation workflows, document processing pipelines,
            operational tooling that interacts with external APIs, and business systems driven by AI-assisted reasoning.
          </p>
          <p>
            These systems differ from traditional software in one important way. They operate inside environments whose
            behavior changes independently of the code.
          </p>
          <p>
            Websites update. Authentication flows evolve. APIs introduce edge cases. Business processes adapt.
          </p>
          <p>
            As a result, reliability becomes a systems problem rather than a modeling problem. Improving prompts alone
            rarely solves it.
          </p>
          <p>
            Instead, reliable systems separate responsibilities:
          </p>
        </div>
        <pre className="bg-[#FFFFFF] border border-[#DADADA] p-4 overflow-x-auto text-sm font-mono text-[#2A2A2A]">
{`environment
↓
AI reasoning
↓
deterministic reliability boundaries
↓
software execution
↓
effects on the environment`}
        </pre>
        <div className="space-y-4 text-sm leading-relaxed text-[#5A5A5A]">
          <p>
            This site explores engineering patterns for building systems that remain stable under those conditions.
          </p>
          <p>
            The ideas here emerged while building automation systems interacting with dynamic environments, where
            reliability problems appear early and often.
          </p>
          <p>
            The sections that follow explore the architectural pieces required to make these systems work.
          </p>
        </div>
      </section>

      <section className="max-w-4xl space-y-8">
        <div className="space-y-4">
          <p className="text-[10px] font-mono tracking-[0.2em] text-[#8C8C8C] uppercase">
            Real-World Software Loop
          </p>
          <div className="overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0">
            <svg
              viewBox="0 0 700 420"
              className="w-full"
              style={{ minWidth: '420px' }}
            >
              <defs>
                <pattern id="home-loop-grid" width="24" height="24" patternUnits="userSpaceOnUse">
                  <circle cx="12" cy="12" r="0.45" fill="#E8E8E6" />
                </pattern>
              </defs>

              <rect width="700" height="420" fill="url(#home-loop-grid)" rx="2" />

              <rect x="184" y="30" width="300" height="58" rx="3" fill="#FFFFFF" stroke="#DADADA" strokeWidth="1" />
              <text x="334" y="54" textAnchor="middle" fill="#2A2A2A" fontSize="14" fontFamily="ui-monospace, monospace">
                Real-World Systems
              </text>
              <text x="334" y="74" textAnchor="middle" fill="#8C8C8C" fontSize="11" fontFamily="ui-monospace, monospace">
                websites · APIs · documents · humans
              </text>

              <line x1="334" y1="88" x2="334" y2="116" stroke="#DADADA" strokeWidth="1" />
              <polygon points="334,120 330,112 338,112" fill="#DADADA" />
              <text x="354" y="108" fill="#8C8C8C" fontSize="10" fontFamily="ui-monospace, monospace">observe</text>

              <rect x="184" y="130" width="300" height="58" rx="3" fill="#FFFFFF" stroke="#DADADA" strokeWidth="1" />
              <text x="334" y="154" textAnchor="middle" fill="#2A2A2A" fontSize="14" fontFamily="ui-monospace, monospace">
                Software System
              </text>
              <text x="334" y="174" textAnchor="middle" fill="#8C8C8C" fontSize="11" fontFamily="ui-monospace, monospace">
                workflows · automation · agents
              </text>

              <line x1="334" y1="188" x2="334" y2="216" stroke="#DADADA" strokeWidth="1" />
              <polygon points="334,220 330,212 338,212" fill="#DADADA" />
              <text x="354" y="208" fill="#8C8C8C" fontSize="10" fontFamily="ui-monospace, monospace">decide</text>

              <rect x="222" y="230" width="224" height="58" rx="3" fill="#F2F2F0" stroke="#DADADA" strokeWidth="1" />
              <text x="334" y="254" textAnchor="middle" fill="#2A2A2A" fontSize="14" fontFamily="ui-monospace, monospace">
                AI Model
              </text>
              <text x="334" y="274" textAnchor="middle" fill="#8C8C8C" fontSize="11" fontFamily="ui-monospace, monospace">
                probabilistic reasoning
              </text>

              <line x1="334" y1="288" x2="334" y2="316" stroke="#DADADA" strokeWidth="1" />
              <polygon points="334,320 330,312 338,312" fill="#DADADA" />
              <text x="354" y="308" fill="#8C8C8C" fontSize="10" fontFamily="ui-monospace, monospace">act</text>

              <rect x="164" y="330" width="340" height="58" rx="3" fill="#FFFFFF" stroke="#DADADA" strokeWidth="1" />
              <text x="334" y="354" textAnchor="middle" fill="#2A2A2A" fontSize="14" fontFamily="ui-monospace, monospace">
                Actions on External Systems
              </text>
              <text x="334" y="374" textAnchor="middle" fill="#8C8C8C" fontSize="11" fontFamily="ui-monospace, monospace">
                browser actions · API calls · updates
              </text>

              <path
                d="M 520 360 Q 610 360 610 210 Q 610 60 496 60"
                fill="none"
                stroke="#DADADA"
                strokeWidth="0.9"
                strokeDasharray="4 4"
              />
              <polygon points="496,60 504,56 503,64" fill="#DADADA" />
              <text x="620" y="214" fill="#8C8C8C" fontSize="10" fontFamily="ui-monospace, monospace">
                environment changes
              </text>
            </svg>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-[10px] font-mono tracking-[0.2em] text-[#8C8C8C] uppercase">
            Reliability Architecture
          </p>
          <div className="overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0">
            <svg
              viewBox="0 0 700 700"
              className="w-full"
              style={{ minWidth: '420px' }}
            >
            <defs>
              <pattern id="home-grid" width="24" height="24" patternUnits="userSpaceOnUse">
                <circle cx="12" cy="12" r="0.5" fill="#E8E8E6" />
              </pattern>
            </defs>

            <rect width="700" height="700" fill="url(#home-grid)" rx="2" />

            {/* Real-world environment */}
            <rect x="154" y="28" width="232" height="54" rx="27" fill="#FFFFFF" stroke="#DADADA" strokeWidth="1" />
            <text x="270" y="61" textAnchor="middle" fill="#2A2A2A" fontSize="14" fontFamily="ui-monospace, monospace">
              Real-World Environment
            </text>

            {/* Connector: environment → input */}
            <line x1="270" y1="82" x2="270" y2="110" stroke="#B5B5B5" strokeWidth="1.2" />
            <circle cx="270" cy="82" r="2.5" fill="#B5B5B5" />
            <polygon points="270,114 265,106 275,106" fill="#B5B5B5" />

            {/* Input label */}
            <text x="270" y="138" fill="#5A5A5A" fontSize="14" fontFamily="ui-monospace, monospace">
              Input / Task
            </text>

            {/* Connector: input → AI Model */}
            <line x1="270" y1="150" x2="270" y2="178" stroke="#B5B5B5" strokeWidth="1.2" />
            <circle cx="270" cy="150" r="2.5" fill="#B5B5B5" />
            <polygon points="270,182 265,174 275,174" fill="#B5B5B5" />

            {/* AI Model box */}
            <rect x="146" y="190" width="248" height="84" rx="3"
              fill="#FFFFFF" stroke="#DADADA" strokeWidth="1" />
            <text x="270" y="226" textAnchor="middle" fill="#2A2A2A" fontSize="16" fontFamily="ui-monospace, monospace">
              AI Model
            </text>
            <text x="270" y="250" textAnchor="middle" fill="#8C8C8C" fontSize="12" fontFamily="ui-monospace, monospace">
              (probabilistic)
            </text>

            {/* Pins left - AI Model */}
            {[0.3, 0.5, 0.7].map((pct) => (
              <rect key={`al${pct}`} x="140" y={190 + 84 * pct - 4} width="6" height="8" rx="0.8"
                fill="#E8E8E6" />
            ))}
            {/* Pins right - AI Model */}
            {[0.3, 0.5, 0.7].map((pct) => (
              <rect key={`ar${pct}`} x="394" y={190 + 84 * pct - 4} width="6" height="8" rx="0.8"
                fill="#E8E8E6" />
            ))}

            {/* Layer label: probabilistic */}
            <line x1="400" y1="232" x2="434" y2="232" stroke="#DADADA" strokeWidth="0.8" />
            <circle cx="434" cy="232" r="2" fill="#DADADA" />
            <text x="444" y="228" fill="#8C8C8C" fontSize="10" fontFamily="ui-monospace, monospace" letterSpacing="0.08em">
              probabilistic layer
            </text>

            {/* Connector: AI Model → Reliability Layer */}
            <line x1="270" y1="274" x2="270" y2="320" stroke="#B5B5B5" strokeWidth="1.2" />
            <circle cx="270" cy="274" r="2.5" fill="#B5B5B5" />
            <polygon points="270,324 265,316 275,316" fill="#B5B5B5" />

            {/* Reliability Layer box — wider, slightly different fill */}
            <rect x="106" y="332" width="328" height="120" rx="3"
              fill="#F2F2F0" stroke="#DADADA" strokeWidth="1" />
            <text x="270" y="366" textAnchor="middle" fill="#2A2A2A" fontSize="16" fontFamily="ui-monospace, monospace">
              Reliability Layer
            </text>
            <line x1="156" y1="380" x2="384" y2="380" stroke="#E8E8E6" strokeWidth="0.8" />
            <text x="270" y="416" textAnchor="middle" fill="#5A5A5A" fontSize="11" fontFamily="ui-monospace, monospace">
              contracts · invariants · repair · retry
            </text>

            {/* Pins left - Reliability */}
            {[0.25, 0.5, 0.75].map((pct) => (
              <rect key={`rl${pct}`} x="100" y={332 + 120 * pct - 4} width="6" height="8" rx="0.8"
                fill="#E8E8E6" />
            ))}
            {/* Pins right - Reliability */}
            {[0.25, 0.5, 0.75].map((pct) => (
              <rect key={`rr${pct}`} x="434" y={332 + 120 * pct - 4} width="6" height="8" rx="0.8"
                fill="#E8E8E6" />
            ))}

            {/* Layer label: deterministic boundary */}
            <line x1="440" y1="392" x2="474" y2="392" stroke="#DADADA" strokeWidth="0.8" />
            <circle cx="474" cy="392" r="2" fill="#DADADA" />
            <text x="484" y="388" fill="#8C8C8C" fontSize="10" fontFamily="ui-monospace, monospace" letterSpacing="0.08em">
              deterministic boundary
            </text>

            {/* Connector: Reliability → Software */}
            <line x1="270" y1="452" x2="270" y2="498" stroke="#B5B5B5" strokeWidth="1.2" />
            <circle cx="270" cy="452" r="2.5" fill="#B5B5B5" />
            <polygon points="270,502 265,494 275,494" fill="#B5B5B5" />

            {/* Software System box */}
            <rect x="146" y="510" width="248" height="84" rx="3"
              fill="#FFFFFF" stroke="#DADADA" strokeWidth="1" />
            <text x="270" y="546" textAnchor="middle" fill="#2A2A2A" fontSize="16" fontFamily="ui-monospace, monospace">
              Software System
            </text>
            <text x="270" y="570" textAnchor="middle" fill="#8C8C8C" fontSize="12" fontFamily="ui-monospace, monospace">
              (deterministic)
            </text>

            {/* Pins left - Software */}
            {[0.3, 0.5, 0.7].map((pct) => (
              <rect key={`sl${pct}`} x="140" y={510 + 84 * pct - 4} width="6" height="8" rx="0.8"
                fill="#E8E8E6" />
            ))}
            {/* Pins right - Software */}
            {[0.3, 0.5, 0.7].map((pct) => (
              <rect key={`sr${pct}`} x="394" y={510 + 84 * pct - 4} width="6" height="8" rx="0.8"
                fill="#E8E8E6" />
            ))}

            {/* Layer label: deterministic system */}
            <line x1="400" y1="552" x2="434" y2="552" stroke="#DADADA" strokeWidth="0.8" />
            <circle cx="434" cy="552" r="2" fill="#DADADA" />
            <text x="444" y="548" fill="#8C8C8C" fontSize="10" fontFamily="ui-monospace, monospace" letterSpacing="0.08em">
              deterministic system
            </text>

            {/* Connector: software → real-world effects */}
            <line x1="270" y1="594" x2="270" y2="622" stroke="#B5B5B5" strokeWidth="1.2" />
            <circle cx="270" cy="594" r="2.5" fill="#B5B5B5" />
            <polygon points="270,626 265,618 275,618" fill="#B5B5B5" />

            {/* Real-world effects */}
            <text x="270" y="654" textAnchor="middle" fill="#5A5A5A" fontSize="14" fontFamily="ui-monospace, monospace">
              Real-World Effects
            </text>

            {/* Feedback loop */}
            <path
              d="M 410 652 Q 560 652 560 360 Q 560 70 392 70"
              fill="none"
              stroke="#DADADA"
              strokeWidth="1"
              strokeDasharray="4 4"
            />
            <polygon points="392,70 401,66 400,75" fill="#DADADA" />
            <text x="570" y="362" fill="#8C8C8C" fontSize="10" fontFamily="ui-monospace, monospace" letterSpacing="0.06em">
              feedback loop
            </text>

            {/* Flow direction indicator */}
            <text x="80" y="350" fill="#DADADA" fontSize="10" fontFamily="ui-monospace, monospace"
              textAnchor="middle" transform="rotate(-90, 80, 350)">
              information flow ↓
            </text>
            </svg>
          </div>
        </div>
        <p className="text-[#5A5A5A] text-sm max-w-3xl">
          Reliable AI systems are not just model integrations. They are software systems operating in dynamic real-world environments.
        </p>
      </section>

      <section className="max-w-4xl space-y-12">
        <p className="text-[10px] font-mono tracking-[0.2em] text-[#8C8C8C] uppercase">
          Framework
        </p>

        {frameworkRows.map((row) => (
          <div key={row.label}>
            <p className="text-[9px] font-mono tracking-[0.18em] text-[#B5B5B5] uppercase mb-4">
              {row.label}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {row.cards.map((card) => (
                <a
                  key={card.href}
                  href={card.href}
                  className={`p-7 transition-colors group block border ${
                    row.core
                      ? 'border-[#DADADA] hover:border-[#B5B5B5]'
                      : 'border-[#E8E8E6] hover:border-[#DADADA]'
                  }`}
                >
                  <h2 className={`text-lg font-light mb-3 group-hover:text-[#111111] ${
                    row.core ? 'text-[#111111]' : 'text-[#1A1A1A]'
                  }`}>
                    {card.title}
                  </h2>
                  <p className="text-[#5A5A5A] text-sm">
                    {card.description}
                  </p>
                </a>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}

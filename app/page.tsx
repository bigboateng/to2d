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
      <section className="max-w-3xl space-y-4">
        <h1 className="text-3xl md:text-4xl font-light tracking-tight text-[#1A1A1A]">
          Reliable AI Systems
        </h1>
        <p className="text-[#5A5A5A] text-sm">
          Engineering patterns for building software with probabilistic models.
        </p>
      </section>

      <section className="max-w-4xl">
        <div className="overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0">
          <svg
            viewBox="0 0 700 560"
            className="w-full"
            style={{ minWidth: '420px' }}
          >
            <defs>
              <pattern id="home-grid" width="24" height="24" patternUnits="userSpaceOnUse">
                <circle cx="12" cy="12" r="0.5" fill="#E8E8E6" />
              </pattern>
            </defs>

            <rect width="700" height="560" fill="url(#home-grid)" rx="2" />

            {/* Input label */}
            <text x="270" y="44" fill="#5A5A5A" fontSize="14" fontFamily="ui-monospace, monospace">
              Input / Task
            </text>

            {/* Connector: input → AI Model */}
            <line x1="270" y1="56" x2="270" y2="84" stroke="#B5B5B5" strokeWidth="1.2" />
            <circle cx="270" cy="56" r="2.5" fill="#B5B5B5" />
            <polygon points="270,88 265,80 275,80" fill="#B5B5B5" />

            {/* AI Model box */}
            <rect x="146" y="96" width="248" height="84" rx="3"
              fill="#FFFFFF" stroke="#DADADA" strokeWidth="1" />
            <text x="270" y="132" textAnchor="middle" fill="#2A2A2A" fontSize="16" fontFamily="ui-monospace, monospace">
              AI Model
            </text>
            <text x="270" y="156" textAnchor="middle" fill="#8C8C8C" fontSize="12" fontFamily="ui-monospace, monospace">
              (probabilistic)
            </text>

            {/* Pins left - AI Model */}
            {[0.3, 0.5, 0.7].map((pct) => (
              <rect key={`al${pct}`} x="140" y={96 + 84 * pct - 4} width="6" height="8" rx="0.8"
                fill="#E8E8E6" />
            ))}
            {/* Pins right - AI Model */}
            {[0.3, 0.5, 0.7].map((pct) => (
              <rect key={`ar${pct}`} x="394" y={96 + 84 * pct - 4} width="6" height="8" rx="0.8"
                fill="#E8E8E6" />
            ))}

            {/* Layer label: probabilistic */}
            <line x1="400" y1="138" x2="434" y2="138" stroke="#DADADA" strokeWidth="0.8" />
            <circle cx="434" cy="138" r="2" fill="#DADADA" />
            <text x="444" y="134" fill="#8C8C8C" fontSize="10" fontFamily="ui-monospace, monospace" letterSpacing="0.08em">
              probabilistic layer
            </text>

            {/* Connector: AI Model → Reliability Layer */}
            <line x1="270" y1="180" x2="270" y2="226" stroke="#B5B5B5" strokeWidth="1.2" />
            <circle cx="270" cy="180" r="2.5" fill="#B5B5B5" />
            <polygon points="270,230 265,222 275,222" fill="#B5B5B5" />

            {/* Reliability Layer box — wider, slightly different fill */}
            <rect x="106" y="238" width="328" height="120" rx="3"
              fill="#F2F2F0" stroke="#DADADA" strokeWidth="1" />
            <text x="270" y="272" textAnchor="middle" fill="#2A2A2A" fontSize="16" fontFamily="ui-monospace, monospace">
              Reliability Layer
            </text>
            <line x1="156" y1="286" x2="384" y2="286" stroke="#E8E8E6" strokeWidth="0.8" />
            <text x="270" y="322" textAnchor="middle" fill="#5A5A5A" fontSize="11" fontFamily="ui-monospace, monospace">
              contracts · invariants · repair · retry
            </text>

            {/* Pins left - Reliability */}
            {[0.25, 0.5, 0.75].map((pct) => (
              <rect key={`rl${pct}`} x="100" y={238 + 120 * pct - 4} width="6" height="8" rx="0.8"
                fill="#E8E8E6" />
            ))}
            {/* Pins right - Reliability */}
            {[0.25, 0.5, 0.75].map((pct) => (
              <rect key={`rr${pct}`} x="434" y={238 + 120 * pct - 4} width="6" height="8" rx="0.8"
                fill="#E8E8E6" />
            ))}

            {/* Layer label: deterministic boundary */}
            <line x1="440" y1="298" x2="474" y2="298" stroke="#DADADA" strokeWidth="0.8" />
            <circle cx="474" cy="298" r="2" fill="#DADADA" />
            <text x="484" y="294" fill="#8C8C8C" fontSize="10" fontFamily="ui-monospace, monospace" letterSpacing="0.08em">
              deterministic boundary
            </text>

            {/* Connector: Reliability → Software */}
            <line x1="270" y1="358" x2="270" y2="404" stroke="#B5B5B5" strokeWidth="1.2" />
            <circle cx="270" cy="358" r="2.5" fill="#B5B5B5" />
            <polygon points="270,408 265,400 275,400" fill="#B5B5B5" />

            {/* Software System box */}
            <rect x="146" y="416" width="248" height="84" rx="3"
              fill="#FFFFFF" stroke="#DADADA" strokeWidth="1" />
            <text x="270" y="452" textAnchor="middle" fill="#2A2A2A" fontSize="16" fontFamily="ui-monospace, monospace">
              Software System
            </text>
            <text x="270" y="476" textAnchor="middle" fill="#8C8C8C" fontSize="12" fontFamily="ui-monospace, monospace">
              (deterministic)
            </text>

            {/* Pins left - Software */}
            {[0.3, 0.5, 0.7].map((pct) => (
              <rect key={`sl${pct}`} x="140" y={416 + 84 * pct - 4} width="6" height="8" rx="0.8"
                fill="#E8E8E6" />
            ))}
            {/* Pins right - Software */}
            {[0.3, 0.5, 0.7].map((pct) => (
              <rect key={`sr${pct}`} x="394" y={416 + 84 * pct - 4} width="6" height="8" rx="0.8"
                fill="#E8E8E6" />
            ))}

            {/* Layer label: deterministic system */}
            <line x1="400" y1="458" x2="434" y2="458" stroke="#DADADA" strokeWidth="0.8" />
            <circle cx="434" cy="458" r="2" fill="#DADADA" />
            <text x="444" y="454" fill="#8C8C8C" fontSize="10" fontFamily="ui-monospace, monospace" letterSpacing="0.08em">
              deterministic system
            </text>

            {/* Flow direction indicator */}
            <text x="80" y="290" fill="#DADADA" fontSize="10" fontFamily="ui-monospace, monospace"
              textAnchor="middle" transform="rotate(-90, 80, 290)">
              information flow ↓
            </text>
          </svg>
        </div>
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

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Environment Discovery',
  description: 'How error signals reveal the structure of unknown environments, turning failures into a mechanism for discovering system constraints.',
}

export default function EnvironmentDiscoveryPage() {
  return (
    <div className="max-w-3xl space-y-14">
      <header className="space-y-4 border-b border-[#E8E8E6] pb-8">
        <p className="text-xs uppercase tracking-[0.2em] text-[#8C8C8C] font-mono">Language Models / Environment Discovery</p>
        <h1 className="text-3xl md:text-4xl font-light tracking-tight leading-tight text-[#1A1A1A]">
          Error Signals and Environment Discovery
        </h1>
      </header>

      <section className="space-y-5">
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          In many systems, failures do more than indicate that something went wrong. They also reveal information about the structure of the environment.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          When a language model interacts with a real system, the full environment is often not known in advance. The system may only have partial information about the data, interface, or constraints it must operate within.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Error signals help uncover that missing information.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-light text-[#1A1A1A]">The Basic Pattern</h2>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Consider a simple interaction loop.
        </p>
        <pre className="font-mono text-sm leading-relaxed bg-[#FFFFFF] border border-[#DADADA] p-4 overflow-x-auto text-[#2A2A2A]">
{`input → model → output → verification → error`}
        </pre>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Each step produces additional information about the environment. The process can be represented as:
        </p>
        <pre className="font-mono text-sm leading-relaxed bg-[#FFFFFF] border border-[#DADADA] p-4 overflow-x-auto text-[#2A2A2A]">
{`x → M(x) → y → E(y)

where:
  x    system input
  M    model operator
  y    candidate representation
  E    environment feedback (error signal)`}
        </pre>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          The error signal becomes a source of information.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-light text-[#1A1A1A]">Extracting Environment Information</h2>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          When the model output fails, the error often reveals something about the system.
        </p>
        <pre className="font-mono text-sm leading-relaxed bg-[#FFFFFF] border border-[#DADADA] p-4 overflow-x-auto text-[#C89B2C]">
{`missing JSON field
invalid schema
element not found
timeout
incorrect calculation`}
        </pre>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Each of these signals reveals a constraint that the system must satisfy.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-[10px] font-mono tracking-[0.15em] text-[#C89B2C] uppercase mb-2">Error Signal</p>
            <pre className="font-mono text-sm leading-relaxed bg-[#FFFFFF] border border-[#DADADA] p-4 overflow-x-auto text-[#C89B2C]">
{`missing field "confidence"`}
            </pre>
          </div>
          <div>
            <p className="text-[10px] font-mono tracking-[0.15em] text-[#3C7A52] uppercase mb-2">Discovered Constraint</p>
            <pre className="font-mono text-sm leading-relaxed bg-[#FFFFFF] border border-[#DADADA] p-4 overflow-x-auto text-[#3C7A52]">
{`representation must include
confidence`}
            </pre>
          </div>
        </div>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          The error signal exposes a rule of the system.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-light text-[#1A1A1A]">Example: Browser Automation</h2>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Browser automation environments are especially rich in error signals.
        </p>
        <pre className="font-mono text-sm leading-relaxed bg-[#FFFFFF] border border-[#DADADA] p-4 overflow-x-auto text-[#C89B2C]">
{`click failed: element not found`}
        </pre>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          This reveals something about the environment: the element selector was incorrect, the element may not exist, or the page structure differs from what was expected.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Over time the system can infer structure about the environment.
        </p>

        <div className="overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0 pt-2">
          <svg viewBox="0 0 520 240" className="w-full" style={{ minWidth: '340px' }}>
            <defs>
              <pattern id="ed-browser" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="0.4" fill="#E8E8E6" />
              </pattern>
            </defs>
            <rect width="520" height="240" fill="url(#ed-browser)" rx="2" />

            <rect x="185" y="14" width="150" height="30" rx="3" fill="#FFFFFF" stroke="#DADADA" strokeWidth="1" />
            <text x="260" y="34" textAnchor="middle" fill="#2A2A2A" fontSize="11" fontFamily="ui-monospace, monospace">page</text>

            <line x1="260" y1="44" x2="260" y2="56" stroke="#B5B5B5" strokeWidth="1.2" />
            <polygon points="260,60 256,52 264,52" fill="#B5B5B5" />

            <rect x="155" y="62" width="210" height="30" rx="3" fill="#FFFFFF" stroke="#DADADA" strokeWidth="1" />
            <text x="260" y="82" textAnchor="middle" fill="#2A2A2A" fontSize="11" fontFamily="ui-monospace, monospace">mapping &rarr; automation spec</text>

            <line x1="260" y1="92" x2="260" y2="104" stroke="#B5B5B5" strokeWidth="1.2" />
            <polygon points="260,108 256,100 264,100" fill="#B5B5B5" />

            <rect x="185" y="110" width="150" height="30" rx="3" fill="#FFFFFF" stroke="#C89B2C" strokeWidth="1.2" />
            <text x="260" y="130" textAnchor="middle" fill="#C89B2C" fontSize="11" fontFamily="ui-monospace, monospace">error signal</text>

            <line x1="260" y1="140" x2="260" y2="152" stroke="#B5B5B5" strokeWidth="1.2" />
            <polygon points="260,156 256,148 264,148" fill="#B5B5B5" />

            <rect x="155" y="158" width="210" height="30" rx="3" fill="#F2F2F0" stroke="#3C7A52" strokeWidth="1" />
            <text x="260" y="178" textAnchor="middle" fill="#3C7A52" fontSize="11" fontFamily="ui-monospace, monospace">environment insight</text>

            <path d="M 365 173 Q 440 173 440 48 Q 440 14 310 22" stroke="#B5B5B5" strokeWidth="1" strokeDasharray="4 3" fill="none" />
            <polygon points="306,22 314,18 314,26" fill="#B5B5B5" />
            <text x="454" y="100" fill="#8C8C8C" fontSize="9" fontFamily="ui-monospace, monospace">builds better</text>
            <text x="454" y="112" fill="#8C8C8C" fontSize="9" fontFamily="ui-monospace, monospace">representation</text>
          </svg>
        </div>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-light text-[#1A1A1A]">Environment Discovery Loop</h2>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          The interaction becomes a discovery loop. Instead of simply retrying, the system learns something about the environment.
        </p>

        <div className="overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0 pt-2">
          <svg viewBox="0 0 520 360" className="w-full" style={{ minWidth: '340px' }}>
            <defs>
              <pattern id="ed-loop" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="0.4" fill="#E8E8E6" />
              </pattern>
            </defs>
            <rect width="520" height="360" fill="url(#ed-loop)" rx="2" />

            <rect x="185" y="14" width="150" height="30" rx="3" fill="#FFFFFF" stroke="#DADADA" strokeWidth="1" />
            <text x="260" y="34" textAnchor="middle" fill="#2A2A2A" fontSize="11" fontFamily="ui-monospace, monospace">environment</text>

            <line x1="260" y1="44" x2="260" y2="56" stroke="#B5B5B5" strokeWidth="1.2" />
            <polygon points="260,60 256,52 264,52" fill="#B5B5B5" />

            <rect x="175" y="62" width="170" height="30" rx="3" fill="#FFFFFF" stroke="#DADADA" strokeWidth="1" />
            <text x="260" y="82" textAnchor="middle" fill="#2A2A2A" fontSize="11" fontFamily="ui-monospace, monospace">model proposal</text>

            <line x1="260" y1="92" x2="260" y2="104" stroke="#B5B5B5" strokeWidth="1.2" />
            <polygon points="260,108 256,100 264,100" fill="#B5B5B5" />

            <rect x="160" y="110" width="200" height="30" rx="3" fill="#F2F2F0" stroke="#DADADA" strokeWidth="1" />
            <text x="260" y="130" textAnchor="middle" fill="#2A2A2A" fontSize="11" fontFamily="ui-monospace, monospace">system verification</text>

            <line x1="260" y1="140" x2="260" y2="152" stroke="#B5B5B5" strokeWidth="1.2" />
            <polygon points="260,156 256,148 264,148" fill="#B5B5B5" />

            <rect x="185" y="158" width="150" height="30" rx="3" fill="#FFFFFF" stroke="#C89B2C" strokeWidth="1.2" />
            <text x="260" y="178" textAnchor="middle" fill="#C89B2C" fontSize="11" fontFamily="ui-monospace, monospace">error signal</text>

            <line x1="260" y1="188" x2="260" y2="200" stroke="#B5B5B5" strokeWidth="1.2" />
            <polygon points="260,204 256,196 264,196" fill="#B5B5B5" />

            <rect x="155" y="206" width="210" height="30" rx="3" fill="#FFFFFF" stroke="#3C7A52" strokeWidth="1" />
            <text x="260" y="226" textAnchor="middle" fill="#3C7A52" fontSize="11" fontFamily="ui-monospace, monospace">environment insight</text>

            <line x1="260" y1="236" x2="260" y2="248" stroke="#B5B5B5" strokeWidth="1.2" />
            <polygon points="260,252 256,244 264,244" fill="#B5B5B5" />

            <rect x="165" y="254" width="190" height="30" rx="3" fill="#F2F2F0" stroke="#DADADA" strokeWidth="1" />
            <text x="260" y="274" textAnchor="middle" fill="#2A2A2A" fontSize="11" fontFamily="ui-monospace, monospace">improved mapping</text>

            {/* Feedback loop */}
            <path d="M 355 269 Q 440 269 440 29 Q 440 14 336 14" stroke="#B5B5B5" strokeWidth="1" strokeDasharray="4 3" fill="none" />
            <polygon points="336,14 344,10 344,18" fill="#B5B5B5" />

            {/* Side labels */}
            <text x="26" y="82" fill="#8C8C8C" fontSize="9" fontFamily="ui-monospace, monospace">propose</text>
            <text x="26" y="130" fill="#8C8C8C" fontSize="9" fontFamily="ui-monospace, monospace">verify</text>
            <text x="26" y="178" fill="#C89B2C" fontSize="9" fontFamily="ui-monospace, monospace">signal</text>
            <text x="26" y="226" fill="#3C7A52" fontSize="9" fontFamily="ui-monospace, monospace">discover</text>
            <text x="26" y="274" fill="#8C8C8C" fontSize="9" fontFamily="ui-monospace, monospace">improve</text>

            <text x="458" y="148" fill="#8C8C8C" fontSize="9" fontFamily="ui-monospace, monospace">discovery</text>
            <text x="458" y="160" fill="#8C8C8C" fontSize="9" fontFamily="ui-monospace, monospace">loop</text>
          </svg>
        </div>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-light text-[#1A1A1A]">Why This Matters</h2>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Many real-world systems contain structure that is difficult to specify in advance: websites, documents, APIs, user-generated data, operational systems.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          In these environments, it may be impossible to fully define the correct representation beforehand. Error signals allow the system to gradually discover those constraints.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-light text-[#1A1A1A]">Relationship to Representation Mapping</h2>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Representation mapping converts information between domains. Error signals reveal when the mapping fails. Those signals then guide improvements to the mapping.
        </p>
        <pre className="font-mono text-sm leading-relaxed bg-[#FFFFFF] border border-[#DADADA] p-4 overflow-x-auto text-[#2A2A2A]">
{`environment → model → representation    (mapping)
representation → verification → error   (signal)
error → insight → improved mapping       (discovery)`}
        </pre>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-light text-[#1A1A1A]">Relationship to Deterministic Boundaries</h2>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Deterministic boundaries enforce system guarantees. When a boundary detects a violation, it produces an error signal. These signals provide structured feedback about what the system requires.
        </p>
        <pre className="font-mono text-sm leading-relaxed bg-[#FFFFFF] border border-[#DADADA] p-4 overflow-x-auto text-[#2A2A2A]">
{`candidate representation
        │
deterministic boundary
        │
error signal → environment constraint`}
        </pre>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-light text-[#1A1A1A]">Error Signals as Control Feedback</h2>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Error signals behave like a control feedback signal. In control systems, the difference between the desired output and the actual output drives the next correction.
        </p>
        <pre className="font-mono text-sm leading-relaxed bg-[#FFFFFF] border border-[#DADADA] p-4 overflow-x-auto text-[#2A2A2A]">
{`e(t) = desired(t) - actual(t)`}
        </pre>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          In a language model system, the error signal plays an analogous role. The deterministic boundary defines what the system expects. The model output is what was produced. The difference between them is the error signal.
        </p>
        <pre className="font-mono text-sm leading-relaxed bg-[#FFFFFF] border border-[#DADADA] p-4 overflow-x-auto text-[#2A2A2A]">
{`e = boundary(expected) - model(actual)`}
        </pre>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          This signal drives the next iteration, just as in a closed-loop control system. The environment discovery loop is structurally equivalent to a feedback control loop operating on representations rather than physical quantities.
        </p>

        <div className="overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0 pt-2">
          <svg viewBox="0 0 520 160" className="w-full" style={{ minWidth: '340px' }}>
            <defs>
              <pattern id="ed-control" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="0.4" fill="#E8E8E6" />
              </pattern>
            </defs>
            <rect width="520" height="160" fill="url(#ed-control)" rx="2" />

            {/* Forward path */}
            <text x="40" y="50" fill="#2A2A2A" fontSize="11" fontFamily="ui-monospace, monospace">input</text>

            <line x1="80" y1="46" x2="120" y2="46" stroke="#B5B5B5" strokeWidth="1.2" />
            <polygon points="124,46 116,42 116,50" fill="#B5B5B5" />

            <circle cx="260" cy="46" r="22" fill="#FFFFFF" stroke="#DADADA" strokeWidth="1.2" />
            <circle cx="260" cy="46" r="15" fill="none" stroke="#E8E8E6" strokeWidth="0.6" />
            <text x="260" y="52" textAnchor="middle" fill="#2A2A2A" fontSize="16" fontFamily="ui-monospace, monospace">&#x2299;</text>

            <line x1="126" y1="46" x2="236" y2="46" stroke="#B5B5B5" strokeWidth="1.2" />
            <line x1="282" y1="46" x2="370" y2="46" stroke="#B5B5B5" strokeWidth="1.2" />
            <polygon points="374,46 366,42 366,50" fill="#B5B5B5" />

            <rect x="376" y="30" width="100" height="32" rx="3" fill="#FFFFFF" stroke="#DADADA" strokeWidth="1" />
            <text x="426" y="50" textAnchor="middle" fill="#2A2A2A" fontSize="11" fontFamily="ui-monospace, monospace">output</text>

            {/* Feedback path */}
            <line x1="426" y1="62" x2="426" y2="120" stroke="#C89B2C" strokeWidth="1" />
            <line x1="426" y1="120" x2="140" y2="120" stroke="#C89B2C" strokeWidth="1" />
            <line x1="140" y1="120" x2="140" y2="56" stroke="#C89B2C" strokeWidth="1" />
            <polygon points="140,52 136,60 144,60" fill="#C89B2C" />

            <text x="280" y="136" textAnchor="middle" fill="#C89B2C" fontSize="10" fontFamily="ui-monospace, monospace">e = expected - actual</text>
            <text x="280" y="112" textAnchor="middle" fill="#8C8C8C" fontSize="9" fontFamily="ui-monospace, monospace">error signal (feedback)</text>
          </svg>
        </div>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-light text-[#1A1A1A]">From Failure to Information</h2>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          In traditional software systems, errors are often treated as terminal events. In probabilistic systems, failures can become a source of information.
        </p>
        <pre className="font-mono text-sm leading-relaxed bg-[#FFFFFF] border border-[#DADADA] p-4 overflow-x-auto text-[#2A2A2A]">
{`attempt → failure → signal → improved attempt`}
        </pre>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          This turns errors into a mechanism for discovering how the system behaves.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-light text-[#1A1A1A]">Summary</h2>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Error signals indicate when model outputs fail to satisfy system constraints. However, they also reveal information about the environment and the requirements of the system.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          When systems treat errors as signals rather than simple failures, they can use those signals to improve representation mapping and gradually discover the structure of the environment.
        </p>
        <pre className="font-mono text-sm leading-relaxed bg-[#FFFFFF] border border-[#DADADA] p-4 overflow-x-auto text-[#2A2A2A]">
{`input → model → representation → error signal → environment insight`}
        </pre>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Failures become a source of knowledge.
        </p>
      </section>
    </div>
  )
}

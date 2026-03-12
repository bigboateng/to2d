import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Real-World Dynamics',
  description: 'Why software interacting with external systems behaves differently, and why reliability becomes a systems problem rather than a modeling problem.',
}

export default function RealWorldDynamicsPage() {
  return (
    <div className="max-w-3xl space-y-14">
      <header className="space-y-4 border-b border-[#E8E8E6] pb-8">
        <p className="text-xs uppercase tracking-[0.2em] text-[#8C8C8C] font-mono">Real-World Dynamics</p>
        <h1 className="text-3xl md:text-4xl font-light tracking-tight leading-tight text-[#1A1A1A]">
          Real-World Dynamics
        </h1>
      </header>

      <section className="space-y-5">
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Most traditional software systems operate inside environments that are largely predictable.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          APIs follow contracts. Data schemas evolve slowly. Execution paths are mostly controlled by the application itself.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          In these systems, the main engineering challenge is organizing deterministic logic correctly.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Real-world automation systems behave differently.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          They interact with external systems whose behavior changes independently of the software.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-light text-[#1A1A1A]">Real-World Software Loop</h2>
        <div className="overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0">
          <svg
            viewBox="0 0 520 500"
            className="w-full"
            style={{ minWidth: '340px' }}
          >
            <defs>
              <pattern id="rwd-grid" width="24" height="24" patternUnits="userSpaceOnUse">
                <circle cx="12" cy="12" r="0.45" fill="#E8E8E6" />
              </pattern>
            </defs>

            <rect width="520" height="500" fill="url(#rwd-grid)" rx="2" />

            <rect x="110" y="28" width="300" height="58" rx="3" fill="#FFFFFF" stroke="#DADADA" strokeWidth="1" />
            <text x="260" y="52" textAnchor="middle" fill="#2A2A2A" fontSize="13" fontFamily="ui-monospace, monospace">
              Real-World Systems
            </text>
            <text x="260" y="72" textAnchor="middle" fill="#8C8C8C" fontSize="10" fontFamily="ui-monospace, monospace">
              websites · APIs · documents · humans
            </text>

            <line x1="260" y1="86" x2="260" y2="116" stroke="#DADADA" strokeWidth="1" />
            <polygon points="260,120 256,112 264,112" fill="#DADADA" />
            <text x="278" y="108" fill="#8C8C8C" fontSize="10" fontFamily="ui-monospace, monospace">observe</text>

            <rect x="110" y="130" width="300" height="58" rx="3" fill="#FFFFFF" stroke="#DADADA" strokeWidth="1" />
            <text x="260" y="154" textAnchor="middle" fill="#2A2A2A" fontSize="13" fontFamily="ui-monospace, monospace">
              Software System
            </text>
            <text x="260" y="174" textAnchor="middle" fill="#8C8C8C" fontSize="10" fontFamily="ui-monospace, monospace">
              workflows · automation · agents
            </text>

            <line x1="260" y1="188" x2="260" y2="218" stroke="#DADADA" strokeWidth="1" />
            <polygon points="260,222 256,214 264,214" fill="#DADADA" />
            <text x="278" y="210" fill="#8C8C8C" fontSize="10" fontFamily="ui-monospace, monospace">interpret</text>

            <rect x="148" y="232" width="224" height="58" rx="3" fill="#F2F2F0" stroke="#DADADA" strokeWidth="1" />
            <text x="260" y="256" textAnchor="middle" fill="#2A2A2A" fontSize="13" fontFamily="ui-monospace, monospace">
              AI Operator
            </text>
            <text x="260" y="276" textAnchor="middle" fill="#8C8C8C" fontSize="10" fontFamily="ui-monospace, monospace">
              probabilistic reasoning
            </text>

            <line x1="260" y1="290" x2="260" y2="320" stroke="#DADADA" strokeWidth="1" />
            <polygon points="260,324 256,316 264,316" fill="#DADADA" />
            <text x="278" y="312" fill="#8C8C8C" fontSize="10" fontFamily="ui-monospace, monospace">act</text>

            <rect x="90" y="334" width="340" height="58" rx="3" fill="#FFFFFF" stroke="#DADADA" strokeWidth="1" />
            <text x="260" y="358" textAnchor="middle" fill="#2A2A2A" fontSize="13" fontFamily="ui-monospace, monospace">
              External System Actions
            </text>
            <text x="260" y="378" textAnchor="middle" fill="#8C8C8C" fontSize="10" fontFamily="ui-monospace, monospace">
              browser actions · API calls · updates
            </text>

            <line x1="260" y1="392" x2="260" y2="422" stroke="#DADADA" strokeWidth="1" />
            <polygon points="260,426 256,418 264,418" fill="#DADADA" />
            <text x="278" y="414" fill="#8C8C8C" fontSize="10" fontFamily="ui-monospace, monospace">
              environment changes
            </text>

            <path
              d="M 438 364 Q 486 364 486 210 Q 486 56 418 56"
              fill="none"
              stroke="#DADADA"
              strokeWidth="0.9"
              strokeDasharray="4 4"
            />
            <polygon points="418,56 426,52 425,60" fill="#DADADA" />
          </svg>
        </div>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Real-world automation systems operate in a continuous loop between software and external environments.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-light text-[#1A1A1A]">Examples of Dynamic Environments</h2>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Examples include:
        </p>
        <ul className="space-y-2 text-sm text-[#5A5A5A] list-disc ml-6">
          <li>websites changing structure or authentication flows</li>
          <li>APIs introducing undocumented edge cases</li>
          <li>documents arriving in unexpected formats</li>
          <li>business processes evolving over time</li>
          <li>operational rules shifting as organizations adapt</li>
        </ul>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          These external forces introduce real-world dynamics into the system.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          The software no longer controls the environment. Instead, it must operate inside an environment that is continuously changing.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-light text-[#1A1A1A]">Why This Changes System Design</h2>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          When software interacts with dynamic environments, failures rarely come from a single bug.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Instead, they emerge from small mismatches between the system and the external world.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Examples include:
        </p>
        <ul className="space-y-2 text-sm text-[#5A5A5A] list-disc ml-6">
          <li>a login flow adding an extra verification step</li>
          <li>a document format introducing a new optional field</li>
          <li>an API returning a slightly different response structure</li>
          <li>a website modifying its DOM layout</li>
        </ul>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Each individual change may be small, but systems built on rigid assumptions often break when these changes accumulate.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Traditional software engineering techniques do not always account for this kind of drift.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          They assume that interfaces are relatively stable and that changes are coordinated between systems.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Automation systems rarely have that luxury.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-light text-[#1A1A1A]">Systems That Interact With the World</h2>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Many modern AI-assisted systems fall into this category.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Examples include:
        </p>
        <ul className="space-y-2 text-sm text-[#5A5A5A] list-disc ml-6">
          <li>browser agents interacting with websites</li>
          <li>automation workflows operating across third-party platforms</li>
          <li>document processing pipelines handling unpredictable inputs</li>
          <li>operational systems integrating with many external services</li>
        </ul>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          These systems are not simply executing code.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          They are participating in an environment whose structure must be discovered and adapted to over time.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          That changes the role of software architecture.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Instead of assuming stable inputs, the system must be designed to:
        </p>
        <ul className="space-y-2 text-sm text-[#5A5A5A] list-disc ml-6">
          <li>observe the environment</li>
          <li>interpret what it finds</li>
          <li>verify whether results are acceptable</li>
          <li>recover when they are not</li>
          <li>accumulate knowledge about how the environment behaves</li>
        </ul>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-light text-[#1A1A1A]">The Role of AI in These Systems</h2>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Language models make these systems more powerful because they can interpret messy environments.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          They can:
        </p>
        <ul className="space-y-2 text-sm text-[#5A5A5A] list-disc ml-6">
          <li>recognize structure in documents</li>
          <li>identify fields in web interfaces</li>
          <li>classify errors and unexpected responses</li>
          <li>translate between representations used by different systems</li>
        </ul>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          However, language models are probabilistic components.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          They do not guarantee correctness on their own.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          If their outputs are used directly by deterministic software systems, failures propagate quickly.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          As a result, reliable real-world systems require additional structure around model behavior.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-light text-[#1A1A1A]">Architectural Implications</h2>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Reliable systems that interact with dynamic environments typically separate several responsibilities.
        </p>
        <div className="space-y-4">
          <div className="space-y-2">
            <h3 className="text-base font-light text-[#1A1A1A]">Environment Interaction</h3>
            <p className="text-sm leading-relaxed text-[#5A5A5A]">
              The system observes and acts on external systems whose behavior may change.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-base font-light text-[#1A1A1A]">Probabilistic Reasoning</h3>
            <p className="text-sm leading-relaxed text-[#5A5A5A]">
              Language models help interpret ambiguous or poorly structured information.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-base font-light text-[#1A1A1A]">Deterministic Guarantees</h3>
            <p className="text-sm leading-relaxed text-[#5A5A5A]">
              Reliability layers enforce constraints required by the surrounding software system.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-base font-light text-[#1A1A1A]">Recovery and Adaptation</h3>
            <p className="text-sm leading-relaxed text-[#5A5A5A]">
              When the environment changes, the system detects the mismatch and updates its behavior.
            </p>
          </div>
        </div>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          This separation allows systems to remain stable even when external conditions evolve.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-light text-[#1A1A1A]">Real-World Software as a Loop</h2>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Software interacting with dynamic environments often forms a continuous loop:
        </p>
        <pre className="font-mono text-sm leading-relaxed bg-[#FFFFFF] border border-[#DADADA] p-4 overflow-x-auto text-[#2A2A2A]">
{`environment
    ↓ observe
software system
    ↓ interpret
AI reasoning
    ↓ act
external systems
    ↓ environment changes
environment`}
        </pre>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          The environment influences the system. The system acts on the environment. Each action changes what the system will encounter next.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Reliability depends on ensuring that this loop remains stable even as the environment evolves.
        </p>
      </section>

      <section className="space-y-5 border-t border-[#E8E8E6] pt-10">
        <h2 className="text-xl font-light text-[#1A1A1A]">Why This Matters</h2>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Real-world dynamics are what make reliable AI systems architecturally different from traditional software.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Once software interacts directly with changing environments, several new problems appear:
        </p>
        <ul className="space-y-2 text-sm text-[#5A5A5A] list-disc ml-6">
          <li>interpreting messy or unstable inputs</li>
          <li>representing external state inside the system</li>
          <li>enforcing deterministic guarantees around probabilistic components</li>
          <li>recovering when actions, assumptions, or model outputs fail</li>
        </ul>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          The following sections describe the architectural patterns used to make these systems reliable.
        </p>
      </section>
    </div>
  )
}

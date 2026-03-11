import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'LLMs in Software Systems | to2d',
  description: 'Language models introduce probabilistic components into software systems. Reliability comes from how the model is used inside the system, not from the model alone.',
  openGraph: {
    title: 'LLMs in Software Systems',
    description: 'Language models introduce probabilistic components into software systems.',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LLMs in Software Systems',
    description: 'Language models introduce probabilistic components into software systems.',
  },
}

export default function LLMsInSoftwareSystemsPage() {
  return (
    <div className="max-w-3xl space-y-14">
      <header className="space-y-4 border-b border-[#E8E8E6] pb-8">
        <p className="text-xs uppercase tracking-[0.2em] text-[#8C8C8C] font-mono">Language Models</p>
        <h1 className="text-3xl md:text-4xl font-light tracking-tight leading-tight text-[#1A1A1A]">
          LLMs in Software Systems
        </h1>
      </header>

      <section className="space-y-5">
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Traditional software is usually built from components that behave predictably enough to be tested, reasoned about, and composed into larger systems.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Large language models introduce a different kind of component. Their outputs are probabilistic, which means the same input can produce different results. This does not make them unusable. It means the surrounding software architecture matters more.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Before deciding how to build systems around language models, it helps to observe what kind of component they actually are.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-light text-[#1A1A1A]">Deterministic and Probabilistic Behavior</h2>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          A deterministic component behaves like this:
        </p>
        <pre className="font-mono text-sm leading-relaxed bg-[#FFFFFF] border border-[#DADADA] p-4 overflow-x-auto text-[#2A2A2A]">
{`same input → same output`}
        </pre>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          A probabilistic component behaves more like this:
        </p>
        <pre className="font-mono text-sm leading-relaxed bg-[#FFFFFF] border border-[#DADADA] p-4 overflow-x-auto text-[#2A2A2A]">
{`same input → set of possible outputs`}
        </pre>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Traditional software engineering relies heavily on the first pattern. LLM-based systems introduce the second.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-light text-[#1A1A1A]">Simple Observations</h2>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Some tasks are narrow and stable.
        </p>
        <pre className="font-mono text-sm leading-relaxed bg-[#FFFFFF] border border-[#DADADA] p-4 overflow-x-auto text-[#2A2A2A]">
{`What is the capital of Japan?
→ Tokyo`}
        </pre>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Some tasks require representation and transformation.
        </p>
        <pre className="font-mono text-sm leading-relaxed bg-[#FFFFFF] border border-[#DADADA] p-4 overflow-x-auto text-[#2A2A2A]">
{`A shop sells 3 pencils for $2. How much do 10 pencils cost?
→ $6.67`}
        </pre>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Some tasks depend heavily on domain structure.
        </p>
        <pre className="font-mono text-sm leading-relaxed bg-[#FFFFFF] border border-[#DADADA] p-4 overflow-x-auto text-[#2A2A2A]">
{`Why do we wear seatbelts in cars?
Why is orbital velocity needed for a rocket to stay around Earth?`}
        </pre>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          These examples show that model behavior is not generic in the abstract. Success and failure are shaped by the domain, the structure of the task, and the constraints of the expected answer.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-light text-[#1A1A1A]">Failures Are Informative</h2>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          When a model fails, the failure often has structure.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          It may indicate:
        </p>
        <ul className="space-y-2 text-sm text-[#5A5A5A] list-disc ml-6">
          <li>a local calculation mistake</li>
          <li>a formatting problem</li>
          <li>a domain misunderstanding</li>
          <li>a missing environmental constraint</li>
        </ul>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          This matters because software systems do not just consume answers. They depend on outputs that must fit into larger processes.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-light text-[#1A1A1A]">Why This Matters</h2>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          If model behavior is probabilistic, then reliability cannot come from the model alone. It has to come from how the model is used inside the system.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          This suggests a different question:
        </p>
        <pre className="font-mono text-sm leading-relaxed bg-[#FFFFFF] border border-[#DADADA] p-4 overflow-x-auto text-[#2A2A2A]">
{`not just how to prompt the model,
but what role the model should play inside software.`}
        </pre>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          That leads to a more useful view: the language model as an operator inside a constrained system.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-light text-[#1A1A1A]">Observing Operator Behavior</h2>

        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Once the model is viewed as an operator, a natural next step is to observe how its behavior changes across domains, formats, and constraints.
        </p>

        <div className="overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0 pt-2">
          <svg viewBox="0 0 520 340" className="w-full" style={{ minWidth: '340px' }}>
            <defs>
              <pattern id="lm-sw-dot" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="0.5" fill="#E8E8E6" />
              </pattern>
            </defs>
            <rect width="520" height="340" fill="#F7F7F5" rx="2" />
            <rect width="520" height="340" fill="url(#lm-sw-dot)" rx="2" />

            <text x="260" y="28" textAnchor="middle" fill="#8C8C8C" fontSize="10" fontFamily="ui-monospace, monospace">operator behavior across inputs</text>

            {/* Input column */}
            <rect x="30" y="50" width="140" height="32" rx="3" fill="#FFFFFF" stroke="#DADADA" strokeWidth="1" />
            <text x="100" y="71" textAnchor="middle" fill="#2A2A2A" fontSize="11" fontFamily="ui-monospace, monospace">user prompt</text>

            <rect x="30" y="92" width="140" height="32" rx="3" fill="#FFFFFF" stroke="#DADADA" strokeWidth="1" />
            <text x="100" y="113" textAnchor="middle" fill="#2A2A2A" fontSize="11" fontFamily="ui-monospace, monospace">domain</text>

            <rect x="30" y="134" width="140" height="32" rx="3" fill="#FFFFFF" stroke="#DADADA" strokeWidth="1" />
            <text x="100" y="155" textAnchor="middle" fill="#2A2A2A" fontSize="11" fontFamily="ui-monospace, monospace">output type</text>

            <rect x="30" y="176" width="140" height="32" rx="3" fill="#FFFFFF" stroke="#DADADA" strokeWidth="1" />
            <text x="100" y="197" textAnchor="middle" fill="#2A2A2A" fontSize="11" fontFamily="ui-monospace, monospace">constraints</text>

            <text x="100" y="234" textAnchor="middle" fill="#8C8C8C" fontSize="9" fontFamily="ui-monospace, monospace">inputs</text>

            {/* Arrow */}
            <line x1="180" y1="130" x2="210" y2="130" stroke="#B5B5B5" strokeWidth="1.2" />
            <polygon points="214,130 206,125 206,135" fill="#B5B5B5" />

            {/* Operator */}
            <rect x="218" y="96" width="84" height="68" rx="3" fill="#F2F2F0" stroke="#DADADA" strokeWidth="1.2" />
            <circle cx="260" cy="126" r="16" fill="#FFFFFF" stroke="#DADADA" strokeWidth="1" />
            <circle cx="260" cy="126" r="10" fill="none" stroke="#E8E8E6" strokeWidth="0.5" />
            <text x="260" y="131" textAnchor="middle" fill="#2A2A2A" fontSize="13" fontFamily="ui-monospace, monospace">&#x2299;</text>
            <text x="260" y="152" textAnchor="middle" fill="#8C8C8C" fontSize="8" fontFamily="ui-monospace, monospace">LLM operator</text>

            {/* Arrow */}
            <line x1="306" y1="130" x2="336" y2="130" stroke="#B5B5B5" strokeWidth="1.2" />
            <polygon points="340,130 332,125 332,135" fill="#B5B5B5" />

            {/* Output column */}
            <rect x="346" y="50" width="144" height="32" rx="3" fill="#FFFFFF" stroke="#DADADA" strokeWidth="1" />
            <text x="418" y="71" textAnchor="middle" fill="#2A2A2A" fontSize="11" fontFamily="ui-monospace, monospace">raw output</text>

            <rect x="346" y="92" width="144" height="32" rx="3" fill="#FFFFFF" stroke="#DADADA" strokeWidth="1" />
            <text x="418" y="113" textAnchor="middle" fill="#2A2A2A" fontSize="11" fontFamily="ui-monospace, monospace">parsed output</text>

            <rect x="346" y="134" width="144" height="32" rx="3" fill="#FFFFFF" stroke="#DADADA" strokeWidth="1" />
            <text x="418" y="155" textAnchor="middle" fill="#2A2A2A" fontSize="11" fontFamily="ui-monospace, monospace">error type</text>

            <rect x="346" y="176" width="144" height="32" rx="3" fill="#FFFFFF" stroke="#DADADA" strokeWidth="1" />
            <text x="418" y="197" textAnchor="middle" fill="#2A2A2A" fontSize="11" fontFamily="ui-monospace, monospace">verification</text>

            <text x="418" y="234" textAnchor="middle" fill="#8C8C8C" fontSize="9" fontFamily="ui-monospace, monospace">outputs</text>

            {/* Error classification row */}
            <line x1="260" y1="164" x2="260" y2="260" stroke="#B5B5B5" strokeWidth="1" strokeDasharray="4 3" />
            <polygon points="260,264 256,256 264,256" fill="#B5B5B5" />

            <rect x="148" y="268" width="224" height="48" rx="3" fill="#FFFFFF" stroke="#C89B2C" strokeWidth="1" />
            <text x="260" y="289" textAnchor="middle" fill="#C89B2C" fontSize="10" fontFamily="ui-monospace, monospace">error classification</text>
            <text x="260" y="305" textAnchor="middle" fill="#8C8C8C" fontSize="9" fontFamily="ui-monospace, monospace">domain · local · structural · environmental</text>
          </svg>
        </div>

        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Given a prompt, a domain category, an expected output type, and optional constraints, the system can observe:
        </p>
        <ul className="space-y-2 text-sm text-[#5A5A5A] list-disc ml-6">
          <li>raw output</li>
          <li>parsed output</li>
          <li>classified error type</li>
          <li>whether the error is domain-level, local, structural, or environmental</li>
          <li>what changed if retried</li>
        </ul>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          This kind of observation turns model behavior from a black box into something that can be studied, categorized, and engineered around.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-light text-[#1A1A1A]">Summary</h2>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Language models are probabilistic components. Traditional software expects deterministic behavior. The gap between these two creates the core design challenge.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Reliability cannot come from the model alone. It comes from how the model is used inside the system: what role it plays, what constraints surround it, and how failures are handled.
        </p>
        <pre className="font-mono text-sm leading-relaxed bg-[#FFFFFF] border border-[#DADADA] p-4 overflow-x-auto text-[#2A2A2A]">
{`probabilistic component
    ↓
constrained system role
    ↓
deterministic software behavior`}
        </pre>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          That is the starting point for everything that follows.
        </p>
      </section>
    </div>
  )
}

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Representation Mapping',
  description: 'How language models transform information between representations, bridging unstructured environments and structured software systems.',
  openGraph: {
    title: 'Representation Mapping',
    description: 'Domain operator = abstract. Representation mapping = concrete.',
    type: 'article',
    images: [
      {
        url: '/images/og/representation-mapping-cover.png',
        width: 1200,
        height: 630,
        alt: 'Representation Mapping - TO2D',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Representation Mapping',
    description: 'Domain operator = abstract. Representation mapping = concrete.',
    images: ['/images/og/representation-mapping-cover.png'],
  },
}

export default function RepresentationMappingPage() {
  return (
    <div className="max-w-3xl space-y-14">
      <header className="space-y-4 border-b border-[#E8E8E6] pb-8">
        <p className="text-xs uppercase tracking-[0.2em] text-[#8C8C8C] font-mono">Language Models / Representation Mapping</p>
        <h1 className="text-3xl md:text-4xl font-light tracking-tight leading-tight text-[#1A1A1A]">
          Representation Mapping
        </h1>

        <div className="overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0 pt-6">
          <svg viewBox="0 0 520 420" className="w-full" style={{ minWidth: '340px' }}>
            <defs>
              <pattern id="rm-hero" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="0.4" fill="#E8E8E6" />
              </pattern>
            </defs>
            <rect width="520" height="420" fill="url(#rm-hero)" rx="2" />

            {/* Layer 1 label */}
            <text x="26" y="26" fill="#8C8C8C" fontSize="9" fontFamily="ui-monospace, monospace" letterSpacing="0.1em">LAYER 1 — OPERATOR VIEW</text>

            {/* A → ⊙ → B horizontal */}
            <rect x="40" y="44" width="110" height="44" rx="3" fill="#FFFFFF" stroke="#DADADA" strokeWidth="1" />
            <text x="95" y="62" textAnchor="middle" fill="#2A2A2A" fontSize="12" fontFamily="ui-monospace, monospace">A</text>
            <text x="95" y="78" textAnchor="middle" fill="#8C8C8C" fontSize="9" fontFamily="ui-monospace, monospace">environment</text>

            <line x1="150" y1="66" x2="216" y2="66" stroke="#B5B5B5" strokeWidth="1.2" />
            <polygon points="220,66 212,62 212,70" fill="#B5B5B5" />

            <circle cx="260" cy="66" r="28" fill="#FFFFFF" stroke="#DADADA" strokeWidth="1.2" />
            <circle cx="260" cy="66" r="20" fill="none" stroke="#E8E8E6" strokeWidth="0.6" />
            <text x="260" y="72" textAnchor="middle" fill="#2A2A2A" fontSize="20" fontFamily="ui-monospace, monospace">&#x2299;</text>

            <line x1="288" y1="66" x2="358" y2="66" stroke="#B5B5B5" strokeWidth="1.2" />
            <polygon points="362,66 354,62 354,70" fill="#B5B5B5" />

            <rect x="370" y="44" width="110" height="44" rx="3" fill="#FFFFFF" stroke="#DADADA" strokeWidth="1" />
            <text x="425" y="62" textAnchor="middle" fill="#2A2A2A" fontSize="12" fontFamily="ui-monospace, monospace">B</text>
            <text x="425" y="78" textAnchor="middle" fill="#8C8C8C" fontSize="9" fontFamily="ui-monospace, monospace">system</text>

            <text x="260" y="112" textAnchor="middle" fill="#8C8C8C" fontSize="10" fontFamily="ui-monospace, monospace">&#x2299; : A &#x2192; B</text>

            {/* Divider */}
            <line x1="40" y1="134" x2="480" y2="134" stroke="#E8E8E6" strokeWidth="1" strokeDasharray="4 3" />

            {/* Layer 2 label */}
            <text x="26" y="160" fill="#8C8C8C" fontSize="9" fontFamily="ui-monospace, monospace" letterSpacing="0.1em">LAYER 2 — REPRESENTATION MAPPING</text>

            {/* Vertical: concrete example */}
            <rect x="170" y="178" width="180" height="36" rx="3" fill="#FFFFFF" stroke="#DADADA" strokeWidth="1" />
            <text x="260" y="200" textAnchor="middle" fill="#2A2A2A" fontSize="11" fontFamily="ui-monospace, monospace">HTML / DOM</text>

            <line x1="260" y1="214" x2="260" y2="232" stroke="#B5B5B5" strokeWidth="1.2" />
            <polygon points="260,236 256,228 264,228" fill="#B5B5B5" />

            <circle cx="260" cy="262" r="22" fill="#FFFFFF" stroke="#DADADA" strokeWidth="1.2" />
            <circle cx="260" cy="262" r="15" fill="none" stroke="#E8E8E6" strokeWidth="0.6" />
            <text x="260" y="268" textAnchor="middle" fill="#2A2A2A" fontSize="16" fontFamily="ui-monospace, monospace">&#x2299;</text>

            <line x1="260" y1="284" x2="260" y2="302" stroke="#B5B5B5" strokeWidth="1.2" />
            <polygon points="260,306 256,298 264,298" fill="#B5B5B5" />

            <rect x="170" y="308" width="180" height="36" rx="3" fill="#F2F2F0" stroke="#DADADA" strokeWidth="1" />
            <text x="260" y="330" textAnchor="middle" fill="#2A2A2A" fontSize="11" fontFamily="ui-monospace, monospace">login_spec.json</text>

            {/* Side annotations */}
            <text x="380" y="200" fill="#8C8C8C" fontSize="9" fontFamily="ui-monospace, monospace">environment</text>
            <text x="380" y="212" fill="#8C8C8C" fontSize="9" fontFamily="ui-monospace, monospace">representation</text>
            <text x="380" y="330" fill="#8C8C8C" fontSize="9" fontFamily="ui-monospace, monospace">system</text>
            <text x="380" y="342" fill="#8C8C8C" fontSize="9" fontFamily="ui-monospace, monospace">representation</text>

            {/* Definition box */}
            <rect x="40" y="364" width="440" height="42" rx="3" fill="#FFFFFF" stroke="#E8E8E6" strokeWidth="1" />
            <text x="260" y="382" textAnchor="middle" fill="#8C8C8C" fontSize="9" fontFamily="ui-monospace, monospace">
              DOM &#x2192; spec&#160;&#160;&#160;|&#160;&#160;&#160;email &#x2192; ticket&#160;&#160;&#160;|&#160;&#160;&#160;logs &#x2192; diagnostic&#160;&#160;&#160;|&#160;&#160;&#160;doc &#x2192; object
            </text>
            <text x="260" y="398" textAnchor="middle" fill="#B5B5B5" fontSize="8" fontFamily="ui-monospace, monospace">
              representation_A &#x2192; model &#x2192; representation_B
            </text>
          </svg>
        </div>

        <div className="flex items-center gap-3 pt-1 flex-wrap">
          <span className="text-[#8C8C8C] font-mono text-xs">Layer 1: operator view (abstract)</span>
          <span className="text-[#E8E8E6]">|</span>
          <span className="text-[#8C8C8C] font-mono text-xs">Layer 2: representation mapping (concrete)</span>
        </div>
      </header>

      <section className="space-y-5">
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Language models are often introduced as systems that answer questions.
        </p>
        <pre className="font-mono text-sm leading-relaxed bg-[#FFFFFF] border border-[#DADADA] p-4 overflow-x-auto text-[#2A2A2A]">
{`question → model → answer`}
        </pre>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          That framing is useful, but inside software systems language models are frequently used in a different way. Instead of generating final answers, they transform information between representations.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          This process is called representation mapping.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-light text-[#1A1A1A]">Basic Idea</h2>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          A representation is simply a structured way of describing information.
        </p>
        <ul className="space-y-2 text-sm text-[#5A5A5A] list-disc ml-6">
          <li>HTML documents</li>
          <li>natural language text</li>
          <li>logs and traces</li>
          <li>JSON objects</li>
          <li>system state</li>
        </ul>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Representation mapping converts information from one representation into another.
        </p>
        <pre className="font-mono text-sm leading-relaxed bg-[#FFFFFF] border border-[#DADADA] p-4 overflow-x-auto text-[#2A2A2A]">
{`representation_A → model → representation_B`}
        </pre>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          The model acts as a bridge between the two.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-light text-[#1A1A1A]">Mathematical View</h2>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Let <span className="font-mono text-[#2A2A2A]">A</span> be an environment representation, <span className="font-mono text-[#2A2A2A]">B</span> be a system representation, and <span className="font-mono text-[#2A2A2A]">M</span> be the language model.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          The transformation can be written as:
        </p>
        <pre className="font-mono text-sm leading-relaxed bg-[#FFFFFF] border border-[#DADADA] p-4 overflow-x-auto text-[#2A2A2A]">
{`M : A → B`}
        </pre>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          The model maps elements from domain A into domain B. Because language models are probabilistic, the result is not deterministic:
        </p>
        <pre className="font-mono text-sm leading-relaxed bg-[#FFFFFF] border border-[#DADADA] p-4 overflow-x-auto text-[#2A2A2A]">
{`y ~ M(x)

where:
  x ∈ A    environment representation
  y ∈ B    system representation`}
        </pre>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          The system later determines whether the result is acceptable.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-light text-[#1A1A1A]">Why Representation Mapping Works Well With LLMs</h2>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Language models are trained on large amounts of mixed structured data: code, documents, markup, natural language, configuration files, structured outputs.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Because of this, they are unusually good at translating between representations.
        </p>
        <pre className="font-mono text-sm leading-relaxed bg-[#FFFFFF] border border-[#DADADA] p-4 overflow-x-auto text-[#2A2A2A]">
{`HTML       → JSON
text       → schema
logs       → categories
documents  → structured objects`}
        </pre>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Instead of writing rules for every case, the model performs the mapping.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-light text-[#1A1A1A]">Example: Browser Automation</h2>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Browser environments contain strong structure: HTML, DOM hierarchy, form semantics, navigation elements.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          A login page may contain many elements, but an automation system only needs a small representation describing how to interact with it.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-[10px] font-mono tracking-[0.15em] text-[#8C8C8C] uppercase mb-2">Environment</p>
            <pre className="font-mono text-sm leading-relaxed bg-[#FFFFFF] border border-[#DADADA] p-4 overflow-x-auto text-[#2A2A2A]">
{`DOM
HTML elements
form fields
buttons`}
            </pre>
          </div>
          <div>
            <p className="text-[10px] font-mono tracking-[0.15em] text-[#8C8C8C] uppercase mb-2">System Representation</p>
            <pre className="font-mono text-sm leading-relaxed bg-[#FFFFFF] border border-[#DADADA] p-4 overflow-x-auto text-[#2A2A2A]">
{`{
  "username_field": "...",
  "password_field": "...",
  "submit_action": "..."
}`}
            </pre>
          </div>
        </div>
        <pre className="font-mono text-sm leading-relaxed bg-[#FFFFFF] border border-[#DADADA] p-4 overflow-x-auto text-[#2A2A2A]">
{`DOM → login representation`}
        </pre>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Once that representation exists, the automation system can proceed deterministically.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          This is useful for several reasons.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          First, it reduces the amount of prompt engineering required. The system does not need to encode the entire interaction path in the prompt. It only needs the model to map the environment into a representation the receiver can use.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Second, it takes advantage of structure the model already understands well. Language models have already seen large amounts of HTML, forms, labels, and structured formats like JSON. In many cases the model is better used as a translator between these representations than as an open-ended planner.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Third, it removes a large class of infrastructure that would otherwise need to be built and maintained manually. Without this pattern, the system often drifts toward brittle selectors, custom parsing logic, UI recreation layers, or prompt-heavy task logic. Those approaches usually create more maintenance and reliability problems later.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Used this way, the language model is not just answering a question. It is acting as an operator over a structured environment, and that solves a whole class of problems that would otherwise require significantly more infrastructure.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-light text-[#1A1A1A]">Example: Document Processing</h2>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Many business systems depend on extracting structure from documents such as emails, invoices, support tickets, and reports.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          These environments already contain useful information, but not in a form that software can directly operate on.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-[10px] font-mono tracking-[0.15em] text-[#8C8C8C] uppercase mb-2">Environment</p>
            <pre className="font-mono text-sm leading-relaxed bg-[#FFFFFF] border border-[#DADADA] p-4 overflow-x-auto text-[#2A2A2A]">
{`emails
support tickets
contracts
reports`}
            </pre>
          </div>
          <div>
            <p className="text-[10px] font-mono tracking-[0.15em] text-[#8C8C8C] uppercase mb-2">System Representation</p>
            <pre className="font-mono text-sm leading-relaxed bg-[#FFFFFF] border border-[#DADADA] p-4 overflow-x-auto text-[#2A2A2A]">
{`{
  "issue_type": "refund",
  "priority": "high",
  "requires_action": true
}`}
            </pre>
          </div>
        </div>
        <pre className="font-mono text-sm leading-relaxed bg-[#FFFFFF] border border-[#DADADA] p-4 overflow-x-auto text-[#2A2A2A]">
{`document → structured system object`}
        </pre>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Once that representation exists, the rest of the system can behave deterministically.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          This is useful for several reasons.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          First, it reduces the amount of prompt engineering required. The system no longer depends on asking for the perfect final answer in one shot. It only needs the model to map the document into a representation the system understands.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Second, it uses strengths the model already has. Language models are very good at reading natural language, identifying entities, inferring categories, and producing structured formats such as JSON.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Third, it avoids a large amount of brittle document-specific infrastructure. Without this pattern, systems often drift toward custom parsers, ad hoc regex pipelines, rule-heavy extraction logic, or endless prompt tweaking. Those approaches usually become difficult to maintain as document formats and workflows expand.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Used this way, the language model acts as an operator that converts messy business inputs into stable system objects.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-light text-[#1A1A1A]">Example: Log Analysis</h2>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Operational systems generate large volumes of raw signals: logs, stack traces, monitoring events, failure reports.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          These signals contain useful information, but they are often too noisy or unstructured for downstream systems to use directly.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-[10px] font-mono tracking-[0.15em] text-[#8C8C8C] uppercase mb-2">Environment</p>
            <pre className="font-mono text-sm leading-relaxed bg-[#FFFFFF] border border-[#DADADA] p-4 overflow-x-auto text-[#2A2A2A]">
{`system logs
error traces
monitoring events`}
            </pre>
          </div>
          <div>
            <p className="text-[10px] font-mono tracking-[0.15em] text-[#8C8C8C] uppercase mb-2">System Representation</p>
            <pre className="font-mono text-sm leading-relaxed bg-[#FFFFFF] border border-[#DADADA] p-4 overflow-x-auto text-[#2A2A2A]">
{`{
  "failure_category": "database_timeout",
  "component": "payments-service",
  "severity": "warning"
}`}
            </pre>
          </div>
        </div>
        <pre className="font-mono text-sm leading-relaxed bg-[#FFFFFF] border border-[#DADADA] p-4 overflow-x-auto text-[#2A2A2A]">
{`logs → diagnostic representation`}
        </pre>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Once that representation exists, the system can classify, route, alert, or recover in more deterministic ways.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          This is useful for several reasons.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          First, it reduces the need for hand-built classification logic. Instead of maintaining large rule sets for every possible log format, the system can use the model to map diverse raw signals into a stable internal representation.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Second, it leverages knowledge the model already has. Language models have seen many examples of stack traces, log formats, service names, and operational terminology, which makes them good at identifying likely categories and structure.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Third, it removes a class of infrastructure that often becomes brittle over time. Without this pattern, teams usually end up with fragile log parsers, regex-heavy alerting systems, and inconsistent incident routing behavior. Those systems become increasingly hard to maintain as services and failure modes grow.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Used this way, the language model acts as an operator that converts noisy operational data into a representation the system can reason about.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-light text-[#1A1A1A]">Why This Is Useful</h2>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Representation mapping allows language models to interact with deterministic software systems. Instead of asking the model to solve the entire problem, the system asks the model to perform a translation step.
        </p>
        <pre className="font-mono text-sm leading-relaxed bg-[#FFFFFF] border border-[#DADADA] p-4 overflow-x-auto text-[#2A2A2A]">
{`environment → model → representation → system logic`}
        </pre>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Once the correct representation exists, deterministic software can take over.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-light text-[#1A1A1A]">Representation Mapping vs Domain Operators</h2>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Representation mapping and domain operators are closely related but describe different layers of the system.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-[#E8E8E6] p-6 space-y-3">
            <h3 className="text-base font-medium text-[#1A1A1A] font-mono">Domain Operators</h3>
            <p className="text-sm text-[#5A5A5A]">
              Describe the conceptual role of the model inside a system. The model is treated as an operator that transforms one domain into another.
            </p>
            <pre className="font-mono text-xs leading-relaxed bg-[#FFFFFF] border border-[#DADADA] p-3 overflow-x-auto text-[#2A2A2A]">
{`⊙ : A → B`}
            </pre>
            <p className="text-xs text-[#8C8C8C]">Architectural view</p>
          </div>
          <div className="border border-[#E8E8E6] p-6 space-y-3">
            <h3 className="text-base font-medium text-[#1A1A1A] font-mono">Representation Mapping</h3>
            <p className="text-sm text-[#5A5A5A]">
              Describes what the operator is actually doing. Focuses on the transformation between specific representations.
            </p>
            <pre className="font-mono text-xs leading-relaxed bg-[#FFFFFF] border border-[#DADADA] p-3 overflow-x-auto text-[#2A2A2A]">
{`HTML → spec
docs → object
logs → state`}
            </pre>
            <p className="text-xs text-[#8C8C8C]">Implementation view</p>
          </div>
        </div>

        <div className="overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0 pt-2">
          <svg viewBox="0 0 520 260" className="w-full" style={{ minWidth: '340px' }}>
            <defs>
              <pattern id="rm-rel" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="0.4" fill="#E8E8E6" />
              </pattern>
            </defs>
            <rect width="520" height="260" fill="url(#rm-rel)" rx="2" />

            <rect x="170" y="14" width="180" height="36" rx="3" fill="#FFFFFF" stroke="#DADADA" strokeWidth="1" />
            <text x="260" y="36" textAnchor="middle" fill="#2A2A2A" fontSize="12" fontFamily="ui-monospace, monospace">environment domain</text>

            <line x1="260" y1="50" x2="260" y2="68" stroke="#B5B5B5" strokeWidth="1.2" />
            <polygon points="260,72 256,64 264,64" fill="#B5B5B5" />

            <circle cx="260" cy="96" r="22" fill="#FFFFFF" stroke="#DADADA" strokeWidth="1.2" />
            <circle cx="260" cy="96" r="16" fill="none" stroke="#E8E8E6" strokeWidth="0.6" />
            <text x="260" y="101" textAnchor="middle" fill="#2A2A2A" fontSize="16" fontFamily="ui-monospace, monospace">&#x2299;</text>
            <text x="320" y="100" fill="#8C8C8C" fontSize="10" fontFamily="ui-monospace, monospace">domain operator</text>

            <line x1="260" y1="118" x2="260" y2="136" stroke="#B5B5B5" strokeWidth="1.2" />
            <polygon points="260,140 256,132 264,132" fill="#B5B5B5" />

            <rect x="155" y="142" width="210" height="36" rx="3" fill="#F2F2F0" stroke="#DADADA" strokeWidth="1" />
            <text x="260" y="164" textAnchor="middle" fill="#2A2A2A" fontSize="12" fontFamily="ui-monospace, monospace">representation mapping</text>

            <line x1="260" y1="178" x2="260" y2="196" stroke="#B5B5B5" strokeWidth="1.2" />
            <polygon points="260,200 256,192 264,192" fill="#B5B5B5" />

            <rect x="155" y="202" width="210" height="36" rx="3" fill="#FFFFFF" stroke="#DADADA" strokeWidth="1" />
            <text x="260" y="224" textAnchor="middle" fill="#2A2A2A" fontSize="12" fontFamily="ui-monospace, monospace">system representation</text>
          </svg>
        </div>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-light text-[#1A1A1A]">Relationship to Deterministic Boundaries</h2>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Representation mapping produces candidate representations. These representations may still contain errors or inconsistencies. Deterministic boundaries ensure that only valid representations enter the system.
        </p>

        <div className="overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0 pt-2">
          <svg viewBox="0 0 520 310" className="w-full" style={{ minWidth: '340px' }}>
            <defs>
              <pattern id="rm-boundary" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="0.4" fill="#E8E8E6" />
              </pattern>
            </defs>
            <rect width="520" height="310" fill="url(#rm-boundary)" rx="2" />

            <rect x="185" y="14" width="150" height="34" rx="3" fill="#FFFFFF" stroke="#DADADA" strokeWidth="1" />
            <text x="260" y="36" textAnchor="middle" fill="#2A2A2A" fontSize="12" fontFamily="ui-monospace, monospace">environment</text>

            <line x1="260" y1="48" x2="260" y2="62" stroke="#B5B5B5" strokeWidth="1.2" />
            <polygon points="260,66 256,58 264,58" fill="#B5B5B5" />

            <rect x="205" y="68" width="110" height="34" rx="3" fill="#FFFFFF" stroke="#DADADA" strokeWidth="1" />
            <rect x="199" y="78" width="6" height="6" rx="0.8" fill="#E8E8E6" />
            <rect x="315" y="78" width="6" height="6" rx="0.8" fill="#E8E8E6" />
            <text x="260" y="90" textAnchor="middle" fill="#2A2A2A" fontSize="12" fontFamily="ui-monospace, monospace">model</text>

            <line x1="260" y1="102" x2="260" y2="116" stroke="#B5B5B5" strokeWidth="1.2" />
            <polygon points="260,120 256,112 264,112" fill="#B5B5B5" />

            <rect x="145" y="122" width="230" height="34" rx="3" fill="#FFFFFF" stroke="#DADADA" strokeWidth="1" />
            <text x="260" y="144" textAnchor="middle" fill="#2A2A2A" fontSize="12" fontFamily="ui-monospace, monospace">candidate representation</text>

            <line x1="260" y1="156" x2="260" y2="170" stroke="#B5B5B5" strokeWidth="1.2" />
            <polygon points="260,174 256,166 264,166" fill="#B5B5B5" />

            <rect x="145" y="176" width="230" height="34" rx="3" fill="#F2F2F0" stroke="#DADADA" strokeWidth="1.2" />
            <text x="260" y="198" textAnchor="middle" fill="#2A2A2A" fontSize="12" fontFamily="ui-monospace, monospace">deterministic boundary</text>

            <line x1="260" y1="210" x2="260" y2="224" stroke="#B5B5B5" strokeWidth="1.2" />
            <polygon points="260,228 256,220 264,220" fill="#B5B5B5" />

            <rect x="185" y="230" width="150" height="34" rx="3" fill="#FFFFFF" stroke="#DADADA" strokeWidth="1" />
            <text x="260" y="252" textAnchor="middle" fill="#2A2A2A" fontSize="12" fontFamily="ui-monospace, monospace">system state</text>

            <text x="400" y="144" fill="#8C8C8C" fontSize="9" fontFamily="ui-monospace, monospace">mapping creates</text>
            <text x="400" y="156" fill="#8C8C8C" fontSize="9" fontFamily="ui-monospace, monospace">structure</text>
            <text x="400" y="198" fill="#8C8C8C" fontSize="9" fontFamily="ui-monospace, monospace">boundary verifies</text>
            <text x="400" y="210" fill="#8C8C8C" fontSize="9" fontFamily="ui-monospace, monospace">structure</text>
          </svg>
        </div>

        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Representation mapping creates structure. Deterministic boundaries verify that structure.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-light text-[#1A1A1A]">Summary</h2>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Representation mapping is the process of transforming information from one representation into another representation that software systems can use.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Language models are particularly well suited for this task because they have learned relationships across many forms of structured and semi-structured data.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Instead of producing final answers, the model acts as a translator between environments and systems.
        </p>
        <pre className="font-mono text-sm leading-relaxed bg-[#FFFFFF] border border-[#DADADA] p-4 overflow-x-auto text-[#2A2A2A]">
{`environment → model → representation → system`}
        </pre>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Once the representation is correct, deterministic software can take over.
        </p>
      </section>
    </div>
  )
}

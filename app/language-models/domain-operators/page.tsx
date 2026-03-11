import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'LLM as an Operator',
  description: 'Language models as system operators that transform representations between domains, not just answer engines.',
  openGraph: {
    title: 'Beyond Prompt Engineering',
    description: 'Language models as system operators.',
    type: 'article',
    images: [
      {
        url: '/images/og/domain-operators-cover.png',
        width: 1200,
        height: 630,
        alt: 'LLM as an Operator - TO2D',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Beyond Prompt Engineering',
    description: 'Language models as system operators.',
    images: ['/images/og/domain-operators-cover.png'],
  },
}

function OperatorSymbol({ x, y, r = 22 }: { x: number; y: number; r?: number }) {
  return (
    <g>
      <circle cx={x} cy={y} r={r} fill="#FFFFFF" stroke="#DADADA" strokeWidth="1.2" />
      <circle cx={x} cy={y} r={r - 6} fill="none" stroke="#E8E8E6" strokeWidth="0.6" />
      <text x={x} y={y + 5} textAnchor="middle" fill="#2A2A2A" fontSize="18" fontFamily="ui-monospace, monospace">&#x2299;</text>
    </g>
  )
}

export default function DomainOperatorsPage() {
  return (
    <div className="max-w-3xl space-y-14">
      <header className="space-y-4 border-b border-[#E8E8E6] pb-8">
        <p className="text-xs uppercase tracking-[0.2em] text-[#8C8C8C] font-mono">Language Models / Domain Operators</p>
        <h1 className="text-3xl md:text-4xl font-light tracking-tight leading-tight text-[#1A1A1A]">
          LLM as an Operator
        </h1>

        <div className="overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0 pt-6">
          <svg viewBox="0 0 520 80" className="w-full" style={{ minWidth: '320px' }}>
            <defs>
              <pattern id="do-hero" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="0.4" fill="#E8E8E6" />
              </pattern>
            </defs>
            <rect width="520" height="80" fill="url(#do-hero)" rx="2" />

            <rect x="50" y="20" width="100" height="40" rx="3" fill="#FFFFFF" stroke="#DADADA" strokeWidth="1" />
            <text x="100" y="44" textAnchor="middle" fill="#2A2A2A" fontSize="13" fontFamily="ui-monospace, monospace">A</text>

            <line x1="150" y1="40" x2="216" y2="40" stroke="#B5B5B5" strokeWidth="1.2" />
            <polygon points="220,40 212,36 212,44" fill="#B5B5B5" />

            <OperatorSymbol x={260} y={40} r={28} />

            <line x1="288" y1="40" x2="358" y2="40" stroke="#B5B5B5" strokeWidth="1.2" />
            <polygon points="362,40 354,36 354,44" fill="#B5B5B5" />

            <rect x="370" y="20" width="100" height="40" rx="3" fill="#FFFFFF" stroke="#DADADA" strokeWidth="1" />
            <text x="420" y="44" textAnchor="middle" fill="#2A2A2A" fontSize="13" fontFamily="ui-monospace, monospace">B</text>
          </svg>
        </div>

        <div className="flex items-center gap-3 pt-2">
          <span className="text-[#8C8C8C] font-mono text-xs">&#x2299; = LLM operator</span>
          <span className="text-[#E8E8E6]">|</span>
          <span className="text-[#8C8C8C] font-mono text-xs">A = environment domain</span>
          <span className="text-[#E8E8E6]">|</span>
          <span className="text-[#8C8C8C] font-mono text-xs">B = system representation</span>
        </div>
      </header>

      <section className="space-y-5">
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Most people first encounter language models through prompt engineering. The workflow usually looks like this:
        </p>
        <pre className="font-mono text-sm leading-relaxed bg-[#FFFFFF] border border-[#DADADA] p-4 overflow-x-auto text-[#2A2A2A]">
{`prompt → model → answer`}
        </pre>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          If the result is not satisfactory, the natural next step is to modify the prompt.
        </p>
        <pre className="font-mono text-sm leading-relaxed bg-[#FFFFFF] border border-[#DADADA] p-4 overflow-x-auto text-[#2A2A2A]">
{`better prompt → model → better answer`}
        </pre>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          This approach works well for many tasks. However, it has a natural ceiling. If a problem is difficult to reason about directly, it can also be difficult to design the prompt that will make the model reason about it correctly.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          A second situation where prompt engineering becomes difficult is when you already know a valid result should exist, but the responsibility for finding the right formulation rests entirely on you.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          In these cases the challenge is not that the model cannot produce a meaningful answer. The challenge is discovering the prompt that causes the model to reach it.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          The search space quickly becomes large. Small variations in wording can lead to very different outputs, and progress becomes tied to manually exploring those variations.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          This is one reason difficult problems can feel harder with prompt engineering than they should be. The system may contain enough information to produce a correct result, but the path to that result depends on discovering the exact prompt that activates it.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          When this happens, it can be useful to change the role of the model. Instead of asking the model to directly produce the final answer, the model can be used as an operator that transforms the environment into a representation the system can reason about.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-light text-[#1A1A1A]">A Different View</h2>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Let <span className="font-mono text-[#2A2A2A]">A</span> be the input domain (environment representation), <span className="font-mono text-[#2A2A2A]">B</span> be the system representation, and <span className="font-mono text-[#2A2A2A]">&#x2299;</span> be the language model operator.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          The model can be viewed as a transformation:
        </p>
        <pre className="font-mono text-sm leading-relaxed bg-[#FFFFFF] border border-[#DADADA] p-4 overflow-x-auto text-[#2A2A2A]">
{`⊙ : A → B`}
        </pre>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          The model does not need to solve the entire problem. It only needs to convert information from one representation into another representation that the system can use.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-light text-[#1A1A1A]">Probabilistic Operator</h2>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Unlike traditional software functions, language models are probabilistic. For an input <span className="font-mono text-[#2A2A2A]">x</span>, the model produces candidate outputs:
        </p>
        <pre className="font-mono text-sm leading-relaxed bg-[#FFFFFF] border border-[#DADADA] p-4 overflow-x-auto text-[#2A2A2A]">
{`y ~ ⊙(x)

where:
  x ∈ A    input representation
  y ∈ B    candidate system representation`}
        </pre>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          The model proposes possible mappings. The surrounding system determines whether the result is usable.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-light text-[#1A1A1A]">Why This Matters</h2>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Many real-world systems already contain structure: HTML and the DOM, documents and emails, logs and monitoring traces, APIs, source code.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          When a language model operates inside these environments, it does not need to invent the solution from scratch. Instead, it can transform the environment into a representation the system understands.
        </p>

        <div className="overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0 pt-2">
          <svg viewBox="0 0 520 180" className="w-full" style={{ minWidth: '340px' }}>
            <defs>
              <pattern id="do-env" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="0.4" fill="#E8E8E6" />
              </pattern>
            </defs>
            <rect width="520" height="180" fill="url(#do-env)" rx="2" />

            <rect x="140" y="14" width="240" height="36" rx="3" fill="#FFFFFF" stroke="#DADADA" strokeWidth="1" />
            <text x="260" y="36" textAnchor="middle" fill="#2A2A2A" fontSize="12" fontFamily="ui-monospace, monospace">environment (A)</text>

            <line x1="260" y1="50" x2="260" y2="68" stroke="#B5B5B5" strokeWidth="1.2" />
            <polygon points="260,72 256,64 264,64" fill="#B5B5B5" />

            <OperatorSymbol x={260} y={96} />

            <line x1="260" y1="118" x2="260" y2="136" stroke="#B5B5B5" strokeWidth="1.2" />
            <polygon points="260,140 256,132 264,132" fill="#B5B5B5" />

            <rect x="140" y="142" width="240" height="36" rx="3" fill="#F2F2F0" stroke="#DADADA" strokeWidth="1" />
            <text x="260" y="164" textAnchor="middle" fill="#2A2A2A" fontSize="12" fontFamily="ui-monospace, monospace">system representation (B)</text>
          </svg>
        </div>

        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          This often reduces the need for complex prompt engineering.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-light text-[#1A1A1A]">Example: Browser Automation</h2>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Browser environments contain strong structure: HTML, DOM hierarchy, form semantics, navigation elements. A login page may contain many elements, but an automation system only needs a small representation describing how to interact with it.
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
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          The model performs a transformation: <span className="font-mono text-[#2A2A2A]">DOM &#x2192; login representation</span>. Once the representation exists, the automation system can proceed deterministically.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-light text-[#1A1A1A]">Example: Document Processing</h2>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Many systems must process unstructured documents.
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
  "issue_type": "missing_item",
  "priority": "normal",
  "requires_refund": true
}`}
            </pre>
          </div>
        </div>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          The model maps natural language into structured system objects.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-light text-[#1A1A1A]">Example: Log and Trace Analysis</h2>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Operational systems generate large volumes of logs.
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
  "failure_category": "db_timeout",
  "component": "payments",
  "severity": "warning"
}`}
            </pre>
          </div>
        </div>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          The model converts raw operational signals into structured diagnostic information.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-light text-[#1A1A1A]">Example: Code Systems</h2>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Software environments also contain strong structure.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-[10px] font-mono tracking-[0.15em] text-[#8C8C8C] uppercase mb-2">Environment</p>
            <pre className="font-mono text-sm leading-relaxed bg-[#FFFFFF] border border-[#DADADA] p-4 overflow-x-auto text-[#2A2A2A]">
{`codebase
compiler errors
test failures`}
            </pre>
          </div>
          <div>
            <p className="text-[10px] font-mono tracking-[0.15em] text-[#8C8C8C] uppercase mb-2">System Representation</p>
            <pre className="font-mono text-sm leading-relaxed bg-[#FFFFFF] border border-[#DADADA] p-4 overflow-x-auto text-[#2A2A2A]">
{`{
  "file": "paymentService.ts",
  "change_type": "bug_fix",
  "target_fn": "processPayment"
}`}
            </pre>
          </div>
        </div>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          The model maps code context into representations that development tools can use.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-light text-[#1A1A1A]">When the Operator Pattern Helps</h2>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Using a language model as an operator is most useful when:
        </p>
        <ul className="space-y-2 text-sm text-[#5A5A5A] list-disc ml-6">
          <li>the environment already contains meaningful structure</li>
          <li>the system requires a specific representation</li>
          <li>prompt engineering alone becomes difficult to scale</li>
          <li>deterministic software will handle the result afterward</li>
        </ul>

        <div className="overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0 pt-2">
          <svg viewBox="0 0 520 80" className="w-full" style={{ minWidth: '340px' }}>
            <defs>
              <pattern id="do-chain" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="0.4" fill="#E8E8E6" />
              </pattern>
            </defs>
            <rect width="520" height="80" fill="url(#do-chain)" rx="2" />

            <rect x="14" y="22" width="100" height="36" rx="3" fill="#FFFFFF" stroke="#DADADA" strokeWidth="1" />
            <text x="64" y="44" textAnchor="middle" fill="#2A2A2A" fontSize="10" fontFamily="ui-monospace, monospace">environment</text>

            <line x1="114" y1="40" x2="148" y2="40" stroke="#B5B5B5" strokeWidth="1.2" />
            <polygon points="152,40 144,36 144,44" fill="#B5B5B5" />

            <OperatorSymbol x={180} y={40} r={20} />

            <line x1="200" y1="40" x2="230" y2="40" stroke="#B5B5B5" strokeWidth="1.2" />
            <polygon points="234,40 226,36 226,44" fill="#B5B5B5" />

            <rect x="236" y="22" width="84" height="36" rx="3" fill="#FFFFFF" stroke="#DADADA" strokeWidth="1" />
            <text x="278" y="44" textAnchor="middle" fill="#2A2A2A" fontSize="10" fontFamily="ui-monospace, monospace">B</text>

            <line x1="320" y1="40" x2="354" y2="40" stroke="#B5B5B5" strokeWidth="1.2" />
            <polygon points="358,40 350,36 350,44" fill="#B5B5B5" />

            <rect x="360" y="22" width="56" height="36" rx="3" fill="#F2F2F0" stroke="#DADADA" strokeWidth="1" />
            <text x="388" y="38" textAnchor="middle" fill="#2A2A2A" fontSize="16" fontFamily="ui-monospace, monospace">&#x25A1;</text>
            <text x="388" y="52" textAnchor="middle" fill="#8C8C8C" fontSize="8" fontFamily="ui-monospace, monospace">boundary</text>

            <line x1="416" y1="40" x2="450" y2="40" stroke="#B5B5B5" strokeWidth="1.2" />
            <polygon points="454,40 446,36 446,44" fill="#B5B5B5" />

            <rect x="456" y="22" width="52" height="36" rx="3" fill="#FFFFFF" stroke="#DADADA" strokeWidth="1" />
            <text x="482" y="44" textAnchor="middle" fill="#2A2A2A" fontSize="10" fontFamily="ui-monospace, monospace">system</text>
          </svg>
        </div>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-light text-[#1A1A1A]">When NOT to Use the Operator Pattern</h2>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          The operator approach is not always necessary. If the task itself is already simple and well-defined, direct prompting may be sufficient.
        </p>
        <ul className="space-y-2 text-sm text-[#5A5A5A] list-disc ml-6">
          <li>summarizing text</li>
          <li>answering factual questions</li>
          <li>generating natural language responses</li>
          <li>writing short pieces of content</li>
        </ul>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          In these situations the system may not need a structured representation. The model output itself is the final result.
        </p>
        <pre className="font-mono text-sm leading-relaxed bg-[#FFFFFF] border border-[#DADADA] p-4 overflow-x-auto text-[#2A2A2A]">
{`prompt → model → answer`}
        </pre>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Adding additional system layers may not provide meaningful benefits.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-light text-[#1A1A1A]">Choosing the Right Approach</h2>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Prompt engineering and operator-based systems are not mutually exclusive. They serve different purposes.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Prompt engineering focuses on improving the quality of direct answers. The operator approach focuses on transforming information into representations that software systems can use.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Understanding when to apply each approach is often a key part of building reliable AI systems.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-light text-[#1A1A1A]">Summary</h2>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Language models are often introduced as systems that answer questions. But inside software systems they are frequently more useful when treated as operators that transform representations between domains.
        </p>
        <pre className="font-mono text-sm leading-relaxed bg-[#FFFFFF] border border-[#DADADA] p-4 overflow-x-auto text-[#2A2A2A]">
{`⊙ : A → B`}
        </pre>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Instead of producing final answers, the model translates environments into structured representations. Once that representation exists, deterministic software can take over. This pattern allows probabilistic models to interact reliably with structured systems.
        </p>
      </section>
    </div>
  )
}

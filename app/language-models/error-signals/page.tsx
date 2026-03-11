import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Error Signals',
  description: 'How failures from language model outputs become structured signals that guide system improvement.',
}

export default function ErrorSignalsPage() {
  return (
    <div className="max-w-3xl space-y-14">
      <header className="space-y-4 border-b border-[#E8E8E6] pb-8">
        <p className="text-xs uppercase tracking-[0.2em] text-[#8C8C8C] font-mono">Language Models / Error Signals</p>
        <h1 className="text-3xl md:text-4xl font-light tracking-tight leading-tight text-[#1A1A1A]">
          Error Signals
        </h1>
      </header>

      <section className="space-y-5">
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Language models are probabilistic systems. For a given input, the model may produce different outputs across runs:
        </p>
        <pre className="font-mono text-sm leading-relaxed bg-[#FFFFFF] border border-[#DADADA] p-4 overflow-x-auto text-[#2A2A2A]">
{`y ~ M(x)`}
        </pre>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Some outputs will be useful. Others will fail to satisfy the requirements of the surrounding system. When this happens, the failure itself becomes valuable information.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          These failures act as error signals.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-light text-[#1A1A1A]">What Is an Error Signal</h2>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          An error signal is any feedback that indicates the model output is not acceptable to the system.
        </p>
        <pre className="font-mono text-sm leading-relaxed bg-[#FFFFFF] border border-[#DADADA] p-4 overflow-x-auto text-[#2A2A2A]">
{`schema validation failures
invariant violations
automation failures
incorrect classifications
missing fields
inconsistent results`}
        </pre>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Instead of treating these failures as simple errors, systems can treat them as signals about how the representation mapping failed.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-light text-[#1A1A1A]">Where Error Signals Appear</h2>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Error signals typically appear at the boundary between the probabilistic model and deterministic software.
        </p>

        <div className="overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0 pt-2">
          <svg viewBox="0 0 520 310" className="w-full" style={{ minWidth: '340px' }}>
            <defs>
              <pattern id="es-where" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="0.4" fill="#E8E8E6" />
              </pattern>
            </defs>
            <rect width="520" height="310" fill="url(#es-where)" rx="2" />

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

            <rect x="155" y="176" width="210" height="34" rx="3" fill="#F2F2F0" stroke="#DADADA" strokeWidth="1" />
            <text x="260" y="198" textAnchor="middle" fill="#2A2A2A" fontSize="12" fontFamily="ui-monospace, monospace">system verification</text>

            <line x1="260" y1="210" x2="260" y2="224" stroke="#B5B5B5" strokeWidth="1.2" />
            <polygon points="260,228 256,220 264,220" fill="#B5B5B5" />

            <rect x="175" y="230" width="170" height="34" rx="3" fill="#FFFFFF" stroke="#C89B2C" strokeWidth="1.2" />
            <text x="260" y="252" textAnchor="middle" fill="#C89B2C" fontSize="12" fontFamily="ui-monospace, monospace">error signal</text>

            <text x="390" y="198" fill="#8C8C8C" fontSize="9" fontFamily="ui-monospace, monospace">verification fails</text>
            <text x="390" y="252" fill="#8C8C8C" fontSize="9" fontFamily="ui-monospace, monospace">signal produced</text>
          </svg>
        </div>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-light text-[#1A1A1A]">Why Error Signals Matter</h2>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Prompt engineering often relies on manually adjusting prompts when the model fails. However, once the model is integrated into a system, failures can be detected automatically.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          These failures provide structured feedback about what went wrong.
        </p>
        <pre className="font-mono text-sm leading-relaxed bg-[#FFFFFF] border border-[#DADADA] p-4 overflow-x-auto text-[#2A2A2A]">
{`missing JSON fields
invalid schema
logical contradictions
automation step failure`}
        </pre>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Each of these failures contains information about the system&apos;s expectations.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-light text-[#1A1A1A]">Example: Structured Output</h2>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Consider a system expecting structured sentiment analysis:
        </p>
        <pre className="font-mono text-sm leading-relaxed bg-[#FFFFFF] border border-[#DADADA] p-4 overflow-x-auto text-[#2A2A2A]">
{`{
  "sentiment": "positive" | "negative" | "neutral",
  "confidence": number
}`}
        </pre>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          If the model returns:
        </p>
        <pre className="font-mono text-sm leading-relaxed bg-[#FFFFFF] border border-[#DADADA] p-4 overflow-x-auto text-[#2A2A2A]">
{`{
  "sentiment": "positive"
}`}
        </pre>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          The system detects a failure:
        </p>
        <pre className="font-mono text-sm leading-relaxed bg-[#FFFFFF] border border-[#DADADA] p-4 overflow-x-auto text-[#C89B2C]">
{`missing field: confidence`}
        </pre>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          This becomes an error signal.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-light text-[#1A1A1A]">Example: Automation Systems</h2>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Browser automation systems provide strong error signals.
        </p>
        <pre className="font-mono text-sm leading-relaxed bg-[#FFFFFF] border border-[#DADADA] p-4 overflow-x-auto text-[#C89B2C]">
{`click failed
element not found
navigation timeout
form field missing`}
        </pre>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          These failures reveal something about the environment. For example, <span className="font-mono text-[#C89B2C] text-xs">login button not detected</span> may indicate that the model incorrectly mapped the page representation.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-light text-[#1A1A1A]">Error Signals as System Feedback</h2>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Error signals can be used to improve the system in several ways.
        </p>

        <div className="overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0 pt-2">
          <svg viewBox="0 0 520 240" className="w-full" style={{ minWidth: '340px' }}>
            <defs>
              <pattern id="es-feedback" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="0.4" fill="#E8E8E6" />
              </pattern>
            </defs>
            <rect width="520" height="240" fill="url(#es-feedback)" rx="2" />

            {/* Retry */}
            <text x="26" y="28" fill="#8C8C8C" fontSize="9" fontFamily="ui-monospace, monospace" letterSpacing="0.1em">RETRY</text>
            <rect x="26" y="38" width="148" height="28" rx="3" fill="#FFFFFF" stroke="#DADADA" strokeWidth="1" />
            <text x="100" y="56" textAnchor="middle" fill="#2A2A2A" fontSize="10" fontFamily="ui-monospace, monospace">generate &rarr; verify &rarr; retry</text>

            {/* Repair */}
            <text x="26" y="96" fill="#8C8C8C" fontSize="9" fontFamily="ui-monospace, monospace" letterSpacing="0.1em">REPAIR</text>
            <rect x="26" y="106" width="220" height="28" rx="3" fill="#FFFFFF" stroke="#DADADA" strokeWidth="1" />
            <text x="136" y="124" textAnchor="middle" fill="#2A2A2A" fontSize="10" fontFamily="ui-monospace, monospace">generate &rarr; verify &rarr; repair &rarr; retry</text>

            {/* Adaptation */}
            <text x="26" y="164" fill="#8C8C8C" fontSize="9" fontFamily="ui-monospace, monospace" letterSpacing="0.1em">ADAPTATION</text>
            <rect x="26" y="174" width="280" height="28" rx="3" fill="#FFFFFF" stroke="#DADADA" strokeWidth="1" />
            <text x="166" y="192" textAnchor="middle" fill="#2A2A2A" fontSize="10" fontFamily="ui-monospace, monospace">error &rarr; update mapping &rarr; improved result</text>

            {/* Side label */}
            <text x="380" y="56" fill="#8C8C8C" fontSize="9" fontFamily="ui-monospace, monospace">same prompt</text>
            <text x="380" y="124" fill="#8C8C8C" fontSize="9" fontFamily="ui-monospace, monospace">modified output</text>
            <text x="380" y="192" fill="#8C8C8C" fontSize="9" fontFamily="ui-monospace, monospace">system learns</text>
          </svg>
        </div>

        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          In each case, the system learns something about the environment or the representation mapping.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-light text-[#1A1A1A]">Relationship to Representation Mapping</h2>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Representation mapping converts information between domains. Error signals indicate when that mapping failed.
        </p>
        <pre className="font-mono text-sm leading-relaxed bg-[#FFFFFF] border border-[#DADADA] p-4 overflow-x-auto text-[#2A2A2A]">
{`environment → model → representation    (mapping)
representation → verification → error   (signal)`}
        </pre>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          This allows the system to detect when the representation does not satisfy system requirements.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-light text-[#1A1A1A]">Relationship to Deterministic Boundaries</h2>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Deterministic boundaries are responsible for verifying outputs. They enforce constraints such as schema validation, logical invariants, format requirements, and system rules.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          When these checks fail, they produce error signals. Error signals are therefore a natural byproduct of deterministic boundaries.
        </p>

        <div className="overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0 pt-2">
          <svg viewBox="0 0 520 200" className="w-full" style={{ minWidth: '340px' }}>
            <defs>
              <pattern id="es-boundary" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="0.4" fill="#E8E8E6" />
              </pattern>
            </defs>
            <rect width="520" height="200" fill="url(#es-boundary)" rx="2" />

            <rect x="145" y="14" width="230" height="34" rx="3" fill="#FFFFFF" stroke="#DADADA" strokeWidth="1" />
            <text x="260" y="36" textAnchor="middle" fill="#2A2A2A" fontSize="12" fontFamily="ui-monospace, monospace">candidate representation</text>

            <line x1="260" y1="48" x2="260" y2="62" stroke="#B5B5B5" strokeWidth="1.2" />
            <polygon points="260,66 256,58 264,58" fill="#B5B5B5" />

            <rect x="155" y="68" width="210" height="34" rx="3" fill="#F2F2F0" stroke="#DADADA" strokeWidth="1.2" />
            <text x="260" y="90" textAnchor="middle" fill="#2A2A2A" fontSize="12" fontFamily="ui-monospace, monospace">deterministic boundary</text>

            {/* Split: pass left, fail right */}
            <line x1="210" y1="102" x2="210" y2="136" stroke="#3C7A52" strokeWidth="1.2" />
            <polygon points="210,140 206,132 214,132" fill="#3C7A52" />
            <rect x="155" y="142" width="110" height="34" rx="3" fill="#FFFFFF" stroke="#3C7A52" strokeWidth="1" />
            <text x="210" y="164" textAnchor="middle" fill="#3C7A52" fontSize="11" fontFamily="ui-monospace, monospace">system state</text>

            <line x1="310" y1="102" x2="310" y2="136" stroke="#C89B2C" strokeWidth="1.2" />
            <polygon points="310,140 306,132 314,132" fill="#C89B2C" />
            <rect x="255" y="142" width="110" height="34" rx="3" fill="#FFFFFF" stroke="#C89B2C" strokeWidth="1" />
            <text x="310" y="164" textAnchor="middle" fill="#C89B2C" fontSize="11" fontFamily="ui-monospace, monospace">error signal</text>

            <text x="160" y="126" fill="#3C7A52" fontSize="9" fontFamily="ui-monospace, monospace">pass</text>
            <text x="330" y="126" fill="#C89B2C" fontSize="9" fontFamily="ui-monospace, monospace">fail</text>
          </svg>
        </div>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-light text-[#1A1A1A]">Error Signals as Information</h2>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          One of the most useful properties of probabilistic systems is that failures reveal information about the system and environment. Instead of treating errors as terminal failures, systems can treat them as signals that guide the next step.
        </p>

        <div className="overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0 pt-2">
          <svg viewBox="0 0 520 280" className="w-full" style={{ minWidth: '340px' }}>
            <defs>
              <pattern id="es-loop" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="0.4" fill="#E8E8E6" />
              </pattern>
            </defs>
            <rect width="520" height="280" fill="url(#es-loop)" rx="2" />

            <text x="260" y="26" textAnchor="middle" fill="#2A2A2A" fontSize="11" fontFamily="ui-monospace, monospace">input</text>
            <line x1="260" y1="34" x2="260" y2="48" stroke="#B5B5B5" strokeWidth="1.2" />
            <polygon points="260,52 256,44 264,44" fill="#B5B5B5" />

            <rect x="205" y="54" width="110" height="30" rx="3" fill="#FFFFFF" stroke="#DADADA" strokeWidth="1" />
            <rect x="199" y="63" width="6" height="6" rx="0.8" fill="#E8E8E6" />
            <rect x="315" y="63" width="6" height="6" rx="0.8" fill="#E8E8E6" />
            <text x="260" y="74" textAnchor="middle" fill="#2A2A2A" fontSize="11" fontFamily="ui-monospace, monospace">model</text>

            <line x1="260" y1="84" x2="260" y2="98" stroke="#B5B5B5" strokeWidth="1.2" />
            <polygon points="260,102 256,94 264,94" fill="#B5B5B5" />

            <rect x="195" y="104" width="130" height="30" rx="3" fill="#FFFFFF" stroke="#DADADA" strokeWidth="1" />
            <text x="260" y="124" textAnchor="middle" fill="#2A2A2A" fontSize="11" fontFamily="ui-monospace, monospace">output</text>

            <line x1="260" y1="134" x2="260" y2="148" stroke="#B5B5B5" strokeWidth="1.2" />
            <polygon points="260,152 256,144 264,144" fill="#B5B5B5" />

            <rect x="185" y="154" width="150" height="30" rx="3" fill="#FFFFFF" stroke="#C89B2C" strokeWidth="1.2" />
            <text x="260" y="174" textAnchor="middle" fill="#C89B2C" fontSize="11" fontFamily="ui-monospace, monospace">error signal</text>

            <line x1="260" y1="184" x2="260" y2="198" stroke="#B5B5B5" strokeWidth="1.2" />
            <polygon points="260,202 256,194 264,194" fill="#B5B5B5" />

            <rect x="180" y="204" width="160" height="30" rx="3" fill="#F2F2F0" stroke="#DADADA" strokeWidth="1" />
            <text x="260" y="224" textAnchor="middle" fill="#2A2A2A" fontSize="11" fontFamily="ui-monospace, monospace">next attempt</text>

            {/* Feedback loop */}
            <path d="M 340 219 Q 420 219 420 54 Q 420 26 310 26" stroke="#B5B5B5" strokeWidth="1" strokeDasharray="4 3" fill="none" />
            <polygon points="306,26 314,22 314,30" fill="#B5B5B5" />
            <text x="440" y="130" fill="#8C8C8C" fontSize="9" fontFamily="ui-monospace, monospace">iterative</text>
            <text x="440" y="142" fill="#8C8C8C" fontSize="9" fontFamily="ui-monospace, monospace">improvement</text>
          </svg>
        </div>

        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          This creates an iterative improvement loop.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-light text-[#1A1A1A]">Summary</h2>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Error signals are feedback produced when model outputs fail to satisfy deterministic system requirements. They reveal information about representation mapping failures, system expectations, and environment structure.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          When used correctly, error signals allow systems to improve reliability without relying solely on manual prompt engineering. Instead of ignoring failures, the system can treat them as structured signals that guide the next step.
        </p>
        <pre className="font-mono text-sm leading-relaxed bg-[#FFFFFF] border border-[#DADADA] p-4 overflow-x-auto text-[#2A2A2A]">
{`environment → model → representation → verification → error signal → improvement`}
        </pre>
      </section>
    </div>
  )
}

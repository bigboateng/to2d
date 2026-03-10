import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Boundary Inspection',
  description: 'Boundary inspector UI for viewing output, validation, repair, retry, and final acceptance in one flow.',
}

export default function BoundaryInspectionPage() {
  return (
    <div className="max-w-3xl space-y-12">
      <header className="space-y-4 border-b border-[#2f261d]/10 pb-8">
        <p className="text-xs uppercase tracking-[0.2em] text-[#4b4339]/50 font-mono">Correctness / Inspection</p>
        <h1 className="text-3xl md:text-4xl font-light tracking-tight leading-tight text-[#1f1912]">
          Boundary Inspection
        </h1>
        <p className="text-sm leading-relaxed text-[#2f261d]/78">
          Inspection is the UI layer: boundary devtools for probabilistic execution.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-xl font-light text-[#1f1912]">What the Inspector Shows</h2>
        <ul className="space-y-2 text-sm text-[#2f261d]/80 list-disc ml-6">
          <li>raw model output</li>
          <li>validation results</li>
          <li>repair transforms</li>
          <li>retry attempts</li>
          <li>final accepted output</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-light text-[#1f1912]">Execution View</h2>
        <pre className="font-mono text-xs leading-relaxed whitespace-pre-wrap bg-[#2f261d]/[0.025] border border-[#2f261d]/8 p-3 overflow-x-auto">
{`[LLM Output] -> [Validation] -> [Repair] -> [Retry] -> [Accepted Result]`}
        </pre>
        <p className="text-sm leading-relaxed text-[#2f261d]/80">
          By showing each stage explicitly, the inspector makes failures diagnosable for engineers and legible for operators.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-light text-[#1f1912]">Why It Matters</h2>
        <p className="text-sm leading-relaxed text-[#2f261d]/80">
          This is the interface where deterministic boundaries become practical. Teams can review concrete boundary behavior,
          debug quickly, and improve contracts based on evidence.
        </p>
      </section>

      <section className="border-t border-[#2f261d]/10 pt-8 flex flex-wrap gap-3">
        <a
          href="/correctness"
          className="inline-block border border-[#2f261d]/12 px-4 py-2 text-sm text-[#2f261d]/80 hover:bg-[#2f261d]/[0.03] transition-colors"
        >
          Return to Correctness Start
        </a>
        <a
          href="/correctness/boundary-tracing"
          className="inline-block border border-[#2f261d]/12 px-4 py-2 text-sm text-[#2f261d]/80 hover:bg-[#2f261d]/[0.03] transition-colors"
        >
          &larr; Back: Boundary Tracing
        </a>
      </section>
    </div>
  )
}

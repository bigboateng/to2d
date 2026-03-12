import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Boundary Inspection',
  description: 'Boundary inspector UI for viewing output, validation, repair, retry, and final acceptance in one flow.',
}

export default function BoundaryInspectionPage() {
  return (
    <div className="max-w-3xl space-y-12">
      <header className="space-y-4 border-b border-[#E8E8E6] pb-8">
        <p className="text-xs uppercase tracking-[0.2em] text-[#8C8C8C] font-mono">Correctness / Inspection</p>
        <h1 className="text-3xl md:text-4xl font-light tracking-tight leading-tight text-[#1A1A1A]">
          Boundary Inspection
        </h1>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Inspection is the UI layer: boundary devtools for probabilistic execution.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-xl font-light text-[#1A1A1A]">What the Inspector Shows</h2>
        <ul className="space-y-2 text-sm text-[#5A5A5A] list-disc ml-6">
          <li>raw model output</li>
          <li>validation results</li>
          <li>repair transforms</li>
          <li>retry attempts</li>
          <li>final accepted output</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-light text-[#1A1A1A]">Execution View</h2>
        <pre className="font-mono text-xs leading-relaxed whitespace-pre-wrap bg-[#FFFFFF] border border-[#DADADA] p-3 overflow-x-auto text-[#2A2A2A]">
{`[LLM Output] -> [Validation] -> [Repair] -> [Retry] -> [Accepted Result]`}
        </pre>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          By showing each stage explicitly, the inspector makes failures diagnosable for engineers and legible for operators.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-light text-[#1A1A1A]">Why It Matters</h2>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          This is the interface where deterministic boundaries become practical. Teams can review concrete boundary behavior,
          debug quickly, and improve contracts based on evidence.
        </p>
      </section>

      <section className="border-t border-[#E8E8E6] pt-8 flex flex-wrap gap-3">
        <a
          href="/correctness"
          className="inline-block border border-[#DADADA] px-4 py-2 text-sm text-[#1A1A1A] hover:bg-[#F2F2F0] transition-colors"
        >
          Return to Correctness Start
        </a>
        <a
          href="/correctness/boundary-tracing"
          className="inline-block border border-[#DADADA] px-4 py-2 text-sm text-[#1A1A1A] hover:bg-[#F2F2F0] transition-colors"
        >
          &larr; Back: Boundary Tracing
        </a>
      </section>
    </div>
  )
}

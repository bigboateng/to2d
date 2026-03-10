import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Boundary Inspection',
  description: 'Boundary inspector UI for viewing output, validation, repair, retry, and final acceptance in one flow.',
}

export default function BoundaryInspectionPage() {
  return (
    <div className="-mx-6 md:-mx-10 mt-[-2.5rem] md:mt-[-3.5rem]">
      <section className="correctness-shell px-6 py-12 md:px-10 md:py-16">
        <article className="correctness-paper correctness-type max-w-4xl mx-auto p-7 md:p-12 space-y-10">
          <header className="space-y-4 border-b border-[#5b4126]/20 pb-8">
            <p className="text-xs uppercase tracking-[0.2em] text-[#5b4126]/70">Correctness / Inspection</p>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight text-[#1f1912]">
              Boundary Inspection
            </h1>
            <p className="text-base md:text-lg leading-relaxed text-[#2f261d]">
              Inspection is the UI layer: boundary devtools for probabilistic execution.
            </p>
          </header>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#1f1912]">What the Inspector Shows</h2>
            <ul className="space-y-2 text-[17px] text-[#2a231c] list-disc ml-6">
              <li>raw model output</li>
              <li>validation results</li>
              <li>repair transforms</li>
              <li>retry attempts</li>
              <li>final accepted output</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#1f1912]">Execution View</h2>
            <pre className="font-mono text-[13px] leading-relaxed whitespace-pre-wrap bg-white/40 border border-[#5b4126]/15 p-3 overflow-x-auto">
{`[LLM Output] -> [Validation] -> [Repair] -> [Retry] -> [Accepted Result]`}
            </pre>
            <p className="text-[17px] leading-relaxed text-[#2a231c]">
              By showing each stage explicitly, the inspector makes failures diagnosable for engineers and legible for operators.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#1f1912]">Why It Matters</h2>
            <p className="text-[17px] leading-relaxed text-[#2a231c]">
              This is the interface where deterministic boundaries become practical. Teams can review concrete boundary behavior,
              debug quickly, and improve contracts based on evidence.
            </p>
          </section>

          <section className="border-t border-[#5b4126]/20 pt-8 flex flex-wrap gap-3">
            <a
              href="/correctness"
              className="inline-block border border-[#5b4126]/30 px-4 py-2 text-[15px] text-[#2a231c] hover:bg-[#f8f0df] transition-colors"
            >
              Return to Correctness Start
            </a>
            <a
              href="/correctness/boundary-tracing"
              className="inline-block border border-[#5b4126]/30 px-4 py-2 text-[15px] text-[#2a231c] hover:bg-[#f8f0df] transition-colors"
            >
              &larr; Back: Boundary Tracing
            </a>
          </section>
        </article>
      </section>
    </div>
  )
}

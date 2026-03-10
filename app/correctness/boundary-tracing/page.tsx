import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Boundary Tracing',
  description: 'Trace execution at deterministic boundaries to inspect failures, repairs, retries, and final acceptance.',
}

export default function BoundaryTracingPage() {
  return (
    <div className="-mx-6 md:-mx-10 mt-[-2.5rem] md:mt-[-3.5rem]">
      <section className="correctness-shell px-6 py-12 md:px-10 md:py-16">
        <article className="correctness-paper correctness-type max-w-4xl mx-auto p-7 md:p-12 space-y-10">
          <header className="space-y-4 border-b border-[#5b4126]/20 pb-8">
            <p className="text-xs uppercase tracking-[0.2em] text-[#5b4126]/70">Correctness / Tracing</p>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight text-[#1f1912]">
              Boundary Tracing
            </h1>
            <p className="text-base md:text-lg leading-relaxed text-[#2f261d]">
              Tracing captures what happened at the boundary, why it failed, and what correction path succeeded.
            </p>
          </header>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#1f1912]">What Tracing Records</h2>
            <ul className="space-y-2 text-[17px] text-[#2a231c] list-disc ml-6">
              <li>attempt number and model metadata</li>
              <li>failure class and message</li>
              <li>repair transform that ran</li>
              <li>retry decision and final outcome</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#1f1912]">Example Trace</h2>
            <pre className="font-mono text-[13px] leading-relaxed whitespace-pre-wrap bg-white/40 border border-[#5b4126]/15 p-3 overflow-x-auto">
{`Attempt 1
PARSE_ERROR
repair: strip markdown

Attempt 2
VALIDATION_ERROR
repair: regenerate

Attempt 3
SUCCESS`}
            </pre>
            <p className="text-[17px] leading-relaxed text-[#2a231c]">
              This turns probabilistic generation into a sequence of observable boundary decisions.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#1f1912]">Operational Value</h2>
            <p className="text-[17px] leading-relaxed text-[#2a231c]">
              Boundary traces let teams compare model versions, isolate regression classes, and route failures with context instead
              of generic error strings.
            </p>
          </section>

          <section className="border-t border-[#5b4126]/20 pt-8 flex flex-wrap gap-3">
            <a
              href="/correctness/boundary-inspection"
              className="inline-block border border-[#5b4126]/30 px-4 py-2 text-[15px] text-[#2a231c] hover:bg-[#f8f0df] transition-colors"
            >
              Next: Boundary Inspection -&gt;
            </a>
            <a
              href="/correctness/structured-output-boundaries"
              className="inline-block border border-[#5b4126]/30 px-4 py-2 text-[15px] text-[#2a231c] hover:bg-[#f8f0df] transition-colors"
            >
              &larr; Back: Structured Output Contracts
            </a>
          </section>
        </article>
      </section>
    </div>
  )
}

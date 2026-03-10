import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Boundary Tracing',
  description: 'Trace execution at deterministic boundaries to inspect failures, repairs, retries, and final acceptance.',
}

export default function BoundaryTracingPage() {
  return (
    <div className="max-w-3xl space-y-12">
      <header className="space-y-4 border-b border-[#2f261d]/10 pb-8">
        <p className="text-xs uppercase tracking-[0.2em] text-[#4b4339]/50 font-mono">Correctness / Tracing</p>
        <h1 className="text-3xl md:text-4xl font-light tracking-tight leading-tight text-[#1f1912]">
          Boundary Tracing
        </h1>
        <p className="text-sm leading-relaxed text-[#2f261d]/78">
          Tracing captures what happened at the boundary, why it failed, and what correction path succeeded.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-xl font-light text-[#1f1912]">What Tracing Records</h2>
        <ul className="space-y-2 text-sm text-[#2f261d]/80 list-disc ml-6">
          <li>attempt number and model metadata</li>
          <li>failure class and message</li>
          <li>repair transform that ran</li>
          <li>retry decision and final outcome</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-light text-[#1f1912]">Example Trace</h2>
        <pre className="font-mono text-xs leading-relaxed whitespace-pre-wrap bg-[#2f261d]/[0.025] border border-[#2f261d]/8 p-3 overflow-x-auto">
{`Attempt 1
PARSE_ERROR
repair: strip markdown

Attempt 2
VALIDATION_ERROR
repair: regenerate

Attempt 3
SUCCESS`}
        </pre>
        <p className="text-sm leading-relaxed text-[#2f261d]/80">
          This turns probabilistic generation into a sequence of observable boundary decisions.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-light text-[#1f1912]">Operational Value</h2>
        <p className="text-sm leading-relaxed text-[#2f261d]/80">
          Boundary traces let teams compare model versions, isolate regression classes, and route failures with context instead
          of generic error strings.
        </p>
      </section>

      <section className="border-t border-[#2f261d]/10 pt-8 flex flex-wrap gap-3">
        <a
          href="/correctness/boundary-inspection"
          className="inline-block border border-[#2f261d]/12 px-4 py-2 text-sm text-[#2f261d]/80 hover:bg-[#2f261d]/[0.03] transition-colors"
        >
          Next: Boundary Inspection -&gt;
        </a>
        <a
          href="/correctness/structured-output-boundaries"
          className="inline-block border border-[#2f261d]/12 px-4 py-2 text-sm text-[#2f261d]/80 hover:bg-[#2f261d]/[0.03] transition-colors"
        >
          &larr; Back: Structured Output Contracts
        </a>
      </section>
    </div>
  )
}

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Boundary Tracing',
  description: 'Trace execution at deterministic boundaries to inspect failures, repairs, retries, and final acceptance.',
}

export default function BoundaryTracingPage() {
  return (
    <div className="max-w-3xl space-y-12">
      <header className="space-y-4 border-b border-[#E8E8E6] pb-8">
        <p className="text-xs uppercase tracking-[0.2em] text-[#8C8C8C] font-mono">Correctness / Tracing</p>
        <h1 className="text-3xl md:text-4xl font-light tracking-tight leading-tight text-[#1A1A1A]">
          Boundary Tracing
        </h1>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Tracing captures what happened at the boundary, why it failed, and what correction path succeeded.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-xl font-light text-[#1A1A1A]">What Tracing Records</h2>
        <ul className="space-y-2 text-sm text-[#5A5A5A] list-disc ml-6">
          <li>attempt number and model metadata</li>
          <li>failure class and message</li>
          <li>repair transform that ran</li>
          <li>retry decision and final outcome</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-light text-[#1A1A1A]">Example Trace</h2>
        <pre className="font-mono text-xs leading-relaxed whitespace-pre-wrap bg-[#FFFFFF] border border-[#DADADA] p-3 overflow-x-auto text-[#2A2A2A]">
{`Attempt 1
PARSE_ERROR
repair: strip markdown

Attempt 2
VALIDATION_ERROR
repair: regenerate

Attempt 3
SUCCESS`}
        </pre>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          This turns probabilistic generation into a sequence of observable boundary decisions.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-light text-[#1A1A1A]">Operational Value</h2>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Boundary traces let teams compare model versions, isolate regression classes, and route failures with context instead
          of generic error strings.
        </p>
      </section>

      <section className="border-t border-[#E8E8E6] pt-8 flex flex-wrap gap-3">
        <a
          href="/correctness/boundary-inspection"
          className="inline-block border border-[#DADADA] px-4 py-2 text-sm text-[#1A1A1A] hover:bg-[#F2F2F0] transition-colors"
        >
          Next: Boundary Inspection -&gt;
        </a>
        <a
          href="/correctness/structured-output-boundaries"
          className="inline-block border border-[#DADADA] px-4 py-2 text-sm text-[#1A1A1A] hover:bg-[#F2F2F0] transition-colors"
        >
          &larr; Back: Structured Output Contracts
        </a>
      </section>
    </div>
  )
}

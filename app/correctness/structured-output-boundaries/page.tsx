import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Structured Output Contracts',
  description: 'Structured output boundaries with llm-contract: schema validation, invariants, repair, and bounded retries.',
}

export default function StructuredOutputBoundariesPage() {
  return (
    <div className="-mx-6 md:-mx-10 mt-[-2.5rem] md:mt-[-3.5rem]">
      <section className="correctness-shell px-6 py-12 md:px-10 md:py-16">
        <article className="correctness-paper correctness-type max-w-4xl mx-auto p-7 md:p-12 space-y-10">
          <header className="space-y-4 border-b border-[#5b4126]/20 pb-8">
            <p className="text-xs uppercase tracking-[0.2em] text-[#5b4126]/70">Correctness / Contracts</p>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight text-[#1f1912]">
              Structured Output Contracts
            </h1>
            <p className="text-base md:text-lg leading-relaxed text-[#2f261d]">
              Prompting can guide structure. Contracts enforce it.
            </p>
          </header>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#1f1912]">Problem</h2>
            <p className="text-[17px] leading-relaxed text-[#2a231c]">
              Prompt-only parsing fails under drift. A small response change can break deserialization, violate required fields, or
              produce semantically invalid values.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#1f1912]">Solution</h2>
            <p className="text-[17px] leading-relaxed text-[#2a231c]">
              Add a contract boundary between model output and application state. The boundary admits only structured, valid outputs.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#1f1912]">Mechanism</h2>
            <ul className="space-y-2 text-[17px] text-[#2a231c] list-disc ml-6">
              <li>schema checks for structural validity</li>
              <li>invariants for domain-level correctness</li>
              <li>repair transforms for common failures</li>
              <li>bounded retries for controlled regeneration</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#1f1912]">Example</h2>
            <pre className="font-mono text-[13px] leading-relaxed whitespace-pre-wrap bg-white/40 border border-[#5b4126]/15 p-3 overflow-x-auto">
{`const result = await contract.run({
  prompt,
  schema: invoiceSchema,
  invariants: [hasPositiveTotal, hasCurrencyCode],
  maxRetries: 2,
  repair: [stripMarkdownFence, trimTrailingText],
});

if (!result.ok) {
  throw result.error;
}

return result.value;`}
            </pre>
            <p className="text-[17px] leading-relaxed text-[#2a231c]">
              This makes acceptance explicit and failure classes observable.
            </p>
          </section>

          <section className="border-t border-[#5b4126]/20 pt-8 flex flex-wrap gap-3">
            <a
              href="/correctness/boundary-tracing"
              className="inline-block border border-[#5b4126]/30 px-4 py-2 text-[15px] text-[#2a231c] hover:bg-[#f8f0df] transition-colors"
            >
              Next: Boundary Tracing -&gt;
            </a>
            <a
              href="/correctness/determinism"
              className="inline-block border border-[#5b4126]/30 px-4 py-2 text-[15px] text-[#2a231c] hover:bg-[#f8f0df] transition-colors"
            >
              &larr; Back: Deterministic Boundaries
            </a>
          </section>
        </article>
      </section>
    </div>
  )
}

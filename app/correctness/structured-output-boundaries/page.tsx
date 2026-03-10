import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Structured Output Contracts',
  description: 'Structured output boundaries with llm-contract: schema validation, invariants, repair, and bounded retries.',
}

export default function StructuredOutputBoundariesPage() {
  return (
    <div className="max-w-3xl space-y-12">
      <header className="space-y-4 border-b border-[#2f261d]/10 pb-8">
        <p className="text-xs uppercase tracking-[0.2em] text-[#4b4339]/50 font-mono">Correctness / Contracts</p>
        <h1 className="text-3xl md:text-4xl font-light tracking-tight leading-tight text-[#1f1912]">
          Structured Output Contracts
        </h1>
        <p className="text-sm leading-relaxed text-[#2f261d]/78">
          Prompting can guide structure. Contracts enforce it.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-xl font-light text-[#1f1912]">Problem</h2>
        <p className="text-sm leading-relaxed text-[#2f261d]/80">
          Prompt-only parsing fails under drift. A small response change can break deserialization, violate required fields, or
          produce semantically invalid values.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-light text-[#1f1912]">Solution</h2>
        <p className="text-sm leading-relaxed text-[#2f261d]/80">
          Add a contract boundary between model output and application state. The boundary admits only structured, valid outputs.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-light text-[#1f1912]">Mechanism</h2>
        <ul className="space-y-2 text-sm text-[#2f261d]/80 list-disc ml-6">
          <li>schema checks for structural validity</li>
          <li>invariants for domain-level correctness</li>
          <li>repair transforms for common failures</li>
          <li>bounded retries for controlled regeneration</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-light text-[#1f1912]">Example</h2>
        <pre className="font-mono text-xs leading-relaxed whitespace-pre-wrap bg-[#2f261d]/[0.025] border border-[#2f261d]/8 p-3 overflow-x-auto">
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
        <p className="text-sm leading-relaxed text-[#2f261d]/80">
          This makes acceptance explicit and failure classes observable.
        </p>
      </section>

      <section className="border-t border-[#2f261d]/10 pt-8 flex flex-wrap gap-3">
        <a
          href="/correctness/boundary-tracing"
          className="inline-block border border-[#2f261d]/12 px-4 py-2 text-sm text-[#2f261d]/80 hover:bg-[#2f261d]/[0.03] transition-colors"
        >
          Next: Boundary Tracing -&gt;
        </a>
        <a
          href="/correctness/deterministic-boundaries"
          className="inline-block border border-[#2f261d]/12 px-4 py-2 text-sm text-[#2f261d]/80 hover:bg-[#2f261d]/[0.03] transition-colors"
        >
          &larr; Back: Deterministic Boundaries
        </a>
      </section>
    </div>
  )
}

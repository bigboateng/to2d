import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Structured Output Contracts',
  description: 'Structured output boundaries with llm-contract: schema validation, invariants, repair, and bounded retries.',
}

export default function StructuredOutputBoundariesPage() {
  return (
    <div className="max-w-3xl space-y-12">
      <header className="space-y-4 border-b border-[#E8E8E6] pb-8">
        <p className="text-xs uppercase tracking-[0.2em] text-[#8C8C8C] font-mono">Correctness / Contracts</p>
        <h1 className="text-3xl md:text-4xl font-light tracking-tight leading-tight text-[#1A1A1A]">
          Structured Output Contracts
        </h1>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Prompting can guide structure. Contracts enforce it.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-xl font-light text-[#1A1A1A]">Problem</h2>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Prompt-only parsing fails under drift. A small response change can break deserialization, violate required fields, or
          produce semantically invalid values.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-light text-[#1A1A1A]">Solution</h2>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Add a contract boundary between model output and application state. The boundary admits only structured, valid outputs.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-light text-[#1A1A1A]">Mechanism</h2>
        <ul className="space-y-2 text-sm text-[#5A5A5A] list-disc ml-6">
          <li>schema checks for structural validity</li>
          <li>invariants for domain-level correctness</li>
          <li>repair transforms for common failures</li>
          <li>bounded retries for controlled regeneration</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-light text-[#1A1A1A]">Example</h2>
        <pre className="font-mono text-xs leading-relaxed whitespace-pre-wrap bg-[#FFFFFF] border border-[#DADADA] p-3 overflow-x-auto text-[#2A2A2A]">
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
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          This makes acceptance explicit and failure classes observable.
        </p>
      </section>

      <section className="border-t border-[#E8E8E6] pt-8 flex flex-wrap gap-3">
        <a
          href="/correctness/boundary-tracing"
          className="inline-block border border-[#DADADA] px-4 py-2 text-sm text-[#1A1A1A] hover:bg-[#F2F2F0] transition-colors"
        >
          Next: Boundary Tracing -&gt;
        </a>
        <a
          href="/correctness/deterministic-boundaries"
          className="inline-block border border-[#DADADA] px-4 py-2 text-sm text-[#1A1A1A] hover:bg-[#F2F2F0] transition-colors"
        >
          &larr; Back: Deterministic Boundaries
        </a>
      </section>
    </div>
  )
}

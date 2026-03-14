import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Structured Output Systems',
  description: 'Deterministic acceptance layers for turning probabilistic model output into typed, operational system behavior.',
}

export default function StructuredOutputSystemsPage() {
  const references = [
    { href: '/primitives/contracts', label: 'Contracts' },
    { href: '/primitives/invariants', label: 'Invariants' },
    { href: '/correctness/deterministic-boundaries', label: 'Deterministic Boundaries' },
  ]

  return (
    <div className="max-w-3xl space-y-14">
      <header className="space-y-4 border-b border-[#E8E8E6] pb-8">
        <p className="text-xs uppercase tracking-[0.2em] text-[#8C8C8C] font-mono">Applications</p>
        <h1 className="text-3xl md:text-4xl font-light tracking-tight leading-tight text-[#1A1A1A]">
          Structured Output Systems
        </h1>
      </header>

      <section className="space-y-5">
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Structured output systems turn free-form model behavior into typed software behavior.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          The model may generate candidates probabilistically, but the surrounding system accepts only outputs that satisfy schema, invariants, and operational constraints.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-light text-[#1A1A1A]">Boundary Pattern</h2>
        <pre className="bg-[#FFFFFF] border border-[#DADADA] p-4 overflow-x-auto text-sm font-mono text-[#2A2A2A]">
{`raw output
→ cleaning
→ schema validation
→ invariant checks
→ targeted repair
→ typed result | explicit failure`}
        </pre>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-light text-[#1A1A1A]">Why It Matters</h2>
        <ul className="space-y-3 text-sm text-[#5A5A5A] list-disc ml-6">
          <li>downstream code consumes typed values instead of model text</li>
          <li>business rules are enforced outside the model</li>
          <li>failures become categorized events rather than ambiguous bugs</li>
          <li>repair and retry remain bounded by deterministic rules</li>
        </ul>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-light text-[#1A1A1A]">Relationship to Operator Systems</h2>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Operator systems explain why probabilistic components need deterministic shells.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Structured output systems are one of the clearest examples of that principle in practice: generation remains flexible, but acceptance remains explicit.
        </p>
      </section>

      <section className="space-y-3 border-t border-[#E8E8E6] pt-8">
        <h2 className="text-lg font-light text-[#1A1A1A]">Related Sections</h2>
        <div className="space-y-3 pt-2">
          {references.map((reference) => (
            <a
              key={reference.href}
              href={reference.href}
              className="block border border-[#E8E8E6] p-4 hover:border-[#DADADA] transition-colors text-sm text-[#5A5A5A]"
            >
              {reference.label}
            </a>
          ))}
        </div>
      </section>
    </div>
  )
}

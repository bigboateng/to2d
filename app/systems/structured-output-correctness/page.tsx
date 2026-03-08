export default function StructuredOutputCorrectnessPage() {
  const references = [
    { href: '/primitives/contracts', label: 'Contracts' },
    { href: '/primitives/invariants', label: 'Invariants' },
    { href: '/architecture/invariant-boundary', label: 'Invariant Boundary' },
  ]

  return (
    <div className="space-y-12 max-w-3xl">
      <section className="space-y-4">
        <p className="text-[10px] font-mono tracking-[0.2em] text-white/35 uppercase">Systems</p>
        <h1 className="text-3xl font-light tracking-tight">Structured Output Correctness</h1>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-light">Concept</h2>
        <p className="text-sm text-white/60 leading-relaxed">
          Structured output correctness is a production boundary that converts model text into validated, typed data before any business logic runs.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-light">System Flow</h2>
        <pre className="bg-white/5 border border-white/10 p-4 overflow-x-auto text-sm text-white/70 font-mono">
{`raw -> clean -> schema -> invariants -> repair -> retry -> typed_result | categorized_failure`}
        </pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-light">System Implications</h2>
        <ul className="space-y-2 text-sm text-white/55">
          <li>Downstream services receive typed objects, not raw model strings.</li>
          <li>Schema validation catches structural errors early.</li>
          <li>Invariants capture business rules schema alone cannot express.</li>
          <li>Failure categories make retries and alerts operationally manageable.</li>
        </ul>
      </section>

      <section className="space-y-3 border-t border-white/10 pt-8">
        <h2 className="text-lg font-light">Real Example</h2>
        <p className="text-sm text-white/60 leading-relaxed">
          In llm-contract, `enforce(schema, run, options)` wraps model calls in a reliability boundary. The result is either validated typed output or an explicit failure object that can be logged, retried, or routed.
        </p>
        <div className="space-y-3 pt-3">
          {references.map((reference) => (
            <a key={reference.href} href={reference.href} className="block border border-white/10 p-4 hover:border-white/30 transition-colors text-sm text-white/60">
              {reference.label}
            </a>
          ))}
        </div>
      </section>
    </div>
  )
}

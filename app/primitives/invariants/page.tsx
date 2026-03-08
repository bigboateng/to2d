export default function InvariantsPage() {
  return (
    <div className="space-y-12 max-w-3xl">
      <section className="space-y-4">
        <p className="text-[10px] font-mono tracking-[0.2em] text-white/35 uppercase">Primitives</p>
        <h1 className="text-3xl font-light tracking-tight">Invariants</h1>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-light">Concept</h2>
        <p className="text-sm text-white/60 leading-relaxed">
          Invariants are non-negotiable truths that remain valid across prompts, models, and runtime contexts.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-light">Formal Idea</h2>
        <pre className="bg-white/5 border border-white/10 p-4 overflow-x-auto text-sm text-white/70 font-mono">
{`forall t: invariant(x_t, y_t) = true`}
        </pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-light">System Implications</h2>
        <ul className="space-y-2 text-sm text-white/55">
          <li>Safety constraints stay stable despite stochastic generation.</li>
          <li>Failure boundaries are explicit and auditable.</li>
          <li>System behavior becomes predictable under drift.</li>
        </ul>
      </section>

      <section className="space-y-3 border-t border-white/10 pt-8">
        <h2 className="text-lg font-light">Real Example</h2>
        <p className="text-sm text-white/60 leading-relaxed">
          Ensuring high-risk automation actions can only execute when required preconditions and postconditions both hold.
        </p>
      </section>
    </div>
  )
}

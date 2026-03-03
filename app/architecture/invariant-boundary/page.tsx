export default function InvariantBoundaryPage() {
  const foundations = [
    { href: '#schema-vs-invariant', label: 'Schema vs Invariant' },
    { href: '#admissibility-regions', label: 'Admissibility Regions' },
    { href: '#compounding-correctness', label: 'Compounding Correctness' },
    { href: '#case-study-llm-contract', label: 'Case Study: llm-contract' },
  ]

  return (
    <div className="space-y-12 max-w-3xl">
      <section>
        <p className="text-[10px] font-mono tracking-[0.2em] text-white/30 uppercase mb-6">
          Architecture
        </p>
        <h1 className="text-3xl font-thin tracking-tight mb-4">
          Invariant Boundary
        </h1>
        <p className="text-white/50 text-sm mb-8">
          Structural constraints that hold regardless of model, prompt, or context window
        </p>
      </section>

      <article className="prose prose-invert max-w-none">
        <div className="text-white/70 text-sm leading-relaxed space-y-6">
          <h2 className="text-xl font-thin text-white/90 mt-8 mb-4">Thesis</h2>
          <p>
            An invariant boundary is a constraint that remains true across all valid system states.
            In control theory, these define the safe operating region. In AI systems, they define
            what the system is allowed to do — structurally, not probabilistically.
          </p>
          <p>
            The architecture doesn't ask the model to behave. It prevents it from leaving the valid region.
          </p>

          <h2 className="text-xl font-thin text-white/90 mt-10 mb-4" id="schema-vs-invariant">Schema vs Invariant</h2>
          <p>
            A schema validates shape. An invariant validates truth. Schemas check that an output has the right fields
            and types. Invariants check that the output satisfies constraints that must hold for the system to remain correct.
          </p>
          <p>
            Schema validation is necessary but insufficient. A perfectly shaped output can still be wrong.
            Invariant boundaries catch what schemas cannot.
          </p>

          <h2 className="text-xl font-thin text-white/90 mt-10 mb-4" id="admissibility-regions">Admissibility Regions</h2>
          <div className="border border-white/10 p-6 space-y-3">
            <p className="text-white/60 text-xs font-mono">
              y ∈ A(x, C) where A = admissible set, x = input, C = invariant constraints
            </p>
            <p className="text-white/50 text-xs mt-2">
              An output is admissible iff it satisfies all structural invariants for the given input and constraint set.
            </p>
          </div>
          <p>
            The admissibility region is the intersection of all invariant constraints.
            It shrinks as constraints are added. A well-designed system has a tight admissibility region
            where most outputs within it are correct, and nothing outside it is accepted.
          </p>

          <h2 className="text-xl font-thin text-white/90 mt-10 mb-4" id="compounding-correctness">Compounding Correctness</h2>
          <p>
            In multi-step systems, each step either compounds error or compounds correctness.
            Invariant boundaries at each transition ensure that errors do not propagate.
            Each step verifies its own output before passing it forward.
          </p>
          <p>
            This is the opposite of "hope the model gets it right." It is structural prevention of drift.
          </p>

          <h2 className="text-xl font-thin text-white/90 mt-10 mb-4">Why It Matters</h2>
          <p>
            Without invariant boundaries, AI systems degrade silently. Outputs look correct but drift from truth.
            Invariant boundaries make correctness observable and enforceable — at every transition, not just at the end.
          </p>
        </div>
      </article>

      <section className="border-t border-white/10 pt-8">
        <h3 className="text-sm font-mono text-white/50 mb-4">Foundations</h3>
        <ul className="space-y-3">
          {foundations.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="text-white/40 text-sm hover:text-white/70 transition-colors flex items-center gap-2">
                <span className="text-white/20">→</span>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="text-white/30 text-sm border-t border-white/10 pt-6">
        <a href="/architecture" className="hover:text-white/50 transition-colors">
          ← Back to Architecture
        </a>
      </section>
    </div>
  )
}

export default function StochasticCorePage() {
  const foundations = [
    { href: '#stochastic-operators', label: 'Definition of Stochastic Operators' },
    { href: '#llm-transfer-functions', label: 'LLMs as Transfer Functions' },
    { href: '#noise-disturbance-bounds', label: 'Noise, Disturbance, and Bounded Regions' },
    { href: '#tool-calling-structural-separation', label: 'Tool-Calling as Structural Separation' },
  ]

  return (
    <div className="space-y-12 max-w-3xl">
      <section>
        <p className="text-[10px] font-mono tracking-[0.2em] text-white/30 uppercase mb-6">
          Architecture
        </p>
        <h1 className="text-3xl font-thin tracking-tight mb-4">
          Stochastic Core
        </h1>
        <p className="text-white/50 text-sm mb-8">
          Modeling the irreducible randomness in language model outputs
        </p>
      </section>

      <article className="prose prose-invert max-w-none">
        <div className="text-white/70 text-sm leading-relaxed space-y-6">
          <h2 className="text-xl font-thin text-white/90 mt-8 mb-4">Thesis</h2>
          <p>
            Language models are fundamentally stochastic. Temperature, sampling, and latent space geometry
            mean identical inputs produce different outputs. This isn't a bug — it's the core behavior.
          </p>
          <p>
            Reliability doesn't come from eliminating randomness. It comes from bounding it.
            Distributions, not determinism. Envelopes, not exact trajectories.
          </p>

          <h2 className="text-xl font-thin text-white/90 mt-10 mb-4">Formal Definition</h2>
          <p>
            A stochastic operator <em>T</em> maps an input domain <em>D<sub>in</sub></em> to a distribution
            over output domain <em>D<sub>out</sub></em>. For a given input <em>x</em>, the output <em>T(x)</em>
            is not a point but a probability measure over possible completions.
          </p>
          <p>
            The system is reliable when the support of that distribution lies within an admissible region — not when the output is deterministic.
          </p>

          <h2 className="text-xl font-thin text-white/90 mt-10 mb-4">Mathematical Framing</h2>
          <div className="border border-white/10 p-6 space-y-3">
            <p className="text-white/60 text-xs font-mono">
              T: D_in → P(D_out)
            </p>
            <p className="text-white/60 text-xs font-mono">
              Reliable iff supp(T(x)) ⊆ A(x) ∀x ∈ D_in
            </p>
            <p className="text-white/50 text-xs mt-2">
              T = stochastic operator &nbsp;|&nbsp; P(D_out) = probability measures over output domain &nbsp;|&nbsp; A(x) = admissible region
            </p>
          </div>

          <h2 className="text-xl font-thin text-white/90 mt-10 mb-4">Noise, Disturbance, and Bounded Regions</h2>
          <p>
            In control systems, noise and disturbance are modeled explicitly — not ignored.
            The same discipline applies here. LLM output variance is a measurable quantity.
            Bounded variance within an admissible region is the definition of reliable stochastic behavior.
          </p>
          <p>
            Unbounded variance is not "creativity." It is loss of control.
          </p>

          <h2 className="text-xl font-thin text-white/90 mt-10 mb-4">Tool-Calling as Structural Separation</h2>
          <p>
            Tool-calling separates the stochastic core (LLM reasoning) from the deterministic periphery (execution).
            The model proposes; the tool executes. This is not a convenience pattern — it is a control architecture.
            The stochastic component is bounded by the deterministic one.
          </p>

          <h2 className="text-xl font-thin text-white/90 mt-10 mb-4">Why It Matters</h2>
          <p>
            Every system that treats LLM output as deterministic will eventually fail in production.
            Modeling the stochastic core explicitly is prerequisite to building anything reliable on top of language models.
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

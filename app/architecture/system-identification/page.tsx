export default function SystemIdentificationPage() {
  const foundations = [
    { href: '#structural-system-identification', label: 'Structural System Identification' },
    { href: '#observability-constraints', label: 'Observability Constraints' },
    { href: '#failure-mode-modeling', label: 'Failure Mode Modeling' },
    { href: '#case-study-browser-automation', label: 'Case Study: Browser Automation' },
    { href: '#case-study-llm-structured-outputs', label: 'Case Study: LLM Structured Outputs' },
  ]

  return (
    <div className="space-y-12 max-w-3xl">
      <section>
        <p className="text-[10px] font-mono tracking-[0.2em] text-white/30 uppercase mb-6">
          Architecture
        </p>
        <h1 className="text-3xl font-thin tracking-tight mb-4">
          System Identification
        </h1>
        <p className="text-white/50 text-sm mb-8">
          Characterizing LLM behavior as dynamical systems
        </p>
      </section>

      <article className="prose prose-invert max-w-none">
        <div className="text-white/70 text-sm leading-relaxed space-y-6">
          <h2 className="text-xl font-thin text-white/90 mt-8 mb-4">Thesis</h2>
          <p>
            Before controlling a system, it must be identified. System identification treats language models not as black boxes
            but as dynamical systems with measurable input-output relationships, transfer characteristics, and observable modes.
          </p>
          <p>
            The goal: build mathematical models of LLM behavior that predict failure modes, response boundaries,
            and stability regions — without requiring access to weights or internal architecture.
          </p>

          <h2 className="text-xl font-thin text-white/90 mt-10 mb-4">Formal Definition</h2>
          <p>
            Given a language model <em>M</em>, system identification constructs a behavioral model <em>M&#x0302;</em> such that
            for any input domain <em>D</em>, the observable output properties of <em>M&#x0302;(D)</em> approximate
            those of <em>M(D)</em> within bounded error.
          </p>
          <p>
            This is not about replicating the model. It is about predicting its boundaries.
          </p>

          <h2 className="text-xl font-thin text-white/90 mt-10 mb-4">Mathematical Framing</h2>
          <div className="border border-white/10 p-6 space-y-3">
            <p className="text-white/60 text-xs font-mono">
              x(k+1) = f(x(k), u(k)) + w(k)
            </p>
            <p className="text-white/60 text-xs font-mono">
              y(k) = g(x(k)) + v(k)
            </p>
            <p className="text-white/50 text-xs mt-2">
              x = internal state &nbsp;|&nbsp; u = input (prompt, context) &nbsp;|&nbsp; y = output (completion) &nbsp;|&nbsp; w, v = noise terms
            </p>
          </div>
          <p>
            The system is identified when the transfer characteristics from <em>u</em> to <em>y</em> are modeled
            well enough to predict stability, failure modes, and response boundaries — even as the internal state remains opaque.
          </p>

          <h2 className="text-xl font-thin text-white/90 mt-10 mb-4">Relation to Control Theory</h2>
          <p>
            Classical system identification in aerospace and process control works identically: measure inputs, measure outputs,
            fit a model that captures the dynamics. The plant internals are irrelevant — only the transfer function matters.
          </p>
          <p>
            LLMs are no different. The weights are the plant. The prompt is the input signal.
            The completion is the output. System identification extracts the behavioral envelope without opening the box.
          </p>

          <h2 className="text-xl font-thin text-white/90 mt-10 mb-4">Relation to LLMs</h2>
          <p>
            Current approaches treat LLMs as reasoning engines and try to improve outputs through better prompts,
            more context, or fine-tuning. System identification reframes the problem: the model is a dynamical system
            with characteristic modes, stability regions, and failure attractors. Understanding these properties
            is prerequisite to controlling them.
          </p>

          <h2 className="text-xl font-thin text-white/90 mt-10 mb-4">Why It Matters</h2>
          <p>
            Without system identification, every AI architecture is built on assumptions about model behavior
            that may not hold. With it, architectures can be designed around measured properties — stability regions
            become design constraints, not hopes.
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

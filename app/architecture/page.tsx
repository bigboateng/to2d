export default function ArchitecturePage() {
  const nodes = [
    {
      href: '/architecture/system-identification',
      title: 'System Identification',
      description: 'Characterizing LLM behavior as dynamical systems. Inputs, outputs, transfer properties.',
    },
    {
      href: '/architecture/stochastic-core',
      title: 'Stochastic Core',
      description: 'Modeling the irreducible randomness in language model outputs. Distributions, not determinism.',
    },
    {
      href: '/architecture/invariant-boundary',
      title: 'Invariant Boundary',
      description: 'Structural constraints that hold regardless of model, prompt, or context window.',
    },
    {
      href: '/architecture/ai-reliability',
      title: 'AI Reliability',
      description: 'Verification, correction loops, and failure semantics for production AI systems.',
    },
  ]

  return (
    <div className="space-y-16 max-w-3xl">
      <section>
        <p className="text-[10px] font-mono tracking-[0.2em] text-white/30 uppercase mb-6">
          2026–
        </p>
        <h1 className="text-3xl font-thin tracking-tight mb-6">
          Architecture
        </h1>
        <p className="text-white/70 text-sm leading-relaxed mb-8">
          A control-theoretic framework for AI reliability. Language models are stochastic operators —
          not reasoning engines. Reliability comes from structural invariants, bounded randomness,
          and closed-loop verification. Not from better prompts.
        </p>

        <div className="border-l border-white/10 pl-6 space-y-2">
          <p className="text-white/50 text-sm">Identify the system before controlling it.</p>
          <p className="text-white/50 text-sm">Model the stochastic core — don't suppress it.</p>
          <p className="text-white/50 text-sm">Enforce invariant boundaries at every transition.</p>
          <p className="text-white/50 text-sm">Design reliability into the architecture, not the model.</p>
          <p className="text-white/50 text-sm">Correctness compounds. So does drift.</p>
        </div>
      </section>

      <section className="space-y-6">
        {nodes.map((node) => (
          <a
            key={node.href}
            href={node.href}
            className="border border-white/10 p-6 hover:border-white/30 transition-colors group block"
          >
            <h2 className="text-xl font-thin mb-2 group-hover:text-white/90">{node.title}</h2>
            <p className="text-white/40 text-sm mb-3">{node.description}</p>
            <span className="text-white/30 text-xs font-mono group-hover:text-white/50 transition-colors">
              Read full chapter →
            </span>
          </a>
        ))}
      </section>
    </div>
  )
}

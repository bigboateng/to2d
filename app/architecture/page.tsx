import AIReliabilityDiagram from '@/components/AIReliabilityDiagram'

export default function ArchitecturePage() {
  const chapters = [
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
      href: '/architecture/zero-context-architecture',
      title: 'Zero-Context Architecture',
      description: 'Domain isolation, minimal representations, and reproducible agent behavior.',
    },
  ]

  return (
    <div className="space-y-20 max-w-3xl">

      <section>
        <p className="text-[10px] font-mono tracking-[0.2em] text-white/30 uppercase mb-6">
          2026–
        </p>
        <h1 className="text-3xl font-thin tracking-tight mb-6">
          The Deterministic Shell Architecture
        </h1>
        <p className="text-white/70 text-sm leading-relaxed">
          Modern AI systems are stochastic at their core.
          Production systems cannot be.
          This stack isolates randomness, captures execution signals, and enforces admissible state transitions
          so automation remains stable under uncertainty.
        </p>
      </section>

      <section>
        <AIReliabilityDiagram />
      </section>

      <section className="space-y-12">

        <div>
          <h2 className="text-xl font-thin mb-3">BrowserAgent — Operator Layer</h2>
          <p className="text-white/70 text-sm leading-relaxed mb-4">
            Executes actions in an unstable environment.
            All world-facing signals originate here.
          </p>
          <ul className="text-white/50 text-sm space-y-1 ml-4">
            <li className="flex items-start gap-2"><span className="text-white/20">→</span>UI interaction</li>
            <li className="flex items-start gap-2"><span className="text-white/20">→</span>Network navigation</li>
            <li className="flex items-start gap-2"><span className="text-white/20">→</span>Auth flow</li>
            <li className="flex items-start gap-2"><span className="text-white/20">→</span>Tool calls</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-thin mb-3">BrowserState — Signal Capture Layer</h2>
          <p className="text-white/70 text-sm leading-relaxed mb-4">
            Captures execution state as replayable signals.
            Makes failures observable instead of anecdotal.
          </p>
          <ul className="text-white/50 text-sm space-y-1 ml-4">
            <li className="flex items-start gap-2"><span className="text-white/20">→</span>Cookies / storage</li>
            <li className="flex items-start gap-2"><span className="text-white/20">→</span>Navigation graph</li>
            <li className="flex items-start gap-2"><span className="text-white/20">→</span>Error evidence</li>
            <li className="flex items-start gap-2"><span className="text-white/20">→</span>Reproducible state snapshots</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-thin mb-3">llm-contract — Invariant Boundary</h2>
          <p className="text-white/70 text-sm leading-relaxed mb-4">
            Enforces admissible output states around stochastic model behavior.
          </p>
          <ul className="text-white/50 text-sm space-y-1 ml-4">
            <li className="flex items-start gap-2"><span className="text-white/20">→</span>Schema validation</li>
            <li className="flex items-start gap-2"><span className="text-white/20">→</span>Invariant enforcement</li>
            <li className="flex items-start gap-2"><span className="text-white/20">→</span>Categorized failure modes</li>
            <li className="flex items-start gap-2"><span className="text-white/20">→</span>Targeted repair loop</li>
          </ul>
        </div>

      </section>

      <section>
        <h2 className="text-xl font-thin mb-6">Stochastic Core, Deterministic Shell</h2>
        <div className="border-l border-white/10 pl-6 space-y-2">
          <p className="text-white/60 text-sm">The model remains probabilistic.</p>
          <p className="text-white/60 text-sm">The boundary is deterministic.</p>
          <p className="text-white/60 text-sm">Execution remains adversarial.</p>
          <p className="text-white/60 text-sm">State becomes measurable.</p>
        </div>
        <p className="text-white/80 text-sm font-medium mt-6">
          This is the architecture.
        </p>
      </section>

      <section className="border-t border-white/10 pt-12 space-y-6">
        <h2 className="text-sm font-mono text-white/40 uppercase tracking-wider mb-6">Chapters</h2>
        {chapters.map((node) => (
          <a
            key={node.href}
            href={node.href}
            className="border border-white/10 p-6 hover:border-white/30 transition-colors group block"
          >
            <h3 className="text-lg font-thin mb-2 group-hover:text-white/90">{node.title}</h3>
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

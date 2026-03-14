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
    {
      href: '/architecture/fuzzy-systems',
      title: 'Fuzzy Systems',
      description: 'Modeling decision systems under uncertainty through membership activation, rule inference, and output control.',
    },
  ]

  return (
    <div className="space-y-28 max-w-3xl">

      <section>
        <p className="text-[10px] font-mono tracking-[0.2em] text-[#8C8C8C] uppercase mb-8">
          2026–
        </p>
        <h1 className="text-3xl font-thin tracking-tight text-[#1A1A1A] mb-8">
          The Deterministic Shell Architecture
        </h1>
        <p className="text-[#5A5A5A] text-sm leading-relaxed">
          Modern AI systems are stochastic at their core.
          Production systems cannot be.
          This stack isolates randomness, captures execution signals, and enforces admissible state transitions
          so automation remains stable under uncertainty.
        </p>
      </section>

      <section>
        <AIReliabilityDiagram />
      </section>

      <section className="space-y-16">

        <div>
          <h2 className="text-xl font-thin text-[#1A1A1A] mb-4">BrowserAgent — Operator Layer</h2>
          <p className="text-[#5A5A5A] text-sm leading-relaxed mb-5">
            Executes actions in an unstable environment.
            All world-facing signals originate here.
          </p>
          <ul className="text-[#5A5A5A] text-sm space-y-1.5 ml-4">
            <li className="flex items-start gap-2"><span className="text-[#DADADA]">→</span>UI interaction</li>
            <li className="flex items-start gap-2"><span className="text-[#DADADA]">→</span>Network navigation</li>
            <li className="flex items-start gap-2"><span className="text-[#DADADA]">→</span>Auth flow</li>
            <li className="flex items-start gap-2"><span className="text-[#DADADA]">→</span>Tool calls</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-thin text-[#1A1A1A] mb-4">BrowserState — Signal Capture Layer</h2>
          <p className="text-[#5A5A5A] text-sm leading-relaxed mb-5">
            Captures execution state as replayable signals.
            Makes failures observable instead of anecdotal.
          </p>
          <ul className="text-[#5A5A5A] text-sm space-y-1.5 ml-4">
            <li className="flex items-start gap-2"><span className="text-[#DADADA]">→</span>Cookies / storage</li>
            <li className="flex items-start gap-2"><span className="text-[#DADADA]">→</span>Navigation graph</li>
            <li className="flex items-start gap-2"><span className="text-[#DADADA]">→</span>Error evidence</li>
            <li className="flex items-start gap-2"><span className="text-[#DADADA]">→</span>Reproducible state snapshots</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-thin text-[#1A1A1A] mb-4">llm-contract — Invariant Boundary</h2>
          <p className="text-[#5A5A5A] text-sm leading-relaxed mb-5">
            Enforces admissible output states around stochastic model behavior.
          </p>
          <ul className="text-[#5A5A5A] text-sm space-y-1.5 ml-4">
            <li className="flex items-start gap-2"><span className="text-[#DADADA]">→</span>Schema validation</li>
            <li className="flex items-start gap-2"><span className="text-[#DADADA]">→</span>Invariant enforcement</li>
            <li className="flex items-start gap-2"><span className="text-[#DADADA]">→</span>Categorized failure modes</li>
            <li className="flex items-start gap-2"><span className="text-[#DADADA]">→</span>Targeted repair loop</li>
          </ul>
        </div>

      </section>

      <section>
        <h2 className="text-xl font-thin text-[#1A1A1A] mb-8">Stochastic Core, Deterministic Shell</h2>
        <div className="border-l-2 border-[#E8E8E6] pl-6 space-y-3">
          <p className="text-[#5A5A5A] text-sm">The model remains probabilistic.</p>
          <p className="text-[#5A5A5A] text-sm">The boundary is deterministic.</p>
          <p className="text-[#5A5A5A] text-sm">Execution remains adversarial.</p>
          <p className="text-[#5A5A5A] text-sm">State becomes measurable.</p>
        </div>
        <p className="text-[#1A1A1A] text-sm font-medium mt-8">
          This is the architecture.
        </p>
      </section>

      <section className="border-t border-[#E8E8E6] pt-16 space-y-8">
        <h2 className="text-sm font-mono text-[#8C8C8C] uppercase tracking-wider mb-8">Chapters</h2>
        {chapters.map((node) => (
          <a
            key={node.href}
            href={node.href}
            className="border border-[#E8E8E6] p-7 hover:border-[#DADADA] transition-colors group block"
          >
            <h3 className="text-lg font-thin text-[#1A1A1A] mb-3 group-hover:text-[#111111]">{node.title}</h3>
            <p className="text-[#5A5A5A] text-sm mb-4">{node.description}</p>
            <span className="text-[#8C8C8C] text-xs font-mono group-hover:text-[#5A5A5A] transition-colors">
              Read full chapter →
            </span>
          </a>
        ))}
      </section>

    </div>
  )
}

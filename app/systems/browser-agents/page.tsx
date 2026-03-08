export default function BrowserAgentsPage() {
  const references = [
    { href: '/architecture/zero-context-architecture', label: 'Zero-Context Architecture' },
    { href: '/research/control-systems-ai', label: 'Control Systems × AI' },
    { href: '/systems/structured-output-correctness', label: 'Structured Output Correctness' },
  ]

  return (
    <div className="space-y-12 max-w-3xl">
      <section className="space-y-4">
        <p className="text-[10px] font-mono tracking-[0.2em] text-white/35 uppercase">Systems</p>
        <h1 className="text-3xl font-light tracking-tight">Browser Agents</h1>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-light">Concept</h2>
        <p className="text-sm text-white/60 leading-relaxed">
          Browser Agents is a planned systems track focused on reliable browser task execution under changing UI and session state.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-light">Planned Architecture</h2>
        <pre className="bg-white/5 border border-white/10 p-4 overflow-x-auto text-sm text-white/70 font-mono">
{`browser state capture -> task adapter -> output contract -> safe action execution`}
        </pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-light">System Implications</h2>
        <ul className="space-y-2 text-sm text-white/55">
          <li>Status is intentionally marked as planned to avoid overstating implementation.</li>
          <li>The design direction is strict interfaces between state, planning, and execution.</li>
          <li>Structured output correctness is the first implemented dependency for this track.</li>
        </ul>
      </section>

      <section className="space-y-3 border-t border-white/10 pt-8">
        <h2 className="text-lg font-light">Real Example</h2>
        <p className="text-sm text-white/60 leading-relaxed">
          Current status: deferred. This page will be expanded once browser agent components are built and documented.
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

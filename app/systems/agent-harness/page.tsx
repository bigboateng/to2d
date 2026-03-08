export default function AgentHarnessPage() {
  const references = [
    { href: '/architecture/zero-context-architecture', label: 'Zero-Context Architecture' },
    { href: '/systems/structured-output-correctness', label: 'Structured Output Correctness' },
    { href: '/research/control-systems-ai', label: 'Control Systems × AI' },
  ]

  return (
    <div className="space-y-12 max-w-3xl">
      <section className="space-y-4">
        <p className="text-[10px] font-mono tracking-[0.2em] text-white/35 uppercase">Systems</p>
        <h1 className="text-3xl font-light tracking-tight">Agent Harness</h1>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-light">Concept</h2>
        <p className="text-sm text-white/60 leading-relaxed">
          Agent Harness is an exploration track for runtime orchestration: how tasks, tools, state, and validation should be wired in software.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-light">Planned Architecture</h2>
        <pre className="bg-white/5 border border-white/10 p-4 overflow-x-auto text-sm text-white/70 font-mono">
{`task input -> planner -> tool runner -> output validator -> state update`}
        </pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-light">System Implications</h2>
        <ul className="space-y-2 text-sm text-white/55">
          <li>This is exploratory and does not represent a completed runtime implementation.</li>
          <li>Current focus is interface boundaries between planning, tools, and validation.</li>
          <li>ZCA is treated as a high-level design principle, not the page's main content.</li>
        </ul>
      </section>

      <section className="space-y-3 border-t border-white/10 pt-8">
        <h2 className="text-lg font-light">Real Example</h2>
        <p className="text-sm text-white/60 leading-relaxed">
          Current status: exploration notes only. Concrete harness examples will be added once implementation work is published.
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

export default function SystemsPage() {
  const systems = [
    {
      href: '/systems/browser-agents',
      title: 'Browser Agents',
      description: 'Planned ZCA application area for browser execution systems.',
    },
    {
      href: '/systems/structured-output-correctness',
      title: 'Structured Output Correctness',
      description: 'Implemented system boundary using llm-contract for schema, invariants, and repair.',
    },
    {
      href: '/systems/agent-harness',
      title: 'Agent Harness',
      description: 'Exploration track for applying ZCA to orchestration and runtime control.',
    },
    {
      href: '/systems/reliability-loops',
      title: 'Reliability Loops',
      description: 'Exploration track for ZCA-inspired correction and recovery loops.',
    },
  ]

  return (
    <div className="space-y-14 max-w-4xl">
      <section className="space-y-4">
        <p className="text-[10px] font-mono tracking-[0.2em] text-white/35 uppercase">Systems</p>
        <h1 className="text-3xl font-light tracking-tight">Applied Architecture Patterns</h1>
        <p className="text-white/60 text-sm leading-relaxed">
          Systems is where architecture becomes software: practical boundaries, runtime behavior, failure handling, and implementation tracks.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-light">Why This Exists</h2>
        <p className="text-white/55 text-sm leading-relaxed">
          In large systems, designs that assume clean inputs and known constraints fail quickly. Real-world environments are noisy, mixed-domain, and adversarial. Reliability comes from breaking the system into small solvable steps with explicit boundaries.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-light">Engineering Rule</h2>
        <pre className="bg-white/5 border border-white/10 p-4 overflow-x-auto text-sm text-white/70 font-mono">
{`Each step should:
- see only required information
- produce a verifiable result
- update state deterministically`}
        </pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-light">Architecture Pattern</h2>
        <pre className="bg-white/5 border border-white/10 p-4 overflow-x-auto text-sm text-white/70 font-mono">
{`global system state
-> state projection
-> minimal representation
-> LLM reasoning
-> verification boundary
-> state integration`}
        </pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-light">System Implications</h2>
        <ul className="space-y-2 text-sm text-white/55">
          <li>Reliability is enforced at software boundaries, not by prompt quality alone.</li>
          <li>Global-state reasoning is unstable in production; localized reasoning scales better.</li>
          <li>Implemented tracks are separated from exploration tracks to avoid over-claiming.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-light">Positioning</h2>
        <p className="text-white/55 text-sm leading-relaxed">
          Zero-Context Architecture is presented here as a practical architecture pattern discovered while building automation systems, not as a grand theory. It is a software design principle for integrating probabilistic reasoning into deterministic systems.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-light">One-Sentence Definition</h2>
        <p className="text-white/70 text-sm leading-relaxed border border-white/10 p-4">
          Zero-Context Architecture structures AI systems so each reasoning step operates on the minimal information required for the task, allowing probabilistic models to be integrated into deterministic software systems without accumulating instability.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-light">Where This Applies</h2>
        <ul className="space-y-2 text-sm text-white/55">
          <li>Browser automation</li>
          <li>Structured output pipelines</li>
          <li>Document extraction</li>
          <li>Operational workflows</li>
          <li>Agent execution systems</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-light">Relationship to Existing Ideas</h2>
        <p className="text-white/55 text-sm leading-relaxed">
          ZCA is related to bounded contexts in software architecture, information bottlenecks in information theory, and state-space projection in control systems. Here it is applied to software systems that use probabilistic operators such as large language models.
        </p>
      </section>

      <section className="border-t border-white/10 pt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {systems.map((item) => (
            <a key={item.href} href={item.href} className="border border-white/10 p-5 hover:border-white/30 transition-colors group block">
              <h3 className="text-base font-light mb-2 group-hover:text-white/85">{item.title}</h3>
              <p className="text-sm text-white/45">{item.description}</p>
            </a>
          ))}
        </div>
      </section>
    </div>
  )
}

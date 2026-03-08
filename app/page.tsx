export default function Home() {
  const sections = [
    {
      href: '/architecture',
      title: 'Architecture',
      description: 'Theory stack: system identification, stochastic core, invariant boundary, zero-context architecture.',
    },
    {
      href: '/systems',
      title: 'Systems',
      description: 'Applied architectures: browser agents, harness design, and reliability loops.',
    },
    {
      href: '/correctness',
      title: 'Correctness',
      description: 'Reliability boundaries in browser automation, infrastructure, and operational workflows.',
    },
    {
      href: '/primitives',
      title: 'Primitives',
      description: 'Reusable building blocks: contracts, invariants, projection, and canonicalization.',
    },
    {
      href: '/research',
      title: 'Research',
      description: 'Background work in control systems, control systems × AI, and language models.',
    },
    {
      href: '/open-source',
      title: 'Open Source',
      description: 'Tools and implementation artifacts that operationalize the architecture.',
    },
  ]

  return (
    <div className="space-y-16 py-6">
      <section className="max-w-3xl space-y-6">
        <p className="text-[10px] font-mono tracking-[0.2em] text-white/35 uppercase">
          Overview
        </p>
        <h1 className="text-3xl md:text-4xl font-light tracking-tight">
          Architectures for Reliable AI Systems
        </h1>
        <p className="text-white/65 text-sm leading-relaxed">
          This work explores how probabilistic AI operators can be integrated into deterministic software systems.
        </p>
        <p className="text-white/50 text-sm leading-relaxed">
          The focus is state projection, invariant boundaries, structured output correctness, browser automation reliability, and agent execution architectures.
        </p>
        <p className="text-white/70 text-sm leading-relaxed">
          The goal is to build systems that remain stable when interacting with the real world.
        </p>
      </section>

      <section className="max-w-3xl">
        <p className="text-[10px] font-mono tracking-[0.2em] text-white/35 uppercase mb-5">
          Focus Areas
        </p>
        <ul className="space-y-2 text-sm text-white/60">
          <li>state projection</li>
          <li>invariant boundaries</li>
          <li>structured output correctness</li>
          <li>browser automation reliability</li>
          <li>agent execution architectures</li>
        </ul>
      </section>

      <section>
        <p className="text-[10px] font-mono tracking-[0.2em] text-white/35 uppercase mb-6">
          Program
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          {sections.map((section) => (
            <a key={section.href} href={section.href} className="border border-white/10 p-6 hover:border-white/30 transition-colors group block">
              <h2 className="text-lg font-light mb-2 group-hover:text-white/85">{section.title}</h2>
              <p className="text-white/45 text-sm">
                {section.description}
              </p>
            </a>
          ))}
        </div>
      </section>
    </div>
  )
}

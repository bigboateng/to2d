export default function PrimitivesPage() {
  const primitives = [
    {
      href: '/primitives/contracts',
      title: 'Contracts',
      description: 'Typed boundaries that define admissible outputs for stochastic operators.',
    },
    {
      href: '/primitives/invariants',
      title: 'Invariants',
      description: 'Rules that must remain true across model, prompt, and runtime variance.',
    },
    {
      href: '/primitives/projection',
      title: 'Projection',
      description: 'Domain slicing that removes irrelevant state before model interaction.',
    },
    {
      href: '/primitives/canonicalization',
      title: 'Canonicalization',
      description: 'Converting noisy inputs into stable forms for repeatable execution.',
    },
  ]

  return (
    <div className="space-y-14 max-w-4xl">
      <section className="space-y-4">
        <p className="text-[10px] font-mono tracking-[0.2em] text-white/35 uppercase">Primitives</p>
        <h1 className="text-3xl font-light tracking-tight">Reusable Building Blocks</h1>
        <p className="text-white/60 text-sm leading-relaxed">
          Primitives are the smallest architecture units reused across systems to preserve reliability and composability.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-light">Concept</h2>
        <p className="text-white/55 text-sm leading-relaxed">
          Treat reliability as composition of explicit operators instead of a property emerging from prompts.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-light">Formal Idea</h2>
        <pre className="bg-white/5 border border-white/10 p-4 overflow-x-auto text-sm text-white/70 font-mono">
{`u_t = V(f(R(P_s(x_t))))`}
        </pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-light">System Implications</h2>
        <ul className="space-y-2 text-sm text-white/55">
          <li>Each primitive can be independently tested and verified.</li>
          <li>System changes localize to primitive boundaries instead of full prompt rewrites.</li>
          <li>Cross-system reuse increases consistency and lowers integration risk.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-light">Real Example</h2>
        <p className="text-white/55 text-sm leading-relaxed">
          Projecting an active browser DOM slice, canonicalizing to a stable schema, applying a contract, then routing failures through explicit repair loops.
        </p>
      </section>

      <section className="border-t border-white/10 pt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {primitives.map((item) => (
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

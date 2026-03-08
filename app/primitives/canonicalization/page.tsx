export default function CanonicalizationPage() {
  return (
    <div className="space-y-12 max-w-3xl">
      <section className="space-y-4">
        <p className="text-[10px] font-mono tracking-[0.2em] text-white/35 uppercase">Primitives</p>
        <h1 className="text-3xl font-light tracking-tight">Canonicalization</h1>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-light">Concept</h2>
        <p className="text-sm text-white/60 leading-relaxed">
          Canonicalization rewrites variable inputs into a consistent representation that operators can process reliably.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-light">Formal Idea</h2>
        <pre className="bg-white/5 border border-white/10 p-4 overflow-x-auto text-sm text-white/70 font-mono">
{`r_t = R(z_t)`}
        </pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-light">System Implications</h2>
        <ul className="space-y-2 text-sm text-white/55">
          <li>Equivalent inputs map to equivalent operator behavior.</li>
          <li>Prompt-level variability is reduced before inference.</li>
          <li>Validation and replay become more deterministic.</li>
        </ul>
      </section>

      <section className="space-y-3 border-t border-white/10 pt-8">
        <h2 className="text-lg font-light">Real Example</h2>
        <p className="text-sm text-white/60 leading-relaxed">
          Converting noisy UI text and mixed field labels into normalized schema keys before contract-based execution.
        </p>
      </section>
    </div>
  )
}

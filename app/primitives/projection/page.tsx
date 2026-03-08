export default function ProjectionPage() {
  return (
    <div className="space-y-12 max-w-3xl">
      <section className="space-y-4">
        <p className="text-[10px] font-mono tracking-[0.2em] text-white/35 uppercase">Primitives</p>
        <h1 className="text-3xl font-light tracking-tight">Projection</h1>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-light">Concept</h2>
        <p className="text-sm text-white/60 leading-relaxed">
          Projection isolates only the domain-relevant slice of state required for the current operator step.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-light">Formal Idea</h2>
        <pre className="bg-white/5 border border-white/10 p-4 overflow-x-auto text-sm text-white/70 font-mono">
{`z_t = P_s(x_t)`}
        </pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-light">System Implications</h2>
        <ul className="space-y-2 text-sm text-white/55">
          <li>Context size remains minimal and stable.</li>
          <li>Noise and cross-domain contamination are reduced.</li>
          <li>Repeatability improves for long-running workflows.</li>
        </ul>
      </section>

      <section className="space-y-3 border-t border-white/10 pt-8">
        <h2 className="text-lg font-light">Real Example</h2>
        <p className="text-sm text-white/60 leading-relaxed">
          Extracting only the active form state from a browser session before generating the next deterministic action.
        </p>
      </section>
    </div>
  )
}

export default function ContractsPage() {
  return (
    <div className="space-y-12 max-w-3xl">
      <section className="space-y-4">
        <p className="text-[10px] font-mono tracking-[0.2em] text-white/35 uppercase">Primitives</p>
        <h1 className="text-3xl font-light tracking-tight">Contracts</h1>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-light">Concept</h2>
        <p className="text-sm text-white/60 leading-relaxed">
          Contracts define exact shape and semantics for model outputs before they can enter downstream systems.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-light">Formal Idea</h2>
        <pre className="bg-white/5 border border-white/10 p-4 overflow-x-auto text-sm text-white/70 font-mono">
{`contract(y_t) -> {valid, violations}` }
        </pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-light">System Implications</h2>
        <ul className="space-y-2 text-sm text-white/55">
          <li>Tool interfaces remain stable under model variance.</li>
          <li>Invalid states are blocked before side effects occur.</li>
          <li>Repair loops can target concrete violations.</li>
        </ul>
      </section>

      <section className="space-y-3 border-t border-white/10 pt-8">
        <h2 className="text-lg font-light">Real Example</h2>
        <p className="text-sm text-white/60 leading-relaxed">
          Enforcing typed action payloads for browser automations so command execution only runs after contract validation succeeds.
        </p>
      </section>
    </div>
  )
}

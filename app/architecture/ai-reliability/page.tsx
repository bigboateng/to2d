export default function AIReliabilityPage() {
  const foundations = [
    { href: '#observability', label: 'Observability' },
    { href: '#drift-control', label: 'Drift Control' },
    { href: '#failure-categorization', label: 'Failure Categorization' },
    { href: '#compounding-strictness', label: 'Compounding Strictness' },
  ]

  return (
    <div className="space-y-12 max-w-3xl">
      <section>
        <p className="text-[10px] font-mono tracking-[0.2em] text-white/30 uppercase mb-6">
          Architecture
        </p>
        <h1 className="text-3xl font-thin tracking-tight mb-4">
          AI Reliability
        </h1>
        <p className="text-white/50 text-sm mb-8">
          Verification, correction loops, and failure semantics for production AI systems
        </p>
      </section>

      <article className="prose prose-invert max-w-none">
        <div className="text-white/70 text-sm leading-relaxed space-y-6">
          <h2 className="text-xl font-thin text-white/90 mt-8 mb-4">Thesis</h2>
          <p>
            Reliability isn't a feature — it's a discipline. It requires closed-loop verification,
            structured failure paths, deterministic recovery, and architectures where correctness
            is designed in rather than tested for.
          </p>
          <p>
            This formalizes the engineering practices that make AI systems
            trustworthy enough for production: not by making models smarter, but by making
            the systems around them structurally sound.
          </p>

          <h2 className="text-xl font-thin text-white/90 mt-10 mb-4" id="observability">Observability</h2>
          <p>
            A system is observable when its internal state can be inferred from its outputs.
            In AI systems, observability means being able to determine — from the completion alone —
            whether the system is operating within its admissible region or drifting.
          </p>
          <p>
            Without observability, failure is invisible until it becomes catastrophic.
          </p>

          <h2 className="text-xl font-thin text-white/90 mt-10 mb-4" id="drift-control">Drift Control</h2>
          <p>
            Drift is the gradual departure of system behavior from its intended operating region.
            In multi-step AI workflows, drift compounds: each step that passes an imprecise output forward
            pushes the system further from correctness.
          </p>
          <p>
            Drift control requires measurement at each transition, correction when boundaries are approached,
            and hard stops when boundaries are crossed. This is classical control applied to AI pipelines.
          </p>

          <h2 className="text-xl font-thin text-white/90 mt-10 mb-4" id="failure-categorization">Failure Categorization</h2>
          <p>
            Not all failures are equal. A structured failure taxonomy distinguishes between:
          </p>
          <ul className="text-white/60 space-y-2 ml-6 list-disc">
            <li>Recoverable failures (retry with correction)</li>
            <li>Degraded output (partial success, flagged for review)</li>
            <li>Hard failures (invariant violation, immediate halt)</li>
            <li>Silent drift (no immediate error, gradual departure from correctness)</li>
          </ul>
          <p>
            Each category demands a different response. Systems that treat all failures identically are unreliable by design.
          </p>

          <h2 className="text-xl font-thin text-white/90 mt-10 mb-4" id="compounding-strictness">Compounding Strictness</h2>
          <p>
            In reliable systems, strictness compounds across steps. Each transition enforces invariants
            tighter than the last. The system converges toward correctness rather than drifting from it.
          </p>
          <p>
            This is the architectural inverse of how most AI pipelines work today, where each step
            introduces new variance and the system diverges.
          </p>

          <h2 className="text-xl font-thin text-white/90 mt-10 mb-4">Why It Matters</h2>
          <p>
            AI reliability is the difference between a demo and a production system.
            Demos tolerate failure. Production doesn't. The discipline of reliability engineering —
            borrowed from aerospace, nuclear, and control systems — is the missing layer in AI architecture.
          </p>
        </div>
      </article>

      <section className="border-t border-white/10 pt-8">
        <h3 className="text-sm font-mono text-white/50 mb-4">Foundations</h3>
        <ul className="space-y-3">
          {foundations.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="text-white/40 text-sm hover:text-white/70 transition-colors flex items-center gap-2">
                <span className="text-white/20">→</span>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="text-white/30 text-sm border-t border-white/10 pt-6">
        <a href="/architecture" className="hover:text-white/50 transition-colors">
          ← Back to Architecture
        </a>
      </section>
    </div>
  )
}

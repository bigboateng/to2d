export default function Home() {
  return (
    <div className="space-y-20 py-8">
      <section className="max-w-3xl">
        <p className="text-white/50 text-sm leading-relaxed">
          Formalizing AI reliability through control theory, system identification, and structural invariants.
        </p>
      </section>

      <section>
        <p className="text-[10px] font-mono tracking-[0.2em] text-white/80 uppercase mb-6">
          Architecture <span className="text-white/30">2026–</span>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          <a href="/architecture/system-identification" className="border border-white/10 p-6 hover:border-white/30 transition-colors group">
            <h2 className="text-lg font-thin mb-2 group-hover:text-white/70">System Identification</h2>
            <p className="text-white/40 text-sm">
              Characterizing LLM behavior as dynamical systems. Inputs, outputs, transfer properties.
            </p>
          </a>

          <a href="/architecture/stochastic-core" className="border border-white/10 p-6 hover:border-white/30 transition-colors group">
            <h2 className="text-lg font-thin mb-2 group-hover:text-white/70">Stochastic Core</h2>
            <p className="text-white/40 text-sm">
              Modeling the irreducible randomness in language model outputs. Distributions, not determinism.
            </p>
          </a>

          <a href="/architecture/invariant-boundary" className="border border-white/10 p-6 hover:border-white/30 transition-colors group">
            <h2 className="text-lg font-thin mb-2 group-hover:text-white/70">Invariant Boundary</h2>
            <p className="text-white/40 text-sm">
              Structural constraints that hold regardless of model, prompt, or context window.
            </p>
          </a>

          <a href="/architecture/ai-reliability" className="border border-white/10 p-6 hover:border-white/30 transition-colors group">
            <h2 className="text-lg font-thin mb-2 group-hover:text-white/70">AI Reliability</h2>
            <p className="text-white/40 text-sm">
              Verification, correction loops, and failure semantics for production AI systems.
            </p>
          </a>
        </div>
      </section>

      <section>
        <p className="text-[10px] font-mono tracking-[0.2em] text-white/40 uppercase mb-6">
          Research <span className="text-white/20">2018–2025</span>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          <a href="/control-systems" className="border border-white/5 p-6 hover:border-white/20 transition-colors group">
            <h2 className="text-lg font-thin mb-2 text-white/50 group-hover:text-white/70">Control Systems</h2>
            <p className="text-white/30 text-sm">
              The foundation layer. Feedback, state-space dynamics, transfer functions.
            </p>
          </a>

          <a href="/control-systems-ai" className="border border-white/5 p-6 hover:border-white/20 transition-colors group">
            <h2 className="text-lg font-thin mb-2 text-white/50 group-hover:text-white/70">Control Systems × AI</h2>
            <p className="text-white/30 text-sm">
              Control theory applied to AI architectures. Operators, not oracles.
            </p>
          </a>

          <a href="/language-models" className="border border-white/5 p-6 hover:border-white/20 transition-colors group">
            <h2 className="text-lg font-thin mb-2 text-white/50 group-hover:text-white/70">Language Models</h2>
            <p className="text-white/30 text-sm">
              Where LLMs break, why context fails, and what latent space actually looks like.
            </p>
          </a>

          <a href="/open-source" className="border border-white/5 p-6 hover:border-white/20 transition-colors group">
            <h2 className="text-lg font-thin mb-2 text-white/50 group-hover:text-white/70">Open Source</h2>
            <p className="text-white/30 text-sm">
              BrowserState. BrowserAgent. State-space tooling.
            </p>
          </a>
        </div>
      </section>
    </div>
  )
}

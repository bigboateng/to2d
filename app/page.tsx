export default function Home() {
  return (
    <div className="space-y-16 py-8">
      <section className="max-w-3xl">
        <p className="text-white/50 text-sm leading-relaxed">
          Just enough signal.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
        <a href="/control-systems" className="border border-white/10 p-6 hover:border-white/30 transition-colors group">
          <h2 className="text-lg font-thin mb-2 group-hover:text-white/70">Control Systems</h2>
          <p className="text-white/40 text-sm">
            The foundation layer. Feedback, state-space dynamics, transfer functions.
          </p>
        </a>

        <a href="/control-systems-ai" className="border border-white/10 p-6 hover:border-white/30 transition-colors group">
          <h2 className="text-lg font-thin mb-2 group-hover:text-white/70">Control Systems × AI</h2>
          <p className="text-white/40 text-sm">
            Control theory applied to AI architectures. Operators, not oracles.
          </p>
        </a>

        <a href="/language-models" className="border border-white/10 p-6 hover:border-white/30 transition-colors group">
          <h2 className="text-lg font-thin mb-2 group-hover:text-white/70">Language Models</h2>
          <p className="text-white/40 text-sm">
            Where LLMs break, why context fails, and what latent space actually looks like.
          </p>
        </a>

        <a href="/open-source" className="border border-white/10 p-6 hover:border-white/30 transition-colors group">
          <h2 className="text-lg font-thin mb-2 group-hover:text-white/70">Open Source</h2>
          <p className="text-white/40 text-sm">
            BrowserState. BrowserAgent. State-space tooling.
          </p>
        </a>
      </section>
    </div>
  )
}


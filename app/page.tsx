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
            The foundation layer. How engineering wires your thinking.
          </p>
        </a>

        <a href="/automations" className="border border-white/10 p-6 hover:border-white/30 transition-colors group">
          <h2 className="text-lg font-thin mb-2 group-hover:text-white/70">Automations</h2>
          <p className="text-white/40 text-sm">
            2018 → YC → now. The arc before AI.
          </p>
        </a>

        <a href="/pre-ai-research" className="border border-white/10 p-6 hover:border-white/30 transition-colors group">
          <h2 className="text-lg font-thin mb-2 group-hover:text-white/70">Pre-AI Research</h2>
          <p className="text-white/40 text-sm">
            Domain inversion. Intent transfer. Early prototypes.
          </p>
        </a>

        <a href="/ai-era" className="border border-white/10 p-6 hover:border-white/30 transition-colors group">
          <h2 className="text-lg font-thin mb-2 group-hover:text-white/70">AI Era</h2>
          <p className="text-white/40 text-sm">
            LLMs as operators. The primitive you needed.
          </p>
        </a>

        <a href="/control-systems-ai" className="border border-white/10 p-6 hover:border-white/30 transition-colors group">
          <h2 className="text-lg font-thin mb-2 group-hover:text-white/70">Control Systems × AI</h2>
          <p className="text-white/40 text-sm">
            Applying aerospace and control theory to AI architectures.
          </p>
        </a>

        <a href="/tools" className="border border-white/10 p-6 hover:border-white/30 transition-colors group">
          <h2 className="text-lg font-thin mb-2 group-hover:text-white/70">Tools for the Impossible</h2>
          <p className="text-white/40 text-sm">
            The hidden arsenal. Signal, not recipe.
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


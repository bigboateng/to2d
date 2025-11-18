export default function AIEraPage() {
  return (
    <div className="space-y-12 max-w-3xl">
      <section>
        <h1 className="text-3xl font-thin tracking-tight mb-4">
          AI Era
        </h1>
        <p className="text-white/50 text-sm mb-8">
          LLMs as operators, not intelligence
        </p>
        <p className="text-white/70 leading-relaxed mb-6">
          Control theory and state-space thinking applied to language models.
        </p>
      </section>

      <section className="space-y-6">
        <a href="/ai-era/llms-as-transfer-functions" className="border border-white/10 p-6 hover:border-white/30 transition-colors group block">
          <h2 className="text-xl font-thin mb-3 group-hover:text-white/90">LLMs as Transfer Functions</h2>
          <p className="text-white/60 text-sm leading-relaxed mb-2">
            Not intelligence. Operators between domains.
          </p>
          <p className="text-white/40 text-xs">
            transfer functions · domain mapping · control loops · operator perspective
          </p>
        </a>

        <div className="border border-white/10 p-6">
          <h2 className="text-xl font-thin mb-3">Latent space navigation</h2>
          <p className="text-white/60 text-sm leading-relaxed">
            State-space thinking applied to embeddings.
          </p>
        </div>

        <div className="border border-white/10 p-6">
          <h2 className="text-xl font-thin mb-3">Why context is not the solution</h2>
          <p className="text-white/60 text-sm leading-relaxed">
            And why domain mismatch amplifies hallucination.
          </p>
        </div>

        <div className="border border-white/10 p-6">
          <h2 className="text-xl font-thin mb-3">Agents as simple operators</h2>
          <p className="text-white/60 text-sm leading-relaxed">
            Not "intelligence". Just well-constrained transformations.
          </p>
        </div>

        <div className="border border-white/10 p-6">
          <h2 className="text-xl font-thin mb-3">Your original frameworks</h2>
          <ul className="space-y-2 text-white/60 text-sm">
            <li className="flex items-start">
              <span className="text-white/30 mr-3">→</span>
              <span>0-context</span>
            </li>
            <li className="flex items-start">
              <span className="text-white/30 mr-3">→</span>
              <span>Domain intelligence</span>
            </li>
            <li className="flex items-start">
              <span className="text-white/30 mr-3">→</span>
              <span>To2D</span>
            </li>
          </ul>
        </div>

        <div className="border border-white/10 p-6">
          <h2 className="text-xl font-thin mb-3">The primitive you needed</h2>
          <p className="text-white/60 text-sm leading-relaxed">
            How AI finally gave you the tool to solve the earlier layers.
          </p>
        </div>
      </section>

    </div>
  )
}




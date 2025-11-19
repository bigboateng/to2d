export default function PreAIResearchPage() {
  return (
    <div className="space-y-12 max-w-3xl">
      <section>
        <h1 className="text-3xl font-thin tracking-tight mb-4">
          Research Before AI
        </h1>
        <p className="text-white/50 text-sm mb-8">
          2015–2022
        </p>
        <p className="text-white/70 leading-relaxed mb-6">
          Early work on domain transfer, state-space systems, and zero-context architectures.
        </p>
      </section>

      <section className="space-y-6">
        <a href="/pre-ai-research/transforming-the-problem" className="border border-white/10 p-6 hover:border-white/30 transition-colors group block">
          <h2 className="text-xl font-thin mb-3 group-hover:text-white/90">Transforming the Problem</h2>
          <p className="text-white/60 text-sm leading-relaxed mb-2">
            How domain changes reveal solutions.
          </p>
          <p className="text-white/40 text-xs">
            domain transforms · coordinate frames · representation as control · early experiments
          </p>
        </a>

        <a href="/pre-ai-research/state-as-memory" className="border border-white/10 p-6 hover:border-white/30 transition-colors group block">
          <h2 className="text-xl font-thin mb-3 group-hover:text-white/90">State as Memory</h2>
          <p className="text-white/60 text-sm leading-relaxed mb-2">
            Treating sessions and environments as controllable state spaces.
          </p>
          <p className="text-white/40 text-xs">
            state vs history · browser sessions · minimal representation · operator boundaries
          </p>
        </a>

        <a href="/pre-ai-research/constraints-over-context" className="border border-white/10 p-6 hover:border-white/30 transition-colors group block">
          <h2 className="text-xl font-thin mb-3 group-hover:text-white/90">Constraints Over Context</h2>
          <p className="text-white/60 text-sm leading-relaxed mb-2">
            Eliminating history and noise to make systems predictable.
          </p>
          <p className="text-white/40 text-xs">
            stability through reduction · boundary constraints · constraint as intelligence
          </p>
        </a>

        <a href="/pre-ai-research/intent-without-language" className="border border-white/10 p-6 hover:border-white/30 transition-colors group block">
          <h2 className="text-xl font-thin mb-3 group-hover:text-white/90">Intent Without Language</h2>
          <p className="text-white/60 text-sm leading-relaxed mb-2">
            Building early intent→behavior systems before language models existed.
          </p>
          <p className="text-white/40 text-xs">
            structured intent · state transitions · proto-operators · To2D precursor
          </p>
        </a>
      </section>

    </div>
  )
}




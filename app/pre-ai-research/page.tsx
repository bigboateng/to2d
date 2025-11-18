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
        <div className="border border-white/10 p-6">
          <h2 className="text-xl font-thin mb-3">Early ideas on domain inversion</h2>
          <p className="text-white/60 text-sm leading-relaxed">
            Transfer between representation domains.
          </p>
        </div>

        <div className="border border-white/10 p-6">
          <h2 className="text-xl font-thin mb-3">Session-as-state-space</h2>
          <p className="text-white/60 text-sm leading-relaxed">
            Treating browser sessions as navigable phase space.
          </p>
        </div>

        <div className="border border-white/10 p-6">
          <h2 className="text-xl font-thin mb-3">0-context as a constraint system</h2>
          <p className="text-white/60 text-sm leading-relaxed">
            The original framework for minimal-information operations.
          </p>
        </div>

        <div className="border border-white/10 p-6">
          <h2 className="text-xl font-thin mb-3">Early prototypes</h2>
          <p className="text-white/60 text-sm leading-relaxed">
            Intent → behavior mapping without LLMs.
          </p>
        </div>

        <div className="border border-white/10 p-6">
          <h2 className="text-xl font-thin mb-3">The gap</h2>
          <p className="text-white/60 text-sm leading-relaxed">
            "Automation engineering" vs "automation reality"
          </p>
        </div>
      </section>

      <section className="text-white/40 text-sm border-t border-white/10 pt-6">
        <p>
          This helps people understand: You were already doing the hard parts.
        </p>
      </section>
    </div>
  )
}




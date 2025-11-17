export default function AutomationsPage() {
  return (
    <div className="space-y-12 max-w-3xl">
      <section>
        <h1 className="text-3xl font-thin tracking-tight mb-4">
          Automations
        </h1>
        <p className="text-white/50 text-sm mb-8">
          2018 → YC → now
        </p>
        <p className="text-white/70 leading-relaxed mb-6">
          This is your pre-AI phase — the world you saw before everyone else.
        </p>
      </section>

      <section className="space-y-6">
        <div className="border border-white/10 p-6">
          <h2 className="text-xl font-thin mb-3">2018 YC problem space</h2>
          <p className="text-white/60 text-sm leading-relaxed mb-4">
            Early automation limitations. What "programmatically understanding a website" meant before agents.
          </p>
        </div>

        <div className="border border-white/10 p-6">
          <h2 className="text-xl font-thin mb-3">The failure modes you discovered</h2>
          <ul className="space-y-2 text-white/60 text-sm">
            <li className="flex items-start">
              <span className="text-white/30 mr-3">→</span>
              <span>Session reuse</span>
            </li>
            <li className="flex items-start">
              <span className="text-white/30 mr-3">→</span>
              <span>Navigation drift</span>
            </li>
            <li className="flex items-start">
              <span className="text-white/30 mr-3">→</span>
              <span>Domain mismatch</span>
            </li>
          </ul>
        </div>

        <div className="border border-white/10 p-6">
          <h2 className="text-xl font-thin mb-3">Why deterministic automation didn't scale</h2>
          <p className="text-white/60 text-sm leading-relaxed">
            The invisible ops work behind "automation"
          </p>
        </div>

        <div className="border border-white/10 p-6">
          <h2 className="text-xl font-thin mb-3">The seeds of Zero-Context and To2D</h2>
          <p className="text-white/60 text-sm leading-relaxed">
            Where the frameworks began.
          </p>
        </div>
      </section>

      <section className="text-white/40 text-sm border-t border-white/10 pt-6">
        <p>
          This section grounds your expertise in actual years of real-world work, not hype.
        </p>
      </section>
    </div>
  )
}




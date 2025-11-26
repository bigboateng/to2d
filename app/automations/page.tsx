import { PasswordGate } from '@/components/PasswordGate'

export default function AutomationsPage() {
  return (
    <PasswordGate>
      <div className="space-y-12 max-w-3xl">
        <section>
          <h1 className="text-3xl font-thin tracking-tight mb-4">
            Automations
          </h1>
          <p className="text-white/50 text-sm mb-8">
            2018 → YC → now
          </p>
          <p className="text-white/70 leading-relaxed mb-6">
            From the earliest attempts to production at scale.
          </p>
        </section>

        <section className="space-y-6">
          <a href="/automations/origins" className="border border-white/10 p-6 hover:border-white/30 transition-colors group block">
            <h2 className="text-xl font-thin mb-3 group-hover:text-white/90">Origins (Before Automation)</h2>
            <p className="text-white/60 text-sm leading-relaxed mb-2">
              Before browser automation had tools or an industry, I spent more than two years trying to build it without realizing how deep the problem actually was.
            </p>
            <p className="text-white/40 text-xs">
              2018 problem space · bill pay · the pivots · the turning point
            </p>
          </a>

          <a href="/automations/rise-of-automation-infrastructure" className="border border-white/10 p-6 hover:border-white/30 transition-colors group block">
            <h2 className="text-xl font-thin mb-3 group-hover:text-white/90">Rise of Automation Infrastructure</h2>
            <p className="text-white/60 text-sm leading-relaxed mb-2">
              Where authentication, state, and real-world reliability converge.
            </p>
            <p className="text-white/40 text-xs">
              Anon · state patterns · the mental model · systems not scripts
            </p>
          </a>

          <a href="/automations/consulting-realizing-what-i-actually-knew" className="border border-white/10 p-6 hover:border-white/30 transition-colors group block">
            <h2 className="text-xl font-thin mb-3 group-hover:text-white/90">Consulting — Realizing What I Actually Knew</h2>
            <p className="text-white/60 text-sm leading-relaxed mb-2">
              The knowledge economy of accumulated failure.
            </p>
            <p className="text-white/40 text-xs">
              Plyhealth · pattern recognition · domain expertise · inevitabilities
            </p>
          </a>

          <a href="/automations/plyhealth-first-true-inhouse-automation-system" className="border border-white/10 p-6 hover:border-white/30 transition-colors group block">
            <h2 className="text-xl font-thin mb-3 group-hover:text-white/90">Plyhealth — The First True In-House Automation System</h2>
            <p className="text-white/60 text-sm leading-relaxed mb-2">
              Where technical stability met organizational fragility.
            </p>
            <p className="text-white/40 text-xs">
              Browserbase · observability · domain over roadmap · state as foundation
            </p>
          </a>

          <a href="/automations/browserstate-understanding-the-sublayer" className="border border-white/10 p-6 hover:border-white/30 transition-colors group block">
            <h2 className="text-xl font-thin mb-3 group-hover:text-white/90">BrowserState — Understanding the Sublayer of Automation</h2>
            <p className="text-white/60 text-sm leading-relaxed mb-2">
              The missing foundation the industry skipped.
            </p>
            <p className="text-white/40 text-xs">
              fraud vs bot detection · identity continuity · state as substrate
            </p>
          </a>

          <a href="/automations/mira-the-slack-prototype" className="border border-white/10 p-6 hover:border-white/30 transition-colors group block">
            <h2 className="text-xl font-thin mb-3 group-hover:text-white/90">Mira — The Slack Prototype That Exposed the Real Gaps</h2>
            <p className="text-white/60 text-sm leading-relaxed mb-2">
              Where production requirements met demo-grade agents.
            </p>
            <p className="text-white/40 text-xs">
              Slack control plane · human-in-loop · the diagnostic tool
            </p>
          </a>

          <a href="/automations/designing-the-first-browser-agent" className="border border-white/10 p-6 hover:border-white/30 transition-colors group block">
            <h2 className="text-xl font-thin mb-3 group-hover:text-white/90">Designing the First Browser Agent That Actually Delivers Business Value</h2>
            <p className="text-white/60 text-sm leading-relaxed mb-2">
              From first principles to production infrastructure.
            </p>
            <p className="text-white/40 text-xs">
              state-first · 0-context · ΔE/ΔV · theoretical reliability ceiling
            </p>
          </a>
        </section>

      </div>
    </PasswordGate>
  )
}




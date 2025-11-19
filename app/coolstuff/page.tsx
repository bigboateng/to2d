export default function OpenSourcePage() {
  return (
    <div className="space-y-12 max-w-3xl">
      <section>
        <h1 className="text-3xl font-thin tracking-tight mb-4">
          Open Source
        </h1>
        <p className="text-white/50 text-sm mb-8">
          Foundational tools for state-space automation
        </p>
        <p className="text-white/70 leading-relaxed mb-6">
          A collection of foundational tools built to be reliable, verifiable, and compatible across environments.
        </p>
      </section>

      <section className="space-y-8">
        <div className="border border-white/10 p-6 hover:border-white/20 transition-colors">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h2 className="text-xl font-thin mb-2">BrowserState</h2>
              <p className="text-white/60 text-sm leading-relaxed mb-4">
                A portable, cross-runtime system for capturing, storing, and reusing browser session state.
                Designed for reliability in automations: canonical state extraction, zero-context snapshots, and env-agnostic portability.
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 mb-4 text-xs">
            <a 
              href="https://browserstate.io/" 
              className="text-white/40 hover:text-white/70 transition-colors underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              browserstate.io
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <a 
              href="https://www.npmjs.com/package/browserstate" 
              className="border border-white/10 p-4 hover:border-white/30 transition-colors group block"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-white/80 text-sm font-medium">TypeScript</span>
                <span className="text-white/40 text-xs">npm</span>
              </div>
              <p className="text-white/50 text-xs">
                @browserstate
              </p>
            </a>
            
            <a 
              href="https://pypi.org/project/browserstate/" 
              className="border border-white/10 p-4 hover:border-white/30 transition-colors group block"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-white/80 text-sm font-medium">Python</span>
                <span className="text-white/40 text-xs">PyPI</span>
              </div>
              <p className="text-white/50 text-xs">
                browserstate
              </p>
            </a>
          </div>
        </div>

        <div className="border border-white/10 p-6 hover:border-white/20 transition-colors">
          <h2 className="text-xl font-thin mb-2">BrowserState Nova Adapter</h2>
          <p className="text-white/60 text-sm leading-relaxed mb-4">
            A lightweight adapter that brings BrowserState to Amazon's Nova automation runtime.
            It standardizes session reuse and state injection inside Nova workflows, enabling deterministic automations without custom glue code.
          </p>
          
          <div className="flex items-center gap-4 text-xs">
            <a 
              href="https://github.com/browserstate-org/browserstate-nova-adapter" 
              className="text-white/40 hover:text-white/70 transition-colors underline inline-flex items-center gap-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>GitHub</span>
              <span className="text-white/30">→</span>
            </a>
            <span className="text-white/30 text-xs">Adapter layer</span>
          </div>
        </div>

        <div className="border border-white/10 p-6 hover:border-white/20 transition-colors">
          <h2 className="text-xl font-thin mb-2">BrowserAgent</h2>
          <p className="text-white/60 text-sm leading-relaxed mb-4">
            A zero-context automation engine that avoids the instability of prompt-heavy agents.
            Instead of reasoning over long, noisy histories, BrowserAgent acts on canonical state slices, enabling predictable, verifiable, and environment-agnostic execution.
            Built for high-reliability automations that other browser agents struggle with, especially in multi-step workflows.
            Integrated with BrowserState; trusted by teams with 2,000+ npm downloads per week.
          </p>
          
          <div className="flex items-center gap-4 text-xs">
            <a 
              href="https://www.npmjs.com/package/@centralinc/browseragent" 
              className="text-white/40 hover:text-white/70 transition-colors underline inline-flex items-center gap-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>npm</span>
              <span className="text-white/30">→</span>
            </a>
            <a 
              href="https://github.com/centralinc/browseragent" 
              className="text-white/40 hover:text-white/70 transition-colors underline inline-flex items-center gap-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>GitHub</span>
              <span className="text-white/30">→</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}


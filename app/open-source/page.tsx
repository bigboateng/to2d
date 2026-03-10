export default function OpenSourcePage() {
  return (
    <div className="space-y-12 max-w-3xl">
      <section>
        <h1 className="text-3xl font-thin tracking-tight mb-4 text-[#1A1A1A]">
          Open Source
        </h1>
        <p className="text-[#8C8C8C] text-sm mb-8">
          Libraries and tools implementing reliability patterns for AI systems.
        </p>
      </section>

      <section className="space-y-8">
        <div className="border border-[#DADADA] p-6 hover:border-[#B5B5B5] transition-colors">
          <h2 className="text-xl font-light mb-2 text-[#1A1A1A]">
            <a
              href="https://github.com/operatorstack/llm-contract"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-[#DADADA] underline-offset-4 hover:decoration-[#B5B5B5] transition-colors"
            >
              llm-contract
            </a>
          </h2>
          <p className="text-[#5A5A5A] text-sm leading-relaxed mb-4">
            Runtime for enforcing structured contracts on LLM calls. Handles output cleaning, schema verification, domain invariant checks, failure classification, and repair/retry loops.
          </p>
          <div className="flex items-center gap-4 text-xs text-[#8C8C8C]">
            <span>TypeScript</span>
            <span>MIT License</span>
            <a
              href="https://github.com/operatorstack/llm-contract"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#1A1A1A] transition-colors"
            >
              GitHub →
            </a>
          </div>
        </div>

        <div className="border border-[#DADADA] p-6 hover:border-[#B5B5B5] transition-colors">
          <h2 className="text-xl font-light mb-2 text-[#1A1A1A]">
            <a
              href="https://github.com/operatorstack/boundary-trace"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-[#DADADA] underline-offset-4 hover:decoration-[#B5B5B5] transition-colors"
            >
              boundary-trace
            </a>
          </h2>
          <p className="text-[#5A5A5A] text-sm leading-relaxed mb-4">
            Structured event system for recording deterministic boundary execution. Captures transitions such as verification failures, repair generation, retry scheduling, and terminal outcomes.
          </p>
          <div className="flex items-center gap-4 text-xs text-[#8C8C8C]">
            <span>TypeScript</span>
            <a
              href="https://github.com/operatorstack/boundary-trace"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#1A1A1A] transition-colors"
            >
              GitHub →
            </a>
          </div>
        </div>

        <div className="border border-[#DADADA] p-6 hover:border-[#B5B5B5] transition-colors">
          <h2 className="text-xl font-light mb-2 text-[#1A1A1A]">
            <a
              href="https://github.com/operatorstack/boundary-inspector"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-[#DADADA] underline-offset-4 hover:decoration-[#B5B5B5] transition-colors"
            >
              boundary-inspector
            </a>
          </h2>
          <p className="text-[#5A5A5A] text-sm leading-relaxed mb-4">
            Interactive UI for exploring boundary execution traces. Provides run timelines, attempt inspection, failure analysis, and event replay.
          </p>
          <div className="flex items-center gap-4 text-xs text-[#8C8C8C]">
            <span>TypeScript</span>
            <a
              href="https://github.com/operatorstack/boundary-inspector"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#1A1A1A] transition-colors"
            >
              GitHub →
            </a>
          </div>
        </div>

        <div className="border border-[#DADADA] p-6 hover:border-[#B5B5B5] transition-colors">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h2 className="text-xl font-light mb-2 text-[#1A1A1A]">BrowserState</h2>
              <p className="text-[#5A5A5A] text-sm leading-relaxed mb-4">
                A portable, cross-runtime system for capturing, storing, and reusing browser session state.
                Designed for reliability in automations: canonical state extraction, zero-context snapshots, and env-agnostic portability.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 mb-4 text-xs">
            <a
              href="https://browserstate.io/"
              className="text-[#8C8C8C] hover:text-[#1A1A1A] transition-colors underline decoration-[#DADADA] underline-offset-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              browserstate.io
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <a
              href="https://www.npmjs.com/package/browserstate"
              className="border border-[#DADADA] p-4 hover:border-[#B5B5B5] transition-colors group block"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[#1A1A1A] text-sm font-medium">TypeScript</span>
                <span className="text-[#8C8C8C] text-xs">npm</span>
              </div>
              <p className="text-[#8C8C8C] text-xs">@browserstate</p>
            </a>

            <a
              href="https://pypi.org/project/browserstate/"
              className="border border-[#DADADA] p-4 hover:border-[#B5B5B5] transition-colors group block"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[#1A1A1A] text-sm font-medium">Python</span>
                <span className="text-[#8C8C8C] text-xs">PyPI</span>
              </div>
              <p className="text-[#8C8C8C] text-xs">browserstate</p>
            </a>
          </div>
        </div>

        <div className="border border-[#DADADA] p-6 hover:border-[#B5B5B5] transition-colors">
          <h2 className="text-xl font-light mb-2 text-[#1A1A1A]">BrowserState Nova Adapter</h2>
          <p className="text-[#5A5A5A] text-sm leading-relaxed mb-4">
            A lightweight adapter that brings BrowserState to Amazon&apos;s Nova automation runtime.
            Standardizes session reuse and state injection inside Nova workflows, enabling deterministic automations without custom glue code.
          </p>

          <div className="flex items-center gap-4 text-xs">
            <a
              href="https://github.com/browserstate-org/browserstate-nova-adapter"
              className="text-[#8C8C8C] hover:text-[#1A1A1A] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub →
            </a>
            <span className="text-[#8C8C8C] text-xs">Adapter layer</span>
          </div>
        </div>

        <div className="border border-[#DADADA] p-6 hover:border-[#B5B5B5] transition-colors">
          <h2 className="text-xl font-light mb-2 text-[#1A1A1A]">BrowserAgent</h2>
          <p className="text-[#5A5A5A] text-sm leading-relaxed mb-4">
            A zero-context automation engine that avoids the instability of prompt-heavy agents.
            Instead of reasoning over long, noisy histories, BrowserAgent acts on canonical state slices, enabling predictable, verifiable, and environment-agnostic execution.
            Built for high-reliability automations that other browser agents struggle with, especially in multi-step workflows.
            Integrated with BrowserState; trusted by teams with 2,000+ npm downloads per week.
          </p>

          <div className="flex items-center gap-4 text-xs mb-6">
            <a
              href="https://www.npmjs.com/package/@centralinc/browseragent"
              className="text-[#8C8C8C] hover:text-[#1A1A1A] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              npm →
            </a>
            <a
              href="https://github.com/centralinc/browseragent"
              className="text-[#8C8C8C] hover:text-[#1A1A1A] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub →
            </a>
          </div>

          <div className="border-t border-[#E8E8E6] pt-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-[#1A1A1A]">Updates Log</h3>
              <span className="text-[#8C8C8C] text-xs">3 Updates</span>
            </div>

            <div className="space-y-3">
              <a href="/open-source/updates/multi-context-browser-control" className="block border border-[#DADADA] p-4 hover:border-[#B5B5B5] transition-colors group">
                <div className="flex items-start justify-between mb-1">
                  <h4 className="text-sm text-[#1A1A1A]">Multi-Context Browser Control</h4>
                  <span className="text-[#8C8C8C] text-xs">Dec 2025</span>
                </div>
                <p className="text-[#8C8C8C] text-xs">
                  Spawn isolated pages within shared session context
                </p>
              </a>

              <a href="/open-source/updates/tool-execution-context" className="block border border-[#DADADA] p-4 hover:border-[#B5B5B5] transition-colors group">
                <div className="flex items-start justify-between mb-1">
                  <h4 className="text-sm text-[#1A1A1A]">Tool Execution Context</h4>
                  <span className="text-[#8C8C8C] text-xs">Nov 2025</span>
                </div>
                <p className="text-[#8C8C8C] text-xs">
                  Runtime context for tools without polluting prompts
                </p>
              </a>

              <a href="/open-source/updates/sequential-keyboard-actions" className="block border border-[#DADADA] p-4 hover:border-[#B5B5B5] transition-colors group">
                <div className="flex items-start justify-between mb-1">
                  <h4 className="text-sm text-[#1A1A1A]">Sequential Keyboard Actions</h4>
                  <span className="text-[#8C8C8C] text-xs">Nov 2025</span>
                </div>
                <p className="text-[#8C8C8C] text-xs">
                  Supporting sequential keypresses and repetition syntax
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

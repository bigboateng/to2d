export default function ToolExecutionContextPage() {
  return (
    <div className="space-y-12 max-w-3xl">
      <section>
        <div className="flex items-start justify-between mb-4">
          <h1 className="text-3xl font-thin tracking-tight">
            Tool Execution Context
          </h1>
          <span className="text-white/40 text-sm">Nov 2025</span>
        </div>
        <p className="text-white/50 text-sm mb-8">
          BrowserAgent Update
        </p>
      </section>

      <article className="prose prose-invert max-w-none">
        <div className="text-white/70 text-sm leading-relaxed space-y-6">
          <p>
            Most agent architectures treat tools as pure functions, but real automations need runtime context:
          </p>
          
          <ul className="text-white/60 space-y-2 ml-6 list-disc">
            <li>organization ID</li>
            <li>feature flags</li>
            <li>execution metadata</li>
            <li>session state</li>
            <li>environment info</li>
            <li>prior tool outputs</li>
            <li>domain-specific data</li>
          </ul>
          
          <p className="text-white/80 font-medium">
            I added a lightweight toolExecutionContext layer to the ComputerUseAgent:
          </p>
          
          <ul className="text-white/60 space-y-2 ml-6 list-disc">
            <li>agent.execute() accepts toolExecutionContext</li>
            <li>custom tools receive context as a second parameter in call()</li>
            <li>built-in tools ignore it</li>
            <li>ToolCollection propagates the context automatically</li>
          </ul>
          
          <p>
            This enables context-aware tools without polluting prompts or creating hidden inputs.
          </p>
          
          <div className="border border-white/10 p-6 my-6">
            <p className="text-white/80 text-sm mb-3 font-medium">Example:</p>
            <pre className="bg-white/5 border border-white/10 p-4 rounded overflow-x-auto font-mono text-xs">
{`await agent.execute("task", undefined, {
  toolExecutionContext: { orgId: "acme-001", env: "production" }
});`}
            </pre>
          </div>
        </div>
      </article>

      <section className="text-white/40 text-sm border-t border-white/10 pt-6">
        <a href="/open-source" className="hover:text-white/60 transition-colors">
          ← Back to Open Source
        </a>
      </section>
    </div>
  )
}


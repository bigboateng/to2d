export default function MultiContextBrowserControlPage() {
  return (
    <div className="space-y-12 max-w-3xl">
      <section>
        <div className="flex items-start justify-between mb-4">
          <h1 className="text-3xl font-thin tracking-tight">
            Multi-Context Browser Control
          </h1>
          <span className="text-white/40 text-sm">Dec 2025</span>
        </div>
        <p className="text-white/50 text-sm mb-8">
          BrowserAgent Update
        </p>
      </section>

      <article className="prose prose-invert max-w-none">
        <div className="text-white/70 text-sm leading-relaxed space-y-6">
          <p>
            Custom tools can now spawn isolated browser pages within a shared session context.
          </p>
          
          <p className="text-white/80 font-medium">
            New properties on <code className="text-white/80 bg-white/10 px-1 rounded">ToolExecutionContext</code>:
          </p>
          
          <ul className="text-white/60 space-y-2 ml-6 list-disc">
            <li><code className="bg-white/10 px-1 rounded">browserContext</code> — direct access to Playwright BrowserContext</li>
            <li><code className="bg-white/10 px-1 rounded">createPage()</code> — creates pages with anti-detection scripts applied</li>
          </ul>
          
          <p>
            Pages inherit session state (cookies, localStorage, proxy config) and are tracked for automatic cleanup on errors.
          </p>
          
          <div className="border border-white/10 p-4 my-6">
            <pre className="bg-white/5 border border-white/10 p-4 rounded overflow-x-auto font-mono text-xs">
{`async call(params, ctx?: ToolExecutionContext) {
  const page = await ctx.createPage();
  try {
    await page.goto(url);
    // ... operations without affecting main page
    return { output: 'Success' };
  } finally {
    await page.close();
  }
}`}
            </pre>
          </div>
          
          <p className="text-white/80 font-medium">
            This enables:
          </p>
          
          <ul className="text-white/60 space-y-2 ml-6 list-disc">
            <li>Email activation links without losing form state</li>
            <li>Cross-domain data lookups mid-workflow</li>
            <li>Parallel page operations</li>
            <li>Sub-agent delegation to isolated pages</li>
          </ul>
          
          <div className="border-l-2 border-white/20 pl-4 py-2 mt-8 bg-white/5">
            <p className="text-white/60 text-sm">
              For the complete architectural analysis, implementation patterns, and diagrams:
            </p>
            <a 
              href="/ai-era/multi-context-browser-control" 
              className="text-white/80 hover:text-white transition-colors underline text-sm mt-2 inline-block"
            >
              Multi-Context Browser Control for Agentic Systems →
            </a>
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









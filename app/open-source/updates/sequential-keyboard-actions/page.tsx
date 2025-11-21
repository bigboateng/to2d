export default function SequentialKeyboardActionsPage() {
  return (
    <div className="space-y-12 max-w-3xl">
      <section>
        <div className="flex items-start justify-between mb-4">
          <h1 className="text-3xl font-thin tracking-tight">
            Sequential Keyboard Actions
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
            One of the biggest reliability gaps in browser agents isn't navigation — it's keyboard behavior.
          </p>
          
          <p>
            The computer-use model emits sequences like:
          </p>
          
          <pre className="bg-white/5 border border-white/10 p-4 rounded overflow-x-auto mb-6 font-mono text-sm">
{`Down Down Down
Tab*5 Enter
Tab Tab Enter`}
          </pre>
          
          <p>
            The agent previously treated everything as combinations, which caused form-filling failures.
          </p>
          
          <p className="text-white/80 font-medium">
            I extended the agent to support:
          </p>
          
          <ul className="text-white/60 space-y-2 ml-6 list-disc">
            <li>space-separated sequential keypresses</li>
            <li>repetition syntax (Tab*5)</li>
            <li>automatic detection between sequences and combos</li>
            <li>clearer validation and error reporting</li>
          </ul>
          
          <p>
            This closes a major ergonomics gap for complex form automation.
          </p>
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


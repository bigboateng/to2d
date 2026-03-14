import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Browser State',
  description: 'Why browser state is a first-class reliability layer in browser automation systems.',
}

export default function BrowserStatePage() {
  const references = [
    { href: '/operator-systems', label: 'Operator Systems' },
    { href: '/systems/browser-agents', label: 'Browser Agents' },
    { href: '/correctness/deterministic-boundaries', label: 'Deterministic Boundaries' },
  ]

  return (
    <div className="max-w-3xl space-y-14">
      <header className="space-y-4 border-b border-[#E8E8E6] pb-8">
        <p className="text-xs uppercase tracking-[0.2em] text-[#8C8C8C] font-mono">Applications</p>
        <h1 className="text-3xl md:text-4xl font-light tracking-tight leading-tight text-[#1A1A1A]">Browser State</h1>
      </header>

      <section className="space-y-5">
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Browser state is the layer that turns fragile interaction history into reusable system knowledge.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          In browser automation, raw actions are not enough. Reliability depends on whether the system can preserve what it has already learned about the environment.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-light text-[#1A1A1A]">What Browser State Contains</h2>
        <ul className="space-y-3 text-sm text-[#5A5A5A] list-disc ml-6">
          <li>session continuity such as cookies, storage, and authentication context</li>
          <li>navigation evidence such as discovered URLs and page relationships</li>
          <li>interaction history such as attempted actions and observed failures</li>
          <li>captured signals such as extracted data, page structure, and change markers</li>
        </ul>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-light text-[#1A1A1A]">Why It Matters</h2>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          When state is externalized, the system no longer has to rediscover the environment from scratch on every step.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Failures become observable, reproducible, and classifiable instead of anecdotal.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          That changes browser automation from a sequence of guesses into a system that can accumulate evidence and improve decisions over time.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-light text-[#1A1A1A]">Practical Role in the Stack</h2>
        <pre className="bg-[#FFFFFF] border border-[#DADADA] p-4 overflow-x-auto text-sm font-mono text-[#2A2A2A]">
{`environment observation
→ state capture
→ representation update
→ model reasoning
→ deterministic acceptance
→ state integration`}
        </pre>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          In this flow, browser state is the memory and evidence layer. It connects changing observations to stable software behavior.
        </p>
      </section>

      <section className="space-y-3 border-t border-[#E8E8E6] pt-8">
        <h2 className="text-lg font-light text-[#1A1A1A]">Related Sections</h2>
        <div className="space-y-3 pt-2">
          {references.map((reference) => (
            <a
              key={reference.href}
              href={reference.href}
              className="block border border-[#E8E8E6] p-4 hover:border-[#DADADA] transition-colors text-sm text-[#5A5A5A]"
            >
              {reference.label}
            </a>
          ))}
        </div>
      </section>
    </div>
  )
}

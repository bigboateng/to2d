import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Browser Agents',
  description: 'Browser agents as a concrete operator system built on explicit environment modeling, state capture, and deterministic boundaries.',
}

export default function BrowserAgentsPage() {
  const references = [
    { href: '/systems', label: 'Operator Systems' },
    { href: '/systems/browser-state', label: 'Browser State' },
    { href: '/systems/structured-output-systems', label: 'Structured Output Systems' },
  ]

  return (
    <div className="max-w-3xl space-y-14">
      <header className="space-y-4 border-b border-[#E8E8E6] pb-8">
        <p className="text-xs uppercase tracking-[0.2em] text-[#8C8C8C] font-mono">Applications</p>
        <h1 className="text-3xl md:text-4xl font-light tracking-tight leading-tight text-[#1A1A1A]">Browser Agents</h1>
      </header>

      <section className="space-y-5">
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Browser agents are a concrete example of an operator system.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          They operate inside dynamic environments, reason over partial observations, and act on external systems whose structure changes independently of the software.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          In practice, they combine observation, action selection, state tracking, and deterministic acceptance around real websites and workflows.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-light text-[#1A1A1A]">What Makes Browser Agents Different</h2>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          A browser agent does not execute inside a closed software boundary.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          It interacts with layouts, navigation paths, authentication flows, and domain-specific page states that can all shift without warning.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Reliability therefore depends less on hard-coded replay and more on whether the system can maintain a useful representation of what is happening in the browser.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          This is why browser agents sit naturally after operator systems in the framework. They are one of the clearest cases where operator intent, environment modeling, and deterministic boundaries all have to work together.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-light text-[#1A1A1A]">Core Layers</h2>
        <ul className="space-y-3 text-sm text-[#5A5A5A] list-disc ml-6">
          <li>Operator layer: defines the goal, flexibility, and acceptable behavior.</li>
          <li>Observation layer: captures browser state, navigation context, and page evidence.</li>
          <li>Reasoning layer: chooses the next action using a probabilistic model.</li>
          <li>Acceptance layer: verifies whether the proposed action or extracted result is admissible.</li>
        </ul>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-light text-[#1A1A1A]">Why State Matters</h2>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          In browser systems, failures are often blamed on the model when the deeper issue is missing state.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Session continuity, discovered links, prior failures, extracted page structure, and reproducible evidence all determine whether the agent can adapt when the environment changes.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Without that layer, the agent is repeatedly forced to reason from scratch.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          With it, behavior becomes easier to debug, recover, and constrain.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-light text-[#1A1A1A]">Relationship to the Rest of the Stack</h2>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          `Operator Systems` explains why these architectures exist.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          `Browser Agents` is where that argument becomes concrete.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          `Browser State` captures the environment in a reusable form.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          `Structured Output Systems` shows how deterministic acceptance is enforced around probabilistic outputs.
        </p>
      </section>

      <section className="space-y-5 border-t border-[#E8E8E6] pt-10">
        <h2 className="text-xl font-light text-[#1A1A1A]">Why This Page Follows Operator Systems</h2>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          The operator-systems page describes the architectural argument. Browser agents show what that argument looks like in a high-friction real environment where unstable observations, state drift, and action validation all matter at once.
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

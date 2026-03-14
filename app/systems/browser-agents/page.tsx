import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Browser Agents',
  description: 'Browser agents as a concrete operator system built on explicit environment modeling, state capture, and deterministic boundaries.',
  openGraph: {
    title: 'Browser Automation Is an Operator System',
    description: 'Operator intent × dynamic environments × model behavior.',
    type: 'article',
    images: [
      {
        url: '/images/og/browser-agents-cover.png',
        width: 1200,
        height: 630,
        alt: 'Browser Automation Is an Operator System - TO2D',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Browser Automation Is an Operator System',
    description: 'Operator intent × dynamic environments × model behavior.',
    images: ['/images/og/browser-agents-cover.png'],
  },
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
          This makes them a useful application layer for the broader framework:
        </p>
        <div className="border border-[#E8E8E6] bg-[#FBFBF8] p-4 md:p-6 overflow-x-auto">
          <svg viewBox="0 0 640 520" className="w-full min-w-[320px]" role="img" aria-label="Operator system architecture for browser automation">
            <defs>
              <pattern id="browser-agent-grid" width="24" height="24" patternUnits="userSpaceOnUse">
                <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#EFEFEA" strokeWidth="1" />
              </pattern>
            </defs>
            <rect x="0" y="0" width="640" height="520" fill="url(#browser-agent-grid)" />

            <rect x="240" y="24" width="160" height="52" rx="4" fill="#FFFFFF" stroke="#DADADA" />
            <text x="320" y="47" textAnchor="middle" fill="#1A1A1A" fontSize="15" fontFamily="ui-serif, Georgia, serif">Operator</text>
            <text x="320" y="63" textAnchor="middle" fill="#8C8C8C" fontSize="10" fontFamily="ui-monospace, monospace">defines goal</text>

            <line x1="320" y1="76" x2="320" y2="104" stroke="#B5B5B5" strokeWidth="1.5" />
            <polygon points="320,111 315,102 325,102" fill="#B5B5B5" />

            <rect x="160" y="118" width="320" height="110" rx="4" fill="#FFFFFF" stroke="#DADADA" />
            <text x="320" y="145" textAnchor="middle" fill="#1A1A1A" fontSize="16" fontFamily="ui-serif, Georgia, serif">Automation System</text>
            <text x="320" y="162" textAnchor="middle" fill="#8C8C8C" fontSize="10" fontFamily="ui-monospace, monospace">computer-use model loop</text>
            <text x="320" y="196" textAnchor="middle" fill="#2A2A2A" fontSize="14" fontFamily="ui-monospace, monospace">observe → reason → act</text>
            <line x1="210" y1="210" x2="430" y2="210" stroke="#E2E2DC" strokeWidth="1" />

            <line x1="320" y1="228" x2="320" y2="260" stroke="#B5B5B5" strokeWidth="1.5" />
            <polygon points="320,267 315,258 325,258" fill="#B5B5B5" />

            <rect x="150" y="274" width="340" height="118" rx="58" fill="#F7F7F3" stroke="#DADADA" />
            <text x="320" y="305" textAnchor="middle" fill="#1A1A1A" fontSize="16" fontFamily="ui-serif, Georgia, serif">Website Environment</text>
            <text x="320" y="322" textAnchor="middle" fill="#8C8C8C" fontSize="10" fontFamily="ui-monospace, monospace">dynamic / changing</text>
            <text x="320" y="350" textAnchor="middle" fill="#5A5A5A" fontSize="11" fontFamily="ui-monospace, monospace">layout changes · navigation shifts · branching flows</text>
            <text x="320" y="367" textAnchor="middle" fill="#5A5A5A" fontSize="11" fontFamily="ui-monospace, monospace">elements move · data appears in new places</text>

            <line x1="320" y1="392" x2="320" y2="422" stroke="#B5B5B5" strokeWidth="1.5" />
            <polygon points="320,429 315,420 325,420" fill="#B5B5B5" />

            <rect x="200" y="440" width="240" height="48" rx="4" fill="#FFFFFF" stroke="#DADADA" />
            <text x="320" y="459" textAnchor="middle" fill="#1A1A1A" fontSize="14" fontFamily="ui-serif, Georgia, serif">Deterministic Boundary</text>
            <text x="320" y="476" textAnchor="middle" fill="#8C8C8C" fontSize="10" fontFamily="ui-monospace, monospace">validation / invariants / structured outputs</text>

            <line x1="440" y1="464" x2="520" y2="464" stroke="#B5B5B5" strokeWidth="1.5" />
            <polygon points="527,464 518,459 518,469" fill="#B5B5B5" />
            <text x="578" y="459" textAnchor="middle" fill="#1A1A1A" fontSize="14" fontFamily="ui-serif, Georgia, serif">System Output</text>
          </svg>
        </div>
        <p className="text-xs leading-relaxed text-[#8C8C8C]">
          Browser automation is an operator system interacting with a dynamic environment. Computer-use models allow the system to observe, reason, and act within that environment while deterministic constraints ensure reliable outputs.
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
        <h2 className="text-xl font-light text-[#1A1A1A]">Determinism Examples vs Architectural Determinism</h2>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Techniques like navigating directly through URLs are often useful in browser automation.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Instead of replaying long interaction chains, a system can reason about the structure of a website and move directly to pages that contain the required information.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          This can make automations significantly faster and more reliable.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          In many cases this is an example of deterministic behavior emerging from the structure of the environment.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          However, these improvements often address only part of the problem.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          They improve execution within a specific workflow, but they do not necessarily solve the broader architectural challenge.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          If the system has not clearly separated the operator, the environment, and the model, it can still run into the same underlying issues.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Many automation systems initially provide value through optimizations like this. But as soon as the operator needs to handle new workflows, unexpected page states, or domain-specific variations, the system can run into the same structural limits again.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          The core issue is not simply speed or navigation efficiency.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          It is whether the architecture clearly distinguishes:
        </p>
        <ul className="space-y-3 text-sm text-[#5A5A5A] list-disc ml-6">
          <li>the operator defining goals</li>
          <li>the environment being navigated</li>
          <li>the model reasoning between the two</li>
        </ul>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          When these layers are separated, deterministic strategies like URL navigation become powerful tools inside the system rather than fragile shortcuts.
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

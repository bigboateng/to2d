import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Operator Systems',
  description: 'Why computer-use models make sense for browser automation and why reliable systems must represent both the operator and the environment clearly.',
  openGraph: {
    title: 'Browser Automation Is an Operator System',
    description: 'Operator intent, dynamic environments, and model behavior.',
    type: 'article',
    images: [
      {
        url: '/images/og/operator-systems-cover.png',
        width: 1200,
        height: 630,
        alt: 'Browser Automation Is an Operator System - TO2D',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Browser Automation Is an Operator System',
    description: 'Operator intent, dynamic environments, and model behavior.',
    images: ['/images/og/operator-systems-cover.png'],
  },
}

export default function SystemsPage() {
  const references = [
    { href: '/real-world-dynamics', label: 'Real-World Dynamics' },
    { href: '/language-models/domain-operators', label: 'Domain Operators' },
    { href: '/correctness/deterministic-boundaries', label: 'Deterministic Boundaries' },
    { href: '/systems/browser-agents', label: 'Browser Agents' },
  ]

  return (
    <div className="max-w-3xl space-y-14">
      <header className="space-y-4 border-b border-[#E8E8E6] pb-8">
        <p className="text-xs uppercase tracking-[0.2em] text-[#8C8C8C] font-mono">Applications</p>
        <h1 className="text-3xl md:text-4xl font-light tracking-tight leading-tight text-[#1A1A1A]">
          Operator Systems
        </h1>
        <div className="space-y-1 pt-1">
          <p className="text-[10px] uppercase tracking-[0.2em] text-[#8C8C8C] font-mono">TO2D System Model</p>
          <p className="text-sm text-[#5A5A5A]">Revision 0.3 — Research Draft</p>
          <p className="text-xs text-[#8C8C8C] font-mono">March 2026</p>
        </div>
      </header>

      <section className="space-y-5">
        <div className="border border-[#E8E8E6] bg-[#FBFBF8] p-4 md:p-6 overflow-x-auto">
          <svg viewBox="0 0 640 520" className="w-full min-w-[320px]" role="img" aria-label="Operator system architecture for browser automation">
            <defs>
              <pattern id="operator-system-grid" width="24" height="24" patternUnits="userSpaceOnUse">
                <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#EFEFEA" strokeWidth="1" />
              </pattern>
            </defs>
            <rect x="0" y="0" width="640" height="520" fill="url(#operator-system-grid)" />

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
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Browser automation sits in an unusual category of software.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Unlike most applications, it does not operate inside a stable and predictable environment. Instead it interacts with systems that constantly change.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Websites evolve continuously:
        </p>
        <ul className="space-y-2 text-sm text-[#5A5A5A] list-disc ml-6">
          <li>layouts change</li>
          <li>navigation paths shift</li>
          <li>flows branch differently</li>
          <li>elements move or disappear</li>
          <li>data appears in different places</li>
        </ul>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          If an automation system cannot absorb those changes, it will eventually stop working.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          This is the fundamental reason browser automation systems tend to become brittle over time.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-light text-[#1A1A1A]">The Limits of Traditional Automation</h2>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Historically browser automation relied on scripts.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Developers defined the exact sequence of actions required to complete a task:
        </p>
        <pre className="bg-[#FFFFFF] border border-[#DADADA] p-4 overflow-x-auto text-sm font-mono text-[#2A2A2A]">
{`navigate → click → extract → continue`}
        </pre>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          When something broke, the script was updated.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Over time this produced a familiar cycle:
        </p>
        <ul className="space-y-2 text-sm text-[#5A5A5A] list-disc ml-6">
          <li>selectors break</li>
          <li>page structures change</li>
          <li>workflows collapse</li>
          <li>engineers patch the automation</li>
        </ul>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Each failure looks slightly different, but the underlying cause is usually the same.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          The system does not fully understand the environment it is operating in.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-light text-[#1A1A1A]">Defining the Solution vs Understanding the Environment</h2>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Modern automation tools provide several ways to define automations.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Some rely on prompts. Others use structured workflows. Many combine both.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          These approaches give users powerful ways to describe what they want the automation to do, and they can work extremely well for many tasks.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          However, they often share a similar focus: defining the solution rather than modeling the environment where that solution operates.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Prompts describe the task in language. Workflows describe the task procedurally.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Both approaches guide the system toward the intended behavior.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          But the environment — the structure of the website, navigation relationships, page organization, and the ways those things change — often remains implicit.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          AI can make these systems feel much more capable because models are good at handling small variations and filling in gaps.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          But the underlying challenge remains the same: the automation still depends on how well the system understands the environment it operates in.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          When the environment is not represented clearly, the system can perform well for known workflows but struggle when conditions shift.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-light text-[#1A1A1A]">Representation Is the Real Problem</h2>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          When the environment is represented poorly, the system repeatedly encounters variations of the same failure:
        </p>
        <ul className="space-y-2 text-sm text-[#5A5A5A] list-disc ml-6">
          <li>broken selectors</li>
          <li>incorrect assumptions about page structure</li>
          <li>brittle navigation logic</li>
          <li>workflows failing when layouts change</li>
        </ul>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          These appear to be different problems, but they often stem from the same issue.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          The system is operating on the wrong abstraction.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          In these systems, most failures reduce to some combination of operator ambiguity or weak environment representation.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          If the operator is unclear, the architecture does not know how to support custom goals, exceptions, or domain-specific decisions.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          If the environment is unclear, the system cannot reliably detect when something new has appeared on the page or when the workflow has shifted outside its expected path.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          This becomes especially important in real products. A system may work well for known flows, but once customers need to handle custom problems, new page states, or domain-specific variations, the architecture can hit a hard limit.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Sometimes the issue is not that the task is impossible. It is that the architecture never baked in a clear way for the operator to define or detect those new cases.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          That is why systems can look successful for a long time and still end up forcing major product changes or even pivots.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          The bottleneck is often not execution itself. It is that the system was never structured to absorb new operator-defined problems or newly emerging states in the environment.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Once the operator and environment are both made explicit, entire categories of problems disappear.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Problems that previously required complex workarounds often become much simpler.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-light text-[#1A1A1A]">Operator Systems</h2>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Browser automation belongs to a class of systems that can be described as operator systems.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          In traditional software the structure is straightforward:
        </p>
        <pre className="bg-[#FFFFFF] border border-[#DADADA] p-4 overflow-x-auto text-sm font-mono text-[#2A2A2A]">
{`user problem
↓
developer defines solution
↓
software executes solution`}
        </pre>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          The developer effectively acts as the operator. They understand the problem and encode the solution directly into the system.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          With AI agents and browser automation the structure changes.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          The system no longer delivers a fixed solution. Instead it enables the operator to define solutions dynamically.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          The operator may be:
        </p>
        <ul className="space-y-2 text-sm text-[#5A5A5A] list-disc ml-6">
          <li>a user giving instructions</li>
          <li>an operations team running automations</li>
          <li>another system invoking the agent</li>
        </ul>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          The key difference is that the system now operates under two sources of uncertainty:
        </p>
        <ul className="space-y-2 text-sm text-[#5A5A5A] list-disc ml-6">
          <li>real-world environment dynamics</li>
          <li>probabilistic model behavior</li>
        </ul>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          The system must support the operator while navigating both.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-light text-[#1A1A1A]">The Operator–Environment Split Is Part of the Solution</h2>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          In systems like browser automation, identifying the operator and the environment is not just analysis.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          It is often the beginning of the solution.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Many automation problems appear technical but remain unsolved because these two elements were never made explicit.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          If the operator is unclear, the system does not know whose goals or decisions it should support.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          If the environment is unclear, the system reasons over the wrong abstraction and repeatedly encounters different versions of the same failure.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Once the system clearly separates:
        </p>
        <ul className="space-y-2 text-sm text-[#5A5A5A] list-disc ml-6">
          <li>who defines the goal</li>
          <li>what environment is being operated in</li>
          <li>what changes can occur during execution</li>
        </ul>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          the solution path usually becomes clearer.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-light text-[#1A1A1A]">Success Without Computer-Use Systems</h2>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          It is possible to achieve significant success in browser automation without computer-use models.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Many companies run millions of automations every day using traditional approaches. Carefully written scripts, structured prompts, and domain-specific heuristics can perform extremely well for known workflows.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          These systems work because they operate inside tightly constrained paths.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          As long as the automation stays within those assumptions, the system can be extremely reliable.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          But the architecture is effectively walking a thin line.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Once the automation steps outside those assumptions — a navigation path changes, a layout shifts, or a new workflow appears — reliability can collapse quickly.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          The system was never designed to absorb environmental change. It was designed to succeed within a specific corridor of behavior.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Many large-scale automation systems are stable not because they solved the environment problem, but because they carefully avoid leaving the paths where the environment behaves predictably.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-light text-[#1A1A1A]">Why Computer-Use Models Fit This Problem</h2>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Computer-use models naturally align with the structure of operator systems.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Rather than executing rigid scripts, they operate through a continuous loop:
        </p>
        <pre className="bg-[#FFFFFF] border border-[#DADADA] p-4 overflow-x-auto text-sm font-mono text-[#2A2A2A]">
{`observe → reason → act`}
        </pre>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          The system observes the environment, interprets what it sees, determines the next action, and adapts when conditions change.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          This allows automation systems to continue operating even as websites evolve.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Without the ability to interpret and absorb environmental change, browser automation eventually reaches a limit.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-light text-[#1A1A1A]">Turning Websites Into Navigable Systems</h2>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Once the operator and the environment are separated, browser automation changes shape.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          A computer-use model no longer has to solve the task only by replaying local actions on the current page. It can operate over a growing representation of the environment.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Websites already expose useful structure:
        </p>
        <ul className="space-y-3 text-sm text-[#5A5A5A] list-disc ml-6">
          <li>URL hierarchies</li>
          <li>navigation paths</li>
          <li>relationships between pages</li>
          <li>semantic organization of information</li>
        </ul>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Once that structure is captured, it can be fed back into the system as environment state rather than rediscovered through repeated interaction.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          This creates options.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Instead of relying only on step-by-step computer use, the system can:
        </p>
        <ul className="space-y-3 text-sm text-[#5A5A5A] list-disc ml-6">
          <li>discover URLs and page relationships once</li>
          <li>reason over those discovered paths</li>
          <li>navigate directly to relevant pages</li>
          <li>switch between direct navigation and interactive control depending on the task</li>
        </ul>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          That is the important shift.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          The model remains the operator, but the environment is no longer treated as an opaque surface. It becomes a structured system the operator can act over.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          When that happens, many automations become faster and more deterministic, not because the model changed, but because the environment was separated, represented, and reused.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-light text-[#1A1A1A]">Determinism Still Matters</h2>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Dynamic environments and probabilistic models do not eliminate the need for determinism.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Reliable systems still require deterministic guarantees.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          In practice this means separating generation from acceptance.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          The model proposes candidate actions or outputs. The surrounding system determines whether those actions are acceptable.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          When these responsibilities are separated, the system can enforce deterministic constraints even while operating in a changing environment.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          The model remains probabilistic, but the system behaves in a stable and predictable way.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-light text-[#1A1A1A]">A Pattern Across Modern AI Systems</h2>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Browser automation reveals something broader about modern AI systems.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Many agent systems operate inside dynamic environments, not fixed APIs.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          In these systems reliability does not come from rigid scripting.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          It comes from structuring the system so that:
        </p>
        <ul className="space-y-2 text-sm text-[#5A5A5A] list-disc ml-6">
          <li>the environment is represented correctly</li>
          <li>the operator is clearly defined</li>
          <li>the system can reason about the environment</li>
          <li>deterministic constraints shape acceptable outcomes</li>
        </ul>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          When these pieces exist together, automation becomes significantly more reliable.
        </p>
      </section>

      <section className="space-y-5 border-t border-[#E8E8E6] pt-10">
        <h2 className="text-xl font-light text-[#1A1A1A]">Conclusion</h2>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Browser automation is not simply a tooling problem.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          It represents a broader class of software where systems must operate inside changing environments.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Computer-use models work well here because they behave like adaptive operators.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          They observe the environment, reason about it, and adjust actions when conditions change.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Without that capability automation systems eventually become blocked.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          With it, systems can continue operating even as the environment evolves.
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

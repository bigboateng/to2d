export default function PlyhealthFirstTrueInhouseAutomationSystemPage() {
  return (
    <div className="space-y-12 max-w-3xl">
      <section>
        <h1 className="text-3xl font-thin tracking-tight mb-4">
          Plyhealth — The First True In-House Automation System
        </h1>
        <p className="text-white/50 text-sm mb-8">
          Where technical stability met organizational fragility
        </p>
      </section>

      <article className="prose prose-invert max-w-none">
        <div className="text-white/70 text-sm leading-relaxed space-y-6">
          <p>
            After consulting, I joined Plyhealth, a healthcare startup operating almost entirely on portal workflows.
          </p>
          
          <p>
            This was the first time I built an automation system in-house instead of inheriting one.
          </p>
          
          <p>
            Plyhealth used Browserbase, but it wasn't yet clear what problems browser agents actually solved — or what new problems they created.
          </p>
          
          <p>
            Because of my background, I knew two things:
          </p>
          
          <ul className="text-white/60 space-y-2 ml-6 list-disc">
            <li>Agents alone don't solve reliability.</li>
            <li>If something breaks, you need full visibility into the system.</li>
          </ul>
          
          <p>
            So I built the first automation end-to-end:
          </p>
          
          <ul className="text-white/60 space-y-2 ml-6 list-disc">
            <li>a fully controlled agent layer</li>
            <li>built on top of Browserbase</li>
            <li>structured like the early open-source systems</li>
            <li>but with complete observability</li>
            <li>and tools to isolate state drift, environment mismatch, and flow instabilities</li>
          </ul>
          
          <p>
            In other words:
          </p>
          
          <p className="text-white/80 italic">
            I built an agent system I could actually debug — a real automation engine, not a demo.
          </p>
          
          <p className="text-white/80 font-medium">
            We went into production and ran six months straight with no incidents.
          </p>
          
          <p>
            Not luck — structure.
          </p>
          
          <h2 className="text-xl font-thin text-white/90 mt-8 mb-4">Where Things Broke: Organizational Dynamics</h2>
          
          <p>
            The technical system held up.
          </p>
          
          <p>
            The organizational system didn't.
          </p>
          
          <p>
            The original CTO departed.
          </p>
          
          <p>
            A new CTO stepped in with zero understanding of:
          </p>
          
          <ul className="text-white/60 space-y-2 ml-6 list-disc">
            <li>real-world automation failure modes</li>
            <li>state continuity</li>
            <li>environment dynamics</li>
            <li>bot detection behavior</li>
            <li>why our system worked at all</li>
            <li>or the 6 years of expertise the architecture was built on</li>
          </ul>
          
          <p>
            New engineers joined and wanted to swap in different frameworks with no domain understanding.
          </p>
          
          <p className="text-white/80 font-medium">
            That's when the real lesson hit:
          </p>
          
          <p className="text-white/80 italic">
            Automation infrastructure cannot be built by roadmap.
          </p>
          
          <p className="text-white/80 italic">
            It must be built by domain.
          </p>
          
          <p>
            A roadmap assumes:
          </p>
          
          <ul className="text-white/60 space-y-2 ml-6 list-disc">
            <li>predictable tasks</li>
            <li>linear implementation</li>
            <li>modular components</li>
            <li>interchangeable tools</li>
          </ul>
          
          <p>
            Automation is none of those things.
          </p>
          
          <p>
            Automation is:
          </p>
          
          <ul className="text-white/60 space-y-2 ml-6 list-disc">
            <li>stateful</li>
            <li>environmental</li>
            <li>nonlinear</li>
            <li>failure-driven</li>
            <li>dynamic</li>
            <li>dependent on invisible constraints</li>
          </ul>
          
          <p>
            If you build it by roadmap, it collapses the moment the org shifts.
          </p>
          
          <p>
            The only way to keep the system reliable is to understand:
          </p>
          
          <ul className="text-white/60 space-y-2 ml-6 list-disc">
            <li>what actually fails</li>
            <li>why it fails</li>
            <li>how to detect it early</li>
            <li>how to preserve state across long-lived flows</li>
            <li>where identity mismatches occur</li>
            <li>how browser agents behave under stress</li>
            <li>what signals risk engines respond to</li>
            <li>and how to architect invariants that hold under change</li>
          </ul>
          
          <p className="text-white/80 font-medium">
            Plyhealth made it clear:
          </p>
          
          <p className="text-white/60 italic">
            Automation fails for organizational reasons long before it fails for technical ones.
          </p>
          
          <p className="text-white/80 font-medium">
            This was the final trigger that made BrowserState inevitable.
          </p>
          
          <p>
            Because if the automation layer is going to survive:
          </p>
          
          <ul className="text-white/60 space-y-2 ml-6 list-disc">
            <li>team changes,</li>
            <li>leadership changes,</li>
            <li>framework swaps,</li>
            <li>new engineers,</li>
            <li>new browsers,</li>
            <li>new agents,</li>
            <li>and new environments,</li>
          </ul>
          
          <p className="text-white/80 italic">
            …then the only correct foundation is state.
          </p>
          
          <p className="text-white/80 italic">
            Everything else is optional.
          </p>
        </div>
      </article>

      <section className="text-white/40 text-sm border-t border-white/10 pt-6">
        <a href="/automations" className="hover:text-white/60 transition-colors">
          ← Back to Automations
        </a>
      </section>
    </div>
  )
}


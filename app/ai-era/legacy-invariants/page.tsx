export default function LegacyInvariantsPage() {
  return (
    <div className="space-y-12 max-w-3xl">
      <section>
        <h1 className="text-3xl font-thin tracking-tight mb-4">
          Legacy Invariants: One Quiet Reason AI-Driven Automation Breaks Unexpectedly
        </h1>
        <p className="text-white/50 text-sm mb-8">
          Nov 26, 2025
        </p>
      </section>

      <article className="prose prose-invert max-w-none">
        <div className="text-white/70 text-sm leading-relaxed space-y-6">
          <p>
            When people imagine AI-driven browser automation, they picture something simple:
            an agent sees a page, clicks the right buttons, fills out a form, and everything works.
          </p>
          
          <p>
            In reality, especially when dealing with government or older enterprise systems, automations tend to break in ways that feel random and mysterious — even when the agent is doing everything "correctly."
          </p>
          
          <p>
            This week, while working on a state government workflow, I ran into a good example of this.
          </p>
          
          <p>
            It wasn't bot detection.
          </p>
          
          <p>
            It wasn't a broken selector.
          </p>
          
          <p>
            It wasn't a prompt issue.
          </p>
          
          <p className="text-white/80 font-medium">
            It was a hidden UI invariant left over from early 2010s web frameworks.
          </p>
          
          <p>
            And it's a pattern that shows up far more often than people expect.
          </p>
          
          <h2 className="text-xl font-thin text-white/90 mt-8 mb-4">Legacy systems often depend on invisible assumptions</h2>
          
          <p>
            Many public-sector and enterprise portals were built more than a decade ago, on stacks like:
          </p>
          
          <ul className="text-white/60 space-y-2 ml-6 list-disc">
            <li>Oracle ADF</li>
            <li>IBM WebSEAL</li>
            <li>JSF / ADF Faces</li>
            <li>jQuery-driven AJAX chains</li>
            <li>Early enterprise UI kits</li>
          </ul>
          
          <p>
            These frameworks look like normal websites, but behind the scenes they depend on interaction patterns that are only natural when a human is at the keyboard.
          </p>
          
          <p>
            Things like:
          </p>
          
          <ul className="text-white/60 space-y-2 ml-6 list-disc">
            <li>a pause after focusing a field</li>
            <li>spacing between dropdown interactions</li>
            <li>blur events firing before validation</li>
            <li>scroll movement before loading a section</li>
            <li>human-speed typing cadence</li>
            <li>delay before AJAX triggers</li>
          </ul>
          
          <p className="text-white/80 italic">
            These are not bugs. They're assumptions from another era of web development.
          </p>
          
          <p>
            And when those assumptions are violated, nothing works — even though the UI looks totally normal.
          </p>
          
          <h2 className="text-xl font-thin text-white/90 mt-8 mb-4">Timing is one example of an invariant that breaks AI automation</h2>
          
          <p>
            In one of the workflows we automated, a dropdown selection was supposed to trigger a server update and populate the next field.
          </p>
          
          <p>
            Locally, the automation worked perfectly.
          </p>
          
          <p>
            In a remote browser environment, nothing happened.
          </p>
          
          <p>
            After digging deeper, it turned out the system required a human-like 500–1000ms pause between:
          </p>
          
          <ol className="text-white/60 space-y-1 ml-6 list-decimal text-sm">
            <li>focusing the dropdown</li>
            <li>selecting the option</li>
            <li>blurring the field</li>
          </ol>
          
          <p>
            Without those pauses, the internal JavaScript didn't fire the cascade of AJAX requests.
          </p>
          
          <p>
            AI agents (and modern automation frameworks) interact far too quickly — often in under 10ms.
          </p>
          
          <p>
            To the legacy framework, the sequence looked "invalid," so the logic simply didn't run.
          </p>
          
          <p>
            Again, this isn't bot detection.
          </p>
          
          <p>
            It's not broken UI.
          </p>
          
          <p className="text-white/80 italic">
            It's just an old assumption baked into the system.
          </p>
          
          <p>
            Timing is just one example — but it's a very common one.
          </p>
          
          <h2 className="text-xl font-thin text-white/90 mt-8 mb-4">AI agents expose these issues more than scripts do</h2>
          
          <p>
            Traditional automation scripts often succeed by accident:
          </p>
          
          <ul className="text-white/60 space-y-2 ml-6 list-disc">
            <li>engineers test manually and introduce natural delays</li>
            <li>they use slowMo in local browsers</li>
            <li>their scripts click slower than they realize</li>
            <li>these "imperfections" happen to satisfy old frameworks</li>
          </ul>
          
          <p>
            AI agents, on the other hand:
          </p>
          
          <ul className="text-white/60 space-y-2 ml-6 list-disc">
            <li>run at machine speed</li>
            <li>don't accidentally wait</li>
            <li>don't hesitate</li>
            <li>don't generate "noise"</li>
            <li>don't trigger blur/focus chains unless instructed</li>
          </ul>
          
          <p className="text-white/80 font-medium">
            AI is too clean.
          </p>
          
          <p>
            And that reveals invariants that normal RPA never noticed.
          </p>
          
          <h2 className="text-xl font-thin text-white/90 mt-8 mb-4">Why architecture matters more than scripts</h2>
          
          <p>
            Issues like this are exactly why we're building a layered architecture instead of one-off scripts.
          </p>
          
          <p>
            Script-first automation breaks as soon as a hidden invariant is violated.
          </p>
          
          <p>
            A system that understands:
          </p>
          
          <ul className="text-white/60 space-y-2 ml-6 list-disc">
            <li>domain data</li>
            <li>UI behavior</li>
            <li>diagnostics</li>
            <li>human-like timing</li>
            <li>environment differences</li>
          </ul>
          
          <p>
            …can adapt dynamically, because every assumption is made explicit.
          </p>
          
          <p>
            This is the foundation for our 0-Context Architecture:
          </p>
          
          <p className="text-white/80 italic">
            separate what the agent needs to do from the invisible rules of the environment it runs in.
          </p>
          
          <p>
            Once those rules are surfaced, everything becomes more stable and more predictable.
          </p>
          
          <h2 className="text-xl font-thin text-white/90 mt-8 mb-4">Closing Thought</h2>
          
          <p>
            Timing alone isn't "the" reason AI automations fail — but it's a perfect illustration of a deeper truth:
          </p>
          
          <p className="text-white/80 italic">
            Legacy systems contain invisible assumptions that humans satisfy naturally, and AI violates instantly.
          </p>
          
          <p>
            Understanding and modeling those invariants is what separates real automation engineering from "just running a script."
          </p>
          
          <p className="text-white/80 font-medium">
            This is why modern AI automation needs systems thinking, not just prompting.
          </p>
        </div>
      </article>

      <section className="text-white/40 text-sm border-t border-white/10 pt-6">
        <a href="/ai-era" className="hover:text-white/60 transition-colors">
          ← Back to AI Era
        </a>
      </section>
    </div>
  )
}


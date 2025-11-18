import Image from 'next/image'

export default function MiraTheSlackPrototypePage() {
  return (
    <div className="space-y-12 max-w-3xl">
      <section>
        <h1 className="text-3xl font-thin tracking-tight mb-4">
          Mira — The Slack Prototype That Exposed the Real Gaps
        </h1>
        <p className="text-white/50 text-sm mb-8">
          Where production requirements met demo-grade agents
        </p>
      </section>

      <article className="prose prose-invert max-w-none">
        <div className="text-white/70 text-sm leading-relaxed space-y-6">
          <p>
            After mapping out what a real automation architecture needed,
          </p>
          
          <p>
            I built Mira — a Slack-native automation product designed to run real browser agents behind the scenes.
          </p>
          
          <div className="my-8">
            <a 
              href="https://mirahq.ai/" 
              className="text-white/40 hover:text-white/60 transition-colors text-xs underline"
              target="_blank" 
              rel="noopener noreferrer"
            >
              mirahq.ai
            </a>
          </div>
          
          <p>
            This wasn't a demo.
          </p>
          
          <p>
            It wasn't an agent playground.
          </p>
          
          <p>
            It was a production-style system where users could:
          </p>
          
          <ul className="text-white/60 space-y-2 ml-6 list-disc">
            <li>trigger workflows from Slack</li>
            <li>send human feedback into the agent</li>
            <li>receive real-time UI diffs</li>
            <li>approve decisions</li>
            <li>escalate failures</li>
            <li>and watch the automation recover intelligently</li>
          </ul>
          
          <p className="text-white/80 font-medium">
            The idea was simple:
          </p>
          
          <p className="text-white/60 italic">
            What would automation look like if real users could collaborate with agents the same way they collaborate with teammates?
          </p>
          
          <p>
            I wanted to see if the existing browser agents could support this.
          </p>
          
          <p>
            They couldn't.
          </p>
          
          <h2 className="text-xl font-thin text-white/90 mt-8 mb-4">Where the Industry Broke Instantly</h2>
          
          <p>
            The moment Mira became real —
          </p>
          
          <p>
            a system with:
          </p>
          
          <ul className="text-white/60 space-y-2 ml-6 list-disc">
            <li>Slack as the control plane</li>
            <li>browser agents as actuators</li>
            <li>BrowserState as the identity layer</li>
            <li>task frameworks</li>
            <li>human-in-loop validation</li>
            <li>tool-calling pathways</li>
            <li>real error signaling</li>
            <li>retry logic</li>
            <li>long-lived sessions</li>
          </ul>
          
          <p>
            — every browser agent on the market fell apart.
          </p>
          
          <figure className="my-10">
            <div className="border border-white/20 rounded overflow-hidden bg-white/5 p-4">
              <Image
                src="/images/automations/architecture.PNG"
                alt="Mira Architecture Diagram"
                width={1920}
                height={1080}
                className="w-full h-auto"
                priority
              />
            </div>
            <figcaption className="text-white/40 text-xs mt-3 text-center">
              Mira's architecture: Config layer → Automation infra → Browser agent layer → Human-in-the-loop
            </figcaption>
          </figure>
          
          <p className="text-white/80 font-medium">
            Why?
          </p>
          
          <p>
            Because they were never built for:
          </p>
          
          <ul className="text-white/60 space-y-2 ml-6 list-disc">
            <li>multi-modal control (Slack → backend → browser agent)</li>
            <li>state-aware reasoning</li>
            <li>multi-step workflows</li>
            <li>tool-calling loops</li>
            <li>incremental UI extraction</li>
            <li>real-time error feedback</li>
            <li>external orchestration</li>
          </ul>
          
          <p>
            Existing agents assume:
          </p>
          
          <p className="text-white/60 italic ml-4">
            "Give me a prompt, I'll click around."
          </p>
          
          <p>
            Mira required:
          </p>
          
          <p className="text-white/60 italic ml-4">
            "Hold state.<br />
            Maintain identity.<br />
            Respond to Slack.<br />
            Surface signals.<br />
            Coordinate with humans.<br />
            Don't drift.<br />
            Don't lose session.<br />
            Don't break the fraud model.<br />
            And stay predictable for hours or days."
          </p>
          
          <p>
            No agent could do this.
          </p>
          
          <h2 className="text-xl font-thin text-white/90 mt-8 mb-4">The Mira Insight — You Can't Build Real Products on Demo Agents</h2>
          
          <p>
            Mira exposed something fundamental:
          </p>
          
          <p className="text-white/80 italic">
            Browser agents today are not automation platforms.<br />
            They are UI drivers with an LLM attached.
          </p>
          
          <p>
            They cannot:
          </p>
          
          <ul className="text-white/60 space-y-2 ml-6 list-disc">
            <li>hold long-lived state</li>
            <li>maintain identity across steps</li>
            <li>survive fraud-risk transitions</li>
            <li>integrate with product-grade workflows</li>
            <li>coordinate with human operators</li>
            <li>operate under supervision</li>
            <li>be controlled programmatically at scale</li>
          </ul>
          
          <p>
            The second you try to build an actual product —
          </p>
          
          <p>
            not a demo —
          </p>
          
          <p>
            the architecture collapses.
          </p>
          
          <p className="text-white/80 font-medium">
            This was the turning point.
          </p>
          
          <p>
            Mira wasn't a failure.
          </p>
          
          <p>
            Mira was the diagnostic tool that revealed:
          </p>
          
          <p className="text-white/80 italic">
            The agent layer needs to be rebuilt from the ground up
          </p>
          
          <p className="text-white/60 ml-4">
            — around state, identity, feedback, and control theory.
          </p>
          
          <p>
            This is where everything converged into your broader vision:
          </p>
          
          <ul className="text-white/60 space-y-2 ml-6 list-disc">
            <li>BrowserState = identity + continuity</li>
            <li>Mira = surface-level control plane</li>
            <li>To2D = the reasoning + transfer architecture underneath</li>
            <li>The agent = the actuator</li>
            <li>The system = the product</li>
          </ul>
          
          <p className="text-white/80 font-medium">
            Mira is what made that model undeniable.
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


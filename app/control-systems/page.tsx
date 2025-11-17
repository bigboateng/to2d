export default function ControlSystemsPage() {
  return (
    <div className="space-y-12 max-w-3xl">
      <section>
        <h1 className="text-3xl font-thin tracking-tight mb-4">
          Control Systems
        </h1>
        <p className="text-white/50 text-sm mb-8">
          The foundation layer
        </p>
      </section>

      <section className="space-y-6">
        <div className="border border-white/10 p-6">
          <h2 className="text-xl font-thin mb-3">Why control systems matter</h2>
          <div className="text-white/60 text-sm leading-relaxed space-y-3">
            <p>Control systems don't just teach equations — they rewire how I see cause, effect, and stability.</p>
            <p>They trained me to look at:</p>
            <ul className="text-white/50 space-y-1 ml-4">
              <li>Signals instead of events</li>
              <li>Feedback instead of reactions</li>
              <li>Error as information, not failure</li>
              <li>Dynamics instead of snapshots</li>
            </ul>
            <p>Once I internalized that worldview, every complex system started to look tractable.</p>
          </div>
        </div>

        <div className="border border-white/10 p-6">
          <h2 className="text-xl font-thin mb-3">PID as intuition</h2>
          <div className="text-white/60 text-sm leading-relaxed space-y-3">
            <p>PID wasn't a loop to me. It was the first time I saw laws of adjustment that work everywhere.</p>
            <ul className="text-white/50 space-y-1 ml-4">
              <li>P = how hard you push</li>
              <li>I = what the system has accumulated</li>
              <li>D = what the system is about to do</li>
            </ul>
            <p>At some point it stopped feeling like engineering and started feeling like intuition.</p>
            <p className="text-white/50">Most people learn PID. I absorbed it.</p>
          </div>
        </div>

        <div className="border border-white/10 p-6">
          <h2 className="text-xl font-thin mb-3">Fuzzy logic & nonlinear control</h2>
          <div className="text-white/60 text-sm leading-relaxed space-y-3">
            <p>I never believed the world was linear. Fuzzy logic taught me that ambiguity is not noise — it's structure.</p>
            <p>Nonlinear systems aren't problems. They're signals that the model needs a new domain, not a new parameter.</p>
            <p className="text-white/50">This was my first exposure to control theories that don't restrict themselves to clean equations. Real systems rarely do.</p>
          </div>
        </div>

        <div className="border border-white/10 p-6">
          <h2 className="text-xl font-thin mb-3">State-space thinking</h2>
          <div className="text-white/60 text-sm leading-relaxed space-y-3">
            <p>State-space models were the first time I realized problems exist in multiple domains simultaneously.</p>
            <ul className="text-white/50 space-y-1 ml-4">
              <li>Position</li>
              <li>Velocity</li>
              <li>Hidden states</li>
              <li>Constraints</li>
              <li>External signals</li>
            </ul>
            <p>Once I adopted this mental model, I stopped solving problems in isolation. I started solving for the entire environment.</p>
            <p className="text-white/50">This became the seed for how I later saw AI systems.</p>
          </div>
        </div>

        <div className="border border-white/10 p-6">
          <h2 className="text-xl font-thin mb-3">Transfer-function worldview</h2>
          <div className="text-white/60 text-sm leading-relaxed space-y-3">
            <p>Transforms were never "math tricks" to me — they were shortcuts through complexity.</p>
            <p>I learned early that if I change the representation, I can collapse a messy system into something solvable.</p>
            <p>That became the backbone of how I think:</p>
            <p className="italic">if I can rewrite the problem, I can control it.</p>
            <p>That instinct followed me through aerospace, nonlinear control, fuzzy logic, and eventually into AI.</p>
          </div>
        </div>

        <div className="border border-white/10 p-6">
          <h2 className="text-xl font-thin mb-3">Control laws as reasoning</h2>
          <div className="text-white/60 text-sm leading-relaxed space-y-3">
            <p>I never separated engineering from thinking.</p>
            <ul className="text-white/50 space-y-1 ml-4">
              <li>Feedback feels like reasoning.</li>
              <li>Stability feels like correctness.</li>
              <li>Overshoot feels like overreaction.</li>
              <li>Damping feels like calibration.</li>
            </ul>
            <p>Control behavior became my mental model for how:</p>
            <ul className="text-white/50 space-y-1 ml-4">
              <li>AI explores</li>
              <li>agents adapt</li>
              <li>people adjust</li>
              <li>systems fail</li>
            </ul>
            <p>I don't "apply" control theory — I think in it.</p>
          </div>
        </div>

        <div className="border border-white/10 p-6">
          <h2 className="text-xl font-thin mb-3">State → Signal → Action loop</h2>
          <div className="text-white/60 text-sm leading-relaxed space-y-3">
            <p>This is the loop underneath everything I build.</p>
            <p>Every system I touch — rockets, agents, automations, teams — reduces to:</p>
            <ul className="text-white/50 space-y-1 ml-4">
              <li><strong className="text-white/60">State:</strong> where we are</li>
              <li><strong className="text-white/60">Signal:</strong> what changed</li>
              <li><strong className="text-white/60">Action:</strong> how we respond</li>
            </ul>
            <p>Once I started seeing the world as feedback-driven dynamics, individual tasks stopped mattering.</p>
            <p>The system around them did.</p>
            <p>That's when my thinking shifted from engineering into intelligence systems.</p>
          </div>
        </div>

        <div className="border border-white/10 p-6">
          <h2 className="text-xl font-thin mb-3">Why this became 0-context architecture</h2>
          <div className="text-white/60 text-sm leading-relaxed space-y-3">
            <p>At some point I noticed something obvious in hindsight:</p>
            <p className="italic">LLMs perform best when the problem is reframed into a domain they already fully understand.</p>
            <p>The same way nonlinear systems become solvable after a transform, LLMs become reliable when the representation matches their latent structure.</p>
            <p>0-context wasn't a hack.</p>
            <p>It was a control-systems insight expressed in AI.</p>
            <p>Once I saw that pattern, I built an entire architecture around it.</p>
          </div>
        </div>

        <div className="border border-white/10 p-6">
          <h2 className="text-xl font-thin mb-3">Where this thinking leads next</h2>
          <div className="text-white/60 text-sm leading-relaxed space-y-3">
            <p>Control systems were my entry point into:</p>
            <ul className="text-white/50 space-y-1 ml-4">
              <li>domain transfer</li>
              <li>AI reasoning</li>
              <li>automation infrastructure</li>
              <li>session state</li>
              <li>intelligent agents</li>
              <li>and the direction my work is moving now</li>
            </ul>
            <p className="mt-4">They didn't define my trajectory.</p>
            <p>They explained it.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

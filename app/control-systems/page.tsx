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
            <p>Control systems don't just teach equations — they rewire how cause, effect, and stability are perceived.</p>
            <p>They train a different way of looking:</p>
            <ul className="text-white/50 space-y-1 ml-4">
              <li>Signals instead of events</li>
              <li>Feedback instead of reactions</li>
              <li>Error as information, not failure</li>
              <li>Dynamics instead of snapshots</li>
            </ul>
            <p>Once that worldview is internalized, every complex system starts to look tractable.</p>
          </div>
        </div>

        <div className="border border-white/10 p-6">
          <h2 className="text-xl font-thin mb-3">PID as intuition</h2>
          <div className="text-white/60 text-sm leading-relaxed space-y-3">
            <p>PID isn't just a loop. It's the first encounter with laws of adjustment that work everywhere.</p>
            <ul className="text-white/50 space-y-1 ml-4">
              <li>P = how hard you push</li>
              <li>I = what the system has accumulated</li>
              <li>D = what the system is about to do</li>
            </ul>
            <p>At some point it stops feeling like engineering and starts feeling like intuition.</p>
            <p className="text-white/50">Most people learn PID. Few absorb it.</p>
          </div>
        </div>

        <div className="border border-white/10 p-6">
          <h2 className="text-xl font-thin mb-3">Fuzzy logic & nonlinear control</h2>
          <div className="text-white/60 text-sm leading-relaxed space-y-3">
            <p>The world was never linear. Fuzzy logic reveals that ambiguity is not noise — it's structure.</p>
            <p>Nonlinear systems aren't problems. They're signals that the model needs a new domain, not a new parameter.</p>
            <p className="text-white/50">Control theories that don't restrict themselves to clean equations matter most. Real systems rarely do.</p>
          </div>
        </div>

        <div className="border border-white/10 p-6">
          <h2 className="text-xl font-thin mb-3">State-space thinking</h2>
          <div className="text-white/60 text-sm leading-relaxed space-y-3">
            <p>State-space models reveal that problems exist in multiple domains simultaneously.</p>
            <ul className="text-white/50 space-y-1 ml-4">
              <li>Position</li>
              <li>Velocity</li>
              <li>Hidden states</li>
              <li>Constraints</li>
              <li>External signals</li>
            </ul>
            <p>Once this mental model is adopted, problems stop being solved in isolation. The entire environment becomes the system.</p>
            <p className="text-white/50">This becomes the seed for how AI systems are later understood.</p>
          </div>
        </div>

        <div className="border border-white/10 p-6">
          <h2 className="text-xl font-thin mb-3">Transfer-function worldview</h2>
          <div className="text-white/60 text-sm leading-relaxed space-y-3">
            <p>Transforms aren't "math tricks" — they're shortcuts through complexity.</p>
            <p>Change the representation, and a messy system collapses into something solvable.</p>
            <p>That's the backbone:</p>
            <p className="italic">rewrite the problem, control it.</p>
            <p>That instinct carries through aerospace, nonlinear control, fuzzy logic, and eventually into AI.</p>
          </div>
        </div>

        <div className="border border-white/10 p-6">
          <h2 className="text-xl font-thin mb-3">Control laws as reasoning</h2>
          <div className="text-white/60 text-sm leading-relaxed space-y-3">
            <p>Engineering and thinking aren't separate.</p>
            <ul className="text-white/50 space-y-1 ml-4">
              <li>Feedback feels like reasoning.</li>
              <li>Stability feels like correctness.</li>
              <li>Overshoot feels like overreaction.</li>
              <li>Damping feels like calibration.</li>
            </ul>
            <p>Control behavior becomes a mental model for how:</p>
            <ul className="text-white/50 space-y-1 ml-4">
              <li>AI explores</li>
              <li>agents adapt</li>
              <li>people adjust</li>
              <li>systems fail</li>
            </ul>
            <p>Control theory isn't applied — it's a way of thinking.</p>
          </div>
        </div>

        <div className="border border-white/10 p-6">
          <h2 className="text-xl font-thin mb-3">State → Signal → Action loop</h2>
          <div className="text-white/60 text-sm leading-relaxed space-y-3">
            <p>This is the loop underneath everything.</p>
            <p>Every system — rockets, agents, automations, teams — reduces to:</p>
            <ul className="text-white/50 space-y-1 ml-4">
              <li><strong className="text-white/60">State:</strong> where we are</li>
              <li><strong className="text-white/60">Signal:</strong> what changed</li>
              <li><strong className="text-white/60">Action:</strong> how we respond</li>
            </ul>
            <p>Once the world is seen as feedback-driven dynamics, individual tasks stop mattering.</p>
            <p>The system around them does.</p>
            <p>That's where thinking shifts from engineering into intelligence systems.</p>
          </div>
        </div>

        <div className="border border-white/10 p-6">
          <h2 className="text-xl font-thin mb-3">Why this became 0-context architecture</h2>
          <div className="text-white/60 text-sm leading-relaxed space-y-3">
            <p>Something obvious in hindsight:</p>
            <p className="italic">LLMs perform best when the problem is reframed into a domain they already fully understand.</p>
            <p>The same way nonlinear systems become solvable after a transform, LLMs become reliable when the representation matches their latent structure.</p>
            <p>0-context wasn't a hack.</p>
            <p>It was a control-systems insight expressed in AI.</p>
            <p>Once that pattern became visible, an entire architecture followed.</p>
          </div>
        </div>

        <div className="border border-white/10 p-6">
          <h2 className="text-xl font-thin mb-3">Where this thinking leads next</h2>
          <div className="text-white/60 text-sm leading-relaxed space-y-3">
            <p>Control systems are the entry point into:</p>
            <ul className="text-white/50 space-y-1 ml-4">
              <li>domain transfer</li>
              <li>AI reasoning</li>
              <li>automation infrastructure</li>
              <li>session state</li>
              <li>intelligent agents</li>
            </ul>
            <p className="mt-4">They don't define the trajectory.</p>
            <p>They explain it.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

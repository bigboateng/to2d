export default function SystemIdentificationPage() {
  const foundations = [
    { href: '#structural-system-identification', label: 'Structural System Identification' },
    { href: '#observability-constraints', label: 'Observability Constraints' },
    { href: '#failure-mode-modeling', label: 'Failure Mode Modeling' },
    { href: '#case-study-browser-automation', label: 'Case Study: Browser Automation' },
    { href: '#case-study-llm-structured-outputs', label: 'Case Study: LLM Structured Outputs' },
  ]

  return (
    <div className="space-y-12 max-w-3xl">
      <section>
        <p className="text-[10px] font-mono tracking-[0.2em] text-white/30 uppercase mb-6">
          Architecture
        </p>
        <h1 className="text-3xl font-thin tracking-tight mb-4">
          System Identification
        </h1>
        <p className="text-white/50 text-sm mb-8">
          Characterizing LLM behavior as dynamical systems
        </p>
      </section>

      <article className="prose prose-invert max-w-none">
        <div className="text-white/70 text-sm leading-relaxed space-y-6">

          <p>
            This didn't start as a study of system identification.
          </p>
          <p>
            It started as solving problems that shouldn't have worked.
          </p>
          <p className="text-white/50">
            Browser automation in hostile environments.
            Bot detection across shifting proxies.
            APIs that weren't documented.
            Language models that "mostly" worked but failed unpredictably.
          </p>
          <p>
            At first it felt like debugging.
          </p>
          <p>
            Then it felt like chaos.
          </p>
          <p>
            Eventually the realization landed: this wasn't debugging bugs.
            This was identifying systems.
          </p>

          <h2 className="text-xl font-thin text-white/90 mt-12 mb-4">Automation is a noisy environment</h2>

          <p>
            A login failing doesn't mean the code is wrong.
            A model hallucinating doesn't mean the prompt is wrong.
            A proxy behaving differently in region A vs B doesn't mean the infrastructure is broken.
          </p>
          <p className="text-white/80 font-medium">
            Most surface failures are symptoms of hidden structure.
          </p>
          <p>
            If every issue is treated as local, the noise is overwhelming.
            Step back and model the system, and entire classes of problems disappear.
          </p>
          <p>
            That was the shift.
          </p>

          <h2 className="text-xl font-thin text-white/90 mt-12 mb-4">The method</h2>

          <p>
            No access to internal weights.
            No control over third-party systems.
            No assumption of stability.
          </p>
          <p>
            So the approach became unconscious before it became formal:
          </p>
          <ul className="text-white/60 space-y-2 ml-6 list-disc">
            <li>Inject inputs deliberately.</li>
            <li>Observe outputs systematically.</li>
            <li>Map behavioral regions.</li>
            <li>Identify boundaries where the system broke.</li>
            <li>Design constraints around those boundaries.</li>
          </ul>
          <p className="text-white/80 font-medium">
            That is system identification.
          </p>
          <p>
            Not parameter estimation. Structural identification under uncertainty.
          </p>

          <h2 className="text-xl font-thin text-white/90 mt-12 mb-4">The pattern existed earlier</h2>

          <p className="text-white/50">
            End-to-end encryption work at Google.
            Indoor navigation prototyping.
            Search feature implementation.
            Control systems projects in aerospace.
          </p>
          <p>
            Different domains. Same move.
          </p>
          <div className="border-l-4 border-white/20 pl-6 my-6">
            <p className="text-white/80 italic">
              Before trying to control something, understand its structure.
            </p>
          </div>

          <h2 className="text-xl font-thin text-white/90 mt-12 mb-4">What followed from identification</h2>

          <p>
            System identification became the foundation for everything that followed:
          </p>
          <ul className="text-white/60 space-y-2 ml-6 list-disc">
            <li>0-Context architecture.</li>
            <li>State externalization.</li>
            <li>Invariant boundaries.</li>
            <li>Deterministic shells around stochastic cores.</li>
            <li>Automatic repair loops for structured LLM output.</li>
          </ul>
          <p>
            None of those were aesthetic choices. They were consequences of identifying how the system actually behaved.
          </p>

          <h2 className="text-xl font-thin text-white/90 mt-12 mb-4">Most AI discussions start too late</h2>

          <p>
            Most AI discussions start at tuning. Prompts. Fine-tuning. Model choice.
          </p>
          <p>
            Control theory starts earlier.
          </p>
          <ul className="text-white/50 space-y-1 ml-6 list-disc">
            <li>What kind of system is this?</li>
            <li>Where are its stable regions?</li>
            <li>What are its disturbance sources?</li>
            <li>What is observable?</li>
            <li>What is hidden?</li>
          </ul>
          <p className="text-white/80 font-medium">
            Until those questions are answered, tuning is blind.
          </p>

          <h2 className="text-xl font-thin text-white/90 mt-12 mb-4">Why it matters</h2>

          <p>
            System identification is not glamorous.
            It's rarely rewarded in feature work.
            It doesn't ship screenshots.
          </p>
          <p>
            But it determines whether the next layer is possible.
          </p>
          <p className="text-white/50">
            You don't land rockets unless the guidance stack is characterized.
            You don't scale automation unless the environment is modeled.
            You don't ship AI in production unless failure modes are bounded.
          </p>

          <h2 className="text-xl font-thin text-white/90 mt-12 mb-4">Formal definition</h2>

          <p>
            Given a language model <em>M</em>, system identification constructs a behavioral model <em>M&#x0302;</em> such that
            for any input domain <em>D</em>, the observable output properties of <em>M&#x0302;(D)</em> approximate
            those of <em>M(D)</em> within bounded error.
          </p>
          <p>
            This is not about replicating the model. It is about predicting its boundaries.
          </p>

          <h2 className="text-xl font-thin text-white/90 mt-10 mb-4">Mathematical framing</h2>
          <div className="border border-white/10 p-6 space-y-3">
            <p className="text-white/60 text-xs font-mono">
              x(k+1) = f(x(k), u(k)) + w(k)
            </p>
            <p className="text-white/60 text-xs font-mono">
              y(k) = g(x(k)) + v(k)
            </p>
            <p className="text-white/50 text-xs mt-2">
              x = internal state &nbsp;|&nbsp; u = input (prompt, context) &nbsp;|&nbsp; y = output (completion) &nbsp;|&nbsp; w, v = noise terms
            </p>
          </div>
          <p className="text-white/50 text-sm italic">
            Essentially: the system has hidden internal state that changes with every input, and its outputs are a noisy
            reflection of that state. Identification means learning enough about the input→output relationship to predict
            where the system will behave reliably and where it won't — without ever seeing the internals.
          </p>
          <p>
            The system is identified when the transfer characteristics from <em>u</em> to <em>y</em> are modeled
            well enough to predict stability, failure modes, and response boundaries — even as the internal state remains opaque.
          </p>

          <h2 className="text-xl font-thin text-white/90 mt-12 mb-4">The part people miss</h2>

          <p>
            The hard part of system identification isn't doing the thing it enables.
            It's realizing the thing is even feasible.
          </p>
          <p>
            Most engineers don't fail because they can't implement.
            They fail because they never attempt the right problem — the stack looks impossible from the outside.
          </p>
          <p>
            System analysis flips that. It turns "this sounds far-fetched" into "this is doable if these constraints hold."
          </p>
          <p className="text-white/80 font-medium">
            Once the constraints are visible, the work becomes straightforward.
          </p>

          <h2 className="text-xl font-thin text-white/90 mt-12 mb-4">Why coding agents change the equation</h2>

          <p>
            This is why coding agents make system identification disproportionately valuable.
          </p>
          <p>
            If structure can be identified, implementation can be delegated.
            More experiments per week. Faster isolation of failure modes. Convergence on a stable architecture without guessing.
          </p>
          <p>
            Agents don't replace system thinking. They amplify it.
          </p>
          <p>
            They compress the distance between:
          </p>
          <div className="border-l-4 border-white/20 pl-6 my-6 space-y-2">
            <p className="text-white/60 italic">a hypothesis about how the system behaves</p>
            <p className="text-white/40 text-xs">and</p>
            <p className="text-white/60 italic">a real production test that confirms or kills it.</p>
          </div>
          <p>
            When system identification is combined with fast iteration,
            the conversation stops being about reliability and starts being about measuring it.
          </p>

          <p className="text-white/80 font-medium mt-10">
            This section formalizes that layer.
          </p>
        </div>
      </article>

      <section className="border-t border-white/10 pt-8">
        <h3 className="text-sm font-mono text-white/50 mb-4">Foundations</h3>
        <ul className="space-y-3">
          {foundations.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="text-white/40 text-sm hover:text-white/70 transition-colors flex items-center gap-2">
                <span className="text-white/20">→</span>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="text-white/30 text-sm border-t border-white/10 pt-6">
        <a href="/architecture" className="hover:text-white/50 transition-colors">
          ← Back to Architecture
        </a>
      </section>
    </div>
  )
}

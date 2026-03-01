export default function ConstraintsOverContextPage() {
  return (
    <div className="space-y-12 max-w-3xl">
      <section>
        <h1 className="text-3xl font-thin tracking-tight mb-4">
          Constraints Over Context
        </h1>
        <p className="text-white/50 text-sm mb-8">
          Eliminating history and noise to make systems predictable
        </p>
      </section>

      <article className="prose prose-invert max-w-none">
        <div className="text-white/70 text-sm leading-relaxed space-y-6">
          <p>
            Long before language models existed, one lesson kept appearing across every domain:
            systems become predictable not by adding more context, but by <em>constraining</em> what the system is
            allowed to see and do.<br />
            This idea — that predictability comes from reduction, not addition — became one of the most
            important architectural principles in this entire body of work.
          </p>
          
          <h2 className="text-xl font-thin text-white/90 mt-8 mb-4">Why adding more context makes systems worse</h2>
          
          <p>
            Most approaches treat additional information as always beneficial:
            give the model more history, more data, more hints, more examples.
          </p>
          
          <p>
            But in practice — in control systems, automation, or AI — extra context introduces:
          </p>
          
          <ul className="text-white/60 space-y-2 ml-6 list-disc">
            <li>instability,</li>
            <li>mixed signals,</li>
            <li>contradictory states,</li>
            <li>noise,</li>
            <li>drift,</li>
            <li>ambiguity.</li>
          </ul>
          
          <p>
            The more a system sees, the less it knows what matters.
          </p>
          
          <div className="border-l-4 border-white/20 pl-6 my-6">
            <p className="text-white/80 font-medium">The core realization:</p>
            <p className="text-white/60 italic">
              A system becomes brittle when its domain isn't constrained.
            </p>
          </div>
          
          <h2 className="text-xl font-thin text-white/90 mt-8 mb-4">Control systems taught the principle early</h2>
          
          <p>
            In classical and nonlinear control, stability is guaranteed by:
          </p>
          
          <ul className="text-white/60 space-y-2 ml-6 list-disc">
            <li>boundary constraints,</li>
            <li>saturation functions,</li>
            <li>invariant sets,</li>
            <li>error bounds,</li>
            <li>clipped signals.</li>
          </ul>
          
          <p>
            Controllers fail not because they lack context, but because they leave their stable region.
          </p>
          
          <p className="text-white/80 italic">
            The exact same phenomenon appears in automation and AI.
          </p>
          
          <h2 className="text-xl font-thin text-white/90 mt-8 mb-4">Early experiments with constraint-led design</h2>
          
          <p>
            Before "zero-context" had a name, the prototypes were already built around constraint-led logic:
          </p>
          
          <ul className="text-white/60 space-y-2 ml-6 list-disc">
            <li>limiting what a controller could see,</li>
            <li>bounding actions to safe regions,</li>
            <li>removing irrelevant variables,</li>
            <li>canonicalizing representations,</li>
            <li>rejecting outputs that violated structure.</li>
          </ul>
          
          <p>
            This wasn't about minimalism — it was about stability.
          </p>
          
          <p className="text-white/80 font-medium">
            When constraints are correct, the system stays in a region where the solution is guaranteed.
          </p>
          
          <h2 className="text-xl font-thin text-white/90 mt-8 mb-4">Why constraints outperform context in automation</h2>
          
          <p>
            Automation systems break when:
          </p>
          
          <ul className="text-white/60 space-y-2 ml-6 list-disc">
            <li>past history contaminates current decisions,</li>
            <li>the environment changes but the model still depends on old assumptions,</li>
            <li>multiple domains mix in a single input (intent + environment + plan + metadata),</li>
            <li>the system tries to "reason" across too many dimensions.</li>
          </ul>
          
          <p className="text-white/80">
            Adding context amplifies noise.
          </p>
          
          <p className="text-white/80">
            Constraining the domain removes it.
          </p>
          
          <h2 className="text-xl font-thin text-white/90 mt-8 mb-4">Constraint-led architecture is what made zero-context inevitable</h2>
          
          <p>
            Zero-context wasn't a radical shift — it was the direct consequence of the earlier work:
          </p>
          
          <ul className="text-white/60 space-y-2 ml-6 list-disc">
            <li>take only the relevant slice of the environment,</li>
            <li>strip all residue from previous steps,</li>
            <li>rewrite everything into a canonical form,</li>
            <li>force structure over free-form representation,</li>
            <li>verify transitions strictly,</li>
            <li>eliminate anything that does not influence the next state.</li>
          </ul>
          
          <p>
            This aligns perfectly with what control systems already knew:
          </p>
          
          <div className="border-l-4 border-white/20 pl-6 my-6">
            <p className="text-white/80 italic">
              Stability doesn't come from knowing everything —<br />
              it comes from knowing the right things.
            </p>
          </div>
          
          <h2 className="text-xl font-thin text-white/90 mt-8 mb-4">Examples from the pre-AI era</h2>
          
          <div className="space-y-4">
            <div>
              <p className="text-white/80 font-medium">1. Physical control</p>
              <p className="text-white/60 text-sm mb-2">
                A controller only received:
              </p>
              <ul className="text-white/50 space-y-1 ml-6 list-disc text-sm">
                <li>error,</li>
                <li>derivative,</li>
                <li>integral window.</li>
              </ul>
              <p className="text-white/60 text-sm mt-2">
                Not sensor logs, not full state history.<br />
                That constraint kept the system stable.
              </p>
            </div>
            
            <div>
              <p className="text-white/80 font-medium">2. Fuzzy logic controllers</p>
              <p className="text-white/60 text-sm mb-2">
                Membership functions acted as hard constraints:
              </p>
              <ul className="text-white/50 space-y-1 ml-6 list-disc text-sm">
                <li>defined input ranges,</li>
                <li>enforced boundaries,</li>
                <li>rejected impossible states.</li>
              </ul>
            </div>
            
            <div>
              <p className="text-white/80 font-medium">3. Browser automation prototypes</p>
              <p className="text-white/60 text-sm mb-2">
                The model acted only on:
              </p>
              <ul className="text-white/50 space-y-1 ml-6 list-disc text-sm">
                <li>visible DOM slice,</li>
                <li>actionable elements,</li>
                <li>contextual-free state.</li>
              </ul>
              <p className="text-white/60 text-sm mt-2">
                Not the entire page, not historical steps.
              </p>
            </div>
            
            <div>
              <p className="text-white/80 font-medium">4. Workflow engines</p>
              <p className="text-white/60 text-sm mb-2">
                Steps were constrained by:
              </p>
              <ul className="text-white/50 space-y-1 ml-6 list-disc text-sm">
                <li>dependency graphs,</li>
                <li>preconditions,</li>
                <li>allowed transitions.</li>
              </ul>
              <p className="text-white/60 text-sm mt-2">
                Free-form planning was never trusted.
              </p>
            </div>
          </div>
          
          <h2 className="text-xl font-thin text-white/90 mt-8 mb-4">Constraint as a form of intelligence</h2>
          
          <p>
            The deeper insight was that constraint itself <strong>is a control mechanism</strong>.
            It organizes behavior without requiring reasoning.
          </p>
          
          <p>
            Constraints:
          </p>
          
          <ul className="text-white/60 space-y-2 ml-6 list-disc">
            <li>define the valid region,</li>
            <li>prune the invalid region,</li>
            <li>prevent drift,</li>
            <li>create reproducibility,</li>
            <li>ensure safety,</li>
            <li>act as a built-in verifier.</li>
          </ul>
          
          <p className="text-white/80 italic">
            In automation, constraint is often more important than inference.
          </p>
          
          <h2 className="text-xl font-thin text-white/90 mt-8 mb-4">Why this principle is essential in modern AI systems</h2>
          
          <p>
            Current LLM-based agents break for the exact reasons older systems did:
          </p>
          
          <ul className="text-white/60 space-y-2 ml-6 list-disc">
            <li>too much context,</li>
            <li>mixed domains,</li>
            <li>unstable inputs,</li>
            <li>free-form planning,</li>
            <li>uncontrolled internal state.</li>
          </ul>
          
          <p className="text-white/80 font-medium">
            Constraints fix all of these issues by design.
          </p>
          
          <p>
            This is why constraint-led architecture is now the backbone of:
          </p>
          
          <ul className="text-white/60 space-y-2 ml-6 list-disc">
            <li>zero-context,</li>
            <li>operator composition,</li>
            <li>verifier layers,</li>
            <li>correction loops,</li>
            <li>stable state-space transitions,</li>
            <li>multi-step graph orchestration.</li>
          </ul>
          
          <h2 className="text-xl font-thin text-white/90 mt-8 mb-4">The principle in one sentence</h2>
          
          <div className="border-l-4 border-white/20 pl-6 my-6">
            <p className="text-white/80 font-medium italic text-base">
              Predictability doesn't come from context —<br />
              it comes from constraints.
            </p>
          </div>
        </div>
      </article>

      <section className="text-white/40 text-sm border-t border-white/10 pt-6">
        <a href="/pre-ai-research" className="hover:text-white/60 transition-colors">
          ← Back to Research Before AI
        </a>
      </section>
    </div>
  )
}


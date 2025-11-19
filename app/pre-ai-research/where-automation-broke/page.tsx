export default function WhereAutomationBrokePage() {
  return (
    <div className="space-y-12 max-w-3xl">
      <section>
        <h1 className="text-3xl font-thin tracking-tight mb-4">
          Where Automation Broke
        </h1>
        <p className="text-white/50 text-sm mb-8">
          Discovering the limits of naive automation long before AI arrived
        </p>
      </section>

      <article className="prose prose-invert max-w-none">
        <div className="text-white/70 text-sm leading-relaxed space-y-6">
          <p>
            Years before LLMs existed, automation was already failing in predictable ways.
          </p>
          
          <p>
            Scripts broke, workflows drifted, browser tasks collapsed, and back-office processes
            were brittle even when they looked simple. The failures weren't random — they revealed
            structural limits in how automation was designed across industries.
          </p>
          
          <p>
            This phase of work wasn't just about building automations.<br />
            It was about studying why they <em>failed</em>.
          </p>
          
          <h2 className="text-xl font-thin text-white/90 mt-8 mb-4">Automation didn't fail because of complexity</h2>
          
          <p>
            It failed because systems were built on assumptions that didn't hold:
          </p>
          
          <ul className="text-white/60 space-y-2 ml-6 list-disc">
            <li>tasks were treated as linear scripts,</li>
            <li>state was implicit instead of explicit,</li>
            <li>domain boundaries were undefined,</li>
            <li>no architecture existed for failure recovery,</li>
            <li>no verification layer validated intermediate steps,</li>
            <li>workflows depended on history instead of current state,</li>
            <li>environments changed faster than scripts could adapt.</li>
          </ul>
          
          <p className="text-white/80 italic">
            Every broken automation was a signal that the architecture was missing something fundamental.
          </p>
          
          <h2 className="text-xl font-thin text-white/90 mt-8 mb-4">Common failure modes observed early</h2>
          
          <p>
            Across browser automation, onboarding flows, HR systems, payroll, financial operations,
            and document pipelines, the same patterns repeated:
          </p>
          
          <div className="space-y-4">
            <div>
              <p className="text-white/80 font-medium">1. Drift and divergence</p>
              <p className="text-white/60 text-sm">
                Systems drifted after a few steps because no mechanism enforced domain purity.
              </p>
            </div>
            
            <div>
              <p className="text-white/80 font-medium">2. Hidden memory</p>
              <p className="text-white/60 text-sm">
                Scripts accumulated internal state across steps, leading to unpredictable behavior.
              </p>
            </div>
            
            <div>
              <p className="text-white/80 font-medium">3. Environment mismatch</p>
              <p className="text-white/60 text-sm">
                A minor UI or schema change caused full collapse because tasks weren't represented canonically.
              </p>
            </div>
            
            <div>
              <p className="text-white/80 font-medium">4. Missing invariants</p>
              <p className="text-white/60 text-sm">
                There was no formal definition of what "correct" looked like at each step.
              </p>
            </div>
            
            <div>
              <p className="text-white/80 font-medium">5. No recovery model</p>
              <p className="text-white/60 text-sm">
                When a step failed, the system either retried blindly or crashed.
              </p>
            </div>
          </div>
          
          <p className="text-white/80 italic mt-4">
            These weren't implementation bugs —<br />
            they were architectural weaknesses.
          </p>
          
          <h2 className="text-xl font-thin text-white/90 mt-8 mb-4">Early investigations into "why automation breaks"</h2>
          
          <p>
            Much of the early work went into understanding these issues systematically:
          </p>
          
          <ul className="text-white/60 space-y-2 ml-6 list-disc">
            <li>analyzing browser sessions as dynamic environments,</li>
            <li>instrumenting workflows to detect drift,</li>
            <li>measuring error accumulation across steps,</li>
            <li>isolating failure points in document parsing,</li>
            <li>mapping hidden assumptions in procedural scripts,</li>
            <li>reverse-engineering why workflows behaved differently across environments.</li>
          </ul>
          
          <p>
            This created a catalog of failure patterns that modern agent systems still struggle with.
          </p>
          
          <h2 className="text-xl font-thin text-white/90 mt-8 mb-4">The critical insight: automation breaks at the representational level</h2>
          
          <p>
            A breakthrough emerged from all this:
          </p>
          
          <div className="border-l-4 border-white/20 pl-6 my-6">
            <p className="text-white/80 italic">
              Automation doesn't fail at execution.
            </p>
            <p className="text-white/80 italic">
              It fails at representation.
            </p>
          </div>
          
          <p>
            If the representation is wrong:
          </p>
          
          <ul className="text-white/60 space-y-2 ml-6 list-disc">
            <li>the operator receives unstable input,</li>
            <li>the plan becomes inconsistent,</li>
            <li>the action doesn't match the environment,</li>
            <li>verification becomes impossible,</li>
            <li>correction loops cannot stabilize the system.</li>
          </ul>
          
          <p className="text-white/80 font-medium">
            Representation was the real bottleneck — not the logic, not the code, not the model.
          </p>
          
          <p>
            This insight became the precursor to domain intelligence and To2D.
          </p>
          
          <h2 className="text-xl font-thin text-white/90 mt-8 mb-4">This directly led to zero-context, state-space operators, and verifiers</h2>
          
          <p>
            Once the root cause was clear, the architecture practically wrote itself:
          </p>
          
          <ul className="text-white/60 space-y-2 ml-6 list-disc">
            <li>eliminate historical residue (zero-context),</li>
            <li>treat every step as a fresh state-space update,</li>
            <li>constrain domain before applying an operator,</li>
            <li>compose tasks from verified operators,</li>
            <li>implement deterministic correction paths,</li>
            <li>design workflows as DAGs instead of scripts.</li>
          </ul>
          
          <p>
            These were solutions to the structural failures observed years earlier.
          </p>
          
          <h2 className="text-xl font-thin text-white/90 mt-8 mb-4">Why this matters today</h2>
          
          <p>
            Modern AI systems still break for the same reasons older automations did:
          </p>
          
          <ul className="text-white/60 space-y-2 ml-6 list-disc">
            <li>too much context,</li>
            <li>free-form reasoning,</li>
            <li>ambiguous plans,</li>
            <li>environment drift,</li>
            <li>unstable representations,</li>
            <li>missing verification,</li>
            <li>lack of failure semantics.</li>
          </ul>
          
          <p>
            The technology changed.<br />
            The failure modes stayed identical.
          </p>
          
          <p className="text-white/80 font-medium">
            The architecture needed to be rebuilt from first principles —<br />
            and the failures of early automation provided the blueprint.
          </p>
          
          <h2 className="text-xl font-thin text-white/90 mt-8 mb-4">The principle in one sentence</h2>
          
          <div className="border-l-4 border-white/20 pl-6 my-6">
            <p className="text-white/80 font-medium italic text-base">
              Automation didn't break at runtime —<br />
              it broke at the level of representation.
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


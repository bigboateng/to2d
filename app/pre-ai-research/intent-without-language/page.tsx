export default function IntentWithoutLanguagePage() {
  return (
    <div className="space-y-12 max-w-3xl">
      <section>
        <h1 className="text-3xl font-thin tracking-tight mb-4">
          Intent Without Language
        </h1>
        <p className="text-white/50 text-sm mb-8">
          Building early intent→behavior systems before language models existed
        </p>
      </section>

      <article className="prose prose-invert max-w-none">
        <div className="text-white/70 text-sm leading-relaxed space-y-6">
          <p>
            Before the current generation of AI systems, the challenge was simple but fundamental:
            how do you map <em>intent</em> to <em>behavior</em> without relying on natural language as the interface?
            This work predated LLMs entirely, and it shaped a different kind of architecture — one where
            intent was represented structurally, not conversationally.
          </p>
          
          <p>
            This became a precursor to modern operator systems, verifiable agents, and structured planning.
          </p>
          
          <h2 className="text-xl font-thin text-white/90 mt-8 mb-4">Intent is not language</h2>
          
          <p>
            Most systems treat language as the source of intent.<br />
            But language is ambiguous, lossy, and overloaded with context.
          </p>
          
          <p>
            Early experiments made something clear:
          </p>
          
          <div className="border-l-4 border-white/20 pl-6 my-6">
            <p className="text-white/80 italic">
              Intent is a <em>state transition</em>, not a sentence.
            </p>
          </div>
          
          <p>
            A person wants:
          </p>
          
          <ul className="text-white/60 space-y-2 ml-6 list-disc">
            <li>a position reached,</li>
            <li>a document processed,</li>
            <li>a workflow completed,</li>
            <li>a system updated,</li>
            <li>a condition satisfied.</li>
          </ul>
          
          <p>
            The linguistic form is incidental.
          </p>
          
          <p className="text-white/80 font-medium">
            This realization led to representing intent as <em>structure</em>, not text.
          </p>
          
          <h2 className="text-xl font-thin text-white/90 mt-8 mb-4">How intent was represented before LLMs</h2>
          
          <p>
            Without natural-language models, intent needed alternate forms:
          </p>
          
          <div className="space-y-4">
            <div>
              <p className="text-white/80 font-medium">1. Desired final state</p>
              <p className="text-white/60 text-sm mb-2">
                Representing the goal as a target state vector:
              </p>
              <ul className="text-white/50 space-y-1 ml-6 list-disc text-sm">
                <li>position = x</li>
                <li>workflow node = completed</li>
                <li>field = extracted</li>
                <li>jurisdiction rule = applied</li>
              </ul>
            </div>
            
            <div>
              <p className="text-white/80 font-medium">2. Constraint sets</p>
              <p className="text-white/60 text-sm">
                Intent defined as "all states satisfying these inequalities."
              </p>
            </div>
            
            <div>
              <p className="text-white/80 font-medium">3. Behavior templates</p>
              <p className="text-white/60 text-sm">
                Mapping signals or user choices into predefined, safe action primitives.
              </p>
            </div>
            
            <div>
              <p className="text-white/80 font-medium">4. Fuzzy inference rules</p>
              <p className="text-white/60 text-sm mb-2">
                Where membership functions encoded <em>degrees of intent</em>:
              </p>
              <ul className="text-white/50 space-y-1 ml-6 list-disc text-sm">
                <li>"move left a little"</li>
                <li>"stabilize here"</li>
                <li>"slow down near boundary"</li>
              </ul>
            </div>
            
            <div>
              <p className="text-white/80 font-medium">5. Graph positions</p>
              <p className="text-white/60 text-sm">
                Intent expressed as the next valid node in a workflow DAG.
              </p>
            </div>
          </div>
          
          <p>
            The common theme: intent is never free-form.<br />
            It is <strong>encoded</strong> into a domain the system can execute.
          </p>
          
          <h2 className="text-xl font-thin text-white/90 mt-8 mb-4">Early intent engines were proto-operators</h2>
          
          <p>
            Years before language models, systems were already using:
          </p>
          
          <ul className="text-white/60 space-y-2 ml-6 list-disc">
            <li>PID controllers,</li>
            <li>fuzzy controllers,</li>
            <li>state-transition tables,</li>
            <li>rule-based planners,</li>
            <li>action graphs.</li>
          </ul>
          
          <p>
            These engines took intent in a structured form and produced deterministic actions.
          </p>
          
          <p>
            No speculation.<br />
            No free-form reasoning.<br />
            No hidden context.<br />
            Just structure → operator → behavior.
          </p>
          
          <p className="text-white/80 italic">
            This is precisely the architecture used in verifiable agents today.
          </p>
          
          <h2 className="text-xl font-thin text-white/90 mt-8 mb-4">Why intent needed rewriting before execution</h2>
          
          <p>
            Mapping intent directly to actions is unstable.
          </p>
          
          <p>
            Intent must first be rewritten into a <strong>machine-solvable domain</strong>:
          </p>
          
          <ul className="text-white/60 space-y-2 ml-6 list-disc">
            <li>browser → actionable DOM slice</li>
            <li>document → target field schema</li>
            <li>workflow → dependency graph node</li>
            <li>control system → error signal</li>
            <li>payroll → jurisdictional rule set</li>
            <li>compliance → constraint template</li>
          </ul>
          
          <p>
            This rewrite is not optional — it is the core of To2D (Transfer of Two Domains):
          </p>
          
          <div className="border-l-4 border-white/20 pl-6 my-6">
            <p className="text-white/80 italic">
              Human-visible intent → machine-solvable representation.
            </p>
          </div>
          
          <p>
            Once rewritten, the operator can act predictably.
          </p>
          
          <h2 className="text-xl font-thin text-white/90 mt-8 mb-4">How this led to modern planning architectures</h2>
          
          <p>
            The early work made several structural ideas obvious:
          </p>
          
          <div className="space-y-3">
            <div>
              <p className="text-white/80 font-medium">1. Planning should be structural, not linguistic</p>
              <p className="text-white/60 text-sm">
                A plan is a graph, not a paragraph.
              </p>
            </div>
            
            <div>
              <p className="text-white/80 font-medium">2. Intent resolution is a domain extraction problem</p>
              <p className="text-white/60 text-sm">
                Identify the domain before selecting an action.
              </p>
            </div>
            
            <div>
              <p className="text-white/80 font-medium">3. Operators should respond to canonical representations</p>
              <p className="text-white/60 text-sm">
                Not to conversational ambiguity.
              </p>
            </div>
            
            <div>
              <p className="text-white/80 font-medium">4. Deterministic transitions beat inferred sequences</p>
              <p className="text-white/60 text-sm">
                Reliability &gt; creativity in automation.
              </p>
            </div>
          </div>
          
          <p>
            These ideas re-emerged later in:
          </p>
          
          <ul className="text-white/60 space-y-2 ml-6 list-disc">
            <li>deterministic planning via structural constraints,</li>
            <li>operator composition pipelines,</li>
            <li>closed-loop verification architectures.</li>
          </ul>
          
          <h2 className="text-xl font-thin text-white/90 mt-8 mb-4">Why intent-without-language matters today</h2>
          
          <p>
            Even with LLMs, the principle still holds:
          </p>
          
          <ul className="text-white/60 space-y-2 ml-6 list-disc">
            <li>natural language is too ambiguous for deterministic automation,</li>
            <li>free-form intent creates drift,</li>
            <li>conversational planning is unstable,</li>
            <li>multi-step tasks collapse without structure.</li>
          </ul>
          
          <p>
            Structured intent is still the only reliable substrate for:
          </p>
          
          <ul className="text-white/60 space-y-2 ml-6 list-disc">
            <li>browser automation,</li>
            <li>HR and payroll workflows,</li>
            <li>compliance reasoning,</li>
            <li>document pipelines,</li>
            <li>multi-agent systems.</li>
          </ul>
          
          <p className="text-white/80 italic">
            LLMs improved the operators — not the fundamental nature of intent.
          </p>
          
          <h2 className="text-xl font-thin text-white/90 mt-8 mb-4">The principle in one sentence</h2>
          
          <div className="border-l-4 border-white/20 pl-6 my-6">
            <p className="text-white/80 font-medium italic text-base">
              Intent is not a phrase.<br />
              Intent is a target state.
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


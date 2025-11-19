export default function DeterministicPlanningViaStructuralConstraintsPage() {
  return (
    <div className="space-y-12 max-w-3xl">
      <section>
        <h1 className="text-3xl font-thin tracking-tight mb-4">
          Deterministic Planning via Structural Constraints
        </h1>
        <p className="text-white/50 text-sm mb-8">
          Structure is the reasoning
        </p>
      </section>

      <article className="prose prose-invert max-w-none">
        <div className="text-white/70 text-sm leading-relaxed space-y-6">
          <div className="border-l-4 border-white/20 pl-6 my-6">
            <p className="text-white/80 mb-3">
              <strong>Why most agents fail in automation:</strong> they treat planning as free-form reasoning instead of a <em>constrained transformation problem</em>. This leads to unstable plans, incorrect step ordering, invented workflows, and brittle automation graphs.
            </p>
            <p className="text-white/80">
              <strong>Structural constraints fix this.</strong> They turn planning into a deterministic, verifiable process — essential for any system that interacts with browsers, documents, workflows, compliance, or multi-step enterprise logic.
            </p>
          </div>
          
          <p>
            Planning fails in LLM-driven systems not because the model is weak, but because the <strong>planning representation is unstable</strong>. Chain-of-thought, long context, and free-form reasoning push the latent state into high-variance regions where trajectories drift, contradict, and collapse.
          </p>
          
          <p>
            Deterministic planning replaces this with <strong>structural constraints</strong> — representations that force correctness by construction.
          </p>
          
          <p>
            This section formalizes how deterministic planning works, how to design structural constraints, and includes real examples from browser automation, workflow systems, and enterprise operations.
          </p>
          
          <h2 className="text-xl font-thin text-white/90 mt-8 mb-4">1. The problem with free-form reasoning (and why agents fail in automation)</h2>
          
          <p>
            Agent frameworks assume the model can "reason" through plans. In automation, this is catastrophic.
          </p>
          
          <p>
            Free-form reasoning introduces:
          </p>
          
          <ul className="text-white/60 space-y-2 ml-6 list-disc">
            <li>inconsistent step ordering (breaks workflow engines),</li>
            <li>invented actions or missing steps (browser agents fail),</li>
            <li>unstable transitions (automation loops become unpredictable),</li>
            <li>plans that contradict environment state (compliance workflows break),</li>
            <li>formatting drift (downstream systems cannot consume outputs).</li>
          </ul>
          
          <div className="border-l-2 border-white/20 pl-6 my-6">
            <p className="text-white/80 font-medium mb-2">Real automation examples</p>
            <ul className="text-white/60 space-y-2 text-sm">
              <li>A browser agent generates a 5-step plan. Step 3 requires an element that only appears after step 4.</li>
              <li>A payroll agent invents a nonexistent form because the model "thinks" it should exist.</li>
              <li>A document extractor rewrites steps on each iteration, making workflows nondeterministic.</li>
            </ul>
          </div>
          
          <p className="text-white/80 font-medium">
            Automation dies when the plan is unstable.
          </p>
          
          <p>
            Traditional agent frameworks rely on:
          </p>
          
          <ul className="text-white/60 space-y-2 ml-6 list-disc">
            <li>chain-of-thought,</li>
            <li>long narratives,</li>
            <li>bullet lists with implicit meaning,</li>
            <li>natural-language step generation.</li>
          </ul>
          
          <p>
            These approaches are:
          </p>
          
          <ul className="text-white/60 space-y-2 ml-6 list-disc">
            <li><strong>non-deterministic</strong> (minor token changes create new plans),</li>
            <li><strong>unverifiable</strong> (no schema to validate against),</li>
            <li><strong>drift-prone</strong> (reasoning hops domains),</li>
            <li><strong>not composable</strong> (free-form outputs break pipelines).</li>
          </ul>
          
          <div className="border-l-2 border-white/20 pl-6 my-6">
            <p className="text-white/80 font-medium mb-2">Real example</p>
            <p className="text-white/60 mb-2">
              Ask an LLM: "Plan the steps to onboard an employee in California."
            </p>
            <p className="text-white/60">
              It produces:
            </p>
            <ul className="text-white/50 space-y-1 ml-6 list-disc text-sm">
              <li>steps in random order,</li>
              <li>missing details,</li>
              <li>invented substeps,</li>
              <li>inconsistent formatting.</li>
            </ul>
            <p className="text-white/60 mt-2">
              This is expected — natural language has no structural constraints.
            </p>
          </div>
          
          <h2 className="text-xl font-thin text-white/90 mt-8 mb-4">2. Deterministic planning = structure-first, language-second</h2>
          
          <p>
            Instead of prompting the model to "think," deterministic planning gives it:
          </p>
          
          <ul className="text-white/60 space-y-2 ml-6 list-disc">
            <li><strong>a structural representation of the task</strong>,</li>
            <li><strong>a schema for valid outputs</strong>, and</li>
            <li><strong>constraints that eliminate ambiguity before the operator is called</strong>.</li>
          </ul>
          
          <p className="text-white/80 italic">
            The model is not reasoning — it is <strong>filling a structured container</strong>.
          </p>
          
          <h2 className="text-xl font-thin text-white/90 mt-8 mb-4">3. Formal definition</h2>
          
          <p>
            Let the planning state be represented as:
          </p>
          
          <pre className="bg-white/5 border border-white/10 p-4 rounded overflow-x-auto mb-6 font-mono text-sm">
            {`zₜ ∈ Z   (the canonical planning representation)`}
          </pre>
          
          <p>
            The operator proposes a structured plan:
          </p>
          
          <pre className="bg-white/5 border border-white/10 p-4 rounded overflow-x-auto mb-6 font-mono text-sm">
            {`uₜ = f(zₜ)`}
          </pre>
          
          <p>
            The verifier enforces:
          </p>
          
          <pre className="bg-white/5 border border-white/10 p-4 rounded overflow-x-auto mb-6 font-mono text-sm">
            {`yₜ = V(uₜ)  where  yₜ ∈ Y  (valid structured plans)`}
          </pre>
          
          <p className="text-white/80 italic">
            Plans become deterministic because <strong>only one structure is allowed</strong>.
          </p>
          
          <h2 className="text-xl font-thin text-white/90 mt-8 mb-4">4. Structural constraints (how to make planning automation-safe)</h2>
          
          <p>
            Structural constraints turn planning from "think and produce" into <strong>fill and verify</strong>.
          </p>
          
          <p>
            In automation, constraints force the LLM to stay inside:
          </p>
          
          <ul className="text-white/60 space-y-2 ml-6 list-disc">
            <li>the allowed action set,</li>
            <li>the allowed transitions,</li>
            <li>the allowed selectors,</li>
            <li>the allowed workflows,</li>
            <li>the allowed compliance rules.</li>
          </ul>
          
          <p>
            This prevents the model from generating:
          </p>
          
          <ul className="text-white/60 space-y-2 ml-6 list-disc">
            <li>new actions your orchestrator cannot execute,</li>
            <li>new flows your backend cannot support,</li>
            <li>inconsistent step ordering,</li>
            <li>plans that the browser state makes impossible.</li>
          </ul>
          
          <p className="text-white/80 font-medium italic">
            This is the difference between an agent that works 1000 times and one that works once.
          </p>
          
          <p>
            A structural constraint is anything that restricts allowable outputs:
          </p>
          
          <ul className="text-white/60 space-y-2 ml-6 list-disc">
            <li>schemas,</li>
            <li>enumerated fields,</li>
            <li>strict step formats,</li>
            <li>dependency graphs,</li>
            <li>ordering rules,</li>
            <li>precondition rules,</li>
            <li>canonical templates.</li>
          </ul>
          
          <p>
            These constraints collapse a large space of possible outputs into a <strong>single correct region</strong> of the manifold.
          </p>
          
          <h2 className="text-xl font-thin text-white/90 mt-8 mb-4">5. Real Example: Browser Planning</h2>
          
          <div className="space-y-4">
            <div>
              <p className="text-white/80 font-medium mb-2">Bad: natural-language planning</p>
              <p className="text-white/60">
                "Go to page X, then click Y, then fill Z…"
              </p>
              <ul className="text-white/50 space-y-1 ml-6 list-disc text-sm">
                <li>fragile</li>
                <li>order varies</li>
                <li>steps change phrasing</li>
              </ul>
            </div>
            
            <div>
              <p className="text-white/80 font-medium mb-2">Deterministic plan</p>
              <pre className="bg-white/5 border border-white/10 p-4 rounded overflow-x-auto font-mono text-sm mb-2">
{`{
  "steps": [
    { "action": "navigate", "url": "..." },
    { "action": "fill", "selector": "#email", "value": "..." },
    { "action": "click", "selector": "#submit" }
  ]
}`}
              </pre>
              <p className="text-white/60">
                The model fills this structure.<br />
                The verifier checks:
              </p>
              <ul className="text-white/50 space-y-1 ml-6 list-disc text-sm">
                <li>selectors exist,</li>
                <li>actions valid,</li>
                <li>step order coherent.</li>
              </ul>
            </div>
          </div>
          
          <h2 className="text-xl font-thin text-white/90 mt-8 mb-4">6. Real Example: Document → Workflow Plans</h2>
          
          <div className="space-y-4">
            <div>
              <p className="text-white/80 font-medium mb-2">Bad: "Write steps to process this document."</p>
              <p className="text-white/60">
                The model hallucinates missing sections.
              </p>
            </div>
            
            <div>
              <p className="text-white/80 font-medium mb-2">Deterministic</p>
              <pre className="bg-white/5 border border-white/10 p-4 rounded overflow-x-auto font-mono text-sm mb-2">
{`{
  "fields": ["employer", "start_date", "gross_pay"],
  "steps": [
    { "field": "employer", "source": "header", "rule": "exact_match" },
    ...
  ]
}`}
              </pre>
              <p className="text-white/60">
                No room for hallucination — the structure encodes the logic.
              </p>
            </div>
          </div>
          
          <h2 className="text-xl font-thin text-white/90 mt-8 mb-4">7. Representations that enforce correctness (critical for automation reliability)</h2>
          
          <p>
            Automation requires repeatable, environment-aligned plans. These representations enforce that.
          </p>
          
          <div className="space-y-4">
            <div>
              <p className="text-white/80 font-medium">1. Graph-based planning (for complex workflows)</p>
              <p className="text-white/60 text-sm mb-2">
                A directed acyclic graph ensures:
              </p>
              <ul className="text-white/50 space-y-1 ml-6 list-disc text-xs">
                <li>no circular loops,</li>
                <li>no impossible step orders,</li>
                <li>deterministic transitions.</li>
              </ul>
              <p className="text-white/60 text-sm mt-2">
                Perfect for: onboarding workflows, payroll sequences, compliance chains.
              </p>
            </div>
            
            <div>
              <p className="text-white/80 font-medium">2. State-transition schemas (critical for browser automation)</p>
              <p className="text-white/60 text-sm mb-2">
                Every browser step must satisfy:
              </p>
              <pre className="bg-white/5 border border-white/10 p-2 rounded overflow-x-auto font-mono text-xs mb-2">
                {`(current_state, action) → next_state`}
              </pre>
              <p className="text-white/60 text-sm">
                LLM can propose actions; it cannot violate transitions.
              </p>
            </div>
            
            <div>
              <p className="text-white/80 font-medium">3. Canonical lists (for documents and forms)</p>
              <p className="text-white/60 text-sm">
                Enforce rigid structure so no invented fields appear.
              </p>
            </div>
            
            <div>
              <p className="text-white/80 font-medium">4. Action primitives (for all agent systems)</p>
              <p className="text-white/60 text-sm mb-2">
                Define the <strong>finite allowed action space</strong>:
              </p>
              <pre className="bg-white/5 border border-white/10 p-2 rounded overflow-x-auto font-mono text-xs mb-2">
                {`NAVIGATE, CLICK, FILL, SELECT, UPLOAD, WAIT`}
              </pre>
              <p className="text-white/60 text-sm">
                The agent literally <em>cannot</em> invent impossible actions anymore.
              </p>
            </div>
          </div>
          
          <h2 className="text-xl font-thin text-white/90 mt-8 mb-4">8. How this enforces correctness without CoT or context</h2>
          
          <p className="text-white/80 font-medium">
            The structure <strong>is</strong> the reasoning.
          </p>
          
          <ul className="text-white/60 space-y-2 ml-6 list-disc">
            <li>Ordering is enforced by schema.</li>
            <li>Dependencies encoded in the graph.</li>
            <li>Valid actions enforced by the primitive set.</li>
            <li>Invalid outputs rejected by the verifier.</li>
            <li>No chain-of-thought needed.</li>
            <li>No long context needed.</li>
          </ul>
          
          <p className="text-white/80 italic">
            The model doesn't think — it fills.
          </p>
          
          <h2 className="text-xl font-thin text-white/90 mt-8 mb-4">9. Enterprise Example: Why typical agents break and structural planning doesn't</h2>
          
          <div className="space-y-4">
            <div>
              <p className="text-white/80 font-medium mb-2">Long-context, chain-of-thought planning (common but broken)</p>
              <ul className="text-white/60 space-y-2 text-sm">
                <li>LLM drifts and changes steps each time</li>
                <li>Missing mandatory compliance steps</li>
                <li>Wrong ordering leads to workflow rejection</li>
                <li>Browser steps reference nonexistent selectors</li>
              </ul>
              <p className="text-white/60 italic mt-2">
                This is why almost all current agent frameworks fail at scale.
              </p>
            </div>
            
            <div>
              <p className="text-white/80 font-medium mb-2">Deterministic planning fixes all of this</p>
              <p className="text-white/60">
                Structure + constraints + verification = stable plans.
              </p>
              <p className="text-white/60 mt-2">
                Even in:
              </p>
              <ul className="text-white/50 space-y-1 ml-6 list-disc text-sm">
                <li>multi-step onboarding flows</li>
                <li>payroll cycles</li>
                <li>jurisdiction-heavy compliance rules</li>
                <li>browser automation with dynamic DOMs</li>
                <li>document processing pipelines</li>
              </ul>
            </div>
          </div>
          
          <h2 className="text-xl font-thin text-white/90 mt-8 mb-4">10. Why deterministic planning is mandatory for large-scale automation</h2>
          
          <p>
            Automation systems don't need creativity. They need <em>guaranteed correctness</em>.
          </p>
          
          <p>
            Deterministic planning provides:
          </p>
          
          <ul className="text-white/60 space-y-2 ml-6 list-disc">
            <li><strong>reliability</strong>: no drift between runs</li>
            <li><strong>operational safety</strong>: no invalid actions</li>
            <li><strong>scalability</strong>: workflows become reusable components</li>
            <li><strong>observability</strong>: every step traceable and testable</li>
            <li><strong>maintainability</strong>: plans degrade gracefully, not chaotically</li>
          </ul>
          
          <p className="text-white/80 font-medium">
            This is the missing piece in every agent platform today.
          </p>
          
          <h2 className="text-xl font-thin text-white/90 mt-8 mb-4">11. Research directions</h2>
          
          <ul className="text-white/60 space-y-2 ml-6 list-disc">
            <li>expressive but stable structural plan languages,</li>
            <li>plan-time vs runtime constraints,</li>
            <li>minimizing operator entropy through schema choice,</li>
            <li>designing universal planning primitives for enterprise workflows.</li>
          </ul>
          
          <p>
            Deterministic planning via structural constraints is the only scalable alternative to natural-language reasoning. It is the mechanism that makes agentic systems verifiable, composable, and production-grade.
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


export default function OperatorCompositionPipelinesAndMultiStepGraphsPage() {
  return (
    <div className="space-y-12 max-w-3xl">
      <section>
        <h1 className="text-3xl font-light tracking-tight mb-4">
          Operator Composition (Pipelines & Multi-Step Graphs)
        </h1>
        <p className="text-[#8C8C8C] text-sm mb-8">
          Composable operators, not monolithic agents
        </p>
      </section>

      <article className="prose max-w-none">
        <div className="text-[#5A5A5A] text-sm leading-relaxed space-y-6">
          <p>
            Large-scale automation systems are not powered by a single intelligent agent.<br />
            They are powered by <strong>composable operators</strong> — each one verifiable, domain-bound, and stable.<br />
            When these operators are chained correctly, they produce workflows that scale across browsers, documents, compliance rules, business logic, and multi-jurisdiction environments.
          </p>
          
          <p>
            This section formalizes how verified operators compose into pipelines and graphs, and why this approach is the only reliable method for building production automation systems.
          </p>
          
          <p>
            It is intentionally general, but directly meaningful for browser automation, HR/payroll flows, onboarding workflows, document extraction, and enterprise orchestration.
          </p>
          
          <h2 className="text-xl font-light text-[#1A1A1A] mt-8 mb-4">1. Why composition matters</h2>
          
          <p>
            Single-LLM calls cannot handle:
          </p>
          
          <ul className="text-[#5A5A5A] space-y-2 ml-6 list-disc">
            <li>multi-step tasks,</li>
            <li>environment-dependent actions,</li>
            <li>workflows with branching logic,</li>
            <li>state transitions,</li>
            <li>conditional paths,</li>
            <li>cross-document dependencies.</li>
          </ul>
          
          <p>
            But most agent frameworks still treat the LLM as an oracle: <strong>"figure it out end-to-end."</strong><br />
            This fails in automation.
          </p>
          
          <p className="text-[#2A2A2A] font-medium">
            Real systems require <strong>modular operators</strong> with <strong>verifiers</strong> in between.
          </p>
          
          <h2 className="text-xl font-light text-[#1A1A1A] mt-8 mb-4">2. Formal structure of operator composition</h2>
          
          <p>
            Let each operator be a function:
          </p>
          
          <pre className="bg-[#FFFFFF] border border-[#E8E8E6] p-4 rounded overflow-x-auto mb-6 font-mono text-sm">
            {`oᵢ : Sᵢ → Sᵢ₊₁`}
          </pre>
          
          <p>
            Where:
          </p>
          
          <ul className="text-[#5A5A5A] space-y-2 ml-6 list-disc">
            <li>Sᵢ is the input domain,</li>
            <li>Sᵢ₊₁ is the output domain,</li>
            <li>the transition Sᵢ → Sᵢ₊₁ is verified.</li>
          </ul>
          
          <p>
            A pipeline is simply:
          </p>
          
          <pre className="bg-[#FFFFFF] border border-[#E8E8E6] p-4 rounded overflow-x-auto mb-6 font-mono text-sm">
            {`S₀ —o₁→ S₁ —o₂→ S₂ —o₃→ … —oₙ→ Sₙ`}
          </pre>
          
          <p>
            Each step:
          </p>
          
          <ul className="text-[#5A5A5A] space-y-2 ml-6 list-disc">
            <li>isolates the domain,</li>
            <li>rewrites the representation,</li>
            <li>applies the operator,</li>
            <li>verifies output,</li>
            <li>integrates the new state.</li>
          </ul>
          
          <p className="text-[#2A2A2A] italic">
            This makes the overall system <strong>predictable, testable, and stable</strong>.
          </p>
          
          <h2 className="text-xl font-light text-[#1A1A1A] mt-8 mb-4">3. Why composition stabilizes automation workflows</h2>
          
          <p>
            When each operator is verified:
          </p>
          
          <ul className="text-[#5A5A5A] space-y-2 ml-6 list-disc">
            <li>failure becomes <strong>localized</strong> (easy to diagnose),</li>
            <li>plans cannot corrupt the global state,</li>
            <li>errors cannot propagate downstream,</li>
            <li>partial results remain valid,</li>
            <li>pipelines remain safe even with unstable environments.</li>
          </ul>
          
          <p>
            In contrast, end-to-end agent reasoning:
          </p>
          
          <ul className="text-[#5A5A5A] space-y-2 ml-6 list-disc">
            <li>fails silently,</li>
            <li>loses global structure,</li>
            <li>mixes domains,</li>
            <li>collapses planning and execution,</li>
            <li>produces non-reproducible results.</li>
          </ul>
          
          <h2 className="text-xl font-light text-[#1A1A1A] mt-8 mb-4">4. Real Example: Browser Automation Pipeline</h2>
          
          <p>
            A browser automation pipeline might contain operators like:
          </p>
          
          <pre className="bg-[#FFFFFF] border border-[#E8E8E6] p-4 rounded overflow-x-auto mb-6 font-mono text-sm">
            {`extract_DOM → canonicalize_DOM → choose_action → verify_action → execute_action → update_state`}
          </pre>
          
          <p>
            Each part is a <strong>separate operator</strong>.
          </p>
          
          <div className="border-l-2 border-[#DADADA] pl-6 my-6">
            <p className="text-[#2A2A2A] font-medium mb-2">Composition matters because:</p>
            <ul className="text-[#5A5A5A] space-y-2 text-sm">
              <li>DOM extraction may succeed even if action selection fails.</li>
              <li>Action selection can be re-run without reloading the page.</li>
              <li>Verifier stops invalid actions (e.g., missing selectors) before damage.</li>
              <li>Execution only happens on validated actions.</li>
            </ul>
            <p className="text-[#2A2A2A] italic mt-3">
              This makes browser flows <strong>safe</strong>, <strong>repeatable</strong>, and <strong>detectable when broken</strong>.
            </p>
          </div>
          
          <h2 className="text-xl font-light text-[#1A1A1A] mt-8 mb-4">5. Real Example: Document → Workflow Graph</h2>
          
          <p>
            Document-heavy workflows often require multi-operator chains:
          </p>
          
          <pre className="bg-[#FFFFFF] border border-[#E8E8E6] p-4 rounded overflow-x-auto mb-6 font-mono text-sm">
            {`PDF → text_extractor → section_locator → table_normalizer → field_extractor → field_validator → workflow_builder`}
          </pre>
          
          <div className="border-l-2 border-[#DADADA] pl-6 my-6">
            <p className="text-[#2A2A2A] font-medium mb-2">Each operator handles one domain:</p>
            <ul className="text-[#5A5A5A] space-y-1 text-sm">
              <li>Extractor → raw text</li>
              <li>Locator → relevant sections</li>
              <li>Normalizer → canonical tables</li>
              <li>Extractor → values</li>
              <li>Validator → correct structure</li>
              <li>Builder → workflow steps</li>
            </ul>
            <p className="text-[#5A5A5A] mt-3">
              If one operator fails, nothing downstream becomes corrupted.
            </p>
          </div>
          
          <h2 className="text-xl font-light text-[#1A1A1A] mt-8 mb-4">6. Multi-step graphs (beyond pipelines)</h2>
          
          <p>
            Many real workflows require branching or merging.<br />
            This is modeled as a directed acyclic graph (DAG):
          </p>
          
          <pre className="bg-[#FFFFFF] border border-[#E8E8E6] p-4 rounded overflow-x-auto mb-6 font-mono text-sm">
{`         o₂
       ↗   ↘
o₁ —→ o₃   o₄ —→ o₆
       ↘   ↗
         o₅`}
          </pre>
          
          <p>
            Where:
          </p>
          
          <ul className="text-[#5A5A5A] space-y-2 ml-6 list-disc">
            <li>o₃ and o₄ share partial state,</li>
            <li>o₆ consumes their combined validated outputs.</li>
          </ul>
          
          <p>
            This is useful for:
          </p>
          
          <ul className="text-[#5A5A5A] space-y-2 ml-6 list-disc">
            <li>multi-jurisdiction compliance workflows,</li>
            <li>multi-form onboarding flows,</li>
            <li>payroll adjustments requiring multiple rules,</li>
            <li>browser agents handling multiple UI branches.</li>
          </ul>
          
          <div className="border-l-2 border-[#DADADA] pl-6 my-6">
            <p className="text-[#2A2A2A] font-medium mb-2">The verifier ensures graph-level integrity</p>
            <ul className="text-[#5A5A5A] space-y-1 text-sm">
              <li>No invalid merges</li>
              <li>No circular dependencies</li>
              <li>No inconsistent partial states</li>
            </ul>
          </div>
          
          <h2 className="text-xl font-light text-[#1A1A1A] mt-8 mb-4">7. Why unverified composition fails</h2>
          
          <p>
            Agent frameworks that compose <em>raw LLM outputs</em> fail because:
          </p>
          
          <ul className="text-[#5A5A5A] space-y-2 ml-6 list-disc">
            <li>operators receive corrupt state,</li>
            <li>planning becomes non-deterministic,</li>
            <li>browser steps depend on hallucinated selectors,</li>
            <li>compliance steps contradict each other,</li>
            <li>document flows diverge from schemas.</li>
          </ul>
          
          <p className="text-[#2A2A2A] italic">
            Without verified composition, errors grow exponentially.
          </p>
          
          <h2 className="text-xl font-light text-[#1A1A1A] mt-8 mb-4">8. Composition and Zero-Context (how they connect)</h2>
          
          <p>
            Zero-context ensures each operator receives:
          </p>
          
          <ul className="text-[#5A5A5A] space-y-2 ml-6 list-disc">
            <li>a clean state,</li>
            <li>a single domain,</li>
            <li>a canonical representation.</li>
          </ul>
          
          <p>
            Composition ensures:
          </p>
          
          <ul className="text-[#5A5A5A] space-y-2 ml-6 list-disc">
            <li>each operator hands off a verified state,</li>
            <li>downstream operators cannot receive noise.</li>
          </ul>
          
          <p className="text-[#2A2A2A] font-medium">
            Together they create a <strong>verifiable multi-step system</strong>.
          </p>
          
          <h2 className="text-xl font-light text-[#1A1A1A] mt-8 mb-4">9. Why this matters for large-scale automation</h2>
          
          <p>
            This model is essential for any real automation platform:
          </p>
          
          <ul className="text-[#5A5A5A] space-y-2 ml-6 list-disc">
            <li>payroll onboarding,</li>
            <li>compliance workflows,</li>
            <li>HR automation,</li>
            <li>browser-based task execution,</li>
            <li>multi-document pipelines,</li>
            <li>financial reconciliation,</li>
            <li>ID verification.</li>
          </ul>
          
          <p>
            Because real systems are multi-step systems.
          </p>
          
          <p className="text-[#2A2A2A] font-medium">
            Verified operator composition is the only scalable method.
          </p>
          
          <h2 className="text-xl font-light text-[#1A1A1A] mt-8 mb-4">10. Research Directions</h2>
          
          <ul className="text-[#5A5A5A] space-y-2 ml-6 list-disc">
            <li>operator algebra for automation workflows,</li>
            <li>stable graph composition primitives,</li>
            <li>error-localization metrics,</li>
            <li>canonical domain boundaries for large-scale pipelines,</li>
            <li>mapping LLM operators to formal transition systems.</li>
          </ul>
          
          <p>
            Operator composition is the backbone of reliable AI automation.<br />
            It is what makes large workflows predictable, auditable, and scalable.
          </p>
        </div>
      </article>

      <section className="text-[#8C8C8C] text-sm border-t border-[#E8E8E6] pt-6">
        <a href="/ai-era" className="hover:text-[#5A5A5A] transition-colors">
          ← Back to AI Era
        </a>
      </section>
    </div>
  )
}


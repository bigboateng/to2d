export default function FailurePathsAndCorrectionLoopsPage() {
  return (
    <div className="space-y-12 max-w-3xl">
      <section>
        <h1 className="text-3xl font-light tracking-tight mb-4">
          Failure Paths & Correction Loops
        </h1>
        <p className="text-[#8C8C8C] text-sm mb-8">
          Deterministic recovery without drift
        </p>
      </section>

      <article className="prose max-w-none">
        <div className="text-[#5A5A5A] text-sm leading-relaxed space-y-6">
          <p>
            Most agent systems break not because the environment is difficult, but because <strong>they have no deterministic way to handle failure</strong>. When an LLM output is invalid — a wrong selector, a missing field, an impossible workflow step — typical agents retry blindly, produce new errors, or drift into different attractor regions.
          </p>
          
          <p>
            Production automation systems cannot behave this way. They need <em>structured failure semantics</em> and <em>deterministic correction loops</em> that recover state without introducing noise.
          </p>
          
          <p>
            This section defines failure path design, correction loops, and how they integrate with Zero-Context Architecture and operator composition.
          </p>
          
          <h2 className="text-xl font-light text-[#1A1A1A] mt-8 mb-4">1. Why failure handling is the weakest part of most agents</h2>
          
          <p>
            LLM-driven agents often treat failure as:
          </p>
          
          <ul className="text-[#5A5A5A] space-y-2 ml-6 list-disc">
            <li>a reason to regenerate the whole plan,</li>
            <li>a prompt to "try again" with more context,</li>
            <li>something to patch with chain-of-thought,</li>
            <li>a signal to produce a completely different output.</li>
          </ul>
          
          <p>
            This causes:
          </p>
          
          <ul className="text-[#5A5A5A] space-y-2 ml-6 list-disc">
            <li>divergent retries,</li>
            <li>nondeterministic behavior,</li>
            <li>looping browser automations,</li>
            <li>oscillation between attractor states,</li>
            <li>cascading corruption of state.</li>
          </ul>
          
          <p className="text-[#2A2A2A] font-medium">
            Without deterministic failure paths, all reliability collapses.
          </p>
          
          <h2 className="text-xl font-light text-[#1A1A1A] mt-8 mb-4">2. Formal structure of failure paths</h2>
          
          <p>
            At each operator stage we have:
          </p>
          
          <pre className="bg-[#FFFFFF] border border-[#E8E8E6] p-4 rounded overflow-x-auto mb-6 font-mono text-sm">
{`zₜ = Pₛ(xₜ)
uₜ = f(zₜ)
yₜ = V(uₜ)`}
          </pre>
          
          <p>
            If verification fails:
          </p>
          
          <pre className="bg-[#FFFFFF] border border-[#E8E8E6] p-4 rounded overflow-x-auto mb-6 font-mono text-sm">
            {`yₜ = ⊥      (invalid transition)`}
          </pre>
          
          <p>
            Now the system must transition into a <em>failure path operator</em>, not retry the same transformation.
          </p>
          
          <p>
            Let the failure operator be:
          </p>
          
          <pre className="bg-[#FFFFFF] border border-[#E8E8E6] p-4 rounded overflow-x-auto mb-6 font-mono text-sm">
            {`F : (xₜ, uₜ) → xₜ′`}
          </pre>
          
          <p>
            Where xₜ′ is a safe, noise-free recovery state.
          </p>
          
          <h2 className="text-xl font-light text-[#1A1A1A] mt-8 mb-4">3. Types of deterministic failure paths</h2>
          
          <div className="space-y-4">
            <div>
              <p className="text-[#2A2A2A] font-medium">1. Reject & Re-extract</p>
              <p className="text-[#5A5A5A] text-sm mb-2">
                If the output is invalid, discard it and re-run the domain extractor:
              </p>
              <pre className="bg-[#FFFFFF] border border-[#E8E8E6] p-2 rounded overflow-x-auto font-mono text-xs mb-2">
                {`xₜ′ = reproject(xₜ)`}
              </pre>
              <p className="text-[#5A5A5A] text-sm">
                Used in:
              </p>
              <ul className="text-[#8C8C8C] space-y-1 ml-6 list-disc text-xs">
                <li>browser flows when DOM changes mid-cycle,</li>
                <li>document extraction when a field is missing.</li>
              </ul>
            </div>
            
            <div>
              <p className="text-[#2A2A2A] font-medium">2. Reject & Canonicalize</p>
              <p className="text-[#5A5A5A] text-sm mb-2">
                Invalid outputs trigger a canonical rewrite:
              </p>
              <pre className="bg-[#FFFFFF] border border-[#E8E8E6] p-2 rounded overflow-x-auto font-mono text-xs mb-2">
                {`zₜ′ = canonicalize(zₜ)`}
              </pre>
              <p className="text-[#5A5A5A] text-sm">
                Used in:
              </p>
              <ul className="text-[#8C8C8C] space-y-1 ml-6 list-disc text-xs">
                <li>inconsistent tables,</li>
                <li>malformed JSON from LLM outputs.</li>
              </ul>
            </div>
            
            <div>
              <p className="text-[#2A2A2A] font-medium">3. Fallback operator</p>
              <p className="text-[#5A5A5A] text-sm mb-2">
                Switch to a simpler or more constrained operator:
              </p>
              <pre className="bg-[#FFFFFF] border border-[#E8E8E6] p-2 rounded overflow-x-auto font-mono text-xs mb-2">
                {`xₜ′ = fallback(oᵢ)(xₜ)`}
              </pre>
              <p className="text-[#5A5A5A] text-sm">
                Used in:
              </p>
              <ul className="text-[#8C8C8C] space-y-1 ml-6 list-disc text-xs">
                <li>browser actions: fallback to direct selector search,</li>
                <li>document fields: fallback to regex extraction.</li>
              </ul>
            </div>
            
            <div>
              <p className="text-[#2A2A2A] font-medium">4. Escalation path</p>
              <p className="text-[#5A5A5A] text-sm mb-2">
                If all operators fail:
              </p>
              <pre className="bg-[#FFFFFF] border border-[#E8E8E6] p-2 rounded overflow-x-auto font-mono text-xs mb-2">
                {`xₜ′ = escalate(xₜ)`}
              </pre>
              <p className="text-[#5A5A5A] text-sm mb-2">
                Where escalation is fully deterministic:
              </p>
              <ul className="text-[#8C8C8C] space-y-1 ml-6 list-disc text-xs">
                <li>log issue,</li>
                <li>alert human reviewer,</li>
                <li>store trace.</li>
              </ul>
              <p className="text-[#5A5A5A] text-sm">
                No guessing.
              </p>
            </div>
            
            <div>
              <p className="text-[#2A2A2A] font-medium">5. Branch to alternative graph edge</p>
              <p className="text-[#5A5A5A] text-sm mb-2">
                In multi-jurisdiction or multi-form workflows, failure may indicate a different valid branch:
              </p>
              <pre className="bg-[#FFFFFF] border border-[#E8E8E6] p-2 rounded overflow-x-auto font-mono text-xs">
                {`xₜ′ = follow_edge(G, condition)`}
              </pre>
            </div>
          </div>
          
          <h2 className="text-xl font-light text-[#1A1A1A] mt-8 mb-4">4. Real Example: Browser Automation Failure Loop</h2>
          
          <div className="space-y-4">
            <div>
              <p className="text-[#2A2A2A] font-medium mb-2">Situation</p>
              <p className="text-[#5A5A5A] mb-2">
                LLM proposes an action:
              </p>
              <pre className="bg-[#FFFFFF] border border-[#E8E8E6] p-2 rounded overflow-x-auto font-mono text-xs mb-2">
                {`click(#submit)`}
              </pre>
              <p className="text-[#5A5A5A]">
                Verifier sees:
              </p>
              <ul className="text-[#8C8C8C] space-y-1 ml-6 list-disc text-xs">
                <li>selector missing,</li>
                <li>element disabled,</li>
                <li>element off-screen.</li>
              </ul>
            </div>
            
            <div>
              <p className="text-[#2A2A2A] font-medium mb-2">Correct failure path</p>
              <pre className="bg-[#FFFFFF] border border-[#E8E8E6] p-4 rounded overflow-x-auto font-mono text-sm mb-2">
{`1. Reject action
2. Re-extract visible DOM slice
3. Canonicalize DOM
4. Re-run operator f on new representation`}
              </pre>
              <p className="text-[#5A5A5A]">
                This sequence is deterministic.<br />
                No drift.
              </p>
            </div>
            
            <div>
              <p className="text-[#2A2A2A] font-medium mb-2">Incorrect (typical agent) behavior</p>
              <ul className="text-[#5A5A5A] space-y-1 text-sm">
                <li>Retry same prompt with more context</li>
                <li>Add chain-of-thought</li>
                <li>Produce new wrong selectors</li>
                <li>Loop infinitely</li>
              </ul>
            </div>
          </div>
          
          <h2 className="text-xl font-light text-[#1A1A1A] mt-8 mb-4">5. Real Example: Document Extraction Failure Loop</h2>
          
          <div className="space-y-4">
            <div>
              <p className="text-[#2A2A2A] font-medium mb-2">Situation</p>
              <p className="text-[#5A5A5A] mb-2">
                Model extracted:
              </p>
              <pre className="bg-[#FFFFFF] border border-[#E8E8E6] p-2 rounded overflow-x-auto font-mono text-xs mb-2">
                {`start_date: "Monday"`}
              </pre>
              <p className="text-[#5A5A5A]">
                Verifier rejects (wrong format).
              </p>
            </div>
            
            <div>
              <p className="text-[#2A2A2A] font-medium mb-2">Correct failure path</p>
              <ol className="text-[#5A5A5A] space-y-1 ml-6 list-decimal text-sm">
                <li>Re-extract the relevant line</li>
                <li>Rewrite with format constraints</li>
                <li>Ask operator for <strong>only the date token</strong></li>
                <li>Re-verify</li>
              </ol>
            </div>
            
            <div>
              <p className="text-[#2A2A2A] font-medium mb-2">Why this works</p>
              <p className="text-[#5A5A5A]">
                The failure never corrupts state.<br />
                The correction loop produces the same result every time.
              </p>
            </div>
          </div>
          
          <h2 className="text-xl font-light text-[#1A1A1A] mt-8 mb-4">6. Real Example: Compliance / Payroll Workflow Failure</h2>
          
          <div className="space-y-4">
            <div>
              <p className="text-[#2A2A2A] font-medium mb-2">Situation</p>
              <p className="text-[#5A5A5A]">
                LLM proposes a compliance step that violates jurisdiction rules.
              </p>
            </div>
            
            <div>
              <p className="text-[#2A2A2A] font-medium mb-2">Correct failure path</p>
              <pre className="bg-[#FFFFFF] border border-[#E8E8E6] p-4 rounded overflow-x-auto font-mono text-sm">
{`1. Reject step
2. Re-align employee data with jurisdiction schema
3. Rebuild required step set
4. Re-run operator only for missing subset`}
              </pre>
              <p className="text-[#5A5A5A] mt-2">
                No large regeneration. No drift.
              </p>
            </div>
          </div>
          
          <h2 className="text-xl font-light text-[#1A1A1A] mt-8 mb-4">7. Why deterministic correction stabilizes multi-step systems</h2>
          
          <div className="space-y-4">
            <div>
              <p className="text-[#2A2A2A] font-medium">1. Localizes failure</p>
              <p className="text-[#5A5A5A]">
                A single invalid step doesn't poison the entire workflow.
              </p>
            </div>
            
            <div>
              <p className="text-[#2A2A2A] font-medium">2. Makes retries meaningful</p>
              <p className="text-[#5A5A5A]">
                Retries operate on a corrected domain, not the same error loop.
              </p>
            </div>
            
            <div>
              <p className="text-[#2A2A2A] font-medium">3. Limits entropy growth</p>
              <p className="text-[#5A5A5A]">
                No additional context or narrative.
              </p>
            </div>
            
            <div>
              <p className="text-[#2A2A2A] font-medium">4. Maintains global consistency</p>
              <p className="text-[#5A5A5A]">
                State transitions remain valid.
              </p>
            </div>
            
            <div>
              <p className="text-[#2A2A2A] font-medium">5. Enables safe operator composition</p>
              <p className="text-[#5A5A5A]">
                Downstream operators receive verified, corrected states.
              </p>
            </div>
          </div>
          
          <h2 className="text-xl font-light text-[#1A1A1A] mt-8 mb-4">8. Correction Loops in Graph-Based Workflows</h2>
          
          <p>
            In DAG workflows, failure recovery depends on graph structure.
          </p>
          
          <p>
            If operator oᵢ fails:
          </p>
          
          <ul className="text-[#5A5A5A] space-y-2 ml-6 list-disc">
            <li>oᵢ₊₁ is skipped,</li>
            <li>oᵢ feeds into a correction node,</li>
            <li>the graph resumes at a safe merge point.</li>
          </ul>
          
          <p>
            This is essential for:
          </p>
          
          <ul className="text-[#5A5A5A] space-y-2 ml-6 list-disc">
            <li>multi-form onboarding,</li>
            <li>jurisdiction-dependent flows,</li>
            <li>payroll cycles with conditional rules.</li>
          </ul>
          
          <h2 className="text-xl font-light text-[#1A1A1A] mt-8 mb-4">9. Designing correction loops for large-scale automation</h2>
          
          <p>
            Correction loops must be:
          </p>
          
          <ul className="text-[#5A5A5A] space-y-2 ml-6 list-disc">
            <li>deterministic,</li>
            <li>stateless or minimally stateful,</li>
            <li>domain-specific,</li>
            <li>schema-aware,</li>
            <li>verifiable.</li>
          </ul>
          
          <p>
            Most LLM agents fail because their failure behavior is:
          </p>
          
          <ul className="text-[#5A5A5A] space-y-2 ml-6 list-disc">
            <li>non-deterministic,</li>
            <li>free-form,</li>
            <li>prompt-influenced,</li>
            <li>context-influenced.</li>
          </ul>
          
          <p className="text-[#2A2A2A] italic">
            You eliminate the chaos.
          </p>
          
          <h2 className="text-xl font-light text-[#1A1A1A] mt-8 mb-4">10. Research Directions</h2>
          
          <ul className="text-[#5A5A5A] space-y-2 ml-6 list-disc">
            <li>automated classification of failure categories,</li>
            <li>architecture for failure-dependent branching graphs,</li>
            <li>domain-driven fallback operators,</li>
            <li>formal stability proofs for correction systems,</li>
            <li>error-bound metrics under repeated failure loops.</li>
          </ul>
          
          <p>
            Failure Paths & Correction Loops are the safety layer of automation —
            the reason multi-step systems stay stable instead of collapsing.
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


export default function ClosedLoopVerificationArchitecturePage() {
  return (
    <div className="space-y-12 max-w-3xl">
      <section>
        <h1 className="text-3xl font-thin tracking-tight mb-4">
          Closed-Loop Verification Architecture
        </h1>
        <p className="text-white/50 text-sm mb-8">
          Proposals meet guarantees
        </p>
      </section>

      <article className="prose prose-invert max-w-none">
        <div className="text-white/70 text-sm leading-relaxed space-y-6">
          <p>
            LLMs produce <em>proposals</em>, not guarantees. Verifiers produce <em>guarantees</em>, not proposals.<br />
            A reliable agentic system emerges only when the two are fused into a <strong>closed-loop architecture</strong> where every operator step is followed by a deterministic verification step that stabilizes the system before state transitions occur.
          </p>
          
          <p>
            This document formalizes that architecture and includes real examples that reveal why this pattern is necessary for enterprise automation, browser workflows, and document-heavy systems.
          </p>
          
          <h2 className="text-xl font-thin text-white/90 mt-8 mb-4">1. Why LLM-driven systems need closed loops</h2>
          
          <p>
            LLMs are nonlinear operators with:
          </p>
          
          <ul className="text-white/60 space-y-2 ml-6 list-disc">
            <li>unpredictable manifold drift,</li>
            <li>domain-sensitive outputs,</li>
            <li>attractor bias,</li>
            <li>no inherent error boundaries.</li>
          </ul>
          
          <p>
            Open-loop use (just "call the model and hope") leads to:
          </p>
          
          <ul className="text-white/60 space-y-2 ml-6 list-disc">
            <li>compounding errors,</li>
            <li>unstable multi-step plans,</li>
            <li>hallucination propagation,</li>
            <li>runaway loops in browser agents.</li>
          </ul>
          
          <p className="text-white/80 font-medium">
            Closed-loop verification stops the instability.
          </p>
          
          <h2 className="text-xl font-thin text-white/90 mt-8 mb-4">2. The closed-loop structure</h2>
          
          <p>
            Every agent step follows the same cycle:
          </p>
          
          <pre className="bg-white/5 border border-white/10 p-4 rounded overflow-x-auto mb-6 font-mono text-sm">
{`1. Prepare:      Project state → canonical slice
2. Propose:      LLM/operator produces uₜ
3. Verify:       Deterministic validator produces yₜ
4. Integrate:    Update state with verified transition
5. Feedback:     State feeds next cycle`}
          </pre>
          
          <p>
            Formally:
          </p>
          
          <pre className="bg-white/5 border border-white/10 p-4 rounded overflow-x-auto mb-6 font-mono text-sm">
{`zₜ   = Pₛ(xₜ)
uₜ   = f(zₜ)
yₜ   = V(uₜ)
xₜ₊₁ = I(xₜ, yₜ)`}
          </pre>
          
          <p>
            The system is stable <strong>only</strong> when V enforces strict domain boundaries.
          </p>
          
          <h2 className="text-xl font-thin text-white/90 mt-8 mb-4">3. What the verifier actually does</h2>
          
          <p>
            A verifier is not an LLM.<br />
            It is a deterministic function that enforces:
          </p>
          
          <ul className="text-white/60 space-y-2 ml-6 list-disc">
            <li>structure,</li>
            <li>preconditions,</li>
            <li>invariants,</li>
            <li>domain constraints,</li>
            <li>failure semantics.</li>
          </ul>
          
          <div className="border-l-2 border-white/20 pl-6 my-6">
            <p className="text-white/80 font-medium mb-2">Verifier Outputs</p>
            <ul className="text-white/60 space-y-2 text-sm">
              <li><strong>Valid</strong>: output passes all checks → accepted</li>
              <li><strong>Invalid</strong>: output violates structure → rejected</li>
              <li><strong>Corrected</strong>: output is fixed using deterministic rules</li>
              <li><strong>Escalated</strong>: output is impossible → trigger fallback or human review</li>
            </ul>
          </div>
          
          <h2 className="text-xl font-thin text-white/90 mt-8 mb-4">4. Real examples</h2>
          
          <div className="space-y-4">
            <div className="border-l-2 border-white/20 pl-6">
              <p className="text-white/80 font-medium mb-2">Example 1: Browser actions</p>
              <p className="text-white/60 mb-2"><strong>Operator:</strong></p>
              <pre className="bg-white/5 border border-white/10 p-2 rounded overflow-x-auto font-mono text-xs mb-2">
                {`actions = f(DOM_slice)`}
              </pre>
              <p className="text-white/60 mb-2"><strong>Verifier:</strong></p>
              <ul className="text-white/50 space-y-1 ml-6 list-disc text-xs">
                <li>does each action target a valid selector?</li>
                <li>does the sequence avoid unsafe patterns?</li>
                <li>does each step match the page's actual DOM state?</li>
              </ul>
              <p className="text-white/60 mt-2">
                Fake or incorrect selectors are caught before execution.
              </p>
            </div>
            
            <div className="border-l-2 border-white/20 pl-6">
              <p className="text-white/80 font-medium mb-2">Example 2: Document extraction</p>
              <p className="text-white/60 mb-2"><strong>Operator:</strong></p>
              <pre className="bg-white/5 border border-white/10 p-2 rounded overflow-x-auto font-mono text-xs mb-2">
                {`fields = f(document_section)`}
              </pre>
              <p className="text-white/60 mb-2"><strong>Verifier:</strong></p>
              <ul className="text-white/50 space-y-1 ml-6 list-disc text-xs">
                <li>are required fields present?</li>
                <li>do types match schema?</li>
                <li>do values obey format constraints?</li>
              </ul>
              <p className="text-white/60 mt-2">
                If the operator invents a value (hallucination), verification blocks it instead of letting it propagate.
              </p>
            </div>
            
            <div className="border-l-2 border-white/20 pl-6">
              <p className="text-white/80 font-medium mb-2">Example 3: Compliance workflow</p>
              <p className="text-white/60 mb-2"><strong>Operator:</strong></p>
              <pre className="bg-white/5 border border-white/10 p-2 rounded overflow-x-auto font-mono text-xs mb-2">
                {`steps = f(employee_data)`}
              </pre>
              <p className="text-white/60 mb-2"><strong>Verifier:</strong></p>
              <ul className="text-white/50 space-y-1 ml-6 list-disc text-xs">
                <li>cross-check against statutory rules</li>
                <li>check ordering constraints</li>
                <li>detect missing dependencies</li>
              </ul>
              <p className="text-white/60 mt-2">
                Even if the model tries to "guess" a missing rule, the verifier stops it.
              </p>
            </div>
          </div>
          
          <h2 className="text-xl font-thin text-white/90 mt-8 mb-4">5. Why verification stabilizes the system</h2>
          
          <div className="space-y-4">
            <div>
              <p className="text-white/80 font-medium">Prevents drift</p>
              <p className="text-white/60">
                Incorrect outputs never enter the state, so the trajectory stays on the correct manifold.
              </p>
            </div>
            
            <div>
              <p className="text-white/80 font-medium">Limits error propagation</p>
              <p className="text-white/60">
                Even if f produces an unstable output, I only integrates <strong>validated</strong> transitions.
              </p>
            </div>
            
            <div>
              <p className="text-white/80 font-medium">Creates predictable boundaries</p>
              <p className="text-white/60">
                Schemas + invariants + deterministic correction make behavior inspectable.
              </p>
            </div>
            
            <div>
              <p className="text-white/80 font-medium">Enables reusability</p>
              <p className="text-white/60">
                Because every step is verified, operators can be mixed, swapped, or pipelined safely.
              </p>
            </div>
          </div>
          
          <h2 className="text-xl font-thin text-white/90 mt-8 mb-4">6. Verifier design patterns</h2>
          
          <div className="space-y-3">
            <div>
              <p className="text-white/80 font-medium">1. Schema validators</p>
              <ul className="text-white/60 space-y-1 ml-6 list-disc text-sm">
                <li>JSON schema checks</li>
                <li>structural constraints</li>
                <li>field-level invariants</li>
              </ul>
            </div>
            
            <div>
              <p className="text-white/80 font-medium">2. Semantic validators (deterministic)</p>
              <ul className="text-white/60 space-y-1 ml-6 list-disc text-sm">
                <li>referential integrity between fields</li>
                <li>rule-based business logic</li>
              </ul>
            </div>
            
            <div>
              <p className="text-white/80 font-medium">3. State-dependent validators</p>
              <ul className="text-white/60 space-y-1 ml-6 list-disc text-sm">
                <li>DOM-state validation</li>
                <li>step precondition checks</li>
              </ul>
            </div>
            
            <div>
              <p className="text-white/80 font-medium">4. Cross-step consistency checks</p>
              <ul className="text-white/60 space-y-1 ml-6 list-disc text-sm">
                <li>ensure outputs don't contradict earlier transitions</li>
              </ul>
            </div>
            
            <div>
              <p className="text-white/80 font-medium">5. Error-correction rules</p>
              <ul className="text-white/60 space-y-1 ml-6 list-disc text-sm">
                <li>prune unnecessary fields</li>
                <li>canonicalize values</li>
                <li>normalize formats</li>
              </ul>
            </div>
          </div>
          
          <h2 className="text-xl font-thin text-white/90 mt-8 mb-4">7. Why retries are not verification</h2>
          
          <p>
            Retries only repeat the same operator on the same domain.<br />
            Verification ensures correctness <em>before</em> integration.
          </p>
          
          <div className="border-l-2 border-white/20 pl-6 my-6">
            <p className="text-white/80 font-medium mb-2">Example</p>
            <p className="text-white/60 mb-2">
              If an LLM proposes a browser action targeting a nonexistent selector:
            </p>
            <ul className="text-white/60 space-y-2 text-sm">
              <li>Retry → repeats the incorrect proposal</li>
              <li>Verification → rejects immediately and requests new projection or fallback</li>
            </ul>
          </div>
          
          <h2 className="text-xl font-thin text-white/90 mt-8 mb-4">8. Closed-loop architecture is the backbone of verifiable agents</h2>
          
          <p>
            Most agent failures come from:
          </p>
          
          <ul className="text-white/60 space-y-2 ml-6 list-disc">
            <li>mixing domains,</li>
            <li>large noisy context,</li>
            <li>unverified outputs,</li>
            <li>drifting latent trajectories.</li>
          </ul>
          
          <p>
            Closed-loop systems correct this by enforcing a <strong>tight, deterministic supervision layer</strong> around every operator.
          </p>
          
          <p>
            This produces:
          </p>
          
          <ul className="text-white/60 space-y-2 ml-6 list-disc">
            <li>traceability,</li>
            <li>stable multi-step workflows,</li>
            <li>consistent state transitions,</li>
            <li>enterprise-grade reliability.</li>
          </ul>
          
          <h2 className="text-xl font-thin text-white/90 mt-8 mb-4">9. Example: End-to-end loop in a payroll workflow</h2>
          
          <ol className="text-white/60 space-y-2 ml-6 list-decimal">
            <li><strong>State:</strong> employee profile + jurisdiction</li>
            <li><strong>Projection:</strong> extract only required fields for this payroll cycle</li>
            <li><strong>Operator:</strong> LLM proposes payroll adjustments</li>
            <li><strong>Verifier:</strong>
              <ul className="text-white/50 space-y-1 ml-6 list-disc text-sm mt-1">
                <li>check statutory rules</li>
                <li>validate tax table alignment</li>
                <li>detect missing deductions</li>
              </ul>
            </li>
            <li><strong>Integrator:</strong> update payroll record</li>
            <li><strong>Feedback:</strong> next cycle uses updated state</li>
          </ol>
          
          <p className="text-white/80 italic">
            This is not fancy. It is correct.
          </p>
          
          <h2 className="text-xl font-thin text-white/90 mt-8 mb-4">10. Research directions</h2>
          
          <ul className="text-white/60 space-y-2 ml-6 list-disc">
            <li>Designing minimal sufficient verifiers</li>
            <li>Operator-verifier co-design for stability</li>
            <li>Schema generation models with formal guarantees</li>
            <li>Attractor mapping under verified feedback loops</li>
            <li>Compositional stability analysis for multi-agent architectures</li>
          </ul>
          
          <p>
            Closed-loop verification is the core mechanism that makes LLM-driven systems reliable, inspectable, and suitable for production-scale automation.
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


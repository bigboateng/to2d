import { ApplyConcept, type PromptSpec } from '@/components/ApplyConcept'

const promptSpec: PromptSpec = {
  problem: {
    title: 'Apply to a problem',
    template: `Apply Zero-Context Architecture to the following problem.

Follow this process:
1. Project — reduce to minimal slice
2. Canonicalize — one domain, one goal, one operator
3. Identify constraints — known, unknown, ignorable
4. Ask questions to reduce uncertainty
5. Propose minimal next step

Problem:
{{input}}

Return:
- Projected slice
- Canonical form
- Constraints (known, unknown, non-critical)
- Questions to reduce uncertainty
- Minimal next step`,
  },
  codebase: {
    title: 'Apply in a codebase',
    template: `Use Zero-Context Architecture to analyze a codebase.

Problem:
{{input}}

Instructions:
- Do NOT scan the whole repo
- Find the minimal components required
- Isolate the domain completely
- Remove all history, collapse ambiguity
- Present only the minimal solvable representation

Return:
- Entry points
- Core data structures
- Decision functions
- Validation mechanisms
- External dependencies
- Unknown constraints
- Smallest next files to inspect`,
  },
}

export default function ZeroContextArchitecturePage() {
  return (
    <div className="space-y-12 max-w-3xl">
      <section>
        <h1 className="text-3xl font-light tracking-tight mb-4">
          Zero‑Context Architecture
        </h1>
        <p className="text-[#8C8C8C] text-sm mb-8">
          The simplest path to reliable agents
        </p>
        <ApplyConcept promptSpec={promptSpec} />
      </section>

      <article className="prose max-w-none">
        <div className="text-[#5A5A5A] text-sm leading-relaxed space-y-6">
          <p>
            Zero‑Context Architecture is the simplest and most reliable way to build agentic systems: <strong>isolate the domain completely, remove all history, collapse ambiguity, and present only the minimal solvable representation to the operator</strong>.
          </p>
          
          <p>
            This section formalizes why 0‑context dramatically outperforms long‑context pipelines, why it eliminates most failure modes of LLM-driven agents, and how it achieves reproducibility at scale.
          </p>
          
          <h2 className="text-xl font-light text-[#1A1A1A] mt-8 mb-4">1. What Zero‑Context Actually Means</h2>
          
          <p>
            Zero‑context does not mean "no information."<br />
            It means:
          </p>
          
          <ul className="text-[#5A5A5A] space-y-2 ml-6 list-disc">
            <li><strong>no irrelevant information</strong>,</li>
            <li><strong>no accumulated history</strong>,</li>
            <li><strong>no cross-domain residue</strong>,</li>
            <li><strong>no uncontrolled entropy</strong>.</li>
          </ul>
          
          <p>
            Formally, for state xₜ:
          </p>
          
          <pre className="bg-[#FFFFFF] border border-[#E8E8E6] p-4 rounded overflow-x-auto mb-6 font-mono text-sm">
            {`zₜ = Pₛ(xₜ)`}
          </pre>
          
          <p>
            Where Pₛ removes everything except the minimal slice required for the next operator.
          </p>
          
          <p className="text-[#2A2A2A] italic">
            The LLM never sees anything outside its current domain.
          </p>
          
          <h2 className="text-xl font-light text-[#1A1A1A] mt-8 mb-4">2. Why Zero‑Context Systems Are Stable</h2>
          
          <p>
            The operator sees only:
          </p>
          
          <ul className="text-[#5A5A5A] space-y-2 ml-6 list-disc">
            <li>one domain,</li>
            <li>one schema,</li>
            <li>one goal,</li>
            <li>one representation.</li>
          </ul>
          
          <p>
            This drastically shrinks the manifold region:
          </p>
          
          <pre className="bg-[#FFFFFF] border border-[#E8E8E6] p-4 rounded overflow-x-auto mb-6 font-mono text-sm">
            {`latent_space(zₜ) << latent_space(full_context)`}
          </pre>
          
          <p className="text-[#2A2A2A] italic">
            Smaller region → fewer attractors → predictable trajectories.
          </p>
          
          <h2 className="text-xl font-light text-[#1A1A1A] mt-8 mb-4">3. Why long context destroys reliability</h2>
          
          <p>
            Long-context systems:
          </p>
          
          <ul className="text-[#5A5A5A] space-y-2 ml-6 list-disc">
            <li>re-encode the entire history every step,</li>
            <li>let noise re-enter the latent space,</li>
            <li>mix multiple domains at once,</li>
            <li>introduce contradictory signals,</li>
            <li>allow attractor collisions.</li>
          </ul>
          
          <p>
            This causes:
          </p>
          
          <ul className="text-[#5A5A5A] space-y-2 ml-6 list-disc">
            <li>drift,</li>
            <li>hallucination,</li>
            <li>inconsistent planning,</li>
            <li>loops,</li>
            <li>irreversible errors.</li>
          </ul>
          
          <p className="text-[#2A2A2A] font-medium">
            Zero‑context deletes the instability at the source.
          </p>
          
          <h2 className="text-xl font-light text-[#1A1A1A] mt-8 mb-4">4. Real Example: Browser Automation</h2>
          
          <div className="space-y-4">
            <div>
              <p className="text-[#2A2A2A] font-medium mb-2">Long-context version (what most agents do)</p>
              <p className="text-[#5A5A5A]">
                Prompt includes:
              </p>
              <ul className="text-[#8C8C8C] space-y-1 ml-6 list-disc text-sm">
                <li>previous actions,</li>
                <li>old DOMs,</li>
                <li>chain-of-thought,</li>
                <li>user instructions,</li>
                <li>environment history.</li>
              </ul>
              <p className="text-[#5A5A5A] mt-2">
                The operator collapses all of this into a single unstable latent state.
              </p>
            </div>
            
            <div>
              <p className="text-[#2A2A2A] font-medium mb-2">Zero‑context version</p>
              <pre className="bg-[#FFFFFF] border border-[#E8E8E6] p-4 rounded overflow-x-auto font-mono text-sm mb-2">
{`zₜ = extract_active_DOM_slice(state)
rₜ = canonicalize(zₜ)
actions = f(rₜ)`}
              </pre>
              <p className="text-[#5A5A5A]">
                Every step is:
              </p>
              <ul className="text-[#8C8C8C] space-y-1 ml-6 list-disc text-sm">
                <li>fresh,</li>
                <li>untainted by history,</li>
                <li>strictly domain-limited.</li>
              </ul>
              <p className="text-[#2A2A2A] italic mt-2">
                The agent becomes reproducible.
              </p>
            </div>
          </div>
          
          <h2 className="text-xl font-light text-[#1A1A1A] mt-8 mb-4">5. Real Example: Document Extraction</h2>
          
          <div className="space-y-4">
            <div>
              <p className="text-[#2A2A2A] font-medium mb-2">Long-context agent</p>
              <p className="text-[#5A5A5A]">
                "Here is the whole PDF. Extract fields. Also here is what we did before."
              </p>
              <p className="text-[#5A5A5A] mt-2">
                This mixes:
              </p>
              <ul className="text-[#8C8C8C] space-y-1 ml-6 list-disc text-sm">
                <li>layout noise,</li>
                <li>prior partial extractions,</li>
                <li>learned templates.</li>
              </ul>
            </div>
            
            <div>
              <p className="text-[#2A2A2A] font-medium mb-2">Zero‑context agent</p>
              <pre className="bg-[#FFFFFF] border border-[#E8E8E6] p-4 rounded overflow-x-auto font-mono text-sm mb-2">
{`section = extract_section(document, target_field)
rₜ = canonicalize(section)
fields = f(rₜ)`}
              </pre>
              <p className="text-[#5A5A5A]">
                The model always sees the same representation for the same task.
              </p>
              <p className="text-[#2A2A2A] italic mt-2">
                This makes the workflow testable and deterministic.
              </p>
            </div>
          </div>
          
          <h2 className="text-xl font-light text-[#1A1A1A] mt-8 mb-4">6. Real Example: HR / Payroll Workflows</h2>
          
          <div className="space-y-4">
            <div>
              <p className="text-[#2A2A2A] font-medium mb-2">Long-context:</p>
              <ul className="text-[#5A5A5A] space-y-1 ml-6 list-disc text-sm">
                <li>full employee profile,</li>
                <li>unrelated attributes,</li>
                <li>previous steps,</li>
                <li>optional fields.</li>
              </ul>
            </div>
            
            <div>
              <p className="text-[#2A2A2A] font-medium mb-2">Zero‑context:</p>
              <pre className="bg-[#FFFFFF] border border-[#E8E8E6] p-4 rounded overflow-x-auto font-mono text-sm mb-2">
{`zₜ = jurisdiction_relevant_subset(employee)
rₜ = schema_align(zₜ)
steps = f(rₜ)`}
              </pre>
              <p className="text-[#5A5A5A]">
                Only the domain required for the current compliance rule is visible.
              </p>
            </div>
          </div>
          
          <h2 className="text-xl font-light text-[#1A1A1A] mt-8 mb-4">7. Why Zero‑Context Enables Verification</h2>
          
          <p>
            Verification requires:
          </p>
          
          <ul className="text-[#5A5A5A] space-y-2 ml-6 list-disc">
            <li>stable domains,</li>
            <li>known structures,</li>
            <li>predictable transitions.</li>
          </ul>
          
          <p>
            Long-context destroys all three.<br />
            Zero‑context guarantees them.
          </p>
          
          <p>
            Verifier design becomes trivial:
          </p>
          
          <pre className="bg-[#FFFFFF] border border-[#E8E8E6] p-4 rounded overflow-x-auto mb-6 font-mono text-sm">
            {`V(uₜ) = schema_check(uₜ) ∧ invariant_check(uₜ)`}
          </pre>
          
          <p>
            Because the operator can only act on canonical forms, the verifier is deterministic.
          </p>
          
          <h2 className="text-xl font-light text-[#1A1A1A] mt-8 mb-4">8. Zero‑Context as a Control System</h2>
          
          <p>
            Zero‑context is equivalent to a classical control system with perfect measurement isolation.
          </p>
          
          <p>
            It aligns with:
          </p>
          
          <ul className="text-[#5A5A5A] space-y-2 ml-6 list-disc">
            <li>state projection,</li>
            <li>stable operator application,</li>
            <li>closed-loop correction,</li>
            <li>reproducible transitions.</li>
          </ul>
          
          <p>
            It removes the uncontrolled internal memory that destroys multi-step reliability.
          </p>
          
          <h2 className="text-xl font-light text-[#1A1A1A] mt-8 mb-4">9. Why Zero‑Context Outperforms Every Open-Context Agent Design</h2>
          
          <div className="grid grid-cols-1 gap-3">
            <div className="border-l-2 border-[#DADADA] pl-4">
              <p className="text-[#2A2A2A] font-medium text-sm">1. No latent drift</p>
              <p className="text-[#5A5A5A] text-sm">Each step is independent.</p>
            </div>
            
            <div className="border-l-2 border-[#DADADA] pl-4">
              <p className="text-[#2A2A2A] font-medium text-sm">2. No error accumulation</p>
              <p className="text-[#5A5A5A] text-sm">History cannot corrupt future steps.</p>
            </div>
            
            <div className="border-l-2 border-[#DADADA] pl-4">
              <p className="text-[#2A2A2A] font-medium text-sm">3. No mixed domains</p>
              <p className="text-[#5A5A5A] text-sm">The operator sees only one domain at a time.</p>
            </div>
            
            <div className="border-l-2 border-[#DADADA] pl-4">
              <p className="text-[#2A2A2A] font-medium text-sm">4. Reproducibility</p>
              <p className="text-[#5A5A5A] text-sm">Same input slice → same output.</p>
            </div>
            
            <div className="border-l-2 border-[#DADADA] pl-4">
              <p className="text-[#2A2A2A] font-medium text-sm">5. Testability</p>
              <p className="text-[#5A5A5A] text-sm">Each step is a pure function.</p>
            </div>
            
            <div className="border-l-2 border-[#DADADA] pl-4">
              <p className="text-[#2A2A2A] font-medium text-sm">6. Composability</p>
              <p className="text-[#5A5A5A] text-sm">Operators can be chained like Lego blocks.</p>
            </div>
            
            <div className="border-l-2 border-[#DADADA] pl-4">
              <p className="text-[#2A2A2A] font-medium text-sm">7. Enterprise-grade determinism</p>
              <p className="text-[#5A5A5A] text-sm">Perfect for payroll, compliance, operations, identity workflows, and browser tasks.</p>
            </div>
          </div>
          
          <h2 className="text-xl font-light text-[#1A1A1A] mt-8 mb-4">10. How to Build a Zero‑Context Step</h2>
          
          <p>
            Every step follows this pipeline:
          </p>
          
          <pre className="bg-[#FFFFFF] border border-[#E8E8E6] p-4 rounded overflow-x-auto mb-6 font-mono text-sm">
{`1. Project:     zₜ = Pₛ(xₜ)
2. Rewrite:     rₜ = R(zₜ)
3. Operate:     uₜ = f(rₜ)
4. Verify:      yₜ = V(uₜ)
5. Integrate:   xₜ₊₁ = I(xₜ, yₜ)`}
          </pre>
          
          <p className="text-[#2A2A2A] italic">
            Nothing persists except the <em>validated state</em>.
          </p>
          
          <h2 className="text-xl font-light text-[#1A1A1A] mt-8 mb-4">11. Research Directions</h2>
          
          <ul className="text-[#5A5A5A] space-y-2 ml-6 list-disc">
            <li>optimal domain-projection algorithms,</li>
            <li>canonicalization spaces,</li>
            <li>formal stability under zero‑context constraints,</li>
            <li>maximizing operator reliability via minimal representations,</li>
            <li>quantifying entropy reduction from strict isolation.</li>
          </ul>
          
          <p className="text-[#2A2A2A] font-medium">
            Zero‑Context Architecture is the reason your agentic systems achieve reliability where others collapse. It is the structural backbone of verifiable automation.
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


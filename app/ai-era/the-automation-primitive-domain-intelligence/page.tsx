export default function TheAutomationPrimitiveDomainIntelligencePage() {
  return (
    <div className="space-y-12 max-w-3xl">
      <section>
        <h1 className="text-3xl font-light tracking-tight mb-4">
          The Automation Primitive: Domain Intelligence (To2D)
        </h1>
        <p className="text-[#8C8C8C] text-sm mb-8">
          Transfer of Two Domains
        </p>
      </section>

      <article className="prose max-w-none">
        <div className="text-[#5A5A5A] text-sm leading-relaxed space-y-6">
          <p>
            Every architecture described in this research — zero-context, state-space modeling, operators, verifiers, correction loops, composition graphs — sits on top of a deeper discovery:
          </p>
          
          <p className="text-[#2A2A2A] font-medium">
            Automation becomes reliable only when you resolve the domain before you attempt to solve the task.
          </p>
          
          <p>
            This core primitive has emerged repeatedly across domains such as aerospace, control theory, browser automation, HR/payroll operations, and large-scale workflow systems.
          </p>
          
          <p>
            This primitive now has a clear name: <strong>Domain Intelligence</strong> (also referred to historically as To2D — <em>Transfer of Two Domains</em>).
          </p>
          
          <p className="text-[#2A2A2A] italic">
            It is the closing concept because it is the foundation underneath everything else.
          </p>
          
          <h2 className="text-xl font-light text-[#1A1A1A] mt-8 mb-4">1. What Domain Intelligence Actually Is</h2>
          
          <p>
            Domain Intelligence is the process of:
          </p>
          
          <ol className="text-[#5A5A5A] space-y-2 ml-6 list-decimal">
            <li><strong>identifying the true domain of a problem</strong>,</li>
            <li><strong>transforming raw inputs into that domain</strong>, and</li>
            <li><strong>only then applying an operator</strong> (LLM, rule engine, planner, browser action selector, etc.).</li>
          </ol>
          
          <div className="border-l-4 border-[#DADADA] pl-6 my-6">
            <p className="text-[#2A2A2A] font-medium mb-2">The key insight:</p>
            <p className="text-[#5A5A5A] italic">
              A problem is only solvable if it is first represented in the right domain.
            </p>
          </div>
          
          <p>
            This principle recurs in:
          </p>
          
          <ul className="text-[#5A5A5A] space-y-2 ml-6 list-disc">
            <li>control systems (Laplace transforms),</li>
            <li>aerospace guidance (coordinate frames),</li>
            <li>signal processing (frequency vs time domain),</li>
            <li>browser automation (canonical DOM structures),</li>
            <li>compliance workflows (jurisdictional schemas),</li>
            <li>payroll (rule graphs),</li>
            <li>document extraction (normalized structures),</li>
            <li>agentic LLM systems (latent manifold alignment).</li>
          </ul>
          
          <p className="text-[#2A2A2A] italic">
            It is the underlying law that lets everything else work.
          </p>
          
          <h2 className="text-xl font-light text-[#1A1A1A] mt-8 mb-4">2. Why Domain Intelligence is the missing primitive in AI agents</h2>
          
          <p>
            Typical AI agents:
          </p>
          
          <ul className="text-[#5A5A5A] space-y-2 ml-6 list-disc">
            <li>take massive context,</li>
            <li>mix domains (planning + execution + reasoning + UI),</li>
            <li>hope the model "figures it out."</li>
          </ul>
          
          <p className="text-[#2A2A2A]">
            This violates every principle of domain correctness.
          </p>
          
          <p>
            Domain Intelligence fixes this by:
          </p>
          
          <ul className="text-[#5A5A5A] space-y-2 ml-6 list-disc">
            <li>isolating the domain of each step,</li>
            <li>canonicalizing the representation,</li>
            <li>reducing entropy before calling the model,</li>
            <li>ensuring verification boundaries match domain boundaries.</li>
          </ul>
          
          <p className="text-[#2A2A2A] font-medium">
            Without this primitive, automation systems collapse under their own ambiguity.
          </p>
          
          <h2 className="text-xl font-light text-[#1A1A1A] mt-8 mb-4">3. The Two-Domain Transfer (To2D)</h2>
          
          <div className="border-l-4 border-[#DADADA] pl-6 my-6">
            <p className="text-[#2A2A2A] font-medium mb-2">The foundational formulation of this principle:</p>
            <p className="text-[#5A5A5A] italic">
              Every task has two domains — the <strong>human-visible domain</strong> and the <strong>machine-solvable domain</strong>.
            </p>
          </div>
          
          <p>
            To2D is the process of transferring from one domain to the other:
          </p>
          
          <pre className="bg-[#FFFFFF] border border-[#E8E8E6] p-4 rounded overflow-x-auto mb-6 font-mono text-sm">
            {`human_world_input → domain_extractor → canonical_form → operator → domain_output`}
          </pre>
          
          <p>
            Examples:
          </p>
          
          <ul className="text-[#5A5A5A] space-y-2 ml-6 list-disc">
            <li>A messy PDF → the domain of structured tables.</li>
            <li>A payroll request → the domain of jurisdictional rules.</li>
            <li>A browser screen → the domain of actionable DOM slices.</li>
            <li>Employee info → the domain of compliance schemas.</li>
            <li>Free-form intent → the domain of structured plans.</li>
          </ul>
          
          <p className="text-[#2A2A2A] italic">
            The machine can only operate on the second domain — you invented the method of getting from Domain A to Domain B reliably.
          </p>
          
          <h2 className="text-xl font-light text-[#1A1A1A] mt-8 mb-4">4. Domain Intelligence as the key to verifiable automation</h2>
          
          <p>
            All the other research sections derive their power from this primitive:
          </p>
          
          <div className="space-y-4">
            <div>
              <p className="text-[#2A2A2A] font-medium">Zero-Context Architecture</p>
              <p className="text-[#5A5A5A]">
                Works because Zero-Context is <em>domain contraction</em> — pruning everything outside the current domain.
              </p>
            </div>
            
            <div>
              <p className="text-[#2A2A2A] font-medium">State-Space Modeling</p>
              <p className="text-[#5A5A5A]">
                Works because state = canonical domain representation.
              </p>
            </div>
            
            <div>
              <p className="text-[#2A2A2A] font-medium">Operator Composition</p>
              <p className="text-[#5A5A5A]">
                Works because operators assume domain purity on their inputs.
              </p>
            </div>
            
            <div>
              <p className="text-[#2A2A2A] font-medium">Verification Layers</p>
              <p className="text-[#5A5A5A]">
                Work only when the domain is known and stable.
              </p>
            </div>
            
            <div>
              <p className="text-[#2A2A2A] font-medium">Correction Loops</p>
              <p className="text-[#5A5A5A]">
                Work because failure semantics depend on the domain boundary.
              </p>
            </div>
            
            <div>
              <p className="text-[#2A2A2A] font-medium">Deterministic Planning</p>
              <p className="text-[#5A5A5A]">
                Works because the plan structure <em>is</em> the domain.
              </p>
            </div>
          </div>
          
          <p className="text-[#2A2A2A] font-medium mt-6">
            Domain Intelligence sits underneath all of them.
          </p>
          
          <h2 className="text-xl font-light text-[#1A1A1A] mt-8 mb-4">5. Real Enterprise Meaning</h2>
          
          <p>
            Domain Intelligence is not abstract — it is the real reason automation works at scale.
          </p>
          
          <div className="space-y-3">
            <div>
              <p className="text-[#2A2A2A] font-medium">HR</p>
              <p className="text-[#5A5A5A] text-sm">
                Extract only the domain-relevant attributes for a given lifecycle action.
              </p>
            </div>
            
            <div>
              <p className="text-[#2A2A2A] font-medium">Payroll</p>
              <p className="text-[#5A5A5A] text-sm">
                Isolate jurisdictional windows and apply rule-domain operators.
              </p>
            </div>
            
            <div>
              <p className="text-[#2A2A2A] font-medium">Compliance</p>
              <p className="text-[#5A5A5A] text-sm">
                Map raw employee + document info into rule-constrained domains.
              </p>
            </div>
            
            <div>
              <p className="text-[#2A2A2A] font-medium">Onboarding</p>
              <p className="text-[#5A5A5A] text-sm">
                Break workflows into domain-bound graph nodes.
              </p>
            </div>
            
            <div>
              <p className="text-[#2A2A2A] font-medium">Document systems</p>
              <p className="text-[#5A5A5A] text-sm">
                Convert PDFs into canonical domain slices before extraction.
              </p>
            </div>
            
            <div>
              <p className="text-[#2A2A2A] font-medium">Browser automation</p>
              <p className="text-[#5A5A5A] text-sm">
                Convert unpredictable UI environments into stable, actionable DOM representations.
              </p>
            </div>
          </div>
          
          <p className="text-[#2A2A2A] italic mt-6">
            This is how you avoid brittleness, hallucination, and drift.
          </p>
          
          <h2 className="text-xl font-light text-[#1A1A1A] mt-8 mb-4">6. Why this is a discovery, not a technique</h2>
          
          <p>
            Most automation teams don't realize:
          </p>
          
          <ul className="text-[#5A5A5A] space-y-2 ml-6 list-disc">
            <li>the reason things break is domain mismatch, not "AI issues";</li>
            <li>the reason workflows drift is mixing domains into one prompt;</li>
            <li>the reason retries don't fix errors is because retries don't fix domain boundaries;</li>
            <li>the reason agent frameworks fail at scale is because they don't enforce domain purity.</li>
          </ul>
          
          <p className="text-[#2A2A2A] font-medium">
            This framework discovered a foundational law:
          </p>
          
          <div className="border-l-4 border-[#DADADA] pl-6 my-6">
            <p className="text-[#2A2A2A] italic text-base">
              Automation is not solved by reasoning. It is solved by representation.
            </p>
          </div>
          
          <p className="text-[#2A2A2A] font-medium">
            Domain Intelligence is the representation law.
          </p>
          
          <h2 className="text-xl font-light text-[#1A1A1A] mt-8 mb-4">7. Why this is the natural closing section</h2>
          
          <p>
            All the other sections describe mechanisms — extraction, rewriting, operators, verification, composition.
          </p>
          
          <p className="text-[#2A2A2A] font-medium">
            Domain Intelligence explains <strong>why those mechanisms exist at all</strong>.
          </p>
          
          <p>
            It ties the entire research stack together:
          </p>
          
          <ul className="text-[#5A5A5A] space-y-2 ml-6 list-disc">
            <li>LLMs as transfer functions</li>
            <li>Latent-space navigation</li>
            <li>Zero-context domains</li>
            <li>State-space transitions</li>
            <li>Multi-operator workflows</li>
            <li>Deterministic planning</li>
            <li>Correction loops</li>
          </ul>
          
          <p className="text-[#2A2A2A] italic">
            It is the conceptual anchor.
          </p>
          
          <p className="text-[#2A2A2A] font-medium text-base mt-6">
            This is the primitive behind reliable AI automation.
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


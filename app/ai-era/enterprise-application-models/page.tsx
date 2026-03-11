export default function EnterpriseApplicationModelsPage() {
  return (
    <div className="space-y-12 max-w-3xl">
      <section>
        <h1 className="text-3xl font-light tracking-tight mb-4">
          Enterprise Application Models
        </h1>
        <p className="text-[#8C8C8C] text-sm mb-8">
          Where theory becomes production systems
        </p>
      </section>

      <article className="prose max-w-none">
        <div className="text-[#5A5A5A] text-sm leading-relaxed space-y-6">
          <p>
            The architectures described in the previous sections — transfer-function view of LLMs, zero-context, state-space modeling, operator composition, verification, correction loops — are not abstract theory. They map directly onto concrete enterprise domains:
          </p>
          
          <ul className="text-[#5A5A5A] space-y-2 ml-6 list-disc">
            <li>HR systems</li>
            <li>Payroll</li>
            <li>Compliance</li>
            <li>Onboarding</li>
            <li>Document-heavy back-office workflows</li>
            <li>Browser-based operations for internal tools and vendor portals</li>
          </ul>
          
          <p>
            This section makes that mapping explicit.
          </p>
          
          <h2 className="text-xl font-light text-[#1A1A1A] mt-8 mb-4">1. Why enterprise workflows break under naive agents</h2>
          
          <p>
            Most "AI automation" attempts in enterprise environments fail because they:
          </p>
          
          <ul className="text-[#5A5A5A] space-y-2 ml-6 list-disc">
            <li>treat the LLM as an oracle,</li>
            <li>rely on long context and chain-of-thought,</li>
            <li>mix multiple domains (HR + legal + payroll) in a single prompt,</li>
            <li>have no deterministic verification layer,</li>
            <li>lack explicit failure paths.</li>
          </ul>
          
          <p>
            Symptoms:
          </p>
          
          <ul className="text-[#5A5A5A] space-y-2 ml-6 list-disc">
            <li>workflows that sometimes work in staging but fail in production,</li>
            <li>brittle flows that break when a UI changes,</li>
            <li>hallucinated compliance steps or missing ones,</li>
            <li>unreproducible behavior (same input, different output),</li>
            <li>zero auditability.</li>
          </ul>
          
          <p className="text-[#2A2A2A] italic">
            The models are not the problem. The architecture is.
          </p>
          
          <h2 className="text-xl font-light text-[#1A1A1A] mt-8 mb-4">2. HR: Employee Data as State, Not Context</h2>
          
          <p>
            HR systems revolve around employee state:
          </p>
          
          <ul className="text-[#5A5A5A] space-y-2 ml-6 list-disc">
            <li>personal info</li>
            <li>role, location, compensation</li>
            <li>eligibility and status</li>
            <li>lifecycle events (hire, promotion, termination)</li>
          </ul>
          
          <div className="space-y-4 mt-4">
            <div>
              <p className="text-[#2A2A2A] font-medium mb-2">Naive agent approach</p>
              <p className="text-[#5A5A5A]">
                "Here is the full employee history, job description, contracts — figure out what to do."
              </p>
              <p className="text-[#5A5A5A] mt-2">
                This mixes:
              </p>
              <ul className="text-[#8C8C8C] space-y-1 ml-6 list-disc text-sm">
                <li>multiple timeframes</li>
                <li>multiple purposes (legal, payroll, internal notes)</li>
                <li>irrelevant attributes</li>
              </ul>
            </div>
            
            <div>
              <p className="text-[#2A2A2A] font-medium mb-2">Architecture-aligned approach</p>
              <p className="text-[#5A5A5A] mb-2">
                Treat employee info as <strong>structured state</strong>:
              </p>
              <ul className="text-[#5A5A5A] space-y-1 text-sm">
                <li>State-space: <code className="text-xs bg-[#FFFFFF] px-1 py-0.5 rounded">xₜ = employee_state</code></li>
                <li>Domain extractor: subset relevant to the current operation (e.g., benefits change)</li>
                <li>Rewriter: align to canonical schema (location, role, effective date, etc.)</li>
                <li>Operator: propose actions (update system, notify stakeholders, request approval)</li>
                <li>Verifier: enforce HR policy + type and schema constraints</li>
                <li>Correction: route ambiguous cases for clarification</li>
              </ul>
              <p className="text-[#5A5A5A] mt-3">
                HR operations become:
              </p>
              <ul className="text-[#8C8C8C] space-y-1 ml-6 list-disc text-sm">
                <li>reproducible,</li>
                <li>auditable,</li>
                <li>easy to simulate and test.</li>
              </ul>
            </div>
          </div>
          
          <h2 className="text-xl font-light text-[#1A1A1A] mt-8 mb-4">3. Payroll: Jurisdictional Logic as Verified Operators</h2>
          
          <p>
            Payroll is naturally a graph of rules and transitions:
          </p>
          
          <ul className="text-[#5A5A5A] space-y-2 ml-6 list-disc">
            <li>tax tables</li>
            <li>deductions</li>
            <li>benefits</li>
            <li>jurisdiction-specific logic</li>
            <li>effective dates</li>
          </ul>
          
          <div className="space-y-4 mt-4">
            <div>
              <p className="text-[#2A2A2A] font-medium mb-2">Naive agent approach</p>
              <p className="text-[#5A5A5A]">
                "Here is the paystub and employee data, compute the payroll and explain it."
              </p>
              <p className="text-[#5A5A5A] mt-2">
                This places:
              </p>
              <ul className="text-[#8C8C8C] space-y-1 ml-6 list-disc text-sm">
                <li>tax logic,</li>
                <li>computations,</li>
                <li>compliance,</li>
                <li>explanation</li>
              </ul>
              <p className="text-[#5A5A5A] mt-2">
                all inside one unconstrained LLM call.
              </p>
            </div>
            
            <div>
              <p className="text-[#2A2A2A] font-medium mb-2">Architecture-aligned approach</p>
              <p className="text-[#5A5A5A] mb-2">
                Break payroll into verified operators:
              </p>
              <ol className="text-[#5A5A5A] space-y-2 ml-6 list-decimal text-sm">
                <li><strong>State</strong>: canonical employee + compensation + jurisdiction snapshot</li>
                <li><strong>Operator 1</strong>: determine applicable rules</li>
                <li><strong>Operator 2</strong>: construct compliant sequence of calculations</li>
                <li><strong>Operator 3</strong>: apply calculations</li>
                <li><strong>Verifier</strong>: recompute totals and cross-check against rules</li>
                <li><strong>Operator 4</strong>: generate human-readable explanations</li>
              </ol>
              <p className="text-[#5A5A5A] mt-3">
                Each step is:
              </p>
              <ul className="text-[#8C8C8C] space-y-1 ml-6 list-disc text-sm">
                <li>isolated,</li>
                <li>domain-specific,</li>
                <li>verifiable,</li>
                <li>testable with known inputs.</li>
              </ul>
            </div>
          </div>
          
          <h2 className="text-xl font-light text-[#1A1A1A] mt-8 mb-4">4. Compliance: Rules as Domain Boundaries</h2>
          
          <p>
            Compliance workflows — tax, labor, identity, KYC, regulatory filings — are essentially <strong>rule-constrained state machines</strong>.
          </p>
          
          <div className="space-y-4 mt-4">
            <div>
              <p className="text-[#2A2A2A] font-medium mb-2">Naive agent approach</p>
              <p className="text-[#5A5A5A]">
                Prompt the model with regulations + data and ask it to decide what to do.
              </p>
              <p className="text-[#5A5A5A] mt-2">
                This leads to:
              </p>
              <ul className="text-[#8C8C8C] space-y-1 ml-6 list-disc text-sm">
                <li>missing required steps,</li>
                <li>hallucinated obligations,</li>
                <li>inconsistent interpretations across runs.</li>
              </ul>
            </div>
            
            <div>
              <p className="text-[#2A2A2A] font-medium mb-2">Architecture-aligned approach</p>
              <p className="text-[#5A5A5A] mb-2">
                Use compliance rules as <strong>domain constraints</strong>, not as text decoration:
              </p>
              <ul className="text-[#5A5A5A] space-y-1 text-sm">
                <li>State-space: compliance-relevant snapshot</li>
                <li>Domain extractor: isolate only the fields that influence regulation</li>
                <li>Rewriter: map into the rule engine / schema</li>
                <li>Operator: propose required actions based on that schema</li>
                <li>Verifier: check each proposed action against static and code-encoded rules</li>
                <li>Correction: adjust or drop steps that violate constraints</li>
              </ul>
              <p className="text-[#5A5A5A] mt-3">
                This makes compliance workflows:
              </p>
              <ul className="text-[#8C8C8C] space-y-1 ml-6 list-disc text-sm">
                <li>safe,</li>
                <li>explainable,</li>
                <li>measurable,</li>
                <li>compatible with auditors.</li>
              </ul>
            </div>
          </div>
          
          <h2 className="text-xl font-light text-[#1A1A1A] mt-8 mb-4">5. Onboarding: DAGs Instead of Free-Form Checklists</h2>
          
          <p>
            Onboarding spans HR, payroll, IT, facilities, security, and often external portals.
          </p>
          
          <div className="space-y-4 mt-4">
            <div>
              <p className="text-[#2A2A2A] font-medium mb-2">Naive agent approach</p>
              <p className="text-[#5A5A5A]">
                "Generate a checklist for onboarding this employee in this region for this role."
              </p>
              <p className="text-[#5A5A5A] mt-2">
                Every run:
              </p>
              <ul className="text-[#8C8C8C] space-y-1 ml-6 list-disc text-sm">
                <li>different ordering,</li>
                <li>different coverage,</li>
                <li>different depth.</li>
              </ul>
            </div>
            
            <div>
              <p className="text-[#2A2A2A] font-medium mb-2">Architecture-aligned approach</p>
              <p className="text-[#5A5A5A] mb-2">
                Represent onboarding as a <strong>graph of operators</strong>:
              </p>
              <ul className="text-[#5A5A5A] space-y-1 text-sm">
                <li>Nodes = onboarding steps (accounts, forms, trainings)</li>
                <li>Edges = dependencies</li>
                <li>State = which nodes are completed + current environment</li>
              </ul>
              <p className="text-[#5A5A5A] mt-3 mb-2">
                LLM-powered operators:
              </p>
              <ul className="text-[#8C8C8C] space-y-1 ml-6 list-disc text-sm">
                <li>fill in parameters for steps,</li>
                <li>generate communication content,</li>
                <li>extract required fields from documents,</li>
                <li>propose next steps within the graph.</li>
              </ul>
              <p className="text-[#5A5A5A] mt-3">
                Everything else — ordering, completeness, correctness — is handled by the graph structure and verifiers.
              </p>
            </div>
          </div>
          
          <h2 className="text-xl font-light text-[#1A1A1A] mt-8 mb-4">6. Document Systems: From PDFs to Structured State</h2>
          
          <p>
            Enterprise environments are saturated with:
          </p>
          
          <ul className="text-[#5A5A5A] space-y-2 ml-6 list-disc">
            <li>contracts</li>
            <li>tax forms</li>
            <li>compliance documents</li>
            <li>payroll reports</li>
            <li>benefits summaries</li>
          </ul>
          
          <div className="space-y-4 mt-4">
            <div>
              <p className="text-[#2A2A2A] font-medium mb-2">Naive agent approach</p>
              <p className="text-[#5A5A5A]">
                Pass the whole PDF into an LLM and ask for fields or summaries.
              </p>
              <p className="text-[#5A5A5A] mt-2">
                This yields:
              </p>
              <ul className="text-[#8C8C8C] space-y-1 ml-6 list-disc text-sm">
                <li>inconsistent extractions,</li>
                <li>hallucinated fields,</li>
                <li>missing critical data.</li>
              </ul>
            </div>
            
            <div>
              <p className="text-[#2A2A2A] font-medium mb-2">Architecture-aligned approach</p>
              <p className="text-[#5A5A5A] mb-2">
                Pipeline of operators with verification:
              </p>
              <pre className="bg-[#FFFFFF] border border-[#E8E8E6] p-4 rounded overflow-x-auto font-mono text-sm">
{`1. PDF → text_extractor
2. text → section_locator
3. section → structure_normalizer
4. structure → field_extractor
5. fields → field_verifier
6. verified_fields → workflow / state update`}
              </pre>
              <p className="text-[#5A5A5A] mt-3">
                Every stage is:
              </p>
              <ul className="text-[#8C8C8C] space-y-1 ml-6 list-disc text-sm">
                <li>constrained,</li>
                <li>testable,</li>
                <li>replaceable.</li>
              </ul>
            </div>
          </div>
          
          <h2 className="text-xl font-light text-[#1A1A1A] mt-8 mb-4">7. Browser-Based Enterprise Operations</h2>
          
          <p>
            Many enterprise workflows depend on external portals:
          </p>
          
          <ul className="text-[#5A5A5A] space-y-2 ml-6 list-disc">
            <li>government sites</li>
            <li>benefits providers</li>
            <li>banking platforms</li>
            <li>payroll/tax authorities</li>
            <li>legacy internal tools</li>
          </ul>
          
          <div className="space-y-4 mt-4">
            <div>
              <p className="text-[#2A2A2A] font-medium mb-2">Naive agent approach</p>
              <p className="text-[#5A5A5A] mb-2">
                An LLM controls a browser in an open-loop fashion with long context and natural language planning.
              </p>
              <p className="text-[#5A5A5A] mb-2">
                Breaks when:
              </p>
              <ul className="text-[#8C8C8C] space-y-1 ml-6 list-disc text-sm">
                <li>DOM changes,</li>
                <li>flows branch differently,</li>
                <li>environment is slow or partial.</li>
              </ul>
            </div>
            
            <div>
              <p className="text-[#2A2A2A] font-medium mb-2">Architecture-aligned approach</p>
              <p className="text-[#5A5A5A] mb-2">
                Use browser operators with zero-context and verification:
              </p>
              <ul className="text-[#5A5A5A] space-y-1 text-sm">
                <li>State = current DOM slice + environment metadata</li>
                <li>Domain extractor = visible, relevant interaction region</li>
                <li>Rewriter = canonical DOM representation</li>
                <li>Operator = propose next action (from finite primitive set)</li>
                <li>Verifier = check selector existence, state alignment, preconditions</li>
                <li>Integrator = execute action + update state</li>
              </ul>
              <p className="text-[#2A2A2A] italic mt-3">
                This is how browser automation becomes reliable.
              </p>
            </div>
          </div>
          
          <h2 className="text-xl font-light text-[#1A1A1A] mt-8 mb-4">8. Cross-Domain Workflows (where all of this connects)</h2>
          
          <p>
            Real enterprise flows cut across domains:
          </p>
          
          <ul className="text-[#5A5A5A] space-y-2 ml-6 list-disc">
            <li>onboarding touches HR + payroll + compliance + IT + documents + external portals</li>
            <li>tax filing touches payroll + banking + government portals + archival documents</li>
          </ul>
          
          <p className="text-[#5A5A5A] mt-4">
            The architecture handles this by:
          </p>
          
          <ul className="text-[#5A5A5A] space-y-2 ml-6 list-disc">
            <li>treating each domain as its own state space,</li>
            <li>isolating each domain with a dedicated extractor and rewriter,</li>
            <li>composing operators into verified pipelines and graphs,</li>
            <li>using correction loops when any step fails.</li>
          </ul>
          
          <p className="text-[#2A2A2A] italic">
            Instead of one "super agent," you get a <strong>system of small, reliable agents</strong>.
          </p>
          
          <h2 className="text-xl font-light text-[#1A1A1A] mt-8 mb-4">9. Why this model is different from typical agent platforms</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
            <div className="border border-[#E8E8E6] p-4">
              <p className="text-[#2A2A2A] font-medium mb-3">Typical platforms:</p>
              <ul className="text-[#5A5A5A] space-y-2 text-sm">
                <li>are context-centric, not state-centric,</li>
                <li>treat LLMs as oracles,</li>
                <li>have weak or no verification,</li>
                <li>do not have explicit failure semantics,</li>
                <li>do not enforce domain boundaries.</li>
              </ul>
            </div>
            
            <div className="border border-[#E8E8E6] p-4">
              <p className="text-[#2A2A2A] font-medium mb-3">This model:</p>
              <ul className="text-[#5A5A5A] space-y-2 text-sm">
                <li>is state-space first,</li>
                <li>uses LLMs as operators,</li>
                <li>enforces strict schemas and verifiers,</li>
                <li>uses zero-context where possible,</li>
                <li>designs explicit failure paths and correction loops,</li>
                <li>composes everything into pipelines and DAGs.</li>
              </ul>
            </div>
          </div>
          
          <p>
            This is what makes it suitable for:
          </p>
          
          <ul className="text-[#5A5A5A] space-y-2 ml-6 list-disc">
            <li>regulated industries,</li>
            <li>money movement,</li>
            <li>employment and payroll,</li>
            <li>high-stakes document processing,</li>
            <li>large-scale operational automation.</li>
          </ul>
          
          <h2 className="text-xl font-light text-[#1A1A1A] mt-8 mb-4">10. Research and Product Direction</h2>
          
          <p>
            This architecture is not just theory. It suggests concrete product and research directions:
          </p>
          
          <ul className="text-[#5A5A5A] space-y-2 ml-6 list-disc">
            <li>reusable operator libraries per domain (HR, payroll, compliance, docs, browser),</li>
            <li>shared verification schemas and rule sets,</li>
            <li>failure taxonomies per vertical,</li>
            <li>standardized planning representations for enterprise workflows,</li>
            <li>metrics and benchmarks for <strong>verifiable agents</strong>, not just raw LLM performance.</li>
          </ul>
          
          <p className="text-[#2A2A2A] font-medium">
            Enterprise Application Models are where the research surfaces as real systems.<br />
            They are the proof that this architecture is not just elegant — it is practical.
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


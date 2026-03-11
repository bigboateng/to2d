export default function DomainExtractorsAndProblemRewritingPage() {
  return (
    <div className="space-y-12 max-w-3xl">
      <section>
        <h1 className="text-3xl font-light tracking-tight mb-4">
          Domain Extractors & Problem Rewriting
        </h1>
        <p className="text-[#8C8C8C] text-sm mb-8">
          Converting messy inputs into solvable representations
        </p>
      </section>

      <article className="prose max-w-none">
        <div className="text-[#5A5A5A] text-sm leading-relaxed space-y-6">
          <p>
            Agents fail not because models are weak, but because the <strong>input domain is wrong</strong>.<br />
            Domain extractors and problem rewriting are the machinery that converts a messy real-world situation into a solvable representation — a representation that places the model in the correct manifold region and eliminates ambiguity before any operator is applied.
          </p>
          
          <p>
            This section formalizes the design of domain extractors, the theory behind representation rewriting, and includes concrete examples that show exactly how this works in production.
          </p>
          
          <h2 className="text-xl font-light text-[#1A1A1A] mt-8 mb-4">1. Why domain extraction is necessary</h2>
          
          <p>
            Real-world inputs contain:
          </p>
          
          <ul className="text-[#5A5A5A] space-y-2 ml-6 list-disc">
            <li>irrelevant data,</li>
            <li>inconsistent structures,</li>
            <li>mixed modalities,</li>
            <li>conflicting cues,</li>
            <li>high entropy,</li>
            <li>ambiguous semantics.</li>
          </ul>
          
          <p>
            LLMs cannot disentangle this. They treat everything as one collapsed input.
          </p>
          
          <p className="text-[#2A2A2A] font-medium">
            Domain extractors isolate only what matters.
          </p>
          
          <p>
            They reduce the problem to a tractable slice with minimal ambiguity.
          </p>
          
          <h2 className="text-xl font-light text-[#1A1A1A] mt-8 mb-4">2. Formal definition</h2>
          
          <p>
            Define the system state:
          </p>
          
          <pre className="bg-[#FFFFFF] border border-[#E8E8E6] p-4 rounded overflow-x-auto mb-6 font-mono text-sm">
            {`xₜ ∈ S`}
          </pre>
          
          <p>
            A domain extractor is a projection:
          </p>
          
          <pre className="bg-[#FFFFFF] border border-[#E8E8E6] p-4 rounded overflow-x-auto mb-6 font-mono text-sm">
            {`zₜ = Pₛ(xₜ)`}
          </pre>
          
          <p>
            Where <strong>zₜ</strong> is the canonical form used by the operator.
          </p>
          
          <p>
            Properties:
          </p>
          
          <ul className="text-[#5A5A5A] space-y-2 ml-6 list-disc">
            <li><strong>idempotent</strong> (extracting again does not change the result),</li>
            <li><strong>structure-preserving</strong>,</li>
            <li><strong>domain-purifying</strong>,</li>
            <li><strong>entropy-reducing</strong>,</li>
            <li><strong>invariant-respecting</strong>.</li>
          </ul>
          
          <h2 className="text-xl font-light text-[#1A1A1A] mt-8 mb-4">3. Problem rewriting</h2>
          
          <p>
            After extraction, the canonical form may still not reflect the representation the model can solve.
          </p>
          
          <p>
            Problem rewriting transforms the slice into a representation that aligns with a stable manifold region:
          </p>
          
          <pre className="bg-[#FFFFFF] border border-[#E8E8E6] p-4 rounded overflow-x-auto mb-6 font-mono text-sm">
            {`rₜ = R(zₜ)`}
          </pre>
          
          <p>
            Where R:
          </p>
          
          <ul className="text-[#5A5A5A] space-y-2 ml-6 list-disc">
            <li>normalizes structure,</li>
            <li>enforces schemas,</li>
            <li>removes ambiguity,</li>
            <li>simplifies the objective,</li>
            <li>clarifies constraints.</li>
          </ul>
          
          <p className="text-[#2A2A2A] italic">
            This step converts an otherwise impossible prompt into a solvable one.
          </p>
          
          <h2 className="text-xl font-light text-[#1A1A1A] mt-8 mb-4">4. Example: Browser automation (the most intuitive case)</h2>
          
          <div className="space-y-4">
            <div>
              <p className="text-[#2A2A2A] font-medium mb-2">Raw input</p>
              <p className="text-[#5A5A5A]">
                A full DOM tree with:
              </p>
              <ul className="text-[#8C8C8C] space-y-1 ml-6 list-disc text-sm">
                <li>hidden nodes,</li>
                <li>inconsistent structure,</li>
                <li>irrelevant sections,</li>
                <li>noise from scripts.</li>
              </ul>
            </div>
            
            <div>
              <p className="text-[#2A2A2A] font-medium mb-2">Domain extractor</p>
              <pre className="bg-[#FFFFFF] border border-[#E8E8E6] p-2 rounded overflow-x-auto font-mono text-xs mb-2">
                {`zₜ = visible_interaction_region(DOM)`}
              </pre>
              <p className="text-[#5A5A5A]">Examples:</p>
              <ul className="text-[#8C8C8C] space-y-1 ml-6 list-disc text-sm">
                <li>the form currently displayed,</li>
                <li>the active modal,</li>
                <li>the table row that changed.</li>
              </ul>
            </div>
            
            <div>
              <p className="text-[#2A2A2A] font-medium mb-2">Rewriter</p>
              <pre className="bg-[#FFFFFF] border border-[#E8E8E6] p-2 rounded overflow-x-auto font-mono text-xs mb-2">
                {`rₜ = canonical_DOM_structure(zₜ)`}
              </pre>
              <p className="text-[#5A5A5A]">This may:</p>
              <ul className="text-[#8C8C8C] space-y-1 ml-6 list-disc text-sm">
                <li>flatten tables into lists,</li>
                <li>normalize forms,</li>
                <li>remove dynamic attributes,</li>
                <li>simplify selectors,</li>
                <li>preserve only actionable elements.</li>
              </ul>
            </div>
            
            <div>
              <p className="text-[#5A5A5A] mb-2">
                <strong>Only then</strong> is the operator called:
              </p>
              <pre className="bg-[#FFFFFF] border border-[#E8E8E6] p-2 rounded overflow-x-auto font-mono text-xs">
                {`actions = f(rₜ)`}
              </pre>
              <p className="text-[#2A2A2A] italic mt-2">
                This eliminates 90% of browser-agent instability.
              </p>
            </div>
          </div>
          
          <h2 className="text-xl font-light text-[#1A1A1A] mt-8 mb-4">5. Example: Document extraction</h2>
          
          <div className="space-y-4">
            <div>
              <p className="text-[#2A2A2A] font-medium mb-2">Raw input</p>
              <p className="text-[#5A5A5A]">
                A 50-page PDF with layout noise, mixed styles, and irrelevant sections.
              </p>
            </div>
            
            <div>
              <p className="text-[#2A2A2A] font-medium mb-2">Domain extractor</p>
              <pre className="bg-[#FFFFFF] border border-[#E8E8E6] p-2 rounded overflow-x-auto font-mono text-xs mb-2">
                {`zₜ = extract_section(document, target_field)`}
              </pre>
              <p className="text-[#5A5A5A]">Examples:</p>
              <ul className="text-[#8C8C8C] space-y-1 ml-6 list-disc text-sm">
                <li>only the "Payment Information" table,</li>
                <li>only the "Employment Start Date" line,</li>
                <li>only the W-4 box the workflow needs.</li>
              </ul>
            </div>
            
            <div>
              <p className="text-[#2A2A2A] font-medium mb-2">Rewriter</p>
              <pre className="bg-[#FFFFFF] border border-[#E8E8E6] p-2 rounded overflow-x-auto font-mono text-xs mb-2">
                {`rₜ = normalize_table(zₜ)`}
              </pre>
              <p className="text-[#5A5A5A]">Or:</p>
              <pre className="bg-[#FFFFFF] border border-[#E8E8E6] p-2 rounded overflow-x-auto font-mono text-xs mb-2">
                {`rₜ = canonical_text_form(zₜ)`}
              </pre>
              <p className="text-[#5A5A5A] mt-2">
                Now the operator extracts fields reliably.
              </p>
            </div>
          </div>
          
          <h2 className="text-xl font-light text-[#1A1A1A] mt-8 mb-4">6. Example: Compliance / HR workflows</h2>
          
          <div className="space-y-4">
            <div>
              <p className="text-[#2A2A2A] font-medium mb-2">Raw input</p>
              <p className="text-[#5A5A5A]">
                Employee data across:
              </p>
              <ul className="text-[#8C8C8C] space-y-1 ml-6 list-disc text-sm">
                <li>multiple systems,</li>
                <li>different formats,</li>
                <li>optional fields,</li>
                <li>irrelevant attributes,</li>
                <li>location-dependent rules.</li>
              </ul>
            </div>
            
            <div>
              <p className="text-[#2A2A2A] font-medium mb-2">Domain extractor</p>
              <pre className="bg-[#FFFFFF] border border-[#E8E8E6] p-2 rounded overflow-x-auto font-mono text-xs">
                {`zₜ = jurisdiction_relevant_subset(employee_state)`}
              </pre>
            </div>
            
            <div>
              <p className="text-[#2A2A2A] font-medium mb-2">Rewriter</p>
              <pre className="bg-[#FFFFFF] border border-[#E8E8E6] p-2 rounded overflow-x-auto font-mono text-xs mb-2">
                {`rₜ = schema_align(zₜ, compliance_rule_schema)`}
              </pre>
              <p className="text-[#5A5A5A] mt-2">
                Now the operator produces:
              </p>
              <pre className="bg-[#FFFFFF] border border-[#E8E8E6] p-2 rounded overflow-x-auto font-mono text-xs mb-2">
                {`steps = f(rₜ)`}
              </pre>
              <p className="text-[#5A5A5A]">
                And each step is correct because the domain is correct.
              </p>
            </div>
          </div>
          
          <h2 className="text-xl font-light text-[#1A1A1A] mt-8 mb-4">7. Why domain extractors stabilize LLMs</h2>
          
          <p>
            Domain extractors:
          </p>
          
          <ul className="text-[#5A5A5A] space-y-2 ml-6 list-disc">
            <li>contract the manifold region,</li>
            <li>remove high-entropy elements,</li>
            <li>eliminate mixed-domain patterns,</li>
            <li>prevent attractor drift,</li>
            <li>align the input with the model's strongest internal structure.</li>
          </ul>
          
          <p>
            Rewriting ensures that the operator sees <strong>only</strong> the representation it can reliably transform.
          </p>
          
          <p className="text-[#2A2A2A] italic">
            This is the hidden source of high reliability in well-designed agent systems.
          </p>
          
          <h2 className="text-xl font-light text-[#1A1A1A] mt-8 mb-4">8. Representation rewriting patterns</h2>
          
          <div className="space-y-3">
            <div>
              <p className="text-[#2A2A2A] font-medium">1. Canonicalization</p>
              <p className="text-[#5A5A5A] text-sm">
                Convert multiple possible input forms into a single standard form.
              </p>
              <ul className="text-[#8C8C8C] space-y-1 ml-6 list-disc text-xs">
                <li>tables → lists</li>
                <li>messy paragraphs → key-value blocks</li>
                <li>raw DOM → interaction graph</li>
              </ul>
            </div>
            
            <div>
              <p className="text-[#2A2A2A] font-medium">2. Constraint encoding</p>
              <p className="text-[#5A5A5A] text-sm">
                Bake constraints into the representation instead of describing them.
              </p>
            </div>
            
            <div>
              <p className="text-[#2A2A2A] font-medium">3. Goal specifying through structure</p>
              <p className="text-[#5A5A5A] text-sm">
                Use structure, not text, to express the objective.
              </p>
            </div>
            
            <div>
              <p className="text-[#2A2A2A] font-medium">4. Noise pruning</p>
              <p className="text-[#5A5A5A] text-sm">
                Delete everything irrelevant.
              </p>
            </div>
            
            <div>
              <p className="text-[#2A2A2A] font-medium">5. Semantic flattening</p>
              <p className="text-[#5A5A5A] text-sm">
                Simplify concepts into machine-stable forms.
              </p>
            </div>
          </div>
          
          <h2 className="text-xl font-light text-[#1A1A1A] mt-8 mb-4">9. Why most agent frameworks fail</h2>
          
          <p>
            They skip this entire step.
          </p>
          
          <p>
            They give the model raw:
          </p>
          
          <ul className="text-[#5A5A5A] space-y-2 ml-6 list-disc">
            <li>HTML,</li>
            <li>user history,</li>
            <li>entire conversations,</li>
            <li>full documents,</li>
            <li>mixed tasks.</li>
          </ul>
          
          <p>
            The model collapses all of this into one latent state → unstable trajectories → hallucination → failed workflows.
          </p>
          
          <p className="text-[#2A2A2A] font-medium">
            Domain extraction + rewriting solves this.
          </p>
          
          <h2 className="text-xl font-light text-[#1A1A1A] mt-8 mb-4">10. Link to 0-Context Architecture</h2>
          
          <p>
            0-context is essentially <strong>domain extraction plus strict rewriting with zero residue</strong>.
          </p>
          
          <p>
            You isolate:
          </p>
          
          <ul className="text-[#5A5A5A] space-y-2 ml-6 list-disc">
            <li>one domain,</li>
            <li>one structure,</li>
            <li>one objective,</li>
            <li>one representation.</li>
          </ul>
          
          <p>
            And you present only that to the operator.
          </p>
          
          <p className="text-[#2A2A2A] italic">
            This is why 0-context outperforms long-context systems on real automation tasks.
          </p>
          
          <h2 className="text-xl font-light text-[#1A1A1A] mt-8 mb-4">11. Research directions</h2>
          
          <ul className="text-[#5A5A5A] space-y-2 ml-6 list-disc">
            <li>automated canonicalization of enterprise schemas,</li>
            <li>stability analysis under different rewriting strategies,</li>
            <li>manifold-region mapping using domain-extracted embeddings,</li>
            <li>designing robust domain-projection languages,</li>
            <li>cross-domain extraction for multi-operator pipelines.</li>
          </ul>
          
          <p>
            The extractor–rewriter architecture is the backbone of verifiable agents.
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


export default function AgentsAsOperatorsNotOraclesPage() {
  return (
    <div className="space-y-12 max-w-3xl">
      <section>
        <h1 className="text-3xl font-light tracking-tight mb-4">
          Agents as Operators, Not Oracles
        </h1>
        <p className="text-[#8C8C8C] text-sm mb-8">
          Transformation, not reasoning
        </p>
      </section>

      <article className="prose max-w-none">
        <div className="text-[#5A5A5A] text-sm leading-relaxed space-y-6">
          <p>
            Agents are often treated like intelligent entities capable of reasoning, inference, or intention. This framing leads to brittle workflows, unpredictable behavior, and systems that cannot be validated.
          </p>
          
          <p>
            A correct abstraction is far simpler:
          </p>
          
          <p className="text-[#2A2A2A] font-medium text-base">
            An agent is an operator that transforms one domain representation into another. Nothing more.
          </p>
          
          <p>
            This document formalizes the operator-based view and provides concrete, real-world examples to make the concept intuitive, even for readers without deep control-theory background.
          </p>
          
          <h2 className="text-xl font-light text-[#1A1A1A] mt-8 mb-4">1. Why the oracle model fails</h2>
          
          <p>
            The traditional view treats agents as if they:
          </p>
          
          <ul className="text-[#5A5A5A] space-y-2 ml-6 list-disc">
            <li>"figure out" steps,</li>
            <li>"plan" like humans,</li>
            <li>"understand" goals.</li>
          </ul>
          
          <p>
            In reality, the agent is performing a sequence of transformations:
          </p>
          
          <pre className="bg-[#FFFFFF] border border-[#E8E8E6] p-4 rounded overflow-x-auto mb-6 font-mono text-sm">
            {`stateᵢ → operator → stateᵢ₊₁`}
          </pre>
          
          <p>
            When you expect reasoning, you get instability. When you expect transformation, you get predictability.
          </p>
          
          <h2 className="text-xl font-light text-[#1A1A1A] mt-8 mb-4">2. Operator viewpoint (control theory framing)</h2>
          
          <p>
            An agent is a block in a control system:
          </p>
          
          <pre className="bg-[#FFFFFF] border border-[#E8E8E6] p-4 rounded overflow-x-auto mb-6 font-mono text-sm">
            {`input_domain → agent_operator → output_domain`}
          </pre>
          
          <p>
            The operator has three key properties:
          </p>
          
          <ul className="text-[#5A5A5A] space-y-2 ml-6 list-disc">
            <li><strong>Deterministic structure</strong> — the operator type does not change.</li>
            <li><strong>Domain sensitivity</strong> — correct behavior depends on correct representation.</li>
            <li><strong>Predictable failure</strong> — incorrect input yields predictable drift.</li>
          </ul>
          
          <p>
            This is identical to classical control components like filters, integrators, or compensators.
          </p>
          
          <div className="border-l-2 border-[#DADADA] pl-6 my-6">
            <p className="text-[#2A2A2A] font-medium mb-2">Real example</p>
            <p className="text-[#5A5A5A]">
              If you feed a PID controller the wrong sensor reading, it produces a wrong-but-consistent control signal.<br />
              The PID isn't "hallucinating."<br />
              It's applying the correct operator to the wrong domain.
            </p>
            <p className="text-[#5A5A5A] mt-2">
              Agents behave the same way.
            </p>
          </div>
          
          <h2 className="text-xl font-light text-[#1A1A1A] mt-8 mb-4">3. From reasoning to transformation</h2>
          
          <p>
            Agents do not create new information. They <strong>transform</strong>:
          </p>
          
          <ul className="text-[#5A5A5A] space-y-2 ml-6 list-disc">
            <li>a page's DOM → actions,</li>
            <li>a business rule → a structured plan,</li>
            <li>a document → extracted fields,</li>
            <li>a conversation → a summarized state.</li>
          </ul>
          
          <div className="border-l-2 border-[#DADADA] pl-6 my-6">
            <p className="text-[#2A2A2A] font-medium mb-2">Example (browser automation)</p>
            <p className="text-[#5A5A5A] mb-2">
              <strong>Wrong expectation (oracle):</strong><br />
              "Navigate to the tax form page."
            </p>
            <p className="text-[#5A5A5A] mb-2">
              <strong>Correct framing (operator):</strong>
            </p>
            <pre className="bg-[#FFFFFF] border border-[#E8E8E6] p-2 rounded overflow-x-auto font-mono text-xs">
              {`DOM_snapshot → operator → action_sequence`}
            </pre>
            <p className="text-[#5A5A5A] mt-2">
              If the DOM slice is incorrect or contains mixed domains, the output is wrong — but coherently wrong.
            </p>
          </div>
          
          <h2 className="text-xl font-light text-[#1A1A1A] mt-8 mb-4">4. Why treating agents as operators increases reliability</h2>
          
          <p>
            Operators are predictable.<br />
            Oracles are not.
          </p>
          
          <p>
            When you treat the agent as an operator:
          </p>
          
          <ul className="text-[#5A5A5A] space-y-2 ml-6 list-disc">
            <li>you constrain the domain,</li>
            <li>you restrict the valid transitions,</li>
            <li>you can verify every output,</li>
            <li>you can detect deviation early,</li>
            <li>you can chain operators safely.</li>
          </ul>
          
          <div className="border-l-2 border-[#DADADA] pl-6 my-6">
            <p className="text-[#2A2A2A] font-medium mb-2">Example (extracting fields)</p>
            <p className="text-[#5A5A5A] mb-2">
              <strong>Bad mental model:</strong><br />
              "Let the agent read the document and figure out the fields."
            </p>
            <p className="text-[#5A5A5A] mb-2">
              <strong>Operator model:</strong>
            </p>
            <pre className="bg-[#FFFFFF] border border-[#E8E8E6] p-2 rounded overflow-x-auto font-mono text-xs mb-2">
              {`text_chunk → schema_projection_operator → structured_fields`}
            </pre>
            <p className="text-[#5A5A5A]">
              Verification is trivial:
            </p>
            <ul className="text-[#8C8C8C] space-y-1 ml-6 list-disc text-xs">
              <li>are all required fields present?</li>
              <li>are types correct?</li>
              <li>does it match the schema domain?</li>
            </ul>
          </div>
          
          <h2 className="text-xl font-light text-[#1A1A1A] mt-8 mb-4">5. Agents in a closed-loop system</h2>
          
          <p>
            A single agent is just one block. Real systems require loops:
          </p>
          
          <pre className="bg-[#FFFFFF] border border-[#E8E8E6] p-4 rounded overflow-x-auto mb-6 font-mono text-sm">
            {`stateₜ → operator → proposed_transition → verifier → corrected_state → next cycle`}
          </pre>
          
          <p>
            This mirrors control loops in engineering.
          </p>
          
          <div className="border-l-2 border-[#DADADA] pl-6 my-6">
            <p className="text-[#2A2A2A] font-medium mb-2">Example (enterprise onboarding)</p>
            <ol className="text-[#5A5A5A] space-y-1 ml-6 list-decimal text-sm">
              <li>Extract employee info</li>
              <li>Generate required compliance steps</li>
              <li>Verify each step deterministically</li>
              <li>Update workflow state</li>
              <li>Loop until completion</li>
            </ol>
            <p className="text-[#5A5A5A] mt-2">
              The agent is never "figuring out onboarding."<br />
              It is transforming states.
            </p>
          </div>
          
          <h2 className="text-xl font-light text-[#1A1A1A] mt-8 mb-4">6. Why this eliminates the magic</h2>
          
          <p>
            By removing mystique, the architecture becomes:
          </p>
          
          <ul className="text-[#5A5A5A] space-y-2 ml-6 list-disc">
            <li>measurable,</li>
            <li>audit-friendly,</li>
            <li>scalable,</li>
            <li>testable.</li>
          </ul>
          
          <div className="border-l-2 border-[#DADADA] pl-6 my-6">
            <p className="text-[#2A2A2A] font-medium mb-2">Example (LLM):</p>
            <p className="text-[#5A5A5A] mb-2">
              An LLM is not "thinking." It is applying a nonlinear operator from token domain → latent space → token domain.
            </p>
            <p className="text-[#5A5A5A]">
              When you see it as an operator:
            </p>
            <ul className="text-[#8C8C8C] space-y-1 ml-6 list-disc text-xs">
              <li>hallucination = domain mismatch,</li>
              <li>repetition = attractor drift,</li>
              <li>errors = unstable trajectory.</li>
            </ul>
          </div>
          
          <h2 className="text-xl font-light text-[#1A1A1A] mt-8 mb-4">7. Building agents as operator pipelines</h2>
          
          <p>
            Complex workflows are built by chaining operators with verifiers in between.
          </p>
          
          <p className="text-[#2A2A2A] font-medium">
            Example pipeline (payroll automation):
          </p>
          
          <pre className="bg-[#FFFFFF] border border-[#E8E8E6] p-4 rounded overflow-x-auto mb-6 font-mono text-sm">
{`PDF → text_extractor
text → entity_extractor
entities → compliance_checker
compliance_state → action_generator
actions → browser_actuator`}
          </pre>
          
          <p>
            Each block has:
          </p>
          
          <ul className="text-[#5A5A5A] space-y-2 ml-6 list-disc">
            <li>a domain input,</li>
            <li>a transformation rule,</li>
            <li>a domain output.</li>
          </ul>
          
          <p>
            This creates a <strong>verifiable agentic system</strong>, not a free-form AI.
          </p>
          
          <h2 className="text-xl font-light text-[#1A1A1A] mt-8 mb-4">8. How this reframing solves real production failures</h2>
          
          <div className="space-y-4">
            <div className="border-l-2 border-[#DADADA] pl-6">
              <p className="text-[#2A2A2A] font-medium mb-2">Example: browser agent stuck in a loop</p>
              <p className="text-[#5A5A5A] mb-2">
                <strong>Cause:</strong> treating the agent like an oracle ("figure out where to click next").
              </p>
              <p className="text-[#5A5A5A] mb-2">
                <strong>Operator fix:</strong>
              </p>
              <pre className="bg-[#FFFFFF] border border-[#E8E8E6] p-2 rounded overflow-x-auto font-mono text-xs mb-2">
                {`DOM_slice → action_selector`}
              </pre>
              <p className="text-[#5A5A5A]">
                If the slice is empty or ambiguous, the verifier catches it before the loop repeats.
              </p>
            </div>
            
            <div className="border-l-2 border-[#DADADA] pl-6">
              <p className="text-[#2A2A2A] font-medium mb-2">Example: document extraction hallucinating values</p>
              <p className="text-[#5A5A5A] mb-2">
                <strong>Cause:</strong> entire document given without domain isolation.
              </p>
              <p className="text-[#5A5A5A] mb-2">
                <strong>Operator fix:</strong>
              </p>
              <pre className="bg-[#FFFFFF] border border-[#E8E8E6] p-2 rounded overflow-x-auto font-mono text-xs mb-2">
{`section → field_extractor
fields → validator`}
              </pre>
              <p className="text-[#5A5A5A]">
                Invalid fields are rejected before they propagate.
              </p>
            </div>
          </div>
          
          <h2 className="text-xl font-light text-[#1A1A1A] mt-8 mb-4">9. Summary</h2>
          
          <p className="text-[#2A2A2A] font-medium">
            Agents are reliable only when treated as operators.
          </p>
          
          <ul className="text-[#5A5A5A] space-y-2 ml-6 list-disc">
            <li>Not intelligent</li>
            <li>Not reasoning</li>
            <li>Not autonomous</li>
            <li>Not oracles</li>
          </ul>
          
          <p>
            They are <strong>deterministic transformation components</strong> inside a larger control loop.
          </p>
          
          <p>
            This is the foundation for:
          </p>
          
          <ul className="text-[#5A5A5A] space-y-2 ml-6 list-disc">
            <li>verifiable agentic systems,</li>
            <li>0-context architecture,</li>
            <li>domain intelligence,</li>
            <li>enterprise automation at scale.</li>
          </ul>
          
          <p className="text-[#2A2A2A] italic">
            This framing is the reason your architectures succeed where others fail.
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


export default function DomainMismatchAndHallucinationPage() {
  return (
    <div className="space-y-12 max-w-3xl">
      <section>
        <h1 className="text-3xl font-thin tracking-tight mb-4">
          Domain Mismatch & Hallucination
        </h1>
        <p className="text-white/50 text-sm mb-8">
          Correct operators on incorrect representations
        </p>
      </section>

      <article className="prose prose-invert max-w-none">
        <div className="text-white/70 text-sm leading-relaxed space-y-6">
          <p>
            Hallucination is not a failure of intelligence. It is the natural outcome of <strong>applying a correct operator to an incorrect domain representation</strong>.
          </p>
          
          <p>
            This section formalizes why LLMs produce coherent but wrong outputs, why these errors are structurally predictable, and how domain mismatch creates unstable latent trajectories.
          </p>
          
          <h2 className="text-xl font-thin text-white/90 mt-8 mb-4">1. Hallucination as a domain error</h2>
          
          <p>
            LLMs operate over vector representations, not meanings. When the input representation does not encode the intended domain:
          </p>
          
          <ul className="text-white/60 space-y-2 ml-6 list-disc">
            <li>the latent state lands in the wrong manifold region,</li>
            <li>the operator applies the correct transformation to the wrong state,</li>
            <li>the output appears coherent but is structurally invalid.</li>
          </ul>
          
          <p className="text-white/80 font-medium">
            The model isn't inventing; it is following the physics of its latent space.
          </p>
          
          <h2 className="text-xl font-thin text-white/90 mt-8 mb-4">2. Latent-space manifold boundaries</h2>
          
          <p>
            Every domain corresponds to a region of the model's manifold. For example:
          </p>
          
          <ul className="text-white/60 space-y-2 ml-6 list-disc">
            <li>legal structures → one basin,</li>
            <li>step-by-step reasoning → another basin,</li>
            <li>creative writing → another basin.</li>
          </ul>
          
          <p>
            When a prompt mixes structures from different domains:
          </p>
          
          <ul className="text-white/60 space-y-2 ml-6 list-disc">
            <li>embeddings overlap,</li>
            <li>boundaries blur,</li>
            <li>latent trajectories cross unintended regions.</li>
          </ul>
          
          <p>
            The model resolves ambiguity by falling into the nearest stable attractor — which may not match the intended task.
          </p>
          
          <h2 className="text-xl font-thin text-white/90 mt-8 mb-4">3. Structural ambiguity as the root cause</h2>
          
          <p>
            Hallucination is not randomness. It is <strong>resolution of ambiguity</strong>.
          </p>
          
          <p>
            Ambiguity arises when:
          </p>
          
          <ul className="text-white/60 space-y-2 ml-6 list-disc">
            <li>instructions conflict with examples,</li>
            <li>schemas are incomplete,</li>
            <li>traces from previous steps remain in context,</li>
            <li>the prompt encodes multiple domains at once.</li>
          </ul>
          
          <p>
            The model compresses all of this into a single latent state. This forces structural contradictions into one representation, guaranteeing drift.
          </p>
          
          <h2 className="text-xl font-thin text-white/90 mt-8 mb-4">4. Attractor misalignment</h2>
          
          <p>
            Human-style domains do not matter.<br />
            Latent attractors do.
          </p>
          
          <p>
            If the encoded input lies closer to a pattern the model has reinforced heavily in training, the trajectory is pulled toward that basin.
          </p>
          
          <p className="text-white/80 font-medium">
            Examples:
          </p>
          
          <ul className="text-white/60 space-y-2 ml-6 list-disc">
            <li>"Fix this JSON" drifting into explanation text,</li>
            <li>"Extract fields" drifting into creative synthesis,</li>
            <li>"Analyze" drifting into chain-of-thought templates,</li>
            <li>"Summarize a document" drifting into hallucinated summaries when structure is missing.</li>
          </ul>
          
          <p className="text-white/80 italic">
            The attractor wins, not the intent.
          </p>
          
          <h2 className="text-xl font-thin text-white/90 mt-8 mb-4">5. Coherence is not correctness</h2>
          
          <p>
            Coherence is a property of the attractor dynamics.<br />
            Correctness is a property of the domain.
          </p>
          
          <p>
            When the domain is mismatched:
          </p>
          
          <ul className="text-white/60 space-y-2 ml-6 list-disc">
            <li>the model produces a trajectory that is internally consistent,</li>
            <li>but the mapping between input and output is structurally invalid.</li>
          </ul>
          
          <p className="text-white/80 italic">
            This is why hallucinations often read smooth and authoritative.
          </p>
          
          <h2 className="text-xl font-thin text-white/90 mt-8 mb-4">6. Domain collapse under mixed signals</h2>
          
          <p>
            When two domains coexist in the same prompt, the model must:
          </p>
          
          <ul className="text-white/60 space-y-2 ml-6 list-disc">
            <li>compress them,</li>
            <li>unify them,</li>
            <li>produce a single trajectory.</li>
          </ul>
          
          <p>
            This collapse creates outputs that seem "invented" but are in fact <strong>statistical interpolations across incompatible regions</strong> of the manifold.
          </p>
          
          <h2 className="text-xl font-thin text-white/90 mt-8 mb-4">7. Why retrying doesn't fix it</h2>
          
          <p>
            If the domain is wrong:
          </p>
          
          <ul className="text-white/60 space-y-2 ml-6 list-disc">
            <li>retries land in the same region,</li>
            <li>the attractor remains dominant,</li>
            <li>the structure of the error persists.</li>
          </ul>
          
          <p className="text-white/80 italic">
            Hallucinations repeat because the representation error repeats.
          </p>
          
          <h2 className="text-xl font-thin text-white/90 mt-8 mb-4">8. The fix: enforce domain alignment before the operator</h2>
          
          <p>
            Hallucination drops dramatically when:
          </p>
          
          <ul className="text-white/60 space-y-2 ml-6 list-disc">
            <li>the domain is isolated,</li>
            <li>ambiguity is removed,</li>
            <li>schemas are enforced,</li>
            <li>the prompt is rewritten into a form that matches a stable manifold region.</li>
          </ul>
          
          <p>
            This is the core mechanic behind:
          </p>
          
          <ul className="text-white/60 space-y-2 ml-6 list-disc">
            <li><strong>0-context</strong>,</li>
            <li><strong>Domain Intelligence</strong>,</li>
            <li><strong>verifiable agent loops</strong>,</li>
            <li><strong>deterministic planning pipelines</strong>.</li>
          </ul>
          
          <p className="text-white/80 font-medium">
            These systems reduce hallucination not by improving the model but by <strong>controlling its initial conditions</strong>.
          </p>
          
          <h2 className="text-xl font-thin text-white/90 mt-8 mb-4">9. Formalizing domain mismatch</h2>
          
          <pre className="bg-white/5 border border-white/10 p-4 rounded overflow-x-auto mb-6 font-mono text-sm">
{`Let D₁ be the intended domain.
Let E(x) be the encoding of input x.
Let M be the model operator.
Let Y be the output domain.

If E(x) ∉ manifold(D₁), then:
    M(E(x)) → Y′ where Y′ ∉ Y`}
          </pre>
          
          <p className="text-white/80 italic">
            This is hallucination: a mapping to a valid region of Y, but not the <em>correct</em> one.
          </p>
          
          <h2 className="text-xl font-thin text-white/90 mt-8 mb-4">10. Research directions</h2>
          
          <p>
            Areas for deeper exploration:
          </p>
          
          <ul className="text-white/60 space-y-2 ml-6 list-disc">
            <li>mapping basin transitions caused by mixed-domain prompts,</li>
            <li>measuring drift distance between intended vs actual manifold regions,</li>
            <li>designing canonicalization processes that force domain purity,</li>
            <li>attractor shaping through minimal representations,</li>
            <li>formal evaluation metrics for domain alignment.</li>
          </ul>
          
          <p>
            These elements form the empirical backbone for predictable, verifiable agentic systems.
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


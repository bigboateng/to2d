export default function LatentSpaceNavigationPage() {
  return (
    <div className="space-y-12 max-w-3xl">
      <section>
        <h1 className="text-3xl font-thin tracking-tight mb-4">
          Latent Space Navigation
        </h1>
        <p className="text-white/50 text-sm mb-8">
          State-space dynamics, not semantics
        </p>
      </section>

      <article className="prose prose-invert max-w-none">
        <div className="text-white/70 text-sm leading-relaxed space-y-6">
          <p>
            Understanding language models through <em>state-space dynamics</em> rather than semantics.
          </p>
          
          <p>
            Latent space is not a "vector cloud" or "embedding library." It is a high‑dimensional dynamical landscape shaped by the model's weights, attention topology, and training distribution. Navigation through this landscape follows structural constraints — not meaning.
          </p>
          
          <h2 className="text-xl font-thin text-white/90 mt-8 mb-4">1. Latent states as points in a constrained manifold</h2>
          
          <p>
            Each token sequence encodes into a point on a manifold defined by the model's internal geometry. Key properties:
          </p>
          
          <ul className="text-white/60 space-y-2 ml-6 list-disc">
            <li><strong>Dimensionality</strong>: Typically thousands of dimensions.</li>
            <li><strong>Topology</strong>: Not Euclidean in practice due to nonlinearities, attention routing, and residual pathways.</li>
            <li><strong>Manifold constraints</strong>: The model tends to project inputs into specific "basins" — regions reflecting stable patterns.</li>
          </ul>
          
          <div className="border-l-2 border-white/20 pl-6 my-6">
            <p className="text-white/80 font-medium mb-2">Implication</p>
            <p className="text-white/60">
              Two different prompts land in the same basin if they share structural patterns, not semantics. This explains why unrelated tasks sometimes interact.
            </p>
          </div>
          
          <h2 className="text-xl font-thin text-white/90 mt-8 mb-4">2. Navigation = controlled drift under repeated transformations</h2>
          
          <p>
            Each layer applies a transformation:
          </p>
          
          <pre className="bg-white/5 border border-white/10 p-4 rounded overflow-x-auto mb-6 font-mono text-sm">
            {`stateₜ₊₁ = f(stateₜ, attentionₜ, weights)`}
          </pre>
          
          <p>
            This creates a discrete dynamical system.
          </p>
          
          <ul className="text-white/60 space-y-2 ml-6 list-disc">
            <li><strong>Residual connections</strong> act as integrators.</li>
            <li><strong>Attention</strong> acts as a context‑dependent routing mechanism.</li>
            <li><strong>Layer norms</strong> act as stabilizers.</li>
          </ul>
          
          <p className="text-white/80 italic">
            LLMs are not selecting answers — they are following a trajectory.
          </p>
          
          <h2 className="text-xl font-thin text-white/90 mt-8 mb-4">3. Attractor regions</h2>
          
          <p>
            The latent space contains <strong>attractors</strong>: regions that trajectories fall into. Attractors arise from:
          </p>
          
          <ul className="text-white/60 space-y-2 ml-6 list-disc">
            <li>repeated gradient reinforcement during training,</li>
            <li>frequency‑dominated token patterns,</li>
            <li>structural templates (lists, explanations, plans),</li>
            <li>safety tuning and reward shaping.</li>
          </ul>
          
          <p>
            Once the model enters an attractor, the output tends to follow a predictable pattern.
          </p>
          
          <div className="border-l-2 border-white/20 pl-6 my-6">
            <p className="text-white/80 font-medium mb-2">Example</p>
            <p className="text-white/60">
              When an input resembles "step‑by‑step," the trajectory moves toward the chain‑of‑thought basin.
            </p>
          </div>
          
          <h2 className="text-xl font-thin text-white/90 mt-8 mb-4">4. Why domain mismatch causes incorrect trajectories</h2>
          
          <p>
            If the input is structurally ambiguous, the encoded state may:
          </p>
          
          <ul className="text-white/60 space-y-2 ml-6 list-disc">
            <li>fall into the wrong basin,</li>
            <li>drift toward a statistically dominant attractor,</li>
            <li>trigger patterns unrelated to the intended domain.</li>
          </ul>
          
          <p className="text-white/80 italic">
            This is the latent‑space origin of hallucination.
          </p>
          
          <p>
            The model isn't wrong — it is following the only stable trajectory available from the representation you forced it into.
          </p>
          
          <h2 className="text-xl font-thin text-white/90 mt-8 mb-4">5. State‑space navigation with constrained domains</h2>
          
          <p>
            If the domain is fixed before encoding, navigation becomes reliable.
          </p>
          
          <p className="text-white/80 font-medium">
            Example structure:
          </p>
          
          <pre className="bg-white/5 border border-white/10 p-4 rounded overflow-x-auto mb-6 font-mono text-sm">
            {`raw_input → domain_extractor → canonical_form → encode → latent_trajectory`}
          </pre>
          
          <p>
            The trajectory becomes reproducible because the manifold region is fixed.
          </p>
          
          <p>
            This is the foundation of:
          </p>
          
          <ul className="text-white/60 space-y-2 ml-6 list-disc">
            <li><strong>0‑context</strong> (forcing isolation),</li>
            <li><strong>domain intelligence</strong> (rewriting inputs),</li>
            <li><strong>verifiable agent loops</strong> (stabilizing outputs).</li>
          </ul>
          
          <h2 className="text-xl font-thin text-white/90 mt-8 mb-4">6. Representation shaping</h2>
          
          <p>
            You can influence navigation by controlling the input representation:
          </p>
          
          <ul className="text-white/60 space-y-2 ml-6 list-disc">
            <li>enforcing schemas,</li>
            <li>using structural cues,</li>
            <li>flattening ambiguity,</li>
            <li>removing irrelevant entropy,</li>
            <li>collapsing multi‑domain prompts into one resolved domain.</li>
          </ul>
          
          <p className="text-white/80 italic">
            This is the equivalent of placing the system into the correct coordinate frame before simulation.
          </p>
          
          <p className="text-white/60">
            Stability analysis for multi‑LLM pipelines.
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


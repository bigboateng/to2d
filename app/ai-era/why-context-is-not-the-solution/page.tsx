export default function WhyContextIsNotTheSolutionPage() {
  return (
    <div className="space-y-12 max-w-3xl">
      <section>
        <h1 className="text-3xl font-thin tracking-tight mb-4">
          Why Context Is Not the Solution
        </h1>
        <p className="text-white/50 text-sm mb-8">
          More tokens increase entropy, not reliability
        </p>
      </section>

      <article className="prose prose-invert max-w-none">
        <div className="text-white/70 text-sm leading-relaxed space-y-6">
          <p>
            Adding more tokens does not improve reliability. It increases entropy, destabilizes latent trajectories, and amplifies domain mismatch. This section formalizes why context-heavy prompting fails at scale, especially in agentic systems.
          </p>
          
          <h2 className="text-xl font-thin text-white/90 mt-8 mb-4">1. Context expands the input space, not the structure</h2>
          
          <p>
            LLMs encode the entire prompt into a latent state. More context means:
          </p>
          
          <ul className="text-white/60 space-y-2 ml-6 list-disc">
            <li>more competing patterns,</li>
            <li>more unresolved domains,</li>
            <li>more statistical ambiguity.</li>
          </ul>
          
          <p>
            The model cannot "prioritize" the correct parts unless the representation is shaped before encoding.
          </p>
          
          <div className="border-l-2 border-white/20 pl-6 my-6">
            <p className="text-white/80 font-medium mb-2">Key point</p>
            <p className="text-white/60">
              Longer context increases uncertainty because it adds more degrees of freedom to the latent state.
            </p>
          </div>
          
          <h2 className="text-xl font-thin text-white/90 mt-8 mb-4">2. Latent-state destabilization</h2>
          
          <p>
            Encoding is a projection:
          </p>
          
          <pre className="bg-white/5 border border-white/10 p-4 rounded overflow-x-auto mb-6 font-mono text-sm">
            {`sequence → embedding → latent state`}
          </pre>
          
          <p>
            This projection is not linear and not domain-aware.
          </p>
          
          <p>
            When context grows:
          </p>
          
          <ul className="text-white/60 space-y-2 ml-6 list-disc">
            <li>the manifold region widens,</li>
            <li>the encoded state becomes less constrained,</li>
            <li>navigation becomes more chaotic.</li>
          </ul>
          
          <p>
            Instead of moving within a tight subspace, the model drifts through high-variance regions.
          </p>
          
          <p className="text-white/80 italic">
            This is the opposite of reliability.
          </p>
          
          <h2 className="text-xl font-thin text-white/90 mt-8 mb-4">3. Attention amplifies the wrong signals</h2>
          
          <p>
            Attention does not select "relevant meaning."
            It selects <strong>patterns</strong>:
          </p>
          
          <ul className="text-white/60 space-y-2 ml-6 list-disc">
            <li>repetitive structures,</li>
            <li>frequent motifs,</li>
            <li>statistical correlations,</li>
            <li>dominant syntactic rhythms.</li>
          </ul>
          
          <p>
            With more context:
          </p>
          
          <ul className="text-white/60 space-y-2 ml-6 list-disc">
            <li>spurious patterns become dominant nodes,</li>
            <li>structural noise overpowers the intended domain,</li>
            <li>the model latches onto whichever pattern is the most statistically strong.</li>
          </ul>
          
          <div className="border-l-2 border-white/20 pl-6 my-6">
            <p className="text-white/80 font-medium mb-2">Result</p>
            <p className="text-white/60">
              The operator amplifies noise.
            </p>
          </div>
          
          <h2 className="text-xl font-thin text-white/90 mt-8 mb-4">4. Mixed-domain context collapses the representation</h2>
          
          <p>
            Most prompts contain:
          </p>
          
          <ul className="text-white/60 space-y-2 ml-6 list-disc">
            <li>instructions,</li>
            <li>examples,</li>
            <li>partial traces,</li>
            <li>system messages,</li>
            <li>unrelated history.</li>
          </ul>
          
          <p>
            Mixing domains forces the model to embed everything into one compressed vector.
          </p>
          
          <p>
            This causes:
          </p>
          
          <ul className="text-white/60 space-y-2 ml-6 list-disc">
            <li><strong>cross-domain interference</strong>,</li>
            <li><strong>incorrect basin selection</strong>,</li>
            <li><strong>unpredictable attractor drift</strong>.</li>
          </ul>
          
          <p>
            The model can only follow one trajectory. If domains conflict, the system defaults to the nearest attractor — not the correct interpretation.
          </p>
          
          <h2 className="text-xl font-thin text-white/90 mt-8 mb-4">5. Why adding more context increases hallucination</h2>
          
          <p>
            Hallucination occurs when the model falls into an attractor that does not match the intended domain.
          </p>
          
          <p>
            Long context makes this more likely because:
          </p>
          
          <ul className="text-white/60 space-y-2 ml-6 list-disc">
            <li>the manifold becomes larger,</li>
            <li>attractor boundaries blur,</li>
            <li>the model takes a trajectory based on statistical dominance instead of structural correctness.</li>
          </ul>
          
          <p className="text-white/80 italic">
            More tokens → more drift → more attractor collisions → more hallucination.
          </p>
          
          <h2 className="text-xl font-thin text-white/90 mt-8 mb-4">6. Why context hinders planning</h2>
          
          <p>
            Planning requires:
          </p>
          
          <ul className="text-white/60 space-y-2 ml-6 list-disc">
            <li>stable intermediate states,</li>
            <li>predictable transitions,</li>
            <li>constrained latent regions.</li>
          </ul>
          
          <p>
            Large context violates all three.
          </p>
          
          <p>
            The model must re-encode the entire sequence every step, injecting noise back into the latent state. Planning collapses under its own history.
          </p>
          
          <p>
            This is why agent loops with long context devolve into:
          </p>
          
          <ul className="text-white/60 space-y-2 ml-6 list-disc">
            <li>repetitive text,</li>
            <li>contradictory steps,</li>
            <li>stuck loops,</li>
            <li>unstable chains of thought.</li>
          </ul>
          
          <h2 className="text-xl font-thin text-white/90 mt-8 mb-4">7. Reliability = domain contraction, not expansion</h2>
          
          <p className="text-white/80 font-medium">
            The fix is not more context.<br />
            It is <strong>fewer, more precise representations</strong>.
          </p>
          
          <p>
            This requires:
          </p>
          
          <ul className="text-white/60 space-y-2 ml-6 list-disc">
            <li>domain extraction,</li>
            <li>canonical rewriting,</li>
            <li>narrow schemas,</li>
            <li>stable domain boundaries.</li>
          </ul>
          
          <p>
            Reducing context <strong>contracts</strong> the manifold region that the model must navigate.
          </p>
          
          <p className="text-white/80 italic">
            This is what makes trajectories stable.
          </p>
          
          <h2 className="text-xl font-thin text-white/90 mt-8 mb-4">8. Connection to 0-Context Architecture</h2>
          
          <p>
            0-context isolates the domain slice before calling the operator.<br />
            This eliminates:
          </p>
          
          <ul className="text-white/60 space-y-2 ml-6 list-disc">
            <li>cross-domain interference,</li>
            <li>latent drift,</li>
            <li>attractor ambiguity.</li>
          </ul>
          
          <p>
            The model moves in a predictable region, producing:
          </p>
          
          <ul className="text-white/60 space-y-2 ml-6 list-disc">
            <li>reproducible outputs,</li>
            <li>verifiable transitions,</li>
            <li>stable control loops.</li>
          </ul>
          
          <p className="text-white/80 font-medium">
            This is the only reliable foundation for agentic systems.
          </p>
          
          <h2 className="text-xl font-thin text-white/90 mt-8 mb-4">9. Research directions</h2>
          
          <p>
            Possible extensions of this work:
          </p>
          
          <ul className="text-white/60 space-y-2 ml-6 list-disc">
            <li>quantifying entropy expansion from additional tokens,</li>
            <li>mapping attractor transitions under mixed-domain prompts,</li>
            <li>designing canonicalization pipelines for enterprise workflows,</li>
            <li>modeling planning stability under shrinking vs expanding context windows.</li>
          </ul>
          
          <p>
            These form the empirical backbone for verifying agentic architectures built on domain isolation.
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


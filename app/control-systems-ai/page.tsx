import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Control Systems × AI | to2d',
  description: 'Applying aerospace and control theory to AI architectures. Where classical control theory meets modern AI systems.',
  openGraph: {
    title: 'Control Systems × AI',
    description: 'Applying aerospace and control theory to AI architectures. Where classical control theory meets modern AI systems.',
    images: [
      {
        url: '/images/ai/llm_open_loop_architecture.png',
        width: 1920,
        height: 1080,
        alt: 'Control Systems and AI Architecture',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Control Systems × AI',
    description: 'Applying aerospace and control theory to AI architectures.',
    images: ['/images/ai/llm_open_loop_architecture.png'],
  },
}

export default function ControlSystemsAIPage() {
  return (
    <div className="space-y-12 max-w-3xl">
      <section>
        <h1 className="text-3xl font-thin tracking-tight mb-4">
          Control Systems × AI
        </h1>
        <p className="text-white/50 text-sm mb-8">
          Stability over intelligence
        </p>
        <p className="text-white/70 leading-relaxed mb-6">
          Where classical control theory meets modern AI systems. Operators, not oracles.
        </p>
      </section>

      <section className="space-y-6">
        <a href="/control-systems-ai/why-current-llm-architectures-behave-like-open-loop-systems" className="border border-white/10 p-6 hover:border-white/30 transition-colors group block">
          <h2 className="text-xl font-thin mb-3 group-hover:text-white/90">Why Current LLM Architectures Behave Like Open-Loop Systems</h2>
          <p className="text-white/60 text-sm leading-relaxed mb-2">
            And why stability requires a control-theoretic layer.
          </p>
          <p className="text-white/40 text-xs">
            open-loop vs closed-loop · feedback control · runtime stability · autonomous correction
          </p>
        </a>

        <a href="/control-systems-ai/why-llms-fail-in-the-real-world" className="border border-white/10 p-6 hover:border-white/30 transition-colors group block">
          <h2 className="text-xl font-thin mb-3 group-hover:text-white/90">Why LLMs Fail in the Real World: Design-Time Optimization vs Real-Time Stability</h2>
          <p className="text-white/60 text-sm leading-relaxed mb-2">
            Why modern LLM systems overfit the setup phase and collapse during execution.
          </p>
          <p className="text-white/40 text-xs">
            preparation vs survival · fine-tuning limits · control-theoretic reframe
          </p>
        </a>

        <a href="/control-systems-ai/hierarchical-browser-control" className="border border-white/10 p-6 hover:border-white/30 transition-colors group block">
          <h2 className="text-xl font-thin mb-3 group-hover:text-white/90">Hierarchical Control for Browser Automation</h2>
          <p className="text-white/60 text-sm leading-relaxed mb-2">
            Applying supervisory control and distributed systems theory to agentic architectures.
          </p>
          <p className="text-white/40 text-xs">
            state-space decomposition · supervisory control · sensor fusion · DMPC · failure isolation
          </p>
        </a>

        <a href="/ai-era/determinism-vs-stability" className="border border-white/10 p-6 hover:border-white/30 transition-colors group block">
          <div className="flex items-start justify-between mb-3">
            <h2 className="text-xl font-thin group-hover:text-white/90">Determinism vs Stability</h2>
            <span className="text-white/40 text-xs shrink-0 ml-4">Dec 14, 2025</span>
          </div>
          <p className="text-white/60 text-sm leading-relaxed mb-2">
            Designing systems in non-deterministic environments.
          </p>
          <p className="text-white/40 text-xs">
            stability · convergence · dynamic systems · feedback loops · architectural resilience
          </p>
        </a>

        <a href="/ai-era/model-coupled-vs-decoupled" className="border border-white/10 p-6 hover:border-white/30 transition-colors group block">
          <div className="flex items-start justify-between mb-3">
            <h2 className="text-xl font-thin group-hover:text-white/90">Model-Coupled vs Model-Decoupled AI Systems</h2>
            <span className="text-white/40 text-xs shrink-0 ml-4">Dec 13, 2025</span>
          </div>
          <p className="text-white/60 text-sm leading-relaxed mb-2">
            Why architecture, not models, determines long-term product advantage.
          </p>
          <p className="text-white/40 text-xs">
            architecture · constraints · invariants · stability · competitive moats · control over intelligence
          </p>
        </a>

        <a href="/ai-era/multi-context-browser-control" className="border border-white/10 p-6 hover:border-white/30 transition-colors group block">
          <div className="flex items-start justify-between mb-3">
            <h2 className="text-xl font-thin group-hover:text-white/90">Multi-Context Browser Control for Agentic Systems</h2>
            <span className="text-white/40 text-xs shrink-0 ml-4">Dec 9, 2025</span>
          </div>
          <p className="text-white/60 text-sm leading-relaxed mb-2">
            A foundational primitive for distributed browser intelligence.
          </p>
          <p className="text-white/40 text-xs">
            browser contexts · session sharing · parallel pages · sub-agent delegation · createPage()
          </p>
        </a>

        <a href="/ai-era/legacy-invariants" className="border border-white/10 p-6 hover:border-white/30 transition-colors group block">
          <h2 className="text-xl font-thin mb-3 group-hover:text-white/90">Legacy Invariants: One Quiet Reason AI-Driven Automation Breaks Unexpectedly</h2>
          <p className="text-white/60 text-sm leading-relaxed mb-2">
            Hidden UI assumptions from early 2010s web frameworks.
          </p>
          <p className="text-white/40 text-xs">
            timing constraints · human-like interactions · legacy systems · invisible assumptions
          </p>
        </a>

        <a href="/ai-era/enterprise-application-models" className="border border-white/10 p-6 hover:border-white/30 transition-colors group block">
          <h2 className="text-xl font-thin mb-3 group-hover:text-white/90">Enterprise Application Models</h2>
          <p className="text-white/60 text-sm leading-relaxed mb-2">
            Where theory becomes production systems.
          </p>
          <p className="text-white/40 text-xs">
            HR · payroll · compliance · onboarding · document processing · browser operations
          </p>
        </a>

        <a href="/ai-era/failure-paths-and-correction-loops" className="border border-white/10 p-6 hover:border-white/30 transition-colors group block">
          <h2 className="text-xl font-thin mb-3 group-hover:text-white/90">Failure Paths & Correction Loops</h2>
          <p className="text-white/60 text-sm leading-relaxed mb-2">
            Deterministic recovery without drift.
          </p>
          <p className="text-white/40 text-xs">
            structured failure semantics · fallback operators · safe recovery · no blind retries
          </p>
        </a>

        <a href="/ai-era/operator-composition-pipelines-and-multi-step-graphs" className="border border-white/10 p-6 hover:border-white/30 transition-colors group block">
          <h2 className="text-xl font-thin mb-3 group-hover:text-white/90">Operator Composition (Pipelines & Multi-Step Graphs)</h2>
          <p className="text-white/60 text-sm leading-relaxed mb-2">
            Composable operators, not monolithic agents.
          </p>
          <p className="text-white/40 text-xs">
            verified pipelines · DAGs · localized failures · scalable workflows
          </p>
        </a>

        <a href="/ai-era/deterministic-planning-via-structural-constraints" className="border border-white/10 p-6 hover:border-white/30 transition-colors group block">
          <h2 className="text-xl font-thin mb-3 group-hover:text-white/90">Deterministic Planning via Structural Constraints</h2>
          <p className="text-white/60 text-sm leading-relaxed mb-2">
            Structure is the reasoning.
          </p>
          <p className="text-white/40 text-xs">
            structural constraints · action primitives · workflow graphs · automation safety
          </p>
        </a>

        <a href="/ai-era/zero-context-architecture" className="border border-white/10 p-6 hover:border-white/30 transition-colors group block">
          <h2 className="text-xl font-thin mb-3 group-hover:text-white/90">Zero&#x2011;Context Architecture</h2>
          <p className="text-white/60 text-sm leading-relaxed mb-2">
            The simplest path to reliable agents.
          </p>
          <p className="text-white/40 text-xs">
            domain isolation · no history · reproducibility · enterprise determinism
          </p>
        </a>

        <a href="/ai-era/domain-extractors-and-problem-rewriting" className="border border-white/10 p-6 hover:border-white/30 transition-colors group block">
          <h2 className="text-xl font-thin mb-3 group-hover:text-white/90">Domain Extractors & Problem Rewriting</h2>
          <p className="text-white/60 text-sm leading-relaxed mb-2">
            Converting messy inputs into solvable representations.
          </p>
          <p className="text-white/40 text-xs">
            canonical forms · entropy reduction · manifold contraction · 0-context foundations
          </p>
        </a>

        <a href="/ai-era/closed-loop-verification-architecture" className="border border-white/10 p-6 hover:border-white/30 transition-colors group block">
          <h2 className="text-xl font-thin mb-3 group-hover:text-white/90">Closed-Loop Verification Architecture</h2>
          <p className="text-white/60 text-sm leading-relaxed mb-2">
            Proposals meet guarantees.
          </p>
          <p className="text-white/40 text-xs">
            deterministic validation · error boundaries · stable transitions · enterprise reliability
          </p>
        </a>

        <a href="/ai-era/state-space-model-for-agentic-systems" className="border border-white/10 p-6 hover:border-white/30 transition-colors group block">
          <h2 className="text-xl font-thin mb-3 group-hover:text-white/90">State-Space Model for Agentic Systems</h2>
          <p className="text-white/60 text-sm leading-relaxed mb-2">
            Mathematical structure for reliable agents.
          </p>
          <p className="text-white/40 text-xs">
            discrete-time dynamics · domain projection · verification · error dynamics
          </p>
        </a>

        <a href="/ai-era/agents-as-operators-not-oracles" className="border border-white/10 p-6 hover:border-white/30 transition-colors group block">
          <h2 className="text-xl font-thin mb-3 group-hover:text-white/90">Agents as Operators, Not Oracles</h2>
          <p className="text-white/60 text-sm leading-relaxed mb-2">
            Transformation, not reasoning.
          </p>
          <p className="text-white/40 text-xs">
            control theory · deterministic transformation · verifiable systems · operator pipelines
          </p>
        </a>

        <a href="/ai-era/domain-mismatch-and-hallucination" className="border border-white/10 p-6 hover:border-white/30 transition-colors group block">
          <h2 className="text-xl font-thin mb-3 group-hover:text-white/90">Domain Mismatch & Hallucination</h2>
          <p className="text-white/60 text-sm leading-relaxed mb-2">
            Correct operators on incorrect representations.
          </p>
          <p className="text-white/40 text-xs">
            attractor misalignment · structural ambiguity · domain alignment · initial conditions
          </p>
        </a>

        <a href="/ai-era/why-context-is-not-the-solution" className="border border-white/10 p-6 hover:border-white/30 transition-colors group block">
          <h2 className="text-xl font-thin mb-3 group-hover:text-white/90">Why Context Is Not the Solution</h2>
          <p className="text-white/60 text-sm leading-relaxed mb-2">
            More tokens increase entropy, not reliability.
          </p>
          <p className="text-white/40 text-xs">
            entropy expansion · domain mismatch · hallucination · 0-context architecture
          </p>
        </a>

        <a href="/ai-era/latent-space-navigation" className="border border-white/10 p-6 hover:border-white/30 transition-colors group block">
          <h2 className="text-xl font-thin mb-3 group-hover:text-white/90">Latent Space Navigation</h2>
          <p className="text-white/60 text-sm leading-relaxed mb-2">
            State-space dynamics, not semantics.
          </p>
          <p className="text-white/40 text-xs">
            dynamical systems · attractor regions · manifold constraints · trajectory control
          </p>
        </a>

        <a href="/ai-era/llms-as-transfer-functions" className="border border-white/10 p-6 hover:border-white/30 transition-colors group block">
          <h2 className="text-xl font-thin mb-3 group-hover:text-white/90">LLMs as Transfer Functions</h2>
          <p className="text-white/60 text-sm leading-relaxed mb-2">
            Not intelligence. Operators between domains.
          </p>
          <p className="text-white/40 text-xs">
            transfer functions · domain mapping · control loops · operator perspective
          </p>
        </a>

        <a href="/ai-era/thinking-budget-optimization" className="border border-white/10 p-6 hover:border-white/30 transition-colors group block">
          <h2 className="text-xl font-thin mb-3 group-hover:text-white/90">Thinking Budget Optimization</h2>
          <p className="text-white/60 text-sm leading-relaxed mb-2">
            Allocating reasoning compute across execution phases.
          </p>
          <p className="text-white/40 text-xs">
            reasoning budget · phase allocation · planning vs execution · adaptive compute
          </p>
        </a>

        <a href="/ai-era/the-automation-primitive-domain-intelligence" className="border border-white/10 p-6 hover:border-white/30 transition-colors group block">
          <h2 className="text-xl font-thin mb-3 group-hover:text-white/90">The Automation Primitive: Domain Intelligence (To2D)</h2>
          <p className="text-white/60 text-sm leading-relaxed mb-2">
            Transfer of Two Domains. The primitive underneath everything.
          </p>
          <p className="text-white/40 text-xs">
            domain intelligence · domain resolution · To2D · structural foundation
          </p>
        </a>
      </section>
    </div>
  )
}


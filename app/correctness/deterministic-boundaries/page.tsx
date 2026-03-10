import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Deterministic Boundaries',
  description: 'Deterministic boundaries for probabilistic systems: managing the interaction between probabilistic generation and deterministic software guarantees.',
  openGraph: {
    title: 'The task is richer than the guarantees.',
    description: 'But we force models to satisfy both through the same channel.',
    type: 'article',
    images: [
      {
        url: '/images/og/deterministic-boundaries-cover.svg',
        width: 1200,
        height: 630,
        alt: 'Deterministic Boundaries for Probabilistic Systems - TO2D',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The task is richer than the guarantees.',
    description: 'But we force models to satisfy both through the same channel.',
    images: ['/images/og/deterministic-boundaries-cover.svg'],
  },
}

export default function DeterminismPage() {
  return (
    <div className="max-w-3xl space-y-14">
      <header className="space-y-4 border-b border-[#E8E8E6] pb-8">
        <p className="text-xs uppercase tracking-[0.2em] text-[#8C8C8C] font-mono">Correctness / Deterministic Boundary Stack</p>
        <h1 className="text-3xl md:text-4xl font-light tracking-tight leading-tight text-[#1A1A1A]">
          Deterministic Boundaries for Probabilistic Systems
        </h1>

        <div className="overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0 pt-4">
          <svg viewBox="0 0 520 290" className="w-full" style={{ minWidth: '360px' }}>
            <defs>
              <pattern id="det-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="0.4" fill="#E8E8E6" />
              </pattern>
            </defs>
            <rect width="520" height="290" fill="url(#det-grid)" rx="2" />

            {/* Domain input (x) — left */}
            <text x="130" y="30" textAnchor="middle" fill="#2A2A2A" fontSize="12" fontFamily="ui-monospace, monospace">
              domain input (x)
            </text>
            <text x="130" y="46" textAnchor="middle" fill="#8C8C8C" fontSize="10" fontFamily="ui-monospace, monospace">
              user request
            </text>
            <text x="130" y="62" textAnchor="middle" fill="#8C8C8C" fontSize="10" fontFamily="ui-monospace, monospace" fontStyle="italic">
              &quot;analyze sentiment&quot;
            </text>

            {/* System constraints (C) — right */}
            <text x="390" y="30" textAnchor="middle" fill="#2A2A2A" fontSize="12" fontFamily="ui-monospace, monospace">
              system constraints (C)
            </text>
            <text x="390" y="46" textAnchor="middle" fill="#8C8C8C" fontSize="10" fontFamily="ui-monospace, monospace">
              schema · rules · format · policies · ...
            </text>
            <text x="390" y="62" textAnchor="middle" fill="#8C8C8C" fontSize="10" fontFamily="ui-monospace, monospace" fontStyle="italic">
              &quot;confidence must be 0–1&quot;
            </text>

            {/* Arrow: domain input down then right into LLM top-left */}
            <line x1="130" y1="74" x2="130" y2="120" stroke="#B5B5B5" strokeWidth="1.2" />
            <line x1="130" y1="120" x2="210" y2="120" stroke="#B5B5B5" strokeWidth="1.2" />
            <polygon points="214,120 206,116 206,124" fill="#B5B5B5" />

            {/* Arrow: constraints down then left into LLM top-right */}
            <line x1="390" y1="74" x2="390" y2="120" stroke="#B5B5B5" strokeWidth="1.2" />
            <line x1="390" y1="120" x2="330" y2="120" stroke="#B5B5B5" strokeWidth="1.2" />
            <polygon points="326,120 334,116 334,124" fill="#B5B5B5" />

            {/* LLM box */}
            <rect x="216" y="100" width="108" height="44" rx="3"
              fill="#FFFFFF" stroke="#DADADA" strokeWidth="1" />
            {[0.35, 0.65].map((pct) => (
              <rect key={`ll${pct}`} x="210" y={100 + 44 * pct - 3} width="6" height="6" rx="0.8" fill="#E8E8E6" />
            ))}
            {[0.35, 0.65].map((pct) => (
              <rect key={`lr${pct}`} x="324" y={100 + 44 * pct - 3} width="6" height="6" rx="0.8" fill="#E8E8E6" />
            ))}
            <text x="270" y="127" textAnchor="middle" fill="#2A2A2A" fontSize="13" fontFamily="ui-monospace, monospace">
              LLM M
            </text>

            {/* Arrow: LLM → candidate output */}
            <line x1="270" y1="144" x2="270" y2="192" stroke="#B5B5B5" strokeWidth="1.2" />
            <polygon points="270,196 266,188 274,188" fill="#B5B5B5" />

            {/* Candidate output label */}
            <text x="270" y="222" textAnchor="middle" fill="#5A5A5A" fontSize="12" fontFamily="ui-monospace, monospace">
              candidate output (y)
            </text>
          </svg>
        </div>

        <div className="space-y-4 pt-2">
          <p className="text-sm leading-relaxed text-[#5A5A5A]">
            Language models and other AI systems are probabilistic generators. Production software systems, however, operate under deterministic guarantees.
          </p>
          <p className="text-sm leading-relaxed text-[#5A5A5A]">
            When probabilistic components are embedded inside deterministic software, these two properties interact in ways that are often poorly understood.
          </p>
          <p className="text-sm leading-relaxed text-[#5A5A5A]">
            Deterministic boundaries provide a structured mechanism for managing that interaction. They introduce an explicit layer where deterministic constraints are applied to probabilistic model outputs before those outputs enter the rest of the system.
          </p>
        </div>
      </header>

      {/* The Core Mismatch */}
      <section className="space-y-5">
        <h2 className="text-xl font-light text-[#1A1A1A]">The Core Mismatch</h2>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          A probabilistic generator can be represented as:
        </p>
        <pre className="font-mono text-sm leading-relaxed bg-[#FFFFFF] border border-[#DADADA] p-4 overflow-x-auto text-[#2A2A2A]">
{`x → M(x) → y`}
        </pre>
        <div className="font-mono text-xs text-[#5A5A5A] space-y-1 pl-1">
          <p><span className="text-[#2A2A2A]">x</span>  domain input</p>
          <p><span className="text-[#2A2A2A]">M</span>  probabilistic model</p>
          <p><span className="text-[#2A2A2A]">y</span>  candidate output</p>
        </div>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          In many demonstrations and simple integrations, <code className="font-mono text-xs bg-[#F2F2F0] border border-[#E8E8E6] px-1.5 py-0.5 text-[#2A2A2A]">y</code> is treated as immediately usable by the application. In real software systems this assumption breaks down.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Outputs may be malformed, structurally invalid, logically inconsistent, incomplete or truncated, or incompatible with downstream systems. These are not exceptional conditions. They are normal behavior for probabilistic generators.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          The deeper issue is that software systems also impose deterministic constraints on what outputs they can accept.
        </p>
      </section>

      {/* Deterministic Constraints */}
      <section className="space-y-5">
        <h2 className="text-xl font-light text-[#1A1A1A]">Deterministic Constraints</h2>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Every real application has requirements that must always hold:
        </p>
        <ul className="space-y-1.5 text-sm text-[#5A5A5A] ml-5 list-disc">
          <li>schema requirements</li>
          <li>validation rules</li>
          <li>domain consistency checks</li>
          <li>workflow requirements</li>
          <li>integration constraints</li>
          <li>safety and policy rules</li>
        </ul>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          These requirements are deterministic guarantees of the surrounding software system. When a probabilistic model is embedded inside such a system, its outputs are shaped by two independent forces.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          The model is not generating freely. It is generating inside the constraints imposed by the system. In other words:
        </p>
        <pre className="font-mono text-sm leading-relaxed bg-[#FFFFFF] border border-[#DADADA] p-4 overflow-x-auto text-[#2A2A2A]">
{`y = M(x, C)`}
        </pre>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Where <code className="font-mono text-xs bg-[#F2F2F0] border border-[#E8E8E6] px-1.5 py-0.5 text-[#2A2A2A]">C</code> represents deterministic constraints required by the application.
        </p>
      </section>

      {/* Constraint Accumulation */}
      <section className="space-y-5">
        <h2 className="text-xl font-light text-[#1A1A1A]">Constraint Accumulation</h2>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          As systems evolve, additional guarantees are added: structured output schemas, domain invariants, integration requirements, safety policies, workflow constraints.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Each new guarantee introduces additional constraints on acceptable outputs. The system gradually shifts from:
        </p>
        <pre className="font-mono text-sm leading-relaxed bg-[#FFFFFF] border border-[#DADADA] p-4 overflow-x-auto text-[#2A2A2A]">
{`y = M(x)  →  y = M(x, C₁, C₂, C₃, ...)`}
        </pre>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          As constraint pressure increases, the admissible output space becomes smaller. This is why systems built on probabilistic components often become brittle as they grow in capability.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          The underlying issue is not necessarily model quality, but the interaction between probabilistic generation and accumulated deterministic constraints.
        </p>
      </section>

      {/* Deterministic Boundaries */}
      <section className="space-y-5">
        <h2 className="text-xl font-light text-[#1A1A1A]">Deterministic Boundaries</h2>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Deterministic boundaries provide an explicit mechanism for managing deterministic constraints. Instead of allowing constraints to appear implicitly across prompts, parsing logic, and application code, they are centralized at a system boundary.
        </p>
        <pre className="font-mono text-sm leading-relaxed bg-[#FFFFFF] border border-[#DADADA] p-4 overflow-x-auto text-[#2A2A2A]">
{`x → M(x) → y → B(y, C) → z`}
        </pre>
        <div className="font-mono text-xs text-[#5A5A5A] space-y-1 pl-1">
          <p><span className="text-[#2A2A2A]">x</span>  domain input</p>
          <p><span className="text-[#2A2A2A]">M</span>  probabilistic generator</p>
          <p><span className="text-[#2A2A2A]">y</span>  candidate output</p>
          <p><span className="text-[#2A2A2A]">B</span>  deterministic boundary</p>
          <p><span className="text-[#2A2A2A]">C</span>  deterministic constraints</p>
          <p><span className="text-[#2A2A2A]">z</span>  accepted system output</p>
        </div>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          The model proposes candidate outputs. The boundary determines whether the system accepts them. This separation introduces two distinct responsibilities:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#DADADA]">
                <th className="py-2 pr-6 text-sm font-medium text-[#1A1A1A]">Responsibility</th>
                <th className="py-2 text-sm font-medium text-[#1A1A1A]">Mechanism</th>
              </tr>
            </thead>
            <tbody className="text-sm text-[#5A5A5A]">
              <tr className="border-b border-[#E8E8E6]">
                <td className="py-2 pr-6">generation</td>
                <td className="py-2">probabilistic models</td>
              </tr>
              <tr>
                <td className="py-2 pr-6">acceptance</td>
                <td className="py-2">deterministic boundaries</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          The model generates possibilities. The boundary applies deterministic constraints.
        </p>
      </section>

      {/* Boundary Responsibilities */}
      <section className="space-y-10">
        <h2 className="text-xl font-light text-[#1A1A1A]">Boundary Responsibilities</h2>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          A deterministic boundary performs several core functions.
        </p>

        <div className="space-y-4 border-l-2 border-[#E8E8E6] pl-6">
          <h3 className="text-base font-medium text-[#1A1A1A]">Parsing</h3>
          <p className="text-sm leading-relaxed text-[#5A5A5A]">
            Model outputs often contain formatting artifacts or partial structures: invalid JSON, mixed text and structure, truncated responses. Parsing normalizes raw output into a representation that can be validated.
          </p>
        </div>

        <div className="space-y-4 border-l-2 border-[#E8E8E6] pl-6">
          <h3 className="text-base font-medium text-[#1A1A1A]">Verification</h3>
          <p className="text-sm leading-relaxed text-[#5A5A5A]">
            Verification ensures that outputs satisfy system guarantees. Two levels of checks are typically required.
          </p>
          <div className="space-y-3">
            <p className="text-xs font-mono uppercase tracking-wider text-[#8C8C8C]">Structural validation</p>
            <pre className="font-mono text-sm leading-relaxed bg-[#FFFFFF] border border-[#DADADA] p-4 overflow-x-auto text-[#2A2A2A]">
{`{
  sentiment: "positive" | "negative" | "neutral",
  confidence: number
}`}
            </pre>
          </div>
          <div className="space-y-3">
            <p className="text-xs font-mono uppercase tracking-wider text-[#8C8C8C]">Domain constraints</p>
            <pre className="font-mono text-sm leading-relaxed bg-[#FFFFFF] border border-[#DADADA] p-4 overflow-x-auto text-[#2A2A2A]">
{`confidence > 0.5
subtotal + tax ≈ total`}
            </pre>
          </div>
        </div>

        <div className="space-y-4 border-l-2 border-[#E8E8E6] pl-6">
          <h3 className="text-base font-medium text-[#1A1A1A]">Failure Classification</h3>
          <p className="text-sm leading-relaxed text-[#5A5A5A]">
            When verification fails, the boundary classifies the failure mode. Classification enables targeted recovery strategies.
          </p>
          <pre className="font-mono text-sm leading-relaxed bg-[#FFFFFF] border border-[#DADADA] p-4 overflow-x-auto text-[#2A2A2A]">
{`EMPTY_RESPONSE
REFUSAL
NO_JSON
TRUNCATED
PARSE_ERROR
VALIDATION_ERROR
RUN_ERROR`}
          </pre>
        </div>

        <div className="space-y-4 border-l-2 border-[#E8E8E6] pl-6">
          <h3 className="text-base font-medium text-[#1A1A1A]">Repair and Retry</h3>
          <p className="text-sm leading-relaxed text-[#5A5A5A]">
            Instead of failing immediately, the boundary can attempt controlled recovery.
          </p>
          <pre className="font-mono text-sm leading-relaxed bg-[#FFFFFF] border border-[#DADADA] p-4 overflow-x-auto text-[#2A2A2A]">
{`generate → clean → verify → classify → repair → retry`}
          </pre>
          <p className="text-sm leading-relaxed text-[#5A5A5A]">
            This continues until a valid output is produced or the retry policy is exhausted.
          </p>
        </div>
      </section>

      {/* Determinism vs Stability */}
      <section className="space-y-5">
        <h2 className="text-xl font-light text-[#1A1A1A]">Determinism vs Stability</h2>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Deterministic boundaries do not make the model deterministic. Instead they make the system stable. A stable system guarantees that application logic only receives outputs that satisfy explicit constraints.
        </p>
        <pre className="font-mono text-sm leading-relaxed bg-[#FFFFFF] border border-[#DADADA] p-4 overflow-x-auto text-[#2A2A2A]">
{`domain input
↓
probabilistic generation
↓
deterministic boundary
↓
deterministic software system`}
        </pre>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          The uncertainty of the model remains, but its effects are contained.
        </p>
      </section>

      {/* Observability */}
      <section className="space-y-5">
        <h2 className="text-xl font-light text-[#1A1A1A]">Observability of Boundary Behavior</h2>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Probabilistic systems rarely fail in a single step. Instead, execution evolves across multiple attempts:
        </p>
        <pre className="font-mono text-sm leading-relaxed bg-[#FFFFFF] border border-[#DADADA] p-4 overflow-x-auto text-[#2A2A2A]">
{`attempt 1 → verification failed
attempt 2 → repair generated
attempt 3 → verification passed`}
        </pre>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Traditional logs make this behavior difficult to understand. Deterministic boundaries can represent execution as structured event streams.
        </p>
      </section>

      {/* Event Streams */}
      <section className="space-y-5">
        <h2 className="text-xl font-light text-[#1A1A1A]">Boundary Event Streams</h2>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Each transition in boundary execution produces a structured event.
        </p>
        <pre className="font-mono text-sm leading-relaxed bg-[#FFFFFF] border border-[#DADADA] p-4 overflow-x-auto text-[#2A2A2A]">
{`{
  system: "llm-contract",
  runId: "run_42",
  ts: "2026-03-10T12:00:00Z",
  type: "verification.failed",
  attempt: 1,
  data: {...}
}`}
        </pre>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Common events include:
        </p>
        <pre className="font-mono text-sm leading-relaxed bg-[#FFFFFF] border border-[#DADADA] p-4 overflow-x-auto text-[#2A2A2A]">
{`run.started
attempt.started
output.raw_observed
output.cleaned
verification.failed
repair.generated
retry.scheduled
verification.passed
run.succeeded
run.failed`}
        </pre>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          These events form the canonical trace of boundary execution.
        </p>
      </section>

      {/* Inspecting Execution */}
      <section className="space-y-5">
        <h2 className="text-xl font-light text-[#1A1A1A]">Inspecting Boundary Execution</h2>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Once boundary behavior is represented as structured events, execution can be inspected and visualized. Inspection tools can expose attempt timelines, failure causes, repair strategies, and terminal outcomes.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          This makes probabilistic systems understandable when embedded in deterministic software.
        </p>
      </section>

      {/* Reference Implementations */}
      <section className="space-y-8 border-t border-[#E8E8E6] pt-10">
        <h2 className="text-xl font-light text-[#1A1A1A]">Reference Implementations</h2>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          The deterministic boundary pattern can be implemented through reusable system components.
        </p>

        <div className="space-y-6">
          <div className="border border-[#DADADA] p-6 space-y-3">
            <h3 className="text-base font-medium text-[#1A1A1A] font-mono">
              <a href="https://github.com/operatorstack/llm-contract" target="_blank" rel="noopener noreferrer" className="underline decoration-[#DADADA] underline-offset-4 hover:decoration-[#B5B5B5] transition-colors">llm-contract</a>
            </h3>
            <p className="text-sm text-[#5A5A5A]">
              Runtime for enforcing deterministic boundaries around structured LLM outputs. Handles output cleaning, schema verification, domain constraint checks, failure classification, and repair/retry loops.
            </p>
          </div>

          <div className="border border-[#DADADA] p-6 space-y-3">
            <h3 className="text-base font-medium text-[#1A1A1A] font-mono">
              <a href="https://github.com/operatorstack/boundary-trace" target="_blank" rel="noopener noreferrer" className="underline decoration-[#DADADA] underline-offset-4 hover:decoration-[#B5B5B5] transition-colors">boundary-trace</a>
            </h3>
            <p className="text-sm text-[#5A5A5A]">
              Structured event system for recording deterministic boundary execution. Captures transitions such as verification failures, repair generation, retry scheduling, and terminal outcomes. These events form the canonical execution trace.
            </p>
          </div>

          <div className="border border-[#DADADA] p-6 space-y-3">
            <h3 className="text-base font-medium text-[#1A1A1A] font-mono">
              <a href="https://github.com/operatorstack/boundary-inspector" target="_blank" rel="noopener noreferrer" className="underline decoration-[#DADADA] underline-offset-4 hover:decoration-[#B5B5B5] transition-colors">boundary-inspector</a>
            </h3>
            <p className="text-sm text-[#5A5A5A]">
              Interactive UI for exploring boundary execution traces. Provides run timelines, attempt inspection, failure analysis, and event replay. This makes probabilistic execution observable and debuggable.
            </p>
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="space-y-5 border-t border-[#E8E8E6] pt-10">
        <h2 className="text-xl font-light text-[#1A1A1A]">Summary</h2>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Probabilistic models generate candidate outputs. Software systems require deterministic guarantees. Deterministic boundaries provide a structured mechanism for applying deterministic constraints to probabilistic outputs before they enter the system.
        </p>
        <pre className="font-mono text-sm leading-relaxed bg-[#FFFFFF] border border-[#DADADA] p-4 overflow-x-auto text-[#2A2A2A]">
{`input
↓
probabilistic model
↓
deterministic boundary
↓
deterministic software`}
        </pre>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          By separating generation from acceptance, reliable software systems can be built on top of probabilistic components.
        </p>
      </section>

      {/* Navigation */}
      <section className="border-t border-[#E8E8E6] pt-8 flex flex-wrap gap-3">
        <a
          href="/correctness/structured-output-boundaries"
          className="inline-block border border-[#DADADA] px-4 py-2 text-sm text-[#1A1A1A] hover:bg-[#F2F2F0] transition-colors"
        >
          Next: Structured Output Contracts →
        </a>
        <a
          href="/correctness"
          className="inline-block border border-[#DADADA] px-4 py-2 text-sm text-[#1A1A1A] hover:bg-[#F2F2F0] transition-colors"
        >
          ← Back: Reliability Boundaries
        </a>
      </section>
    </div>
  )
}

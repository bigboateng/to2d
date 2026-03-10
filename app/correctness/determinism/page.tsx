import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Deterministic Boundaries',
  description: 'Deterministic boundaries for probabilistic systems: acceptance logic, failure classes, and measurable engineering loops.',
}

export default function DeterminismPage() {
  return (
    <div className="-mx-6 md:-mx-10 mt-[-2.5rem] md:mt-[-3.5rem]">
      <section className="correctness-shell px-6 py-12 md:px-10 md:py-16">
        <article className="correctness-paper correctness-type max-w-4xl mx-auto p-7 md:p-12 space-y-10">
          <header className="space-y-4 border-b border-[#5b4126]/20 pb-8">
            <p className="text-xs uppercase tracking-[0.2em] text-[#5b4126]/70">Correctness / Deterministic Boundary Stack</p>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight text-[#1f1912]">
              Deterministic Boundaries for Probabilistic Systems
            </h1>
            <p className="text-base md:text-lg leading-relaxed text-[#2f261d]">
              LLMs are probabilistic generators. Production software needs deterministic guarantees. A boundary layer closes that mismatch.
            </p>
          </header>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#1f1912]">The Mismatch</h2>
            <p className="text-[17px] leading-relaxed text-[#2a231c]">
              A probabilistic component can be represented as:
            </p>
            <pre className="font-mono text-[13px] leading-relaxed whitespace-pre-wrap bg-white/40 border border-[#5b4126]/15 p-3 overflow-x-auto">
{`x -> M(x) -> y`}
            </pre>
            <ul className="space-y-2 text-[17px] text-[#2a231c] list-disc ml-6">
              <li><code className="font-mono text-[14px] bg-[#f5ead6] border border-[#5b4126]/15 px-1.5 py-0.5">x</code> is system input</li>
              <li><code className="font-mono text-[14px] bg-[#f5ead6] border border-[#5b4126]/15 px-1.5 py-0.5">M</code> is a probabilistic generator</li>
              <li><code className="font-mono text-[14px] bg-[#f5ead6] border border-[#5b4126]/15 px-1.5 py-0.5">y</code> is a candidate output</li>
            </ul>
            <p className="text-[17px] leading-relaxed text-[#2a231c]">
              Traditional software often treats <code className="font-mono text-[14px] bg-[#f5ead6] border border-[#5b4126]/15 px-1.5 py-0.5">y</code> as immediately usable. That assumption breaks under probabilistic generation.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#1f1912]">The Boundary</h2>
            <pre className="font-mono text-[13px] leading-relaxed whitespace-pre-wrap bg-white/40 border border-[#5b4126]/15 p-3 overflow-x-auto">
{`x -> M(x) -> y -> B(y)`}
            </pre>
            <p className="text-[17px] leading-relaxed text-[#2a231c]">
              <code className="font-mono text-[14px] bg-[#f5ead6] border border-[#5b4126]/15 px-1.5 py-0.5">B(y)</code> enforces admissibility. It decides what is acceptable, why a result failed, and whether repair or retry should run.
            </p>
            <p className="text-[17px] leading-relaxed text-[#2a231c]">
              This separates generation from acceptance.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#1f1912]">Why Prompt Engineering Alone Does Not Scale</h2>
            <p className="text-[17px] leading-relaxed text-[#2a231c]">
              Prompting influences the generator. It does not define acceptance conditions at the system boundary.
            </p>
            <ul className="space-y-2 text-[17px] text-[#2a231c] list-disc ml-6">
              <li>fragile behavior</li>
              <li>hidden failure modes</li>
              <li>hard debugging loops</li>
              <li>unclear guarantees</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#1f1912]">Deterministic Boundaries Change the Engineering Surface</h2>
            <p className="text-[17px] leading-relaxed text-[#2a231c]">
              The work shifts from globally steering model behavior to locally defining acceptance:
            </p>
            <ul className="space-y-2 text-[17px] text-[#2a231c] list-disc ml-6">
              <li>JSON structure</li>
              <li>schema validation</li>
              <li>semantic invariants</li>
              <li>retry policies</li>
              <li>repair strategies</li>
            </ul>
            <p className="text-[17px] leading-relaxed text-[#2a231c]">
              The question changes from <span className="italic">How do we make the model behave?</span> to <span className="italic">What counts as acceptable output?</span>
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#1f1912]">Boundaries Partition Failure</h2>
            <p className="text-[17px] leading-relaxed text-[#2a231c]">
              Without a boundary, failures look mixed and ambiguous. With a boundary, they become explicit classes:
            </p>
            <pre className="font-mono text-[13px] leading-relaxed whitespace-pre-wrap bg-white/40 border border-[#5b4126]/15 p-3 overflow-x-auto">
{`PARSE_ERROR
VALIDATION_ERROR
INVARIANT_ERROR
REFUSAL
TRUNCATION`}
            </pre>
            <p className="text-[17px] leading-relaxed text-[#2a231c]">
              That makes behavior inspectable and measurable.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#1f1912]">The Engineering Loop</h2>
            <ul className="space-y-2 text-[17px] text-[#2a231c] list-disc ml-6">
              <li>Measure dominant failure classes</li>
              <li>Track how model changes affect invariants</li>
              <li>Test whether repair and retry improve acceptance rate</li>
            </ul>
            <p className="text-[17px] leading-relaxed text-[#2a231c]">
              This is system improvement, not prompt churn.
            </p>
          </section>

          <section className="space-y-4 border-t border-[#5b4126]/20 pt-8">
            <h2 className="text-2xl font-semibold text-[#1f1912]">Deterministic Boundary Stack</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-[#5b4126]/20">
                    <th className="py-2 pr-4 text-sm font-semibold text-[#1f1912]">Layer</th>
                    <th className="py-2 text-sm font-semibold text-[#1f1912]">Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#5b4126]/12">
                    <td className="py-2 pr-4 text-[15px] text-[#2a231c]">Contracts</td>
                    <td className="py-2 text-[15px] text-[#2a231c]">enforce structured acceptance</td>
                  </tr>
                  <tr className="border-b border-[#5b4126]/12">
                    <td className="py-2 pr-4 text-[15px] text-[#2a231c]">Tracing</td>
                    <td className="py-2 text-[15px] text-[#2a231c]">record boundary behavior over attempts</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 text-[15px] text-[#2a231c]">Inspection</td>
                    <td className="py-2 text-[15px] text-[#2a231c]">visualize execution as boundary devtools</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="border-t border-[#5b4126]/20 pt-8 flex flex-wrap gap-3">
            <a
              href="/correctness/structured-output-boundaries"
              className="inline-block border border-[#5b4126]/30 px-4 py-2 text-[15px] text-[#2a231c] hover:bg-[#f8f0df] transition-colors"
            >
              Next: Structured Output Contracts -&gt;
            </a>
            <a
              href="/correctness/reliability-boundary-explorer"
              className="inline-block border border-[#5b4126]/30 px-4 py-2 text-[15px] text-[#2a231c] hover:bg-[#f8f0df] transition-colors"
            >
              &larr; Back: Using Reliability Boundaries
            </a>
          </section>
        </article>
      </section>
    </div>
  )
}

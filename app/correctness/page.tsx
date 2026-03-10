import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Correctness',
  description: 'Reliability boundaries in browser automation: defining interfaces, diagnosing failures, and improving systems.',
  openGraph: {
    title: 'Correctness',
    description:
      'Reliability boundaries in browser automation: defining interfaces, diagnosing failures, and improving systems.',
    type: 'article',
    images: [
      {
        url: '/images/og/correctness-cover.png?v=2',
        width: 1200,
        height: 630,
        alt: 'Correctness - TO2D',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Correctness',
    description:
      'Reliability boundaries in browser automation: defining interfaces, diagnosing failures, and improving systems.',
    images: ['/images/og/correctness-cover.png?v=2'],
  },
}

export default function CorrectnessPage() {
  return (
    <div className="max-w-3xl space-y-12">
      <header className="space-y-6 border-b border-[#E8E8E6] pb-10">
        <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#8C8C8C]">Correctness</p>
        <h1 className="text-3xl md:text-4xl font-light tracking-tight text-[#1A1A1A]">
          Reliability Boundaries in Browser Automation
        </h1>
        <p className="text-sm md:text-base leading-relaxed text-[#5A5A5A]">
          Over the last few years I have worked across multiple layers of browser automation: building browser agents,
          infrastructure that runs them, authentication and session reuse, proxy behavior, and operational rules for
          production systems.
        </p>
      </header>

      <section className="space-y-6 text-sm leading-relaxed text-[#5A5A5A]">
        <p>
          One thing became clear the more end-to-end systems I built: many automation failures are not purely model
          problems or tooling problems. They are boundary problems.
        </p>
        <p>
          Automation systems operate across a chain that starts with the person building the system and ends with the
          website it interacts with.
        </p>
        <pre className="bg-[#FFFFFF] border border-[#DADADA] p-4 overflow-x-auto text-sm font-mono text-[#2A2A2A]">
{`Builder → Automation → Infrastructure → Environment → Website`}
        </pre>
        <p>
          Somewhere along that chain there is a point where the system stops being able to explain what happened when
          something goes wrong. That point is the reliability boundary.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-light text-[#1A1A1A]">Inside and Outside the Boundary</h2>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Inside the boundary, the system can answer: what failed, why it failed, and what can be done next. Outside
          the boundary, failures become opaque. The automation may still run, but when something changes, operators are
          left guessing.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-light text-[#1A1A1A]">Boundaries and Correctness</h2>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Correctness is not only producing the right output. A correct automation system must also understand when
          something has gone wrong and what to do next.
        </p>
        <ul className="space-y-2 text-sm text-[#5A5A5A] list-disc ml-6">
          <li>attribute failures to a specific task input or assumption</li>
          <li>identify whether the issue is inside or outside the system responsibility</li>
          <li>describe the issue clearly to the next component or person in the chain</li>
          <li>provide a path to recover when possible</li>
          <li>record new failure modes so they become diagnosable later</li>
        </ul>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          When these capabilities exist, errors become useful signals. When they do not, errors become dead ends.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-light text-[#1A1A1A]">Learning From Boundaries</h2>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          The more end-to-end systems I built myself, the fewer unsolvable automation problems I encountered. Not
          because problems disappeared, but because I controlled what the system was responsible for.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Instead of inheriting unclear boundaries from tools or infrastructure, I could decide what assumptions should
          be made, what should be verified, and what should happen when assumptions fail.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Once the boundary is well-defined, errors stop being just failures. They become signals about where the
          system needs more structure.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-light text-[#1A1A1A]">Connection to ZCA</h2>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Much of the later thinking behind Zero-Context Architecture came from this boundary-first view. At its best,
          ZCA creates tight boundaries around the exact task being solved so irrelevant state and hidden assumptions do
          not leak into execution.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Choosing the right boundary is not trivial. It requires deep domain understanding. But when chosen well,
          many automation problems either disappear or become much easier to diagnose.
        </p>
      </section>

      <section className="space-y-5 border-t border-[#E8E8E6] pt-10">
        <h2 className="text-xl font-light text-[#1A1A1A]">Question for the Pages That Follow</h2>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Where does the system reliability boundary actually lie, and how does that boundary affect the people
          building and operating automation?
        </p>
      </section>

      <section className="border-t border-[#E8E8E6] pt-10 space-y-6">
        <p className="text-[10px] font-mono tracking-[0.2em] text-[#8C8C8C] uppercase">Deterministic Boundary Stack</p>
        <ol className="space-y-2 text-sm text-[#5A5A5A]">
          <li>
            <a href="/correctness/deterministic-boundaries" className="underline decoration-[#DADADA] underline-offset-4 hover:decoration-[#B5B5B5] transition-colors">
              1. Deterministic Boundaries
            </a>
          </li>
          <li>
            <a href="/correctness/structured-output-boundaries" className="underline decoration-[#DADADA] underline-offset-4 hover:decoration-[#B5B5B5] transition-colors">
              2. Structured Output Contracts
            </a>
          </li>
          <li>
            <a href="/correctness/boundary-tracing" className="underline decoration-[#DADADA] underline-offset-4 hover:decoration-[#B5B5B5] transition-colors">
              3. Boundary Tracing
            </a>
          </li>
          <li>
            <a href="/correctness/boundary-inspection" className="underline decoration-[#DADADA] underline-offset-4 hover:decoration-[#B5B5B5] transition-colors">
              4. Boundary Inspection
            </a>
          </li>
        </ol>
        <div className="pt-2">
          <a
            href="/correctness/deterministic-boundaries"
            className="inline-block border border-[#DADADA] px-4 py-2 text-sm text-[#1A1A1A] hover:bg-[#F2F2F0] transition-colors"
          >
            Next: Deterministic Boundaries →
          </a>
        </div>
      </section>
    </div>
  )
}

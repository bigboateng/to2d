import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Correctness',
  description: 'Reliability boundaries in browser automation: defining interfaces, diagnosing failures, and improving systems.',
  openGraph: {
    title: 'Correctness',
    description:
      'Reliability boundaries in browser automation: defining interfaces, diagnosing failures, and improving systems.',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Correctness',
    description:
      'Reliability boundaries in browser automation: defining interfaces, diagnosing failures, and improving systems.',
  },
}

export default function CorrectnessPage() {
  return (
    <div className="-mx-6 md:-mx-10 mt-[-2.5rem] md:mt-[-3.5rem]">
      <section className="correctness-shell px-6 py-12 md:px-10 md:py-16">
        <article className="correctness-paper correctness-type max-w-4xl mx-auto p-7 md:p-12 space-y-10">
          <header className="space-y-5 border-b border-[#5b4126]/20 pb-8">
            <p className="text-xs uppercase tracking-[0.2em] text-[#5b4126]/70">Correctness</p>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight text-[#1f1912]">
              Reliability Boundaries in Browser Automation
            </h1>
            <p className="text-base md:text-lg leading-relaxed text-[#2f261d]">
              Over the last few years I have worked across multiple layers of browser automation: building browser agents,
              infrastructure that runs them, authentication and session reuse, proxy behavior, and operational rules for
              production systems.
            </p>
          </header>

          <section className="space-y-5 text-[17px] leading-relaxed text-[#2a231c]">
            <p>
              One thing became clear the more end-to-end systems I built: many automation failures are not purely model
              problems or tooling problems. They are boundary problems.
            </p>
            <p>
              Automation systems operate across a chain that starts with the person building the system and ends with the
              website it interacts with.
            </p>
            <div className="correctness-note p-4 md:p-5">
              <p className="correctness-inkline text-lg md:text-xl">
                Builder -&gt; Automation -&gt; Infrastructure -&gt; Environment -&gt; Website
              </p>
            </div>
            <p>
              Somewhere along that chain there is a point where the system stops being able to explain what happened when
              something goes wrong. That point is the reliability boundary.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#1f1912]">Inside and Outside the Boundary</h2>
            <p className="text-[17px] leading-relaxed text-[#2a231c]">
              Inside the boundary, the system can answer: what failed, why it failed, and what can be done next. Outside
              the boundary, failures become opaque. The automation may still run, but when something changes, operators are
              left guessing.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#1f1912]">Boundaries and Correctness</h2>
            <p className="text-[17px] leading-relaxed text-[#2a231c]">
              Correctness is not only producing the right output. A correct automation system must also understand when
              something has gone wrong and what to do next.
            </p>
            <ul className="space-y-2 text-[17px] text-[#2a231c] list-disc ml-6">
              <li>attribute failures to a specific task input or assumption</li>
              <li>identify whether the issue is inside or outside the system responsibility</li>
              <li>describe the issue clearly to the next component or person in the chain</li>
              <li>provide a path to recover when possible</li>
              <li>record new failure modes so they become diagnosable later</li>
            </ul>
            <p className="text-[17px] leading-relaxed text-[#2a231c]">
              When these capabilities exist, errors become useful signals. When they do not, errors become dead ends.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#1f1912]">Learning From Boundaries</h2>
            <p className="text-[17px] leading-relaxed text-[#2a231c]">
              The more end-to-end systems I built myself, the fewer unsolvable automation problems I encountered. Not
              because problems disappeared, but because I controlled what the system was responsible for.
            </p>
            <p className="text-[17px] leading-relaxed text-[#2a231c]">
              Instead of inheriting unclear boundaries from tools or infrastructure, I could decide what assumptions should
              be made, what should be verified, and what should happen when assumptions fail.
            </p>
            <p className="text-[17px] leading-relaxed text-[#2a231c]">
              Once the boundary is well-defined, errors stop being just failures. They become signals about where the
              system needs more structure.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#1f1912]">Connection to ZCA</h2>
            <p className="text-[17px] leading-relaxed text-[#2a231c]">
              Much of the later thinking behind Zero-Context Architecture came from this boundary-first view. At its best,
              ZCA creates tight boundaries around the exact task being solved so irrelevant state and hidden assumptions do
              not leak into execution.
            </p>
            <p className="text-[17px] leading-relaxed text-[#2a231c]">
              Choosing the right boundary is not trivial. It requires deep domain understanding. But when chosen well,
              many automation problems either disappear or become much easier to diagnose.
            </p>
          </section>

          <section className="space-y-4 border-t border-[#5b4126]/20 pt-8">
            <h2 className="text-2xl font-semibold text-[#1f1912]">Question for the Pages That Follow</h2>
            <p className="text-[17px] leading-relaxed text-[#2a231c]">
              Where does the system reliability boundary actually lie, and how does that boundary affect the people
              building and operating automation?
            </p>
          </section>

          <section className="border-t border-[#5b4126]/20 pt-8 space-y-5">
            <p className="text-sm tracking-wide text-[#5b4126]/75 uppercase">Sequence</p>
            <ol className="space-y-2 text-[17px] text-[#2a231c]">
              <li className="font-semibold">1. Correctness</li>
              <li>
                <a href="/correctness/where-reliability-boundaries-appear" className="underline decoration-[#5b4126]/35 underline-offset-4 hover:decoration-[#5b4126]">
                  2. Where Reliability Boundaries Appear
                </a>
              </li>
              <li>
                <a href="/correctness/reliability-boundaries-in-practice" className="underline decoration-[#5b4126]/35 underline-offset-4 hover:decoration-[#5b4126]">
                  3. Reliability Boundaries in Practice
                </a>
              </li>
              <li>
                <a href="/correctness/reliability-boundary-explorer" className="underline decoration-[#5b4126]/35 underline-offset-4 hover:decoration-[#5b4126]">
                  4. Reliability Boundary Explorer
                </a>
              </li>
            </ol>
            <div className="pt-2">
              <a
                href="/correctness/where-reliability-boundaries-appear"
                className="inline-block border border-[#5b4126]/30 px-4 py-2 text-[15px] text-[#2a231c] hover:bg-[#f8f0df] transition-colors"
              >
                Next: Where Reliability Boundaries Appear ->
              </a>
            </div>
          </section>
        </article>
      </section>
    </div>
  )
}

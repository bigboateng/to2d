import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Where Reliability Boundaries Appear',
  description: 'Where reliability boundaries appear in automation systems and how parameterized interfaces make failures diagnosable.',
  openGraph: {
    title: 'Where Reliability Boundaries Appear',
    description:
      'Where reliability boundaries appear in automation systems and how parameterized interfaces make failures diagnosable.',
    type: 'article',
    images: [
      {
        url: '/images/og/correctness-cover.png?v=2',
        width: 1200,
        height: 630,
        alt: 'Where Reliability Boundaries Appear - TO2D',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Where Reliability Boundaries Appear',
    description:
      'Where reliability boundaries appear in automation systems and how parameterized interfaces make failures diagnosable.',
    images: ['/images/og/correctness-cover.png?v=2'],
  },
}

export default function WhereReliabilityBoundariesAppearPage() {
  return (
    <div className="max-w-3xl space-y-12">
      <header className="space-y-4 border-b border-[#2f261d]/10 pb-8">
        <p className="text-xs uppercase tracking-[0.2em] text-[#4b4339]/50 font-mono">Correctness / Page 2</p>
        <h1 className="text-3xl md:text-4xl font-light tracking-tight leading-tight text-[#1f1912]">
          Where Reliability Boundaries Appear
        </h1>
        <p className="text-sm leading-relaxed text-[#2f261d]/78">
          Automation systems operate across multiple layers. Each layer introduces assumptions about how the system behaves.
        </p>
        <p className="text-base leading-relaxed text-[#2f261d]/78">
          Reliability breaks when the real cause of failure sits outside the boundary of the system that is trying to handle it.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-xl font-light text-[#1f1912]">What a Reliability Boundary Is</h2>
        <p className="text-sm leading-relaxed text-[#2f261d]/80">
          In practice, a reliability boundary usually appears as an interface defined by parameters and constraints.
        </p>
        <p className="text-sm leading-relaxed text-[#2f261d]/80">
          At that interface, the system declares what it assumes to be true and what must be validated before execution continues.
        </p>
        <p className="text-sm leading-relaxed text-[#2f261d]/80">
          Typical boundary parameters include schema constraints on model output, expected DOM structure for extraction,
          authentication state for session reuse, and environment properties such as IP location or device identity.
        </p>
        <p className="text-sm leading-relaxed text-[#2f261d]/80">
          When these parameters are explicit and enforced, failures become diagnosable. When they are implicit or
          undefined, failures leak through and appear random.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-light text-[#1f1912]">Model Output Boundary</h2>
        <p className="text-sm leading-relaxed text-[#2f261d]/80">
          Many automation systems rely on language models to generate structured actions or data.
        </p>
        <pre className="bg-[#2f261d]/[0.025] border border-[#2f261d]/12 p-4 text-sm text-[#2f261d]/78 overflow-x-auto">
{`{
  "action": "click",
  "target": "login_button"
}`}
        </pre>
        <div className="correctness-note p-4 md:p-5">
          <p className="correctness-inkline text-sm mb-3">Sketch: boundary location and boundary movement</p>
          <svg viewBox="0 0 900 360" className="w-full h-auto" role="img" aria-label="Default and robust reliability boundary sketch">
            <text x="30" y="32" fill="rgba(47,38,29,0.6)" fontSize="15" fontFamily="ui-monospace, monospace">Default system (today)</text>

            <rect x="30" y="56" width="190" height="74" rx="8" fill="none" stroke="rgba(47,38,29,0.5)" strokeWidth="2.1" strokeDasharray="8 5" />
            <text x="125" y="86" textAnchor="middle" fill="#1f1912" fontSize="17" fontFamily="ui-monospace, monospace">LLM</text>
            <text x="125" y="108" textAnchor="middle" fill="rgba(47,38,29,0.6)" fontSize="13" fontFamily="ui-monospace, monospace">(probabilistic generator)</text>

            <line x1="220" y1="92" x2="308" y2="92" stroke="rgba(47,38,29,0.5)" strokeWidth="2.1" />
            <polygon points="308,92 294,85 294,99" fill="rgba(47,38,29,0.6)" />

            <rect x="318" y="62" width="130" height="60" rx="7" fill="none" stroke="rgba(47,38,29,0.5)" strokeWidth="1.9" />
            <text x="383" y="98" textAnchor="middle" fill="#1f1912" fontSize="14" fontFamily="ui-monospace, monospace">Prompt</text>

            <line x1="448" y1="92" x2="565" y2="92" stroke="rgba(47,38,29,0.5)" strokeWidth="2.1" />
            <polygon points="565,92 551,85 551,99" fill="rgba(47,38,29,0.6)" />
            <text x="585" y="87" fill="#1f1912" fontSize="13" fontFamily="ui-monospace, monospace">Output</text>
            <text x="585" y="106" fill="rgba(47,38,29,0.6)" fontSize="12" fontFamily="ui-monospace, monospace">failures can leak through</text>

            <line x1="30" y1="160" x2="860" y2="160" stroke="rgba(47,38,29,0.5)" strokeWidth="1.3" strokeDasharray="6 6" />

            <text x="30" y="194" fill="rgba(47,38,29,0.6)" fontSize="15" fontFamily="ui-monospace, monospace">Robust system</text>

            <rect x="30" y="218" width="190" height="74" rx="8" fill="none" stroke="rgba(47,38,29,0.5)" strokeWidth="2.1" strokeDasharray="8 5" />
            <text x="125" y="248" textAnchor="middle" fill="#1f1912" fontSize="17" fontFamily="ui-monospace, monospace">LLM</text>
            <text x="125" y="270" textAnchor="middle" fill="rgba(47,38,29,0.6)" fontSize="13" fontFamily="ui-monospace, monospace">(probabilistic generator)</text>

            <line x1="220" y1="254" x2="300" y2="254" stroke="rgba(47,38,29,0.5)" strokeWidth="2.1" />
            <polygon points="300,254 286,247 286,261" fill="rgba(47,38,29,0.6)" />

            <rect x="310" y="210" width="370" height="94" rx="10" fill="none" stroke="rgba(47,38,29,0.5)" strokeWidth="2.3" strokeDasharray="10 6" />
            <text x="495" y="228" textAnchor="middle" fill="rgba(47,38,29,0.6)" fontSize="13" fontFamily="ui-monospace, monospace">Reliability Boundary</text>
            <text x="495" y="260" textAnchor="middle" fill="#1f1912" fontSize="15" fontFamily="ui-monospace, monospace">interface parameters + constraints</text>
            <text x="495" y="281" textAnchor="middle" fill="rgba(47,38,29,0.6)" fontSize="12" fontFamily="ui-monospace, monospace">validate / repair / retry / reject</text>

            <line x1="680" y1="254" x2="820" y2="254" stroke="rgba(47,38,29,0.5)" strokeWidth="2.1" />
            <polygon points="820,254 806,247 806,261" fill="rgba(47,38,29,0.6)" />
            <text x="830" y="248" fill="#1f1912" fontSize="13" fontFamily="ui-monospace, monospace">system output</text>
            <text x="830" y="268" fill="rgba(47,38,29,0.6)" fontSize="12" fontFamily="ui-monospace, monospace">or boundary error</text>
          </svg>
          <p className="text-xs text-[#4b4339]/65 mt-2">
            Default LLM system boundary: the model produces probabilistic output. A reliability boundary decides whether to accept, repair, retry, or reject the result.
          </p>
        </div>
        <p className="text-sm leading-relaxed text-[#2f261d]/80">
          If the model output is malformed or inconsistent, the system must decide how to handle it.
        </p>
        <p className="text-sm leading-relaxed text-[#2f261d]/80">
          In many systems today, the reliability boundary sits at the prompt. Developers try to improve reliability with
          better instructions, more examples, and stronger formatting hints. But when the output breaks, the system often
          has limited ability to explain why.
        </p>
        <p className="text-sm leading-relaxed text-[#2f261d]/80">
          More robust systems move the boundary outward by enforcing structure after generation rather than relying only
          on prompt quality. That can include schema validation, structured outputs, repair mechanisms, and retry strategies.
        </p>
        <p className="text-sm leading-relaxed text-[#2f261d]/80">
          This is the same direction behind llm-contract, one of my other projects. The idea is simple: model output should
          pass through an explicit typed contract, so the system can validate it, repair it, retry it, or fail clearly instead
          of silently accepting malformed structure.
        </p>
        <p className="text-sm leading-relaxed text-[#2f261d]/80">
          <a
            href="https://github.com/operatorstack/llm-contract"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-[#2f261d]/20 underline-offset-4 hover:decoration-[#2f261d]/50"
          >
            https://github.com/operatorstack/llm-contract
          </a>
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-light text-[#1f1912]">Page Interpretation Boundary</h2>
        <p className="text-sm leading-relaxed text-[#2f261d]/80">
          Automation depends on assumptions about selectors, DOM structure, and layout patterns. When pages change,
          these assumptions break.
        </p>
        <div className="correctness-note p-4 md:p-5">
          <p className="correctness-inkline text-sm mb-3">Sketch: page interpretation boundary movement</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 text-[#2f261d]/80">
            <div className="border border-[#2f261d]/12 bg-[#2f261d]/[0.025] p-4 space-y-3">
              <p className="text-sm font-semibold text-[#1f1912]">Boundary at selectors</p>
              <p className="text-sm text-[#4b4339]/65">Problem introduced: brittle click behavior when DOM assumptions change.</p>
              <div className="space-y-1 text-sm">
                <p>Website DOM</p>
                <p className="text-[#4b4339]/65">↓</p>
                <p>Screenshot capture</p>
                <p className="text-[#4b4339]/65">↓</p>
                <p className="border border-[#2f261d]/18 border-dashed px-3 py-2 inline-block">Element lookup by selectors</p>
                <p className="text-[#4b4339]/65">↓</p>
                <p>Click action</p>
              </div>
              <div className="text-sm space-y-1">
                <p className="text-[#4b4339]/65">Example assumption:</p>
                <p className="font-mono text-xs">button[type=&quot;submit&quot;]</p>
              </div>
              <p className="text-sm">If DOM assumptions break, failures leak through and click behavior becomes unreliable.</p>
            </div>

            <div className="border border-[#2f261d]/12 bg-[#2f261d]/[0.025] p-4 space-y-3">
              <p className="text-sm font-semibold text-[#1f1912]">Boundary at interpretation layer</p>
              <p className="text-sm text-[#4b4339]/65">Problem introduced: if checks are missing, the system cannot explain boundary failures.</p>
              <div className="space-y-1 text-sm">
                <p>Website DOM</p>
                <p className="text-[#4b4339]/65">↓</p>
                <p>Screenshot capture</p>
                <p className="text-[#4b4339]/65">↓</p>
                <div className="border border-[#2f261d]/20 border-dashed px-3 py-2">
                  <p className="font-semibold text-[#1f1912]">Page Interpretation Boundary</p>
                  <p>selector resolution</p>
                  <p>iframe detection</p>
                  <p>ambiguity checks (duplicate targets)</p>
                </div>
                <p className="text-[#4b4339]/65">↓</p>
                <p>Click action or boundary error</p>
              </div>
              <p className="text-sm">When assumptions fail, return a boundary error instead of silently clicking the wrong element.</p>
            </div>
          </div>
          <p className="text-xs text-[#4b4339]/65 mt-2">
            Page interpretation boundary: automation depends on DOM assumptions. The boundary decides whether the system
            silently acts on incorrect structure or detects that the page no longer matches expectations.
          </p>
        </div>
        <ul className="space-y-2 text-sm text-[#2f261d]/80 list-disc ml-6">
          <li>duplicate elements</li>
          <li>iframe nesting</li>
          <li>dynamic rendering</li>
          <li>layout changes</li>
        </ul>
        <p className="text-sm leading-relaxed text-[#2f261d]/80">
          If the developer did not anticipate these changes, the system fails. Systems that move this boundary outward
          introduce semantic element detection, DOM inspection, and validation of extracted data.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-light text-[#1f1912]">Session and Authentication Boundary</h2>
        <p className="text-sm leading-relaxed text-[#2f261d]/80">
          Many workflows rely on session reuse:
        </p>
        <div className="correctness-note p-4 md:p-5">
          <p className="correctness-inkline text-sm mb-3">Sketch: login state through a session boundary</p>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1.2fr_auto_1fr] gap-3 items-center [perspective:1100px] text-[#2f261d]/80">
            <div className="border border-[#2f261d]/12 bg-[#2f261d]/[0.025] p-4 rounded-sm rotate-[-4deg]">
              <p className="text-sm font-semibold text-[#1f1912] mb-2">Login Screen</p>
              <div className="space-y-2 text-xs">
                <div className="border border-[#2f261d]/12 px-2 py-1">email</div>
                <div className="border border-[#2f261d]/12 px-2 py-1">password</div>
                <div className="border border-[#2f261d]/15 px-2 py-1 bg-[#2f261d]/[0.03]">Sign in</div>
              </div>
            </div>

            <p className="text-[#4b4339]/65 text-xl text-center">-&gt;</p>

            <div className="border border-[#2f261d]/20 border-dashed bg-[#2f261d]/[0.025] p-4 rounded-sm space-y-3">
              <p className="text-sm font-semibold text-[#1f1912]">Reliability Boundary</p>
              <p className="text-xs text-[#4b4339]/65">HTML -&gt; Authentication / Web Storage Tech -&gt; Backend Authentication</p>
              <div className="relative h-[160px]">
                <div className="absolute left-2 top-2 w-[78%] h-[124px] border border-[#2f261d]/15 bg-[#2f261d]/[0.03] rounded-sm" />
                <div className="absolute left-6 top-6 w-[78%] h-[124px] border border-[#2f261d]/18 bg-[#2f261d]/[0.025] rounded-sm" />
                <div className="absolute left-10 top-10 w-[78%] h-[124px] border border-[#2f261d]/20 bg-[#2f261d]/[0.02] rounded-sm p-3">
                  <p className="text-xs font-semibold text-[#1f1912] mb-1">Session State Stack</p>
                  <ul className="space-y-1 text-xs">
                    <li>cookies (partial persisted)</li>
                    <li>session cookies (volatile)</li>
                    <li>indexedDB state</li>
                  </ul>
                </div>
              </div>
              <div className="pt-1 text-xs text-[#4b4339]/65">
                session interface: browser state translated into backend authentication context
              </div>
            </div>

            <p className="text-[#4b4339]/65 text-xl text-center">-&gt;</p>

            <div className="border border-[#2f261d]/12 bg-[#2f261d]/[0.025] p-4 rounded-sm rotate-[3deg]">
              <p className="text-sm font-semibold text-[#1f1912] mb-2">Service Backend</p>
              <p className="text-xs">auth service</p>
              <p className="text-xs">session validation</p>
              <p className="text-xs">trust checks</p>
            </div>
          </div>
        </div>
        <p className="text-sm leading-relaxed text-[#2f261d]/80">
          This may work locally but fail in production due to IP changes, device trust checks, or additional security
          verification. The visible error often appears as a generic login failure while the real cause is environment trust.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-light text-[#1f1912]">Environment and Network Boundary</h2>
        <p className="text-sm leading-relaxed text-[#2f261d]/80">
          Some failures originate outside automation logic, in infrastructure variables treated as static configuration.
        </p>
        <ul className="space-y-2 text-sm text-[#2f261d]/80 list-disc ml-6">
          <li>proxy location</li>
          <li>IP stability</li>
          <li>browser fingerprint</li>
          <li>device identity</li>
        </ul>
        <p className="text-sm leading-relaxed text-[#2f261d]/80">
          Expanding this boundary requires diagnostics, proxy viability checks, and security challenge detection so systems
          can identify when environment state is the root cause.
        </p>
      </section>

      <section className="space-y-4 border-t border-[#2f261d]/10 pt-8">
        <h2 className="text-xl font-light text-[#1f1912]">The Pattern</h2>
        <p className="text-sm leading-relaxed text-[#2f261d]/80">
          Reliability boundaries are the minimum structure needed to keep a system solving problems in the right direction.
          Especially with AI, which can reason over many signals in automation at once, systems can appear powerful while
          still drifting.
        </p>
        <p className="text-sm leading-relaxed text-[#2f261d]/80">
          The value of the boundary is that it gives that intelligence structure. It creates a path for AI not only to act,
          but also to resolve, classify, and explore failures in ways that compound into better system behavior over time.
        </p>
        <p className="text-sm leading-relaxed text-[#2f261d]/80">
          Across all examples, failures occur when the true cause lies outside the system reliability boundary.
        </p>
        <p className="text-sm leading-relaxed text-[#2f261d]/80">
          When boundary parameters are explicit, the system can diagnose failures. When they are implicit, failures turn into guesswork.
        </p>
        <p className="text-sm leading-relaxed text-[#2f261d]/80">
          In practice, this is also a system design choice. Boundaries can be defined in ways that are observable, reportable,
          and classifiable.
        </p>
        <ul className="space-y-2 text-sm text-[#2f261d]/80 list-disc ml-6">
          <li>Customer-facing errors can map to explicit boundary states.</li>
          <li>Internal telemetry can identify which boundary parameter failed.</li>
          <li>Recovery paths can be associated with boundary failure categories.</li>
        </ul>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="border border-[#2f261d]/12 bg-[#2f261d]/[0.025] p-4">
            <p className="font-semibold text-[#1f1912] mb-2">Inside the boundary</p>
            <p className="text-sm text-[#2f261d]/80">failure -> diagnosis -> recovery</p>
          </div>
          <div className="border border-[#2f261d]/12 bg-[#2f261d]/[0.025] p-4">
            <p className="font-semibold text-[#1f1912] mb-2">Outside the boundary</p>
            <p className="text-sm text-[#2f261d]/80">failure -> guesswork</p>
          </div>
        </div>
        <p className="text-sm leading-relaxed text-[#2f261d]/80">
          The next section looks at three concrete examples from browser automation where these boundaries become visible
          in practice.
        </p>
      </section>

      <section className="space-y-4 border-t border-[#2f261d]/10 pt-8">
        <h2 className="text-xl font-light text-[#1f1912]">A Note on Boundary Choice</h2>
        <p className="text-sm leading-relaxed text-[#2f261d]/80">
          One reason I was initially drawn to computer-use style agents is that they let a single builder place the
          boundary almost anywhere.
        </p>
        <p className="text-sm leading-relaxed text-[#2f261d]/80">
          If the system is understood deeply enough, operational knowledge can be translated directly into automation
          behavior. For example, an operations rule can become a direct action in the agent, with very little translation
          layer between operations teams and automation.
        </p>
        <p className="text-sm leading-relaxed text-[#2f261d]/80">
          In that setup the boundary is highly flexible. The tradeoff is that this approach requires high skill from the
          system designer: domain understanding and automation stack understanding both need to be strong enough to choose
          boundaries and encode assumptions correctly.
        </p>
        <p className="text-sm leading-relaxed text-[#2f261d]/80">
          This can work well for a single builder or a small team with deep context. It becomes harder as systems are used
          by larger teams or external developers.
        </p>
        <p className="text-sm leading-relaxed text-[#2f261d]/80">
          Libraries and frameworks often choose more structured boundaries. They trade some flexibility for systems that are
          easier to reason about, operate, and extend.
        </p>
        <p className="text-sm leading-relaxed text-[#2f261d]/80">
          This does not make computer-use models the wrong approach. It reflects a different boundary choice.
        </p>
        <p className="text-sm leading-relaxed text-[#2f261d]/80">
          In practice, the design question is not whether one approach is universally better, but where the reliability
          boundary should sit for the people building and operating the system.
        </p>
        <h3 className="text-lg font-light text-[#1f1912] pt-2">Prompt Guidance as Boundary Guidance</h3>
        <p className="text-sm leading-relaxed text-[#2f261d]/80">
          One thing that still needs better treatment in automation infrastructure docs is prompt guidance. Prompt changes
          can affect end-to-end system behavior, but guidance is often too loose, usually framed as a generic suggestion to
          keep adjusting the prompt.
        </p>
        <p className="text-sm leading-relaxed text-[#2f261d]/80">
          A stronger approach is to connect prompt changes to specific failure signals and boundary conditions. That makes
          it clearer when prompt edits are the right tool, which part of the system they are likely to affect, and how to
          make those edits without introducing new instability.
        </p>
        <h3 className="text-lg font-light text-[#1f1912] pt-2">Computer Use and Observability</h3>
        <p className="text-sm leading-relaxed text-[#2f261d]/80">
          Computer use also has an extremely high skill ceiling because it creates a path from an idea to direct execution,
          and each path introduces its own boundary choices.
        </p>
        <p className="text-sm leading-relaxed text-[#2f261d]/80">
          At the same time, one advantage of computer use is that it creates a direct boundary from input to page action,
          which improves observability. Agent logs and action traces are often human-readable.
        </p>
        <p className="text-sm leading-relaxed text-[#2f261d]/80">
          That can be a useful reason to give customers or end users access to those logs, since it makes diagnosis faster
          when failures occur.
        </p>
        <p className="text-sm leading-relaxed text-[#2f261d]/80">
          Human-readable action traces can act as a boundary interface between the automation system and the people trying
          to understand it.
        </p>
        <p className="text-sm leading-relaxed text-[#2f261d]/80">
          More generally, this shows that observability does not have to be added only after the fact. It can be designed
          through the boundary itself. When boundaries are chosen well, they do not just constrain execution. They create
          surfaces through which systems can be observed, explained, and improved.
        </p>
        <p className="text-sm leading-relaxed text-[#2f261d]/80">
          In that sense, one of the things boundaries make possible is observability itself.
        </p>
        <h3 className="text-lg font-light text-[#1f1912] pt-2">Boundary Choice as Product Advantage</h3>
        <div className="border border-[#2f261d]/12 bg-[#2f261d]/[0.025] p-4 space-y-2">
          <p className="text-sm leading-relaxed text-[#2f261d]/80">
            A simple interface can hide a very deep reliability boundary.
          </p>
          <p className="text-sm leading-relaxed text-[#4b4339]/65">
            What looks like a prompt is often really a maintained boundary.
          </p>
        </div>
        <p className="text-sm leading-relaxed text-[#2f261d]/80">
          Boundaries can also be a source of product advantage. For end users looking for real leverage, one useful place
          to look is the boundary a product has chosen to build around the problem.
        </p>
        <p className="text-sm leading-relaxed text-[#2f261d]/80">
          A system may look simple on the surface. A product might expose what appears to be a short prompt that automates
          work across many websites. If evaluation focuses only on that interface, the value can look easy to replicate.
        </p>
        <p className="text-sm leading-relaxed text-[#2f261d]/80">
          In many cases, the harder-to-reproduce value is what the boundary enables around that interface: maintenance,
          debugging, observability, recovery, and continued reliability over time.
        </p>
        <p className="text-sm leading-relaxed text-[#2f261d]/80">
          Another team may be able to write a similar prompt. Reproducing the surrounding system with the same maintained
          correctness and operational support is typically much harder.
        </p>
        <p className="text-sm leading-relaxed text-[#2f261d]/80">
          That is one reason boundary choice can become a product differentiator. It shapes not only what a product does,
          but how well it continues to work as real users, real failures, and real operational complexity enter the system.
        </p>
      </section>

      <section className="border-t border-[#2f261d]/10 pt-8 flex flex-wrap gap-3">
        <a
          href="/correctness"
          className="inline-block border border-[#2f261d]/12 px-4 py-2 text-sm text-[#2f261d]/80 hover:bg-[#2f261d]/[0.03] transition-colors"
        >
          &larr; Back: Correctness
        </a>
        <a
          href="/correctness/reliability-boundaries-in-practice"
          className="inline-block border border-[#2f261d]/12 px-4 py-2 text-sm text-[#2f261d]/80 hover:bg-[#2f261d]/[0.03] transition-colors"
        >
          Next: Reliability Boundaries in Practice ->
        </a>
      </section>
    </div>
  )
}

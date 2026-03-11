import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Language Models',
  description: 'Beyond prompt engineering. Language models as operators inside systems that discover context, transform representations, use error as signal, and help software find usable answers.',
  openGraph: {
    title: 'Language Models',
    description: 'Beyond prompt engineering.',
    type: 'article',
    images: [
      {
        url: '/images/og/language-models-cover.png',
        width: 1200,
        height: 630,
        alt: 'Language Models - TO2D',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Language Models',
    description: 'Beyond prompt engineering.',
    images: ['/images/og/language-models-cover.png'],
  },
}

export default function LanguageModelsPage() {
  return (
    <div className="max-w-3xl space-y-14">
      <header className="space-y-4 border-b border-[#E8E8E6] pb-8">
        <p className="text-xs uppercase tracking-[0.2em] text-[#8C8C8C] font-mono">Language Models</p>
        <h1 className="text-3xl md:text-4xl font-light tracking-tight leading-tight text-[#1A1A1A]">
          Language Models
        </h1>
        <p className="text-sm text-[#5A5A5A] italic">Beyond prompt engineering.</p>

        <div className="overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0 pt-6">
          <svg viewBox="0 0 520 440" className="w-full" style={{ minWidth: '340px' }}>
            <defs>
              <pattern id="lm-hero" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="0.4" fill="#E8E8E6" />
              </pattern>
            </defs>
            <rect width="520" height="440" fill="url(#lm-hero)" rx="2" />

            {/* Math framing */}
            <text x="260" y="24" textAnchor="middle" fill="#8C8C8C" fontSize="10" fontFamily="ui-monospace, monospace">&#x2299; : A &#x2192; B&#160;&#160;&#160;&#160;A = environment&#160;&#160;&#160;&#160;B = system representation</text>

            {/* Environment */}
            <rect x="170" y="42" width="180" height="34" rx="3" fill="#FFFFFF" stroke="#DADADA" strokeWidth="1" />
            <text x="260" y="64" textAnchor="middle" fill="#2A2A2A" fontSize="12" fontFamily="ui-monospace, monospace">Environment</text>

            <line x1="260" y1="76" x2="260" y2="92" stroke="#B5B5B5" strokeWidth="1.2" />
            <polygon points="260,96 256,88 264,88" fill="#B5B5B5" />

            {/* Domain Operator */}
            <rect x="152" y="98" width="216" height="40" rx="3" fill="#FFFFFF" stroke="#DADADA" strokeWidth="1" />
            <circle cx="180" cy="118" r="14" fill="#FFFFFF" stroke="#DADADA" strokeWidth="1" />
            <circle cx="180" cy="118" r="9" fill="none" stroke="#E8E8E6" strokeWidth="0.5" />
            <text x="180" y="123" textAnchor="middle" fill="#2A2A2A" fontSize="12" fontFamily="ui-monospace, monospace">&#x2299;</text>
            <text x="270" y="123" textAnchor="middle" fill="#2A2A2A" fontSize="12" fontFamily="ui-monospace, monospace">Domain Operator</text>

            <line x1="260" y1="138" x2="260" y2="154" stroke="#B5B5B5" strokeWidth="1.2" />
            <polygon points="260,158 256,150 264,150" fill="#B5B5B5" />

            {/* Representation Mapping */}
            <rect x="130" y="160" width="260" height="34" rx="3" fill="#FFFFFF" stroke="#DADADA" strokeWidth="1" />
            <text x="260" y="182" textAnchor="middle" fill="#2A2A2A" fontSize="12" fontFamily="ui-monospace, monospace">Representation Mapping</text>

            <line x1="260" y1="194" x2="260" y2="210" stroke="#B5B5B5" strokeWidth="1.2" />
            <polygon points="260,214 256,206 264,206" fill="#B5B5B5" />

            {/* Deterministic Boundary */}
            <rect x="130" y="216" width="260" height="40" rx="3" fill="#F2F2F0" stroke="#DADADA" strokeWidth="1.2" />
            <rect x="148" y="228" width="16" height="16" rx="2" fill="none" stroke="#DADADA" strokeWidth="1" />
            <text x="156" y="240" textAnchor="middle" fill="#8C8C8C" fontSize="10" fontFamily="ui-monospace, monospace">&#x25A1;</text>
            <text x="272" y="241" textAnchor="middle" fill="#2A2A2A" fontSize="12" fontFamily="ui-monospace, monospace">Deterministic Boundary</text>

            <line x1="260" y1="256" x2="260" y2="272" stroke="#B5B5B5" strokeWidth="1.2" />
            <polygon points="260,276 256,268 264,268" fill="#B5B5B5" />

            {/* Error Signals */}
            <rect x="170" y="278" width="180" height="34" rx="3" fill="#FFFFFF" stroke="#C89B2C" strokeWidth="1.2" />
            <text x="260" y="300" textAnchor="middle" fill="#C89B2C" fontSize="12" fontFamily="ui-monospace, monospace">Error Signals</text>

            <line x1="260" y1="312" x2="260" y2="328" stroke="#B5B5B5" strokeWidth="1.2" />
            <polygon points="260,332 256,324 264,324" fill="#B5B5B5" />

            {/* Environment Discovery */}
            <rect x="140" y="334" width="240" height="34" rx="3" fill="#FFFFFF" stroke="#3C7A52" strokeWidth="1" />
            <text x="260" y="356" textAnchor="middle" fill="#3C7A52" fontSize="12" fontFamily="ui-monospace, monospace">Environment Discovery</text>

            {/* Feedback loop to improved mapping */}
            <line x1="260" y1="368" x2="260" y2="396" stroke="#B5B5B5" strokeWidth="1.2" />
            <polygon points="260,400 256,392 264,392" fill="#B5B5B5" />

            <rect x="155" y="402" width="210" height="30" rx="3" fill="#F2F2F0" stroke="#DADADA" strokeWidth="1" />
            <text x="260" y="422" textAnchor="middle" fill="#2A2A2A" fontSize="11" fontFamily="ui-monospace, monospace">Improved Mapping</text>

            {/* Dashed loop back */}
            <path d="M 365 417 Q 460 417 460 118 Q 460 52 352 52" stroke="#B5B5B5" strokeWidth="1" strokeDasharray="4 3" fill="none" />
            <polygon points="352,52 360,48 360,56" fill="#B5B5B5" />

            {/* Side labels */}
            <text x="26" y="64" fill="#8C8C8C" fontSize="9" fontFamily="ui-monospace, monospace">input</text>
            <text x="26" y="123" fill="#8C8C8C" fontSize="9" fontFamily="ui-monospace, monospace">transform</text>
            <text x="26" y="182" fill="#8C8C8C" fontSize="9" fontFamily="ui-monospace, monospace">map</text>
            <text x="26" y="241" fill="#8C8C8C" fontSize="9" fontFamily="ui-monospace, monospace">verify</text>
            <text x="26" y="300" fill="#C89B2C" fontSize="9" fontFamily="ui-monospace, monospace">signal</text>
            <text x="26" y="356" fill="#3C7A52" fontSize="9" fontFamily="ui-monospace, monospace">discover</text>
            <text x="26" y="422" fill="#8C8C8C" fontSize="9" fontFamily="ui-monospace, monospace">improve</text>

            <text x="478" y="236" fill="#8C8C8C" fontSize="9" fontFamily="ui-monospace, monospace">system</text>
            <text x="478" y="248" fill="#8C8C8C" fontSize="9" fontFamily="ui-monospace, monospace">lifecycle</text>
          </svg>
        </div>

        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Language models become more powerful when used inside systems that transform representations, detect failures, and learn about the environment through error signals.
        </p>
      </header>

      <section className="space-y-5">
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Language models are often introduced as systems that answer questions.
        </p>
        <pre className="font-mono text-sm leading-relaxed bg-[#FFFFFF] border border-[#DADADA] p-4 overflow-x-auto text-[#2A2A2A]">
{`question → model → answer`}
        </pre>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          That framing is useful at first, but it quickly creates a bottleneck.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          If better results depend mainly on better prompts, then progress becomes tied to a single skill: manually discovering the right way to ask.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          That works for some problems. It does not scale well for harder ones.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          A difficult problem creates a strange ceiling: if you do not already know how to reason about it well, it becomes hard to design the prompt that would make the model reason well either.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          This section explores a different view.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Language models are not only answer generators. They can also act as operators inside larger systems: transforming between domains, discovering missing context, using error as signal, and producing representations that other parts of software can reliably use.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          The goal is not only to get an answer. The goal is to build better paths to answers.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-light text-[#1A1A1A]">The First Roadblock: Prompt Engineering</h2>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Prompt engineering is the first optimization most people reach for. That makes sense. Language models already produce meaningful outputs across many domains, so improving the prompt appears to be the natural way to improve the result.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          But prompt engineering has a built-in ceiling. It assumes the main path to improvement is still:
        </p>
        <pre className="font-mono text-sm leading-relaxed bg-[#FFFFFF] border border-[#DADADA] p-4 overflow-x-auto text-[#2A2A2A]">
{`better wording → better output`}
        </pre>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          That can work for formatting, style, small constraint changes, and lightweight task shaping.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          It becomes weaker when the problem requires missing context, interaction with an environment, structured recovery from failure, domain-specific acceptance rules, or iterative discovery of what the system actually needs.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          At that point, the problem is no longer just &ldquo;how do I ask better?&rdquo;
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          It becomes:
        </p>
        <pre className="font-mono text-sm leading-relaxed bg-[#FFFFFF] border border-[#DADADA] p-4 overflow-x-auto text-[#2A2A2A]">
{`what system should exist around the model
so better answers become possible?`}
        </pre>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-light text-[#1A1A1A]">A Different Way to Use Language Models</h2>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          A more useful mental model is:
        </p>
        <pre className="font-mono text-sm leading-relaxed bg-[#FFFFFF] border border-[#DADADA] p-4 overflow-x-auto text-[#2A2A2A]">
{`representation A → model → representation B`}
        </pre>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Instead of treating the model only as a direct answer engine, the model can be used as an operator that transforms one domain into another.
        </p>
        <ul className="space-y-2 text-sm text-[#5A5A5A] list-disc ml-6">
          <li>web page → login field specification</li>
          <li>document text → structured business object</li>
          <li>support email → routing state</li>
          <li>natural language → code changes</li>
          <li>trace output → failure classification</li>
        </ul>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          In this framing, the model is not solving the whole problem. It is helping the system move from one representation to another. That is often a much smaller and more reliable problem.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-light text-[#1A1A1A]">Why This Matters</h2>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          When a receiving system has a defined representation, the model no longer needs to produce an open-ended answer. It only needs to produce something that the receiver can use.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          That changes the engineering surface. Instead of trying to make the model &ldquo;perfect,&rdquo; the system can:
        </p>
        <ul className="space-y-2 text-sm text-[#5A5A5A] list-disc ml-6">
          <li>define the representation it accepts</li>
          <li>verify whether the output satisfies it</li>
          <li>recover when it does not</li>
          <li>use errors to improve the next step</li>
        </ul>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          This creates forward paths that do not depend only on manual prompt iteration.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-light text-[#1A1A1A]">Prompting as a Starting Point</h2>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Prompt engineering is a useful skill because it quickly shows how much language models can already do.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          But the bigger opportunity is not just getting better at prompts. It is learning how to use AI to solve more kinds of problems.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          For simple tasks, better prompting may be enough. For harder ones, progress usually depends on something larger: how the system finds context, shapes representations, validates results, and learns from failure.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          In that sense, prompt engineering is best seen as a starting point. It gets you into the system, but the deeper value comes from building ways for AI to help solve problems beyond what prompt wording alone can unlock.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-light text-[#1A1A1A]">The Broader System View</h2>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Language models become much more useful when they are embedded inside systems that can:
        </p>
        <ul className="space-y-2 text-sm text-[#5A5A5A] list-disc ml-6">
          <li>find missing context</li>
          <li>transform environments into useful representations</li>
          <li>classify failures</li>
          <li>apply deterministic constraints</li>
          <li>retry with new information</li>
          <li>accumulate system knowledge over time</li>
        </ul>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          That is a different use of language models than simple question answering. It treats them as part of a larger architecture for finding usable answers.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-light text-[#1A1A1A]">Summary</h2>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Prompt engineering is often the first roadblock because it is the first available lever. But it is not always the best long-term abstraction.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          A better path is often to ask:
        </p>
        <pre className="font-mono text-sm leading-relaxed bg-[#FFFFFF] border border-[#DADADA] p-4 overflow-x-auto text-[#2A2A2A]">
{`What representation does the system need?
What context is missing?
What should be verified?
What can be learned from failure?`}
        </pre>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Language models are strongest when they are not forced to carry the entire system alone. They become much more useful when they operate inside architectures that help find, shape, and verify answers.
        </p>
      </section>

      <section className="space-y-6 border-t border-[#E8E8E6] pt-10">
        <p className="text-[10px] font-mono tracking-[0.2em] text-[#8C8C8C] uppercase">Topics</p>
        <div className="grid grid-cols-1 gap-6">
                <a
                  href="/language-models/llms-in-software-systems"
                  className="border border-[#E8E8E6] hover:border-[#DADADA] p-7 transition-colors group block"
                >
                  <h3 className="text-lg font-light mb-3 text-[#1A1A1A] group-hover:text-[#111111]">LLMs in Software Systems</h3>
                  <p className="text-[#5A5A5A] text-sm">
                    What kind of component language models actually are, and why the surrounding architecture matters more than the model.
                  </p>
                </a>

                <a
                  href="/language-models/domain-operators"
                  className="border border-[#E8E8E6] hover:border-[#DADADA] p-7 transition-colors group block"
                >
                  <h3 className="text-lg font-light mb-3 text-[#1A1A1A] group-hover:text-[#111111]">Domain Operators</h3>
                  <p className="text-[#5A5A5A] text-sm">
                    Using language models to transform between domains rather than only generate final answers.
                  </p>
                </a>

          <a
            href="/language-models/representation-mapping"
            className="border border-[#E8E8E6] hover:border-[#DADADA] p-7 transition-colors group block"
          >
            <h3 className="text-lg font-light mb-3 text-[#1A1A1A] group-hover:text-[#111111]">Representation Mapping</h3>
            <p className="text-[#5A5A5A] text-sm">
              How systems move from messy environments into receiver-defined representations.
            </p>
          </a>

          <a
            href="/language-models/error-signals"
            className="border border-[#E8E8E6] hover:border-[#DADADA] p-7 transition-colors group block"
          >
            <h3 className="text-lg font-light mb-3 text-[#1A1A1A] group-hover:text-[#111111]">Error Signals</h3>
            <p className="text-[#5A5A5A] text-sm">
              How failures can become structured inputs for the next step instead of dead ends.
            </p>
          </a>

          <a
            href="/language-models/environment-discovery"
            className="border border-[#E8E8E6] hover:border-[#DADADA] p-7 transition-colors group block"
          >
            <h3 className="text-lg font-light mb-3 text-[#1A1A1A] group-hover:text-[#111111]">Environment Discovery</h3>
            <p className="text-[#5A5A5A] text-sm">
              How error signals reveal the structure of unknown environments, turning failures into a mechanism for discovering system constraints.
            </p>
          </a>
        </div>
      </section>
    </div>
  )
}

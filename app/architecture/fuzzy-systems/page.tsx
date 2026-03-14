export default function FuzzySystemsPage() {
  const foundations = [
    { href: '#motivation', label: 'Motivation' },
    { href: '#basic-architecture', label: 'Basic Architecture' },
    { href: '#interactive-simulation', label: 'Interactive Simulation' },
    { href: '#system-interpretation', label: 'System Interpretation' },
    { href: '#relationship-to-language-models', label: 'Relationship to Language Models' },
    { href: '#why-this-matters', label: 'Why This Matters' },
  ]

  return (
    <div className="max-w-3xl space-y-14">
      <header className="space-y-4 border-b border-[#E8E8E6] pb-8">
        <p className="text-xs uppercase tracking-[0.2em] text-[#8C8C8C] font-mono">Architecture</p>
        <h1 className="text-3xl md:text-4xl font-light tracking-tight leading-tight text-[#1A1A1A]">
          Fuzzy Systems
        </h1>
        <p className="text-sm text-[#5A5A5A] italic">
          Modeling decision systems under uncertainty
        </p>
      </header>

      <section id="motivation" className="space-y-5">
        <h2 className="text-xl font-light text-[#1A1A1A]">Motivation</h2>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Real-world systems rarely operate with precise rules.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Sensors are noisy. Human concepts are vague. Decisions must still be made.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Fuzzy systems were developed to model this type of reasoning.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          They remain relevant because they provide one of the earliest successful architectures for decision-making under uncertainty.
        </p>
      </section>

      <section id="basic-architecture" className="space-y-5">
        <h2 className="text-xl font-light text-[#1A1A1A]">Basic Architecture</h2>
        <pre className="bg-[#FFFFFF] border border-[#DADADA] p-4 overflow-x-auto text-sm font-mono text-[#2A2A2A]">
{`input
↓
fuzzifier
↓
rule base + inference
↓
defuzzifier
↓
output`}
        </pre>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          The fuzzifier maps crisp inputs into membership activations. The rule base and inference layer combine those activations into a decision. The defuzzifier converts the resulting fuzzy output into a usable control action.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Instead of requiring hard thresholds everywhere, the system can operate across graded regions of behavior.
        </p>
      </section>

      <section id="interactive-simulation" className="space-y-5">
        <h2 className="text-xl font-light text-[#1A1A1A]">Interactive Simulation</h2>
        <div className="border border-[#DADADA] bg-[#FFFFFF] p-6 space-y-3">
          <p className="text-[10px] font-mono tracking-[0.2em] text-[#8C8C8C] uppercase">
            Simulation Slot
          </p>
          <p className="text-sm leading-relaxed text-[#5A5A5A]">
            This section is intended for the beam-ball fuzzy controller simulation.
          </p>
          <p className="text-sm leading-relaxed text-[#5A5A5A]">
            The controller view can expose membership functions, rule activation, ball position, beam angle, and live control output in the same research style as the rest of the site.
          </p>
        </div>
      </section>

      <section id="system-interpretation" className="space-y-5">
        <h2 className="text-xl font-light text-[#1A1A1A]">System Interpretation</h2>
        <pre className="bg-[#FFFFFF] border border-[#DADADA] p-4 overflow-x-auto text-sm font-mono text-[#2A2A2A]">
{`environment state
↓
membership activation
↓
rule inference
↓
control output`}
        </pre>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          In system language, fuzzy controllers describe how uncertain inputs activate overlapping regions of behavior, which then combine into a bounded output.
        </p>
        <pre className="bg-[#FFFFFF] border border-[#DADADA] p-4 overflow-x-auto text-sm font-mono text-[#2A2A2A]">
{`environment
↓
representation mapping
↓
AI reasoning
↓
deterministic boundary
↓
system action`}
        </pre>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          This is the conceptual bridge: both architectures reason under uncertainty, but one uses explicit memberships and rules while the other uses learned representations and probabilistic inference.
        </p>
      </section>

      <section id="relationship-to-language-models" className="space-y-5">
        <h2 className="text-xl font-light text-[#1A1A1A]">Relationship to Language Models</h2>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Language models are not fuzzy systems, but the comparison is useful.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Language models often behave like systems where different behaviors activate depending on the input. This resembles fuzzy systems, where different rules activate depending on membership strength.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          The difference is structural:
        </p>
        <ul className="space-y-2 text-sm text-[#5A5A5A] list-disc ml-6">
          <li>fuzzy systems use explicitly defined rules</li>
          <li>language models use implicitly learned rules</li>
        </ul>
      </section>

      <section id="why-this-matters" className="space-y-5">
        <h2 className="text-xl font-light text-[#1A1A1A]">Why This Matters</h2>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          The engineering lesson is not that modern AI should be reduced to old control methods.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          The lesson is that uncertain systems can often be understood in terms of regions of behavior, activation patterns, and decision boundaries.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          This mindset helps when designing reliable AI systems. Instead of treating models as pure black boxes, engineers can reason about where behaviors activate, where variance becomes dangerous, and where deterministic structure must be introduced.
        </p>
      </section>

      <section className="border-t border-[#E8E8E6] pt-8">
        <h3 className="text-sm font-mono text-[#8C8C8C] mb-4">Foundations</h3>
        <ul className="space-y-3">
          {foundations.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="text-[#5A5A5A] text-sm hover:text-[#1A1A1A] transition-colors flex items-center gap-2">
                <span className="text-[#B5B5B5]">→</span>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="text-[#8C8C8C] text-sm border-t border-[#E8E8E6] pt-6">
        <a href="/architecture" className="hover:text-[#5A5A5A] transition-colors">
          ← Back to Architecture
        </a>
      </section>
    </div>
  )
}

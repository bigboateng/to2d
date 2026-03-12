export default function SystemIdentificationPage() {
  const foundations = [
    { href: '#thesis', label: 'Thesis' },
    { href: '#observable-behavior', label: 'Observable Behavior' },
    { href: '#structural-identification', label: 'Structural Identification' },
    { href: '#why-this-matters', label: 'Why This Matters' },
    { href: '#from-identification-to-architecture', label: 'From Identification to Architecture' },
    { href: '#formal-framing', label: 'Formal Framing' },
    { href: '#summary', label: 'Summary' },
  ]

  return (
    <div className="max-w-3xl space-y-14">
      <header className="space-y-4 border-b border-[#E8E8E6] pb-8">
        <p className="text-xs uppercase tracking-[0.2em] text-[#8C8C8C] font-mono">Architecture</p>
        <h1 className="text-3xl md:text-4xl font-light tracking-tight leading-tight text-[#1A1A1A]">
          System Identification
        </h1>
        <p className="text-sm text-[#5A5A5A] italic">
          Understanding the structure of systems before attempting to control them
        </p>
      </header>

      <section id="thesis" className="space-y-5">
        <h2 className="text-xl font-light text-[#1A1A1A]">Thesis</h2>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Before reliable software can be built on top of a system, the system must first be understood.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          This process is known as system identification.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          In classical engineering, system identification means determining how a system responds to inputs without direct access to its internal structure.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Modern AI systems share this property.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Language models are opaque components whose internal state and parameters are not directly observable. Yet they must still be integrated into deterministic software systems that require predictable behavior.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Reliable systems therefore begin by identifying the observable properties of the system they depend on.
        </p>
      </section>

      <section id="observable-behavior" className="space-y-5">
        <h2 className="text-xl font-light text-[#1A1A1A]">Observable Behavior</h2>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Language models can be treated as black-box operators.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          For a given input domain <em>D<sub>in</sub></em>, the model produces outputs in <em>D<sub>out</sub></em>.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          What matters is not the internal representation, but the observable relationship between input and output.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Examples include:
        </p>
        <ul className="space-y-2 text-sm text-[#5A5A5A] list-disc ml-6">
          <li>how output structure varies with prompt changes</li>
          <li>how frequently schema violations occur</li>
          <li>which prompts produce stable outputs</li>
          <li>where hallucinations appear</li>
          <li>how failures correlate with context length or ambiguity</li>
        </ul>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          These observations allow engineers to characterize regions of stable behavior.
        </p>
      </section>

      <section id="structural-identification" className="space-y-5">
        <h2 className="text-xl font-light text-[#1A1A1A]">Structural Identification</h2>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          System identification in this context is not about estimating internal parameters.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          It is about identifying structural properties of the system:
        </p>
        <ul className="space-y-2 text-sm text-[#5A5A5A] list-disc ml-6">
          <li>which inputs produce stable outputs</li>
          <li>which constraints reduce output variance</li>
          <li>where failures occur consistently</li>
          <li>which disturbances influence system behavior</li>
        </ul>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          The goal is to understand the operational envelope of the system.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Once these regions are known, architectures can be designed around them.
        </p>
      </section>

      <section id="why-this-matters" className="space-y-5">
        <h2 className="text-xl font-light text-[#1A1A1A]">Why This Matters</h2>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Many AI systems are designed in reverse order.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Engineers begin by tuning prompts or adding retries before understanding the underlying system behavior.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          This often leads to fragile systems whose reliability depends on accidental prompt configurations.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          System identification reverses this process.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Instead of guessing what might work, the system is first characterized.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Only then are architectural constraints introduced.
        </p>
      </section>

      <section id="from-identification-to-architecture" className="space-y-5">
        <h2 className="text-xl font-light text-[#1A1A1A]">From Identification to Architecture</h2>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Once a system&apos;s observable structure is understood, several architectural principles follow naturally:
        </p>
        <ul className="space-y-2 text-sm text-[#5A5A5A] list-disc ml-6">
          <li>stochastic cores must be bounded by deterministic layers</li>
          <li>invariant boundaries must enforce system guarantees</li>
          <li>state must be externalized to avoid hidden context accumulation</li>
          <li>operators should work on minimal representations</li>
        </ul>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          These ideas form the foundation of the architectures described in the following sections.
        </p>
      </section>

      <section id="formal-framing" className="space-y-5">
        <h2 className="text-xl font-light text-[#1A1A1A]">Formal Framing</h2>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Let <em>M</em> represent a language model treated as a black-box operator.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          System identification constructs a behavioral approximation <em>M&#770;</em> such that the observable properties of <em>M</em> are predictable within a bounded region of operation.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          The goal is not to replicate the internal model.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          It is to identify the regions where the system behaves reliably.
        </p>
      </section>

      <section id="summary" className="space-y-5">
        <h2 className="text-xl font-light text-[#1A1A1A]">Summary</h2>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Reliable AI systems begin with system identification.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Before designing prompts, workflows, or guardrails, engineers must first understand how the underlying system behaves.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Once those behavioral boundaries are visible, reliable architectures can be constructed around them.
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

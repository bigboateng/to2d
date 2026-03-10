export default function ResearchPage() {
  const tracks = [
    {
      href: '/research/control-systems',
      title: 'Control Systems',
      description: 'Feedback, state-space dynamics, and transfer-function thinking.',
    },
    {
      href: '/research/control-systems-ai',
      title: 'Control Systems × AI',
      description: 'Applying control-theoretic principles to AI architecture and runtime behavior.',
    },
    {
      href: '/research/language-models',
      title: 'Language Models',
      description: 'Failure surfaces, context limits, and latent-space behavior under uncertainty.',
    },
  ]

  return (
    <div className="space-y-20 max-w-4xl">
      <section className="space-y-4">
        <p className="text-[10px] font-mono tracking-[0.2em] text-[#8C8C8C] uppercase">Research</p>
        <h1 className="text-3xl font-light tracking-tight text-[#1A1A1A]">Background and Foundations</h1>
        <p className="text-[#5A5A5A] text-sm leading-relaxed">
          Research captures the conceptual substrate that informs architecture and system design decisions.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-light text-[#1A1A1A]">Concept</h2>
        <p className="text-[#5A5A5A] text-sm leading-relaxed">
          Build a stable body of theory that explains failure modes before implementation choices are made.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-light text-[#1A1A1A]">Formal Idea</h2>
        <pre className="bg-[#FFFFFF] border border-[#DADADA] p-4 overflow-x-auto text-sm text-[#2A2A2A] font-mono">
{`stability = f(feedback, observability, boundary_enforcement)`}
        </pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-light text-[#1A1A1A]">System Implications</h2>
        <ul className="space-y-2 text-sm text-[#5A5A5A]">
          <li>Architecture decisions are guided by control and systems theory, not prompt heuristics.</li>
          <li>Model behavior is treated as dynamics to be constrained, measured, and corrected.</li>
          <li>Reliability methods can transfer between different AI and automation domains.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-light text-[#1A1A1A]">Real Example</h2>
        <p className="text-[#5A5A5A] text-sm leading-relaxed">
          Reframing LLM pipelines as open-loop control systems reveals where instability originates and where boundary enforcement must be inserted.
        </p>
      </section>

      <section className="border-t border-[#E8E8E6] pt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {tracks.map((item) => (
            <a key={item.href} href={item.href} className="border border-[#E8E8E6] p-5 hover:border-[#DADADA] transition-colors group block">
              <h3 className="text-base font-light mb-2 text-[#1A1A1A] group-hover:text-[#111111]">{item.title}</h3>
              <p className="text-sm text-[#8C8C8C]">{item.description}</p>
            </a>
          ))}
        </div>
      </section>
    </div>
  )
}

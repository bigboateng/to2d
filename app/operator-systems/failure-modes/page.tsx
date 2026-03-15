import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Operator Systems Failure Modes',
  description: 'Draft placeholder for the Operator Systems failure modes page.',
}

export default function OperatorSystemsFailureModesPage() {
  return (
    <div className="max-w-3xl space-y-14">
      <header className="space-y-4 border-b border-[#E8E8E6] pb-8">
        <p className="text-xs uppercase tracking-[0.2em] text-[#8C8C8C] font-mono">Operator Systems</p>
        <h1 className="text-3xl md:text-4xl font-light tracking-tight leading-tight text-[#1A1A1A]">Failure Modes</h1>
        <p className="text-xs text-[#8C8C8C] font-mono uppercase tracking-[0.2em]">Draft Placeholder</p>
      </header>

      <section className="space-y-4">
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          This route is live so the Operator Systems section remains navigable while the failure modes page is still in draft.
        </p>
      </section>
    </div>
  )
}

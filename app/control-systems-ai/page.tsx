import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Control Systems × AI | to2d',
  description: 'Applying aerospace and control theory to AI architectures. Where classical control theory meets modern AI systems.',
  openGraph: {
    title: 'Control Systems × AI',
    description: 'Applying aerospace and control theory to AI architectures. Where classical control theory meets modern AI systems.',
    images: [
      {
        url: '/images/ai/llm_open_loop_architecture.png',
        width: 1920,
        height: 1080,
        alt: 'Control Systems and AI Architecture',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Control Systems × AI',
    description: 'Applying aerospace and control theory to AI architectures.',
    images: ['/images/ai/llm_open_loop_architecture.png'],
  },
}

export default function ControlSystemsAIPage() {
  return (
    <div className="space-y-12 max-w-3xl">
      <section>
        <h1 className="text-3xl font-thin tracking-tight mb-4">
          Control Systems × AI
        </h1>
        <p className="text-white/50 text-sm mb-8">
          Applying aerospace and control theory to AI architectures
        </p>
        <p className="text-white/70 leading-relaxed mb-6">
          Where classical control theory meets modern AI systems.
        </p>
      </section>

      <section className="space-y-6">
        <a href="/control-systems-ai/why-current-llm-architectures-behave-like-open-loop-systems" className="border border-white/10 p-6 hover:border-white/30 transition-colors group block">
          <h2 className="text-xl font-thin mb-3 group-hover:text-white/90">Why Current LLM Architectures Behave Like Open-Loop Systems</h2>
          <p className="text-white/60 text-sm leading-relaxed mb-2">
            And why stability requires a control-theoretic layer.
          </p>
          <p className="text-white/40 text-xs">
            open-loop vs closed-loop · feedback control · runtime stability · autonomous correction
          </p>
        </a>

        <a href="/control-systems-ai/why-llms-fail-in-the-real-world" className="border border-white/10 p-6 hover:border-white/30 transition-colors group block">
          <h2 className="text-xl font-thin mb-3 group-hover:text-white/90">Why LLMs Fail in the Real World: Design-Time Optimization vs Real-Time Stability</h2>
          <p className="text-white/60 text-sm leading-relaxed mb-2">
            Why modern LLM systems overfit the setup phase and collapse during execution.
          </p>
          <p className="text-white/40 text-xs">
            preparation vs survival · fine-tuning limits · control-theoretic reframe
          </p>
        </a>
      </section>
    </div>
  )
}


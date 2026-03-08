import type { Metadata } from 'next'
import { readFileSync } from 'fs'
import path from 'path'
import type { ReactNode } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'

export const metadata: Metadata = {
  title: 'Deterministic Boundaries',
  description: 'Deterministic boundaries for probabilistic systems: acceptance regions, failure classes, and reliable outcomes.',
}

const markdownComponents = {
  h1: ({ children }: { children?: ReactNode }) => (
    <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight text-[#1f1912] mb-5">{children}</h1>
  ),
  h2: ({ children }: { children?: ReactNode }) => (
    <h2 className="text-2xl font-semibold text-[#1f1912] mt-10 mb-4">{children}</h2>
  ),
  h3: ({ children }: { children?: ReactNode }) => (
    <h3 className="text-xl font-semibold text-[#1f1912] mt-8 mb-3">{children}</h3>
  ),
  p: ({ children }: { children?: ReactNode }) => (
    <p className="text-[17px] leading-relaxed text-[#2a231c] mb-5">{children}</p>
  ),
  ul: ({ children }: { children?: ReactNode }) => (
    <ul className="list-disc ml-6 space-y-2 text-[17px] text-[#2a231c] mb-6">{children}</ul>
  ),
  ol: ({ children }: { children?: ReactNode }) => (
    <ol className="list-decimal ml-6 space-y-2 text-[17px] text-[#2a231c] mb-6">{children}</ol>
  ),
  li: ({ children }: { children?: ReactNode }) => <li className="text-[17px] leading-relaxed text-[#2a231c]">{children}</li>,
  code: ({ children }: { children?: ReactNode }) => (
    <code className="font-mono text-[14px] bg-[#f5ead6] border border-[#5b4126]/15 px-1.5 py-0.5">{children}</code>
  ),
  pre: ({ children }: { children?: ReactNode }) => (
    <pre className="font-mono text-[13px] leading-relaxed whitespace-pre-wrap bg-white/50 border border-[#5b4126]/20 p-3 overflow-x-auto mb-6">
      {children}
    </pre>
  ),
  blockquote: ({ children }: { children?: ReactNode }) => (
    <blockquote className="border-l-2 border-[#5b4126]/35 pl-4 my-6 text-[17px] text-[#2a231c] italic">{children}</blockquote>
  ),
}

export default function DeterminismPage() {
  const source = readFileSync(
    path.join(process.cwd(), 'content', 'correctness', 'determinism', 'deterministic-boundaries.md'),
    'utf8',
  )

  return (
    <div className="-mx-6 md:-mx-10 mt-[-2.5rem] md:mt-[-3.5rem]">
      <section className="correctness-shell px-6 py-12 md:px-10 md:py-16">
        <article className="correctness-paper correctness-type max-w-4xl mx-auto p-7 md:p-12 space-y-8">
          <header className="space-y-4 border-b border-[#5b4126]/20 pb-8">
            <p className="text-xs uppercase tracking-[0.2em] text-[#5b4126]/70">Correctness / Page 5</p>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight text-[#1f1912]">
              Deterministic Boundaries
            </h1>
            <p className="text-base md:text-lg leading-relaxed text-[#2f261d]">
              Deterministic boundaries make probabilistic systems developable by defining explicit acceptance regions.
            </p>
          </header>

          <ReactMarkdown
            components={markdownComponents}
            remarkPlugins={[remarkGfm, remarkMath]}
            rehypePlugins={[rehypeKatex]}
          >
            {source}
          </ReactMarkdown>

          <section className="border-t border-[#5b4126]/20 pt-8 flex flex-wrap gap-3">
            <a
              href="/correctness/reliability-boundary-explorer"
              className="inline-block border border-[#5b4126]/30 px-4 py-2 text-[15px] text-[#2a231c] hover:bg-[#f8f0df] transition-colors"
            >
              &larr; Back: Using Reliability Boundaries
            </a>
            <a
              href="/correctness"
              className="inline-block border border-[#5b4126]/30 px-4 py-2 text-[15px] text-[#2a231c] hover:bg-[#f8f0df] transition-colors"
            >
              &larr; Back: Correctness Start
            </a>
          </section>
        </article>
      </section>
    </div>
  )
}

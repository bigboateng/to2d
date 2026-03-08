import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import type { ReactNode } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import { getAllDeterminismDocs, getDeterminismDocBySlug } from '@/lib/correctnessDeterminismDocs'

type DocPageProps = {
  params: {
    slug: string
  }
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
  li: ({ children }: { children?: ReactNode }) => (
    <li className="text-[17px] leading-relaxed text-[#2a231c]">{children}</li>
  ),
  code: ({ children }: { children?: ReactNode }) => (
    <code className="font-mono text-[14px] bg-[#f5ead6] border border-[#5b4126]/15 px-1.5 py-0.5">{children}</code>
  ),
  pre: ({ children }: { children?: ReactNode }) => (
    <pre className="font-mono text-[13px] leading-relaxed whitespace-pre-wrap bg-white/50 border border-[#5b4126]/20 p-3 overflow-x-auto mb-6">
      {children}
    </pre>
  ),
  table: ({ children }: { children?: ReactNode }) => (
    <div className="overflow-x-auto mb-6">
      <table className="min-w-full border-collapse border border-[#5b4126]/25">{children}</table>
    </div>
  ),
  thead: ({ children }: { children?: ReactNode }) => <thead className="bg-[#f7ecd6]/70">{children}</thead>,
  th: ({ children }: { children?: ReactNode }) => (
    <th className="border border-[#5b4126]/25 px-3 py-2 text-left text-[14px] font-semibold text-[#1f1912]">{children}</th>
  ),
  td: ({ children }: { children?: ReactNode }) => (
    <td className="border border-[#5b4126]/20 px-3 py-2 text-[14px] text-[#2a231c] align-top">{children}</td>
  ),
  blockquote: ({ children }: { children?: ReactNode }) => (
    <blockquote className="border-l-2 border-[#5b4126]/35 pl-4 my-6 text-[17px] text-[#2a231c] italic">{children}</blockquote>
  ),
  hr: () => <hr className="border-[#5b4126]/20 my-8" />,
}

export function generateStaticParams() {
  const docs = getAllDeterminismDocs()
  return docs.map((doc) => ({ slug: doc.slug }))
}

export function generateMetadata({ params }: DocPageProps): Metadata {
  const doc = getDeterminismDocBySlug(params.slug)
  if (doc === null) {
    return {
      title: 'Determinism Doc Not Found',
    }
  }
  return {
    title: doc.title,
    description: doc.excerpt,
  }
}

export default function DeterminismDocPage({ params }: DocPageProps) {
  const doc = getDeterminismDocBySlug(params.slug)
  if (doc === null) {
    notFound()
  }

  return (
    <div className="-mx-6 md:-mx-10 mt-[-2.5rem] md:mt-[-3.5rem]">
      <section className="correctness-shell px-6 py-12 md:px-10 md:py-16">
        <article className="correctness-paper correctness-type max-w-4xl mx-auto p-7 md:p-12">
          <ReactMarkdown
            components={markdownComponents}
            remarkPlugins={[remarkGfm, remarkMath]}
            rehypePlugins={[rehypeKatex]}
          >
            {doc.source}
          </ReactMarkdown>

          <section className="border-t border-[#5b4126]/20 pt-8 mt-8 flex flex-wrap gap-3">
            <a
              href="/correctness/determinism"
              className="inline-block border border-[#5b4126]/30 px-4 py-2 text-[15px] text-[#2a231c] hover:bg-[#f8f0df] transition-colors"
            >
              &larr; Back: Determinism Docs
            </a>
            <a
              href="/correctness"
              className="inline-block border border-[#5b4126]/30 px-4 py-2 text-[15px] text-[#2a231c] hover:bg-[#f8f0df] transition-colors"
            >
              Return to Correctness Start
            </a>
          </section>
        </article>
      </section>
    </div>
  )
}

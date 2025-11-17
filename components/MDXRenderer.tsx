import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { ReactNode } from 'react'

interface MDXRendererProps {
  source: MDXRemoteSerializeResult
}

const components = {
  h1: ({ children }: { children: ReactNode }) => (
    <h1 className="text-3xl font-thin tracking-tight mb-6 mt-12 first:mt-0">
      {children}
    </h1>
  ),
  h2: ({ children }: { children: ReactNode }) => (
    <h2 className="text-2xl font-thin tracking-tight mb-4 mt-10">
      {children}
    </h2>
  ),
  h3: ({ children }: { children: ReactNode }) => (
    <h3 className="text-xl font-thin tracking-tight mb-3 mt-8">
      {children}
    </h3>
  ),
  p: ({ children }: { children: ReactNode }) => (
    <p className="text-white/80 leading-relaxed mb-6">
      {children}
    </p>
  ),
  code: ({ children, className }: { children: ReactNode; className?: string }) => {
    const isInline = !className
    if (isInline) {
      return (
        <code className="font-mono text-sm bg-white/5 px-1.5 py-0.5 rounded">
          {children}
        </code>
      )
    }
    return (
      <code className={`font-mono text-sm ${className || ''}`}>
        {children}
      </code>
    )
  },
  pre: ({ children }: { children: ReactNode }) => (
    <pre className="bg-white/5 border border-white/10 p-4 rounded overflow-x-auto mb-6 font-mono text-sm">
      {children}
    </pre>
  ),
  ul: ({ children }: { children: ReactNode }) => (
    <ul className="list-none space-y-2 mb-6 pl-6">
      {children}
    </ul>
  ),
  ol: ({ children }: { children: ReactNode }) => (
    <ol className="list-decimal space-y-2 mb-6 pl-6 text-white/80">
      {children}
    </ol>
  ),
  li: ({ children }: { children: ReactNode }) => (
    <li className="text-white/80 before:content-['→'] before:mr-3 before:text-white/40">
      {children}
    </li>
  ),
  blockquote: ({ children }: { children: ReactNode }) => (
    <blockquote className="border-l-2 border-white/20 pl-6 my-6 text-white/60 italic">
      {children}
    </blockquote>
  ),
  a: ({ children, href }: { children: ReactNode; href?: string }) => (
    <a 
      href={href} 
      className="text-white underline decoration-white/30 hover:decoration-white transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  ),
}

export function MDXRenderer({ source }: MDXRendererProps) {
  return (
    <div className="prose prose-invert max-w-none">
      <MDXRemote {...source} components={components} />
    </div>
  )
}




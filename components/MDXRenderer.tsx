import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc'
import { ReactNode } from 'react'

const components = {
  h1: ({ children }: { children?: ReactNode }) => (
    <h1 className="text-3xl font-thin tracking-tight mb-6 mt-12 first:mt-0 text-[#1A1A1A]">
      {children}
    </h1>
  ),
  h2: ({ children }: { children?: ReactNode }) => (
    <h2 className="text-2xl font-thin tracking-tight mb-4 mt-10 text-[#1A1A1A]">
      {children}
    </h2>
  ),
  h3: ({ children }: { children?: ReactNode }) => (
    <h3 className="text-xl font-thin tracking-tight mb-3 mt-8 text-[#1A1A1A]">
      {children}
    </h3>
  ),
  p: ({ children }: { children?: ReactNode }) => (
    <p className="text-[#5A5A5A] leading-relaxed mb-6">
      {children}
    </p>
  ),
  code: ({ children, className }: { children?: ReactNode; className?: string }) => {
    const isInline = !className
    if (isInline) {
      return (
        <code className="font-mono text-sm bg-[#F2F2F0] px-1.5 py-0.5 rounded text-[#2A2A2A]">
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
  pre: ({ children }: { children?: ReactNode }) => (
    <pre className="bg-[#FFFFFF] border border-[#DADADA] p-4 rounded overflow-x-auto mb-6 font-mono text-sm text-[#2A2A2A]">
      {children}
    </pre>
  ),
  ul: ({ children }: { children?: ReactNode }) => (
    <ul className="list-none space-y-2 mb-6 pl-6">
      {children}
    </ul>
  ),
  ol: ({ children }: { children?: ReactNode }) => (
    <ol className="list-decimal space-y-2 mb-6 pl-6 text-[#5A5A5A]">
      {children}
    </ol>
  ),
  li: ({ children }: { children?: ReactNode }) => (
    <li className="text-[#5A5A5A] before:content-['→'] before:mr-3 before:text-[#DADADA]">
      {children}
    </li>
  ),
  blockquote: ({ children }: { children?: ReactNode }) => (
    <blockquote className="border-l-2 border-[#E8E8E6] pl-6 my-6 text-[#8C8C8C] italic">
      {children}
    </blockquote>
  ),
  a: ({ children, href }: { children?: ReactNode; href?: string }) => (
    <a
      href={href}
      className="text-[#1A1A1A] underline decoration-[#DADADA] hover:decoration-[#B5B5B5] transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  ),
}

interface MDXRendererProps {
  source: string
  options?: Omit<MDXRemoteProps, 'source' | 'components'>
}

export function MDXRenderer({ source, options }: MDXRendererProps) {
  return (
    <div className="prose max-w-none">
      <MDXRemote source={source} components={components} {...options} />
    </div>
  )
}

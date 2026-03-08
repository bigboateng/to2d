'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'

const navSections = [
  {
    heading: 'Overview',
    links: [{ href: '/', label: 'Overview' }],
  },
  {
    heading: 'Architecture',
    links: [
      { href: '/architecture/system-identification', label: 'System Identification' },
      { href: '/architecture/stochastic-core', label: 'Stochastic Core' },
      { href: '/architecture/invariant-boundary', label: 'Invariant Boundary' },
      { href: '/architecture/zero-context-architecture', label: 'Zero-Context Architecture' },
    ],
  },
  {
    heading: 'Systems',
    links: [
      { href: '/systems/browser-agents', label: 'Browser Agents' },
      { href: '/systems/structured-output-correctness', label: 'Structured Output Correctness' },
      { href: '/systems/agent-harness', label: 'Agent Harness' },
      { href: '/systems/reliability-loops', label: 'Reliability Loops' },
    ],
  },
  {
    heading: 'Correctness',
    links: [{ href: '/correctness', label: 'Reliability Boundary' }],
  },
  {
    heading: 'Primitives',
    links: [
      { href: '/primitives/contracts', label: 'Contracts' },
      { href: '/primitives/invariants', label: 'Invariants' },
      { href: '/primitives/projection', label: 'Projection' },
      { href: '/primitives/canonicalization', label: 'Canonicalization' },
    ],
  },
  {
    heading: 'Research',
    links: [
      { href: '/research/control-systems', label: 'Control Systems' },
      { href: '/research/control-systems-ai', label: 'Control Systems × AI' },
      { href: '/research/language-models', label: 'Language Models' },
    ],
  },
  {
    heading: 'Open Source',
    links: [{ href: '/open-source', label: 'Open Source' }],
  },
]

export function SideNav() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const isCorrectness = pathname === '/correctness' || pathname.startsWith('/correctness/')

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + '/')

  return (
    <>
      <button
        onClick={() => { setMobileOpen(!mobileOpen) }}
        className={`
          md:hidden fixed top-5 left-4 z-50 border p-2 backdrop-blur
          ${isCorrectness ? 'border-[#5b4126]/35 bg-[#f6eddd]/80 text-[#3a2d1f]' : 'border-white/10 bg-black/80'}
        `}
        aria-label="Toggle navigation"
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5">
          {mobileOpen ? (
            <path d="M4 4l10 10M14 4L4 14" />
          ) : (
            <path d="M2 5h14M2 9h14M2 13h14" />
          )}
        </svg>
      </button>

      <nav
        className={`
          fixed top-0 left-0 h-screen w-56 border-r
          flex flex-col py-7 px-5 z-40
          transition-transform duration-200
          ${isCorrectness ? 'border-[#5b4126]/20 bg-[#f2e7d3]/90 text-[#2b221a]' : 'border-white/10 bg-black'}
          ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0
        `}
      >
        <a
          href="/"
          className={`
            text-lg font-light tracking-tight mb-8 transition-colors
            ${isCorrectness ? 'hover:text-[#5b4126]' : 'hover:text-white/70'}
          `}
        >
          TO2D
        </a>

        <div className="flex-1 space-y-7 overflow-y-auto pr-1">
          {navSections.map((section) => (
            <div
              key={section.heading}
              className={`
                first:pt-0 border-t pt-5 first:border-t-0
                ${isCorrectness ? 'border-[#5b4126]/18' : 'border-white/10'}
              `}
            >
              <p
                className={`
                  text-[10px] font-mono tracking-[0.2em] uppercase mb-3
                  ${isCorrectness ? 'text-[#5b4126]/70' : 'text-white/35'}
                `}
              >
                {section.heading}
              </p>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => { setMobileOpen(false) }}
                      className={`
                        block text-sm transition-colors
                        ${
                          isActive(link.href)
                            ? (isCorrectness ? 'text-[#1f1912] font-medium' : 'text-white')
                            : (isCorrectness ? 'text-[#5b4126]/80 hover:text-[#1f1912]' : 'text-white/50 hover:text-white/80')
                        }
                      `}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </nav>

      {mobileOpen && (
        <div
          className={`fixed inset-0 z-30 md:hidden ${isCorrectness ? 'bg-[#2a2118]/35' : 'bg-black/60'}`}
          onClick={() => { setMobileOpen(false) }}
        />
      )}
    </>
  )
}

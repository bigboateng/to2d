'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

type NavLink = {
  href: string
  label: string
  children?: NavLink[]
}

type NavSection = {
  heading: string
  links: NavLink[]
}

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
    links: [
      {
        href: '/correctness',
        label: 'Reliability Boundaries',
        children: [
          { href: '/correctness/where-reliability-boundaries-appear', label: 'Where Boundaries Appear' },
          { href: '/correctness/reliability-boundaries-in-practice', label: 'Boundaries in Practice' },
          { href: '/correctness/reliability-boundary-explorer', label: 'Using Boundaries' },
        ],
      },
      {
        href: '/correctness/determinism',
        label: 'Deterministic Boundaries',
        children: [
          { href: '/correctness/structured-output-boundaries', label: 'Structured Output Contracts' },
          { href: '/correctness/boundary-tracing', label: 'Boundary Tracing' },
          { href: '/correctness/boundary-inspection', label: 'Boundary Inspection' },
        ],
      },
    ],
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
] satisfies NavSection[]

type ShellAppearance = 'dark' | 'light' | 'correctness'

type SideNavProps = {
  appearance: ShellAppearance
}

export function SideNav({ appearance }: SideNavProps) {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const isCorrectness = appearance === 'correctness'
  const isLight = appearance === 'light'

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + '/')

  const hasActiveChild = (link: NavLink): boolean => {
    if (!link.children) {
      return false
    }
    return link.children.some((child) => isActive(child.href))
  }

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <>
      <button
        onClick={() => { setMobileOpen(!mobileOpen) }}
        className={`
          md:hidden fixed top-3 right-4 z-50 border p-2 backdrop-blur
          ${isCorrectness ? 'border-[#5b4126]/35 bg-[#f6eddd]/80 text-[#3a2d1f]' : ''}
          ${isLight ? 'border-[#2f261d]/25 bg-[#f4f2ed]/90 text-[#1f1912]' : ''}
          ${!isCorrectness && !isLight ? 'border-white/10 bg-black/80' : ''}
        `}
        aria-label="Toggle navigation"
        aria-expanded={mobileOpen}
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
          fixed top-0 left-0 h-screen w-[84vw] max-w-xs md:w-56 border-r
          flex flex-col py-7 px-5 z-40
          transition-transform duration-200
          ${isCorrectness ? 'border-[#5b4126]/20 bg-[#f2e7d3]/90 text-[#2b221a]' : ''}
          ${isLight ? 'border-[#2f261d]/15 bg-[#f6f4ef]/95 text-[#1f1912]' : ''}
          ${!isCorrectness && !isLight ? 'border-white/10 bg-black' : ''}
          ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0
        `}
      >
        <a
          href="/"
          className={`
            text-lg font-light tracking-tight mb-8 transition-colors
            ${isCorrectness ? 'hover:text-[#5b4126]' : ''}
            ${isLight ? 'hover:text-[#3d342a]' : ''}
            ${!isCorrectness && !isLight ? 'hover:text-white/70' : ''}
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
                ${isCorrectness ? 'border-[#5b4126]/18' : ''}
                ${isLight ? 'border-[#2f261d]/12' : ''}
                ${!isCorrectness && !isLight ? 'border-white/10' : ''}
              `}
            >
              <p
                className={`
                  text-[10px] font-mono tracking-[0.2em] uppercase mb-3
                  ${isCorrectness ? 'text-[#5b4126]/70' : ''}
                  ${isLight ? 'text-[#4b4339]/70' : ''}
                  ${!isCorrectness && !isLight ? 'text-white/35' : ''}
                `}
              >
                {section.heading}
              </p>
              <ul className="space-y-2">
                {section.links.map((link) => {
                  const isLinkActive = isActive(link.href) || hasActiveChild(link)
                  return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => { setMobileOpen(false) }}
                      className={`
                        block text-sm transition-colors
                        ${
                          isLinkActive
                            ? (isCorrectness ? 'text-[#1f1912] font-medium' : (isLight ? 'text-[#1f1912] font-medium' : 'text-white'))
                            : (
                                isCorrectness
                                  ? 'text-[#5b4126]/80 hover:text-[#1f1912]'
                                  : (isLight ? 'text-[#3f372f]/75 hover:text-[#1f1912]' : 'text-white/50 hover:text-white/80')
                              )
                        }
                      `}
                    >
                      {link.label}
                    </a>
                    {link.children && (
                      <ul className="mt-2 ml-3 space-y-1.5 border-l border-current/20 pl-3">
                        {link.children.map((childLink) => (
                          <li key={childLink.href}>
                            <a
                              href={childLink.href}
                              onClick={() => { setMobileOpen(false) }}
                              className={`
                                block text-[13px] transition-colors
                                ${
                                  isActive(childLink.href)
                                    ? (isCorrectness ? 'text-[#1f1912] font-medium' : (isLight ? 'text-[#1f1912] font-medium' : 'text-white'))
                                    : (
                                        isCorrectness
                                          ? 'text-[#5b4126]/70 hover:text-[#1f1912]'
                                          : (isLight ? 'text-[#3f372f]/65 hover:text-[#1f1912]' : 'text-white/45 hover:text-white/80')
                                      )
                                }
                              `}
                            >
                              {childLink.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>
      </nav>

      {mobileOpen && (
        <div
          className={`
            fixed inset-0 z-30 md:hidden
            ${isCorrectness ? 'bg-[#2a2118]/35' : ''}
            ${isLight ? 'bg-[#1f1912]/20' : ''}
            ${!isCorrectness && !isLight ? 'bg-black/60' : ''}
          `}
          onClick={() => { setMobileOpen(false) }}
        />
      )}
    </>
  )
}

'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

type Status = 'stable' | 'wip' | 'note'

type NavLink = {
  href: string
  label: string
  status?: Status
  children?: NavLink[]
}

type NavSection = {
  heading: string
  links: NavLink[]
}

const navSections = [
  {
    heading: 'Foundations',
    links: [
      { href: '/', label: 'Overview', status: 'wip' as Status },
      { href: '/real-world-dynamics', label: 'Real-World Dynamics', status: 'wip' as Status },
      { href: '/language-models', label: 'Language Models', status: 'wip' as Status },
    ],
  },
  {
    heading: 'Operators',
    links: [
      { href: '/language-models/llms-in-software-systems', label: 'LLMs in Software Systems', status: 'wip' as Status },
      { href: '/language-models/domain-operators', label: 'Domain Operators', status: 'wip' as Status },
      { href: '/language-models/representation-mapping', label: 'Representation Mapping', status: 'wip' as Status },
      { href: '/language-models/error-signals', label: 'Error Signals', status: 'wip' as Status },
      { href: '/language-models/environment-discovery', label: 'Environment Discovery', status: 'wip' as Status },
    ],
  },
  {
    heading: 'System Models',
    links: [
      { href: '/architecture', label: 'System Models', status: 'wip' as Status },
      { href: '/architecture/system-identification', label: 'System Identification', status: 'wip' as Status },
      { href: '/architecture/stochastic-core', label: 'Stochastic Core', status: 'wip' as Status },
      { href: '/architecture/invariant-boundary', label: 'Invariant Boundary', status: 'wip' as Status },
      { href: '/architecture/zero-context-architecture', label: 'Zero-Context Architecture', status: 'wip' as Status },
      { href: '/architecture/fuzzy-systems', label: 'Fuzzy Systems', status: 'wip' as Status },
    ],
  },
  {
    heading: 'Applications',
    links: [
      { href: '/systems', label: 'Operator Systems', status: 'stable' as Status },
      { href: '/systems/browser-agents', label: 'Browser Agents', status: 'wip' as Status },
      { href: '/systems/browser-state', label: 'Browser State', status: 'wip' as Status },
      { href: '/systems/structured-output-systems', label: 'Structured Output Systems', status: 'wip' as Status },
    ],
  },
  {
    heading: 'Architecture',
    links: [
      {
        href: '/correctness',
        label: 'Reliability Boundaries',
        status: 'stable' as Status,
        children: [
          { href: '/correctness/where-reliability-boundaries-appear', label: 'Where Boundaries Appear', status: 'stable' as Status },
          { href: '/correctness/reliability-boundaries-in-practice', label: 'Boundaries in Practice', status: 'stable' as Status },
          { href: '/correctness/reliability-boundary-explorer', label: 'Using Boundaries', status: 'stable' as Status },
        ],
      },
      { href: '/correctness/deterministic-boundaries', label: 'Deterministic Boundaries', status: 'stable' as Status },
    ],
  },
  {
    heading: 'Primitives',
    links: [
      { href: '/primitives', label: 'Primitives', status: 'wip' as Status },
      { href: '/primitives/contracts', label: 'Contracts', status: 'wip' as Status },
      { href: '/primitives/invariants', label: 'Invariants', status: 'wip' as Status },
      { href: '/primitives/projection', label: 'Projection', status: 'wip' as Status },
      { href: '/primitives/canonicalization', label: 'Canonicalization', status: 'wip' as Status },
    ],
  },
  {
    heading: 'Research',
    links: [
      { href: '/research', label: 'Research', status: 'wip' as Status },
      { href: '/research/control-systems', label: 'Control Systems', status: 'wip' as Status },
      { href: '/research/control-systems-ai', label: 'Control Systems × AI', status: 'wip' as Status },
    ],
  },
  {
    heading: 'Open Source',
    links: [{ href: '/open-source', label: 'TO2D', status: 'wip' as Status }],
  },
] satisfies NavSection[]

function StatusDot({ status, active }: { status?: Status; active?: boolean }) {
  if (!status) {
    return null
  }

  const color =
    status === 'stable' ? 'var(--color-stable)'
    : status === 'wip' ? 'var(--color-wip)'
    : 'var(--color-note)'

  const symbol =
    status === 'stable' ? '●'
    : status === 'wip' ? '◍'
    : '◦'

  return (
    <span
      className={`text-[10px] font-medium leading-none shrink-0 ${active ? 'animate-[statusPulse_3s_ease-in-out_infinite]' : ''}`}
      style={{ color }}
    >
      {symbol}
    </span>
  )
}

export function SideNav() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

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
        className="md:hidden fixed top-3 right-4 z-50 border border-[#DADADA] bg-[#F1F1EE]/95 dark:bg-[#0D0D0D]/95 text-[#3A3A3A] p-2 backdrop-blur-sm transition-colors"
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
          border-[#E8E8E6] bg-[#F1F1EE] dark:bg-[#0D0D0D] text-[#3A3A3A]
          flex flex-col py-7 px-5 z-40
          transition-transform duration-200 transition-colors
          ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0
        `}
      >
        <a
          href="/"
          className="text-lg font-light tracking-tight text-[#1A1A1A] mb-5 transition-colors hover:text-[#111111]"
        >
          TO2D
        </a>

        <div className="flex items-center gap-4 mb-6 pb-4 border-b border-[#E8E8E6] text-[8px] font-mono tracking-wider">
          <span className="flex items-center gap-1.5">
            <span className="text-[10px] font-medium leading-none" style={{ color: 'var(--color-stable)' }}>●</span>
            <span className="text-[#8C8C8C]">stable</span>
          </span>
          <span className="flex items-center gap-1.5">
            <span className="text-[10px] font-medium leading-none" style={{ color: 'var(--color-wip)' }}>◍</span>
            <span className="text-[#8C8C8C]">research</span>
          </span>
          <span className="flex items-center gap-1.5">
            <span className="text-[10px] font-medium leading-none" style={{ color: 'var(--color-note)' }}>◦</span>
            <span className="text-[#8C8C8C]">note</span>
          </span>
        </div>

        <div className="flex-1 space-y-7 overflow-y-auto pr-1">
          {navSections.map((section) => (
            <div
              key={section.heading}
              className="first:pt-0 border-t border-[#E8E8E6] pt-5 first:border-t-0"
            >
              <p className="text-[10px] font-mono tracking-[0.2em] uppercase mb-3 text-[#8C8C8C]">
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
                        flex items-center justify-between gap-2 text-sm transition-colors
                        ${
                          isLinkActive
                            ? 'text-[#111111] font-medium'
                            : 'text-[#5A5A5A] hover:text-[#1A1A1A]'
                        }
                      `}
                    >
                      <span>{link.label}</span>
                      <StatusDot status={link.status} active={isLinkActive} />
                    </a>
                    {link.children && (
                      <ul className="mt-2 ml-3 space-y-1.5 border-l border-[#E8E8E6] pl-3">
                        {link.children.map((childLink) => (
                          <li key={childLink.href}>
                            <a
                              href={childLink.href}
                              onClick={() => { setMobileOpen(false) }}
                              className={`
                                flex items-center justify-between gap-2 text-[13px] transition-colors
                                ${
                                  isActive(childLink.href)
                                    ? 'text-[#111111] font-medium'
                                    : 'text-[#8C8C8C] hover:text-[#1A1A1A]'
                                }
                              `}
                            >
                              <span>{childLink.label}</span>
                              <StatusDot status={childLink.status} active={isActive(childLink.href)} />
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
          className="fixed inset-0 z-30 md:hidden bg-[#1A1A1A]/15 dark:bg-[#000000]/40"
          onClick={() => { setMobileOpen(false) }}
        />
      )}
    </>
  )
}

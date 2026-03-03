'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'

const architectureLinks = [
  { href: '/architecture', label: 'Overview' },
  { href: '/architecture/system-identification', label: 'System Identification' },
  { href: '/architecture/stochastic-core', label: 'Stochastic Core' },
  { href: '/architecture/invariant-boundary', label: 'Invariant Boundary' },
  { href: '/architecture/ai-reliability', label: 'AI Reliability' },
]

const researchLinks = [
  { href: '/control-systems', label: 'Control Systems' },
  { href: '/control-systems-ai', label: 'Control Systems × AI' },
  { href: '/language-models', label: 'Language Models' },
  { href: '/open-source', label: 'Open Source' },
]

export function SideNav() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + '/')

  return (
    <>
      <button
        onClick={() => { setMobileOpen(!mobileOpen) }}
        className="md:hidden fixed top-5 left-4 z-50 border border-white/10 p-2 bg-black/80 backdrop-blur"
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
          fixed top-0 left-0 h-screen w-56 border-r border-white/10 bg-black
          flex flex-col py-8 px-5 z-40
          transition-transform duration-200
          ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0
        `}
      >
        <a href="/" className="text-lg font-thin tracking-tight mb-10 hover:text-white/70 transition-colors">
          to2d
        </a>

        <div className="flex-1 space-y-8 overflow-y-auto">
          <div>
            <p className="text-[10px] font-mono tracking-[0.2em] text-white/80 uppercase mb-4">
              Architecture <span className="text-white/30">2026–</span>
            </p>
            <ul className="space-y-2">
              {architectureLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => { setMobileOpen(false) }}
                    className={`
                      block text-sm font-light transition-colors
                      ${isActive(link.href) ? 'text-white' : 'text-white/50 hover:text-white/80'}
                    `}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-white/10 pt-6">
            <p className="text-[10px] font-mono tracking-[0.2em] text-white/40 uppercase mb-4">
              Research <span className="text-white/20">2018–2025</span>
            </p>
            <ul className="space-y-2">
              {researchLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => { setMobileOpen(false) }}
                    className={`
                      block text-sm font-light transition-colors
                      ${isActive(link.href) ? 'text-white/70' : 'text-white/30 hover:text-white/50'}
                    `}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-30 md:hidden"
          onClick={() => { setMobileOpen(false) }}
        />
      )}
    </>
  )
}

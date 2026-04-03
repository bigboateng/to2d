'use client'

import Link from 'next/link'
import { SideNav } from '@/components/SideNav'
import { ThemeToggle } from '@/components/ThemeToggle'

function LinkedInLink() {
  return (
    <a
      href="https://www.linkedin.com/in/byeboah/?skipRedirect=true"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn profile"
      title="LinkedIn profile"
      className="w-7 h-7 flex items-center justify-center rounded text-[#5A5A5A] transition-colors hover:bg-[#E8E8E6] hover:text-[#1A1A1A] dark:hover:bg-[#222222]"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M4.98 3.5C4.98 4.88 3.87 6 2.49 6A2.5 2.5 0 0 1 0 3.5 2.5 2.5 0 0 1 2.49 1 2.5 2.5 0 0 1 4.98 3.5ZM.5 8h4V23h-4V8ZM8 8h3.83v2.05h.06c.53-1.01 1.84-2.08 3.79-2.08 4.05 0 4.8 2.67 4.8 6.13V23h-4v-6.98c0-1.66-.03-3.79-2.31-3.79-2.31 0-2.67 1.8-2.67 3.67V23H8V8Z" />
      </svg>
    </a>
  )
}

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen relative flex" style={{ zIndex: 1 }}>
      <SideNav />

      <div className="flex-1 min-w-0 md:ml-56">
        <header className="sticky top-0 z-20 px-4 py-3 sm:px-6 md:px-10 md:py-7 border-b border-[#E8E8E6] bg-[#F7F7F5]/95 dark:bg-[#111111]/95 backdrop-blur-sm transition-colors">
          <div className="flex items-center justify-between md:hidden pr-24">
            <Link
              href="/"
              className="text-lg font-light tracking-tight text-[#1A1A1A] hover:text-[#111111] transition-colors"
            >
              TO2D
            </Link>
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <LinkedInLink />
              <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#8C8C8C]">
                Architecture Lab
              </p>
            </div>
          </div>
          <div className="hidden md:flex items-center justify-between">
            <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#8C8C8C]">
              TO2D
            </p>
            <div className="flex items-center gap-4">
              <p className="text-xs text-[#8C8C8C]">
                Reliable AI Systems for Real-World Software
              </p>
              <LinkedInLink />
              <ThemeToggle />
            </div>
          </div>
        </header>

        <main className="w-full max-w-5xl px-4 py-12 sm:px-6 md:px-10 md:py-20">
          <div className="page-enter">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}

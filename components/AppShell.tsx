'use client'

import { SideNav } from '@/components/SideNav'
import { ThemeToggle } from '@/components/ThemeToggle'

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen relative flex" style={{ zIndex: 1 }}>
      <SideNav />

      <div className="flex-1 min-w-0 md:ml-56">
        <header className="sticky top-0 z-20 px-4 py-3 sm:px-6 md:px-10 md:py-7 border-b border-[#E8E8E6] bg-[#F7F7F5]/95 dark:bg-[#111111]/95 backdrop-blur-sm transition-colors">
          <div className="flex items-center justify-between md:hidden pr-24">
            <a
              href="/"
              className="text-lg font-light tracking-tight text-[#1A1A1A] hover:text-[#111111] transition-colors"
            >
              TO2D
            </a>
            <div className="flex items-center gap-3">
              <ThemeToggle />
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
                Reliable AI Systems
              </p>
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

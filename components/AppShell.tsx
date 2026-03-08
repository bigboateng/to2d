'use client'

import { usePathname } from 'next/navigation'
import { SideNav } from '@/components/SideNav'
import { UnifiedBackground } from '@/components/UnifiedBackground'

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isCorrectness = pathname === '/correctness' || pathname.startsWith('/correctness/')

  return (
    <>
      {!isCorrectness && <UnifiedBackground density={1} speed={1} opacityFactor={0.04} />}

      <div
        className={`min-h-screen relative flex ${isCorrectness ? 'correctness-shell text-[#251f19]' : ''}`}
        style={{ zIndex: 1 }}
      >
        <SideNav />

        <div className="flex-1 min-w-0 md:ml-56">
          <header className={`px-6 py-5 md:px-10 md:py-7 ${isCorrectness ? 'border-b border-[#5b4126]/20 bg-[#f1e6d1]/70' : 'border-b border-white/10'}`}>
            <a
              href="/"
              className={`text-xl font-light tracking-tight transition-colors md:hidden ${isCorrectness ? 'text-[#3a2d1f] hover:text-[#5b4126]' : 'hover:text-white/70'}`}
            >
              to2d
            </a>
            <div className="hidden md:flex items-center justify-between">
              <p className={`text-[10px] font-mono uppercase tracking-[0.2em] ${isCorrectness ? 'text-[#5b4126]/80' : 'text-white/40'}`}>
                TO2D
              </p>
              <p className={`text-xs ${isCorrectness ? 'text-[#5b4126]/75 correctness-type' : 'text-white/35'}`}>
                {isCorrectness ? 'Correctness Papers and Boundary Notes' : 'Architectures for Reliable AI Systems'}
              </p>
            </div>
          </header>
          <main className="max-w-5xl px-6 py-12 md:px-10 md:py-14">
            <div key={isCorrectness ? pathname : 'default-shell'} className={isCorrectness ? 'correctness-page-enter' : ''}>
              {children}
            </div>
          </main>
        </div>
      </div>
    </>
  )
}

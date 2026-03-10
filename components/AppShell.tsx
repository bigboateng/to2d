'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { SideNav } from '@/components/SideNav'
import { UnifiedBackground } from '@/components/UnifiedBackground'

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isCorrectness = pathname === '/correctness' || pathname.startsWith('/correctness/')
  const [themeMode, setThemeMode] = useState<'dark' | 'light'>('dark')
  const isLight = !isCorrectness && themeMode === 'light'
  const appearance = isCorrectness ? 'correctness' : (isLight ? 'light' : 'dark')

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('to2d-theme-mode')
    if (savedTheme === 'light' || savedTheme === 'dark') {
      setThemeMode(savedTheme)
    }
  }, [])

  const toggleTheme = (): void => {
    setThemeMode((prev) => {
      const nextTheme = prev === 'dark' ? 'light' : 'dark'
      window.localStorage.setItem('to2d-theme-mode', nextTheme)
      return nextTheme
    })
  }

  return (
    <>
      {!isCorrectness && !isLight && <UnifiedBackground density={1} speed={1} opacityFactor={0.04} />}

      <div
        className={`min-h-screen relative flex ${isCorrectness ? 'correctness-shell text-[#251f19]' : ''} ${isLight ? 'to2d-light-shell' : ''}`}
        style={{ zIndex: 1 }}
      >
        <SideNav appearance={appearance} />

        <div className="flex-1 min-w-0 md:ml-56">
          <header
            className={`sticky top-0 z-20 px-4 py-3 sm:px-6 md:px-10 md:py-7 ${
              isCorrectness
                ? 'border-b border-[#5b4126]/20 bg-[#f1e6d1]/90'
                : (isLight ? 'border-b border-[#2f261d]/15 bg-[#f6f4ef]/95' : 'border-b border-white/10 bg-black/70 backdrop-blur')
            }`}
          >
            <div className="flex items-center justify-between md:hidden pr-24">
              <a
                href="/"
                className={`
                  text-lg font-light tracking-tight transition-colors
                  ${isCorrectness ? 'text-[#3a2d1f] hover:text-[#5b4126]' : ''}
                  ${isLight ? 'text-[#1f1912] hover:text-[#3d342a]' : ''}
                  ${!isCorrectness && !isLight ? 'hover:text-white/70' : ''}
                `}
              >
                TO2D
              </a>
              <p
                className={`
                  text-[10px] font-mono uppercase tracking-[0.2em]
                  ${isCorrectness ? 'text-[#5b4126]/75' : ''}
                  ${isLight ? 'text-[#4b4339]/70' : ''}
                  ${!isCorrectness && !isLight ? 'text-white/40' : ''}
                `}
              >
                Architecture Lab
              </p>
            </div>
            <div className="hidden md:flex items-center justify-between">
              <p
                className={`
                  text-[10px] font-mono uppercase tracking-[0.2em]
                  ${isCorrectness ? 'text-[#5b4126]/80' : ''}
                  ${isLight ? 'text-[#4b4339]/75' : ''}
                  ${!isCorrectness && !isLight ? 'text-white/40' : ''}
                `}
              >
                TO2D
              </p>
              <div className="flex items-center gap-3">
                <p
                  className={`
                    text-xs
                    ${isCorrectness ? 'text-[#5b4126]/75 correctness-type' : ''}
                    ${isLight ? 'text-[#4b4339]/70' : ''}
                    ${!isCorrectness && !isLight ? 'text-white/35' : ''}
                  `}
                >
                  {isCorrectness ? 'Correctness Papers and Boundary Notes' : 'Architectures for Reliable AI Systems'}
                </p>
                {!isCorrectness && (
                  <button
                    type="button"
                    onClick={toggleTheme}
                    className={`
                      border px-2.5 py-1 text-[11px] uppercase tracking-[0.12em] transition-colors
                      ${isLight ? 'border-[#2f261d]/25 text-[#1f1912] hover:bg-[#ece7dd]' : 'border-white/15 text-white/70 hover:border-white/30 hover:text-white'}
                    `}
                  >
                    {isLight ? 'Dark' : 'Light'}
                  </button>
                )}
              </div>
            </div>
          </header>
          {!isCorrectness && (
            <button
              type="button"
              onClick={toggleTheme}
              className={`
                fixed top-3 right-[3.7rem] z-50 md:hidden border px-2 py-1 text-[11px] uppercase tracking-[0.12em] transition-colors
                ${isLight ? 'border-[#2f261d]/25 bg-[#f4f2ed]/90 text-[#1f1912]' : 'border-white/15 bg-black/70 text-white/75'}
              `}
            >
              {isLight ? 'Dark' : 'Light'}
            </button>
          )}
          <main className="w-full max-w-5xl px-4 py-8 sm:px-6 md:px-10 md:py-14">
            <div key={isCorrectness ? pathname : `shell-${themeMode}`} className={isCorrectness ? 'correctness-page-enter' : ''}>
              {children}
            </div>
          </main>
        </div>
      </div>
    </>
  )
}

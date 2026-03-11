'use client'

import { useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

function getStoredTheme(): Theme | null {
  if (typeof window === 'undefined') {
    return null
  }
  return localStorage.getItem('theme') as Theme | null
}

function getSystemTheme(): Theme {
  if (typeof window === 'undefined') {
    return 'light'
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function applyTheme(theme: Theme) {
  const root = document.documentElement
  if (theme === 'dark') {
    root.classList.add('dark')
  } else {
    root.classList.remove('dark')
  }
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('light')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const stored = getStoredTheme()
    const resolved = stored ?? getSystemTheme()
    setTheme(resolved)
    applyTheme(resolved)
    setMounted(true)
  }, [])

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handler = (e: MediaQueryListEvent) => {
      if (!getStoredTheme()) {
        const next = e.matches ? 'dark' : 'light'
        setTheme(next)
        applyTheme(next)
      }
    }
    mediaQuery.addEventListener('change', handler)
    return () => { mediaQuery.removeEventListener('change', handler) }
  }, [])

  const toggle = () => {
    const next: Theme = theme === 'light' ? 'dark' : 'light'
    setTheme(next)
    applyTheme(next)
    localStorage.setItem('theme', next)
  }

  if (!mounted) {
    return <div className="w-7 h-7" />
  }

  return (
    <button
      onClick={toggle}
      className="w-7 h-7 flex items-center justify-center rounded transition-colors hover:bg-[#E8E8E6] dark:hover:bg-[#222222]"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7.5 1.5v1M7.5 12.5v1M12 3L11.2 3.8M3.8 11.2L3 12M13.5 7.5h-1M2.5 7.5h-1M12 12l-.8-.8M3.8 3.8L3 3" />
          <circle cx="7.5" cy="7.5" r="2.5" />
        </svg>
      ) : (
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M13 9.5A5.5 5.5 0 0 1 5.5 2 5.5 5.5 0 1 0 13 9.5z" />
        </svg>
      )}
    </button>
  )
}

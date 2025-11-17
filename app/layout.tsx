import type { Metadata } from 'next'
import './globals.css'
import { UnifiedBackground } from '@/components/UnifiedBackground'
import { ThemeProvider } from '@/components/ThemeProvider'
import { ThemeToggle } from '@/components/ThemeToggle'

export const metadata: Metadata = {
  title: 'to2d',
  description: 'A space for ideas, notes, and ongoing work',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('theme') || 
                  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                document.documentElement.classList.add(theme);
              })();
            `,
          }}
        />
      </head>
      <body>
        <ThemeProvider>
          <UnifiedBackground density={1} speed={1} opacityFactor={0.04} />
          <div className="min-h-screen relative" style={{ zIndex: 1 }}>
            <header className="border-b border-white/10 dark:border-white/10 light:border-black/10 px-6 py-6">
            <div className="max-w-5xl mx-auto">
              <div className="mb-6 flex justify-between items-start">
                <div>
                  <a href="/" className="text-2xl font-thin tracking-tight hover:text-white/70 dark:hover:text-white/70 light:hover:text-black/70 transition-colors">
                    to2d
                  </a>
                  <p className="text-white/40 dark:text-white/40 light:text-black/40 text-sm mt-1 font-light">
                    A space for ideas, notes, and ongoing work.
                  </p>
                </div>
                <ThemeToggle />
              </div>
              <nav className="flex gap-x-6 gap-y-2 flex-wrap text-sm font-mono">
                <a href="/control-systems" className="text-white/60 hover:text-white dark:text-white/60 dark:hover:text-white light:text-black/60 light:hover:text-black transition-colors">
                  control systems
                </a>
                <a href="/automations" className="text-white/60 hover:text-white dark:text-white/60 dark:hover:text-white light:text-black/60 light:hover:text-black transition-colors">
                  automations
                </a>
                <a href="/pre-ai-research" className="text-white/60 hover:text-white dark:text-white/60 dark:hover:text-white light:text-black/60 light:hover:text-black transition-colors">
                  pre-ai research
                </a>
                <a href="/ai-era" className="text-white/60 hover:text-white dark:text-white/60 dark:hover:text-white light:text-black/60 light:hover:text-black transition-colors">
                  ai era
                </a>
                <a href="/transfer" className="text-white/60 hover:text-white dark:text-white/60 dark:hover:text-white light:text-black/60 light:hover:text-black transition-colors">
                  transfer
                </a>
                <a href="/tools" className="text-white/60 hover:text-white dark:text-white/60 dark:hover:text-white light:text-black/60 light:hover:text-black transition-colors">
                  tools
                </a>
                <a href="/coolstuff" className="text-white/60 hover:text-white dark:text-white/60 dark:hover:text-white light:text-black/60 light:hover:text-black transition-colors">
                  cool stuff
                </a>
                <a href="/contact" className="text-white/60 hover:text-white dark:text-white/60 dark:hover:text-white light:text-black/60 light:hover:text-black transition-colors">
                  contact
                </a>
              </nav>
            </div>
          </header>
          <main className="max-w-5xl mx-auto px-6 py-12">
            {children}
          </main>
        </div>
        </ThemeProvider>
      </body>
    </html>
  )
}


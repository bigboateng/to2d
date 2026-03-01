import type { Metadata } from 'next'
import './globals.css'
import { UnifiedBackground } from '@/components/UnifiedBackground'
import { Analytics } from '@vercel/analytics/react'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.to2d.xyz'),
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
      <body>
        <UnifiedBackground density={1} speed={1} opacityFactor={0.04} />
        
        <div className="min-h-screen relative" style={{ zIndex: 1 }}>
          <header className="border-b border-white/10 px-6 py-6">
            <div className="max-w-5xl mx-auto">
              <div className="mb-6">
                <a href="/" className="text-2xl font-thin tracking-tight hover:text-white/70 transition-colors">
                  to2d
                </a>
                <p className="text-white/40 text-sm mt-1 font-light">
                  A space for ideas, notes, and ongoing work.
                </p>
              </div>
              <nav className="flex gap-x-6 gap-y-2 flex-wrap text-sm font-mono">
                <a href="/control-systems" className="text-white/60 hover:text-white transition-colors">
                  control systems
                </a>
                <a href="/control-systems-ai" className="text-white/60 hover:text-white transition-colors">
                  control systems × ai
                </a>
                <a href="/language-models" className="text-white/60 hover:text-white transition-colors">
                  language models
                </a>
                <a href="/open-source" className="text-white/60 hover:text-white transition-colors">
                  open source
                </a>
              </nav>
            </div>
          </header>
          <main className="max-w-5xl mx-auto px-6 py-12">
            {children}
          </main>
        </div>
        <Analytics />
      </body>
    </html>
  )
}


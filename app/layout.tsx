import type { Metadata } from 'next'
import './globals.css'
import { UnifiedBackground } from '@/components/UnifiedBackground'
import { Analytics } from '@vercel/analytics/react'
import { SideNav } from '@/components/SideNav'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.to2d.xyz'),
  title: 'to2d',
  description: 'Formalizing AI reliability through control theory, system identification, and structural invariants.',
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

        <div className="min-h-screen relative flex" style={{ zIndex: 1 }}>
          <SideNav />

          <div className="flex-1 min-w-0 md:ml-56">
            <header className="border-b border-white/10 px-6 py-6 md:px-10">
              <a href="/" className="text-2xl font-thin tracking-tight hover:text-white/70 transition-colors md:hidden">
                to2d
              </a>
              <div className="hidden md:block h-4" />
            </header>
            <main className="max-w-4xl px-6 py-12 md:px-10">
              {children}
            </main>
          </div>
        </div>
        <Analytics />
      </body>
    </html>
  )
}

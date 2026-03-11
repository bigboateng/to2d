import type { Metadata } from 'next'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'
import { AppShell } from '@/components/AppShell'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.to2d.xyz'),
  title: {
    default: 'TO2D',
    template: '%s | TO2D',
  },
  description: 'Architectures for reliable AI systems operating in real-world environments.',
}

const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(t==null&&window.matchMedia('(prefers-color-scheme:dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}})();`

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <AppShell>{children}</AppShell>
        <Analytics />
      </body>
    </html>
  )
}

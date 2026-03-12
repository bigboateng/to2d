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

const darkModeCSS = `
.dark .text-\\[\\#1A1A1A\\]{color:#E8E8E6!important}
.dark .text-\\[\\#111111\\]{color:#F0F0F0!important}
.dark .text-\\[\\#2A2A2A\\]{color:#D0D0D0!important}
.dark .text-\\[\\#3A3A3A\\]{color:#B0B0B0!important}
.dark .text-\\[\\#5A5A5A\\]{color:#A0A0A0!important}
.dark .text-\\[\\#8C8C8C\\]{color:#6A6A6A!important}
.dark .hover\\:text-\\[\\#1A1A1A\\]:hover{color:#F0F0F0!important}
.dark .hover\\:text-\\[\\#111111\\]:hover{color:#F0F0F0!important}
.dark .hover\\:text-\\[\\#5A5A5A\\]:hover{color:#D0D0D0!important}
.dark .group:hover .group-hover\\:text-\\[\\#111111\\]{color:#F0F0F0!important}
.dark .bg-\\[\\#F7F7F5\\]{background-color:#111111!important}
.dark .bg-\\[\\#F7F7F5\\]\\/95{background-color:rgba(17,17,17,0.95)!important}
.dark .bg-\\[\\#F1F1EE\\]{background-color:#0D0D0D!important}
.dark .bg-\\[\\#F1F1EE\\]\\/95{background-color:rgba(13,13,13,0.95)!important}
.dark .bg-\\[\\#F2F2F0\\]{background-color:#181818!important}
.dark .bg-\\[\\#FFFFFF\\]{background-color:#1A1A1A!important}
.dark .hover\\:bg-\\[\\#F2F2F0\\]:hover{background-color:#222222!important}
.dark .hover\\:bg-\\[\\#E8E8E6\\]:hover{background-color:#2A2A2A!important}
.dark .border-\\[\\#E8E8E6\\]{border-color:#222222!important}
.dark .border-\\[\\#DADADA\\]{border-color:#333333!important}
.dark .border-\\[\\#B5B5B5\\]{border-color:#444444!important}
.dark .hover\\:border-\\[\\#DADADA\\]:hover{border-color:#444444!important}
.dark .hover\\:border-\\[\\#B5B5B5\\]:hover{border-color:#555555!important}
.dark .decoration-\\[\\#DADADA\\]{text-decoration-color:#444444!important}
.dark .hover\\:decoration-\\[\\#B5B5B5\\]:hover{text-decoration-color:#666666!important}
.dark .focus\\:border-\\[\\#B5B5B5\\]:focus{border-color:#555555!important}
.dark .placeholder-\\[\\#8C8C8C\\]::placeholder{color:#555555!important}
.dark [fill="#F7F7F5"]{fill:#111111}.dark [fill="#FFFFFF"]{fill:#1A1A1A}
.dark [fill="#F2F2F0"]{fill:#181818}.dark [fill="#2A2A2A"]{fill:#D0D0D0}
.dark [fill="#1A1A1A"]{fill:#E8E8E6}.dark [fill="#8C8C8C"]{fill:#6A6A6A}
.dark [fill="#5A5A5A"]{fill:#A0A0A0}.dark [fill="#B5B5B5"]{fill:#444444}
.dark [fill="#E8E8E6"]{fill:#222222}.dark [fill="#C89B2C"]{fill:#E0B040}
.dark [fill="#3C7A52"]{fill:#5AAF6E}
.dark [stroke="#DADADA"]{stroke:#333333}.dark [stroke="#E8E8E6"]{stroke:#222222}
.dark [stroke="#B5B5B5"]{stroke:#444444}.dark [stroke="#2A2A2A"]{stroke:#D0D0D0}
.dark [stroke="#1A1A1A"]{stroke:#E8E8E6}.dark [stroke="#C89B2C"]{stroke:#E0B040}
.dark [stroke="#3C7A52"]{stroke:#5AAF6E}
.dark [class*="text-white/2"]{color:rgba(255,255,255,0.2)!important}
.dark [class*="text-white/3"]{color:rgba(255,255,255,0.3)!important}
.dark [class*="text-white/4"]{color:rgba(255,255,255,0.4)!important}
.dark [class*="text-white/5"]{color:rgba(255,255,255,0.5)!important}
.dark [class*="text-white/6"]{color:rgba(255,255,255,0.6)!important}
.dark [class*="text-white/7"]{color:rgba(255,255,255,0.7)!important}
.dark [class*="text-white/8"]{color:rgba(255,255,255,0.8)!important}
.dark [class*="text-white/9"]{color:rgba(255,255,255,0.9)!important}
.dark .text-white{color:#FFFFFF!important}
.dark [class*="border-white/0"]{border-color:rgba(255,255,255,0.05)!important}
.dark [class*="border-white/1"]{border-color:rgba(255,255,255,0.1)!important}
.dark [class*="border-white/2"]{border-color:rgba(255,255,255,0.2)!important}
.dark [class*="border-white/3"]{border-color:rgba(255,255,255,0.3)!important}
.dark [class*="bg-white/5"]{background-color:rgba(255,255,255,0.05)!important}
.dark [class*="bg-white/10"]{background-color:rgba(255,255,255,0.1)!important}
.dark .bg-black{background-color:#000000!important}
.dark [class*="hover\\\\:text-white"]:hover{color:#FFFFFF!important}
.dark .group:hover [class*="group-hover\\\\:text-white"]{color:#FFFFFF!important}
.dark [class*="hover\\\\:border-white"]:hover{border-color:rgba(255,255,255,0.3)!important}
.dark [class*="hover\\\\:bg-white"]:hover{background-color:rgba(255,255,255,0.05)!important}
`

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <style dangerouslySetInnerHTML={{ __html: darkModeCSS }} />
      </head>
      <body>
        <AppShell>{children}</AppShell>
        <Analytics />
      </body>
    </html>
  )
}

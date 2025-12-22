import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Multi-Context Browser Control for Agentic Systems | to2d',
  description: 'A foundational primitive for distributed browser intelligence. How createPage() transforms tools from pure functions into autonomous micro-agents.',
  openGraph: {
    title: 'Multi-Context Browser Control for Agentic Systems',
    description: 'A foundational primitive for distributed browser intelligence. How createPage() transforms tools from pure functions into autonomous micro-agents.',
    images: [
      {
        url: '/images/ai/multi-context-browser-control.png',
        width: 1200,
        height: 630,
        alt: 'Multi-Context Browser Control Architecture',
      },
    ],
    type: 'article',
    publishedTime: '2025-12-09',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Multi-Context Browser Control for Agentic Systems',
    description: 'A foundational primitive for distributed browser intelligence.',
    images: ['/images/ai/multi-context-browser-control.png'],
  },
}

export default function MultiContextBrowserControlLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}








import { getArticleBySlug, getArticleSlugs } from '@/lib/mdx'
import { MDXRenderer } from '@/components/MDXRenderer'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'

interface PageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const slugs = getArticleSlugs()
  return slugs.map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({ params }: PageProps) {
  const article = getArticleBySlug(params.slug)
  return {
    title: `${article.metadata.title} | to2d`,
    description: article.metadata.description,
  }
}

export default async function ArticlePage({ params }: PageProps) {
  const article = getArticleBySlug(params.slug)

  return (
    <article className="space-y-8">
      <header className="border border-white/10 p-8">
        <div className="flex justify-between items-start mb-4">
          <h1 className="text-3xl font-thin tracking-tight">
            {article.metadata.title}
          </h1>
          <time className="text-sm font-mono text-white/50">
            {article.metadata.date}
          </time>
        </div>
        {article.metadata.description && (
          <p className="text-white/60">
            {article.metadata.description}
          </p>
        )}
      </header>

      <div className="border border-white/10 p-8">
        <MDXRenderer
          source={article.content}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkMath],
              rehypePlugins: [rehypeKatex],
            },
          }}
        />
      </div>

      <nav className="border border-white/10 p-6">
        <a 
          href="/research"
          className="text-sm font-mono text-white/70 hover:text-white transition-colors"
        >
          ← back to research
        </a>
      </nav>
    </article>
  )
}

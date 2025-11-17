import { getAllArticles } from '@/lib/mdx'

export default function NotesPage() {
  const articles = getAllArticles()

  return (
    <div className="space-y-12 max-w-3xl">
      <section>
        <h1 className="text-3xl font-thin tracking-tight mb-4">
          Notes
        </h1>
        <p className="text-white/50 text-sm mb-8">
          Articles. LaTeX. Ongoing work.
        </p>
      </section>

      <section className="space-y-4">
        {articles.length > 0 ? (
          articles.map((article) => (
            <a
              key={article.slug}
              href={`/notes/${article.slug}`}
              className="block border border-white/10 p-6 hover:border-white/30 transition-colors group"
            >
              <div className="flex justify-between items-start mb-2">
                <h2 className="text-xl font-thin group-hover:text-white/70">
                  {article.metadata.title}
                </h2>
                <time className="text-xs font-mono text-white/40">
                  {article.metadata.date}
                </time>
              </div>
              {article.metadata.description && (
                <p className="text-sm text-white/50">
                  {article.metadata.description}
                </p>
              )}
            </a>
          ))
        ) : (
          <div className="border border-white/10 p-8 text-center">
            <p className="text-white/40 text-sm">
              No articles yet. Check back soon.
            </p>
          </div>
        )}
      </section>
    </div>
  )
}




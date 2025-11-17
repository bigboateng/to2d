import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { z } from 'zod'

const contentDirectory = path.join(process.cwd(), 'content/notes')

export const ArticleMetadataSchema = z.object({
  title: z.string(),
  date: z.string(),
  description: z.string().optional(),
})

export type ArticleMetadata = z.infer<typeof ArticleMetadataSchema>

export interface Article {
  slug: string
  metadata: ArticleMetadata
  content: string
}

export function getArticleSlugs(): string[] {
  if (!fs.existsSync(contentDirectory)) {
    return []
  }
  
  const files = fs.readdirSync(contentDirectory)
  return files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => file.replace(/\.mdx$/, ''))
}

export function getArticleBySlug(slug: string): Article {
  const fullPath = path.join(contentDirectory, `${slug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  
  const metadata = ArticleMetadataSchema.parse(data)
  
  return {
    slug,
    metadata,
    content,
  }
}

export function getAllArticles(): Article[] {
  const slugs = getArticleSlugs()
  const articles = slugs.map((slug) => getArticleBySlug(slug))
  
  return articles.sort((a, b) => {
    return new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime()
  })
}


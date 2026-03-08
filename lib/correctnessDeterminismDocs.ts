import { readFileSync, readdirSync } from 'fs'
import path from 'path'

export type DeterminismDoc = {
  slug: string
  title: string
  excerpt: string
  source: string
}

const docsDirectory = path.join(process.cwd(), 'content', 'correctness', 'determinism')

const order = [
  'determinism-readme',
  'deterministic-boundaries',
  'deterministic-boundaries-software-systems',
  'boundary-trace-llm-contract',
  'deterministic-boundaries-test',
]

function extractTitle(source: string, fallback: string): string {
  const match = source.match(/^#\s+(.+)$/m)
  if (match && typeof match[1] === 'string' && match[1].trim().length > 0) {
    return match[1].trim()
  }
  return fallback
}

function extractExcerpt(source: string): string {
  const lines = source.split('\n').map((line) => line.trim())
  for (const line of lines) {
    if (
      line.length > 0 &&
      !line.startsWith('#') &&
      !line.startsWith('|') &&
      !line.startsWith('```') &&
      !line.startsWith('-') &&
      !line.startsWith('*')
    ) {
      return line
    }
  }
  return 'Deterministic boundary notes for reliable probabilistic systems.'
}

export function getAllDeterminismDocs(): DeterminismDoc[] {
  const files = readdirSync(docsDirectory).filter((file) => file.endsWith('.md'))

  const docs = files.map((file) => {
    const source = readFileSync(path.join(docsDirectory, file), 'utf8')
    const slug = file.replace(/\.md$/, '')
    const fallbackTitle = slug
      .split('-')
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(' ')

    return {
      slug,
      title: extractTitle(source, fallbackTitle),
      excerpt: extractExcerpt(source),
      source,
    }
  })

  docs.sort((a, b) => {
    const aIndex = order.indexOf(a.slug)
    const bIndex = order.indexOf(b.slug)
    const aSort = aIndex === -1 ? Number.MAX_SAFE_INTEGER : aIndex
    const bSort = bIndex === -1 ? Number.MAX_SAFE_INTEGER : bIndex
    if (aSort === bSort) {
      return a.slug.localeCompare(b.slug)
    }
    return aSort - bSort
  })

  return docs
}

export function getDeterminismDocBySlug(slug: string): DeterminismDoc | null {
  const docs = getAllDeterminismDocs()
  return docs.find((doc) => doc.slug === slug) ?? null
}

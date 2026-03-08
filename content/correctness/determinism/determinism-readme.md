# determinism.to2d.xyz

Minimal technical writing site for the concept:

**Deterministic Software in Probabilistic Environments**

Built with Next.js App Router, TypeScript, and Tailwind CSS.

## Local Development

1. Install dependencies:

```bash
npm install
```

2. Start dev server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000)

## Production Build

```bash
npm run build
npm start
```

## Content Editing

- Homepage: `app/page.tsx`
- Overview: `app/overview/page.tsx`
- Reliability Gap: `app/reliability-gap/page.tsx`
- Deterministic Boundaries: `app/deterministic-boundaries/page.tsx`
- Boundary Systems: `app/boundary-systems/page.tsx`
- Examples: `app/examples/page.tsx`

Reusable layout/content components:

- `components/PageContainer.tsx`
- `components/Section.tsx`
- `components/DiagramBlock.tsx`
- `components/CardLink.tsx`
- `components/TopNav.tsx`

Global styling:

- `app/globals.css`

## Deploy to Vercel

1. Push this repository to GitHub.
2. In Vercel, choose **Add New Project** and import the repository.
3. Keep default Next.js build settings.
4. Add domain `determinism.to2d.xyz` in project settings.
5. Deploy.

For future updates, push changes to the connected branch and Vercel will redeploy automatically.

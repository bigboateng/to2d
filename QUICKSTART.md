# Quick Start Guide

## Installation

```bash
pnpm install
```

## Development

```bash
pnpm dev
```

Visit `http://localhost:3000` to see your site with the animated rocket landing background!

## Production Build

```bash
pnpm build
```

## Static Export

```bash
pnpm export
```

Output will be in the `/out` directory. Deploy this folder to any static hosting service.

## Writing Articles

1. Create a new `.mdx` file in `/content/research/`:

```bash
touch content/research/my-article.mdx
```

2. Add frontmatter and content:

```mdx
---
title: "My Research Article"
date: "2025-11-16"
description: "A brief description"
---

# My Article

Write your content with LaTeX support:

Inline math: $E = mc^2$

Block math:
$$
\int_0^\infty e^{-x^2} dx = \frac{\sqrt{\pi}}{2}
$$
```

3. The article automatically appears at `/research/my-article`

## Customizing the Background

The project includes **four background options**:

### Option 1: ControlSystemsBackground (Current)
Edit `/app/layout.tsx`:

```tsx
// Minimal version
<ControlSystemsBackground 
  variant="grid-arrows" 
  density={0.5} 
  speed={0.5} 
  opacity={0.08} 
/>

// Full version with faster rocket
<ControlSystemsBackground 
  variant="full" 
  density={1} 
  speed={2} 
  opacity={0.20} 
/>
```

### Option 2: To2DAnimation (Alternative - More Minimal)
Replace the background component in `/app/layout.tsx`:

```tsx
// Change import
import { To2DAnimation } from '@/components/To2DAnimation'

// Replace component
<To2DAnimation 
  density={1} 
  speed={0.8} 
  opacity={0.05} 
/>
```

### Option 3: To2DStructureBackground (Geometric Lines)
```tsx
import { To2DStructureBackground } from '@/components/To2DStructureBackground'

<To2DStructureBackground 
  density={1} 
  driftSpeed={0.8} 
  opacity={0.04} 
/>
```

### Option 4: StateSpaceBackground (Phase Trajectories)
```tsx
import { StateSpaceBackground } from '@/components/StateSpaceBackground'

<StateSpaceBackground 
  density={1} 
  speed={0.8} 
  opacityFactor={0.05} 
/>
```

**When to use each:**
- `ControlSystemsBackground` → Engineering diagrams, rocket animation, technical feel
- `To2DAnimation` → LLM/AI visualization, token streams, data flow
- `To2DStructureBackground` → Architectural aesthetics, maximum subtlety, structural hints
- `StateSpaceBackground` → Dynamical systems, control theory, phase portraits

## What You Get

- ✅ **Four background animation options:**
  - ControlSystemsBackground (engineering diagrams + rocket)
  - To2DAnimation (LLM token streams + particles)
  - To2DStructureBackground (geometric lines, ultra minimal)
  - StateSpaceBackground (phase space trajectories)
- ✅ SpaceX-style rocket landing with physics
- ✅ Real-time telemetry display
- ✅ Full LaTeX/KaTeX support
- ✅ Automatic article indexing
- ✅ Static site export
- ✅ Black/white minimal design
- ✅ TypeScript + Zod type safety

## Next Steps

1. Customize colors in `tailwind.config.ts`
2. Add more articles to `/content/research/`
3. Modify background settings in `app/layout.tsx`
4. Deploy to Vercel, Netlify, or GitHub Pages

See `README.md` for full documentation.


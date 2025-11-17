# to2d

A minimal research site built with Next.js (App Router) featuring MDX articles with full LaTeX/KaTeX support.

## Features

- **MDX + LaTeX**: Write articles in MDX with inline (`$...$`) and block (`$$...$$`) math equations
- **Server-side KaTeX**: Math is rendered server-side for optimal performance
- **Static Export**: Fully static site with no runtime dependencies
- **Minimal Design**: Black background, white text, grid-inspired layout
- **Animated Background**: Control systems-inspired animated canvas background
- **Type-safe**: Full TypeScript with Zod validation

## Getting Started

Install dependencies:

```bash
pnpm install
```

Run development server:

```bash
pnpm dev
```

Build for production:

```bash
pnpm build
```

Export static site:

```bash
pnpm export
```

The static site will be in the `out/` directory.

## Project Structure

```
to2d/
├── app/
│   ├── layout.tsx          # Root layout with navigation
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles + KaTeX CSS
│   └── research/
│       ├── page.tsx        # Research index
│       └── [slug]/
│           └── page.tsx    # Individual article pages
├── components/
│   └── MDXRenderer.tsx     # MDX renderer with styled components
├── content/
│   └── research/
│       └── *.mdx           # Research articles
├── lib/
│   └── mdx.ts              # MDX utilities and type definitions
└── ...
```

## Writing Articles

Create new articles in `content/research/` with frontmatter:

```mdx
---
title: "Your Article Title"
date: "2025-11-16"
description: "Optional description"
---

# Your Content

Write normal markdown with LaTeX support:

Inline math: $E = mc^2$

Block math:
$$
\int_0^\infty e^{-x^2} dx = \frac{\sqrt{\pi}}{2}
$$
```

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- TailwindCSS
- next-mdx-remote
- remark-math + rehype-katex
- Zod

## Animated Backgrounds

The site includes **five background animation options**:

### Option 1: ControlSystemsBackground (Current)
Control systems diagrams with a SpaceX-style rocket landing animation:

```tsx
<ControlSystemsBackground 
  variant="full"      // 'grid-arrows' | 'block-diagram' | 'state-space' | 'full'
  density={1}         // Element density (0.5 - 2)
  speed={1}           // Animation speed (0.5 - 2)
  opacity={0.15}      // Base opacity (0.08 - 0.20)
/>
```

**Variants:**
- `grid-arrows`: Grid lines with moving arrows (minimal)
- `block-diagram`: Transfer function blocks (G(s), H(s), etc.)
- `state-space`: Curved particle trajectories
- `full`: All elements combined + rocket landing sequence

**Rocket Landing Features:**
- Realistic physics with gravity and thruster control
- 5 phases: descending → hovering → landing → landed → ascending
- Main thruster flames with gradient effects
- Attitude control thrusters
- Real-time telemetry (altitude, velocity, phase)
- Dashed trajectory visualization
- Landing pad with markers

See `BACKGROUND_VARIANTS.md` for detailed documentation and examples.

### Option 2: To2DAnimation (Alternative)
Minimal, abstract animation with LLM-inspired token streams representing "transfer between two domains":

```tsx
<To2DAnimation 
  density={1}         // Element count (0.5 - 2)
  speed={1}           // Animation speed (0.5 - 1.5)
  opacity={0.05}      // Base opacity (0.03 - 0.08)
/>
```

**Features:**
- **LLM Token Streams**: Flowing lines with dashes representing text/data
- **Processing Visualization**: Pulsing indicator when crossing center boundary
- **Bidirectional Flow**: Streams move both left→right and right→left
- Smooth Bezier trajectories (looks like code/tokens flowing)
- Ambient particles drifting between domains
- Invisible left/right domain regions
- Extremely calm and minimal (3-8% opacity)
- Token counter display (bottom-left)
- 15-45 second slow loops

**Perfect for:** LLM/AI sites, minimal design, abstract concepts, premium aesthetic, maximum subtlety

See `TO2D_ANIMATION.md` for detailed documentation.

**To switch:** Replace `<ControlSystemsBackground />` with `<To2DAnimation />` in `app/layout.tsx`.

### Option 3: To2DStructureBackground
Extremely minimal geometric lines representing sparse structural hints:

```tsx
<To2DStructureBackground 
  density={1}         // Line count (0.5 - 1.5)
  driftSpeed={1}      // Animation speed (0.5 - 2)
  opacity={0.04}      // Base opacity (0.02 - 0.06)
/>
```

**Features:**
- Horizontal segmented lines with irregular spacing
- Sparse vertical connectors
- Slow drift animation (1-3% movement over 20-40s)
- Opacity fluctuation (2-7%)
- Scroll parallax effect
- ~8 lines + ~12 connectors
- Architectural/structural aesthetic

**Perfect for:** Minimal sites, architectural aesthetics, maximum subtlety, structural metaphors

See `TO2D_STRUCTURE_BACKGROUND.md` for detailed documentation.

### Option 4: StateSpaceBackground
Abstract phase space trajectories with particles drifting along curves:

```tsx
<StateSpaceBackground 
  density={1}          // Trajectory count (0.5 - 1.5)
  speed={1}            // Particle speed (0.5 - 2)
  opacityFactor={0.05} // Base opacity (0.03 - 0.08)
/>
```

**Features:**
- 4 trajectory types: spirals, closed loops, convergent, divergent
- Tiny particles (1-2px) moving along paths
- 20-40 second slow loops
- Curve opacity breathing (3-8%)
- No axes, labels, or mathematical notation
- ~7 trajectories with 1-2 particles each
- Phase portrait aesthetic

**Perfect for:** Dynamical systems research, control theory, physics/math content, state-space methods

See `STATE_SPACE_BACKGROUND.md` for detailed documentation.

**To switch:** Replace background component in `app/layout.tsx` with any of the five options above.

### Option 5: AeroManifoldBackground
Abstract manifold dynamics inspired by astrodynamics and low-energy transfer trajectories:

```tsx
<AeroManifoldBackground 
  density={1}          // Curve count (0.7 - 1.3)
  opacityFactor={0.04} // Base opacity (0.03 - 0.06)
  curveSpeed={1}       // Animation speed (0.5 - 1.5)
/>
```

**Features:**
- 3 curve types: stable manifolds, unstable manifolds, transfer arcs
- Particles with "capture fade" effect (rare)
- Optional vertical transition band
- 20-40 second horizontal drift
- Dashed transfer arc pattern
- ~4 curves with 4-6 particles
- Invariant manifold aesthetic

**Perfect for:** Astrodynamics, asteroid retrieval research, celestial mechanics, dynamical systems, mission design

See `AERO_MANIFOLD_BACKGROUND.md` for detailed documentation.

**To switch:** Replace background component in `app/layout.tsx` with any of the five options above.

## Design Philosophy

The design is intentionally minimal and engineered:
- Monochromatic palette (black/white)
- Thin typefaces (sans-serif + monospace)
- Sparse spacing and grid-like structure
- Animated control systems background
- Focus on content and typography
- No decorative elements


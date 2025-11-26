# Complete Background Animation Guide

The **to2d** project includes **four distinct background animation components**. This guide helps you choose the right one for your content.

## Quick Comparison Table

| Feature | ControlSystems | To2DAnimation | To2DStructure | StateSpace |
|---------|----------------|---------------|---------------|------------|
| **Visual Style** | Engineering diagrams | Token streams | Geometric lines | Phase trajectories |
| **Metaphor** | Control systems | LLM/data flow | Structural hints | Dynamical systems |
| **Complexity** | High (many layers) | Medium (2 layers) | Low (lines only) | Medium (curves) |
| **Opacity** | 10-20% (visible) | 3-8% (subtle) | 2-7% (ultra subtle) | 3-8% (subtle) |
| **Animation Style** | Multiple types | Flowing particles | Slow drift | Path following |
| **Special Feature** | Rocket landing | Processing indicator | Parallax scroll | 4 trajectory types |
| **Element Count** | 50+ | ~33 (~25 particles + 8 streams) | ~44 (lines + connectors) | ~21 (7 paths + 14 particles) |
| **CPU Usage** | <1% | <0.5% | <0.3% | <0.4% |
| **Best For** | Technical/engineering | LLM/AI research | Architectural/minimal | Physics/mathematics |

---

## 1. ControlSystemsBackground (Current Default)

### Visual Description
Engineering control diagrams come to life: grid lines, moving arrows, transfer function blocks (G(s), H(s), etc.), and a SpaceX-inspired rocket landing sequence.

### When to Use
- ✅ Control systems research
- ✅ Engineering content
- ✅ Want visual interest and activity
- ✅ Rocket landing is thematically relevant
- ✅ Audience appreciates technical diagrams

### Key Features
- Grid + arrows + blocks + particles + rocket
- Rocket phases: descend → hover → land → takeoff
- Real-time telemetry (ALT, VEL, PHASE)
- Multiple animation variants
- 10-20% opacity (most visible)

### Example
```tsx
<ControlSystemsBackground 
  variant="full"  // or 'grid-arrows', 'block-diagram', 'state-space'
  density={1} 
  speed={1} 
  opacity={0.15} 
/>
```

📖 **Documentation:** `BACKGROUND_VARIANTS.md`

---

## 2. To2DAnimation (LLM Token Streams)

### Visual Description
Flowing lines with token dashes representing data/text processing through domains. Processing indicator appears when crossing center boundary. Ambient particles drift between invisible left/right regions.

### When to Use
- ✅ LLM/AI research sites
- ✅ Data pipeline visualization
- ✅ Want subtle but meaningful motion
- ✅ "Transfer between domains" metaphor fits
- ✅ Token/text processing themes

### Key Features
- ~8 flowing token stream lines
- Processing indicator (⟳) at center
- Bidirectional flow (left↔right)
- ~25 ambient particles
- Token counter display
- 3-8% opacity (subtle)

### Example
```tsx
<To2DAnimation 
  density={1} 
  speed={1} 
  opacity={0.05} 
/>
```

📖 **Documentation:** `TO2D_ANIMATION.md`

---

## 3. To2DStructureBackground (Geometric Lines)

### Visual Description
Sparse horizontal lines (segmented) with occasional vertical connectors. Everything drifts millimeters left/right or pixels up/down. Opacity gently breathes. Scroll parallax adds depth.

### When to Use
- ✅ Architectural aesthetics
- ✅ Maximum subtlety needed
- ✅ Structural/minimal metaphor
- ✅ Want almost invisible presence
- ✅ Content-first approach

### Key Features
- ~8 horizontal segmented lines
- ~12 vertical connectors
- Irregular spacing (organic feel)
- 1-3% drift over 20-40 seconds
- Scroll parallax (0.3x)
- 2-7% opacity (ultra subtle)

### Example
```tsx
<To2DStructureBackground 
  density={1} 
  driftSpeed={1} 
  opacity={0.04} 
/>
```

📖 **Documentation:** `TO2D_STRUCTURE_BACKGROUND.md`

---

## 4. StateSpaceBackground (Phase Trajectories)

### Visual Description
Abstract phase space curves with tiny particles drifting along them. Four trajectory types: spirals (converging/diverging), closed loops, convergent paths, and divergent radiations. No axes or labels.

### When to Use
- ✅ Dynamical systems research
- ✅ Control theory content
- ✅ Physics/mathematics themes
- ✅ State-space methodology
- ✅ Want mathematical elegance

### Key Features
- ~7 trajectories (4 types)
- 1-2 particles per path
- 20-40 second loops
- Curve opacity breathing
- No mathematical notation
- 3-8% opacity (subtle)

### Example
```tsx
<StateSpaceBackground 
  density={1} 
  speed={1} 
  opacityFactor={0.05} 
/>
```

📖 **Documentation:** `STATE_SPACE_BACKGROUND.md`

---

## Decision Tree

### Start Here: What's Your Content About?

#### Control Systems / Engineering
→ **ControlSystemsBackground** (full variant with rocket)

#### LLM / AI / Machine Learning
→ **To2DAnimation** (token streams)

#### Architecture / Design / Minimal
→ **To2DStructureBackground** (geometric lines)

#### Dynamical Systems / Physics / Math
→ **StateSpaceBackground** (phase trajectories)

#### General Research / Portfolio
→ **To2DAnimation** or **To2DStructureBackground** (both subtle and universal)

---

## By Subtlety Level

From most subtle to most visible:

1. **To2DStructureBackground** (2-7% opacity)
   - Almost invisible
   - Pure geometry
   - Maximum minimalism

2. **StateSpaceBackground** (3-8% opacity)
   - Very subtle
   - Mathematical elegance
   - Barely noticeable motion

3. **To2DAnimation** (3-8% opacity)
   - Subtle but meaningful
   - Clear motion if you look
   - Token flow visible

4. **ControlSystemsBackground** (10-20% opacity)
   - Clearly visible
   - Multiple elements
   - Active animation

---

## By Animation Activity

From calmest to most active:

1. **To2DStructureBackground**
   - Slowest motion (millimeters over 40s)
   - Barely perceptible drift
   - Meditative

2. **StateSpaceBackground**
   - Slow particle travel (20-40s loops)
   - Gentle curve breathing
   - Contemplative

3. **To2DAnimation**
   - Moderate flow (15-45s loops)
   - Visible but calm
   - Focused

4. **ControlSystemsBackground**
   - Multiple simultaneous animations
   - Rocket landing sequence
   - Dynamic

---

## Switching Backgrounds

All backgrounds use the same integration pattern:

```tsx
// app/layout.tsx
import { [BackgroundComponent] } from '@/components/[BackgroundComponent]'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <[BackgroundComponent] [props] />
        <div className="min-h-screen relative" style={{ zIndex: 1 }}>
          {children}
        </div>
      </body>
    </html>
  )
}
```

### Example Switches

**From ControlSystems to To2DAnimation:**
```tsx
// Before
<ControlSystemsBackground variant="full" opacity={0.15} />

// After
<To2DAnimation opacity={0.05} />
```

**From To2DAnimation to StateSpace:**
```tsx
// Before
<To2DAnimation density={1} speed={1} opacity={0.05} />

// After
<StateSpaceBackground density={1} speed={1} opacityFactor={0.05} />
```

**From StateSpace to Structure:**
```tsx
// Before
<StateSpaceBackground density={1} speed={0.8} opacityFactor={0.05} />

// After
<To2DStructureBackground density={1} driftSpeed={0.8} opacity={0.04} />
```

---

## Mixing Backgrounds (Per-Page)

You can use different backgrounds on different pages:

```tsx
// app/layout.tsx
'use client'

import { usePathname } from 'next/navigation'
import { ControlSystemsBackground } from '@/components/ControlSystemsBackground'
import { To2DAnimation } from '@/components/To2DAnimation'
import { StateSpaceBackground } from '@/components/StateSpaceBackground'
import { To2DStructureBackground } from '@/components/To2DStructureBackground'

function AdaptiveBackground() {
  const pathname = usePathname()
  
  // Home: Minimal structure
  if (pathname === '/') {
    return <To2DStructureBackground opacity={0.03} />
  }
  
  // Research index: Token streams
  if (pathname === '/research') {
    return <To2DAnimation opacity={0.05} />
  }
  
  // Articles: Match content type
  if (pathname.includes('/control-')) {
    return <ControlSystemsBackground variant="grid-arrows" opacity={0.10} />
  }
  
  if (pathname.includes('/dynamics-')) {
    return <StateSpaceBackground opacityFactor={0.05} />
  }
  
  // Default: Structure
  return <To2DStructureBackground opacity={0.04} />
}

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <AdaptiveBackground />
        {children}
      </body>
    </html>
  )
}
```

---

## Recommended Presets

### Research Site (General)
```tsx
<To2DAnimation density={1} speed={0.8} opacity={0.05} />
```

### Control Systems Research
```tsx
<ControlSystemsBackground variant="grid-arrows" density={0.8} opacity={0.12} />
```

### LLM/AI Research
```tsx
<To2DAnimation density={1.2} speed={1} opacity={0.06} />
```

### Mathematics/Physics
```tsx
<StateSpaceBackground density={1} speed={0.8} opacityFactor={0.05} />
```

### Minimal Portfolio
```tsx
<To2DStructureBackground density={0.7} driftSpeed={0.6} opacity={0.03} />
```

### Technical Documentation
```tsx
<To2DStructureBackground density={1} driftSpeed={0.8} opacity={0.04} />
```

### Landing Page (Premium)
```tsx
<To2DAnimation density={0.8} speed={0.7} opacity={0.04} />
```

---

## Performance Comparison

| Background | CPU | Memory | Elements | FPS |
|------------|-----|--------|----------|-----|
| ControlSystems | <1% | ~3MB | 50+ | 60 |
| To2DAnimation | <0.5% | ~2MB | ~33 | 60 |
| To2DStructure | <0.3% | ~1MB | ~44 | 60 |
| StateSpace | <0.4% | ~1.5MB | ~21 | 60 |

All backgrounds maintain 60fps and have negligible performance impact.

---

## Final Recommendations

**If unsure, start with:**
- **To2DAnimation** — Most versatile, works with almost any content
- **To2DStructureBackground** — Safest choice, maximum subtlety

**For specific content:**
- Control theory → **ControlSystemsBackground**
- LLM/AI → **To2DAnimation**
- Dynamical systems → **StateSpaceBackground**
- Minimal aesthetic → **To2DStructureBackground**

**General principle:**
Choose the background that reinforces your content metaphor without being literal or distracting.

---

## Getting Help

Each background has detailed documentation:
- `BACKGROUND_VARIANTS.md` — ControlSystemsBackground
- `TO2D_ANIMATION.md` — To2DAnimation
- `TO2D_STRUCTURE_BACKGROUND.md` — To2DStructureBackground
- `STATE_SPACE_BACKGROUND.md` — StateSpaceBackground

See `BACKGROUND_COMPARISON.md` for To2DAnimation vs ControlSystemsBackground.

---

**All backgrounds are production-ready, performant, and Next.js hydration-safe.**






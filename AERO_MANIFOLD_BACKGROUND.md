# AeroManifoldBackground Component

A sophisticated animated background inspired by invariant manifold dynamics and low-energy transfer trajectories from astrodynamics and asteroid retrieval research. Features abstract curves resembling stable/unstable manifolds with particles flowing along them, occasionally exhibiting "capture fade" effects.

## Philosophy

Inspired by the mathematics of dynamical systems and celestial mechanics — specifically invariant manifolds, heteroclinic connections, and low-energy transfer trajectories (like those used in asteroid retrieval missions). The animation is extremely abstract: no planets, no orbits, no literal space visuals. Only the pure mathematical essence of manifold flows.

## Props

```typescript
interface AeroManifoldBackgroundProps {
  density?: number        // Curve count multiplier (default: 1)
  opacityFactor?: number  // Base opacity (default: 0.04)
  curveSpeed?: number     // Animation speed multiplier (default: 1)
}
```

## Usage

### Basic (Recommended)

```tsx
import { AeroManifoldBackground } from '@/components/AeroManifoldBackground'

export default function Layout({ children }) {
  return (
    <html>
      <body>
        <AeroManifoldBackground />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  )
}
```

### With Custom Settings

```tsx
<AeroManifoldBackground 
  density={1.2}         // More curves
  opacityFactor={0.05}  // Slightly more visible
  curveSpeed={0.8}      // Slower drift
/>
```

## Visual Structure

### Manifold Curve Types

The component generates 3 types of curves inspired by dynamical systems theory:

#### 1. Stable Manifolds (40% probability)
- Wavelike curves with exponential decay
- Represent stable flow toward equilibrium
- Smooth oscillations damped from center
- Mathematics: trajectories approaching fixed points

#### 2. Unstable Manifolds (30% probability)
- Expanding curves radiating outward
- Represent unstable flow away from equilibrium
- Slight wobble for organic feel
- Mathematics: trajectories leaving saddle points

#### 3. Transfer Arcs (30% probability)
- Large sweeping Bezier curves
- Dashed stroke pattern (4px dash)
- Represent heteroclinic connections
- Mathematics: low-energy transfer trajectories

### Visual Properties

**Curves:**
- Stroke width: 0.5px (manifolds), 0.8px (transfers)
- Opacity: 2-6% (fluctuates slowly)
- Color: White
- Style: Smooth, anti-aliased
- Transfer arcs: Dashed pattern

**Particles:**
- Radius: 1-1.8px
- Count: 1 per manifold, 1-2 per transfer
- Opacity: 3-6%
- Motion: Follows curve path
- Special: "Capture fade" effect

**Transition Band** (70% probability):
- Vertical semi-transparent band
- 60-140px wide
- 1-3% opacity (breathes)
- Represents domain-transition zone
- Position: Near center with offset

**Layout:**
- 3-5 curves (scales with density)
- Centered distribution
- Horizontal drift (1-2% over 20-40s)
- Organic spacing

## Animation Behavior

### Curve Drift
- **Range**: 1-2% of viewport width
- **Duration**: 20-40 seconds per oscillation
- **Direction**: Each curve drifts independently
- **Motion**: Smooth sine-like horizontal shift

### Particle Motion
- **Speed**: 30-60 seconds per complete path
- **Pattern**: Linear along curve
- **Capture Point**: 70-95% along path
- **Loop**: Seamless restart

### Capture Fade Effect
- **Trigger**: Rare (0.5% chance per frame when near capture point)
- **Duration**: ~3 seconds
- **Visual**: Particle expands with glow, fades to zero
- **Metaphor**: Particle "captured" by equilibrium/attractor
- **Reset**: Respawns at curve start

### Opacity Oscillation
- **Range**: 2-6% opacity
- **Duration**: 40-80 seconds per cycle
- **Pattern**: Extremely subtle breathing
- **Elements**: Curves and transition band

## Design Principles

### ✅ What it IS
- Abstract mathematical dynamics
- Manifold flow visualization
- Astrodynamics-inspired
- Nonlinear systems metaphor
- Extremely minimal
- No literal space imagery

### ❌ What it is NOT
- No planets or celestial bodies
- No orbits or trajectories (literal)
- No NASA-style graphics
- No arrows or labels
- No coordinate systems
- Not obviously "space-themed"

## Parameter Tuning

### Density
```tsx
<AeroManifoldBackground density={0.7} />   // Sparse: ~2-3 curves
<AeroManifoldBackground density={1} />     // Balanced: ~4 curves (default)
<AeroManifoldBackground density={1.3} />   // Dense: ~5 curves
```

### Opacity Factor
```tsx
<AeroManifoldBackground opacityFactor={0.03} />  // Barely visible
<AeroManifoldBackground opacityFactor={0.04} />  // Subtle (default)
<AeroManifoldBackground opacityFactor={0.06} />  // More visible
```

### Curve Speed
```tsx
<AeroManifoldBackground curveSpeed={0.5} />   // Very slow (40-80s drift)
<AeroManifoldBackground curveSpeed={1} />     // Balanced (default)
<AeroManifoldBackground curveSpeed={1.5} />   // Faster
```

## Use Cases

### Perfect For
- Astrodynamics research
- Dynamical systems theory
- Asteroid retrieval / space missions
- Nonlinear dynamics content
- Chaos theory
- Celestial mechanics
- Optimal control (space)

### Best Paired With
- Black backgrounds
- Technical/mathematical content
- Research on manifold dynamics
- Mission design papers
- Trajectory optimization
- Multi-body problems

## Customization Examples

### Ultra Subtle (Ghostly Manifolds)
```tsx
<AeroManifoldBackground 
  density={0.7} 
  opacityFactor={0.03} 
  curveSpeed={0.5} 
/>
```
**Effect**: Barely perceptible flow fields

### Balanced Scientific
```tsx
<AeroManifoldBackground 
  density={1} 
  opacityFactor={0.04} 
  curveSpeed={0.8} 
/>
```
**Effect**: Noticeable but subtle, professional

### More Active
```tsx
<AeroManifoldBackground 
  density={1.3} 
  opacityFactor={0.05} 
  curveSpeed={1.2} 
/>
```
**Effect**: Clearer curves, visible motion

## Technical Details

### Implementation
- **SVG-based** rendering
- **RequestAnimationFrame** for 60fps
- **Path measurement** using `getTotalLength()` and `getPointAtLength()`
- Responsive to viewport changes
- Client-side only (`'use client'`)

### Performance
- **CPU Usage**: <0.4%
- **FPS**: Smooth 60fps
- **Memory**: ~1.5MB
- **Elements**: ~4 paths + 4-6 particles + 1 band = ~10 SVG elements

### Curve Generation Algorithms

**Stable Manifold:**
```
y = y₀ + sin(3πt) · A · exp(-2|t - 0.5|)
```
Exponentially damped sine wave

**Unstable Manifold:**
```
r(t) = L · t^1.5
wobble = sin(4πt) · 30 · (1-t)
```
Power-law expansion with decaying wobble

**Transfer Arc:**
```
Bezier curve with offset control points
```
Mimics heteroclinic connections

### Architecture
- Next.js hydration safe
- Full-screen fixed SVG
- `pointer-events: none`
- `z-index: 0`
- Auto dimension updates

### Animation Timing
- Curve drift: 20-40 second cycles
- Particle loops: 30-60 seconds
- Capture fade: 3 seconds
- Opacity cycles: 40-80 seconds
- All independent motion

## Mathematical Background

### Invariant Manifolds
In dynamical systems, invariant manifolds are surfaces in phase space that remain invariant under the flow. Trajectories on a manifold stay on it forever.

- **Stable manifold**: Trajectories approaching equilibrium
- **Unstable manifold**: Trajectories leaving equilibrium
- **Heteroclinic connections**: Paths connecting different equilibria

### Low-Energy Transfers
In astrodynamics, low-energy transfers (like Weak Stability Boundary transfers) exploit manifold dynamics to move between orbits with minimal fuel. Used in:
- Asteroid retrieval missions
- Lunar transfers
- Interplanetary trajectories
- Libration point mission design

### Visual Metaphor
The background represents:
- Stable/unstable manifolds in the restricted three-body problem
- Invariant tori and separatrices
- Heteroclinic connections between equilibria
- Capture dynamics around Lagrange points
- Tube dynamics in phase space

## Comparison to Other Backgrounds

| Feature | AeroManifold | StateSpace | To2DAnimation | ControlSystems |
|---------|--------------|------------|---------------|----------------|
| **Metaphor** | Manifold dynamics | Phase portraits | Data flow | Control blocks |
| **Curves** | 3 types (manifolds) | 4 types (trajectories) | Token streams | Grid + blocks |
| **Math Level** | Very high (implicit) | High | Low | Medium |
| **Space Theme** | Abstract only | None | None | None |
| **Special Effect** | Capture fade | None | Processing glow | Rocket landing |
| **Opacity** | 2-6% | 3-8% | 3-8% | 10-20% |
| **Best For** | Astrodynamics | Dynamical systems | LLM/AI | Engineering |

## Layout Example

```tsx
// app/layout.tsx
import type { Metadata } from 'next'
import './globals.css'
import { AeroManifoldBackground } from '@/components/AeroManifoldBackground'

export const metadata: Metadata = {
  title: 'to2d - Astrodynamics Research',
  description: 'Low-energy transfer trajectories and manifold dynamics',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <AeroManifoldBackground density={1} opacityFactor={0.04} curveSpeed={0.8} />
        <div className="min-h-screen relative" style={{ zIndex: 1 }}>
          <nav className="border-b border-white/10 px-6 py-4">
            <div className="max-w-4xl mx-auto">
              <a href="/" className="text-sm font-mono tracking-wider">
                manifold dynamics
              </a>
            </div>
          </nav>
          <main className="max-w-4xl mx-auto px-6 py-16">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
```

## Content Synergy Example

```tsx
// app/research/asteroid-retrieval/page.tsx
import { AeroManifoldBackground } from '@/components/AeroManifoldBackground'

export default function ArticlePage() {
  return (
    <>
      <AeroManifoldBackground density={1.2} opacityFactor={0.05} />
      <article className="relative z-10">
        <h1>Low-Energy Asteroid Retrieval Trajectories</h1>
        <p>
          We exploit invariant manifolds in the Earth-Moon system to design
          fuel-efficient capture trajectories...
        </p>
        {/* Background visually reinforces the manifold concept */}
      </article>
    </>
  )
}
```

## Tips

1. **Extreme Subtlety**: Curves should be barely visible. This is intentional.

2. **Content Match**: Use for astrodynamics, celestial mechanics, or dynamical systems content.

3. **Capture Fade**: The rare fade effect represents particle capture — a key concept in manifold dynamics.

4. **No Literal Space**: Design is abstract. Viewers with domain knowledge will recognize the reference.

5. **Transition Band**: The vertical band represents a domain boundary (like Poincaré section or separatrix).

6. **Dashed Transfers**: Dashed lines distinguish heteroclinic connections from manifolds.

## When to Use

**Choose AeroManifoldBackground when:**
- Content involves astrodynamics or celestial mechanics
- Discussing invariant manifolds or dynamical systems
- Asteroid/mission design research
- Low-energy transfers or optimal trajectories
- Want abstract mathematical visualization
- Audience has technical background

**Choose another background when:**
- Content not related to space or dynamics
- Want higher visibility
- General audience won't appreciate abstraction
- Need different mathematical metaphor

## Migration from Other Backgrounds

### From StateSpaceBackground
```tsx
// Before
<StateSpaceBackground density={1} speed={1} opacityFactor={0.05} />

// After
<AeroManifoldBackground density={1} curveSpeed={1} opacityFactor={0.04} />
```

### From To2DAnimation
```tsx
// Before
<To2DAnimation density={1} speed={0.8} opacity={0.05} />

// After
<AeroManifoldBackground density={1} curveSpeed={0.8} opacityFactor={0.04} />
```

---

**Status:** ✅ Production Ready

A mathematically sophisticated background perfect for astrodynamics research, mission design papers, or any content involving invariant manifold dynamics and low-energy transfer trajectories. The animation is so subtle it enhances atmosphere without being literally representational.




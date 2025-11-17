# To2DAnimation Component

A minimal, abstract background animation representing transfer between two invisible domains with LLM-inspired token streams. Features flowing lines that look like text/data streams being processed, along with calm particles that drift between left and right spaces with smooth Bezier trajectories.

## Philosophy

**"to2d"** = transfer between two domains

The animation visualizes abstract domain transfer without literal representations. Particles exist in two invisible vertical regions and drift across the center boundary, subtly changing as they cross between domains.

## Props

```typescript
interface To2DAnimationProps {
  density?: number   // Particle count multiplier (default: 1)
  speed?: number     // Animation speed multiplier (default: 1)
  opacity?: number   // Base particle opacity (default: 0.05)
}
```

## Usage

### Basic (Recommended)

```tsx
import { To2DAnimation } from '@/components/To2DAnimation'

export default function Layout({ children }) {
  return (
    <html>
      <body>
        <To2DAnimation />
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
<To2DAnimation 
  density={1.5}    // More particles
  speed={0.8}      // Slower motion
  opacity={0.06}   // Slightly more visible
/>
```

## Visual Behavior

### Domain Structure
- **Left Domain** (invisible): ~25% from left edge
- **Center Boundary** (invisible): 50% (middle of screen)
- **Right Domain** (invisible): ~75% from right edge

No visible borders or lines are rendered. Domains exist only conceptually.

### Token Stream Movement (LLM Representation)

1. **Stream Creation**: Flowing lines spawn from left or right domain
2. **Flow**: Smooth Bezier curves traveling between domains (15-25 second loops)
3. **Token Visualization**: Short dashes along the stream representing tokens/data
4. **Processing**: When crossing center boundary:
   - Pulsing glow effect activates
   - Rotating processing indicator (⟳) appears
   - Represents LLM transformation/inference
5. **Bidirectional**: Streams flow both left→right and right→left
6. **Completion**: Fade out at destination, new stream spawns

### Particle Movement

1. **Birth**: Ambient particles spawn in either left or right domain
2. **Drift**: Smooth Bezier curve trajectories (20-45 second loops)
3. **Crossing**: When passing through center:
   - Opacity shifts (40-100% of base)
   - Size pulses (70-120% of base)
4. **Behavior Types**:
   - ~70% cross to opposite domain
   - ~30% drift within same domain and return
5. **Death**: Fade out at end of trajectory, respawn in random domain

### Visual Effects

- **Token Streams**: 
  - Flowing curved lines (1.5px width)
  - Short dashes along path representing tokens
  - Smooth Bezier trajectories
  - ~8 active streams at any time
  - Processing indicator at center crossing
  - Head particle (2.5px) leading each stream
- **Particles**: 
  - 1.5-4px diameter, white at 3-8% opacity
  - ~25 ambient particles
  - Fade-in/out smooth transitions
  - Occasional subtle radial glow (3% chance per frame)
  - Faint lines between nearby particles (<100px)
- **Counter**: Bottom-left displays active token count
- **Easing**: Smooth ease-in-out Bezier interpolation

## Design Principles

### ✅ What it IS
- Abstract and conceptual
- LLM token stream visualization
- Data/text flowing between domains
- Calm and meditative
- Premium and minimal
- Subtle processing/inference metaphor
- Smooth and organic motion

### ❌ What it is NOT
- No rigid arrows or diagrams
- No visible domain boundaries
- No geometric shapes
- No busy or fast motion
- No explicit labels (except subtle counter)

## Parameter Tuning

### Density
```tsx
<To2DAnimation density={0.5} />   // Sparse: ~12 particles + 4 streams
<To2DAnimation density={1} />     // Balanced: ~25 particles + 8 streams (default)
<To2DAnimation density={2} />     // Dense: ~50 particles + 16 streams
```

### Speed
```tsx
<To2DAnimation speed={0.5} />     // Very slow, contemplative
<To2DAnimation speed={1} />       // Balanced (default)
<To2DAnimation speed={1.5} />     // Slightly faster, more dynamic
```

### Opacity
```tsx
<To2DAnimation opacity={0.03} />  // Barely visible, maximum subtlety
<To2DAnimation opacity={0.05} />  // Balanced (default)
<To2DAnimation opacity={0.08} />  // More visible, stronger presence
```

## Combining with Other Backgrounds

You can use `To2DAnimation` alongside or instead of `ControlSystemsBackground`:

### Option 1: To2D Only (Clean)
```tsx
// app/layout.tsx
<To2DAnimation density={1} speed={1} opacity={0.05} />
```

### Option 2: Both (Layered - not recommended)
```tsx
// Very busy, use with caution
<ControlSystemsBackground variant="grid-arrows" opacity={0.03} />
<To2DAnimation density={0.5} opacity={0.03} />
```

### Option 3: Different Pages
```tsx
// Home: Abstract domain transfer
<To2DAnimation />

// Research articles: Control systems
<ControlSystemsBackground variant="grid-arrows" />
```

## Technical Details

### Performance
- Canvas-based rendering with `requestAnimationFrame`
- ~60fps on modern hardware
- <0.5% CPU usage
- No heavy dependencies
- Efficient particle recycling

### Implementation
- Bezier curves with 2 control points per trajectory
- Smooth ease-in-out easing function
- Distance-based particle connections
- Opacity and size modulation in crossing zone
- Particle lifespan management (800-2000 frames)

### Architecture
- Client-side only (`'use client'`)
- Next.js hydration safe
- Full-screen fixed canvas
- `pointer-events: none` - no interaction blocking
- `z-index: 0` - always in background
- Responsive to viewport changes

### Animation Timing
- Individual particle loops: 20-45 seconds
- Fade in: ~0.5 seconds
- Fade out: ~0.5 seconds
- Crossing effect: Dynamic based on center proximity
- Connection update: Every frame (60fps)

## Use Cases

### Perfect For
- Research sites exploring domain transfer concepts
- Minimal, premium backgrounds
- Abstract conceptual visualization
- Calm, meditative atmospheres
- Sites about transformation, translation, mapping

### Best Paired With
- Black backgrounds
- White or light text
- Minimal layouts
- Sparse content
- Large typography
- Engineered aesthetics

## Customization Examples

### Ultra Subtle
```tsx
<To2DAnimation 
  density={0.3} 
  speed={0.5} 
  opacity={0.03} 
/>
```
Perfect for: Text-heavy pages, maximum focus on content

### Balanced Premium
```tsx
<To2DAnimation 
  density={1} 
  speed={0.8} 
  opacity={0.05} 
/>
```
Perfect for: Landing pages, about pages

### Active Presence
```tsx
<To2DAnimation 
  density={1.5} 
  speed={1.2} 
  opacity={0.07} 
/>
```
Perfect for: Visual emphasis, portfolio sites

## Metaphor Interpretation

The animation represents:
- **LLM Processing**: Token streams flowing through model layers
  - Left domain: Input tokens/prompt
  - Center boundary: Model inference/transformation
  - Right domain: Generated output/completion
  - Bidirectional: Context window, attention, feedback
- **Data Pipeline**: Information flowing through processing stages
- **Translation**: Converting between languages or representations
- **Transformation**: Input → processing → output
- **Abstract Computation**: Any two-domain transfer process

The flowing lines with dashes evoke the feeling of text/tokens being processed by a language model, while the processing indicator at the center boundary represents the model's inference step.

## Comparison: To2DAnimation vs ControlSystemsBackground

| Feature | To2DAnimation | ControlSystemsBackground |
|---------|---------------|--------------------------|
| **Style** | Abstract, minimal | Engineering diagrams |
| **Elements** | Particles only | Grid, blocks, rocket, particles |
| **Opacity** | 3-8% | 10-20% |
| **Motion** | Very slow drift | Multiple animation layers |
| **Metaphor** | Domain transfer | Control systems |
| **Complexity** | Simple | Complex |
| **Best for** | Minimal sites | Technical/research sites |

## Migration Guide

If replacing `ControlSystemsBackground`:

```tsx
// Before
import { ControlSystemsBackground } from '@/components/ControlSystemsBackground'
<ControlSystemsBackground variant="full" opacity={0.15} />

// After
import { To2DAnimation } from '@/components/To2DAnimation'
<To2DAnimation opacity={0.05} />
```

Adjust opacity down since To2DAnimation is more subtle by design.

---

**Status:** ✅ Production Ready

A calm, premium background animation perfect for minimal research sites exploring concepts of transfer, transformation, and domain mapping.


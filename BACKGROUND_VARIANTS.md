# ControlSystemsBackground Component

An animated canvas background inspired by control systems engineering diagrams. Features subtle animations including grid lines, moving arrows, drifting transfer function blocks, state-space particle trajectories, signal pulses, and a SpaceX-inspired rocket landing sequence with realistic physics and control thrusters.

## Props

```typescript
interface ControlSystemsBackgroundProps {
  density?: number    // Controls element density (default: 1)
  speed?: number      // Animation speed multiplier (default: 1)
  opacity?: number    // Base opacity for all elements (default: 0.08)
  variant?: 'grid-arrows' | 'block-diagram' | 'state-space' | 'full'
}
```

## Variants

### 1. Full (Default)
All animation layers enabled: grid + arrows + blocks + particles + pulses + rocket landing.

```tsx
<ControlSystemsBackground variant="full" density={1} speed={1} opacity={0.15} />
```

**Best for:** Main landing page, research index pages

**Visual elements:**
- Brighter grid lines at 10-20% opacity
- Arrows moving along grid axes
- Transfer function blocks (G(s), H(s), K, C(s), ∫, ∑) drifting slowly
- Particles following curved Bézier trajectories
- Occasional pulses traveling between nodes
- **Rocket landing animation** with realistic physics:
  - Descending phase with gravity and initial velocity
  - Hovering phase with stabilization control
  - Precision landing with thruster control
  - Main thruster flame (white → orange gradient)
  - Side thrusters for attitude control
  - Trajectory path visualization (dashed line)
  - Real-time telemetry display (altitude, velocity, phase)
  - Landing pad with target markers
  - Full cycle: descend → hover → land → take off → repeat

---

### 2. Grid + Arrows
Minimal variant with only grid lines and moving arrows.

```tsx
<ControlSystemsBackground 
  variant="grid-arrows" 
  density={1.2} 
  speed={0.8} 
  opacity={0.06} 
/>
```

**Best for:** Article pages, minimal distraction contexts

**Visual elements:**
- Vertical and horizontal grid lines
- Arrow indicators moving along grid lines
- No blocks or particles

---

### 3. Block Diagram
Focus on drifting transfer function blocks with subtle pulses.

```tsx
<ControlSystemsBackground 
  variant="block-diagram" 
  density={0.8} 
  speed={0.6} 
  opacity={0.1} 
/>
```

**Best for:** Control theory articles, system architecture pages

**Visual elements:**
- Drifting rectangular blocks labeled with transfer functions
- Blocks have slow translation and opacity pulsing
- Signal pulses connecting nodes
- No grid or particle trajectories

---

### 4. State-Space Trajectories
Emphasizes curved particle trajectories like phase portraits.

```tsx
<ControlSystemsBackground 
  variant="state-space" 
  density={1.5} 
  speed={1.2} 
  opacity={0.09} 
/>
```

**Best for:** Dynamical systems articles, optimization pages

**Visual elements:**
- Particles following smooth Bézier curve paths
- Faint trails behind particles
- Visible curved trajectory paths
- Signal pulses
- No grid or blocks

---

## Parameter Tuning

### Density
- `0.5` - Sparse, very minimal
- `1.0` - Balanced (recommended)
- `1.5` - Dense, more active

### Speed
- `0.5` - Very slow, meditative
- `1.0` - Moderate (recommended)
- `2.0` - Faster, more dynamic

### Opacity
- `0.08` - Subtle presence
- `0.15` - Balanced, brighter (recommended)
- `0.20` - High visibility, strong presence

---

## Usage Examples

### In Root Layout (Global)
```tsx
// app/layout.tsx
import { ControlSystemsBackground } from '@/components/ControlSystemsBackground'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ControlSystemsBackground variant="full" />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  )
}
```

### Different Variants per Page
```tsx
// app/page.tsx (Home)
import { ControlSystemsBackground } from '@/components/ControlSystemsBackground'

export default function Home() {
  return (
    <>
      <ControlSystemsBackground variant="full" density={1} speed={1} opacity={0.08} />
      <main className="relative z-10">
        {/* content */}
      </main>
    </>
  )
}

// app/research/[slug]/page.tsx (Article)
import { ControlSystemsBackground } from '@/components/ControlSystemsBackground'

export default function Article() {
  return (
    <>
      <ControlSystemsBackground variant="grid-arrows" density={0.8} speed={0.6} opacity={0.05} />
      <article className="relative z-10">
        {/* article content */}
      </article>
    </>
  )
}
```

---

## Technical Details

### Performance
- Uses HTML5 Canvas with `requestAnimationFrame`
- No heavy dependencies (pure React + Canvas API)
- Lightweight (~300 lines)
- GPU-accelerated rendering
- Minimal CPU usage (<1% on modern hardware)

### Architecture
- Client-side only (`'use client'`)
- Next.js hydration safe
- No server-side rendering issues
- `pointer-events: none` - doesn't block interaction
- Fixed positioning with `z-index: 0`

### Animation Timings
- Grid arrows: 20-30 second loops
- Block drift: 40-50 second cycles
- Particle trajectories: 30-40 seconds
- Pulses: 15-25 seconds
- Opacity pulsing: 30-40 seconds

### Styling Integration
- Works seamlessly with Tailwind
- No CSS conflicts
- Respects viewport resizing
- Automatically fills viewport

---

## Customization Examples

### High Contrast
```tsx
<ControlSystemsBackground 
  variant="full" 
  density={1.5} 
  speed={1} 
  opacity={0.20} 
/>
```

### Ultra Minimal
```tsx
<ControlSystemsBackground 
  variant="grid-arrows" 
  density={0.5} 
  speed={0.5} 
  opacity={0.06} 
/>
```

### Dynamic/Active (Fast Rocket Landing)
```tsx
<ControlSystemsBackground 
  variant="state-space" 
  density={2} 
  speed={2} 
  opacity={0.18} 
/>
```

---

## Design Philosophy

The component embodies engineering aesthetics:
- **Minimal**: No bright colors or gradients
- **Purposeful**: Every element represents control systems concepts
- **Subtle**: Never distracts from content
- **Precise**: Clean lines, deterministic motion
- **Technical**: Authentic to engineering diagrams

Elements reference actual control theory:
- `G(s)` - Transfer function
- `H(s)` - Feedback path
- `K` - Gain
- `C(s)` - Controller
- `∫` - Integrator
- `∑` - Summer/junction

The animation creates a sense of a living system diagram while maintaining extreme minimalism.

---

## Rocket Landing Animation

The rocket landing sequence demonstrates control system principles in action:

### Physics Model
- **Gravity simulation**: Constant downward acceleration
- **Thruster control**: Main engine + attitude thrusters
- **PID-like control**: Proportional feedback for hover and landing
- **Rotation damping**: Smooth stabilization

### Animation Phases
1. **Descending** (20-30s)
   - Entry from top of screen
   - Gravity acceleration
   - Slight rotation wobble
   - Light main thruster firing
   
2. **Hovering** (10-15s)
   - Altitude stabilization 100m above target
   - Active attitude control
   - Side thrusters firing for balance
   - Dashed trajectory trail
   
3. **Landing** (5-8s)
   - Controlled descent to pad
   - Maximum thruster power
   - Rotation correction
   - Precision positioning
   
4. **Landed** (8-10s)
   - Thrusters fade out
   - Brief rest on pad
   - Telemetry shows zero velocity
   
5. **Ascending** (5-8s)
   - Full thrust takeoff
   - Vertical ascent
   - Exit screen top
   - New random landing zone selected

### Visual Elements
- White rocket body with landing legs
- Gradient thruster flames (white → yellow → orange)
- Dashed trajectory path with opacity fade
- Real-time HUD display:
  - `ALT`: Altitude above landing pad (meters)
  - `VEL`: Vertical velocity (m/s)
  - `PHASE`: Current flight phase
- Landing pad with striped markers
- Smooth 60fps canvas animation

The rocket animation serves as a metaphor for control systems research: precision, feedback, stability, and optimization.


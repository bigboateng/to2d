# StateSpaceMissingInputBackground Component

A minimal, abstract animated background inspired by the state-space system:

```
ẋ = Ax + Bu
u = ?
```

## Visual Concept

This component visualizes a dynamical system evolving with **missing or uncertain inputs** (u = ?). Particles follow smooth trajectories but occasionally experience small, random deviations—representing the effect of unknown or missing control inputs.

## Features

- 3–5 faint curved trajectories at 3–6% opacity
- Small particles (1–2px) moving along paths
- Particles occasionally "jump" slightly off the curve (missing input perturbation)
- Smooth opacity oscillation of curves
- Extremely subtle and abstract—no axes, labels, or arrows
- Hydration-safe for Next.js
- Lightweight SVG + requestAnimationFrame

## Usage

### Basic Usage in layout.tsx

```typescript
import { StateSpaceMissingInputBackground } from '@/components/StateSpaceMissingInputBackground'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <StateSpaceMissingInputBackground />
        <div className="min-h-screen relative" style={{ zIndex: 1 }}>
          {children}
        </div>
      </body>
    </html>
  )
}
```

### With Custom Props

```typescript
<StateSpaceMissingInputBackground 
  density={1.2}           // 1.0 = default (3-5 trajectories)
  speed={0.8}             // 0.8 = slightly slower particles
  opacityFactor={0.05}    // Higher = more visible
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `density` | `number` | `1` | Controls trajectory count (3-5 curves). Higher = more trajectories. |
| `speed` | `number` | `1` | Particle movement speed multiplier. Lower = slower. |
| `opacityFactor` | `number` | `0.04` | Base opacity for curves and particles. 0.03–0.06 recommended. |

## Animation Behavior

1. **Particle Motion**: Particles move along closed curved paths in 25–35 second loops
2. **Missing Input Perturbations**: Every 4–12 seconds, each particle receives a small random "kick" (8–23px) that pushes it off the trajectory
3. **Deviation Decay**: Perturbations decay smoothly back to the path (95% decay per frame)
4. **Curve Oscillation**: Trajectory opacity gently oscillates over time
5. **Curve Variety**: Four trajectory types—ellipses, wobbled circles, breathing spirals, and lissajous figures

## Styling Notes

- Component is `fixed inset-0 pointer-events-none` so it sits behind all content
- Parent should have `bg-black` for best effect
- Content layers should have `position: relative` and `z-index: 1` or higher
- All animations use white color at very low opacity

## Technical Details

- Renders a full-screen SVG overlay
- Uses `requestAnimationFrame` for smooth 60fps animation
- Hydration-safe: dimensions calculated client-side after mount
- Trajectories generated procedurally based on screen size
- Path calculations cached using SVG `getTotalLength()` API
- Minimal re-renders—animation state stored in refs


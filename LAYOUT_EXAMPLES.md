# Layout Examples

This file shows different ways to use the background animations in your Next.js layout.

## Current Setup (ControlSystemsBackground)

The project is currently configured with the control systems background:

```tsx
// app/layout.tsx
import { ControlSystemsBackground } from '@/components/ControlSystemsBackground'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ControlSystemsBackground variant="full" density={1} speed={1} opacity={0.15} />
        <div className="min-h-screen relative" style={{ zIndex: 1 }}>
          <nav className="border-b border-white/10 px-6 py-4">
            {/* navigation */}
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

---

## Alternative: To2DAnimation (Minimal)

For a more abstract, minimal background:

```tsx
// app/layout.tsx
import { To2DAnimation } from '@/components/To2DAnimation'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <To2DAnimation density={1} speed={1} opacity={0.05} />
        <div className="min-h-screen relative" style={{ zIndex: 1 }}>
          <nav className="border-b border-white/10 px-6 py-4">
            {/* navigation */}
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

---

## No Background (Pure Minimal)

For maximum focus on content:

```tsx
// app/layout.tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen">
          <nav className="border-b border-white/10 px-6 py-4">
            {/* navigation */}
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

---

## Different Backgrounds Per Page

You can conditionally render backgrounds based on the route:

### Using Props

```tsx
// app/layout.tsx
import { ControlSystemsBackground } from '@/components/ControlSystemsBackground'
import { To2DAnimation } from '@/components/To2DAnimation'
import { usePathname } from 'next/navigation'

function BackgroundSelector() {
  const pathname = usePathname()
  
  if (pathname === '/') {
    return <To2DAnimation opacity={0.05} />
  }
  
  if (pathname.startsWith('/research')) {
    return <ControlSystemsBackground variant="grid-arrows" opacity={0.08} />
  }
  
  return null
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <BackgroundSelector />
        <div className="min-h-screen relative" style={{ zIndex: 1 }}>
          {children}
        </div>
      </body>
    </html>
  )
}
```

### Per-Page Override

```tsx
// app/page.tsx (Home with To2DAnimation)
import { To2DAnimation } from '@/components/To2DAnimation'

export default function Home() {
  return (
    <>
      <To2DAnimation />
      <div className="relative z-10">
        {/* content */}
      </div>
    </>
  )
}

// app/research/page.tsx (Research with ControlSystemsBackground)
import { ControlSystemsBackground } from '@/components/ControlSystemsBackground'

export default function Research() {
  return (
    <>
      <ControlSystemsBackground variant="grid-arrows" />
      <div className="relative z-10">
        {/* content */}
      </div>
    </>
  )
}
```

---

## Preset Configurations

### Ultra Minimal (To2DAnimation)
```tsx
<To2DAnimation 
  density={0.3} 
  speed={0.5} 
  opacity={0.03} 
/>
```
- Barely visible
- Maximum subtlety
- Perfect for text-heavy pages

### Balanced Premium (To2DAnimation)
```tsx
<To2DAnimation 
  density={1} 
  speed={0.8} 
  opacity={0.05} 
/>
```
- Recommended default
- Calm presence
- Premium aesthetic

### Subtle Engineering (ControlSystemsBackground)
```tsx
<ControlSystemsBackground 
  variant="grid-arrows" 
  density={0.8} 
  speed={0.6} 
  opacity={0.08} 
/>
```
- Minimal grid + arrows
- Technical feel
- Not distracting

### Full Featured (ControlSystemsBackground)
```tsx
<ControlSystemsBackground 
  variant="full" 
  density={1} 
  speed={1} 
  opacity={0.15} 
/>
```
- All elements
- Rocket landing
- Maximum visual interest

---

## Tips

1. **Z-Index Management**: Backgrounds are at `z-index: 0`, content should be `relative` with `z-index: 1` or higher

2. **Pointer Events**: Both backgrounds use `pointer-events: none` so they don't block clicks

3. **Performance**: Only use one background at a time to maintain 60fps

4. **Opacity Guidelines**:
   - To2DAnimation: 0.03-0.08 (very subtle)
   - ControlSystemsBackground: 0.08-0.20 (more visible)

5. **Matching Aesthetic**:
   - Abstract/minimal → To2DAnimation
   - Technical/engineering → ControlSystemsBackground

6. **Content Contrast**: Test readability - reduce opacity if text is hard to read

---

## Testing Different Backgrounds

You can easily swap backgrounds to see which fits better:

```bash
# Edit app/layout.tsx and change the import/component
# No other changes needed

# From this:
import { ControlSystemsBackground } from '@/components/ControlSystemsBackground'
<ControlSystemsBackground variant="full" opacity={0.15} />

# To this:
import { To2DAnimation } from '@/components/To2DAnimation'
<To2DAnimation opacity={0.05} />
```

Both components have identical usage patterns and will work seamlessly.






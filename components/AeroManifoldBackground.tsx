'use client'

import { useEffect, useRef, useState } from 'react'

interface AeroManifoldBackgroundProps {
  density?: number
  opacityFactor?: number
  curveSpeed?: number
}

interface ManifoldCurve {
  id: number
  type: 'stable' | 'unstable' | 'transfer'
  pathData: string
  pathLength: number
  opacity: number
  targetOpacity: number
  opacitySpeed: number
  xOffset: number
  driftSpeed: number
  driftDirection: number
  driftAmount: number
  particles: ManifoldParticle[]
}

interface ManifoldParticle {
  id: number
  progress: number
  speed: number
  radius: number
  opacity: number
  isFading: boolean
  fadeProgress: number
  capturePoint: number
}

interface TransitionBand {
  x: number
  width: number
  opacity: number
  targetOpacity: number
  opacitySpeed: number
}

export function AeroManifoldBackground({
  density = 1,
  opacityFactor = 0.04,
  curveSpeed = 1,
}: AeroManifoldBackgroundProps) {
  const svgRef = useRef<SVGSVGElement>(null)
  const curvesRef = useRef<ManifoldCurve[]>([])
  const transitionBandRef = useRef<TransitionBand | null>(null)
  const pathElementsRef = useRef<Map<number, SVGPathElement>>(new Map())
  const animationRef = useRef<number>()
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    updateDimensions()
    window.addEventListener('resize', updateDimensions)

    return () => {
      window.removeEventListener('resize', updateDimensions)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (dimensions.width === 0 || dimensions.height === 0) return

    const centerX = dimensions.width / 2
    const centerY = dimensions.height / 2

    const generateStableManifold = (startX: number, startY: number, direction: number): string => {
      const points: string[] = []
      const steps = 80
      const amplitude = dimensions.height * 0.3
      const wavelength = dimensions.width * 0.6
      
      for (let i = 0; i <= steps; i++) {
        const t = i / steps
        const x = startX + (t - 0.5) * wavelength
        const decay = Math.exp(-Math.abs(t - 0.5) * 2)
        const y = startY + Math.sin(t * Math.PI * 3) * amplitude * decay * direction
        points.push(i === 0 ? `M ${x} ${y}` : `L ${x} ${y}`)
      }
      return points.join(' ')
    }

    const generateUnstableManifold = (startX: number, startY: number, angle: number): string => {
      const points: string[] = []
      const steps = 70
      const length = dimensions.width * 0.7
      
      for (let i = 0; i <= steps; i++) {
        const t = i / steps
        const expansion = Math.pow(t, 1.5)
        const wobble = Math.sin(t * Math.PI * 4) * 30 * (1 - t)
        const baseX = startX + Math.cos(angle) * length * expansion
        const baseY = startY + Math.sin(angle) * length * expansion
        const x = baseX + Math.cos(angle + Math.PI / 2) * wobble
        const y = baseY + Math.sin(angle + Math.PI / 2) * wobble
        points.push(i === 0 ? `M ${x} ${y}` : `L ${x} ${y}`)
      }
      return points.join(' ')
    }

    const generateTransferArc = (x1: number, y1: number, x2: number, y2: number): string => {
      const dx = x2 - x1
      const dy = y2 - y1
      const distance = Math.sqrt(dx * dx + dy * dy)
      
      const controlDist = distance * 0.6
      const perpAngle = Math.atan2(dy, dx) + Math.PI / 2
      const cx1 = x1 + dx * 0.3 + Math.cos(perpAngle) * controlDist
      const cy1 = y1 + dy * 0.3 + Math.sin(perpAngle) * controlDist
      const cx2 = x1 + dx * 0.7 - Math.cos(perpAngle) * controlDist * 0.5
      const cy2 = y1 + dy * 0.7 - Math.sin(perpAngle) * controlDist * 0.5
      
      return `M ${x1} ${y1} C ${cx1} ${cy1}, ${cx2} ${cy2}, ${x2} ${y2}`
    }

    const curveCount = Math.floor(4 * density)
    const newCurves: ManifoldCurve[] = []

    for (let i = 0; i < curveCount; i++) {
      const rand = Math.random()
      let pathData: string
      let type: ManifoldCurve['type']
      
      const yPos = centerY + (Math.random() - 0.5) * dimensions.height * 0.6
      
      if (rand < 0.4) {
        type = 'stable'
        const direction = Math.random() > 0.5 ? 1 : -1
        pathData = generateStableManifold(centerX, yPos, direction)
      } else if (rand < 0.7) {
        type = 'unstable'
        const angle = (Math.random() - 0.5) * Math.PI * 0.6
        pathData = generateUnstableManifold(centerX, yPos, angle)
      } else {
        type = 'transfer'
        const x1 = dimensions.width * (0.1 + Math.random() * 0.2)
        const y1 = dimensions.height * (0.2 + Math.random() * 0.3)
        const x2 = dimensions.width * (0.7 + Math.random() * 0.2)
        const y2 = dimensions.height * (0.5 + Math.random() * 0.3)
        pathData = generateTransferArc(x1, y1, x2, y2)
      }

      const particleCount = type === 'transfer' ? 1 + Math.floor(Math.random() * 2) : 1
      const particles: ManifoldParticle[] = []
      
      for (let j = 0; j < particleCount; j++) {
        const capturePoint = 0.7 + Math.random() * 0.25
        particles.push({
          id: j,
          progress: Math.random() * 0.7,
          speed: (0.00008 + Math.random() * 0.00015) * curveSpeed,
          radius: 1 + Math.random() * 0.8,
          opacity: opacityFactor * (0.8 + Math.random() * 0.6),
          isFading: false,
          fadeProgress: 0,
          capturePoint,
        })
      }

      newCurves.push({
        id: i,
        type,
        pathData,
        pathLength: 0,
        opacity: opacityFactor * (0.6 + Math.random() * 0.6),
        targetOpacity: opacityFactor * (0.6 + Math.random() * 0.6),
        opacitySpeed: 0.00002 + Math.random() * 0.00005,
        xOffset: 0,
        driftSpeed: (0.00003 + Math.random() * 0.00007) * curveSpeed,
        driftDirection: Math.random() > 0.5 ? 1 : -1,
        driftAmount: dimensions.width * (0.01 + Math.random() * 0.015),
        particles,
      })
    }

    curvesRef.current = newCurves

    if (Math.random() > 0.3) {
      transitionBandRef.current = {
        x: centerX - 40 + (Math.random() - 0.5) * 100,
        width: 60 + Math.random() * 80,
        opacity: opacityFactor * 0.5,
        targetOpacity: opacityFactor * 0.5,
        opacitySpeed: 0.00001,
      }
    }

    setTimeout(() => {
      newCurves.forEach((curve) => {
        const pathElement = pathElementsRef.current.get(curve.id)
        if (pathElement) {
          curve.pathLength = pathElement.getTotalLength()
        }
      })
    }, 100)

    const animate = () => {
      curvesRef.current.forEach((curve) => {
        curve.xOffset += curve.driftSpeed * curve.driftDirection
        
        if (Math.abs(curve.xOffset) > curve.driftAmount) {
          curve.driftDirection *= -1
        }

        const opacityDiff = curve.targetOpacity - curve.opacity
        if (Math.abs(opacityDiff) < 0.0005) {
          curve.targetOpacity = opacityFactor * (0.5 + Math.random() * 1.0)
        } else {
          curve.opacity += opacityDiff * curve.opacitySpeed
        }

        curve.particles.forEach((particle) => {
          if (particle.isFading) {
            particle.fadeProgress += 0.01
            particle.opacity *= 0.97
            
            if (particle.fadeProgress >= 1) {
              particle.isFading = false
              particle.fadeProgress = 0
              particle.progress = 0
              particle.opacity = opacityFactor * (0.8 + Math.random() * 0.6)
              particle.capturePoint = 0.7 + Math.random() * 0.25
            }
          } else {
            particle.progress += particle.speed
            
            if (particle.progress >= particle.capturePoint && Math.random() > 0.995) {
              particle.isFading = true
            }
            
            if (particle.progress > 1) {
              particle.progress = 0
              particle.capturePoint = 0.7 + Math.random() * 0.25
            }
          }
        })
      })

      if (transitionBandRef.current) {
        const band = transitionBandRef.current
        const opacityDiff = band.targetOpacity - band.opacity
        if (Math.abs(opacityDiff) < 0.0005) {
          band.targetOpacity = opacityFactor * (0.3 + Math.random() * 0.5)
        } else {
          band.opacity += opacityDiff * band.opacitySpeed
        }
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [dimensions, density, opacityFactor, curveSpeed])

  if (dimensions.width === 0) {
    return null
  }

  return (
    <svg
      ref={svgRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
      width={dimensions.width}
      height={dimensions.height}
      xmlns="http://www.w3.org/2000/svg"
    >
      {transitionBandRef.current && (
        <rect
          x={transitionBandRef.current.x}
          y={0}
          width={transitionBandRef.current.width}
          height={dimensions.height}
          fill="white"
          opacity={transitionBandRef.current.opacity}
        />
      )}

      {curvesRef.current.map((curve) => {
        const pathElement = pathElementsRef.current.get(curve.id)
        
        return (
          <g key={curve.id} transform={`translate(${curve.xOffset}, 0)`}>
            <path
              ref={(el) => {
                if (el) pathElementsRef.current.set(curve.id, el)
              }}
              d={curve.pathData}
              stroke="white"
              strokeWidth={curve.type === 'transfer' ? 0.8 : 0.5}
              fill="none"
              opacity={curve.opacity}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray={curve.type === 'transfer' ? '4 4' : 'none'}
            />
            
            {pathElement && curve.pathLength > 0 && curve.particles.map((particle) => {
              const point = pathElement.getPointAtLength(
                particle.progress * curve.pathLength
              )
              
              if (particle.isFading) {
                const glowRadius = 4 + particle.fadeProgress * 6
                return (
                  <g key={`${curve.id}-${particle.id}`}>
                    <circle
                      cx={point.x}
                      cy={point.y}
                      r={glowRadius}
                      fill="white"
                      opacity={particle.opacity * 0.1}
                    />
                    <circle
                      cx={point.x}
                      cy={point.y}
                      r={particle.radius}
                      fill="white"
                      opacity={particle.opacity}
                    />
                  </g>
                )
              }
              
              return (
                <circle
                  key={`${curve.id}-${particle.id}`}
                  cx={point.x}
                  cy={point.y}
                  r={particle.radius}
                  fill="white"
                  opacity={particle.opacity}
                />
              )
            })}
          </g>
        )
      })}
    </svg>
  )
}






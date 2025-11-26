'use client'

import { useEffect, useRef, useState } from 'react'

interface StateSpaceBackgroundProps {
  density?: number
  speed?: number
  opacityFactor?: number
}

interface Trajectory {
  id: number
  type: 'spiral' | 'closed' | 'convergent' | 'divergent'
  pathData: string
  pathLength: number
  opacity: number
  targetOpacity: number
  opacitySpeed: number
  particles: Particle[]
}

interface Particle {
  id: number
  progress: number
  speed: number
  radius: number
  opacity: number
}

export function StateSpaceBackground({
  density = 1,
  speed = 1,
  opacityFactor = 0.05,
}: StateSpaceBackgroundProps) {
  const svgRef = useRef<SVGSVGElement>(null)
  const trajectoriesRef = useRef<Trajectory[]>([])
  const animationRef = useRef<number>()
  const pathElementsRef = useRef<Map<number, SVGPathElement>>(new Map())
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
    const scale = Math.min(dimensions.width, dimensions.height) / 4

    const generateSpiral = (cx: number, cy: number, rotations: number, expanding: boolean): string => {
      const points: string[] = []
      const steps = 100
      for (let i = 0; i <= steps; i++) {
        const t = i / steps
        const angle = t * rotations * Math.PI * 2
        const radius = expanding ? t * scale * 0.6 : (1 - t * 0.3) * scale * 0.5
        const x = cx + Math.cos(angle) * radius
        const y = cy + Math.sin(angle) * radius
        points.push(i === 0 ? `M ${x} ${y}` : `L ${x} ${y}`)
      }
      return points.join(' ')
    }

    const generateClosedLoop = (cx: number, cy: number, radiusX: number, radiusY: number, rotation: number): string => {
      const steps = 80
      const points: string[] = []
      for (let i = 0; i <= steps; i++) {
        const t = (i / steps) * Math.PI * 2
        const x = cx + Math.cos(t) * radiusX * Math.cos(rotation) - Math.sin(t) * radiusY * Math.sin(rotation)
        const y = cy + Math.cos(t) * radiusX * Math.sin(rotation) + Math.sin(t) * radiusY * Math.cos(rotation)
        points.push(i === 0 ? `M ${x} ${y}` : `L ${x} ${y}`)
      }
      points.push('Z')
      return points.join(' ')
    }

    const generateConvergent = (startX: number, startY: number, targetX: number, targetY: number): string => {
      const steps = 60
      const points: string[] = []
      const controlOffset = scale * 0.4
      
      for (let i = 0; i <= steps; i++) {
        const t = i / steps
        const ease = 1 - Math.pow(1 - t, 2)
        
        const spiralAngle = t * Math.PI * 6
        const spiralRadius = (1 - ease) * scale * 0.3
        const spiralX = Math.cos(spiralAngle) * spiralRadius
        const spiralY = Math.sin(spiralAngle) * spiralRadius
        
        const x = startX + (targetX - startX) * ease + spiralX
        const y = startY + (targetY - startY) * ease + spiralY
        
        points.push(i === 0 ? `M ${x} ${y}` : `L ${x} ${y}`)
      }
      return points.join(' ')
    }

    const generateDivergent = (cx: number, cy: number, angle: number): string => {
      const steps = 60
      const points: string[] = []
      
      for (let i = 0; i <= steps; i++) {
        const t = i / steps
        const wobble = Math.sin(t * Math.PI * 4) * scale * 0.05
        const x = cx + Math.cos(angle) * t * scale * 0.8 + Math.cos(angle + Math.PI / 2) * wobble
        const y = cy + Math.sin(angle) * t * scale * 0.8 + Math.sin(angle + Math.PI / 2) * wobble
        points.push(i === 0 ? `M ${x} ${y}` : `L ${x} ${y}`)
      }
      return points.join(' ')
    }

    const trajectoryCount = Math.floor(7 * density)
    const newTrajectories: Trajectory[] = []

    for (let i = 0; i < trajectoryCount; i++) {
      const offsetX = (Math.random() - 0.5) * dimensions.width * 0.5
      const offsetY = (Math.random() - 0.5) * dimensions.height * 0.5
      const cx = centerX + offsetX
      const cy = centerY + offsetY

      let pathData: string
      let type: Trajectory['type']
      const rand = Math.random()

      if (rand < 0.3) {
        type = 'spiral'
        pathData = generateSpiral(cx, cy, 2 + Math.random() * 2, Math.random() > 0.5)
      } else if (rand < 0.55) {
        type = 'closed'
        const radiusX = scale * (0.3 + Math.random() * 0.4)
        const radiusY = scale * (0.3 + Math.random() * 0.4)
        const rotation = Math.random() * Math.PI
        pathData = generateClosedLoop(cx, cy, radiusX, radiusY, rotation)
      } else if (rand < 0.75) {
        type = 'convergent'
        const startX = cx + (Math.random() - 0.5) * scale
        const startY = cy + (Math.random() - 0.5) * scale
        const targetX = centerX + (Math.random() - 0.5) * scale * 0.3
        const targetY = centerY + (Math.random() - 0.5) * scale * 0.3
        pathData = generateConvergent(startX, startY, targetX, targetY)
      } else {
        type = 'divergent'
        const angle = Math.random() * Math.PI * 2
        pathData = generateDivergent(cx, cy, angle)
      }

      const particleCount = 1 + Math.floor(Math.random() * 2)
      const particles: Particle[] = []
      
      for (let j = 0; j < particleCount; j++) {
        particles.push({
          id: j,
          progress: Math.random(),
          speed: (0.00015 + Math.random() * 0.00025) * speed,
          radius: 1 + Math.random() * 1,
          opacity: opacityFactor * (0.8 + Math.random() * 0.4),
        })
      }

      newTrajectories.push({
        id: i,
        type,
        pathData,
        pathLength: 0,
        opacity: opacityFactor * (0.6 + Math.random() * 0.4),
        targetOpacity: opacityFactor * (0.6 + Math.random() * 0.4),
        opacitySpeed: 0.00003 + Math.random() * 0.00007,
        particles,
      })
    }

    trajectoriesRef.current = newTrajectories

    setTimeout(() => {
      newTrajectories.forEach((traj) => {
        const pathElement = pathElementsRef.current.get(traj.id)
        if (pathElement) {
          traj.pathLength = pathElement.getTotalLength()
        }
      })
    }, 100)

    const animate = () => {
      trajectoriesRef.current.forEach((traj) => {
        traj.particles.forEach((particle) => {
          particle.progress += particle.speed
          if (particle.progress > 1) {
            particle.progress = 0
          }
        })

        const opacityDiff = traj.targetOpacity - traj.opacity
        if (Math.abs(opacityDiff) < 0.001) {
          traj.targetOpacity = opacityFactor * (0.6 + Math.random() * 0.8)
        } else {
          traj.opacity += opacityDiff * traj.opacitySpeed
        }
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [dimensions, density, speed, opacityFactor])

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
      {trajectoriesRef.current.map((traj) => {
        const pathElement = pathElementsRef.current.get(traj.id)
        
        return (
          <g key={traj.id}>
            <path
              ref={(el) => {
                if (el) pathElementsRef.current.set(traj.id, el)
              }}
              d={traj.pathData}
              stroke="white"
              strokeWidth={0.5}
              fill="none"
              opacity={traj.opacity}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            
            {pathElement && traj.pathLength > 0 && traj.particles.map((particle) => {
              const point = pathElement.getPointAtLength(
                particle.progress * traj.pathLength
              )
              
              return (
                <circle
                  key={`${traj.id}-${particle.id}`}
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






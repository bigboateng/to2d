'use client'

import { useEffect, useRef, useState } from 'react'

interface StateSpaceMissingInputBackgroundProps {
  density?: number
  speed?: number
  opacityFactor?: number
}

export function StateSpaceMissingInputBackground({
  density = 1,
  speed = 1,
  opacityFactor = 0.04,
}: StateSpaceMissingInputBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  
  const trajectoriesRef = useRef<Array<{
    points: Array<{ x: number; y: number }>
    particles: Array<{
      index: number
      speed: number
      radius: number
      opacity: number
      deviationX: number
      deviationY: number
      deviationDecay: number
      nextDeviationTime: number
    }>
    opacity: number
    targetOpacity: number
    opacitySpeed: number
  }>>([])
  
  const timeRef = useRef(0)

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

    const canvas = canvasRef.current
    if (!canvas) {
      console.log('StateSpaceMissingInputBackground: Canvas ref not available')
      return
    }

    const ctx = canvas.getContext('2d')
    if (!ctx) {
      console.log('StateSpaceMissingInputBackground: Could not get 2d context')
      return
    }
    
    console.log('StateSpaceMissingInputBackground: Starting animation', {
      width: dimensions.width,
      height: dimensions.height,
      density,
      speed,
      opacityFactor
    })

    const centerX = dimensions.width / 2
    const centerY = dimensions.height / 2
    const scale = Math.min(dimensions.width, dimensions.height) / 3

    const generateCurve = (cx: number, cy: number, variant: number): Array<{ x: number; y: number }> => {
      const points: Array<{ x: number; y: number }> = []
      const steps = 100
      
      for (let i = 0; i <= steps; i++) {
        const t = i / steps
        const angle = t * Math.PI * 2
        
        let x: number, y: number
        
        if (variant === 0) {
          const rx = scale * 0.4
          const ry = scale * 0.25
          x = cx + Math.cos(angle) * rx
          y = cy + Math.sin(angle) * ry
        } else if (variant === 1) {
          const r = scale * 0.35
          const wobble = Math.sin(angle * 3) * scale * 0.08
          x = cx + Math.cos(angle) * (r + wobble)
          y = cy + Math.sin(angle) * (r + wobble)
        } else if (variant === 2) {
          const spiralFactor = 0.15
          const r = scale * (0.25 + spiralFactor * Math.sin(t * Math.PI))
          x = cx + Math.cos(angle) * r
          y = cy + Math.sin(angle) * r
        } else {
          const rx = scale * 0.35
          const ry = scale * 0.2
          const freq = 2
          x = cx + Math.cos(angle * freq) * rx
          y = cy + Math.sin(angle) * ry
        }
        
        points.push({ x, y })
      }
      
      return points
    }

    const trajectoryCount = Math.max(3, Math.min(5, Math.floor(4 * density)))
    const newTrajectories = []

    for (let i = 0; i < trajectoryCount; i++) {
      const offsetX = (Math.random() - 0.5) * dimensions.width * 0.4
      const offsetY = (Math.random() - 0.5) * dimensions.height * 0.4
      const cx = centerX + offsetX
      const cy = centerY + offsetY
      const variant = Math.floor(Math.random() * 4)
      
      const points = generateCurve(cx, cy, variant)
      
      const particleCount = 1 + Math.floor(Math.random() * 2)
      const particles = []
      
      for (let j = 0; j < particleCount; j++) {
        particles.push({
          index: Math.floor(Math.random() * points.length),
          speed: (0.15 + Math.random() * 0.25) * speed,
          radius: 1 + Math.random() * 0.5,
          opacity: opacityFactor * (1.2 + Math.random() * 0.8),
          deviationX: 0,
          deviationY: 0,
          deviationDecay: 0.95,
          nextDeviationTime: Math.random() * 5000 + 3000,
        })
      }

      newTrajectories.push({
        points,
        particles,
        opacity: opacityFactor * (0.7 + Math.random() * 0.4),
        targetOpacity: opacityFactor * (0.7 + Math.random() * 0.4),
        opacitySpeed: 0.0001 + Math.random() * 0.0001,
      })
    }

    trajectoriesRef.current = newTrajectories

    let lastTime = performance.now()

    const animate = (currentTime: number) => {
      const deltaTime = currentTime - lastTime
      lastTime = currentTime
      timeRef.current += deltaTime

      ctx.fillStyle = 'rgba(0, 0, 0, 0.02)'
      ctx.fillRect(0, 0, dimensions.width, dimensions.height)

      trajectoriesRef.current.forEach((traj) => {
        ctx.strokeStyle = `rgba(255, 255, 255, ${traj.opacity})`
        ctx.lineWidth = 0.5
        ctx.beginPath()
        traj.points.forEach((point, i) => {
          if (i === 0) {
            ctx.moveTo(point.x, point.y)
          } else {
            ctx.lineTo(point.x, point.y)
          }
        })
        ctx.closePath()
        ctx.stroke()

        traj.particles.forEach((particle) => {
          particle.index += particle.speed
          if (particle.index >= traj.points.length) {
            particle.index = 0
          }

          if (timeRef.current >= particle.nextDeviationTime) {
            const deviationMagnitude = 8 + Math.random() * 15
            const deviationAngle = Math.random() * Math.PI * 2
            particle.deviationX = Math.cos(deviationAngle) * deviationMagnitude
            particle.deviationY = Math.sin(deviationAngle) * deviationMagnitude
            particle.nextDeviationTime = timeRef.current + Math.random() * 8000 + 4000
          }

          particle.deviationX *= particle.deviationDecay
          particle.deviationY *= particle.deviationDecay

          const point = traj.points[Math.floor(particle.index)]
          if (point) {
            ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`
            ctx.beginPath()
            ctx.arc(
              point.x + particle.deviationX,
              point.y + particle.deviationY,
              particle.radius,
              0,
              Math.PI * 2
            )
            ctx.fill()
          }
        })

        const opacityDiff = traj.targetOpacity - traj.opacity
        if (Math.abs(opacityDiff) < 0.001) {
          traj.targetOpacity = opacityFactor * (0.5 + Math.random() * 0.9)
        } else {
          traj.opacity += opacityDiff * traj.opacitySpeed
        }
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    ctx.fillStyle = 'black'
    ctx.fillRect(0, 0, dimensions.width, dimensions.height)
    
    animationRef.current = requestAnimationFrame(animate)

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
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: -1 }}
      width={dimensions.width}
      height={dimensions.height}
    />
  )
}

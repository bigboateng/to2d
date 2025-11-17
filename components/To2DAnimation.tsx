'use client'

import { useEffect, useRef } from 'react'

interface To2DAnimationProps {
  density?: number
  speed?: number
  opacity?: number
}

interface Particle {
  id: number
  x: number
  y: number
  targetX: number
  targetY: number
  size: number
  baseOpacity: number
  currentOpacity: number
  progress: number
  speed: number
  controlPoints: {
    cp1x: number
    cp1y: number
    cp2x: number
    cp2y: number
  }
  startX: number
  startY: number
  domain: 'left' | 'right'
  phase: 'drifting' | 'crossing' | 'returning'
  phaseProgress: number
  lifespan: number
  age: number
}

interface TokenStream {
  id: number
  points: { x: number; y: number }[]
  progress: number
  speed: number
  opacity: number
  direction: 'left-to-right' | 'right-to-left'
  segmentLength: number
  isProcessing: boolean
  processingProgress: number
}

export function To2DAnimation({
  density = 1,
  speed = 1,
  opacity = 0.05,
}: To2DAnimationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()
  const particlesRef = useRef<Particle[]>([])
  const tokenStreamsRef = useRef<TokenStream[]>([])
  const nextIdRef = useRef(0)
  const nextStreamIdRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const centerX = canvas.width / 2
    const leftDomainX = canvas.width * 0.25
    const rightDomainX = canvas.width * 0.75

    const createParticle = (domain: 'left' | 'right'): Particle => {
      const isLeft = domain === 'left'
      const startX = isLeft
        ? leftDomainX + (Math.random() - 0.5) * 200
        : rightDomainX + (Math.random() - 0.5) * 200
      const startY = Math.random() * canvas.height

      const willCross = Math.random() > 0.3

      let targetX: number
      let targetY: number

      if (willCross) {
        targetX = isLeft
          ? rightDomainX + (Math.random() - 0.5) * 200
          : leftDomainX + (Math.random() - 0.5) * 200
        targetY = startY + (Math.random() - 0.5) * 300
      } else {
        const driftRange = 150
        targetX = startX + (Math.random() - 0.5) * driftRange
        targetY = startY + (Math.random() - 0.5) * driftRange
      }

      const cp1x = startX + (targetX - startX) * 0.25 + (Math.random() - 0.5) * 200
      const cp1y = startY + (targetY - startY) * 0.25 + (Math.random() - 0.5) * 200
      const cp2x = startX + (targetX - startX) * 0.75 + (Math.random() - 0.5) * 200
      const cp2y = startY + (targetY - startY) * 0.75 + (Math.random() - 0.5) * 200

      return {
        id: nextIdRef.current++,
        x: startX,
        y: startY,
        targetX,
        targetY,
        size: 1.5 + Math.random() * 2.5,
        baseOpacity: opacity * (0.6 + Math.random() * 0.4),
        currentOpacity: opacity * (0.6 + Math.random() * 0.4),
        progress: 0,
        speed: (0.00015 + Math.random() * 0.00025) * speed,
        controlPoints: {
          cp1x,
          cp1y,
          cp2x,
          cp2y,
        },
        startX,
        startY,
        domain,
        phase: 'drifting',
        phaseProgress: 0,
        lifespan: 800 + Math.random() * 1200,
        age: 0,
      }
    }

    const particleCount = Math.floor(25 * density)
    
    for (let i = 0; i < particleCount; i++) {
      const domain = Math.random() > 0.5 ? 'left' : 'right'
      particlesRef.current.push(createParticle(domain))
    }

    const createTokenStream = (direction: 'left-to-right' | 'right-to-left'): TokenStream => {
      const isLeftToRight = direction === 'left-to-right'
      const startX = isLeftToRight ? leftDomainX : rightDomainX
      const endX = isLeftToRight ? rightDomainX : leftDomainX
      const yPosition = 100 + Math.random() * (canvas.height - 200)
      
      const points: { x: number; y: number }[] = []
      const numPoints = 60
      
      for (let i = 0; i <= numPoints; i++) {
        const t = i / numPoints
        const mt = 1 - t
        
        const cp1x = startX + (endX - startX) * 0.3
        const cp1y = yPosition + (Math.random() - 0.5) * 100
        const cp2x = startX + (endX - startX) * 0.7
        const cp2y = yPosition + (Math.random() - 0.5) * 100
        
        const x = mt * mt * mt * startX +
                  3 * mt * mt * t * cp1x +
                  3 * mt * t * t * cp2x +
                  t * t * t * endX
        const y = mt * mt * mt * yPosition +
                  3 * mt * mt * t * cp1y +
                  3 * mt * t * t * cp2y +
                  t * t * t * yPosition
        
        points.push({ x, y })
      }
      
      return {
        id: nextStreamIdRef.current++,
        points,
        progress: 0,
        speed: (0.0008 + Math.random() * 0.0004) * speed,
        opacity: opacity * (0.8 + Math.random() * 0.4),
        direction,
        segmentLength: 15 + Math.random() * 10,
        isProcessing: false,
        processingProgress: 0,
      }
    }

    const streamCount = Math.floor(8 * density)
    for (let i = 0; i < streamCount; i++) {
      const direction = Math.random() > 0.5 ? 'left-to-right' : 'right-to-left'
      tokenStreamsRef.current.push(createTokenStream(direction))
    }

    const getBezierPoint = (
      t: number,
      start: number,
      cp1: number,
      cp2: number,
      end: number
    ): number => {
      const mt = 1 - t
      return (
        mt * mt * mt * start +
        3 * mt * mt * t * cp1 +
        3 * mt * t * t * cp2 +
        t * t * t * end
      )
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      tokenStreamsRef.current.forEach((stream, index) => {
        stream.progress += stream.speed
        
        if (stream.progress >= 1) {
          const direction = Math.random() > 0.5 ? 'left-to-right' : 'right-to-left'
          tokenStreamsRef.current[index] = createTokenStream(direction)
          return
        }

        const visibleSegmentStart = Math.max(0, stream.progress - 0.15)
        const visibleSegmentEnd = stream.progress
        
        const startIdx = Math.floor(visibleSegmentStart * (stream.points.length - 1))
        const endIdx = Math.ceil(visibleSegmentEnd * (stream.points.length - 1))
        
        const currentX = stream.points[endIdx]?.x || stream.points[stream.points.length - 1].x
        const distanceFromCenter = Math.abs(currentX - centerX)
        const crossingZone = canvas.width * 0.15
        
        if (distanceFromCenter < crossingZone && !stream.isProcessing) {
          stream.isProcessing = true
          stream.processingProgress = 0
        }
        
        if (stream.isProcessing) {
          stream.processingProgress += 0.02
          if (stream.processingProgress >= 1) {
            stream.isProcessing = false
          }
        }

        ctx.strokeStyle = `rgba(255, 255, 255, ${stream.opacity * 0.6})`
        ctx.lineWidth = 1.5
        ctx.lineCap = 'round'
        ctx.lineJoin = 'round'
        
        ctx.beginPath()
        let firstPoint = true
        for (let i = startIdx; i <= endIdx && i < stream.points.length; i++) {
          const point = stream.points[i]
          const segmentProgress = (i - startIdx) / (endIdx - startIdx)
          const fadeIn = Math.min(1, segmentProgress * 5)
          const fadeOut = Math.min(1, (1 - segmentProgress) * 5)
          const fade = Math.min(fadeIn, fadeOut)
          
          if (firstPoint) {
            ctx.moveTo(point.x, point.y)
            firstPoint = false
          } else {
            ctx.lineTo(point.x, point.y)
          }
        }
        ctx.stroke()

        const segmentSpacing = 4
        for (let i = startIdx; i <= endIdx && i < stream.points.length; i += segmentSpacing) {
          const point = stream.points[i]
          if (!point) continue
          
          const segmentProgress = (i - startIdx) / (endIdx - startIdx)
          const dashLength = 3 + Math.random() * 4
          const dashOpacity = stream.opacity * (0.3 + Math.random() * 0.4)
          
          const nextIdx = Math.min(i + 1, stream.points.length - 1)
          const nextPoint = stream.points[nextIdx]
          if (!nextPoint) continue
          
          const dx = nextPoint.x - point.x
          const dy = nextPoint.y - point.y
          const angle = Math.atan2(dy, dx)
          
          const dashEndX = point.x + Math.cos(angle) * dashLength
          const dashEndY = point.y + Math.sin(angle) * dashLength
          
          ctx.beginPath()
          ctx.moveTo(point.x, point.y)
          ctx.lineTo(dashEndX, dashEndY)
          ctx.strokeStyle = `rgba(255, 255, 255, ${dashOpacity})`
          ctx.lineWidth = 1
          ctx.stroke()
        }

        if (stream.isProcessing) {
          const processingIdx = Math.floor(stream.progress * (stream.points.length - 1))
          const processingPoint = stream.points[processingIdx]
          
          if (processingPoint) {
            const pulseSize = 12 + Math.sin(stream.processingProgress * Math.PI * 4) * 4
            const gradient = ctx.createRadialGradient(
              processingPoint.x, processingPoint.y, 0,
              processingPoint.x, processingPoint.y, pulseSize
            )
            gradient.addColorStop(0, `rgba(255, 255, 255, ${stream.opacity * 0.6})`)
            gradient.addColorStop(0.5, `rgba(255, 255, 255, ${stream.opacity * 0.3})`)
            gradient.addColorStop(1, 'rgba(255, 255, 255, 0)')
            ctx.fillStyle = gradient
            ctx.beginPath()
            ctx.arc(processingPoint.x, processingPoint.y, pulseSize, 0, Math.PI * 2)
            ctx.fill()
            
            ctx.fillStyle = `rgba(255, 255, 255, ${stream.opacity * 0.8})`
            ctx.font = '9px monospace'
            ctx.textAlign = 'center'
            ctx.fillText('⟳', processingPoint.x, processingPoint.y + 3)
          }
        }

        const headIdx = Math.floor(stream.progress * (stream.points.length - 1))
        const headPoint = stream.points[headIdx]
        if (headPoint) {
          ctx.beginPath()
          ctx.arc(headPoint.x, headPoint.y, 2.5, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(255, 255, 255, ${stream.opacity * 1.2})`
          ctx.fill()
        }
      })

      particlesRef.current.forEach((particle, index) => {
        particle.age++
        particle.progress += particle.speed

        if (particle.progress >= 1 || particle.age > particle.lifespan) {
          const domain = Math.random() > 0.5 ? 'left' : 'right'
          particlesRef.current[index] = createParticle(domain)
          return
        }

        const easeProgress = particle.progress < 0.5
          ? 2 * particle.progress * particle.progress
          : 1 - Math.pow(-2 * particle.progress + 2, 2) / 2

        particle.x = getBezierPoint(
          easeProgress,
          particle.startX,
          particle.controlPoints.cp1x,
          particle.controlPoints.cp2x,
          particle.targetX
        )

        particle.y = getBezierPoint(
          easeProgress,
          particle.startY,
          particle.controlPoints.cp1y,
          particle.controlPoints.cp2y,
          particle.targetY
        )

        const distanceFromCenter = Math.abs(particle.x - centerX)
        const crossingZone = canvas.width * 0.15

        if (distanceFromCenter < crossingZone) {
          const crossingFactor = 1 - distanceFromCenter / crossingZone
          particle.currentOpacity = particle.baseOpacity * (0.4 + crossingFactor * 0.6)
          particle.size = (1.5 + Math.random() * 2.5) * (0.7 + crossingFactor * 0.5)
        } else {
          particle.currentOpacity = particle.baseOpacity
        }

        const fadeIn = Math.min(1, particle.progress * 8)
        const fadeOut = Math.min(1, (1 - particle.progress) * 8)
        const lifeFade = Math.min(fadeIn, fadeOut)

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${particle.currentOpacity * lifeFade})`
        ctx.fill()

        if (Math.random() > 0.97) {
          const glowGradient = ctx.createRadialGradient(
            particle.x,
            particle.y,
            0,
            particle.x,
            particle.y,
            particle.size * 3
          )
          glowGradient.addColorStop(0, `rgba(255, 255, 255, ${particle.currentOpacity * 0.3 * lifeFade})`)
          glowGradient.addColorStop(1, 'rgba(255, 255, 255, 0)')
          ctx.fillStyle = glowGradient
          ctx.beginPath()
          ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2)
          ctx.fill()
        }
      })

      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const p1 = particlesRef.current[i]
          const p2 = particlesRef.current[j]
          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            const connectionOpacity = (1 - distance / 100) * opacity * 0.1
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `rgba(255, 255, 255, ${connectionOpacity})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      ctx.fillStyle = `rgba(255, 255, 255, ${opacity * 0.4})`
      ctx.font = '10px monospace'
      ctx.textAlign = 'left'
      const activeStreams = tokenStreamsRef.current.filter(s => s.progress < 1).length
      ctx.fillText(`tokens: ${activeStreams}`, 20, canvas.height - 30)

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [density, speed, opacity])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  )
}


'use client'

import { useEffect, useRef } from 'react'

interface ControlSystemsBackgroundProps {
  density?: number
  speed?: number
  opacity?: number
  variant?: 'grid-arrows' | 'block-diagram' | 'state-space' | 'full'
}

interface Block {
  x: number
  y: number
  width: number
  height: number
  label: string
  vx: number
  vy: number
  opacity: number
  opacityDirection: number
}

interface Arrow {
  x: number
  y: number
  direction: 'horizontal' | 'vertical'
  progress: number
  speed: number
}

interface Particle {
  progress: number
  speed: number
  path: { x: number; y: number }[]
}

interface Pulse {
  startX: number
  startY: number
  endX: number
  endY: number
  progress: number
  speed: number
}

interface Rocket {
  x: number
  y: number
  targetY: number
  velocityY: number
  rotation: number
  phase: 'descending' | 'hovering' | 'landing' | 'landed' | 'ascending'
  phaseTimer: number
  thrusterLeft: number
  thrusterRight: number
  thrusterMain: number
  trajectory: { x: number; y: number }[]
  side: 'left' | 'right'
}

export function ControlSystemsBackground({
  density = 1,
  speed = 1,
  opacity = 0.15,
  variant = 'full',
}: ControlSystemsBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()
  const blocksRef = useRef<Block[]>([])
  const arrowsRef = useRef<Arrow[]>([])
  const particlesRef = useRef<Particle[]>([])
  const pulsesRef = useRef<Pulse[]>([])
  const rocketsRef = useRef<Rocket[]>([])

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

    const gridSpacing = 80 / density
    const showGridArrows = variant === 'grid-arrows' || variant === 'full'
    const showBlocks = variant === 'block-diagram' || variant === 'full'
    const showParticles = variant === 'state-space' || variant === 'full'

    if (rocketsRef.current.length === 0) {
      rocketsRef.current = [
        {
          x: canvas.width * 0.08,
          y: -50,
          targetY: canvas.height * 0.65,
          velocityY: 2 * speed,
          rotation: 0,
          phase: 'descending',
          phaseTimer: 0,
          thrusterLeft: 0,
          thrusterRight: 0,
          thrusterMain: 0,
          trajectory: [],
          side: 'left',
        },
        {
          x: canvas.width * 0.92,
          y: -150,
          targetY: canvas.height * 0.55,
          velocityY: 1.5 * speed,
          rotation: 0,
          phase: 'descending',
          phaseTimer: 0,
          thrusterLeft: 0,
          thrusterRight: 0,
          thrusterMain: 0,
          trajectory: [],
          side: 'right',
        },
      ]
    }

    if (showBlocks && blocksRef.current.length === 0) {
      const blockLabels = ['G(s)', 'H(s)', 'K', 'C(s)', '∫', '∑']
      blocksRef.current = blockLabels.map((label, i) => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        width: 60,
        height: 40,
        label,
        vx: (Math.random() - 0.5) * 0.1 * speed,
        vy: (Math.random() - 0.5) * 0.1 * speed,
        opacity: 0.05 + Math.random() * 0.05,
        opacityDirection: Math.random() > 0.5 ? 1 : -1,
      }))
    }

    if (showGridArrows && arrowsRef.current.length === 0) {
      const arrowCount = Math.floor(8 * density)
      arrowsRef.current = Array.from({ length: arrowCount }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        direction: Math.random() > 0.5 ? 'horizontal' : 'vertical',
        progress: Math.random(),
        speed: (0.0002 + Math.random() * 0.0003) * speed,
      }))
    }

    if (showParticles && particlesRef.current.length === 0) {
      const particleCount = Math.floor(5 * density)
      particlesRef.current = Array.from({ length: particleCount }, () => {
        const startX = Math.random() * canvas.width
        const startY = Math.random() * canvas.height
        const cp1x = startX + (Math.random() - 0.5) * 300
        const cp1y = startY + (Math.random() - 0.5) * 300
        const cp2x = startX + (Math.random() - 0.5) * 300
        const cp2y = startY + (Math.random() - 0.5) * 300
        const endX = startX + (Math.random() - 0.5) * 400
        const endY = startY + (Math.random() - 0.5) * 400

        const path = []
        for (let t = 0; t <= 1; t += 0.01) {
          const mt = 1 - t
          const x = mt * mt * mt * startX + 
                    3 * mt * mt * t * cp1x + 
                    3 * mt * t * t * cp2x + 
                    t * t * t * endX
          const y = mt * mt * mt * startY + 
                    3 * mt * mt * t * cp1y + 
                    3 * mt * t * t * cp2y + 
                    t * t * t * endY
          path.push({ x, y })
        }

        return {
          progress: Math.random(),
          speed: (0.0001 + Math.random() * 0.0002) * speed,
          path,
        }
      })
    }

    if (pulsesRef.current.length === 0) {
      const pulseCount = Math.floor(3 * density)
      pulsesRef.current = Array.from({ length: pulseCount }, () => ({
        startX: Math.random() * canvas.width,
        startY: Math.random() * canvas.height,
        endX: Math.random() * canvas.width,
        endY: Math.random() * canvas.height,
        progress: Math.random(),
        speed: (0.0005 + Math.random() * 0.001) * speed,
      }))
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      if (showGridArrows) {
        ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.7})`
        ctx.lineWidth = 0.5

        for (let x = 0; x < canvas.width; x += gridSpacing) {
          ctx.beginPath()
          ctx.moveTo(x, 0)
          ctx.lineTo(x, canvas.height)
          ctx.stroke()
        }

        for (let y = 0; y < canvas.height; y += gridSpacing) {
          ctx.beginPath()
          ctx.moveTo(0, y)
          ctx.lineTo(canvas.width, y)
          ctx.stroke()
        }

        arrowsRef.current.forEach((arrow) => {
          arrow.progress += arrow.speed
          if (arrow.progress > 1) arrow.progress = 0

          const arrowLength = 20
          let x, y, dx, dy

          if (arrow.direction === 'horizontal') {
            x = arrow.progress * canvas.width
            y = arrow.y
            dx = arrowLength
            dy = 0
          } else {
            x = arrow.x
            y = arrow.progress * canvas.height
            dx = 0
            dy = arrowLength
          }

          ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 1.2})`
          ctx.lineWidth = 1

          ctx.beginPath()
          ctx.moveTo(x, y)
          ctx.lineTo(x + dx, y + dy)
          ctx.stroke()

          const arrowHeadSize = 6
          if (arrow.direction === 'horizontal') {
            ctx.beginPath()
            ctx.moveTo(x + dx, y)
            ctx.lineTo(x + dx - arrowHeadSize, y - arrowHeadSize / 2)
            ctx.lineTo(x + dx - arrowHeadSize, y + arrowHeadSize / 2)
            ctx.closePath()
            ctx.fillStyle = `rgba(255, 255, 255, ${opacity * 1.2})`
            ctx.fill()
          } else {
            ctx.beginPath()
            ctx.moveTo(x, y + dy)
            ctx.lineTo(x - arrowHeadSize / 2, y + dy - arrowHeadSize)
            ctx.lineTo(x + arrowHeadSize / 2, y + dy - arrowHeadSize)
            ctx.closePath()
            ctx.fillStyle = `rgba(255, 255, 255, ${opacity * 1.2})`
            ctx.fill()
          }
        })
      }

      if (showBlocks) {
        blocksRef.current.forEach((block) => {
          block.x += block.vx
          block.y += block.vy

          if (block.x < -block.width) block.x = canvas.width
          if (block.x > canvas.width) block.x = -block.width
          if (block.y < -block.height) block.y = canvas.height
          if (block.y > canvas.height) block.y = -block.height

          block.opacity += block.opacityDirection * 0.0001
          if (block.opacity > opacity * 1.5) {
            block.opacity = opacity * 1.5
            block.opacityDirection = -1
          }
          if (block.opacity < opacity * 0.5) {
            block.opacity = opacity * 0.5
            block.opacityDirection = 1
          }

          ctx.strokeStyle = `rgba(255, 255, 255, ${block.opacity})`
          ctx.lineWidth = 1
          ctx.strokeRect(block.x, block.y, block.width, block.height)

          ctx.fillStyle = `rgba(255, 255, 255, ${block.opacity})`
          ctx.font = '12px monospace'
          ctx.textAlign = 'center'
          ctx.textBaseline = 'middle'
          ctx.fillText(block.label, block.x + block.width / 2, block.y + block.height / 2)
        })
      }

      if (showParticles) {
        particlesRef.current.forEach((particle) => {
          particle.progress += particle.speed
          if (particle.progress > 1) particle.progress = 0

          const index = Math.floor(particle.progress * (particle.path.length - 1))
          const point = particle.path[index]

          if (point) {
            ctx.beginPath()
            ctx.arc(point.x, point.y, 2, 0, Math.PI * 2)
            ctx.fillStyle = `rgba(255, 255, 255, ${opacity * 1.2})`
            ctx.fill()

            const trailLength = 15
            for (let i = 1; i <= trailLength; i++) {
              const trailIndex = Math.max(0, index - i * 2)
              const trailPoint = particle.path[trailIndex]
              if (trailPoint) {
                const trailOpacity = (opacity * 1.2 * (trailLength - i)) / trailLength
                ctx.beginPath()
                ctx.arc(trailPoint.x, trailPoint.y, 1.5, 0, Math.PI * 2)
                ctx.fillStyle = `rgba(255, 255, 255, ${trailOpacity})`
                ctx.fill()
              }
            }
          }

          if (index > 0 && index < particle.path.length - 1) {
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.3})`
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(particle.path[0].x, particle.path[0].y)
            for (let i = 1; i < particle.path.length; i++) {
              ctx.lineTo(particle.path[i].x, particle.path[i].y)
            }
            ctx.stroke()
          }
        })
      }

      pulsesRef.current.forEach((pulse) => {
        pulse.progress += pulse.speed
        if (pulse.progress > 1) {
          pulse.progress = 0
          pulse.startX = Math.random() * canvas.width
          pulse.startY = Math.random() * canvas.height
          pulse.endX = Math.random() * canvas.width
          pulse.endY = Math.random() * canvas.height
        }

        const x = pulse.startX + (pulse.endX - pulse.startX) * pulse.progress
        const y = pulse.startY + (pulse.endY - pulse.startY) * pulse.progress

        ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.6})`
        ctx.lineWidth = 0.5
        ctx.beginPath()
        ctx.moveTo(pulse.startX, pulse.startY)
        ctx.lineTo(pulse.endX, pulse.endY)
        ctx.stroke()

        const glowSize = 8
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, glowSize)
        gradient.addColorStop(0, `rgba(255, 255, 255, ${opacity * 2})`)
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)')
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(x, y, glowSize, 0, Math.PI * 2)
        ctx.fill()
      })

      rocketsRef.current.forEach((rocket, rocketIndex) => {
        rocket.phaseTimer++

        if (rocket.trajectory.length > 150) {
          rocket.trajectory.shift()
        }
        rocket.trajectory.push({ x: rocket.x, y: rocket.y })

        ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.4})`
        ctx.lineWidth = 1
        ctx.setLineDash([5, 5])
        ctx.beginPath()
        if (rocket.trajectory.length > 1) {
          ctx.moveTo(rocket.trajectory[0].x, rocket.trajectory[0].y)
          for (let i = 1; i < rocket.trajectory.length; i++) {
            const alpha = i / rocket.trajectory.length
            ctx.globalAlpha = alpha * 0.5
            ctx.lineTo(rocket.trajectory[i].x, rocket.trajectory[i].y)
          }
        }
        ctx.stroke()
        ctx.setLineDash([])
        ctx.globalAlpha = 1

        switch (rocket.phase) {
          case 'descending':
            rocket.velocityY += 0.05 * speed
            rocket.y += rocket.velocityY
            rocket.rotation = Math.sin(rocket.phaseTimer * 0.02) * 0.1
            rocket.thrusterMain = 0.3 + Math.random() * 0.2

            if (rocket.y > rocket.targetY - 150) {
              rocket.phase = 'hovering'
              rocket.phaseTimer = 0
            }
            break

          case 'hovering': {
            const hoverTarget = rocket.targetY - 100
            const hoverDiff = hoverTarget - rocket.y
            rocket.velocityY += hoverDiff * 0.01
            rocket.velocityY *= 0.95
            rocket.y += rocket.velocityY
            rocket.rotation = Math.sin(rocket.phaseTimer * 0.05) * 0.15
            rocket.thrusterMain = 0.6 + Math.random() * 0.3
            rocket.thrusterLeft = Math.abs(rocket.rotation) * 2
            rocket.thrusterRight = Math.abs(rocket.rotation) * 2

            if (rocket.phaseTimer > 180) {
              rocket.phase = 'landing'
              rocket.phaseTimer = 0
            }
            break
          }

          case 'landing': {
            const landTarget = rocket.targetY
            const landDiff = landTarget - rocket.y
            rocket.velocityY = landDiff * 0.02
            rocket.y += rocket.velocityY
            rocket.rotation *= 0.95
            rocket.thrusterMain = 0.8 + Math.random() * 0.2

            if (Math.abs(landDiff) < 2) {
              rocket.phase = 'landed'
              rocket.phaseTimer = 0
              rocket.y = landTarget
              rocket.velocityY = 0
              rocket.rotation = 0
            }
            break
          }

          case 'landed':
            rocket.thrusterMain *= 0.9
            rocket.thrusterLeft *= 0.9
            rocket.thrusterRight *= 0.9

            if (rocket.phaseTimer > 120) {
              rocket.phase = 'ascending'
              rocket.phaseTimer = 0
            }
            break

          case 'ascending':
            rocket.velocityY = -3 * speed
            rocket.y += rocket.velocityY
            rocket.thrusterMain = 1

            if (rocket.y < -100) {
              rocket.y = -50 - Math.random() * 100
              if (rocket.side === 'left') {
                rocket.x = canvas.width * (0.05 + Math.random() * 0.1)
              } else {
                rocket.x = canvas.width * (0.85 + Math.random() * 0.1)
              }
              rocket.targetY = canvas.height * (0.5 + Math.random() * 0.3)
              rocket.velocityY = (1.5 + Math.random()) * speed
              rocket.phase = 'descending'
              rocket.phaseTimer = 0
              rocket.trajectory = []
            }
            break
        }

        ctx.save()
        ctx.translate(rocket.x, rocket.y)
        ctx.rotate(rocket.rotation)

        if (rocket.thrusterMain > 0.1) {
          const thrusterHeight = 15 + rocket.thrusterMain * 25
          const thrusterGradient = ctx.createLinearGradient(0, 15, 0, 15 + thrusterHeight)
          thrusterGradient.addColorStop(0, `rgba(255, 255, 255, ${rocket.thrusterMain * 0.9})`)
          thrusterGradient.addColorStop(0.5, `rgba(255, 200, 100, ${rocket.thrusterMain * 0.5})`)
          thrusterGradient.addColorStop(1, 'rgba(255, 100, 0, 0)')
          
          ctx.fillStyle = thrusterGradient
          ctx.beginPath()
          ctx.moveTo(-4, 15)
          ctx.lineTo(0, 15 + thrusterHeight)
          ctx.lineTo(4, 15)
          ctx.closePath()
          ctx.fill()
        }

        if (rocket.thrusterLeft > 0.1) {
          const leftThruster = 8 + rocket.thrusterLeft * 12
          ctx.fillStyle = `rgba(255, 255, 255, ${rocket.thrusterLeft * 0.6})`
          ctx.beginPath()
          ctx.moveTo(-6, -8)
          ctx.lineTo(-6 - leftThruster, -8)
          ctx.lineTo(-6, -6)
          ctx.closePath()
          ctx.fill()
        }

        if (rocket.thrusterRight > 0.1) {
          const rightThruster = 8 + rocket.thrusterRight * 12
          ctx.fillStyle = `rgba(255, 255, 255, ${rocket.thrusterRight * 0.6})`
          ctx.beginPath()
          ctx.moveTo(6, -8)
          ctx.lineTo(6 + rightThruster, -8)
          ctx.lineTo(6, -6)
          ctx.closePath()
          ctx.fill()
        }

        ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 3})`
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity * 1.5})`
        ctx.lineWidth = 1.5

        ctx.beginPath()
        ctx.moveTo(0, -15)
        ctx.lineTo(-5, -5)
        ctx.lineTo(-5, 10)
        ctx.lineTo(-3, 15)
        ctx.lineTo(3, 15)
        ctx.lineTo(5, 10)
        ctx.lineTo(5, -5)
        ctx.closePath()
        ctx.fill()
        ctx.stroke()

        ctx.beginPath()
        ctx.moveTo(-5, 5)
        ctx.lineTo(-8, 12)
        ctx.lineTo(-5, 10)
        ctx.closePath()
        ctx.fill()
        ctx.stroke()

        ctx.beginPath()
        ctx.moveTo(5, 5)
        ctx.lineTo(8, 12)
        ctx.lineTo(5, 10)
        ctx.closePath()
        ctx.fill()
        ctx.stroke()

        ctx.restore()

        if (rocketIndex === 0) {
          ctx.fillStyle = `rgba(255, 255, 255, ${opacity * 2})`
          ctx.font = '10px monospace'
          ctx.textAlign = 'left'
          ctx.fillText(`ALT: ${Math.max(0, Math.round(rocket.targetY - rocket.y))}m`, 20, canvas.height - 60)
          ctx.fillText(`VEL: ${Math.abs(rocket.velocityY).toFixed(2)}m/s`, 20, canvas.height - 45)
          ctx.fillText(`PHASE: ${rocket.phase.toUpperCase()}`, 20, canvas.height - 30)
        }

        const landingPadX = rocket.x
        const landingPadY = rocket.targetY
        ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 2})`
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.moveTo(landingPadX - 30, landingPadY)
        ctx.lineTo(landingPadX + 30, landingPadY)
        ctx.stroke()

        ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 1})`
        ctx.lineWidth = 1
        for (let i = -3; i <= 3; i++) {
          ctx.beginPath()
          ctx.moveTo(landingPadX + i * 10, landingPadY)
          ctx.lineTo(landingPadX + i * 10 + 5, landingPadY + 5)
          ctx.stroke()
        }
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [density, speed, opacity, variant])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  )
}


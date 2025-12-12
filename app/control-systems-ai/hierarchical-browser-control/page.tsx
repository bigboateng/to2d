'use client'

import { useEffect, useRef } from 'react'

function ControlLoopAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const dpr = window.devicePixelRatio || 1
    const width = 700
    const height = 200

    canvas.width = width * dpr
    canvas.height = height * dpr
    canvas.style.width = `${width}px`
    canvas.style.height = `${height}px`
    ctx.scale(dpr, dpr)

    let animationFrame: number
    let time = 0

    const draw = () => {
      ctx.clearRect(0, 0, width, height)

      const centerY = height / 2
      const boxWidth = 90
      const boxHeight = 50

      const blocks = [
        { x: 50, label: 'Reference', sublabel: '(Task)', color: '100, 200, 255' },
        { x: 200, label: 'Controller', sublabel: '(LLM)', color: '150, 255, 150' },
        { x: 350, label: 'Plant', sublabel: '(Browser)', color: '255, 200, 100' },
        { x: 500, label: 'Sensor', sublabel: '(Screen)', color: '255, 150, 200' },
      ]

      blocks.forEach((block, i) => {
        const pulse = Math.sin(time * 2 + i * 0.5) * 0.1
        ctx.fillStyle = `rgba(${block.color}, ${0.2 + pulse})`
        ctx.strokeStyle = `rgba(${block.color}, ${0.6 + pulse})`
        ctx.lineWidth = 2

        ctx.beginPath()
        ctx.roundRect(block.x, centerY - boxHeight / 2, boxWidth, boxHeight, 6)
        ctx.fill()
        ctx.stroke()

        ctx.fillStyle = 'rgba(255, 255, 255, 0.9)'
        ctx.font = '11px monospace'
        ctx.textAlign = 'center'
        ctx.fillText(block.label, block.x + boxWidth / 2, centerY - 5)
        ctx.fillStyle = 'rgba(255, 255, 255, 0.5)'
        ctx.font = '9px monospace'
        ctx.fillText(block.sublabel, block.x + boxWidth / 2, centerY + 10)
      })

      ctx.textAlign = 'left'

      const drawArrow = (x1: number, y: number, x2: number, color: string) => {
        ctx.strokeStyle = color
        ctx.fillStyle = color
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.moveTo(x1, y)
        ctx.lineTo(x2 - 8, y)
        ctx.stroke()
        ctx.beginPath()
        ctx.moveTo(x2, y)
        ctx.lineTo(x2 - 8, y - 4)
        ctx.lineTo(x2 - 8, y + 4)
        ctx.closePath()
        ctx.fill()
      }

      drawArrow(50 + boxWidth, centerY, 200, 'rgba(100, 200, 255, 0.6)')
      drawArrow(200 + boxWidth, centerY, 350, 'rgba(150, 255, 150, 0.6)')
      drawArrow(350 + boxWidth, centerY, 500, 'rgba(255, 200, 100, 0.6)')

      ctx.strokeStyle = 'rgba(255, 150, 200, 0.4)'
      ctx.lineWidth = 2
      ctx.setLineDash([4, 4])
      ctx.beginPath()
      ctx.moveTo(500 + boxWidth / 2, centerY + boxHeight / 2)
      ctx.lineTo(500 + boxWidth / 2, centerY + 60)
      ctx.lineTo(200 + boxWidth / 2, centerY + 60)
      ctx.lineTo(200 + boxWidth / 2, centerY + boxHeight / 2 + 5)
      ctx.stroke()
      ctx.setLineDash([])

      ctx.beginPath()
      ctx.moveTo(200 + boxWidth / 2, centerY + boxHeight / 2)
      ctx.lineTo(200 + boxWidth / 2 - 4, centerY + boxHeight / 2 + 8)
      ctx.lineTo(200 + boxWidth / 2 + 4, centerY + boxHeight / 2 + 8)
      ctx.closePath()
      ctx.fillStyle = 'rgba(255, 150, 200, 0.6)'
      ctx.fill()

      ctx.fillStyle = 'rgba(255, 255, 255, 0.4)'
      ctx.font = '9px monospace'
      ctx.textAlign = 'center'
      ctx.fillText('Feedback Loop', 350 + boxWidth / 2, centerY + 75)
      ctx.textAlign = 'left'

      const signalProgress = (time * 0.5) % 4
      if (signalProgress < 3) {
        const segments = [
          { x1: 50 + boxWidth, x2: 200, y: centerY },
          { x1: 200 + boxWidth, x2: 350, y: centerY },
          { x1: 350 + boxWidth, x2: 500, y: centerY },
        ]
        const segIndex = Math.floor(signalProgress)
        if (segIndex < segments.length) {
          const seg = segments[segIndex]
          const progress = signalProgress - segIndex
          const dotX = seg.x1 + (seg.x2 - seg.x1) * progress
          ctx.fillStyle = 'rgba(255, 255, 255, 0.9)'
          ctx.beginPath()
          ctx.arc(dotX, seg.y, 4, 0, Math.PI * 2)
          ctx.fill()
        }
      }

      time += 0.016
      animationFrame = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animationFrame)
    }
  }, [])

  return (
    <div className="my-8 flex justify-center">
      <canvas
        ref={canvasRef}
        className="rounded border border-white/10"
        style={{ background: 'rgba(0, 0, 0, 0.3)' }}
      />
    </div>
  )
}

function StateSpaceDecompositionAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const dpr = window.devicePixelRatio || 1
    const width = 700
    const height = 300

    canvas.width = width * dpr
    canvas.height = height * dpr
    canvas.style.width = `${width}px`
    canvas.style.height = `${height}px`
    ctx.scale(dpr, dpr)

    let animationFrame: number
    let time = 0

    const draw = () => {
      ctx.clearRect(0, 0, width, height)

      ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)'
      ctx.lineWidth = 1
      ctx.strokeRect(30, 20, 640, 260)

      ctx.fillStyle = 'rgba(255, 255, 255, 0.5)'
      ctx.font = '11px monospace'
      ctx.fillText('State Space: x = [x_shared, x_page1, x_page2, x_page3]', 40, 40)

      ctx.fillStyle = 'rgba(100, 200, 255, 0.15)'
      ctx.fillRect(40, 55, 620, 35)
      ctx.strokeStyle = 'rgba(100, 200, 255, 0.4)'
      ctx.strokeRect(40, 55, 620, 35)

      const sharedPulse = Math.sin(time * 1.5) * 0.15
      ctx.fillStyle = `rgba(100, 200, 255, ${0.7 + sharedPulse})`
      ctx.font = '10px monospace'
      ctx.fillText('x_shared = [cookies, localStorage, proxy_state, session_tokens]', 50, 77)

      const pages = [
        { x: 55, label: 'x_page1', sublabel: 'Main Agent', color: '150, 255, 150', active: true },
        { x: 240, label: 'x_page2', sublabel: 'Tool A', color: '255, 200, 100', active: true },
        { x: 425, label: 'x_page3', sublabel: 'Tool B', color: '255, 150, 200', active: Math.sin(time) > 0 },
      ]

      pages.forEach((page, i) => {
        const alpha = page.active ? 0.3 : 0.1
        const borderAlpha = page.active ? 0.6 : 0.2
        const pulse = page.active ? Math.sin(time * 2 + i) * 0.1 : 0

        ctx.fillStyle = `rgba(${page.color}, ${alpha + pulse})`
        ctx.strokeStyle = `rgba(${page.color}, ${borderAlpha + pulse})`
        ctx.lineWidth = page.active ? 2 : 1

        ctx.beginPath()
        ctx.roundRect(page.x, 110, 170, 100, 6)
        ctx.fill()
        ctx.stroke()

        ctx.fillStyle = `rgba(255, 255, 255, ${page.active ? 0.9 : 0.4})`
        ctx.font = '11px monospace'
        ctx.fillText(page.label, page.x + 10, 130)
        ctx.fillStyle = `rgba(255, 255, 255, ${page.active ? 0.5 : 0.2})`
        ctx.font = '9px monospace'
        ctx.fillText(page.sublabel, page.x + 10, 145)

        if (page.active) {
          ctx.fillStyle = `rgba(${page.color}, 0.3)`
          ctx.font = '8px monospace'
          ctx.fillText('DOM', page.x + 15, 165)
          ctx.fillText('JS Runtime', page.x + 15, 178)
          ctx.fillText('Network', page.x + 15, 191)

          const barWidth = 80
          const barX = page.x + 75
          ;[162, 175, 188].forEach((y, j) => {
            const activity = (Math.sin(time * 3 + i + j) + 1) / 2
            ctx.fillStyle = `rgba(${page.color}, 0.2)`
            ctx.fillRect(barX, y - 6, barWidth, 8)
            ctx.fillStyle = `rgba(${page.color}, 0.6)`
            ctx.fillRect(barX, y - 6, barWidth * activity, 8)
          })
        }

        ctx.strokeStyle = `rgba(${page.color}, 0.3)`
        ctx.setLineDash([3, 3])
        ctx.beginPath()
        ctx.moveTo(page.x + 85, 110)
        ctx.lineTo(page.x + 85, 90)
        ctx.stroke()
        ctx.setLineDash([])
      })

      ctx.fillStyle = 'rgba(255, 255, 255, 0.4)'
      ctx.font = '9px monospace'
      ctx.fillText('Observation: y₁ = g(x_shared, x_page1)', 55, 230)
      ctx.fillText('Observation: y₂ = g(x_shared, x_page2)', 240, 230)
      if (Math.sin(time) > 0) {
        ctx.fillText('Observation: y₃ = g(x_shared, x_page3)', 425, 230)
      }

      ctx.fillStyle = 'rgba(255, 255, 255, 0.3)'
      ctx.font = '9px monospace'
      ctx.fillText('Actuation: u₁ → x_page1', 55, 250)
      ctx.fillText('Actuation: u₂ → x_page2', 240, 250)
      if (Math.sin(time) > 0) {
        ctx.fillText('Actuation: u₃ → x_page3', 425, 250)
      }

      time += 0.016
      animationFrame = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animationFrame)
    }
  }, [])

  return (
    <div className="my-8 flex justify-center">
      <canvas
        ref={canvasRef}
        className="rounded border border-white/10"
        style={{ background: 'rgba(0, 0, 0, 0.3)' }}
      />
    </div>
  )
}

function HierarchicalControlAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const dpr = window.devicePixelRatio || 1
    const width = 700
    const height = 400

    canvas.width = width * dpr
    canvas.height = height * dpr
    canvas.style.width = `${width}px`
    canvas.style.height = `${height}px`
    ctx.scale(dpr, dpr)

    let animationFrame: number
    let time = 0

    const draw = () => {
      ctx.clearRect(0, 0, width, height)

      ctx.fillStyle = 'rgba(100, 180, 255, 0.1)'
      ctx.strokeStyle = 'rgba(100, 180, 255, 0.3)'
      ctx.lineWidth = 1
      ctx.beginPath()
      ctx.roundRect(20, 15, 660, 70, 8)
      ctx.fill()
      ctx.stroke()

      ctx.fillStyle = 'rgba(255, 255, 255, 0.4)'
      ctx.font = '9px monospace'
      ctx.fillText('SUPERVISORY CONTROL LAYER', 30, 32)

      const supervisorPulse = Math.sin(time * 2) * 0.1
      ctx.fillStyle = `rgba(100, 180, 255, ${0.3 + supervisorPulse})`
      ctx.strokeStyle = `rgba(100, 180, 255, ${0.7 + supervisorPulse})`
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.roundRect(width / 2 - 90, 40, 180, 35, 6)
      ctx.fill()
      ctx.stroke()

      ctx.fillStyle = 'rgba(255, 255, 255, 0.9)'
      ctx.font = '11px monospace'
      ctx.textAlign = 'center'
      ctx.fillText('Supervisory Controller', width / 2, 62)
      ctx.textAlign = 'left'

      ctx.fillStyle = 'rgba(150, 255, 150, 0.08)'
      ctx.strokeStyle = 'rgba(150, 255, 150, 0.2)'
      ctx.lineWidth = 1
      ctx.beginPath()
      ctx.roundRect(20, 100, 660, 100, 8)
      ctx.fill()
      ctx.stroke()

      ctx.fillStyle = 'rgba(255, 255, 255, 0.4)'
      ctx.font = '9px monospace'
      ctx.fillText('LOCAL CONTROLLER LAYER', 30, 117)

      const localControllers = [
        { x: 100, label: 'Local Controller A', color: '150, 255, 150' },
        { x: 300, label: 'Local Controller B', color: '255, 200, 100' },
        { x: 500, label: 'Local Controller C', color: '255, 150, 200' },
      ]

      localControllers.forEach((ctrl, i) => {
        const pulse = Math.sin(time * 2 + i * 0.7) * 0.1
        ctx.fillStyle = `rgba(${ctrl.color}, ${0.25 + pulse})`
        ctx.strokeStyle = `rgba(${ctrl.color}, ${0.5 + pulse})`
        ctx.lineWidth = 1.5
        ctx.beginPath()
        ctx.roundRect(ctrl.x - 55, 135, 110, 45, 5)
        ctx.fill()
        ctx.stroke()

        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)'
        ctx.font = '9px monospace'
        ctx.textAlign = 'center'
        ctx.fillText(ctrl.label, ctrl.x, 162)
        ctx.textAlign = 'left'

        ctx.strokeStyle = `rgba(${ctrl.color}, 0.4)`
        ctx.setLineDash([3, 3])
        ctx.beginPath()
        ctx.moveTo(width / 2, 75)
        ctx.lineTo(ctrl.x, 135)
        ctx.stroke()
        ctx.setLineDash([])

        const signalTime = (time + i * 0.5) % 2
        if (signalTime < 1) {
          const progress = signalTime
          const startX = width / 2
          const startY = 75
          const endX = ctrl.x
          const endY = 135
          const dotX = startX + (endX - startX) * progress
          const dotY = startY + (endY - startY) * progress
          ctx.fillStyle = `rgba(${ctrl.color}, 0.9)`
          ctx.beginPath()
          ctx.arc(dotX, dotY, 3, 0, Math.PI * 2)
          ctx.fill()
        }
      })

      ctx.fillStyle = 'rgba(255, 200, 100, 0.08)'
      ctx.strokeStyle = 'rgba(255, 200, 100, 0.2)'
      ctx.lineWidth = 1
      ctx.beginPath()
      ctx.roundRect(20, 215, 660, 170, 8)
      ctx.fill()
      ctx.stroke()

      ctx.fillStyle = 'rgba(255, 255, 255, 0.4)'
      ctx.font = '9px monospace'
      ctx.fillText('PLANT LAYER (Browser Context)', 30, 232)

      const pages = [
        { x: 100, label: 'Page 1 (Main)', color: '150, 255, 150' },
        { x: 300, label: 'Page 2 (Tool)', color: '255, 200, 100' },
        { x: 500, label: 'Page 3 (Tool)', color: '255, 150, 200' },
      ]

      pages.forEach((page, i) => {
        ctx.strokeStyle = `rgba(${localControllers[i].color}, 0.3)`
        ctx.setLineDash([3, 3])
        ctx.beginPath()
        ctx.moveTo(localControllers[i].x, 180)
        ctx.lineTo(page.x, 255)
        ctx.stroke()
        ctx.setLineDash([])

        const pulse = Math.sin(time * 1.5 + i * 0.5) * 0.08
        ctx.fillStyle = `rgba(${page.color}, ${0.15 + pulse})`
        ctx.strokeStyle = `rgba(${page.color}, ${0.4 + pulse})`
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.roundRect(page.x - 50, 255, 100, 70, 4)
        ctx.fill()
        ctx.stroke()

        ctx.fillStyle = 'rgba(255, 255, 255, 0.7)'
        ctx.font = '9px monospace'
        ctx.textAlign = 'center'
        ctx.fillText(page.label, page.x, 295)
        ctx.textAlign = 'left'
      })

      ctx.fillStyle = 'rgba(100, 200, 255, 0.15)'
      ctx.strokeStyle = 'rgba(100, 200, 255, 0.4)'
      ctx.lineWidth = 1
      ctx.beginPath()
      ctx.roundRect(50, 340, 600, 30, 4)
      ctx.fill()
      ctx.stroke()

      ctx.fillStyle = 'rgba(100, 200, 255, 0.8)'
      ctx.font = '9px monospace'
      ctx.textAlign = 'center'
      ctx.fillText('Shared State: cookies, localStorage, proxy config', width / 2, 360)
      ctx.textAlign = 'left'

      pages.forEach((page) => {
        ctx.strokeStyle = 'rgba(100, 200, 255, 0.2)'
        ctx.setLineDash([2, 2])
        ctx.beginPath()
        ctx.moveTo(page.x, 325)
        ctx.lineTo(page.x, 340)
        ctx.stroke()
        ctx.setLineDash([])
      })

      time += 0.016
      animationFrame = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animationFrame)
    }
  }, [])

  return (
    <div className="my-8 flex justify-center">
      <canvas
        ref={canvasRef}
        className="rounded border border-white/10"
        style={{ background: 'rgba(0, 0, 0, 0.3)' }}
      />
    </div>
  )
}

function SensorFusionAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const dpr = window.devicePixelRatio || 1
    const width = 650
    const height = 320

    canvas.width = width * dpr
    canvas.height = height * dpr
    canvas.style.width = `${width}px`
    canvas.style.height = `${height}px`
    ctx.scale(dpr, dpr)

    let animationFrame: number
    let time = 0

    const draw = () => {
      ctx.clearRect(0, 0, width, height)

      ctx.fillStyle = 'rgba(255, 255, 255, 0.4)'
      ctx.font = '10px monospace'
      ctx.textAlign = 'center'
      ctx.fillText('PARALLEL OBSERVER ARCHITECTURE', width / 2, 20)
      ctx.textAlign = 'left'

      const sensors = [
        { x: 80, label: 'Observer 1', source: 'Source A', color: '100, 200, 255', reliability: 0.95 },
        { x: 220, label: 'Observer 2', source: 'Source B', color: '150, 255, 150', reliability: 0.88 },
        { x: 360, label: 'Observer 3', source: 'Source C', color: '255, 200, 100', reliability: 0.82 },
        { x: 500, label: 'Observer 4', source: 'Source D', color: '255, 150, 200', reliability: 0.90 },
      ]

      sensors.forEach((sensor, i) => {
        const pulse = Math.sin(time * 2 + i * 0.8) * 0.1
        
        ctx.fillStyle = `rgba(${sensor.color}, ${0.15 + pulse})`
        ctx.strokeStyle = `rgba(${sensor.color}, ${0.4 + pulse})`
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.roundRect(sensor.x - 45, 40, 90, 35, 4)
        ctx.fill()
        ctx.stroke()

        ctx.fillStyle = 'rgba(255, 255, 255, 0.6)'
        ctx.font = '8px monospace'
        ctx.textAlign = 'center'
        ctx.fillText(sensor.source, sensor.x, 55)
        ctx.fillStyle = 'rgba(255, 255, 255, 0.4)'
        ctx.fillText('(Page)', sensor.x, 67)

        ctx.strokeStyle = `rgba(${sensor.color}, 0.3)`
        ctx.setLineDash([3, 3])
        ctx.beginPath()
        ctx.moveTo(sensor.x, 75)
        ctx.lineTo(sensor.x, 100)
        ctx.stroke()
        ctx.setLineDash([])

        ctx.fillStyle = `rgba(${sensor.color}, ${0.25 + pulse})`
        ctx.strokeStyle = `rgba(${sensor.color}, ${0.5 + pulse})`
        ctx.lineWidth = 1.5
        ctx.beginPath()
        ctx.roundRect(sensor.x - 50, 100, 100, 50, 5)
        ctx.fill()
        ctx.stroke()

        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)'
        ctx.font = '9px monospace'
        ctx.fillText(sensor.label, sensor.x, 120)
        ctx.fillStyle = 'rgba(255, 255, 255, 0.5)'
        ctx.font = '8px monospace'
        ctx.fillText(`ρ = ${sensor.reliability.toFixed(2)}`, sensor.x, 138)

        ctx.strokeStyle = `rgba(${sensor.color}, 0.4)`
        ctx.setLineDash([3, 3])
        ctx.beginPath()
        ctx.moveTo(sensor.x, 150)
        ctx.lineTo(sensor.x, 175)
        ctx.lineTo(width / 2, 200)
        ctx.stroke()
        ctx.setLineDash([])

        const dataFlow = (time * 0.8 + i * 0.3) % 2
        if (dataFlow < 1) {
          const progress = dataFlow
          let dotX: number, dotY: number
          if (progress < 0.5) {
            dotX = sensor.x
            dotY = 150 + (175 - 150) * (progress * 2)
          } else {
            const p2 = (progress - 0.5) * 2
            dotX = sensor.x + (width / 2 - sensor.x) * p2
            dotY = 175 + (200 - 175) * p2
          }
          ctx.fillStyle = `rgba(${sensor.color}, 0.9)`
          ctx.beginPath()
          ctx.arc(dotX, dotY, 3, 0, Math.PI * 2)
          ctx.fill()
        }
      })

      const fusionPulse = Math.sin(time * 1.5) * 0.1
      ctx.fillStyle = `rgba(255, 255, 255, ${0.15 + fusionPulse})`
      ctx.strokeStyle = `rgba(255, 255, 255, ${0.5 + fusionPulse})`
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.roundRect(width / 2 - 70, 200, 140, 45, 6)
      ctx.fill()
      ctx.stroke()

      ctx.fillStyle = 'rgba(255, 255, 255, 0.9)'
      ctx.font = '11px monospace'
      ctx.fillText('Sensor Fusion', width / 2, 220)
      ctx.fillStyle = 'rgba(255, 255, 255, 0.5)'
      ctx.font = '8px monospace'
      ctx.fillText('Weighted Average', width / 2, 235)

      ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)'
      ctx.setLineDash([3, 3])
      ctx.beginPath()
      ctx.moveTo(width / 2, 245)
      ctx.lineTo(width / 2, 270)
      ctx.stroke()
      ctx.setLineDash([])

      ctx.fillStyle = `rgba(100, 200, 255, ${0.2 + fusionPulse})`
      ctx.strokeStyle = `rgba(100, 200, 255, ${0.6 + fusionPulse})`
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.roundRect(width / 2 - 80, 270, 160, 40, 6)
      ctx.fill()
      ctx.stroke()

      ctx.fillStyle = 'rgba(255, 255, 255, 0.9)'
      ctx.font = '11px monospace'
      ctx.fillText('Supervisory Agent', width / 2, 295)
      ctx.textAlign = 'left'

      time += 0.016
      animationFrame = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animationFrame)
    }
  }, [])

  return (
    <div className="my-8 flex justify-center">
      <canvas
        ref={canvasRef}
        className="rounded border border-white/10"
        style={{ background: 'rgba(0, 0, 0, 0.3)' }}
      />
    </div>
  )
}

function FailureIsolationAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const dpr = window.devicePixelRatio || 1
    const width = 650
    const height = 280

    canvas.width = width * dpr
    canvas.height = height * dpr
    canvas.style.width = `${width}px`
    canvas.style.height = `${height}px`
    ctx.scale(dpr, dpr)

    let animationFrame: number
    let time = 0

    const draw = () => {
      ctx.clearRect(0, 0, width, height)

      ctx.strokeStyle = 'rgba(255, 100, 100, 0.3)'
      ctx.lineWidth = 1
      ctx.beginPath()
      ctx.roundRect(20, 20, 290, 120, 8)
      ctx.stroke()

      ctx.fillStyle = 'rgba(255, 100, 100, 0.7)'
      ctx.font = '10px monospace'
      ctx.fillText('SINGLE-CONTEXT (Unstable)', 30, 38)

      const singlePhases = ['Tool fails', 'Page crashes', 'Agent loses state', 'WORKFLOW FAILS']
      const singleX = [50, 120, 200, 250]
      const singleY = 80

      singlePhases.forEach((phase, i) => {
        const isActive = (time * 0.5) % 4 > i
        const isCurrent = Math.floor((time * 0.5) % 4) === i

        ctx.fillStyle = isActive ? 'rgba(255, 100, 100, 0.3)' : 'rgba(255, 255, 255, 0.1)'
        ctx.strokeStyle = isCurrent ? 'rgba(255, 100, 100, 0.8)' : 'rgba(255, 100, 100, 0.3)'
        ctx.lineWidth = isCurrent ? 2 : 1

        if (i < 3) {
          ctx.beginPath()
          ctx.arc(singleX[i], singleY, 15, 0, Math.PI * 2)
          ctx.fill()
          ctx.stroke()

          ctx.strokeStyle = 'rgba(255, 100, 100, 0.4)'
          ctx.beginPath()
          ctx.moveTo(singleX[i] + 15, singleY)
          ctx.lineTo(singleX[i + 1] - 15, singleY)
          ctx.stroke()
        }

        ctx.fillStyle = isActive ? 'rgba(255, 100, 100, 0.8)' : 'rgba(255, 255, 255, 0.4)'
        ctx.font = '7px monospace'
        ctx.textAlign = 'center'
        ctx.fillText(phase, singleX[i], singleY + 30)
      })

      ctx.textAlign = 'left'

      ctx.strokeStyle = 'rgba(100, 255, 150, 0.3)'
      ctx.lineWidth = 1
      ctx.beginPath()
      ctx.roundRect(340, 20, 290, 120, 8)
      ctx.stroke()

      ctx.fillStyle = 'rgba(100, 255, 150, 0.7)'
      ctx.font = '10px monospace'
      ctx.fillText('MULTI-CONTEXT (Stable)', 350, 38)

      const multiPhases = [
        { label: 'Tool fails', y: 65, outcome: 'Tool page crashes' },
        { label: 'Error returned', y: 95, outcome: 'Main unaffected' },
      ]

      multiPhases.forEach((phase, i) => {
        const phaseTime = (time * 0.5) % 3
        const isActive = phaseTime > i

        ctx.fillStyle = isActive ? 'rgba(100, 255, 150, 0.3)' : 'rgba(255, 255, 255, 0.1)'
        ctx.strokeStyle = 'rgba(100, 255, 150, 0.4)'
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.roundRect(360, phase.y - 12, 80, 24, 4)
        ctx.fill()
        ctx.stroke()

        ctx.fillStyle = isActive ? 'rgba(100, 255, 150, 0.8)' : 'rgba(255, 255, 255, 0.5)'
        ctx.font = '8px monospace'
        ctx.textAlign = 'center'
        ctx.fillText(phase.label, 400, phase.y + 4)

        ctx.strokeStyle = 'rgba(100, 255, 150, 0.3)'
        ctx.beginPath()
        ctx.moveTo(440, phase.y)
        ctx.lineTo(470, phase.y)
        ctx.stroke()

        ctx.fillStyle = 'rgba(100, 255, 150, 0.2)'
        ctx.strokeStyle = 'rgba(100, 255, 150, 0.4)'
        ctx.beginPath()
        ctx.roundRect(470, phase.y - 12, 90, 24, 4)
        ctx.fill()
        ctx.stroke()

        ctx.fillStyle = 'rgba(100, 255, 150, 0.8)'
        ctx.font = '8px monospace'
        ctx.fillText(phase.outcome, 515, phase.y + 4)
      })

      const recoveryTime = (time * 0.5) % 3
      if (recoveryTime > 2) {
        ctx.fillStyle = 'rgba(100, 255, 150, 0.4)'
        ctx.strokeStyle = 'rgba(100, 255, 150, 0.7)'
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.roundRect(400, 115, 130, 20, 4)
        ctx.fill()
        ctx.stroke()

        ctx.fillStyle = 'rgba(255, 255, 255, 0.9)'
        ctx.font = '9px monospace'
        ctx.fillText('WORKFLOW CONTINUES', 465, 129)
      }

      ctx.textAlign = 'left'

      ctx.fillStyle = 'rgba(255, 255, 255, 0.4)'
      ctx.font = '10px monospace'
      ctx.fillText('DISTURBANCE REJECTION', 30, 170)

      const stages = [
        { x: 50, label: 'Disturbance', sublabel: 'Network/Site Change' },
        { x: 200, label: 'Detection', sublabel: 'State Observation' },
        { x: 350, label: 'Correction', sublabel: 'Fallback Strategy' },
        { x: 500, label: 'Recovery', sublabel: 'Stable Output' },
      ]

      stages.forEach((stage, i) => {
        const progress = (time * 0.4) % 4
        const isActive = progress > i
        const isCurrent = Math.floor(progress) === i

        ctx.fillStyle = isActive ? 'rgba(100, 200, 255, 0.25)' : 'rgba(255, 255, 255, 0.1)'
        ctx.strokeStyle = isCurrent ? 'rgba(100, 200, 255, 0.8)' : 'rgba(100, 200, 255, 0.3)'
        ctx.lineWidth = isCurrent ? 2 : 1

        ctx.beginPath()
        ctx.roundRect(stage.x - 40, 190, 100, 50, 5)
        ctx.fill()
        ctx.stroke()

        ctx.fillStyle = isActive ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.5)'
        ctx.font = '9px monospace'
        ctx.textAlign = 'center'
        ctx.fillText(stage.label, stage.x + 10, 210)
        ctx.fillStyle = 'rgba(255, 255, 255, 0.4)'
        ctx.font = '7px monospace'
        ctx.fillText(stage.sublabel, stage.x + 10, 228)

        if (i < stages.length - 1) {
          ctx.strokeStyle = 'rgba(100, 200, 255, 0.3)'
          ctx.beginPath()
          ctx.moveTo(stage.x + 60, 215)
          ctx.lineTo(stages[i + 1].x - 40, 215)
          ctx.stroke()

          if (isActive && progress < i + 1) {
            const arrowProgress = progress - i
            const arrowX = stage.x + 60 + (stages[i + 1].x - 40 - stage.x - 60) * arrowProgress
            ctx.fillStyle = 'rgba(100, 200, 255, 0.9)'
            ctx.beginPath()
            ctx.arc(arrowX, 215, 4, 0, Math.PI * 2)
            ctx.fill()
          }
        }
      })

      ctx.textAlign = 'left'

      time += 0.016
      animationFrame = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animationFrame)
    }
  }, [])

  return (
    <div className="my-8 flex justify-center">
      <canvas
        ref={canvasRef}
        className="rounded border border-white/10"
        style={{ background: 'rgba(0, 0, 0, 0.3)' }}
      />
    </div>
  )
}

export default function HierarchicalBrowserControlPage() {
  return (
    <div className="space-y-12 max-w-3xl">
      <section>
        <h1 className="text-3xl font-thin tracking-tight mb-4">
          Hierarchical Control for Browser Automation
        </h1>
        <p className="text-white/50 text-sm mb-2">
          Applying supervisory control and distributed systems theory to agentic architectures
        </p>
        <p className="text-white/40 text-xs mb-8">
          December 9, 2025
        </p>
      </section>

      <article className="prose prose-invert max-w-none">
        <div className="text-white/70 text-sm leading-relaxed space-y-6">
          
          <section className="border-l-2 border-white/20 pl-4 py-2 bg-white/5">
            <h2 className="text-lg font-thin text-white/90 mb-3">Abstract</h2>
            <p>
              Browser automation agents face a fundamental architectural constraint: single-page state binding forces sequential, destructive navigation patterns that mirror the limitations of single-loop control systems. This paper presents multi-context browser control through the lens of control systems engineering, demonstrating that isolated page spawning enables a transition from monolithic to hierarchical control architectures. We draw parallels to supervisory control, distributed model predictive control (DMPC), and sensor fusion strategies, showing how concepts from aerospace, chemical process control, and autonomous vehicles inform the design of robust agentic systems.
            </p>
          </section>

          <h2 className="text-xl font-thin text-white/90 mt-10 mb-4">1. The Control Problem in Browser Automation</h2>

          <h3 className="text-lg font-thin text-white/80 mt-6 mb-3">1.1 Agents as Feedback Controllers</h3>
          
          <p>
            At its core, a browser automation agent is a feedback control system:
          </p>

          <ControlLoopAnimation />

          <ul className="text-white/60 space-y-2 ml-6 list-disc">
            <li><strong className="text-white/80">Reference signal</strong>: The task specification ("Fill out this form and submit")</li>
            <li><strong className="text-white/80">Controller</strong>: The LLM reasoning about actions to take</li>
            <li><strong className="text-white/80">Plant</strong>: The browser environment being manipulated</li>
            <li><strong className="text-white/80">Sensor/Observer</strong>: Screenshots and DOM state returned to the agent</li>
            <li><strong className="text-white/80">Actuation</strong>: Mouse clicks, keyboard input, navigation commands</li>
          </ul>

          <h3 className="text-lg font-thin text-white/80 mt-6 mb-3">1.2 The Single-Loop Limitation</h3>
          
          <p>
            Traditional browser agents operate as <strong className="text-white/80">single-input single-output (SISO) controllers</strong> with one observation channel (the current page) and one actuation channel (commands to that page).
          </p>

          <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="text-left py-2 px-3 text-white/70 font-medium">Control Theory Concept</th>
                  <th className="text-left py-2 px-3 text-white/70 font-medium">Browser Agent Manifestation</th>
                </tr>
              </thead>
              <tbody className="text-white/60">
                <tr className="border-b border-white/10">
                  <td className="py-2 px-3">Limited bandwidth</td>
                  <td className="py-2 px-3">Can only observe/actuate one page</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-2 px-3">No parallel estimation</td>
                  <td className="py-2 px-3">Cannot gather information from multiple sources simultaneously</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-2 px-3">State destruction on mode switch</td>
                  <td className="py-2 px-3">Navigation overwrites current context</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-2 px-3">No hierarchical decomposition</td>
                  <td className="py-2 px-3">All tasks handled by single control loop</td>
                </tr>
                <tr>
                  <td className="py-2 px-3">Coupled disturbance response</td>
                  <td className="py-2 px-3">External changes affect entire system</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-white/80 italic">
            Industrial control systems solved these problems decades ago through multi-loop architectures, supervisory control, and distributed controllers.
          </p>

          <h2 className="text-xl font-thin text-white/90 mt-10 mb-4">2. State-Space Representation</h2>

          <p>
            In control theory, a system is described by its state-space representation:
          </p>

          <div className="bg-black/40 border border-white/10 rounded p-4 my-4 font-mono text-sm">
            <p className="text-white/70">ẋ = f(x, u)    <span className="text-white/40">// state dynamics</span></p>
            <p className="text-white/70">y = g(x)       <span className="text-white/40">// observation equation</span></p>
          </div>

          <p>
            For browser automation:
          </p>

          <ul className="text-white/60 space-y-2 ml-6 list-disc">
            <li><strong className="text-white/80">State vector x</strong>: Complete browser state (DOM, cookies, localStorage, network state)</li>
            <li><strong className="text-white/80">Input vector u</strong>: Agent actions (click, type, navigate, scroll)</li>
            <li><strong className="text-white/80">Output vector y</strong>: Observable state (screenshot, accessibility tree)</li>
          </ul>

          <p className="text-white/80 font-medium mt-4">
            The critical insight: the state space is partitioned across pages, but certain state components are shared across the partition.
          </p>

          <StateSpaceDecompositionAnimation />

          <div className="bg-black/40 border border-white/10 rounded p-4 my-4 font-mono text-xs">
            <p className="text-white/70 mb-2">x = [x_shared, x_page1, x_page2, ..., x_pageN]</p>
            <p className="text-white/50 mb-1">where:</p>
            <p className="text-white/60 ml-4">x_shared = [cookies, localStorage, proxy_state, session_tokens]</p>
            <p className="text-white/60 ml-4">x_pageI  = [DOM_I, render_state_I, JS_runtime_I, network_I]</p>
          </div>

          <h3 className="text-lg font-thin text-white/80 mt-6 mb-3">2.1 Multi-Context as State-Space Decomposition</h3>
          
          <p>
            With page spawning capability, the architecture supports <strong className="text-white/80">parallel state partitions</strong>:
          </p>

          <div className="bg-black/40 border border-white/10 rounded p-4 my-4 font-mono text-xs">
            <p className="text-white/70">y₁ = g(x_shared, x_page1)    <span className="text-white/40">// Main agent observes page 1</span></p>
            <p className="text-white/70">y₂ = g(x_shared, x_page2)    <span className="text-white/40">// Tool observes page 2</span></p>
            <p className="text-white/70">y₃ = g(x_shared, x_page3)    <span className="text-white/40">// Another tool observes page 3</span></p>
            <p className="text-white/50 mt-2">u₁ affects x_page1           <span className="text-white/40">// Main agent actuates page 1</span></p>
            <p className="text-white/50">u₂ affects x_page2           <span className="text-white/40">// Tool actuates page 2</span></p>
            <p className="text-white/50">u₃ affects x_page3           <span className="text-white/40">// Tool actuates page 3</span></p>
          </div>

          <p>
            Critically, <strong className="text-white/80">x_shared is accessible to all controllers</strong>, enabling authenticated operations across all pages.
          </p>

          <h2 className="text-xl font-thin text-white/90 mt-10 mb-4">3. Hierarchical Control Architecture</h2>

          <h3 className="text-lg font-thin text-white/80 mt-6 mb-3">3.1 Supervisory Control Framework</h3>
          
          <p>
            The multi-context architecture naturally maps to <strong className="text-white/80">supervisory control</strong>, a well-established pattern in industrial automation:
          </p>

          <HierarchicalControlAnimation />

          <h3 className="text-lg font-thin text-white/80 mt-6 mb-3">3.2 Control Hierarchy Levels</h3>

          <div className="space-y-4">
            <div className="border border-white/10 p-4 rounded">
              <p className="text-white/80 font-medium mb-2">Level 0 — Plant</p>
              <p className="text-white/60 text-sm">The browser context containing all pages and shared state</p>
            </div>
            
            <div className="border border-white/10 p-4 rounded">
              <p className="text-white/80 font-medium mb-2">Level 1 — Local Controllers</p>
              <p className="text-white/60 text-sm mb-2">Tools that operate on specific pages:</p>
              <ul className="text-white/50 text-sm space-y-1 ml-4 list-disc">
                <li>Receive high-level objectives from supervisory layer</li>
                <li>Execute local control loops to achieve objectives</li>
                <li>Return structured results to supervisory layer</li>
                <li>Manage their own page lifecycle</li>
              </ul>
            </div>
            
            <div className="border border-white/10 p-4 rounded">
              <p className="text-white/80 font-medium mb-2">Level 2 — Supervisory Controller</p>
              <p className="text-white/60 text-sm mb-2">The primary agent:</p>
              <ul className="text-white/50 text-sm space-y-1 ml-4 list-disc">
                <li>Decomposes complex tasks into subtasks</li>
                <li>Dispatches subtasks to appropriate local controllers</li>
                <li>Aggregates results and maintains global state estimate</li>
                <li>Handles exceptions and coordinates recovery</li>
              </ul>
            </div>
          </div>

          <h2 className="text-xl font-thin text-white/90 mt-10 mb-4">4. Parallel Observation and Sensor Fusion</h2>

          <h3 className="text-lg font-thin text-white/80 mt-6 mb-3">4.1 Aerospace Analogy: Multiple Kalman Filters</h3>
          
          <p>
            In aerospace systems, multiple observers process different sensor streams. Each filter processes a specific sensor modality, has its own noise characteristics, and provides a state estimate. The fusion layer combines estimates weighted by confidence.
          </p>

          <SensorFusionAnimation />

          <h3 className="text-lg font-thin text-white/80 mt-6 mb-3">4.2 Browser Automation Parallel</h3>
          
          <p>
            In browser automation, multiple pages function as independent observers:
          </p>

          <ul className="text-white/60 space-y-2 ml-6 list-disc">
            <li>Each page provides a different "sensor reading" from a different source</li>
            <li>Each observer has reliability weight (site availability, selector stability)</li>
            <li>The supervisory agent fuses these observations</li>
            <li>Weighted averaging produces more robust estimates</li>
          </ul>

          <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="text-left py-2 px-3 text-white/70 font-medium">Aerospace Concept</th>
                  <th className="text-left py-2 px-3 text-white/70 font-medium">Browser Automation Equivalent</th>
                </tr>
              </thead>
              <tbody className="text-white/60">
                <tr className="border-b border-white/10">
                  <td className="py-2 px-3">Sensor modality</td>
                  <td className="py-2 px-3">Web source (news, social, market, regulatory)</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-2 px-3">Measurement noise</td>
                  <td className="py-2 px-3">Site reliability, selector stability</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-2 px-3">State estimate</td>
                  <td className="py-2 px-3">Extracted data with confidence</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-2 px-3">Kalman filter</td>
                  <td className="py-2 px-3">Page-specific extraction logic</td>
                </tr>
                <tr>
                  <td className="py-2 px-3">Sensor fusion</td>
                  <td className="py-2 px-3">Confidence-weighted aggregation</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-thin text-white/90 mt-10 mb-4">5. Stability and Failure Mode Analysis</h2>

          <h3 className="text-lg font-thin text-white/80 mt-6 mb-3">5.1 Failure Mode Isolation</h3>
          
          <p>
            A key property of multi-context architecture is <strong className="text-white/80">failure isolation</strong>. In control theory, this is analogous to fault-tolerant control systems where subsystem failures don't cascade to global failure.
          </p>

          <FailureIsolationAnimation />

          <h3 className="text-lg font-thin text-white/80 mt-6 mb-3">5.2 BIBO Stability Properties</h3>
          
          <p>
            <strong className="text-white/80">Bounded-Input Bounded-Output (BIBO) Stability</strong> requires:
          </p>

          <ul className="text-white/60 space-y-2 ml-6 list-disc">
            <li>Bounded tool inputs (valid URLs, reasonable parameters)</li>
            <li>Bounded outputs (structured results, error messages)</li>
            <li>Tools should never hang indefinitely or crash the browser context</li>
            <li>Timeouts and cleanup ensure bounded execution time</li>
          </ul>

          <h3 className="text-lg font-thin text-white/80 mt-6 mb-3">5.3 Disturbance Rejection</h3>
          
          <p>
            Robust tools implement disturbance rejection patterns:
          </p>

          <div className="space-y-3">
            <div className="border border-white/10 p-3 rounded">
              <p className="text-white/80 text-sm font-medium">1. Sensor Redundancy</p>
              <p className="text-white/50 text-xs">Multiple extraction strategies (CSS selectors, ARIA labels, text matching)</p>
            </div>
            <div className="border border-white/10 p-3 rounded">
              <p className="text-white/80 text-sm font-medium">2. Retry with Backoff</p>
              <p className="text-white/50 text-xs">Exponential backoff for transient network failures</p>
            </div>
            <div className="border border-white/10 p-3 rounded">
              <p className="text-white/80 text-sm font-medium">3. Graceful Degradation</p>
              <p className="text-white/50 text-xs">Return partial results with confidence indicators</p>
            </div>
          </div>

          <h2 className="text-xl font-thin text-white/90 mt-10 mb-4">6. Chemical Process Control Analogy</h2>

          <p>
            Chemical plants employ a well-established control hierarchy that directly maps to browser automation:
          </p>

          <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="text-left py-2 px-3 text-white/70 font-medium">Process Control Level</th>
                  <th className="text-left py-2 px-3 text-white/70 font-medium">Browser Automation Equivalent</th>
                </tr>
              </thead>
              <tbody className="text-white/60">
                <tr className="border-b border-white/10">
                  <td className="py-2 px-3">Level 3: Supervisory/Optimization</td>
                  <td className="py-2 px-3">Primary Agent (LLM reasoning)</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-2 px-3">Level 2: Advanced Process Control</td>
                  <td className="py-2 px-3">Tool invocations and coordination</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-2 px-3">Level 1: Regulatory Control (PID)</td>
                  <td className="py-2 px-3">Tool internal logic (click, fill, extract)</td>
                </tr>
                <tr>
                  <td className="py-2 px-3">Level 0: Sensors and Actuators</td>
                  <td className="py-2 px-3">Playwright commands</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-thin text-white/90 mt-10 mb-4">7. Architectural Constraints as Control-Theoretic Boundaries</h2>

          <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="text-left py-2 px-3 text-white/70 font-medium">Browser Limitation</th>
                  <th className="text-left py-2 px-3 text-white/70 font-medium">Control Theory Analog</th>
                </tr>
              </thead>
              <tbody className="text-white/60">
                <tr className="border-b border-white/10">
                  <td className="py-2 px-3">No cross-page communication</td>
                  <td className="py-2 px-3">No direct inter-controller coupling</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-2 px-3">Sequential sub-agent execution</td>
                  <td className="py-2 px-3">Time-sliced control loops</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-2 px-3">Page lifetime = tool call duration</td>
                  <td className="py-2 px-3">Controllers without persistent internal state</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-2 px-3">Shared cookies/storage only</td>
                  <td className="py-2 px-3">Limited shared state space</td>
                </tr>
                <tr>
                  <td className="py-2 px-3">Single browser context</td>
                  <td className="py-2 px-3">Single plant instance</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-thin text-white/90 mt-10 mb-4">8. Conclusion</h2>

          <p>
            Multi-context browser control represents a fundamental architectural evolution that has clear parallels in decades of control systems engineering. By framing the browser context as a shared plant, the primary agent as a supervisory controller, and spawned pages as local controllers, we can apply well-established principles from hierarchical control, distributed systems, and sensor fusion.
          </p>

          <p className="text-white/80 font-medium">
            Key insights from the control-theoretic perspective:
          </p>

          <ol className="text-white/60 space-y-3 ml-6 list-decimal">
            <li><strong className="text-white/80">State-Space Decomposition</strong>: Multi-context enables parallel observation and actuation on partitioned state while maintaining coupling through shared session state.</li>
            <li><strong className="text-white/80">Hierarchical Control</strong>: The architecture naturally supports supervisory patterns where high-level reasoning is separated from low-level actuation.</li>
            <li><strong className="text-white/80">Parallel Observation</strong>: Multiple pages functioning as independent observers improves information gathering, analogous to sensor fusion in aerospace systems.</li>
            <li><strong className="text-white/80">Failure Isolation</strong>: Page-level isolation provides disturbance rejection properties that make the overall system more robust.</li>
          </ol>

          <p className="text-white/80 italic mt-6">
            The page spawning primitive is small in implementation but significant in architectural impact. It transforms browser automation from single-loop control to distributed hierarchical control, unlocking patterns that industrial control systems have relied on for decades.
          </p>

          <div className="border-l-2 border-white/20 pl-4 py-2 mt-8 bg-white/5">
            <p className="text-white/60 text-sm">
              For implementation details and code examples:
            </p>
            <a 
              href="/ai-era/multi-context-browser-control" 
              className="text-white/80 hover:text-white transition-colors underline text-sm mt-2 inline-block"
            >
              Multi-Context Browser Control for Agentic Systems →
            </a>
          </div>

        </div>
      </article>

      <section className="text-white/40 text-sm border-t border-white/10 pt-6">
        <a href="/control-systems-ai" className="hover:text-white/60 transition-colors">
          ← Back to Control Systems × AI
        </a>
      </section>
    </div>
  )
}



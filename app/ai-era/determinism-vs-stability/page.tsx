'use client'

import { useEffect, useRef } from 'react'

function StabilityConvergenceAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    let time = 0

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const centerY = canvas.height / 2
      const leftCenter = canvas.width * 0.25
      const rightCenter = canvas.width * 0.75

      ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)'
      ctx.setLineDash([4, 4])
      ctx.beginPath()
      ctx.moveTo(leftCenter - 80, centerY)
      ctx.lineTo(leftCenter + 80, centerY)
      ctx.stroke()
      ctx.beginPath()
      ctx.moveTo(rightCenter - 80, centerY)
      ctx.lineTo(rightCenter + 80, centerY)
      ctx.stroke()
      ctx.setLineDash([])

      ctx.fillStyle = 'rgba(255, 255, 255, 0.4)'
      ctx.font = '10px monospace'
      ctx.fillText('STABLE', leftCenter - 18, 20)
      ctx.fillText('UNSTABLE', rightCenter - 24, 20)

      const stableAmplitude = 30 * Math.exp(-time * 0.02)
      const stableY = centerY + stableAmplitude * Math.sin(time * 0.1)
      
      ctx.beginPath()
      ctx.arc(leftCenter, stableY, 6, 0, Math.PI * 2)
      ctx.fillStyle = 'rgba(100, 200, 150, 0.8)'
      ctx.fill()

      ctx.beginPath()
      ctx.arc(leftCenter, centerY, 25 + stableAmplitude * 0.5, 0, Math.PI * 2)
      ctx.strokeStyle = `rgba(100, 200, 150, ${0.3 - stableAmplitude * 0.005})`
      ctx.stroke()

      const unstableAmplitude = 10 + 25 * (1 - Math.exp(-time * 0.015))
      const unstableY = centerY + unstableAmplitude * Math.sin(time * 0.15)
      
      ctx.beginPath()
      ctx.arc(rightCenter, unstableY, 6, 0, Math.PI * 2)
      ctx.fillStyle = 'rgba(200, 100, 100, 0.8)'
      ctx.fill()

      ctx.beginPath()
      ctx.arc(rightCenter, centerY, 25 + unstableAmplitude * 0.8, 0, Math.PI * 2)
      ctx.strokeStyle = `rgba(200, 100, 100, ${0.2 + unstableAmplitude * 0.005})`
      ctx.stroke()

      time++
      if (time > 400) {
        time = 0
        ctx.fillStyle = 'rgba(0, 0, 0, 1)'
        ctx.fillRect(0, 0, canvas.width, canvas.height)
      }

      animationId = requestAnimationFrame(draw)
    }

    draw()

    return () => cancelAnimationFrame(animationId)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      width={500}
      height={150}
      className="w-full max-w-md mx-auto rounded border border-white/10"
    />
  )
}

function FunctionVsSystemAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    let time = 0

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const leftX = canvas.width * 0.25
      const rightX = canvas.width * 0.75
      const topY = 40
      const bottomY = canvas.height - 40

      ctx.fillStyle = 'rgba(255, 255, 255, 0.4)'
      ctx.font = '10px monospace'
      ctx.fillText('FUNCTION', leftX - 25, 20)
      ctx.fillText('SYSTEM', rightX - 20, 20)

      ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)'
      ctx.beginPath()
      ctx.moveTo(leftX, topY)
      ctx.lineTo(leftX, bottomY)
      ctx.stroke()

      const inputY = topY + 30
      const outputY = bottomY - 30
      const funcProgress = (time % 100) / 100

      ctx.beginPath()
      ctx.arc(leftX, inputY, 4, 0, Math.PI * 2)
      ctx.fillStyle = 'rgba(150, 150, 255, 0.8)'
      ctx.fill()
      ctx.fillStyle = 'rgba(255, 255, 255, 0.3)'
      ctx.fillText('input', leftX + 10, inputY + 3)

      if (funcProgress > 0.3 && funcProgress < 0.7) {
        const midY = inputY + (outputY - inputY) * ((funcProgress - 0.3) / 0.4)
        ctx.beginPath()
        ctx.arc(leftX, midY, 3, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(150, 200, 150, 0.6)'
        ctx.fill()
      }

      ctx.beginPath()
      ctx.arc(leftX, outputY, 4, 0, Math.PI * 2)
      ctx.fillStyle = 'rgba(150, 255, 150, 0.8)'
      ctx.fill()
      ctx.fillStyle = 'rgba(255, 255, 255, 0.3)'
      ctx.fillText('output', leftX + 10, outputY + 3)

      const centerY = (topY + bottomY) / 2
      const orbitRadius = 35
      const numNodes = 5

      for (let i = 0; i < numNodes; i++) {
        const angle = (i / numNodes) * Math.PI * 2 + time * 0.02
        const x = rightX + Math.cos(angle) * orbitRadius
        const y = centerY + Math.sin(angle) * orbitRadius * 0.6
        
        ctx.beginPath()
        ctx.arc(x, y, 4, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(150, 180, 255, ${0.4 + Math.sin(time * 0.05 + i) * 0.3})`
        ctx.fill()

        const nextAngle = ((i + 1) % numNodes / numNodes) * Math.PI * 2 + time * 0.02
        const nextX = rightX + Math.cos(nextAngle) * orbitRadius
        const nextY = centerY + Math.sin(nextAngle) * orbitRadius * 0.6
        
        ctx.beginPath()
        ctx.moveTo(x, y)
        ctx.lineTo(nextX, nextY)
        ctx.strokeStyle = 'rgba(150, 180, 255, 0.2)'
        ctx.stroke()
      }

      const feedbackAngle = time * 0.03
      ctx.beginPath()
      ctx.arc(rightX, centerY, orbitRadius + 10, feedbackAngle, feedbackAngle + Math.PI * 0.3)
      ctx.strokeStyle = 'rgba(255, 200, 100, 0.4)'
      ctx.stroke()

      ctx.fillStyle = 'rgba(255, 255, 255, 0.3)'
      ctx.fillText('feedback', rightX - 20, bottomY - 10)

      time++
      animationId = requestAnimationFrame(draw)
    }

    ctx.fillStyle = 'black'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    draw()

    return () => cancelAnimationFrame(animationId)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      width={500}
      height={180}
      className="w-full max-w-md mx-auto rounded border border-white/10"
    />
  )
}

function EnvironmentDriftAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    let time = 0

    interface Particle {
      x: number
      y: number
      vx: number
      vy: number
      life: number
    }

    const particles: Particle[] = []

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const targetX = canvas.width / 2 + Math.sin(time * 0.01) * 50
      const targetY = canvas.height / 2 + Math.cos(time * 0.015) * 20

      ctx.beginPath()
      ctx.arc(targetX, targetY, 15, 0, Math.PI * 2)
      ctx.strokeStyle = 'rgba(255, 200, 100, 0.3)'
      ctx.stroke()
      ctx.beginPath()
      ctx.arc(targetX, targetY, 3, 0, Math.PI * 2)
      ctx.fillStyle = 'rgba(255, 200, 100, 0.6)'
      ctx.fill()

      if (time % 20 === 0) {
        particles.push({
          x: 50,
          y: canvas.height / 2,
          vx: 3,
          vy: 0,
          life: 1
        })
      }

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]
        
        const dx = targetX - p.x
        const dy = targetY - p.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        
        if (dist > 5) {
          p.vx += (dx / dist) * 0.15
          p.vy += (dy / dist) * 0.15
        }

        p.vx *= 0.98
        p.vy *= 0.98
        p.x += p.vx
        p.y += p.vy
        
        if (dist < 20) {
          p.life -= 0.05
        }

        ctx.beginPath()
        ctx.arc(p.x, p.y, 3, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(100, 180, 255, ${p.life * 0.8})`
        ctx.fill()

        if (p.life <= 0 || p.x > canvas.width) {
          particles.splice(i, 1)
        }
      }

      ctx.fillStyle = 'rgba(255, 255, 255, 0.3)'
      ctx.font = '9px monospace'
      ctx.fillText('environment drifts', canvas.width / 2 - 40, 15)
      ctx.fillText('system adapts', canvas.width / 2 - 30, canvas.height - 10)

      time++
      animationId = requestAnimationFrame(draw)
    }

    ctx.fillStyle = 'black'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    draw()

    return () => cancelAnimationFrame(animationId)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      width={500}
      height={120}
      className="w-full max-w-md mx-auto rounded border border-white/10"
    />
  )
}

function DeterminismScopeAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    let time = 0

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.08)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const centerX = canvas.width / 2
      const centerY = canvas.height / 2

      ctx.beginPath()
      ctx.arc(centerX, centerY, 50, 0, Math.PI * 2)
      ctx.fillStyle = 'rgba(100, 200, 150, 0.15)'
      ctx.fill()
      ctx.strokeStyle = 'rgba(100, 200, 150, 0.4)'
      ctx.stroke()

      ctx.beginPath()
      ctx.arc(centerX, centerY, 90, 0, Math.PI * 2)
      ctx.strokeStyle = 'rgba(200, 150, 100, 0.3)'
      ctx.setLineDash([4, 4])
      ctx.stroke()
      ctx.setLineDash([])

      ctx.fillStyle = 'rgba(255, 255, 255, 0.5)'
      ctx.font = '9px monospace'
      ctx.fillText('deterministic', centerX - 28, centerY - 5)
      ctx.fillText('core', centerX - 12, centerY + 8)

      ctx.fillStyle = 'rgba(255, 255, 255, 0.3)'
      ctx.fillText('non-deterministic boundary', centerX - 55, centerY + 75)

      const numParticles = 8
      for (let i = 0; i < numParticles; i++) {
        const baseAngle = (i / numParticles) * Math.PI * 2
        const wobble = Math.sin(time * 0.03 + i * 2) * 0.3
        const angle = baseAngle + wobble
        const radius = 70 + Math.sin(time * 0.02 + i) * 15
        
        const x = centerX + Math.cos(angle) * radius
        const y = centerY + Math.sin(angle) * radius
        
        ctx.beginPath()
        ctx.arc(x, y, 3, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(200, 150, 100, 0.6)'
        ctx.fill()
      }

      for (let i = 0; i < 3; i++) {
        const angle = time * 0.02 + (i / 3) * Math.PI * 2
        const x = centerX + Math.cos(angle) * 30
        const y = centerY + Math.sin(angle) * 30
        
        ctx.beginPath()
        ctx.arc(x, y, 2, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(100, 200, 150, 0.8)'
        ctx.fill()
      }

      time++
      animationId = requestAnimationFrame(draw)
    }

    ctx.fillStyle = 'black'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    draw()

    return () => cancelAnimationFrame(animationId)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      width={500}
      height={200}
      className="w-full max-w-md mx-auto rounded border border-white/10"
    />
  )
}

export default function DeterminismVsStabilityPage() {
  return (
    <div className="space-y-8">
      <div className="max-w-3xl">
        <header className="mb-12">
          <p className="text-white/40 text-sm mb-2">Dec 14, 2025</p>
          <h1 className="text-3xl font-thin tracking-tight mb-4">
            Determinism vs Stability
          </h1>
          <p className="text-white/60 text-lg">
            Designing Systems in Non-Deterministic Environments
          </p>
        </header>
      </div>

      <figure className="w-full max-w-xl mx-auto my-10">
        <StabilityConvergenceAnimation />
        <figcaption className="text-white/40 text-xs mt-3 text-center">
          Stable systems converge within bounds · Unstable systems diverge over time
        </figcaption>
      </figure>

      <article className="max-w-3xl space-y-8 text-white/70 leading-relaxed">
        <p>
          Modern systems increasingly operate in environments that are not deterministic.
        </p>

        <div className="text-white/50 space-y-1 pl-4 border-l border-white/10">
          <p>Inputs are noisy.</p>
          <p>Interfaces change.</p>
          <p>Timing varies.</p>
          <p>Failures are partial.</p>
          <p>Recovery matters as much as correctness.</p>
        </div>

        <p>
          Yet much of software engineering intuition is still grounded in a deterministic worldview. 
          That mismatch is at the root of many brittle systems, especially those involving automation, 
          AI, and real-world interaction.
        </p>

        <p className="text-white/50 italic">
          This is not a failure of engineering discipline.<br />
          It is a mismatch of abstraction.
        </p>

        <div className="border-l-2 border-white/20 pl-6 my-8 py-2 bg-white/5 rounded-r">
          <p className="text-white/60 text-sm">
            This distinction is closely related to <a href="/ai-era/model-coupled-vs-decoupled" className="text-white/80 underline underline-offset-2 hover:text-white">model-coupled vs model-decoupled systems</a>. 
            Model-decoupled systems are inherently designed for stability over determinism — their correctness 
            comes from architectural constraints, not model precision.
          </p>
        </div>

        <section className="space-y-6">
          <h2 className="text-xl font-thin text-white/90 pt-6">What Determinism Actually Solves</h2>
          
          <p>
            Determinism is a <em className="text-white/80">local property</em>.
          </p>

          <p>
            It is extremely effective for problems with:
          </p>

          <ul className="list-disc list-inside text-white/60 space-y-1 ml-4">
            <li>Fixed inputs</li>
            <li>Well-defined outputs</li>
            <li>Closed environments</li>
            <li>Minimal feedback</li>
          </ul>

          <p>Examples include:</p>

          <div className="grid grid-cols-2 gap-4 my-6">
            <div className="border border-white/10 p-4 rounded">
              <p className="text-white/60 text-sm">Data validation</p>
            </div>
            <div className="border border-white/10 p-4 rounded">
              <p className="text-white/60 text-sm">Parsing known formats</p>
            </div>
            <div className="border border-white/10 p-4 rounded">
              <p className="text-white/60 text-sm">Schema enforcement</p>
            </div>
            <div className="border border-white/10 p-4 rounded">
              <p className="text-white/60 text-sm">Business rules</p>
            </div>
            <div className="border border-white/10 p-4 rounded col-span-2">
              <p className="text-white/60 text-sm">State serialization</p>
            </div>
          </div>

          <p>
            In these domains, determinism is essential. It gives testability, predictability, and clarity. 
            Removing it would make systems worse, not better.
          </p>

          <p className="text-white/50">
            The problem arises when determinism is extended beyond its natural scope.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-xl font-thin text-white/90 pt-6">Where Determinism Breaks Down</h2>

          <p>
            Many real-world systems are not functions. They are <em className="text-white/80">dynamic systems</em>.
          </p>

          <p>They involve:</p>

          <ul className="list-disc list-inside text-white/60 space-y-1 ml-4">
            <li>Feedback loops</li>
            <li>Delayed signals</li>
            <li>Partial observability</li>
            <li>Stochastic behavior</li>
            <li>Adversarial or evolving environments</li>
          </ul>
        </section>
      </article>

      <figure className="w-full max-w-xl mx-auto my-10">
        <FunctionVsSystemAnimation />
        <figcaption className="text-white/40 text-xs mt-3 text-center">
          Functions: input → output · Systems: continuous feedback and adaptation
        </figcaption>
      </figure>

      <article className="max-w-3xl space-y-8 text-white/70 leading-relaxed">
        <p>Examples include:</p>

        <div className="grid grid-cols-3 gap-3 my-6">
          <div className="border border-white/10 p-3 rounded text-center">
            <p className="text-white/60 text-xs">Browser automation</p>
          </div>
          <div className="border border-white/10 p-3 rounded text-center">
            <p className="text-white/60 text-xs">Distributed systems</p>
          </div>
          <div className="border border-white/10 p-3 rounded text-center">
            <p className="text-white/60 text-xs">Robotics</p>
          </div>
          <div className="border border-white/10 p-3 rounded text-center">
            <p className="text-white/60 text-xs">Control systems</p>
          </div>
          <div className="border border-white/10 p-3 rounded text-center">
            <p className="text-white/60 text-xs">Human-in-the-loop</p>
          </div>
          <div className="border border-white/10 p-3 rounded text-center">
            <p className="text-white/60 text-xs">AI-driven interfaces</p>
          </div>
        </div>

        <p>
          In these systems, insisting on end-to-end determinism is not just expensive — 
          it is <em className="text-white/80">counterproductive</em>.
        </p>

        <div className="text-white/50 space-y-1 pl-4 border-l border-white/10">
          <p>You can add more rules.</p>
          <p>You can chase edge cases.</p>
          <p>You can tighten constraints.</p>
        </div>

        <p className="text-white/60">
          But complexity grows faster than correctness.
        </p>

        <section className="space-y-6">
          <h2 className="text-xl font-thin text-white/90 pt-6">The Hidden Assumption Behind Determinism</h2>

          <p className="text-white/80 font-medium">
            Determinism assumes the environment cooperates.
          </p>

          <p>That assumption quietly fails once:</p>

          <ul className="list-disc list-inside text-white/60 space-y-1 ml-4">
            <li>Interfaces drift</li>
            <li>Timing changes</li>
            <li>Inputs become ambiguous</li>
            <li>Retries interact</li>
            <li>Failures are partial rather than total</li>
          </ul>

          <p>
            At that point, deterministic logic doesn&apos;t converge. It <em className="text-white/80">oscillates</em>.
          </p>

          <p className="text-white/50 italic">
            More precision does not produce more reliability.
          </p>
        </section>
      </article>

      <figure className="w-full max-w-xl mx-auto my-10">
        <EnvironmentDriftAnimation />
        <figcaption className="text-white/40 text-xs mt-3 text-center">
          Stable systems track drifting targets · Deterministic systems break when targets move
        </figcaption>
      </figure>

      <article className="max-w-3xl space-y-8 text-white/70 leading-relaxed">
        <section className="space-y-6">
          <h2 className="text-xl font-thin text-white/90 pt-6">Stability Is a Different Goal</h2>

          <p>
            Stability is a <em className="text-white/80">system-level property</em>, not a local one.
          </p>

          <p>
            A stable system is not one that always behaves the same way.<br />
            It is one that behaves <em className="text-white/80">within acceptable bounds</em> over time.
          </p>

          <p>Stability means:</p>

          <ul className="list-disc list-inside text-white/60 space-y-1 ml-4">
            <li>Errors do not cascade</li>
            <li>Retries converge instead of loop</li>
            <li>Failures are detectable and classifiable</li>
            <li>Costs remain bounded</li>
            <li>Recovery is possible without panic</li>
          </ul>

          <p className="text-white/50 italic">
            A stable system may produce different outputs across runs — and still be correct.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-xl font-thin text-white/90 pt-6">Systems vs Functions</h2>

          <p>A useful distinction:</p>

          <div className="grid grid-cols-2 gap-6 my-8">
            <div className="border border-green-500/20 bg-green-500/5 p-6 rounded">
              <h3 className="text-green-400/80 font-medium mb-3">Function</h3>
              <p className="text-white/60 text-sm mb-2">Correct or incorrect</p>
              <p className="text-white/40 text-xs">Determinism optimizes functions</p>
            </div>
            <div className="border border-blue-500/20 bg-blue-500/5 p-6 rounded">
              <h3 className="text-blue-400/80 font-medium mb-3">System</h3>
              <p className="text-white/60 text-sm mb-2">Converges or diverges</p>
              <p className="text-white/40 text-xs">Stability governs systems</p>
            </div>
          </div>

          <p className="text-white/80">
            Most real-world problems that feel &quot;hard&quot; are hard because they are being treated 
            like functions when they are systems.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-xl font-thin text-white/90 pt-6">Why AI Makes This Unavoidable</h2>

          <p>
            AI-driven systems expose this mismatch clearly.
          </p>

          <p>AI operates in domains that are:</p>

          <ul className="list-disc list-inside text-white/60 space-y-1 ml-4">
            <li>Ambiguous</li>
            <li>Probabilistic</li>
            <li>Context-sensitive</li>
            <li>Non-deterministic by nature</li>
          </ul>

          <p>Trying to force determinism at the system level leads to:</p>

          <div className="grid grid-cols-2 gap-3 my-6">
            <div className="border border-red-500/20 bg-red-500/5 p-3 rounded">
              <p className="text-white/60 text-xs">Brittle prompting</p>
            </div>
            <div className="border border-red-500/20 bg-red-500/5 p-3 rounded">
              <p className="text-white/60 text-xs">Excessive retries</p>
            </div>
            <div className="border border-red-500/20 bg-red-500/5 p-3 rounded">
              <p className="text-white/60 text-xs">Silent failure modes</p>
            </div>
            <div className="border border-red-500/20 bg-red-500/5 p-3 rounded">
              <p className="text-white/60 text-xs">Overconfidence in evals</p>
            </div>
            <div className="border border-red-500/20 bg-red-500/5 p-3 rounded col-span-2">
              <p className="text-white/60 text-xs">Systems that degrade under pressure</p>
            </div>
          </div>

          <p className="text-white/50 italic">
            The solution is not &quot;better prompts&quot; or &quot;bigger models.&quot;<br />
            It is architectural stability.
          </p>
        </section>
      </article>

      <figure className="w-full max-w-xl mx-auto my-10">
        <DeterminismScopeAnimation />
        <figcaption className="text-white/40 text-xs mt-3 text-center">
          Deterministic core · Non-deterministic boundary · Stability at the system level
        </figcaption>
      </figure>

      <article className="max-w-3xl space-y-8 text-white/70 leading-relaxed">
        <section className="space-y-6">
          <h2 className="text-xl font-thin text-white/90 pt-6">The Right Division of Responsibility</h2>

          <p>
            Effective systems use both determinism and non-determinism — but <em className="text-white/80">intentionally</em>.
          </p>

          <div className="grid grid-cols-2 gap-6 my-8">
            <div className="border border-green-500/20 bg-green-500/5 p-5 rounded">
              <h3 className="text-green-400/80 font-medium mb-3 text-sm">Determinism belongs in:</h3>
              <ul className="text-white/60 text-sm space-y-1">
                <li>• Constraints</li>
                <li>• Validation</li>
                <li>• Invariants</li>
                <li>• Safety rails</li>
                <li>• Termination conditions</li>
              </ul>
            </div>
            <div className="border border-amber-500/20 bg-amber-500/5 p-5 rounded">
              <h3 className="text-amber-400/80 font-medium mb-3 text-sm">Non-determinism belongs where:</h3>
              <ul className="text-white/60 text-sm space-y-1">
                <li>• Interpretation is required</li>
                <li>• Environments are noisy</li>
                <li>• Adaptation matters</li>
              </ul>
            </div>
          </div>

          <p className="text-white/80">
            The system as a whole is not deterministic.<br />
            It is <em>stable</em>.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-xl font-thin text-white/90 pt-6">A Simple Test</h2>

          <p>Ask one question:</p>

          <blockquote className="border-l-2 border-white/30 pl-6 my-6 text-white/80 italic">
            If the environment changes slightly, does the system recover or collapse?
          </blockquote>

          <p>
            If it collapses, more deterministic logic will not save it.
          </p>

          <p className="text-white/80">
            Only better system design will.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-xl font-thin text-white/90 pt-6">Why This Distinction Matters</h2>

          <p>
            Many teams interpret friction as failure.
          </p>

          <p>In practice, friction often signals that:</p>

          <ul className="list-disc list-inside text-white/60 space-y-1 ml-4">
            <li>Assumptions have met reality</li>
            <li>Local correctness is no longer sufficient</li>
            <li>Architecture, not logic, is now the bottleneck</li>
          </ul>

          <p>
            At that stage, chasing determinism wastes time and money.
          </p>

          <p>The work shifts from:</p>

          <div className="flex items-center gap-4 my-6">
            <div className="border border-white/20 px-4 py-2 rounded">
              <p className="text-white/60 text-sm">&quot;Make this exact&quot;</p>
            </div>
            <span className="text-white/40">→</span>
            <div className="border border-white/20 px-4 py-2 rounded">
              <p className="text-white/60 text-sm">&quot;Make this resilient&quot;</p>
            </div>
          </div>
        </section>

        <section className="space-y-6 pb-8">
          <h2 className="text-xl font-thin text-white/90 pt-6">Closing Thought</h2>

          <p>
            Determinism is a powerful tool.<br />
            But it is not the goal.
          </p>

          <p>
            The goal is systems that remain correct under uncertainty, drift, and pressure.
          </p>

          <p className="text-white/80 font-medium">
            That is stability.
          </p>

          <p className="text-white/50 italic">
            And stability is not something you add with more logic.<br />
            It is something you design for from the start.
          </p>
        </section>
      </article>
    </div>
  )
}


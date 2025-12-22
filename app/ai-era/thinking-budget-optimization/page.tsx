'use client'

import { useEffect, useRef } from 'react'

function ReasoningPhaseAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    let time = 0

    const phases = [
      { label: 'Planning', budget: 0.9, color: 'rgba(100, 180, 255, 0.8)' },
      { label: 'Execute', budget: 0.2, color: 'rgba(100, 200, 150, 0.8)' },
      { label: 'Execute', budget: 0.2, color: 'rgba(100, 200, 150, 0.8)' },
      { label: 'Adapt', budget: 0.6, color: 'rgba(255, 180, 100, 0.8)' },
      { label: 'Execute', budget: 0.2, color: 'rgba(100, 200, 150, 0.8)' },
      { label: 'Output', budget: 0.1, color: 'rgba(150, 150, 200, 0.8)' },
    ]

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const barWidth = 50
      const spacing = 15
      const startX = 40
      const baseY = canvas.height - 30
      const maxHeight = 100

      ctx.fillStyle = 'rgba(255, 255, 255, 0.3)'
      ctx.font = '9px monospace'
      ctx.fillText('REASONING BUDGET BY PHASE', startX, 20)

      const currentPhase = Math.floor((time % 360) / 60)
      
      phases.forEach((phase, i) => {
        const x = startX + i * (barWidth + spacing)
        const targetHeight = phase.budget * maxHeight
        
        const isActive = i === currentPhase
        const progress = isActive ? ((time % 60) / 60) : (i < currentPhase ? 1 : 0)
        const currentHeight = i < currentPhase ? targetHeight : (isActive ? targetHeight * progress : 0)

        ctx.fillStyle = 'rgba(255, 255, 255, 0.05)'
        ctx.fillRect(x, baseY - maxHeight, barWidth, maxHeight)

        if (currentHeight > 0) {
          ctx.fillStyle = isActive ? phase.color : phase.color.replace('0.8', '0.5')
          ctx.fillRect(x, baseY - currentHeight, barWidth, currentHeight)
        }

        ctx.fillStyle = isActive ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0.4)'
        ctx.font = '8px monospace'
        ctx.fillText(phase.label, x + 5, baseY + 15)

        if (isActive) {
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)'
          ctx.setLineDash([2, 2])
          ctx.strokeRect(x - 2, baseY - maxHeight - 2, barWidth + 4, maxHeight + 20)
          ctx.setLineDash([])
        }
      })

      ctx.fillStyle = 'rgba(255, 255, 255, 0.2)'
      ctx.font = '8px monospace'
      ctx.fillText('High', 5, baseY - maxHeight + 10)
      ctx.fillText('Low', 5, baseY - 5)

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
      width={450}
      height={160}
      className="w-full max-w-md mx-auto rounded border border-white/10"
    />
  )
}

function TokenComparisonAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    let time = 0

    interface Token {
      x: number
      y: number
      opacity: number
      speed: number
    }

    const flatTokens: Token[] = []
    const optimizedTokens: Token[] = []

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.15)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const leftX = canvas.width * 0.25
      const rightX = canvas.width * 0.75
      const streamY = 50
      const streamHeight = 80

      ctx.fillStyle = 'rgba(255, 255, 255, 0.4)'
      ctx.font = '9px monospace'
      ctx.fillText('FLAT BUDGET', leftX - 35, 20)
      ctx.fillText('STEP-AWARE', rightX - 30, 20)

      ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)'
      ctx.strokeRect(leftX - 40, streamY, 80, streamHeight)
      ctx.strokeRect(rightX - 40, streamY, 80, streamHeight)

      if (time % 3 === 0) {
        for (let i = 0; i < 4; i++) {
          flatTokens.push({
            x: leftX - 30 + Math.random() * 60,
            y: streamY,
            opacity: 1,
            speed: 1 + Math.random() * 0.5
          })
        }
      }

      const phase = Math.floor((time % 180) / 30)
      const tokenRate = phase === 0 ? 4 : (phase === 3 ? 2 : 1)
      
      if (time % 5 === 0) {
        for (let i = 0; i < tokenRate; i++) {
          optimizedTokens.push({
            x: rightX - 30 + Math.random() * 60,
            y: streamY,
            opacity: 1,
            speed: 1 + Math.random() * 0.5
          })
        }
      }

      for (let i = flatTokens.length - 1; i >= 0; i--) {
        const t = flatTokens[i]
        t.y += t.speed
        t.opacity -= 0.015

        ctx.beginPath()
        ctx.arc(t.x, t.y, 2, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(200, 100, 100, ${t.opacity * 0.8})`
        ctx.fill()

        if (t.opacity <= 0 || t.y > streamY + streamHeight) {
          flatTokens.splice(i, 1)
        }
      }

      for (let i = optimizedTokens.length - 1; i >= 0; i--) {
        const t = optimizedTokens[i]
        t.y += t.speed
        t.opacity -= 0.015

        ctx.beginPath()
        ctx.arc(t.x, t.y, 2, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(100, 200, 150, ${t.opacity * 0.8})`
        ctx.fill()

        if (t.opacity <= 0 || t.y > streamY + streamHeight) {
          optimizedTokens.splice(i, 1)
        }
      }

      ctx.fillStyle = 'rgba(200, 100, 100, 0.6)'
      ctx.fillText(`~${Math.min(flatTokens.length * 150, 6000)} tokens`, leftX - 30, streamY + streamHeight + 20)
      
      ctx.fillStyle = 'rgba(100, 200, 150, 0.6)'
      ctx.fillText(`~${Math.min(optimizedTokens.length * 150, 2500)} tokens`, rightX - 30, streamY + streamHeight + 20)

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
      width={450}
      height={170}
      className="w-full max-w-md mx-auto rounded border border-white/10"
    />
  )
}

function ExecutionModeAnimation() {
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
      const planY = 40
      const execY = 110

      ctx.fillStyle = 'rgba(255, 255, 255, 0.4)'
      ctx.font = '9px monospace'

      const planPhase = time < 120
      
      if (planPhase) {
        ctx.fillStyle = 'rgba(100, 180, 255, 0.3)'
        ctx.fillRect(centerX - 100, planY - 15, 200, 40)
        
        ctx.fillStyle = 'rgba(255, 255, 255, 0.7)'
        ctx.fillText('PLANNING MODE', centerX - 35, planY)
        
        const thoughtCount = Math.floor(time / 20)
        for (let i = 0; i < Math.min(thoughtCount, 5); i++) {
          const x = centerX - 80 + i * 35
          ctx.beginPath()
          ctx.arc(x, planY + 10, 4 + Math.sin(time * 0.1 + i) * 2, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(100, 180, 255, ${0.5 + Math.sin(time * 0.1 + i) * 0.3})`
          ctx.fill()
        }

        ctx.fillStyle = 'rgba(255, 255, 255, 0.3)'
        ctx.fillText('reasoning...', centerX + 30, planY + 13)
      } else {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.3)'
        ctx.fillText('PLANNING MODE', centerX - 35, planY)
        ctx.fillText('✓ complete', centerX + 30, planY)
      }

      if (time > 60) {
        const arrowProgress = Math.min((time - 60) / 30, 1)
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)'
        ctx.beginPath()
        ctx.moveTo(centerX, planY + 25)
        ctx.lineTo(centerX, planY + 25 + 30 * arrowProgress)
        ctx.stroke()
        
        if (arrowProgress === 1) {
          ctx.beginPath()
          ctx.moveTo(centerX - 5, execY - 20)
          ctx.lineTo(centerX, execY - 15)
          ctx.lineTo(centerX + 5, execY - 20)
          ctx.stroke()
        }
      }

      if (!planPhase) {
        ctx.fillStyle = 'rgba(100, 200, 150, 0.3)'
        ctx.fillRect(centerX - 100, execY - 15, 200, 40)
        
        ctx.fillStyle = 'rgba(255, 255, 255, 0.7)'
        ctx.fillText('EXECUTION MODE', centerX - 40, execY)
        
        const step = Math.floor((time - 120) / 40) % 4
        for (let i = 0; i < 4; i++) {
          const x = centerX - 60 + i * 40
          ctx.beginPath()
          ctx.rect(x - 10, execY + 5, 20, 12)
          ctx.fillStyle = i <= step ? 'rgba(100, 200, 150, 0.6)' : 'rgba(100, 200, 150, 0.2)'
          ctx.fill()
          ctx.fillStyle = 'rgba(255, 255, 255, 0.5)'
          ctx.font = '7px monospace'
          ctx.fillText(`S${i + 1}`, x - 5, execY + 14)
        }

        ctx.fillStyle = 'rgba(255, 255, 255, 0.3)'
        ctx.font = '9px monospace'
        ctx.fillText('minimal reasoning', centerX - 40, execY + 30)
      }

      time++
      if (time > 280) {
        time = 0
        ctx.fillStyle = 'rgba(0, 0, 0, 1)'
        ctx.fillRect(0, 0, canvas.width, canvas.height)
      }

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
      width={450}
      height={160}
      className="w-full max-w-md mx-auto rounded border border-white/10"
    />
  )
}

export default function ThinkingBudgetOptimizationPage() {
  return (
    <div className="space-y-8">
      <div className="max-w-3xl">
        <header className="mb-12">
          <p className="text-white/40 text-sm mb-2">Dec 19, 2025</p>
          <h1 className="text-3xl font-thin tracking-tight mb-4">
            Thinking Budget Optimization for Agentic Systems
          </h1>
          <p className="text-white/60 text-lg">
            Reducing cost without degrading reasoning quality
          </p>
          <p className="text-white/40 text-xs mt-4">
            agentic systems · reasoning efficiency · token economics · execution planning
          </p>
        </header>
      </div>

      <article className="max-w-3xl space-y-8 text-white/70 leading-relaxed">
        <section className="space-y-6">
          <h2 className="text-xl font-thin text-white/90">The Hidden Cost of &quot;Smarter&quot; Models</h2>
          
          <p>
            Extended reasoning is one of the most powerful capabilities of modern language models. 
            When enabled, models can internally reason through problems before responding, dramatically 
            improving outcomes for tasks that require planning, sequencing, or adaptation.
          </p>

          <p>But there is a catch.</p>

          <div className="text-white/50 space-y-1 pl-4 border-l border-white/10">
            <p>Reasoning tokens are not free.</p>
            <p>If a model is given a large reasoning budget, it will use it — even when the task is trivial.</p>
          </div>

          <p>
            This creates a quiet cost center in agentic systems. Teams often respond in one of three ways:
          </p>

          <ul className="list-disc list-inside text-white/60 space-y-1 ml-4">
            <li>Enable large reasoning budgets everywhere <span className="text-white/40">(expensive)</span></li>
            <li>Disable reasoning entirely <span className="text-white/40">(fragile)</span></li>
            <li>Pick a compromise and accept inefficiency <span className="text-white/40">(suboptimal)</span></li>
          </ul>

          <p>None of these approaches scale well.</p>

          <p className="text-white/50 italic">
            The core issue is not model capability.<br />
            It is how reasoning is allocated over time.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-xl font-thin text-white/90 pt-6">Reasoning Is Not Uniform Across a Task</h2>

          <p>
            In most agentic workflows, reasoning requirements are <em className="text-white/80">highly uneven</em>.
          </p>

          <p>Consider a multi-step automation:</p>

          <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border border-white/10">
              <thead>
                <tr className="border-b border-white/10 bg-white/5">
                  <th className="text-left p-3 text-white/60 font-normal">Phase</th>
                  <th className="text-left p-3 text-white/60 font-normal">What the model is doing</th>
                  <th className="text-left p-3 text-white/60 font-normal">Reasoning need</th>
                </tr>
              </thead>
              <tbody className="text-white/50">
                <tr className="border-b border-white/5">
                  <td className="p-3">Planning</td>
                  <td className="p-3">Interpreting intent, forming strategy</td>
                  <td className="p-3 text-blue-400/80">High</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="p-3">Execution</td>
                  <td className="p-3">Following known steps</td>
                  <td className="p-3 text-green-400/80">Low</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="p-3">Unexpected state</td>
                  <td className="p-3">Adapting to change</td>
                  <td className="p-3 text-amber-400/80">Medium–High</td>
                </tr>
                <tr>
                  <td className="p-3">Final output</td>
                  <td className="p-3">Formatting result</td>
                  <td className="p-3 text-white/40">Minimal</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            Yet many systems apply the same reasoning budget at every step.
          </p>

          <p className="text-white/80">This is wasteful.</p>

          <p className="text-white/50 italic">
            Once a plan exists, repeatedly re-deriving it does not improve outcomes. 
            It only increases token usage.
          </p>
        </section>
      </article>

      <figure className="w-full max-w-xl mx-auto my-10">
        <ReasoningPhaseAnimation />
        <figcaption className="text-white/40 text-xs mt-3 text-center">
          Reasoning budget varies by phase · Planning high · Execution low · Adaptation medium
        </figcaption>
      </figure>

      <article className="max-w-3xl space-y-8 text-white/70 leading-relaxed">
        <section className="space-y-6">
          <h2 className="text-xl font-thin text-white/90 pt-6">Step-Aware Reasoning Budgets</h2>

          <p>
            A more effective approach is <em className="text-white/80">step-aware reasoning</em>.
          </p>

          <p>
            Instead of assigning a flat reasoning budget, the system allocates reasoning based on execution phase.
          </p>

          <h3 className="text-white/70 font-medium pt-4">The Pattern</h3>

          <div className="bg-white/5 border border-white/10 rounded p-4 font-mono text-sm text-white/60 my-4">
            <p>Step 0 (Planning):&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;High reasoning budget</p>
            <p>Steps 1+ (Execution):&nbsp;&nbsp;&nbsp;Low reasoning budget</p>
            <p>Exception handling:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Medium reasoning budget</p>
            <p>Final response:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Minimal reasoning</p>
          </div>

          <p>
            The key insight is that planning and execution are <em className="text-white/80">different cognitive modes</em>.
          </p>

          <div className="grid grid-cols-2 gap-4 my-6">
            <div className="border border-blue-500/20 bg-blue-500/5 p-4 rounded">
              <p className="text-blue-400/80 font-medium mb-2">Planning</p>
              <p className="text-white/60 text-sm">Benefits from expansive reasoning</p>
            </div>
            <div className="border border-green-500/20 bg-green-500/5 p-4 rounded">
              <p className="text-green-400/80 font-medium mb-2">Execution</p>
              <p className="text-white/60 text-sm">Benefits from constraint</p>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-xl font-thin text-white/90 pt-6">Why This Works</h2>

          <p>
            During the initial planning step, the model generates a strategy. 
            That strategy becomes part of the conversation state.
          </p>

          <p>
            On subsequent steps, the model does not need to rediscover the plan. 
            It only needs to <em className="text-white/80">apply it</em>.
          </p>

          <p>
            Giving the model a large reasoning budget during execution does not make it more accurate. 
            It makes it verbose.
          </p>

          <p className="text-white/50 italic">
            In practice, most token waste comes from models restating what they already know.
          </p>
        </section>
      </article>

      <figure className="w-full max-w-xl mx-auto my-10">
        <ExecutionModeAnimation />
        <figcaption className="text-white/40 text-xs mt-3 text-center">
          Planning mode: deep reasoning · Execution mode: apply the plan with minimal overhead
        </figcaption>
      </figure>

      <article className="max-w-3xl space-y-8 text-white/70 leading-relaxed">
        <section className="space-y-6">
          <h2 className="text-xl font-thin text-white/90 pt-6">Guiding the Model Into Execution Mode</h2>

          <p>
            One of the most effective optimizations is <em className="text-white/80">post-planning prompt injection</em>.
          </p>

          <p>
            After the planning step completes, the system alters the prompt to explicitly 
            shift the model into execution mode.
          </p>

          <h3 className="text-white/70 font-medium pt-4">Example: Execution Constraint</h3>

          <div className="bg-white/5 border border-white/10 rounded p-4 font-mono text-xs text-white/50 my-4 space-y-2">
            <p className="text-white/70">You are now executing an existing plan.</p>
            <p className="mt-3">Rules:</p>
            <p>- Do not restate the plan.</p>
            <p>- Do not explain obvious actions.</p>
            <p>- Prefer tool calls over text.</p>
            <p>- If text is required, keep it under 10 words.</p>
            <p className="mt-3">When finished:</p>
            <p>- Return only the final structured result.</p>
          </div>

          <p>
            This does not reduce reasoning quality.<br />
            It reduces <em className="text-white/80">unnecessary expression</em>.
          </p>

          <p className="text-white/50 italic">
            The model still reasons internally. It simply stops narrating.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-xl font-thin text-white/90 pt-6">Matching Budgets to Task Types</h2>

          <p>
            Not all tasks require the same cognitive investment.
          </p>

          <h3 className="text-white/70 font-medium pt-4">Deterministic Tasks</h3>

          <p className="text-white/50 text-sm">Examples: Login flows, form submission, single-page data extraction</p>

          <div className="border border-green-500/20 bg-green-500/5 p-4 rounded my-4">
            <p className="text-green-400/80 text-sm font-medium mb-2">Recommended setup:</p>
            <ul className="text-white/60 text-sm space-y-1">
              <li>• Low initial reasoning</li>
              <li>• Low execution reasoning</li>
              <li>• Re-planning disabled</li>
            </ul>
          </div>

          <p className="text-white/50 text-sm">These tasks are procedural. Overthinking adds little value.</p>

          <h3 className="text-white/70 font-medium pt-6">Stateful or Exploratory Tasks</h3>

          <p className="text-white/50 text-sm">Examples: Multi-document retrieval, iterative search, aggregation across pages</p>

          <div className="border border-amber-500/20 bg-amber-500/5 p-4 rounded my-4">
            <p className="text-amber-400/80 text-sm font-medium mb-2">Recommended setup:</p>
            <ul className="text-white/60 text-sm space-y-1">
              <li>• High initial reasoning</li>
              <li>• Medium execution reasoning</li>
              <li>• Limited re-planning allowed</li>
            </ul>
          </div>

          <p className="text-white/50 text-sm">These tasks benefit from tracking progress and adapting strategy.</p>

          <p className="text-white/80 mt-4">
            The important point is that task classification happens <em>before</em> execution, not dynamically mid-run.
          </p>
        </section>
      </article>

      <figure className="w-full max-w-xl mx-auto my-10">
        <TokenComparisonAnimation />
        <figcaption className="text-white/40 text-xs mt-3 text-center">
          Flat budget: consistent high token flow · Step-aware: tokens allocated by need
        </figcaption>
      </figure>

      <article className="max-w-3xl space-y-8 text-white/70 leading-relaxed">
        <section className="space-y-6">
          <h2 className="text-xl font-thin text-white/90 pt-6">Token Efficiency in Practice</h2>

          <p>
            When applied correctly, step-aware reasoning produces large cost reductions 
            without harming success rates.
          </p>

          <p>Typical outcomes observed across agentic systems:</p>

          <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border border-white/10">
              <thead>
                <tr className="border-b border-white/10 bg-white/5">
                  <th className="text-left p-3 text-white/60 font-normal">Configuration</th>
                  <th className="text-left p-3 text-white/60 font-normal">Avg tokens/step</th>
                  <th className="text-left p-3 text-white/60 font-normal">Relative cost</th>
                </tr>
              </thead>
              <tbody className="text-white/50">
                <tr className="border-b border-white/5">
                  <td className="p-3">Flat high budget</td>
                  <td className="p-3">~6,000</td>
                  <td className="p-3 text-red-400/80">Baseline</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="p-3">Step-aware (high → low)</td>
                  <td className="p-3">~2,500</td>
                  <td className="p-3 text-amber-400/80">~60% lower</td>
                </tr>
                <tr>
                  <td className="p-3">Aggressive execution constraints</td>
                  <td className="p-3">~800</td>
                  <td className="p-3 text-green-400/80">~85% lower</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-white/50 text-sm">
            The most aggressive settings are not universal, but for deterministic workflows they are transformative.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-xl font-thin text-white/90 pt-6">Common Failure Modes</h2>

          <h3 className="text-white/70 font-medium pt-4">Over-Optimizing Early</h3>
          <p>
            Applying minimal reasoning to tasks that genuinely require exploration leads to brittle behavior.
          </p>
          <p className="text-white/50 text-sm">
            <span className="text-white/70">Fix:</span> classify task complexity up front. When uncertain, bias toward more reasoning.
          </p>

          <h3 className="text-white/70 font-medium pt-6">Stale Reasoning Artifacts</h3>
          <p>
            If the model produces no new reasoning on a step, logging repeated or placeholder reasoning pollutes context.
          </p>
          <p className="text-white/50 text-sm">
            <span className="text-white/70">Fix:</span> track whether new reasoning occurred. Do not persist reasoning when none was generated.
          </p>

          <h3 className="text-white/70 font-medium pt-6">Context Accumulation</h3>
          <p>
            Even optimized reasoning accumulates over long runs.
          </p>
          <p className="text-white/50 text-sm">
            <span className="text-white/70">Fix:</span> prune old reasoning blocks from history. Retain actions and results, discard internal deliberation.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-xl font-thin text-white/90 pt-6">A Simple Mental Model</h2>

          <div className="text-white/50 space-y-1 pl-4 border-l border-white/10 my-6">
            <p>Reasoning is not intelligence.</p>
            <p>It is <em className="text-white/80">work</em>.</p>
          </div>

          <p>
            You should pay for it when it produces value, and avoid it when it does not.
          </p>

          <div className="grid grid-cols-2 gap-4 my-6">
            <div className="border border-white/10 p-3 rounded">
              <p className="text-blue-400/80 text-sm">Planning</p>
              <p className="text-white/50 text-xs">pay</p>
            </div>
            <div className="border border-white/10 p-3 rounded">
              <p className="text-green-400/80 text-sm">Execution</p>
              <p className="text-white/50 text-xs">constrain</p>
            </div>
            <div className="border border-white/10 p-3 rounded">
              <p className="text-amber-400/80 text-sm">Recovery</p>
              <p className="text-white/50 text-xs">pay again</p>
            </div>
            <div className="border border-white/10 p-3 rounded">
              <p className="text-white/60 text-sm">Formatting</p>
              <p className="text-white/50 text-xs">constrain hard</p>
            </div>
          </div>

          <p className="text-white/80">
            Systems that treat reasoning as a controllable resource scale better, cost less, 
            and fail more predictably.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-xl font-thin text-white/90 pt-6">The Bigger Picture</h2>

          <p>
            Thinking budget optimization is not a model trick.<br />
            It is an <em className="text-white/80">architectural decision</em>.
          </p>

          <p>
            Agentic systems that survive at scale will not be the ones with the largest models. 
            They will be the ones that understand when reasoning matters — and when it doesn&apos;t.
          </p>

          <p className="text-white/50 italic">
            Extended reasoning is powerful.<br />
            But only when used deliberately.
          </p>
        </section>

        <div className="border-l-2 border-white/20 pl-6 my-10 py-4 bg-white/5 rounded-r">
          <p className="text-white/70 text-sm mb-3">Related reading:</p>
          <ul className="text-white/60 text-sm space-y-2">
            <li>
              <a href="/ai-era/determinism-vs-stability" className="text-white/80 underline underline-offset-2 hover:text-white">
                Determinism vs Stability
              </a>
              <span className="text-white/40"> — Why stability matters more than precision in non-deterministic environments</span>
            </li>
            <li>
              <a href="/ai-era/model-coupled-vs-decoupled" className="text-white/80 underline underline-offset-2 hover:text-white">
                Model-Coupled vs Model-Decoupled Systems
              </a>
              <span className="text-white/40"> — Why architecture determines long-term advantage</span>
            </li>
            <li>
              <a href="/ai-era/agents-as-operators-not-oracles" className="text-white/80 underline underline-offset-2 hover:text-white">
                Agents as Operators, Not Oracles
              </a>
              <span className="text-white/40"> — Transformation over reasoning</span>
            </li>
          </ul>
        </div>
      </article>
    </div>
  )
}


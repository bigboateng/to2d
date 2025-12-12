'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

function MultiContextAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const dpr = window.devicePixelRatio || 1
    const width = 700
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

      ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)'
      ctx.lineWidth = 1
      ctx.strokeRect(40, 20, 620, 280)
      
      ctx.fillStyle = 'rgba(255, 255, 255, 0.5)'
      ctx.font = '11px monospace'
      ctx.fillText('Browser Context', 50, 38)

      ctx.fillStyle = 'rgba(255, 255, 255, 0.08)'
      ctx.fillRect(50, 50, 600, 40)
      ctx.fillStyle = 'rgba(255, 255, 255, 0.4)'
      ctx.font = '10px monospace'
      ctx.fillText('Session State: cookies, localStorage, proxy config', 60, 75)

      const mainPageX = 100
      const mainPageY = 130
      const pageWidth = 100
      const pageHeight = 140

      const pulseMain = 0.1 + Math.sin(time * 2) * 0.05
      ctx.strokeStyle = `rgba(100, 200, 255, ${0.4 + pulseMain})`
      ctx.lineWidth = 2
      ctx.strokeRect(mainPageX, mainPageY, pageWidth, pageHeight)
      ctx.fillStyle = 'rgba(100, 200, 255, 0.1)'
      ctx.fillRect(mainPageX, mainPageY, pageWidth, pageHeight)
      
      ctx.fillStyle = 'rgba(255, 255, 255, 0.7)'
      ctx.font = '11px monospace'
      ctx.fillText('Main Page', mainPageX + 15, mainPageY + 20)
      ctx.fillStyle = 'rgba(255, 255, 255, 0.4)'
      ctx.font = '10px monospace'
      ctx.fillText('(Agent)', mainPageX + 28, mainPageY + 35)

      const agentY = mainPageY + 60
      ctx.fillStyle = 'rgba(100, 200, 255, 0.3)'
      ctx.beginPath()
      ctx.arc(mainPageX + 50, agentY + 30, 25, 0, Math.PI * 2)
      ctx.fill()
      ctx.fillStyle = 'rgba(255, 255, 255, 0.6)'
      ctx.font = '9px monospace'
      ctx.fillText('LLM', mainPageX + 38, agentY + 33)

      const toolPages = [
        { x: 280, label: 'Tool Page A', color: '150, 255, 150', delay: 0 },
        { x: 420, label: 'Tool Page B', color: '255, 200, 100', delay: 0.5 },
        { x: 560, label: 'Tool Page C', color: '255, 150, 200', delay: 1 },
      ]

      toolPages.forEach((page, i) => {
        const spawnProgress = Math.max(0, Math.min(1, (time - page.delay) * 0.8))
        const alpha = spawnProgress * 0.4
        const scale = 0.5 + spawnProgress * 0.5

        if (spawnProgress > 0) {
          const scaledWidth = pageWidth * scale
          const scaledHeight = pageHeight * scale
          const offsetX = (pageWidth - scaledWidth) / 2
          const offsetY = (pageHeight - scaledHeight) / 2

          ctx.strokeStyle = `rgba(${page.color}, ${alpha + 0.2})`
          ctx.lineWidth = 1.5
          ctx.strokeRect(page.x + offsetX, mainPageY + offsetY, scaledWidth, scaledHeight)
          ctx.fillStyle = `rgba(${page.color}, ${alpha * 0.3})`
          ctx.fillRect(page.x + offsetX, mainPageY + offsetY, scaledWidth, scaledHeight)

          if (spawnProgress > 0.5) {
            ctx.fillStyle = `rgba(255, 255, 255, ${(spawnProgress - 0.5) * 1.4})`
            ctx.font = '10px monospace'
            ctx.fillText(page.label, page.x + offsetX + 8, mainPageY + offsetY + 18)
            ctx.fillStyle = `rgba(255, 255, 255, ${(spawnProgress - 0.5) * 0.8})`
            ctx.font = '9px monospace'
            ctx.fillText('(Managed)', page.x + offsetX + 15, mainPageY + offsetY + 32)
          }
        }

        if (spawnProgress > 0.3) {
          const lineProgress = Math.min(1, (spawnProgress - 0.3) / 0.7)
          const startX = mainPageX + pageWidth
          const startY = mainPageY + 70
          const endX = page.x + (pageWidth - pageWidth * scale) / 2
          const endY = mainPageY + pageHeight / 2

          const currentEndX = startX + (endX - startX) * lineProgress
          const currentEndY = startY + (endY - startY) * lineProgress

          ctx.strokeStyle = `rgba(${page.color}, ${lineProgress * 0.5})`
          ctx.lineWidth = 1
          ctx.setLineDash([4, 4])
          ctx.beginPath()
          ctx.moveTo(startX, startY)
          ctx.lineTo(currentEndX, currentEndY)
          ctx.stroke()
          ctx.setLineDash([])

          if (lineProgress > 0.8) {
            const dataY = mainPageY + pageHeight - 30 + Math.sin(time * 3 + i) * 5
            ctx.fillStyle = `rgba(${page.color}, 0.6)`
            ctx.beginPath()
            ctx.arc(page.x + pageWidth / 2, dataY, 4, 0, Math.PI * 2)
            ctx.fill()
          }
        }
      })

      ctx.fillStyle = 'rgba(255, 255, 255, 0.3)'
      ctx.font = '9px monospace'
      ctx.fillText('createPage()', 210, mainPageY + 60)

      time += 0.016
      if (time > 8) time = 0

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

function DistributedAgentAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const dpr = window.devicePixelRatio || 1
    const width = 600
    const height = 350

    canvas.width = width * dpr
    canvas.height = height * dpr
    canvas.style.width = `${width}px`
    canvas.style.height = `${height}px`
    ctx.scale(dpr, dpr)

    let animationFrame: number
    let time = 0

    const draw = () => {
      ctx.clearRect(0, 0, width, height)

      const coordX = width / 2
      const coordY = 60
      const pulse = 0.2 + Math.sin(time * 2) * 0.1

      ctx.fillStyle = `rgba(100, 180, 255, ${0.3 + pulse})`
      ctx.beginPath()
      ctx.roundRect(coordX - 80, coordY - 25, 160, 50, 8)
      ctx.fill()
      ctx.strokeStyle = `rgba(100, 180, 255, ${0.6 + pulse})`
      ctx.lineWidth = 2
      ctx.stroke()

      ctx.fillStyle = 'rgba(255, 255, 255, 0.9)'
      ctx.font = '12px monospace'
      ctx.textAlign = 'center'
      ctx.fillText('Coordinator LLM', coordX, coordY + 5)

      const branches = [
        { x: 100, label: 'Sub-Agent A', page: 'Page A', result: 'Extracted Data', color: '150, 255, 150' },
        { x: 300, label: 'Sub-Agent B', page: 'Page B', result: 'Verification', color: '255, 200, 100' },
        { x: 500, label: 'Parallel Check', page: 'Pages C,D,E', result: 'Availability', color: '255, 150, 200' },
      ]

      branches.forEach((branch, i) => {
        const branchY = 160
        const pageY = 240
        const resultY = 310

        const flowProgress = (time * 0.5 + i * 0.3) % 3
        
        ctx.strokeStyle = `rgba(${branch.color}, 0.4)`
        ctx.lineWidth = 1.5
        ctx.beginPath()
        ctx.moveTo(coordX, coordY + 25)
        ctx.lineTo(branch.x, branchY - 20)
        ctx.stroke()

        const toolPulse = Math.sin(time * 2 + i) * 0.1
        ctx.fillStyle = `rgba(${branch.color}, ${0.2 + toolPulse})`
        ctx.beginPath()
        ctx.roundRect(branch.x - 55, branchY - 20, 110, 40, 6)
        ctx.fill()
        ctx.strokeStyle = `rgba(${branch.color}, 0.5)`
        ctx.lineWidth = 1
        ctx.stroke()

        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)'
        ctx.font = '10px monospace'
        ctx.fillText(branch.label, branch.x, branchY + 5)

        ctx.strokeStyle = `rgba(${branch.color}, 0.3)`
        ctx.setLineDash([3, 3])
        ctx.beginPath()
        ctx.moveTo(branch.x, branchY + 20)
        ctx.lineTo(branch.x, pageY - 15)
        ctx.stroke()
        ctx.setLineDash([])

        if (flowProgress > 0.5 && flowProgress < 2) {
          const dotY = branchY + 20 + ((flowProgress - 0.5) / 1.5) * (pageY - branchY - 35)
          ctx.fillStyle = `rgba(${branch.color}, 0.8)`
          ctx.beginPath()
          ctx.arc(branch.x, dotY, 3, 0, Math.PI * 2)
          ctx.fill()
        }

        ctx.fillStyle = 'rgba(255, 255, 255, 0.1)'
        ctx.strokeStyle = `rgba(${branch.color}, 0.3)`
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.roundRect(branch.x - 45, pageY - 15, 90, 35, 4)
        ctx.fill()
        ctx.stroke()

        ctx.fillStyle = 'rgba(255, 255, 255, 0.5)'
        ctx.font = '9px monospace'
        ctx.fillText(branch.page, branch.x, pageY + 8)

        ctx.strokeStyle = `rgba(${branch.color}, 0.3)`
        ctx.setLineDash([3, 3])
        ctx.beginPath()
        ctx.moveTo(branch.x, pageY + 20)
        ctx.lineTo(branch.x, resultY - 10)
        ctx.stroke()
        ctx.setLineDash([])

        if (flowProgress > 1.5) {
          const returnDotY = pageY + 20 + ((flowProgress - 1.5) / 1.5) * (resultY - pageY - 30)
          ctx.fillStyle = `rgba(${branch.color}, 0.8)`
          ctx.beginPath()
          ctx.arc(branch.x, Math.min(returnDotY, resultY - 10), 3, 0, Math.PI * 2)
          ctx.fill()
        }

        ctx.fillStyle = 'rgba(255, 255, 255, 0.15)'
        ctx.beginPath()
        ctx.roundRect(branch.x - 50, resultY - 10, 100, 25, 4)
        ctx.fill()

        ctx.fillStyle = 'rgba(255, 255, 255, 0.6)'
        ctx.font = '9px monospace'
        ctx.fillText(branch.result, branch.x, resultY + 8)
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

export default function MultiContextBrowserControlPage() {
  return (
    <div className="space-y-12 max-w-3xl">
      <section>
        <h1 className="text-3xl font-thin tracking-tight mb-4">
          Multi-Context Browser Control for Agentic Systems
        </h1>
        <p className="text-white/50 text-sm mb-2">
          A foundational primitive for distributed browser intelligence
        </p>
        <p className="text-white/40 text-xs mb-8">
          Dec 9, 2025
        </p>
      </section>

      <figure className="my-6">
        <div className="border border-white/20 rounded overflow-hidden bg-white/5 p-4">
          <Image
            src="/images/ai/multi-context-browser-control.png"
            alt="Multi-Context Browser Control Architecture"
            width={1200}
            height={630}
            className="w-full h-auto"
            priority
          />
        </div>
        <figcaption className="text-white/40 text-xs mt-3 text-center">
          Browser context with shared session state enabling parallel page operations
        </figcaption>
      </figure>

      <article className="prose prose-invert max-w-none">
        <div className="text-white/70 text-sm leading-relaxed space-y-6">
          
          <section className="border-l-2 border-white/20 pl-4 py-2 bg-white/5">
            <h2 className="text-lg font-thin text-white/90 mb-3">Abstract</h2>
            <p>
              Contemporary browser automation agents operate under a fundamental constraint: single-page state binding. This limitation creates friction in real-world workflows that inherently require multi-context operations—email verification flows, OAuth handshakes, cross-domain data aggregation, and popup-based interactions. This document presents a minimal architectural extension that enables custom tools to spawn isolated pages within a shared browser session, transforming tools from pure compute operations into autonomous micro-agents capable of independent browser manipulation.
            </p>
          </section>

          <h2 className="text-xl font-thin text-white/90 mt-10 mb-4">1. Problem Statement</h2>

          <h3 className="text-lg font-thin text-white/80 mt-6 mb-3">1.1 The Single-Context Assumption</h3>
          
          <p>
            Modern LLM-powered browser agents are architected around an implicit assumption:
          </p>
          
          <blockquote className="border-l-2 border-white/30 pl-4 italic text-white/60 my-4">
            "The agent has one environment window. Tool calls are stateless compute operations."
          </blockquote>
          
          <p>This assumption manifests in several ways:</p>
          
          <ul className="text-white/60 space-y-2 ml-6 list-disc">
            <li>Tools receive parameters and return results without environment access</li>
            <li>The agent's "world state" is limited to a single page</li>
            <li>Navigation to a new URL overwrites the current context entirely</li>
            <li>No mechanism exists for parallel or branched browser operations</li>
          </ul>

          <h3 className="text-lg font-thin text-white/80 mt-6 mb-3">1.2 Real-World Workflow Patterns</h3>
          
          <p>Production automation workflows frequently exhibit patterns that violate single-context assumptions:</p>

          <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="text-left py-2 px-3 text-white/70 font-medium">Pattern</th>
                  <th className="text-left py-2 px-3 text-white/70 font-medium">Description</th>
                  <th className="text-left py-2 px-3 text-white/70 font-medium">Failure Mode</th>
                </tr>
              </thead>
              <tbody className="text-white/60">
                <tr className="border-b border-white/10">
                  <td className="py-2 px-3 font-medium text-white/80">Email Verification</td>
                  <td className="py-2 px-3">Activation links must be followed without disrupting main flow</td>
                  <td className="py-2 px-3">Loses form state when navigating to link</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-2 px-3 font-medium text-white/80">OAuth/SSO Flows</td>
                  <td className="py-2 px-3">Authentication opens in popup or redirect</td>
                  <td className="py-2 px-3">Cannot return to original page with tokens</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-2 px-3 font-medium text-white/80">Cross-Domain Lookup</td>
                  <td className="py-2 px-3">Data required from Site B during Site A workflow</td>
                  <td className="py-2 px-3">Must complete Site A before fetching from B</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-2 px-3 font-medium text-white/80">Popup Interactions</td>
                  <td className="py-2 px-3">Site spawns modal windows for actions</td>
                  <td className="py-2 px-3">Agent cannot interact with secondary windows</td>
                </tr>
                <tr>
                  <td className="py-2 px-3 font-medium text-white/80">Parallel Verification</td>
                  <td className="py-2 px-3">Multiple URLs need simultaneous validation</td>
                  <td className="py-2 px-3">Sequential processing with state loss</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-lg font-thin text-white/80 mt-6 mb-3">1.3 Current Workarounds and Their Limitations</h3>

          <div className="space-y-4">
            <div className="border border-white/10 p-4 rounded">
              <p className="text-white/80 font-medium mb-2">1. Multiple Agent Instances</p>
              <p className="text-white/60 text-sm mb-2">Separate processes with isolated browsers</p>
              <ul className="text-white/50 text-sm space-y-1 ml-4">
                <li>❌ No session sharing (cookies, storage, proxy config)</li>
                <li>❌ Coordination overhead between processes</li>
                <li>❌ Resource multiplication</li>
              </ul>
            </div>
            
            <div className="border border-white/10 p-4 rounded">
              <p className="text-white/80 font-medium mb-2">2. State Serialization</p>
              <p className="text-white/60 text-sm mb-2">Save/restore page state around navigations</p>
              <ul className="text-white/50 text-sm space-y-1 ml-4">
                <li>❌ Incomplete state capture (WebSocket connections, timers)</li>
                <li>❌ Race conditions in dynamic applications</li>
                <li>❌ Implementation complexity</li>
              </ul>
            </div>
            
            <div className="border border-white/10 p-4 rounded">
              <p className="text-white/80 font-medium mb-2">3. Deferred Execution</p>
              <p className="text-white/60 text-sm mb-2">Queue secondary operations for later</p>
              <ul className="text-white/50 text-sm space-y-1 ml-4">
                <li>❌ Breaks time-sensitive flows (OTP expiration)</li>
                <li>❌ Cannot handle blocking dependencies</li>
              </ul>
            </div>
          </div>

          <h2 className="text-xl font-thin text-white/90 mt-10 mb-4">2. Solution: Context-Aware Tool Execution</h2>

          <h3 className="text-lg font-thin text-white/80 mt-6 mb-3">2.1 Core Primitive</h3>
          
          <p>The solution introduces a single capability to the tool execution context:</p>

          <pre className="bg-black/40 border border-white/10 rounded p-4 overflow-x-auto text-xs my-4">
            <code className="text-white/70">{`interface ToolExecutionContext {
  /** The primary page under agent control */
  page?: Page;

  /** The browser context containing session state */
  browserContext?: BrowserContext;

  /** Factory for creating session-aware isolated pages */
  createPage?: () => Promise<Page>;
}`}</code>
          </pre>

          <p>The <code className="text-white/80 bg-white/10 px-1 rounded">createPage()</code> function is the key primitive. It:</p>
          
          <ul className="text-white/60 space-y-2 ml-6 list-disc">
            <li>Creates a new page within the <strong className="text-white/80">existing</strong> browser context</li>
            <li>Inherits all session state (cookies, localStorage, proxy configuration)</li>
            <li>Applies anti-detection scripts automatically</li>
            <li>Tracks created pages for cleanup on errors</li>
          </ul>

          <h3 className="text-lg font-thin text-white/80 mt-6 mb-3">2.2 Architectural Implications</h3>
          
          <p>This seemingly simple addition fundamentally changes the tool-agent relationship:</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <div className="border border-white/10 p-4 rounded bg-white/5">
              <p className="text-white/60 text-sm mb-2">Before</p>
              <p className="text-white/80 font-mono text-sm">Tools are functions</p>
              <p className="text-white/50 font-mono text-xs mt-1">f(params) → result</p>
            </div>
            <div className="border border-white/20 p-4 rounded bg-white/10">
              <p className="text-white/60 text-sm mb-2">After</p>
              <p className="text-white/80 font-mono text-sm">Tools are micro-agents</p>
              <p className="text-white/50 font-mono text-xs mt-1">f(params, environment) → result</p>
            </div>
          </div>

          <p>Tools can now:</p>
          <ul className="text-white/60 space-y-2 ml-6 list-disc">
            <li>Navigate independently without affecting the main agent</li>
            <li>Perform multi-step browser operations</li>
            <li>Spawn their own sub-agents for complex tasks</li>
            <li>Execute in parallel across multiple pages</li>
          </ul>

          <MultiContextAnimation />

          <h2 className="text-xl font-thin text-white/90 mt-10 mb-4">3. Implementation Patterns</h2>

          <h3 className="text-lg font-thin text-white/80 mt-6 mb-3">3.1 Pattern: Isolated Page Operations</h3>
          
          <p>The simplest pattern—perform an operation on a separate page without affecting the main workflow.</p>

          <pre className="bg-black/40 border border-white/10 rounded p-4 overflow-x-auto text-xs my-4">
            <code className="text-white/70">{`class EmailActivationTool implements ComputerUseTool {
  name = "activate_email_link";

  async call(
    params: Record<string, unknown>,
    ctx?: ToolExecutionContext
  ): Promise<ToolResult> {
    const { url, successIndicator } = params;

    if (!ctx?.createPage) {
      return { error: "Browser context not available" };
    }

    const page = await ctx.createPage();

    try {
      const response = await page.goto(url, { waitUntil: "networkidle" });
      const status = response?.status() ?? 0;
      const content = await page.content();

      const success = successIndicator
        ? content.includes(successIndicator)
        : status >= 200 && status < 400;

      return {
        output: JSON.stringify({
          success,
          finalUrl: page.url(),
          status,
          title: await page.title(),
        }),
      };
    } finally {
      await page.close();
    }
  }
}`}</code>
          </pre>

          <div className="bg-white/5 border border-white/10 rounded p-4 my-4">
            <p className="text-white/70 font-medium text-sm mb-2">Key characteristics:</p>
            <ul className="text-white/50 text-sm space-y-1 ml-4 list-disc">
              <li>Main agent page remains untouched</li>
              <li>Session cookies are shared (important for authenticated activation links)</li>
              <li>Page is always closed in <code className="bg-white/10 px-1 rounded">finally</code> block</li>
              <li>Structured result enables downstream decision-making</li>
            </ul>
          </div>

          <h3 className="text-lg font-thin text-white/80 mt-6 mb-3">3.2 Pattern: Cross-Domain Data Aggregation</h3>
          
          <p>Fetch data from external sources during a workflow without losing context.</p>

          <pre className="bg-black/40 border border-white/10 rounded p-4 overflow-x-auto text-xs my-4">
            <code className="text-white/70">{`class CrossDomainLookupTool implements ComputerUseTool {
  name = "lookup_external_data";

  private readonly endpoints = {
    portal_a: {
      url: "https://portal-a.example.com/lookup?id=",
      selector: "[data-field='result']",
    },
    portal_b: {
      url: "https://portal-b.example.com/search/",
      selector: ".search-result-value",
    },
  };

  async call(params, ctx?: ToolExecutionContext): Promise<ToolResult> {
    const { identifier, source } = params;
    const endpoint = this.endpoints[source];
    const page = await ctx.createPage();

    try {
      await page.goto(\`\${endpoint.url}\${encodeURIComponent(identifier)}\`);
      await page.waitForSelector(endpoint.selector, { timeout: 10000 });
      const value = await page.locator(endpoint.selector).first().innerText();

      return {
        output: JSON.stringify({ source, identifier, value: value.trim() }),
      };
    } finally {
      await page.close();
    }
  }
}`}</code>
          </pre>

          <p className="text-white/60 italic">
            Use case: An agent filling out a form on Site A needs a registration number from Site B. The tool fetches it without the agent ever leaving Site A.
          </p>

          <h3 className="text-lg font-thin text-white/80 mt-6 mb-3">3.3 Pattern: Sub-Agent Delegation</h3>
          
          <p>The most powerful pattern—spawn a complete sub-agent to handle complex subtasks.</p>

          <pre className="bg-black/40 border border-white/10 rounded p-4 overflow-x-auto text-xs my-4">
            <code className="text-white/70">{`class DelegatedExtractionTool implements ComputerUseTool {
  name = "delegate_extraction";

  async call(params, ctx?: ToolExecutionContext): Promise<ToolResult> {
    const { task, targetUrl } = params;
    const page = await ctx.createPage();

    try {
      await page.goto(targetUrl, { waitUntil: "networkidle" });

      const subAgent = new ComputerUseAgent({
        apiKey: this.apiKey,
        page,
        executionConfig: {
          typing: { mode: "fill" },
          screenshot: { delay: 0.1 },
        },
      });

      const result = await subAgent.execute(task, ExtractedDataSchema, {
        maxTokens: 2048,
        onlyNMostRecentImages: 3,
      });

      return { output: JSON.stringify(result) };
    } finally {
      await page.close();
    }
  }
}`}</code>
          </pre>

          <div className="bg-white/5 border border-white/10 rounded p-4 my-4">
            <p className="text-white/70 font-medium text-sm mb-2">Architectural significance:</p>
            <ul className="text-white/50 text-sm space-y-1 ml-4 list-disc">
              <li>A coordinator agent manages high-level workflow</li>
              <li>Specialized sub-agents handle domain-specific tasks</li>
              <li>Each sub-agent operates in an isolated context</li>
              <li>All agents share session state for authenticated workflows</li>
            </ul>
          </div>

          <h3 className="text-lg font-thin text-white/80 mt-6 mb-3">3.4 Pattern: Parallel Page Operations</h3>
          
          <p>Execute multiple browser operations concurrently.</p>

          <pre className="bg-black/40 border border-white/10 rounded p-4 overflow-x-auto text-xs my-4">
            <code className="text-white/70">{`class ParallelAvailabilityTool implements ComputerUseTool {
  name = "check_urls_parallel";

  async call(params, ctx?: ToolExecutionContext): Promise<ToolResult> {
    const { urls, timeout } = params;

    const checkUrl = async (url: string): Promise<PageCheckResult> => {
      const page = await ctx.createPage();
      const start = Date.now();

      try {
        const response = await page.goto(url, {
          waitUntil: "domcontentloaded",
          timeout,
        });

        return {
          url,
          status: response?.status() ?? 0,
          title: await page.title(),
          loadTime: Date.now() - start,
        };
      } finally {
        await page.close();
      }
    };

    const results = await Promise.all(urls.map(checkUrl));

    return {
      output: JSON.stringify({
        checked: results.length,
        successful: results.filter((r) => r.status >= 200 && r.status < 400).length,
        results,
      }),
    };
  }
}`}</code>
          </pre>

          <p className="text-white/60 italic">
            Performance: N pages checked in ~1x time vs Nx time sequentially, bounded by browser context resource limits.
          </p>

          <h2 className="text-xl font-thin text-white/90 mt-10 mb-4">4. Architectural Analysis</h2>

          <h3 className="text-lg font-thin text-white/80 mt-6 mb-3">4.1 Session Continuity Model</h3>
          
          <p>All pages created via <code className="text-white/80 bg-white/10 px-1 rounded">createPage()</code> share:</p>

          <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="text-left py-2 px-3 text-white/70 font-medium">Resource</th>
                  <th className="text-center py-2 px-3 text-white/70 font-medium">Shared</th>
                  <th className="text-left py-2 px-3 text-white/70 font-medium">Implications</th>
                </tr>
              </thead>
              <tbody className="text-white/60">
                <tr className="border-b border-white/10">
                  <td className="py-2 px-3">Cookies</td>
                  <td className="py-2 px-3 text-center text-green-400">✓</td>
                  <td className="py-2 px-3">Authentication persists across pages</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-2 px-3">localStorage</td>
                  <td className="py-2 px-3 text-center text-green-400">✓</td>
                  <td className="py-2 px-3">Application state accessible</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-2 px-3">sessionStorage</td>
                  <td className="py-2 px-3 text-center text-red-400">✗</td>
                  <td className="py-2 px-3">Per-page isolation maintained</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-2 px-3">Proxy Configuration</td>
                  <td className="py-2 px-3 text-center text-green-400">✓</td>
                  <td className="py-2 px-3">IP consistency for bot detection</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-2 px-3">Anti-Detection Scripts</td>
                  <td className="py-2 px-3 text-center text-green-400">✓</td>
                  <td className="py-2 px-3">Consistent fingerprint</td>
                </tr>
                <tr>
                  <td className="py-2 px-3">WebSocket Connections</td>
                  <td className="py-2 px-3 text-center text-red-400">✗</td>
                  <td className="py-2 px-3">Must establish per-page</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-lg font-thin text-white/80 mt-6 mb-3">4.2 Comparison with Alternative Architectures</h3>

          <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="text-left py-2 px-3 text-white/70 font-medium">Approach</th>
                  <th className="text-center py-2 px-3 text-white/70 font-medium">Session Sharing</th>
                  <th className="text-center py-2 px-3 text-white/70 font-medium">Resource Efficiency</th>
                  <th className="text-center py-2 px-3 text-white/70 font-medium">Coordination</th>
                </tr>
              </thead>
              <tbody className="text-white/60">
                <tr className="border-b border-white/10">
                  <td className="py-2 px-3">Single Context (baseline)</td>
                  <td className="py-2 px-3 text-center">N/A</td>
                  <td className="py-2 px-3 text-center text-green-400">High</td>
                  <td className="py-2 px-3 text-center">N/A</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-2 px-3">Multi-Process Agents</td>
                  <td className="py-2 px-3 text-center text-red-400">None</td>
                  <td className="py-2 px-3 text-center text-red-400">Low</td>
                  <td className="py-2 px-3 text-center text-red-400">High</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-2 px-3">Browser Context per Tool</td>
                  <td className="py-2 px-3 text-center text-yellow-400">Partial</td>
                  <td className="py-2 px-3 text-center text-yellow-400">Medium</td>
                  <td className="py-2 px-3 text-center text-yellow-400">Medium</td>
                </tr>
                <tr className="bg-white/5">
                  <td className="py-2 px-3 font-medium text-white/80">Shared Context + createPage()</td>
                  <td className="py-2 px-3 text-center text-green-400">Full</td>
                  <td className="py-2 px-3 text-center text-green-400">High</td>
                  <td className="py-2 px-3 text-center text-green-400">Low</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-thin text-white/90 mt-10 mb-4">5. Use Cases</h2>

          <div className="space-y-6">
            <div className="border border-white/10 p-4 rounded">
              <h4 className="text-white/80 font-medium mb-3">5.1 Insurance Claims Processing</h4>
              <pre className="text-white/50 text-xs bg-black/30 p-3 rounded overflow-x-auto">
{`Agent Workflow:
1. Navigate to claims portal
2. Fill claim form with policyholder data
3. [Tool] Verify coverage in separate underwriting system
4. [Tool] Fetch accident report from government database
5. Upload supporting documents
6. [Tool] Activate email confirmation link
7. Return confirmation number`}
              </pre>
              <p className="text-white/50 text-sm mt-3 italic">
                Without multi-context: Steps 3, 4, 6 would each destroy the form state.
              </p>
            </div>

            <div className="border border-white/10 p-4 rounded">
              <h4 className="text-white/80 font-medium mb-3">5.2 E-Commerce Order Management</h4>
              <pre className="text-white/50 text-xs bg-black/30 p-3 rounded overflow-x-auto">
{`Agent Workflow:
1. Log into merchant dashboard
2. For each pending order:
   a. [Tool] Check inventory in warehouse system
   b. [Tool] Verify shipping address via postal API
   c. [Tool] Compare competitor pricing (parallel, 5 sites)
   d. Update order status
3. Generate summary report`}
              </pre>
              <p className="text-white/50 text-sm mt-3 italic">
                Parallel competitor checks complete in ~1x time instead of 5x.
              </p>
            </div>

            <div className="border border-white/10 p-4 rounded">
              <h4 className="text-white/80 font-medium mb-3">5.3 Compliance Verification</h4>
              <pre className="text-white/50 text-xs bg-black/30 p-3 rounded overflow-x-auto">
{`Agent Workflow:
1. Open regulatory submission form
2. [Tool] Sub-agent extracts data from uploaded PDF (new page)
3. [Tool] Cross-reference entity in multiple government registries (parallel)
4. [Tool] Verify signatory authorization in corporate registry
5. Complete and submit form`}
              </pre>
              <p className="text-white/50 text-sm mt-3 italic">
                Each verification maintains session context for authenticated registries.
              </p>
            </div>
          </div>

          <h2 className="text-xl font-thin text-white/90 mt-10 mb-4">6. Implications for Agent Architecture</h2>

          <h3 className="text-lg font-thin text-white/80 mt-6 mb-3">6.1 Toward Distributed Intelligence</h3>
          
          <p>This primitive enables a shift from monolithic to distributed agent architectures:</p>

          <DistributedAgentAnimation />

          <h3 className="text-lg font-thin text-white/80 mt-6 mb-3">6.2 Emergent Capabilities</h3>

          <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="text-left py-2 px-3 text-white/70 font-medium">Capability</th>
                  <th className="text-left py-2 px-3 text-white/70 font-medium">Enabled By</th>
                </tr>
              </thead>
              <tbody className="text-white/60">
                <tr className="border-b border-white/10">
                  <td className="py-2 px-3 font-medium text-white/80">Task Decomposition</td>
                  <td className="py-2 px-3">Sub-agents handle subtasks independently</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-2 px-3 font-medium text-white/80">Parallel Execution</td>
                  <td className="py-2 px-3">Multiple pages operate concurrently</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-2 px-3 font-medium text-white/80">Failure Isolation</td>
                  <td className="py-2 px-3">Tool page crash doesn't affect main agent</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-2 px-3 font-medium text-white/80">Specialization</td>
                  <td className="py-2 px-3">Different sub-agents optimized for different domains</td>
                </tr>
                <tr>
                  <td className="py-2 px-3 font-medium text-white/80">State Preservation</td>
                  <td className="py-2 px-3">Main workflow state maintained through branches</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-lg font-thin text-white/80 mt-6 mb-3">6.3 Design Principles</h3>

          <ol className="text-white/60 space-y-3 ml-6 list-decimal">
            <li><strong className="text-white/80">Tools as Capability Boundaries</strong>: Tools define what additional browser access an agent can request</li>
            <li><strong className="text-white/80">Explicit Page Lifecycle</strong>: Tools must manage page creation and cleanup</li>
            <li><strong className="text-white/80">Session as Shared Resource</strong>: Authentication is ambient, not passed explicitly</li>
            <li><strong className="text-white/80">Structured Results</strong>: Tool outputs should enable downstream reasoning</li>
          </ol>

          <h2 className="text-xl font-thin text-white/90 mt-10 mb-4">7. Limitations and Future Work</h2>

          <h3 className="text-lg font-thin text-white/80 mt-6 mb-3">7.1 Current Limitations</h3>

          <ul className="text-white/60 space-y-2 ml-6 list-disc">
            <li><strong className="text-white/70">No Cross-Page Communication</strong>: Pages cannot directly share runtime state</li>
            <li><strong className="text-white/70">Sequential Sub-Agent Execution</strong>: Sub-agents run one at a time per tool call</li>
            <li><strong className="text-white/70">Memory Overhead</strong>: Each page consumes browser resources</li>
            <li><strong className="text-white/70">No Page Persistence</strong>: Tool pages exist only for the duration of the tool call</li>
          </ul>

          <h3 className="text-lg font-thin text-white/80 mt-6 mb-3">7.2 Future Directions</h3>

          <ol className="text-white/60 space-y-2 ml-6 list-decimal">
            <li><strong className="text-white/70">Page Pooling</strong>: Reusable pre-warmed pages for frequent operations</li>
            <li><strong className="text-white/70">Inter-Page Messaging</strong>: Event-based communication between pages</li>
            <li><strong className="text-white/70">Persistent Tool Pages</strong>: Long-lived pages for stateful tools</li>
            <li><strong className="text-white/70">Resource Quotas</strong>: Limits on concurrent pages per agent</li>
            <li><strong className="text-white/70">Distributed Contexts</strong>: Browser contexts across multiple machines</li>
          </ol>

          <h2 className="text-xl font-thin text-white/90 mt-10 mb-4">8. Conclusion</h2>

          <p>
            Multi-context browser control addresses a fundamental limitation in agentic browser automation. By enabling tools to spawn isolated pages within a shared session, the architecture transforms tools from pure functions into autonomous micro-agents capable of independent browser manipulation.
          </p>

          <p>
            This primitive—a single <code className="text-white/80 bg-white/10 px-1 rounded">createPage()</code> function—unlocks:
          </p>

          <ul className="text-white/60 space-y-2 ml-6 list-disc">
            <li>Non-destructive auxiliary operations (email verification, OAuth)</li>
            <li>Cross-domain data aggregation during workflows</li>
            <li>Hierarchical agent architectures with sub-agent delegation</li>
            <li>Parallel browser operations for performance</li>
          </ul>

          <p>
            The implications extend beyond implementation convenience. This capability enables distributed intelligence architectures where reasoning, environment manipulation, and verification can be separated across specialized agents while maintaining session continuity.
          </p>

          <p className="text-white/80 font-medium italic">
            As browser automation agents take on increasingly complex workflows, multi-context control becomes not an optimization but a necessity.
          </p>

          <div className="border border-white/20 rounded-lg p-6 my-10 bg-gradient-to-r from-white/5 to-transparent">
            <div className="flex items-start gap-4">
              <div className="text-2xl">🚀</div>
              <div>
                <h3 className="text-white/90 font-medium mb-2">Use This in Your Projects</h3>
                <p className="text-white/60 text-sm mb-4">
                  These multi-context capabilities are available in our open-source BrowserAgent package. Build custom tools with <code className="text-white/80 bg-white/10 px-1 rounded">createPage()</code>, access <code className="text-white/80 bg-white/10 px-1 rounded">browserContext</code>, and create hierarchical agent architectures today.
                </p>
                <a 
                  href="https://www.npmjs.com/package/@centralinc/browseragent" 
                  className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm font-medium border border-white/20 px-4 py-2 rounded hover:border-white/40"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>@centralinc/browseragent on npm</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>

          <h2 className="text-xl font-thin text-white/90 mt-10 mb-4">References</h2>

          <ul className="text-white/60 space-y-2 ml-6 list-disc text-sm">
            <li>
              <a href="https://docs.anthropic.com/en/docs/agents-and-tools/tool-use/computer-use-tool" className="text-white/70 hover:text-white transition-colors underline" target="_blank" rel="noopener noreferrer">
                Anthropic Computer Use Documentation
              </a>
            </li>
            <li>
              <a href="https://playwright.dev/docs/browser-contexts" className="text-white/70 hover:text-white transition-colors underline" target="_blank" rel="noopener noreferrer">
                Playwright Browser Contexts
              </a>
            </li>
            <li>
              <a href="https://docs.anthropic.com/en/docs/build-with-claude/extended-thinking" className="text-white/70 hover:text-white transition-colors underline" target="_blank" rel="noopener noreferrer">
                Extended Thinking
              </a>
            </li>
          </ul>

        </div>
      </article>

      <section className="text-white/40 text-sm border-t border-white/10 pt-6">
        <a href="/ai-era" className="hover:text-white/60 transition-colors">
          ← Back to AI Era
        </a>
      </section>
    </div>
  )
}

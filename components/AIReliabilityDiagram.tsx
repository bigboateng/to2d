'use client'

import { useState } from 'react'

interface ChipDef {
  id: string
  label: string
  role: string
  detects: string
  tooltip: string
  accent?: string
}

const CHIPS: ChipDef[] = [
  { id: 'llm', label: 'LLM', role: 'STOCHASTIC CORE', detects: '', tooltip: 'Stochastic core — generates structured output from task input' },
  { id: 'contract', label: 'llm-contract', role: 'INVARIANT BOUNDARY', detects: 'schema violations · hallucinated fields · type mismatches · structural drift', tooltip: 'Deterministic invariant boundary — validates before execution', accent: '#8b5cf6' },
  { id: 'agent', label: 'BrowserAgent', role: 'OPERATOR', detects: 'selector failures · timeout · auth rejection · unexpected navigation', tooltip: 'World-facing operator — executes validated actions' },
  { id: 'state', label: 'BrowserState', role: 'SIGNAL CAPTURE', detects: 'session corruption · state divergence · missing evidence · unreplayable conditions', tooltip: 'Signal capture — makes execution observable and reproducible', accent: '#3b82f6' },
]

const FLOW_LABELS = [
  'raw output',
  'validated action',
  'execution signals',
]

export default function AIReliabilityDiagram() {
  const [hoveredChip, setHoveredChip] = useState<string | null>(null)

  const chipY = (i: number) => 32 + i * 88
  const activeTooltip = CHIPS.find((c) => c.id === hoveredChip)

  return (
    <div className="w-full overflow-x-auto -mx-6 px-6 md:-mx-10 md:px-10">
      <svg
        viewBox="0 0 660 420"
        className="w-full min-w-[560px]"
        style={{ minHeight: '420px' }}
      >
        <defs>
          <pattern id="pcb-dots" width="16" height="16" patternUnits="userSpaceOnUse">
            <circle cx="8" cy="8" r="0.4" fill="rgba(255,255,255,0.035)" />
          </pattern>
          <pattern id="pcb-grid" width="80" height="80" patternUnits="userSpaceOnUse">
            <rect width="80" height="80" fill="url(#pcb-dots)" />
            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="rgba(255,255,255,0.018)" strokeWidth="0.5" />
          </pattern>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <rect width="660" height="420" fill="url(#pcb-grid)" />

        {/* === FLOW: top-to-bottom pipeline === */}
        {CHIPS.map((chip, i) => {
          const y = chipY(i)
          const isHovered = hoveredChip === chip.id
          const stroke = isHovered
            ? (chip.accent ?? 'rgba(255,255,255,0.45)')
            : (chip.accent ? `${chip.accent}33` : 'rgba(255,255,255,0.08)')

          return (
            <g key={chip.id}>
              {/* Trace to next chip */}
              {i < CHIPS.length - 1 && (
                <g>
                  <line
                    x1="200" y1={y + 64} x2="200" y2={chipY(i + 1)}
                    stroke="rgba(255,255,255,0.2)" strokeWidth="1.2" strokeLinecap="round"
                  />
                  <circle cx="200" cy={y + 64} r="2" fill="rgba(255,255,255,0.2)" />
                  <circle cx="200" cy={chipY(i + 1)} r="2" fill="rgba(255,255,255,0.2)" />
                  <text
                    x="212" y={y + 64 + 14}
                    fill="rgba(255,255,255,0.15)" fontSize="8" fontFamily="monospace"
                  >
                    {FLOW_LABELS[i]}
                  </text>
                </g>
              )}

              {/* Chip */}
              <g
                onMouseEnter={() => { setHoveredChip(chip.id) }}
                onMouseLeave={() => { setHoveredChip(null) }}
                style={{ cursor: 'default' }}
              >
                {/* Pad */}
                <rect x="91" y={y - 4} width="218" height="72" rx="2"
                  fill="none" stroke={isHovered ? 'rgba(255,255,255,0.03)' : 'transparent'} />
                {/* Body */}
                <rect x="96" y={y} width="208" height="64" rx="3"
                  fill="rgba(255,255,255,0.012)" stroke={stroke}
                  strokeWidth={isHovered ? 1 : 0.6}
                  filter={isHovered ? 'url(#glow)' : undefined} />
                {/* Pins left */}
                {[0.3, 0.5, 0.7].map((pct) => (
                  <rect key={`l${pct}`} x="92" y={y + 64 * pct - 3} width="4" height="6" rx="0.5"
                    fill={isHovered ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.03)'} />
                ))}
                {/* Pins right */}
                {[0.3, 0.5, 0.7].map((pct) => (
                  <rect key={`r${pct}`} x="304" y={y + 64 * pct - 3} width="4" height="6" rx="0.5"
                    fill={isHovered ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.03)'} />
                ))}
                {/* Label */}
                <text x="200" y={y + 27}
                  fill={isHovered ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.6)'}
                  fontSize="13" fontFamily="monospace" textAnchor="middle">
                  {chip.label}
                </text>
                {/* Role */}
                <text x="200" y={y + 45}
                  fill={isHovered ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.1)'}
                  fontSize="7" fontFamily="monospace" textAnchor="middle" letterSpacing="0.15em">
                  {chip.role}
                </text>
              </g>

              {/* Detection annotation — right side */}
              {chip.detects && (
                <g>
                  <line x1="310" y1={y + 32} x2="340" y2={y + 32}
                    stroke={chip.accent ?? 'rgba(255,255,255,0.12)'} strokeWidth="0.8"
                    opacity="0.3" strokeLinecap="round" />
                  <circle cx="340" cy={y + 32} r="2"
                    fill={chip.accent ?? 'rgba(255,255,255,0.15)'} opacity="0.3" />
                  <text x="350" y={y + 22}
                    fill="rgba(255,255,255,0.12)" fontSize="7" fontFamily="monospace">
                    detects
                  </text>
                  {chip.detects.split(' · ').map((item, j) => (
                    <text key={j} x="350" y={y + 33 + j * 12}
                      fill={chip.accent ? `${chip.accent}66` : 'rgba(255,255,255,0.2)'}
                      fontSize="8" fontFamily="monospace">
                      {item}
                    </text>
                  ))}
                </g>
              )}
            </g>
          )
        })}

        {/* Direction indicator */}
        <text x="80" y={chipY(0) + 32}
          fill="rgba(255,255,255,0.08)" fontSize="8" fontFamily="monospace"
          textAnchor="end" transform={`rotate(-90, 80, ${chipY(0) + 32 + 80})`}>
          information flow ↓
        </text>

        {/* Tooltip */}
        {activeTooltip && (() => {
          const i = CHIPS.findIndex((c) => c.id === activeTooltip.id)
          const y = chipY(i)
          return (
            <g>
              <rect x="46" y={y - 20} width="308" height="16" rx="2"
                fill="rgba(0,0,0,0.9)" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
              <text x="200" y={y - 9}
                fill="rgba(255,255,255,0.45)" fontSize="8" fontFamily="monospace" textAnchor="middle">
                {activeTooltip.tooltip}
              </text>
            </g>
          )
        })()}

      </svg>
    </div>
  )
}

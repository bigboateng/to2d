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
  { id: 'contract', label: 'llm-contract', role: 'INVARIANT BOUNDARY', detects: 'schema violations · hallucinated fields · type mismatches · structural drift', tooltip: 'Deterministic invariant boundary — validates before execution', accent: '#7c3aed' },
  { id: 'agent', label: 'BrowserAgent', role: 'OPERATOR', detects: 'selector failures · timeout · auth rejection · unexpected navigation', tooltip: 'World-facing operator — executes validated actions' },
  { id: 'state', label: 'BrowserState', role: 'SIGNAL CAPTURE', detects: 'session corruption · state divergence · missing evidence · unreplayable conditions', tooltip: 'Signal capture — makes execution observable and reproducible', accent: '#2563eb' },
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
            <circle cx="8" cy="8" r="0.4" fill="#E8E8E6" />
          </pattern>
          <pattern id="pcb-grid" width="80" height="80" patternUnits="userSpaceOnUse">
            <rect width="80" height="80" fill="url(#pcb-dots)" />
            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#E8E8E6" strokeWidth="0.3" />
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

        {CHIPS.map((chip, i) => {
          const y = chipY(i)
          const isHovered = hoveredChip === chip.id
          const stroke = isHovered
            ? (chip.accent ?? '#2A2A2A')
            : (chip.accent ? `${chip.accent}40` : '#DADADA')

          return (
            <g key={chip.id}>
              {i < CHIPS.length - 1 && (
                <g>
                  <line
                    x1="200" y1={y + 64} x2="200" y2={chipY(i + 1)}
                    stroke="#B5B5B5" strokeWidth="1.2" strokeLinecap="round"
                  />
                  <circle cx="200" cy={y + 64} r="2" fill="#B5B5B5" />
                  <circle cx="200" cy={chipY(i + 1)} r="2" fill="#B5B5B5" />
                  <text
                    x="212" y={y + 64 + 14}
                    fill="#8C8C8C" fontSize="8" fontFamily="monospace"
                  >
                    {FLOW_LABELS[i]}
                  </text>
                </g>
              )}

              <g
                onMouseEnter={() => { setHoveredChip(chip.id) }}
                onMouseLeave={() => { setHoveredChip(null) }}
                style={{ cursor: 'default' }}
              >
                <rect x="91" y={y - 4} width="218" height="72" rx="2"
                  fill="none" stroke={isHovered ? '#E8E8E6' : 'transparent'} />
                <rect x="96" y={y} width="208" height="64" rx="3"
                  fill={isHovered ? '#FFFFFF' : '#FAFAFA'} stroke={stroke}
                  strokeWidth={isHovered ? 1 : 0.8}
                  filter={isHovered ? 'url(#glow)' : undefined} />
                {[0.3, 0.5, 0.7].map((pct) => (
                  <rect key={`l${pct}`} x="92" y={y + 64 * pct - 3} width="4" height="6" rx="0.5"
                    fill={isHovered ? '#DADADA' : '#E8E8E6'} />
                ))}
                {[0.3, 0.5, 0.7].map((pct) => (
                  <rect key={`r${pct}`} x="304" y={y + 64 * pct - 3} width="4" height="6" rx="0.5"
                    fill={isHovered ? '#DADADA' : '#E8E8E6'} />
                ))}
                <text x="200" y={y + 27}
                  fill={isHovered ? '#1A1A1A' : '#2A2A2A'}
                  fontSize="13" fontFamily="monospace" textAnchor="middle">
                  {chip.label}
                </text>
                <text x="200" y={y + 45}
                  fill={isHovered ? '#5A5A5A' : '#8C8C8C'}
                  fontSize="7" fontFamily="monospace" textAnchor="middle" letterSpacing="0.15em">
                  {chip.role}
                </text>
              </g>

              {chip.detects && (
                <g>
                  <line x1="310" y1={y + 32} x2="340" y2={y + 32}
                    stroke={chip.accent ?? '#DADADA'} strokeWidth="0.8"
                    opacity="0.5" strokeLinecap="round" />
                  <circle cx="340" cy={y + 32} r="2"
                    fill={chip.accent ?? '#DADADA'} opacity="0.5" />
                  <text x="350" y={y + 22}
                    fill="#8C8C8C" fontSize="7" fontFamily="monospace">
                    detects
                  </text>
                  {chip.detects.split(' · ').map((item, j) => (
                    <text key={j} x="350" y={y + 33 + j * 12}
                      fill={chip.accent ? `${chip.accent}99` : '#5A5A5A'}
                      fontSize="8" fontFamily="monospace">
                      {item}
                    </text>
                  ))}
                </g>
              )}
            </g>
          )
        })}

        <text x="80" y={chipY(0) + 32}
          fill="#DADADA" fontSize="8" fontFamily="monospace"
          textAnchor="end" transform={`rotate(-90, 80, ${chipY(0) + 32 + 80})`}>
          information flow ↓
        </text>

        {activeTooltip && (() => {
          const i = CHIPS.findIndex((c) => c.id === activeTooltip.id)
          const y = chipY(i)
          return (
            <g>
              <rect x="46" y={y - 20} width="308" height="16" rx="2"
                fill="#FFFFFF" stroke="#DADADA" strokeWidth="0.5" />
              <text x="200" y={y - 9}
                fill="#5A5A5A" fontSize="8" fontFamily="monospace" textAnchor="middle">
                {activeTooltip.tooltip}
              </text>
            </g>
          )
        })()}

      </svg>
    </div>
  )
}

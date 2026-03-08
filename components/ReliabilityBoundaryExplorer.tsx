'use client'

import { useMemo, useState } from 'react'

type BoundaryMode =
  | 'signals'
  | 'assumptions'
  | 'failures'
  | 'recovery'
  | 'observabilityGaps'

type Boundary = {
  id: string
  title: string
  shortDescription: string
  signals: string[]
  assumptions: string[]
  failures: string[]
  recovery: string[]
  observabilityGaps: string[]
}

const SYSTEM_CHAIN = ['Builder', 'Agent', 'Infra', 'Environment', 'Website']

const MODES: { id: BoundaryMode; label: string }[] = [
  { id: 'signals', label: 'Signals' },
  { id: 'assumptions', label: 'Assumptions' },
  { id: 'failures', label: 'Failures' },
  { id: 'recovery', label: 'Recovery' },
  { id: 'observabilityGaps', label: 'Observability Gaps' },
]

const BOUNDARIES: Boundary[] = [
  {
    id: 'model-output',
    title: 'Model Output Boundary',
    shortDescription: 'Many automation systems rely on language models to generate structured actions or data.',
    signals: [
      'raw model output',
      'structured output validity',
      'schema parse success',
      'retry count',
      'repair success rate',
    ],
    assumptions: [
      'output matches expected schema',
      'model instruction is sufficient',
      'downstream system can trust parsed output',
    ],
    failures: [
      'malformed JSON',
      'missing required fields',
      'invalid action type',
      'inconsistent structure across retries',
    ],
    recovery: [
      'schema validation',
      'repair step',
      'retry with constraint',
      'boundary error surfaced clearly',
    ],
    observabilityGaps: [
      'no raw output capture',
      'no schema failure reason',
      'no retry classification',
      'no distinction between model failure and parser failure',
    ],
  },
  {
    id: 'page-interpretation',
    title: 'Page Interpretation Boundary',
    shortDescription: 'Automation depends on assumptions about selectors, DOM structure, and layout patterns.',
    signals: [
      'selector hit rate',
      'DOM shape',
      'duplicate elements',
      'iframe presence',
      'dynamic rendering timing',
    ],
    assumptions: [
      'target element exists',
      'selector maps to intended element',
      'page structure matches expected pattern',
    ],
    failures: [
      'selector drift',
      'wrong semantic match',
      'duplicate target candidates',
      'stale DOM',
      'iframe-hidden target',
    ],
    recovery: [
      'semantic element detection',
      'DOM inspection',
      'fallback selector path',
      'manual intervention',
      'schema validation of extracted data',
    ],
    observabilityGaps: [
      'no DOM snapshot diff',
      'no semantic validation',
      'no duplicate-match reporting',
      'no iframe-aware diagnostics',
    ],
  },
  {
    id: 'session-auth',
    title: 'Session / Auth Boundary',
    shortDescription: 'Many workflows rely on session reuse, but session validity often depends on more than cookies.',
    signals: [
      'cookie presence',
      'session age',
      'auth state',
      'device trust',
      'IP location',
      'security challenge detection',
    ],
    assumptions: [
      'stored session remains valid',
      'cookies are enough to restore auth',
      'environment is trusted',
    ],
    failures: [
      'login redirect loop',
      'forced re-authentication',
      'security verification prompt',
      'device mismatch',
      'location mismatch',
    ],
    recovery: [
      're-login',
      'OTP flow',
      'environment alignment',
      'trusted-device restoration',
      'session invalidation and rebuild',
    ],
    observabilityGaps: [
      'no device trust signal',
      'no environment compatibility check',
      'no challenge classification',
      'no distinction between credential failure and trust failure',
    ],
  },
  {
    id: 'environment-proxy',
    title: 'Environment / Proxy Boundary',
    shortDescription: 'Some failures originate outside automation logic, in environment and network conditions treated as static configuration.',
    signals: [
      'proxy region',
      'IP stability',
      'IP reputation',
      'browser fingerprint',
      'datacenter vs residential network',
      'challenge rate by environment',
    ],
    assumptions: [
      'current proxy is acceptable',
      'network identity will be trusted',
      'target site behavior is environment-independent',
    ],
    failures: [
      'proxy blocked',
      'region mismatch',
      'captcha triggered',
      'IP reputation failure',
      'environment-specific login failure',
    ],
    recovery: [
      'region selection',
      'proxy capability testing',
      'residential fallback',
      'sticky session strategy',
      'environment diagnostics',
    ],
    observabilityGaps: [
      'no proxy viability report',
      'no region validation',
      'no challenge-rate tracking',
      'no environment-level failure classification',
    ],
  },
  {
    id: 'operations-human-relay',
    title: 'Operations / Human Relay Boundary',
    shortDescription: 'Some reliability breaks occur where operational knowledge and system behavior are not clearly connected.',
    signals: [
      'operator escalations',
      'manual overrides',
      'repeated support tickets',
      'recurring intervention categories',
      'unresolved failure clusters',
    ],
    assumptions: [
      'humans can interpret system failure correctly',
      'operational instructions map cleanly into automation behavior',
      'handoff between teams is sufficient',
    ],
    failures: [
      'ambiguous escalation',
      'incomplete issue description',
      'repeated manual recovery',
      'support-only knowledge not encoded in system',
    ],
    recovery: [
      'clearer failure classification',
      'boundary-oriented runbooks',
      'encode repeated ops knowledge into system behavior',
      'better human-readable traces',
    ],
    observabilityGaps: [
      'no structured escalation reason',
      'no mapping from ops issue to system boundary',
      'no feedback loop from manual recovery into design',
    ],
  },
]

export function ReliabilityBoundaryExplorer() {
  const [selectedBoundaryID, setSelectedBoundaryID] = useState<string>('page-interpretation')
  const [selectedMode, setSelectedMode] = useState<BoundaryMode>('signals')

  const selectedBoundary = useMemo(
    () => BOUNDARIES.find((boundary) => boundary.id === selectedBoundaryID) ?? BOUNDARIES[0],
    [selectedBoundaryID],
  )

  const modeItems = selectedBoundary[selectedMode]

  return (
    <section className="border border-[#5b4126]/25 bg-[#fffdf8]/75 p-5 md:p-6 space-y-6">
      <header className="space-y-2">
        <h2 className="text-2xl font-semibold text-[#1f1912]">Reliability Boundary Explorer</h2>
        <p className="text-[16px] leading-relaxed text-[#2a231c]">
          Inspect where reliability sits in an automation system.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1fr_1.4fr] gap-4">
        <aside className="border border-[#5b4126]/20 bg-[#fffaf0]/70 p-4 space-y-3">
          <p className="text-xs uppercase tracking-[0.12em] text-[#5b4126]/75">System Chain</p>
          <ol className="space-y-2">
            {SYSTEM_CHAIN.map((node) => (
              <li key={node} className="text-[15px] text-[#2a231c]">
                {node}
              </li>
            ))}
          </ol>
        </aside>

        <aside className="border border-[#5b4126]/20 bg-[#fffaf0]/70 p-4 space-y-3">
          <p className="text-xs uppercase tracking-[0.12em] text-[#5b4126]/75">Boundary Layers</p>
          <div className="space-y-2">
            {BOUNDARIES.map((boundary) => {
              const isActive = boundary.id === selectedBoundaryID
              return (
                <button
                  key={boundary.id}
                  type="button"
                  onClick={() => { setSelectedBoundaryID(boundary.id) }}
                  className={`w-full text-left border px-3 py-2 text-[14px] leading-snug transition-colors ${
                    isActive
                      ? 'border-[#5b4126]/50 bg-[#f7ecd6] text-[#1f1912]'
                      : 'border-[#5b4126]/20 bg-white/40 text-[#2a231c] hover:bg-[#f8efd9]'
                  }`}
                >
                  {boundary.title}
                </button>
              )
            })}
          </div>
        </aside>

        <section className="border border-[#5b4126]/20 bg-[#fffaf0]/70 p-4 space-y-4">
          <div className="border-b border-[#5b4126]/20 pb-3">
            <h3 className="text-lg font-semibold text-[#1f1912]">{selectedBoundary.title}</h3>
            <p className="text-[15px] leading-relaxed text-[#2a231c] mt-1">
              {selectedBoundary.shortDescription}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {MODES.map((mode) => {
              const isActive = mode.id === selectedMode
              return (
                <button
                  key={mode.id}
                  type="button"
                  onClick={() => { setSelectedMode(mode.id) }}
                  className={`border px-3 py-1.5 text-[13px] transition-colors ${
                    isActive
                      ? 'border-[#5b4126]/55 bg-[#f7ecd6] text-[#1f1912]'
                      : 'border-[#5b4126]/20 bg-white/40 text-[#2a231c] hover:bg-[#f8efd9]'
                  }`}
                >
                  {mode.label}
                </button>
              )
            })}
          </div>

          <div className="min-h-[260px] border border-[#5b4126]/20 bg-white/40 p-4">
            <p className="text-xs uppercase tracking-[0.12em] text-[#5b4126]/75 mb-3">
              {MODES.find((mode) => mode.id === selectedMode)?.label}
            </p>
            <ul className="space-y-2">
              {modeItems.map((item) => (
                <li key={item} className="text-[15px] leading-relaxed text-[#2a231c]">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </section>
  )
}

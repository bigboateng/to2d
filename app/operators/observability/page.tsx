import type { Metadata } from 'next'
import { PiModelToggle } from '@/components/PiModelToggle'
import { ApplyConcept, type PromptSpec } from '@/components/ApplyConcept'

export const metadata: Metadata = {
  title: 'Observability',
  description: 'Progress requires observability. Systems cannot improve what they cannot see. Agents, like engineers, depend on signals the environment exposes.',
  openGraph: {
    title: 'Agents act on observations, not reality.',
    description: 'Progress requires observability. Systems cannot improve what they cannot see.',
    type: 'article',
    images: [
      {
        url: '/images/og/observability-cover.svg',
        width: 1200,
        height: 630,
        alt: 'Progress Requires Observability - TO2D',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agents act on observations, not reality.',
    description: 'Progress requires observability. Systems cannot improve what they cannot see.',
    images: ['/images/og/observability-cover.svg'],
  },
}

const promptSpec: PromptSpec = {
  problem: {
    title: 'Apply to a problem',
    template: `Apply observability analysis to the following system or problem.

Follow this process:
1. Identify what signals the system currently exposes
2. Identify what internal state is hidden from the operator (human or agent)
3. Map failure modes to missing signals
4. Determine whether failures are reasoning failures or observability failures
5. Propose instrumentation changes that would make the system observable

Problem:
{{input}}

Return:
- Current observable signals (what the operator can see)
- Hidden state (what the operator cannot see)
- Failure modes caused by missing signals
- Diagnosis: reasoning failure vs observability failure
- Proposed instrumentation (what signals to add)
- Expected reliability improvement`,
  },
  codebase: {
    title: 'Apply in a codebase',
    template: `Use observability analysis to evaluate a codebase or system.

Problem:
{{input}}

Instructions:
- Identify the observation function g(x): what state is exposed to the controller
- Identify hidden state: what internal state is NOT exposed
- Find cases where two different states produce the same observation
- Determine if failures are bounded by the observation function or the policy

Return:
- State variables the system tracks
- State variables the system does NOT expose
- Observation function: what signals reach the agent/controller
- Hidden state examples: cases where g(x₁) = g(x₂) but correct action differs
- Reliability bound: is the bottleneck g (observation) or π (policy)?
- Instrumentation recommendations`,
  },
}

export default function ObservabilityPage() {
  return (
    <div className="max-w-3xl space-y-14">
      <header className="space-y-4 border-b border-[#E8E8E6] pb-8">
        <p className="text-xs uppercase tracking-[0.2em] text-[#8C8C8C] font-mono">Operators / Observability</p>
        <h1 className="text-3xl md:text-4xl font-light tracking-tight leading-tight text-[#1A1A1A]">
          Progress Requires Observability
        </h1>
        <ApplyConcept promptSpec={promptSpec} />
      </header>

      <section className="space-y-5">
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Software engineers have known for decades that you cannot debug what you cannot see. Logs, metrics, traces, dashboards — these are not luxuries. They are the minimum infrastructure required to make correct decisions about a running system.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          But it is important to clarify what this means.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Observability is not simply watching a system. An engineer staring at a dashboard is observing the system. Observability describes something different: the system itself exposing enough signals to explain its internal behavior. If the system does not emit those signals, no amount of monitoring or inspection can reconstruct what happened.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          This distinction matters even more for autonomous systems. Modern agent systems operate inside environments that already exist — web applications, APIs, document pipelines, enterprise systems. The agent does not control the instrumentation of those environments. It only receives whatever signals the environment exposes.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Progress therefore depends entirely on what the system reveals. If the environment exposes the signals required to understand state transitions, the agent can diagnose failures and adjust its behavior. If the environment hides those signals, the agent is forced to guess.
        </p>
        <pre className="font-mono text-sm leading-relaxed bg-[#FFFFFF] border border-[#DADADA] p-4 overflow-x-auto text-[#2A2A2A]">
{`observing a system     → looking at outputs
observable system      → signals explain state
autonomous system      → decisions depend on signals`}
        </pre>
      </section>

      {/* ── What Observability Actually Means ── */}

      <section className="space-y-5">
        <h2 className="text-xl font-light text-[#1A1A1A]">What Observability Actually Means</h2>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Observability is not monitoring. Monitoring tells you when a known metric crosses a threshold. Observability is the capacity to infer internal system state from external signals.
        </p>
        <pre className="font-mono text-sm leading-relaxed bg-[#FFFFFF] border border-[#DADADA] p-4 overflow-x-auto text-[#2A2A2A]">
{`monitoring:     did the known thing fail?
observability:  what is actually happening inside the system?`}
        </pre>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Observability is not about collecting data. It is about exposing the right data.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          A system is observable when its outputs, errors, and side effects carry enough information to reconstruct the decisions that produced them. This matters because corrective action requires diagnosis, and diagnosis requires evidence.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Observability should not be confused with simply observing a system. An engineer can observe a system through dashboards or logs, but those tools only work because the system was designed to emit signals in the first place. Observability is therefore a property of the system, not a property of the observer. A system that does not emit the signals needed to infer its internal state remains opaque regardless of how much monitoring infrastructure surrounds it.
        </p>

        <div className="overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0 pt-2">
          <svg viewBox="0 0 520 280" className="w-full" style={{ minWidth: '340px' }}>
            <defs>
              <pattern id="obs-what" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="0.4" fill="#E8E8E6" />
              </pattern>
            </defs>
            <rect width="520" height="280" fill="url(#obs-what)" rx="2" />

            <rect x="185" y="14" width="150" height="34" rx="3" fill="#FFFFFF" stroke="#DADADA" strokeWidth="1" />
            <text x="260" y="36" textAnchor="middle" fill="#2A2A2A" fontSize="12" fontFamily="ui-monospace, monospace">system</text>

            <line x1="210" y1="48" x2="210" y2="78" stroke="#B5B5B5" strokeWidth="1.2" />
            <polygon points="210,82 206,74 214,74" fill="#B5B5B5" />

            <line x1="310" y1="48" x2="310" y2="78" stroke="#B5B5B5" strokeWidth="1.2" />
            <polygon points="310,82 306,74 314,74" fill="#B5B5B5" />

            <rect x="145" y="84" width="130" height="34" rx="3" fill="#FFFFFF" stroke="#DADADA" strokeWidth="1" />
            <text x="210" y="106" textAnchor="middle" fill="#2A2A2A" fontSize="11" fontFamily="ui-monospace, monospace">outputs</text>

            <rect x="275" y="84" width="130" height="34" rx="3" fill="#FFFFFF" stroke="#C89B2C" strokeWidth="1.2" />
            <text x="340" y="106" textAnchor="middle" fill="#C89B2C" fontSize="11" fontFamily="ui-monospace, monospace">errors</text>

            <line x1="210" y1="118" x2="210" y2="148" stroke="#B5B5B5" strokeWidth="1.2" />
            <line x1="310" y1="118" x2="310" y2="148" stroke="#B5B5B5" strokeWidth="1.2" />

            <line x1="210" y1="148" x2="260" y2="164" stroke="#B5B5B5" strokeWidth="1.2" />
            <line x1="310" y1="148" x2="260" y2="164" stroke="#B5B5B5" strokeWidth="1.2" />

            <polygon points="260,168 256,160 264,160" fill="#B5B5B5" />

            <rect x="175" y="170" width="170" height="34" rx="3" fill="#F2F2F0" stroke="#DADADA" strokeWidth="1" />
            <text x="260" y="192" textAnchor="middle" fill="#2A2A2A" fontSize="11" fontFamily="ui-monospace, monospace">diagnosis</text>

            <line x1="260" y1="204" x2="260" y2="224" stroke="#B5B5B5" strokeWidth="1.2" />
            <polygon points="260,228 256,220 264,220" fill="#B5B5B5" />

            <rect x="170" y="230" width="180" height="34" rx="3" fill="#FFFFFF" stroke="#3C7A52" strokeWidth="1" />
            <text x="260" y="252" textAnchor="middle" fill="#3C7A52" fontSize="11" fontFamily="ui-monospace, monospace">corrective action</text>

            <text x="26" y="106" fill="#8C8C8C" fontSize="9" fontFamily="ui-monospace, monospace">signals</text>
            <text x="26" y="192" fill="#8C8C8C" fontSize="9" fontFamily="ui-monospace, monospace">inference</text>
            <text x="26" y="252" fill="#8C8C8C" fontSize="9" fontFamily="ui-monospace, monospace">response</text>
          </svg>
        </div>

        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Without sufficient signals, the gap between what happened and what you can determine about what happened becomes the gap between progress and stagnation.
        </p>

        <PiModelToggle>
          <div className="space-y-4">
            <p className="text-[13px] leading-relaxed text-[#5A5A5A]">
              Let <span className="font-mono text-[#2A2A2A]">x_t</span> be the current state of the system.<br />
              Let <span className="font-mono text-[#2A2A2A]">u_t</span> be the action applied to the system.<br />
              Let <span className="font-mono text-[#2A2A2A]">x_&#123;t+1&#125;</span> be the resulting next state.<br />
              Let <span className="font-mono text-[#2A2A2A]">y_t</span> be the signals exposed by the system.
            </p>
            <pre className="font-mono text-sm leading-loose text-[#2A2A2A] bg-[#FFFFFF] border border-[#DADADA] p-4 overflow-x-auto">
{`x_{t+1}  =  A x_t  +  B u_t     state evolution
y_t      =  g( x_t )            observation function
u_t      =  π( y_t )            policy on observed state`}
            </pre>
            <p className="text-[13px] leading-relaxed text-[#5A5A5A]">
              The controller does not act on the true state directly. It acts on the state as revealed through observation. If two states produce the same observation but require different actions:
            </p>
            <pre className="font-mono text-sm leading-loose text-[#C89B2C] bg-[#FFFFFF] border border-[#DADADA] p-4 overflow-x-auto">
{`g(x₁) = g(x₂)     same observation
u(x₁) ≠ u(x₂)     different correct action`}
            </pre>
            <p className="text-[13px] leading-relaxed text-[#5A5A5A]">
              the controller cannot determine how to move the system correctly. That is an observability failure.
            </p>
            <p className="text-[10px] font-mono tracking-[0.15em] text-[#8C8C8C] uppercase pt-2">example: browser automation</p>
            <pre className="font-mono text-sm leading-loose text-[#2A2A2A] bg-[#FFFFFF] border border-[#DADADA] p-4 overflow-x-auto">
{`x_t   actual browser state
      (DOM, auth state, bot checks, async page state)

y_t   observable browser signals
      (screenshot, DOM snapshot, URL, console/network errors)

u_t   browser action
      (click, type, scroll, navigate)`}
            </pre>
            <p className="text-[13px] leading-relaxed text-[#5A5A5A]">
              If two browser states appear identical to the agent but require different next actions, the automation system is not observable enough for reliable control.
            </p>
          </div>
        </PiModelToggle>
      </section>

      {/* ── Hidden State Breaks Decisions ── */}

      <section className="space-y-5">
        <h2 className="text-xl font-light text-[#1A1A1A]">When Hidden State Breaks Decisions</h2>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          The observability problem becomes concrete when two different environment states produce the same observation. The agent receives identical information in both cases, but the correct action is different.
        </p>

        <div className="overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0 pt-2">
          <svg viewBox="0 0 520 380" className="w-full" style={{ minWidth: '340px' }}>
            <defs>
              <pattern id="obs-hidden" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="0.4" fill="#E8E8E6" />
              </pattern>
            </defs>
            <rect width="520" height="380" fill="url(#obs-hidden)" rx="2" />

            <text x="260" y="20" textAnchor="middle" fill="#8C8C8C" fontSize="9" fontFamily="ui-monospace, monospace" letterSpacing="0.1em">REAL ENVIRONMENT STATE</text>

            <rect x="60" y="34" width="170" height="50" rx="3" fill="#FFFFFF" stroke="#C89B2C" strokeWidth="1.2" />
            <text x="145" y="55" textAnchor="middle" fill="#2A2A2A" fontSize="11" fontFamily="ui-monospace, monospace">state A</text>
            <text x="145" y="72" textAnchor="middle" fill="#C89B2C" fontSize="10" fontFamily="ui-monospace, monospace">captcha required</text>

            <rect x="290" y="34" width="170" height="50" rx="3" fill="#FFFFFF" stroke="#3C7A52" strokeWidth="1.2" />
            <text x="375" y="55" textAnchor="middle" fill="#2A2A2A" fontSize="11" fontFamily="ui-monospace, monospace">state B</text>
            <text x="375" y="72" textAnchor="middle" fill="#3C7A52" fontSize="10" fontFamily="ui-monospace, monospace">normal login</text>

            <line x1="145" y1="84" x2="145" y2="110" stroke="#B5B5B5" strokeWidth="1.2" />
            <line x1="375" y1="84" x2="375" y2="110" stroke="#B5B5B5" strokeWidth="1.2" />

            <line x1="145" y1="110" x2="260" y2="130" stroke="#B5B5B5" strokeWidth="1.2" />
            <line x1="375" y1="110" x2="260" y2="130" stroke="#B5B5B5" strokeWidth="1.2" />

            <polygon points="260,134 256,126 264,126" fill="#B5B5B5" />

            <text x="260" y="122" textAnchor="middle" fill="#8C8C8C" fontSize="9" fontFamily="ui-monospace, monospace">g(x)</text>

            <rect x="175" y="140" width="170" height="50" rx="3" fill="#F2F2F0" stroke="#DADADA" strokeWidth="1.2" />
            <text x="260" y="161" textAnchor="middle" fill="#8C8C8C" fontSize="10" fontFamily="ui-monospace, monospace">observation</text>
            <text x="260" y="178" textAnchor="middle" fill="#2A2A2A" fontSize="11" fontFamily="ui-monospace, monospace">&quot;login page&quot;</text>

            <line x1="260" y1="190" x2="260" y2="216" stroke="#B5B5B5" strokeWidth="1.2" />
            <polygon points="260,220 256,212 264,212" fill="#B5B5B5" />

            <rect x="195" y="222" width="130" height="44" rx="3" fill="#FFFFFF" stroke="#DADADA" strokeWidth="1" />
            <rect x="189" y="238" width="6" height="6" rx="0.8" fill="#E8E8E6" />
            <rect x="325" y="238" width="6" height="6" rx="0.8" fill="#E8E8E6" />
            <text x="260" y="242" textAnchor="middle" fill="#2A2A2A" fontSize="11" fontFamily="ui-monospace, monospace">agent</text>
            <text x="260" y="258" textAnchor="middle" fill="#C89B2C" fontSize="10" fontFamily="ui-monospace, monospace">decision ?</text>

            <line x1="50" y1="290" x2="470" y2="290" stroke="#E8E8E6" strokeWidth="1" />

            <text x="260" y="310" textAnchor="middle" fill="#8C8C8C" fontSize="9" fontFamily="ui-monospace, monospace" letterSpacing="0.1em">CORRECT ACTION DIFFERS</text>

            <rect x="60" y="322" width="170" height="30" rx="3" fill="#FFFFFF" stroke="#C89B2C" strokeWidth="1" />
            <text x="145" y="342" textAnchor="middle" fill="#C89B2C" fontSize="10" fontFamily="ui-monospace, monospace">state A → solve captcha</text>

            <rect x="290" y="322" width="170" height="30" rx="3" fill="#FFFFFF" stroke="#3C7A52" strokeWidth="1" />
            <text x="375" y="342" textAnchor="middle" fill="#3C7A52" fontSize="10" fontFamily="ui-monospace, monospace">state B → submit login</text>

            <text x="26" y="64" fill="#8C8C8C" fontSize="9" fontFamily="ui-monospace, monospace">true</text>
            <text x="26" y="76" fill="#8C8C8C" fontSize="9" fontFamily="ui-monospace, monospace">states</text>
            <text x="26" y="170" fill="#8C8C8C" fontSize="9" fontFamily="ui-monospace, monospace">collapsed</text>
            <text x="26" y="248" fill="#8C8C8C" fontSize="9" fontFamily="ui-monospace, monospace">blind</text>
          </svg>
        </div>

        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          <span className="font-mono text-xs text-[#C89B2C]">Observability failure.</span> Two different environment states produce the same observation. Because the agent cannot distinguish the states, it cannot determine the correct action.
        </p>
      </section>

      {/* ── The Engineering Parallel ── */}

      <section className="space-y-5">
        <h2 className="text-xl font-light text-[#1A1A1A]">The Engineering Parallel</h2>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Consider a production system with no logs. When a request fails, the engineer has nothing to work with. The failure occurred somewhere inside the system, but the system exposed no trace of its internal path.
        </p>
        <pre className="font-mono text-sm leading-relaxed bg-[#FFFFFF] border border-[#DADADA] p-4 overflow-x-auto text-[#2A2A2A]">
{`request → [ system ] → failure

no logs
no metrics
no trace
no structured error`}
        </pre>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          The engineer cannot improve this system. Not because the problem is hard, but because the system does not expose the information needed to reason about it.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Now add structured logging, request tracing, and error categorization:
        </p>
        <pre className="font-mono text-sm leading-relaxed bg-[#FFFFFF] border border-[#DADADA] p-4 overflow-x-auto text-[#2A2A2A]">
{`request → [ system ] → failure
                ↓
         trace: auth → db → serialize → fail at step 3
         error: missing field "account_id"
         latency: 340ms`}
        </pre>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Now the engineer can act. The signal revealed the internal state. The system became observable, and therefore improvable.
        </p>
      </section>

      {/* ── Why Observability Matters for Agents ── */}

      <section className="space-y-5">
        <h2 className="text-xl font-light text-[#1A1A1A]">Why Observability Matters for Agents</h2>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          In traditional software systems, observability exists to help engineers understand what the system is doing. Logs, metrics, traces, and dashboards expose internal behavior through external signals. When these signals are present, engineers can diagnose failures and determine the correct corrective action.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Agent systems operate under the same constraint.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Agents do not instrument the environments they interact with. They inherit whatever signals the environment exposes. In browser automation, for example, the environment is the browser and the page itself — both of which already exist independently of the agent. This makes observability a structural constraint rather than a tooling choice.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          An agent does not have direct access to the environment it interacts with. It only sees the signals that the software system exposes. These signals might include:
        </p>
        <pre className="font-mono text-sm leading-relaxed bg-[#FFFFFF] border border-[#DADADA] p-4 overflow-x-auto text-[#2A2A2A]">
{`page structure
API responses
error messages
state transitions
side effects of previous actions`}
        </pre>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          If these signals are incomplete, the agent cannot reliably determine what action to take next. In that situation, the system behaves like a black box.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          The agent may retry actions, explore alternative paths, or produce explanations for what might be happening. But without sufficient signals, those actions become guesses rather than decisions.
        </p>

        <div className="overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0 pt-2">
          <svg viewBox="0 0 520 200" className="w-full" style={{ minWidth: '340px' }}>
            <defs>
              <pattern id="obs-agent" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="0.4" fill="#E8E8E6" />
              </pattern>
            </defs>
            <rect width="520" height="200" fill="url(#obs-agent)" rx="2" />

            <text x="26" y="28" fill="#8C8C8C" fontSize="9" fontFamily="ui-monospace, monospace" letterSpacing="0.1em">ENGINEER</text>
            <rect x="26" y="38" width="220" height="28" rx="3" fill="#FFFFFF" stroke="#DADADA" strokeWidth="1" />
            <text x="136" y="56" textAnchor="middle" fill="#2A2A2A" fontSize="10" fontFamily="ui-monospace, monospace">logs → diagnosis → fix → deploy</text>

            <text x="26" y="96" fill="#8C8C8C" fontSize="9" fontFamily="ui-monospace, monospace" letterSpacing="0.1em">AGENT</text>
            <rect x="26" y="106" width="260" height="28" rx="3" fill="#FFFFFF" stroke="#DADADA" strokeWidth="1" />
            <text x="156" y="124" textAnchor="middle" fill="#2A2A2A" fontSize="10" fontFamily="ui-monospace, monospace">signals → inference → action → observe</text>

            <text x="26" y="164" fill="#8C8C8C" fontSize="9" fontFamily="ui-monospace, monospace" letterSpacing="0.1em">SHARED CONSTRAINT</text>
            <rect x="26" y="170" width="320" height="22" rx="3" fill="#F2F2F0" stroke="#DADADA" strokeWidth="1" />
            <text x="186" y="185" textAnchor="middle" fill="#C89B2C" fontSize="10" fontFamily="ui-monospace, monospace">progress depends on what the system reveals</text>
          </svg>
        </div>
      </section>

      {/* ── Why Many Agent Failures Are Misdiagnosed ── */}

      <section className="space-y-5">
        <h2 className="text-xl font-light text-[#1A1A1A]">Why Many Agent Failures Are Misdiagnosed</h2>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          When agents fail, the natural reaction is to blame the model. Perhaps the reasoning was incorrect. Perhaps the prompt was insufficient. Perhaps the model needs more context or memory.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Sometimes those explanations are correct.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          But many failures that appear to be reasoning failures are actually observability failures. The agent was never given enough information to determine the correct next action in the first place.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          This is similar to debugging a production system without logs. Even the best engineer cannot reliably diagnose a problem when the system does not reveal what is happening internally.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Agents face the same limitation. If the signals do not reveal the state of the environment, the agent cannot reason its way to the correct action.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-[10px] font-mono tracking-[0.15em] text-[#C89B2C] uppercase mb-2">Failure Mode</p>
            <pre className="font-mono text-sm leading-relaxed bg-[#FFFFFF] border border-[#DADADA] p-4 overflow-x-auto text-[#C89B2C]">
{`action failed silently
wrong element selected
state changed unexpectedly
context was stale`}
            </pre>
          </div>
          <div>
            <p className="text-[10px] font-mono tracking-[0.15em] text-[#3C7A52] uppercase mb-2">Root Cause</p>
            <pre className="font-mono text-sm leading-relaxed bg-[#FFFFFF] border border-[#DADADA] p-4 overflow-x-auto text-[#3C7A52]">
{`no error returned
no visibility into page state
no change notification
no freshness signal`}
            </pre>
          </div>
        </div>

        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          In each case, the system failed to expose state that would have allowed the agent to correct itself. The environment was not observable at the resolution the agent required.
        </p>

        <PiModelToggle>
          <div className="space-y-4">
            <pre className="font-mono text-sm leading-loose text-[#2A2A2A] bg-[#FFFFFF] border border-[#DADADA] p-4 overflow-x-auto">
{`x  =  true state        what the system actually is
y  =  g(x)              what the agent can see`}
            </pre>
            <p className="text-[13px] leading-relaxed text-[#5A5A5A]">
              If <span className="font-mono text-[#2A2A2A]">y</span> hides a variable that affects the correct action:
            </p>
            <pre className="font-mono text-sm leading-loose text-[#C89B2C] bg-[#FFFFFF] border border-[#DADADA] p-4 overflow-x-auto">
{`x  =  (login_page, captcha_required)
y  =  (login_page)

The observation discards captcha_required.
The policy cannot distinguish the states.`}
            </pre>
            <p className="text-[13px] leading-relaxed text-[#5A5A5A]">
              The failure is not in reasoning — it is in the observation function <span className="font-mono text-[#2A2A2A]">g(x)</span>.
            </p>
            <p className="text-[10px] font-mono tracking-[0.15em] text-[#8C8C8C] uppercase pt-2">example: browser automation</p>
            <pre className="font-mono text-sm leading-loose text-[#2A2A2A] bg-[#FFFFFF] border border-[#DADADA] p-4 overflow-x-auto">
{`x   page with rate limit active
y   DOM snapshot shows normal login form

x   page ready for form submission
y   DOM snapshot shows normal login form`}
            </pre>
            <p className="text-[13px] leading-relaxed text-[#5A5A5A]">
              The agent sees the same page in both cases. One will succeed, the other will silently fail. The signals are insufficient to distinguish them.
            </p>
          </div>
        </PiModelToggle>
      </section>

      {/* ── Observability and Decision Making ── */}

      <section className="space-y-5">
        <h2 className="text-xl font-light text-[#1A1A1A]">Observability and Decision Making</h2>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Correct action requires diagnosis. Diagnosis requires evidence.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          In an observable system, outputs, errors, and side effects provide that evidence. These signals allow the operator — human or agent — to reconstruct what the system is doing.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          When those signals are missing, decision making becomes speculative. The system may still produce outputs, but those outputs cannot be reliably interpreted.
        </p>
        <pre className="font-mono text-sm leading-relaxed bg-[#FFFFFF] border border-[#DADADA] p-4 overflow-x-auto text-[#C89B2C]">
{`opaque system + capable agent = unreliable behavior
observable system + capable agent = improvable behavior`}
        </pre>
      </section>

      {/* ── Observability in Autonomous Systems ── */}

      <section className="space-y-5">
        <h2 className="text-xl font-light text-[#1A1A1A]">Observability in Autonomous Systems</h2>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Autonomous software systems make decisions continuously. For these systems to remain stable, the environment must expose signals that allow the agent to answer three questions:
        </p>
        <pre className="font-mono text-sm leading-relaxed bg-[#FFFFFF] border border-[#DADADA] p-4 overflow-x-auto text-[#2A2A2A]">
{`1. What just happened?
2. What state is the system currently in?
3. What action will move the system toward the desired state?`}
        </pre>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          If those questions cannot be answered from the available signals, the system is not observable. In that case, progress depends on trial and error rather than informed action.
        </p>
      </section>

      {/* ── The Observability Stack ── */}

      <section className="space-y-5">
        <h2 className="text-xl font-light text-[#1A1A1A]">The Observability Stack</h2>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          In traditional engineering, observability has a well-known stack: logs, metrics, and traces. Each layer exposes different information about system behavior.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          For agent systems, the equivalent stack maps to the operator–environment interaction model.
        </p>

        <div className="overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0 pt-2">
          <svg viewBox="0 0 520 340" className="w-full" style={{ minWidth: '340px' }}>
            <defs>
              <pattern id="obs-stack" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="0.4" fill="#E8E8E6" />
              </pattern>
            </defs>
            <rect width="520" height="340" fill="url(#obs-stack)" rx="2" />

            <text x="140" y="24" textAnchor="middle" fill="#8C8C8C" fontSize="9" fontFamily="ui-monospace, monospace" letterSpacing="0.1em">ENGINEERING</text>
            <text x="380" y="24" textAnchor="middle" fill="#8C8C8C" fontSize="9" fontFamily="ui-monospace, monospace" letterSpacing="0.1em">AGENT SYSTEMS</text>

            <line x1="260" y1="10" x2="260" y2="330" stroke="#E8E8E6" strokeWidth="1" />

            <rect x="50" y="40" width="180" height="34" rx="3" fill="#FFFFFF" stroke="#DADADA" strokeWidth="1" />
            <text x="140" y="62" textAnchor="middle" fill="#2A2A2A" fontSize="11" fontFamily="ui-monospace, monospace">logs</text>

            <rect x="290" y="40" width="180" height="34" rx="3" fill="#FFFFFF" stroke="#DADADA" strokeWidth="1" />
            <text x="380" y="62" textAnchor="middle" fill="#2A2A2A" fontSize="11" fontFamily="ui-monospace, monospace">error signals</text>

            <rect x="50" y="90" width="180" height="34" rx="3" fill="#FFFFFF" stroke="#DADADA" strokeWidth="1" />
            <text x="140" y="112" textAnchor="middle" fill="#2A2A2A" fontSize="11" fontFamily="ui-monospace, monospace">metrics</text>

            <rect x="290" y="90" width="180" height="34" rx="3" fill="#FFFFFF" stroke="#DADADA" strokeWidth="1" />
            <text x="380" y="112" textAnchor="middle" fill="#2A2A2A" fontSize="11" fontFamily="ui-monospace, monospace">state exposure</text>

            <rect x="50" y="140" width="180" height="34" rx="3" fill="#FFFFFF" stroke="#DADADA" strokeWidth="1" />
            <text x="140" y="162" textAnchor="middle" fill="#2A2A2A" fontSize="11" fontFamily="ui-monospace, monospace">traces</text>

            <rect x="290" y="140" width="180" height="34" rx="3" fill="#FFFFFF" stroke="#DADADA" strokeWidth="1" />
            <text x="380" y="162" textAnchor="middle" fill="#2A2A2A" fontSize="11" fontFamily="ui-monospace, monospace">action history</text>

            <rect x="50" y="190" width="180" height="34" rx="3" fill="#FFFFFF" stroke="#DADADA" strokeWidth="1" />
            <text x="140" y="212" textAnchor="middle" fill="#2A2A2A" fontSize="11" fontFamily="ui-monospace, monospace">dashboards</text>

            <rect x="290" y="190" width="180" height="34" rx="3" fill="#FFFFFF" stroke="#DADADA" strokeWidth="1" />
            <text x="380" y="212" textAnchor="middle" fill="#2A2A2A" fontSize="11" fontFamily="ui-monospace, monospace">environment model</text>

            <line x1="50" y1="250" x2="470" y2="250" stroke="#E8E8E6" strokeWidth="1" />

            <rect x="145" y="270" width="230" height="34" rx="3" fill="#F2F2F0" stroke="#DADADA" strokeWidth="1" />
            <text x="260" y="292" textAnchor="middle" fill="#2A2A2A" fontSize="11" fontFamily="ui-monospace, monospace">observability = improvability</text>

            <text x="26" y="62" fill="#8C8C8C" fontSize="9" fontFamily="ui-monospace, monospace">what</text>
            <text x="26" y="112" fill="#8C8C8C" fontSize="9" fontFamily="ui-monospace, monospace">how much</text>
            <text x="26" y="162" fill="#8C8C8C" fontSize="9" fontFamily="ui-monospace, monospace">path</text>
            <text x="26" y="212" fill="#8C8C8C" fontSize="9" fontFamily="ui-monospace, monospace">overview</text>
          </svg>
        </div>
      </section>

      {/* ── Observability as a Precondition ── */}

      <section className="space-y-5">
        <h2 className="text-xl font-light text-[#1A1A1A]">Observability as a Precondition</h2>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Observability is not a feature. It is a precondition for every other system property.
        </p>
        <pre className="font-mono text-sm leading-relaxed bg-[#FFFFFF] border border-[#DADADA] p-4 overflow-x-auto text-[#2A2A2A]">
{`reliability     requires knowing when failures occur
correctness     requires knowing what was produced
adaptability    requires knowing what changed
improvement     requires knowing what to change`}
        </pre>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          You cannot verify a boundary you cannot observe. You cannot correct an error you did not detect. You cannot improve a system whose behavior is invisible.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          This is why observability sits between error signals and environment discovery in the operator model. Signals expose state. Observability explains what that state means. Discovery uses that explanation to navigate unknown territory.
        </p>
      </section>

      {/* ── Observability Before Intelligence ── */}

      <section className="space-y-5">
        <h2 className="text-xl font-light text-[#1A1A1A]">Observability Before Intelligence</h2>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          A common assumption in agent development is that better reasoning models will solve reliability problems.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          But reasoning operates on the information available to the system. If the system does not expose the variables that determine success or failure, better reasoning does not solve the problem. It only produces more sophisticated guesses.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          For this reason, improving observability often produces larger reliability gains than improving the model itself.
        </p>

        <PiModelToggle>
          <div className="space-y-4">
            <pre className="font-mono text-sm leading-loose text-[#2A2A2A] bg-[#FFFFFF] border border-[#DADADA] p-4 overflow-x-auto">
{`x  →  g(x)  →  y  →  π(y)  →  u  →  environment`}
            </pre>
            <p className="text-[13px] leading-relaxed text-[#5A5A5A]">
              If <span className="font-mono text-[#2A2A2A]">g(x)</span> discards variables that determine the outcome, no policy <span className="font-mono text-[#2A2A2A]">π</span> can recover them. System reliability is bounded by the weaker of the two:
            </p>
            <pre className="font-mono text-sm leading-loose text-[#C89B2C] bg-[#FFFFFF] border border-[#DADADA] p-4 overflow-x-auto">
{`reliability  ≤  min( quality(g),  quality(π) )

When quality(g) << quality(π), improving π has no effect.`}
            </pre>
            <p className="text-[10px] font-mono tracking-[0.15em] text-[#8C8C8C] uppercase pt-2">example: browser automation</p>
            <pre className="font-mono text-sm leading-loose text-[#2A2A2A] bg-[#FFFFFF] border border-[#DADADA] p-4 overflow-x-auto">
{`g(x)  DOM snapshot that omits async loading state
π(y)  GPT-4 with perfect reasoning

The model correctly infers the page layout,
but the DOM was captured mid-render.

The action targets an element that does not exist yet.
No amount of model improvement fixes this.
The observation function is the bottleneck.`}
            </pre>
          </div>
        </PiModelToggle>
      </section>

      {/* ── Designing for Observability ── */}

      <section className="space-y-5">
        <h2 className="text-xl font-light text-[#1A1A1A]">Designing for Observability</h2>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          If observability is a precondition for reliability, then system design must treat signal exposure as a first-class concern.
        </p>
        <pre className="font-mono text-sm leading-relaxed bg-[#FFFFFF] border border-[#DADADA] p-4 overflow-x-auto text-[#2A2A2A]">
{`every action should produce a verifiable signal
every failure should produce a structured error
every state transition should be detectable
every environment constraint should be discoverable`}
        </pre>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Systems that satisfy these properties give the operator — whether human or autonomous — the information required to make correct decisions. Systems that do not satisfy them create an upper bound on reliability that no amount of model improvement can overcome.
        </p>
      </section>

      {/* ── Relationship to Error Signals ── */}

      <section className="space-y-5">
        <h2 className="text-xl font-light text-[#1A1A1A]">Relationship to Signals</h2>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Error signals are one specific kind of observable. They indicate when outputs violate system constraints. Observability generalizes this: it encompasses all signals, not just failure signals.
        </p>
        <pre className="font-mono text-sm leading-relaxed bg-[#FFFFFF] border border-[#DADADA] p-4 overflow-x-auto text-[#2A2A2A]">
{`error signals    ⊂    observable signals    ⊂    environment state`}
        </pre>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Error signals are the most action-relevant observables because they directly indicate what needs correction. But a system with only error signals and no other observability cannot diagnose why failures occur or predict when they will recur.
        </p>
      </section>

      {/* ── Relationship to Environment Discovery ── */}

      <section className="space-y-5">
        <h2 className="text-xl font-light text-[#1A1A1A]">Relationship to Environment Discovery</h2>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Environment discovery is the process of learning the structure of an unknown environment through interaction. Observability determines what the discovery process can learn.
        </p>
        <pre className="font-mono text-sm leading-relaxed bg-[#FFFFFF] border border-[#DADADA] p-4 overflow-x-auto text-[#2A2A2A]">
{`signals expose state           (signals)
observability explains state   (this article)
discovery navigates state      (environment discovery)`}
        </pre>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          If the observation function is too narrow, the system cannot discover constraints that lie outside the observable space — regardless of how many interactions it performs.
        </p>
      </section>

      {/* ── Progress Requires Observability ── */}

      <section className="space-y-5">
        <h2 className="text-xl font-light text-[#1A1A1A]">Progress Requires Observability</h2>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Before improving reasoning, planning, or memory, it is worth asking a simpler question:
        </p>
        <pre className="font-mono text-sm leading-relaxed bg-[#FFFFFF] border border-[#DADADA] p-4 overflow-x-auto text-[#2A2A2A]">
{`Does the system expose enough information
to determine the correct next action?`}
        </pre>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          If the answer is no, the agent will struggle regardless of model capability. An autonomous system cannot improve performance on variables it cannot observe.
        </p>
        <pre className="font-mono text-sm leading-relaxed bg-[#FFFFFF] border border-[#DADADA] p-4 overflow-x-auto text-[#2A2A2A]">
{`environment → signals → observability → diagnosis → correction → progress`}
        </pre>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Progress requires observability.
        </p>
      </section>
    </div>
  )
}

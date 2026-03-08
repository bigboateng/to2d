'use client'

import { useMemo, useState } from 'react'

type PracticeExampleID = 'extraction' | 'sessionPortability' | 'proxyEnvironment'

type PracticeStep = {
  id: string
  label: string
  detail: string
  code?: string
  visualTitle: string
  visualLines: string[]
  currentBoundary: string
  failure: string
  observable: string
}

type PracticeExample = {
  id: PracticeExampleID
  title: string
  goal: string
  steps: PracticeStep[]
}

function renderObservedState(exampleID: PracticeExampleID, stepID: string) {
  if (exampleID === 'extraction') {
    if (stepID === 'goal' || stepID === 'naive-automation') {
      return (
        <div className="border border-[#5b4126]/25 bg-white/60 p-3 space-y-2">
          <p className="font-semibold text-[#1f1912] text-[14px]">Observed Form UI</p>
          <p className="text-[14px]">Coverage Eligibility</p>
          <div className="text-[14px] space-y-1">
            <p>[x] Option A - Verified Coverage</p>
            <p>[ ] Option B - Self-Pay</p>
          </div>
          <p className="text-[13px] text-[#5b4126]">Form constraint: exactly one option must be selected</p>
        </div>
      )
    }
    if (stepID === 'hidden-assumption') {
      return (
        <div className="border border-[#5b4126]/25 bg-white/60 p-3 space-y-3">
          <div className="text-[14px]">
            <p className="font-semibold text-[#1f1912]">Observed Form UI</p>
            <p>[x] Option A - Verified Coverage</p>
            <p>[ ] Option B - Self-Pay</p>
          </div>
          <div className="border border-[#5b4126]/35 border-dashed bg-[#fff7ea] p-2 text-[13px]">
            Assumption: coverage options are only A or B
          </div>
          <p className="text-[13px] text-[#5b4126]">Form constraint: exactly one option must be selected</p>
        </div>
      )
    }
    if (stepID === 'failure-trigger') {
      return (
        <div className="border border-[#5b4126]/25 bg-white/60 p-3 space-y-2">
          <p className="font-semibold text-[#1f1912] text-[14px]">Observed Form UI</p>
          <p className="text-[14px]">Coverage Eligibility</p>
          <div className="text-[14px] space-y-1">
            <p className="bg-[#f7ecd6] border border-[#5b4126]/25 px-2 py-1">[ ] Option A - Verified Coverage</p>
            <p className="bg-[#f7ecd6] border border-[#5b4126]/25 px-2 py-1">[x] Option B - Self-Pay</p>
            <p className="bg-[#f7ecd6] border border-[#5b4126]/25 px-2 py-1">[ ] Option C - Pending Insurance Review</p>
          </div>
          <p className="text-[13px] text-[#5b4126]">Form constraint: exactly one option must be selected</p>
          <p className="text-[13px] text-[#5b4126]">Portal update: users on Option A are now auto-selected to Option B</p>
        </div>
      )
    }
    if (stepID === 'boundary-aware' || stepID === 'observable-result') {
      return (
        <div className="border border-[#5b4126]/25 bg-white/60 p-3 space-y-3">
          <p className="font-semibold text-[#1f1912] text-[14px]">Boundary Result</p>
          <div className="border border-[#5b4126]/35 bg-[#fff7ea] p-2 text-[13px] space-y-1">
            <p>Form state outside known admissible configuration</p>
            <p>Detected options: A, B, C</p>
            <p>Unexpected option: Pending Insurance Review</p>
            <p>Submission blocked</p>
          </div>
        </div>
      )
    }
  }

  if (exampleID === 'sessionPortability') {
    if (stepID === 'login-goal' || stepID === 'naive-state') {
      return (
        <div className="border border-[#5b4126]/25 bg-white/60 p-3 space-y-2 text-[14px]">
          <p className="font-semibold text-[#1f1912]">Observed Portal</p>
          <p>Dashboard</p>
          <p>Welcome John Doe</p>
          <p>Billing Summary</p>
        </div>
      )
    }
    if (stepID === 'hidden-assumption') {
      return (
        <div className="border border-[#5b4126]/25 bg-white/60 p-3 space-y-3">
          <div className="text-[14px] space-y-1">
            <p className="font-semibold text-[#1f1912]">Observed Portal</p>
            <p>Session restored from cookies</p>
          </div>
          <div className="border border-[#5b4126]/35 border-dashed bg-[#fff7ea] p-2 text-[13px]">
            Assumption: cookies == authenticated session
          </div>
        </div>
      )
    }
    if (stepID === 'failure-trigger') {
      return (
        <div className="border border-[#5b4126]/25 bg-white/60 p-3 space-y-2 text-[14px]">
          <p className="font-semibold text-[#1f1912]">Observed Portal</p>
          <div className="border border-[#5b4126]/30 bg-[#fff7ea] p-2">
            Security Verification Required
          </div>
          <p>Please confirm this device</p>
        </div>
      )
    }
    if (stepID === 'boundary-aware' || stepID === 'observable-result') {
      return (
        <div className="border border-[#5b4126]/25 bg-white/60 p-3 space-y-3">
          <p className="font-semibold text-[#1f1912] text-[14px]">Boundary Diagnosis</p>
          <div className="border border-[#5b4126]/35 bg-[#fff7ea] p-2 text-[13px] space-y-1">
            <p>Session restore failed</p>
            <p>Reason: device trust mismatch</p>
            <p>Action: portal re-verification required</p>
          </div>
        </div>
      )
    }
  }

  if (exampleID === 'proxyEnvironment') {
    if (stepID === 'naive-setup' || stepID === 'hidden-assumption') {
      return (
        <div className="border border-[#5b4126]/25 bg-white/60 p-3 space-y-2 text-[14px]">
          <p className="font-semibold text-[#1f1912]">Observed Portal</p>
          <p>Login page loads normally</p>
          <p>Environment trust not yet validated</p>
        </div>
      )
    }
    if (stepID === 'failure-trigger') {
      return (
        <div className="border border-[#5b4126]/25 bg-white/60 p-3 space-y-2 text-[14px]">
          <p className="font-semibold text-[#1f1912]">Observed Portal</p>
          <div className="border border-[#5b4126]/30 bg-[#fff7ea] p-2">Access Denied</div>
          <p>Unusual traffic detected</p>
        </div>
      )
    }
    if (stepID === 'alternate-success') {
      return (
        <div className="border border-[#5b4126]/25 bg-white/60 p-3 space-y-2 text-[14px]">
          <p className="font-semibold text-[#1f1912]">Observed Portal</p>
          <p>Environment accepted</p>
          <p>Login allowed</p>
        </div>
      )
    }
    if (stepID === 'boundary-aware' || stepID === 'observable-result') {
      return (
        <div className="border border-[#5b4126]/25 bg-white/60 p-3 space-y-3">
          <p className="font-semibold text-[#1f1912] text-[14px]">Environment Diagnosis</p>
          <div className="border border-[#5b4126]/35 bg-[#fff7ea] p-2 text-[13px] space-y-1">
            <p>Environment mismatch</p>
            <p>Proxy type: datacenter</p>
            <p>Required: residential US</p>
          </div>
        </div>
      )
    }
  }

  return null
}

const PRACTICE_EXAMPLES: PracticeExample[] = [
  {
    id: 'extraction',
    title: 'Form State Boundary',
    goal: 'Select coverage eligibility option for patient claim.',
    steps: [
      {
        id: 'goal',
        label: 'Goal',
        code: 'await agent.run({\n  task: "Select Option A and submit only if exactly one of [Option A, Option B] is selected"\n})',
        detail: 'Form automation depends on validating current UI state before submit.',
        visualTitle: 'Initial Form State',
        visualLines: [
          'Coverage Eligibility',
          'Option A - Verified Coverage',
          'Option B - Self-Pay',
          'Constraint: exactly one option must be selected',
        ],
        currentBoundary: 'Submission intent boundary',
        failure: 'No form-state checks yet',
        observable: 'Known UI options',
      },
      {
        id: 'naive-automation',
        label: 'Naive implementation',
        code: 'const selected = "A"\nawait submit(selected)',
        detail: 'Automation explicitly selects Option A and assumes only Option A or Option B can appear.',
        visualTitle: 'Naive Selection',
        visualLines: ['selected option: A', 'submission follows selection', 'no validation for unknown options'],
        currentBoundary: 'Selector/choice resolution',
        failure: 'Unknown option state unguarded',
        observable: 'Selected value only',
      },
      {
        id: 'hidden-assumption',
        label: 'Hidden assumption',
        code: '// assumes coverage options ∈ {A, B}\n// assumes exactly one option must be selected',
        detail: 'Valid form states are implicit and not checked.',
        visualTitle: 'Assumed Option Space',
        visualLines: ['allowed choices: A, B', 'unexpected options not modeled'],
        currentBoundary: 'Implicit form-state assumptions',
        failure: 'Interface expansion not captured',
        observable: 'Assumption only',
      },
      {
        id: 'failure-trigger',
        label: 'Failure trigger',
        code: '// portal update\n// new option appears\n//\n// Option C: "Pending Insurance Review"\n//\n// new update: users on Option A are now automatically selected to Option B',
        detail: 'Form interface changes beyond expected options.',
        visualTitle: 'Expanded Form Interface',
        visualLines: [
          'Coverage Eligibility',
          'Option A - Verified Coverage',
          'Option B - Self-Pay (auto-selected for previous Option A users)',
          'Option C - Pending Insurance Review',
        ],
        currentBoundary: 'Assumption mismatch',
        failure: 'Automation outside known option space',
        observable: 'Unexpected option signal',
      },
      {
        id: 'boundary-aware',
        label: 'Boundary-aware implementation',
        code: 'const state = inspectFormState()\nassertAdmissible(state, {\n  allowedOptions: ["A", "B"],\n  requireSingleSelection: true,\n  requiredSelection: "A"\n})\nawait submit(state)',
        detail: 'Boundary validates form fields and selection rules before submission.',
        visualTitle: 'Boundary Check',
        visualLines: [
          'Extraction mismatch detected',
          'Detected options: A, B, C',
          'Expected option set: A, B',
          'Submission blocked',
        ],
        currentBoundary: 'Form-state validation boundary',
        failure: 'Unexpected option + invalid preselection',
        observable: 'Validation result + error class',
      },
      {
        id: 'observable-result',
        label: 'Observable result',
        code: 'AdmissibleFormStateBoundaryError:\n\nunexpected option detected: "Pending Insurance Review"\n\nknown options: ["A", "B"]\nobserved options: ["A", "B", "C"]\n\nsubmission blocked',
        detail: 'Boundary prevents silent wrong submission and returns a clear error.',
        visualTitle: 'Diagnosable Boundary Error',
        visualLines: [
          'Unexpected option detected: Pending Insurance Review',
          'Known options: A, B',
          'Observed options: A, B, C',
          'Submission blocked',
        ],
        currentBoundary: 'Form-state validation boundary',
        failure: 'Silent incorrect action removed',
        observable: 'Classified UI state change',
      },
    ],
  },
  {
    id: 'sessionPortability',
    title: 'Medical Portal Login - Session Boundary',
    goal: 'Log in to hospital portal and retrieve latest bill.',
    steps: [
      {
        id: 'login-goal',
        label: 'Goal',
        code: 'await agent.run({\n  task: "Log in to hospital portal and retrieve latest bill"\n})',
        detail: 'Session reliability is required before extraction begins.',
        visualTitle: 'State 1 - Authenticated Portal',
        visualLines: ['Dashboard', 'Welcome John Doe', 'Billing Summary'],
        currentBoundary: 'Login success boundary',
        failure: 'Portability not tested',
        observable: 'Portal authenticated state',
      },
      {
        id: 'naive-state',
        label: 'Naive implementation',
        code: 'await page.context().storageState({ path: "portal.json" })\n\nconst context = await browser.newContext({\n  storageState: "portal.json"\n})',
        detail: 'Restoration starts from stored browser state only.',
        visualTitle: 'Local Restore Works',
        visualLines: ['storageState loaded', 'Session accepted locally', 'Dashboard visible'],
        currentBoundary: 'Cookie/state restore',
        failure: 'Trust dimensions not modeled',
        observable: 'Local success only',
      },
      {
        id: 'hidden-assumption',
        label: 'Hidden assumption',
        code: '// assumes cookies == authenticated session',
        detail: 'Assumes browser state is sufficient across environments.',
        visualTitle: 'Boundary Assumption',
        visualLines: ['cookies present', 'auth expected true', 'trust layer not explicit'],
        currentBoundary: 'Cookie equivalence assumption',
        failure: 'Trust mismatch invisible',
        observable: 'Assumption only',
      },
      {
        id: 'failure-trigger',
        label: 'Failure trigger',
        code: 'portal adds device trust check\nenvironment changed\nIP region changed',
        detail: 'Cloud execution introduces trust challenge.',
        visualTitle: 'State 2 - Verification Challenge',
        visualLines: ['Security Verification Required', 'Please confirm this device', 'Dashboard hidden'],
        currentBoundary: 'Session trust boundary',
        failure: 'Generic restore failure',
        observable: 'Challenge state',
      },
      {
        id: 'boundary-aware',
        label: 'Boundary-aware version',
        code: 'const session = await restoreSession({\n  browserState,\n  authState,\n  deviceTrust,\n  locationState\n})',
        detail: 'Boundary includes auth and trust state dimensions.',
        visualTitle: 'State 3 - Diagnosed Session Failure',
        visualLines: ['Session restore failed', 'Reason: device trust mismatch', 'Action: re-verification path'],
        currentBoundary: 'Execution state boundary',
        failure: 'Trust-state mismatch',
        observable: 'Classified session boundary error',
      },
      {
        id: 'observable-result',
        label: 'Observable result',
        code: 'SessionBoundaryError:\nauth cookies valid\ndevice trust missing\nportal requires re-verification',
        detail: 'Restore failure is explicit and attributable.',
        visualTitle: 'Diagnosable Output',
        visualLines: ['auth cookies: valid', 'device trust: missing', 'portal requires re-verification'],
        currentBoundary: 'Session portability boundary',
        failure: 'Generic login failure removed',
        observable: 'Structured trust diagnosis',
      },
    ],
  },
  {
    id: 'proxyEnvironment',
    title: 'Healthcare Portal Access - Environment Boundary',
    goal: 'Access billing portal automation via cloud worker.',
    steps: [
      {
        id: 'naive-setup',
        label: 'Naive implementation',
        code: 'const browser = await chromium.launch({\n  proxy: process.env.PROXY\n})',
        detail: 'Environment is treated as static configuration.',
        visualTitle: 'State 1 - Initial Access',
        visualLines: ['Login page loads', 'Proxy configured', 'No environment diagnostics'],
        currentBoundary: 'Automation + proxy config',
        failure: 'Environment assumptions implicit',
        observable: 'Config only',
      },
      {
        id: 'hidden-assumption',
        label: 'Hidden assumption',
        code: '// assumes portal accepts any environment',
        detail: 'Assumes network identity does not affect trust.',
        visualTitle: 'Implicit Environment Assumption',
        visualLines: ['proxy accepted by code', 'trust accepted by default', 'no policy visibility'],
        currentBoundary: 'Implicit environment trust',
        failure: 'Policy mismatch hidden',
        observable: 'No trust diagnostics',
      },
      {
        id: 'failure-trigger',
        label: 'Failure trigger',
        code: 'portal blocks datacenter IPs\nrequires US residential network',
        detail: 'Portal policy rejects environment despite valid automation logic.',
        visualTitle: 'State 2 - Access Denied',
        visualLines: ['Access Denied', 'Unusual traffic detected', 'Verification triggered'],
        currentBoundary: 'Unmodeled environment policy',
        failure: 'Environment-specific login failure',
        observable: 'Challenge without diagnosis',
      },
      {
        id: 'alternate-success',
        label: 'Alternate environment',
        code: 'proxy_region = "New York"\nip_type = "residential"',
        detail: 'Environment change alters trust outcome.',
        visualTitle: 'State 3 - Accepted Environment',
        visualLines: ['Region: New York', 'IP type: residential', 'Login allowed'],
        currentBoundary: 'Environment-dependent acceptance',
        failure: 'Root cause still not explicit',
        observable: 'Outcome differs by environment',
      },
      {
        id: 'boundary-aware',
        label: 'Boundary-aware implementation',
        code: 'const env = await evaluateEnvironment({\n  proxyRegion,\n  ipType,\n  fingerprint,\n  target: "hospital-portal.com"\n})',
        detail: 'Environment is treated as explicit execution state.',
        visualTitle: 'Environment Diagnosis Panel',
        visualLines: ['Environment mismatch', 'Proxy type: datacenter', 'Required: residential US'],
        currentBoundary: 'Environment state boundary',
        failure: 'Mismatch explicitly classified',
        observable: 'Actionable environment diagnostics',
      },
      {
        id: 'observable-result',
        label: 'Observable result',
        code: 'EnvironmentBoundaryError:\ndatacenter IP blocked\nportal requires US residential access',
        detail: 'Boundary reports precise environment requirement.',
        visualTitle: 'Diagnosable Output',
        visualLines: ['reason: datacenter_ip_blocked', 'required: US residential', 'next: switch environment policy'],
        currentBoundary: 'Proxy/environment policy boundary',
        failure: 'Guesswork removed',
        observable: 'Environment-level failure class',
      },
    ],
  },
]

export function ReliabilityBoundaryPracticeViewer() {
  const [selectedExampleID, setSelectedExampleID] = useState<PracticeExampleID>('extraction')
  const [selectedStepByExample, setSelectedStepByExample] = useState<Record<PracticeExampleID, string>>({
    extraction: 'goal',
    sessionPortability: 'login-goal',
    proxyEnvironment: 'naive-setup',
  })

  const selectedExample = useMemo(
    () => PRACTICE_EXAMPLES.find((example) => example.id === selectedExampleID) ?? PRACTICE_EXAMPLES[0],
    [selectedExampleID],
  )

  const selectedStepID = selectedStepByExample[selectedExample.id]
  const selectedStep = selectedExample.steps.find((step) => step.id === selectedStepID) ?? selectedExample.steps[0]

  const updateStep = (stepID: string): void => {
    setSelectedStepByExample((prev) => ({
      ...prev,
      [selectedExample.id]: stepID,
    }))
  }

  return (
    <section className="space-y-5">
      <p className="text-[17px] leading-relaxed text-[#2a231c]">
        The examples below show how different classes of automation failure become easier or harder to diagnose depending on where the reliability boundary sits.
      </p>
      <p className="text-[15px] leading-relaxed text-[#5b4126]">
        The website did not simply add a third option. It expanded the decision space of the form. The boundary detects when the automation no longer understands the state it is about to submit.
      </p>

      <div className="flex flex-wrap gap-2">
        {PRACTICE_EXAMPLES.map((example) => {
          const isActive = example.id === selectedExample.id
          return (
            <button
              key={example.id}
              type="button"
              onClick={() => { setSelectedExampleID(example.id) }}
              className={`border px-3 py-1.5 text-[14px] transition-colors ${
                isActive
                  ? 'border-[#5b4126]/55 bg-[#f7ecd6] text-[#1f1912]'
                  : 'border-[#5b4126]/20 bg-white/40 text-[#2a231c] hover:bg-[#f8efd9]'
              }`}
            >
              {example.title}
            </button>
          )
        })}
      </div>

      <section className="border border-[#5b4126]/25 bg-[#fffdf8]/75 p-4 md:p-5 space-y-4">
        <header className="border-b border-[#5b4126]/20 pb-3">
          <h3 className="text-xl font-semibold text-[#1f1912]">{selectedExample.title}</h3>
          <p className="text-[15px] text-[#2a231c] mt-1">{selectedExample.goal}</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border border-[#5b4126]/20 bg-[#fffaf0]/70 p-4 min-h-[420px]">
            <p className="text-xs uppercase tracking-[0.12em] text-[#5b4126]/75 mb-3">Boundary Sequence</p>
            <div className="space-y-2">
              {selectedExample.steps.map((step, index) => {
                const isActive = step.id === selectedStep.id
                return (
                  <div key={step.id}>
                    <button
                      type="button"
                      onClick={() => { updateStep(step.id) }}
                      className={`w-full text-left border px-3 py-2.5 transition-colors ${
                        isActive
                          ? 'border-[#5b4126]/55 bg-[#f7ecd6] text-[#1f1912]'
                          : 'border-[#5b4126]/20 bg-white/40 text-[#2a231c] hover:bg-[#f8efd9]'
                      }`}
                    >
                      <p className="text-[13px] text-[#5b4126]/80 mb-1">{index + 1}. {step.label}</p>
                      {step.code ? (
                        <pre className="font-mono text-[12px] leading-relaxed whitespace-pre-wrap bg-white/40 border border-[#5b4126]/15 p-2 overflow-x-auto">
                          {step.code}
                        </pre>
                      ) : (
                        <p className="text-[14px] leading-relaxed">{step.detail}</p>
                      )}
                    </button>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="border border-[#5b4126]/20 bg-[#fffaf0]/70 p-4 min-h-[420px]">
            <p className="text-xs uppercase tracking-[0.12em] text-[#5b4126]/75 mb-3">Observed Portal</p>
            <div className="border border-[#5b4126]/25 bg-white/50 p-3 mb-3">
              <p className="text-[15px] font-semibold text-[#1f1912]">{selectedStep.visualTitle}</p>
            </div>
            <div className="space-y-3">
              {renderObservedState(selectedExample.id, selectedStep.id)}
              <ul className="space-y-2">
                {selectedStep.visualLines.map((line) => (
                  <li key={line} className="text-[14px] leading-relaxed text-[#2a231c]">
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="border border-[#5b4126]/20 bg-[#fffaf0]/70 p-4">
          <p className="text-xs uppercase tracking-[0.12em] text-[#5b4126]/75 mb-2">Current Readout</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-[14px] text-[#2a231c]">
            <div>
              <p className="font-semibold text-[#1f1912]">Current boundary</p>
              <p>{selectedStep.currentBoundary}</p>
            </div>
            <div>
              <p className="font-semibold text-[#1f1912]">What failed</p>
              <p>{selectedStep.failure}</p>
            </div>
            <div>
              <p className="font-semibold text-[#1f1912]">What becomes observable</p>
              <p>{selectedStep.observable}</p>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}

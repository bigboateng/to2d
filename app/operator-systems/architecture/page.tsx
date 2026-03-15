import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Operator Systems Architecture',
  description: 'Infrastructure in operator systems should remain subordinate to the operator loop rather than dictating how goals are expressed.',
}

export default function OperatorSystemsArchitecturePage() {
  const references = [
    { href: '/operator-systems', label: 'Operator Systems Overview' },
    { href: '/systems/browser-agents', label: 'Browser Agents' },
    { href: '/correctness/deterministic-boundaries', label: 'Deterministic Boundaries' },
  ]

  return (
    <div className="max-w-3xl space-y-14">
      <header className="space-y-4 border-b border-[#E8E8E6] pb-8">
        <p className="text-xs uppercase tracking-[0.2em] text-[#8C8C8C] font-mono">Operator Systems</p>
        <h1 className="text-3xl md:text-4xl font-light tracking-tight leading-tight text-[#1A1A1A]">Architecture</h1>
      </header>

      <section className="space-y-5">
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Infrastructure in operator systems serves a different purpose than in conventional software.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          In traditional applications, infrastructure is primarily designed to support scalability, service boundaries, and asynchronous communication between components.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          In operator systems, infrastructure exists to support the operator -> system -> environment loop.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          The goal is not to maximize architectural flexibility. The goal is to enable reliable progress toward the operator&apos;s goal in a dynamic environment.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-light text-[#1A1A1A]">The Role of Infrastructure</h2>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          The infrastructure layer is responsible for executing actions produced by the reasoning system and returning observable results.
        </p>
        <pre className="bg-[#FFFFFF] border border-[#DADADA] p-4 overflow-x-auto text-sm font-mono text-[#2A2A2A]">
{`Operator
-> Reasoning System
-> Infrastructure
-> Environment
-> Deterministic Boundary`}
        </pre>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          This layer typically includes:
        </p>
        <ul className="space-y-3 text-sm text-[#5A5A5A] list-disc ml-6">
          <li>automation runtimes</li>
          <li>task execution workers</li>
          <li>environment adapters</li>
          <li>tool interfaces</li>
          <li>communication channels</li>
          <li>state persistence</li>
        </ul>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          However, infrastructure should remain subordinate to the operator system.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          When infrastructure decisions begin to dictate how problems must be expressed, the architecture becomes inverted.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-light text-[#1A1A1A]">A Common Architectural Mistake</h2>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Many systems are built starting from infrastructure primitives:
        </p>
        <ul className="space-y-3 text-sm text-[#5A5A5A] list-disc ml-6">
          <li>webhooks</li>
          <li>message queues</li>
          <li>websocket streams</li>
          <li>event buses</li>
          <li>distributed workers</li>
        </ul>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          These patterns are useful for scaling deterministic services, but they can introduce unnecessary complexity when applied prematurely to operator systems.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          For example:
        </p>
        <pre className="bg-[#FFFFFF] border border-[#DADADA] p-4 overflow-x-auto text-sm font-mono text-[#2A2A2A]">
{`Operator goal
-> Agent action
-> Webhook triggered
-> Queue event
-> Worker picks up task
-> Environment interaction`}
        </pre>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          This may be appropriate in some contexts, but often it simply reflects conventional software architecture rather than the needs of the operator system.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          If the task can be executed directly within the control loop, introducing asynchronous infrastructure may only add latency and complexity.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-light text-[#1A1A1A]">Infrastructure Should Follow the Operator Loop</h2>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          A better approach is to derive infrastructure from the operator system itself.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          The core loop remains:
        </p>
        <pre className="bg-[#FFFFFF] border border-[#DADADA] p-4 overflow-x-auto text-sm font-mono text-[#2A2A2A]">
{`observe -> reason -> act`}
        </pre>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Infrastructure should support this loop rather than fragment it.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          For example:
        </p>
        <pre className="bg-[#FFFFFF] border border-[#DADADA] p-4 overflow-x-auto text-sm font-mono text-[#2A2A2A]">
{`Operator defines goal
-> System observes environment
-> Reasoning layer selects action
-> Infrastructure executes action
-> Environment responds
-> Boundary validates result`}
        </pre>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          The infrastructure layer should make this loop easier to run and scale, not harder to express.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-light text-[#1A1A1A]">When Infrastructure Becomes Necessary</h2>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          As operator systems scale, infrastructure becomes important in several areas:
        </p>
        <div className="space-y-5">
          <div className="space-y-2">
            <h3 className="text-base font-light text-[#1A1A1A]">Execution Isolation</h3>
            <p className="text-sm leading-relaxed text-[#5A5A5A]">
              Running actions in controlled environments:
            </p>
            <ul className="space-y-2 text-sm text-[#5A5A5A] list-disc ml-6">
              <li>sandboxed browsers</li>
              <li>containerized workers</li>
              <li>tool execution sandboxes</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-base font-light text-[#1A1A1A]">Environment Access</h3>
            <p className="text-sm leading-relaxed text-[#5A5A5A]">
              Providing stable interfaces to external systems:
            </p>
            <ul className="space-y-2 text-sm text-[#5A5A5A] list-disc ml-6">
              <li>browser automation adapters</li>
              <li>API connectors</li>
              <li>document processing tools</li>
              <li>system integrations</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-base font-light text-[#1A1A1A]">State Persistence</h3>
            <p className="text-sm leading-relaxed text-[#5A5A5A]">
              Maintaining system state across iterations:
            </p>
            <ul className="space-y-2 text-sm text-[#5A5A5A] list-disc ml-6">
              <li>execution history</li>
              <li>environment snapshots</li>
              <li>operator context</li>
              <li>intermediate artifacts</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-base font-light text-[#1A1A1A]">Observability</h3>
            <p className="text-sm leading-relaxed text-[#5A5A5A]">
              Understanding what the system is doing:
            </p>
            <ul className="space-y-2 text-sm text-[#5A5A5A] list-disc ml-6">
              <li>execution traces</li>
              <li>environment observations</li>
              <li>decision logs</li>
              <li>boundary validation results</li>
            </ul>
          </div>
        </div>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          These capabilities allow operator systems to operate reliably even as the environment changes.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-light text-[#1A1A1A]">Infrastructure Is Not the System</h2>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          A useful mental model is:
        </p>
        <pre className="bg-[#FFFFFF] border border-[#DADADA] p-4 overflow-x-auto text-sm font-mono text-[#2A2A2A]">
{`Infrastructure executes
Reasoning decides
Operator defines intent`}
        </pre>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          When infrastructure begins to encode business logic, the system becomes rigid.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          The more infrastructure dictates how tasks must be expressed, the more difficult it becomes for operators to represent new goals.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          This can unintentionally restrict system capability.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          In extreme cases, users cannot even express the problem they are trying to solve within the architecture.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-light text-[#1A1A1A]">Designing Infrastructure for Operator Systems</h2>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Good infrastructure for operator systems tends to share several characteristics:
        </p>
        <ul className="space-y-3 text-sm text-[#5A5A5A] list-disc ml-6">
          <li>minimal surface area</li>
          <li>flexible execution loops</li>
          <li>explicit boundaries</li>
          <li>observability</li>
          <li>environment awareness</li>
        </ul>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          The system should expose only the primitives necessary to interact with environments and execute actions, while supporting iterative reasoning rather than fixed workflows.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-light text-[#1A1A1A]">Example: Browser Automation Infrastructure</h2>
        <pre className="bg-[#FFFFFF] border border-[#DADADA] p-4 overflow-x-auto text-sm font-mono text-[#2A2A2A]">
{`Operator
-> Reasoning System
-> Automation Runtime
-> Website Environment
-> Deterministic Boundary`}
        </pre>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          The infrastructure layer might include:
        </p>
        <ul className="space-y-3 text-sm text-[#5A5A5A] list-disc ml-6">
          <li>browser session management</li>
          <li>page interaction APIs</li>
          <li>environment observation tools</li>
          <li>DOM extraction utilities</li>
          <li>execution sandboxes</li>
        </ul>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          But these exist to support the control loop, not replace it.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          The reasoning system still decides what actions to attempt.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          The deterministic boundary still decides what results are acceptable.
        </p>
      </section>

      <section className="space-y-5 border-t border-[#E8E8E6] pt-10">
        <h2 className="text-xl font-light text-[#1A1A1A]">Summary</h2>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Infrastructure in operator systems should remain subordinate to the operator loop.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          Its role is to execute actions, connect the system to external environments, maintain state, and provide observability.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          It should not dictate how operator goals are expressed or solved.
        </p>
        <p className="text-sm leading-relaxed text-[#5A5A5A]">
          When infrastructure is designed around the operator loop rather than around traditional architectural patterns, the system remains both flexible and reliable in dynamic environments.
        </p>
      </section>

      <section className="space-y-3 border-t border-[#E8E8E6] pt-8">
        <h2 className="text-lg font-light text-[#1A1A1A]">Related Sections</h2>
        <div className="space-y-3 pt-2">
          {references.map((reference) => (
            <a
              key={reference.href}
              href={reference.href}
              className="block border border-[#E8E8E6] p-4 hover:border-[#DADADA] transition-colors text-sm text-[#5A5A5A]"
            >
              {reference.label}
            </a>
          ))}
        </div>
      </section>
    </div>
  )
}

export default function OriginsPage() {
  return (
    <div className="space-y-12 max-w-3xl">
      <section>
        <h1 className="text-3xl font-thin tracking-tight mb-4">
          Origins (Before Automation)
        </h1>
        <p className="text-white/50 text-sm mb-8">
          2018 problem space
        </p>
      </section>

      <article className="prose prose-invert max-w-none">
        <div className="text-white/70 text-sm leading-relaxed space-y-6">
          <p>
            Before browser automation had tools or an industry, I spent more than two years trying to build it without realizing how deep the problem actually was.
          </p>
          
          <p>
            Our CEO scraped a set of bill-pay websites for manual processing. There was no automation plan, no infra, and nobody asked me to build anything. The company had just added a new feature that needed deeper research, and I wanted to be a good CTO. I skipped a trip and stayed back to see whether automation was even possible.
          </p>
          
          <p>
            I didn't know we had accidentally chosen the most complex category in consumer automation: bill pay.
          </p>
          
          <p>
            I knew nothing about fingerprints, bot-detection, device binding, behavioral-risk systems, or browser state.
          </p>
          
          <p>
            And this was long before LLMs — no copilots, no agents, no shortcuts.
          </p>
          
          <p>
            I was cracking everything with StackOverflow and whatever I could find online, not knowing the domain behind any of it.
          </p>
          
          <p>
            But the prototype worked.
          </p>
          
          <p>
            We built a dashboard where flows could be configured and run end-to-end.
          </p>
          
          <p>
            As the company grew — 30,000+ users and $4.2M raised — the pressure increased. When flows broke, I treated them like standard engineering issues even though the websites themselves were unstable. Customer bills still had to be paid, so I spent hours every day doing the broken steps manually. Support kept coming in. Every sprint required saying what would be fixed next. When something couldn't be fixed fast enough, I shipped product features while quietly investigating failures on the side.
          </p>
          
          <p>
            And I spent every additional off-hour I had mentally computing whether each fix would actually work.
          </p>
          
          <p>
            But I was only reasoning about the specific instance that broke — not knowing the same fix was silently breaking other flows I wasn't looking at yet.
          </p>
          
          <p>
            This went on for more than two years.
          </p>
          
          <p>
            During that time, I had what felt like a plan.
          </p>
          
          <p>
            Every new discovery felt exciting — even if it didn't work. We said "maybe a neural network can solve this," without knowing what that meant. Since ops could also find alternate paths, I thought fuzzy logic might help combine human findings with automation.
          </p>
          
          <p>
            But the truth was simple: we never made it past authentication.
          </p>
          
          <p>
            There wasn't enough time or headroom to uncover the deeper layers.
          </p>
          
          <p>
            Small stability signals stood out — like Netflix sessions lasting eight months. That was my first hint scripting wasn't the real issue. Stability lived in the environment, not the logic.
          </p>
          
          <h2 className="text-xl font-thin text-white/90 mt-8 mb-4">First major pivot — the card system</h2>
          
          <p>
            We introduced cards so users could pay their bills directly.
          </p>
          
          <p>
            I integrated the fraud-prevention system behind it, and once I understood how behavioral risk worked, it became obvious there was no chance we could've solved that layer during the early automation attempts.
          </p>
          
          <p>
            The card system reduced failures, but it also made my original work feel less visible.
          </p>
          
          <p>
            The card product absorbed broken flows — not my improvements.
          </p>
          
          <p>
            And the level of fraud, risk, and infrastructure work made the early automation system feel small in comparison.
          </p>
          
          <p>
            Not because it didn't matter — but because I finally understood the true size of the problem.
          </p>
          
          <p>
            It made my initial decision feel like the wrong CTO move, even though that first decision is what made automation possible in the first place.
          </p>
          
          <h2 className="text-xl font-thin text-white/90 mt-8 mb-4">Second major pivot — aggregators</h2>
          
          <p>
            After cards, we pivoted into a product that unified various financial aggregators.
          </p>
          
          <p>
            And this exposed one of the biggest insights:
          </p>
          
          <p>
            every aggregator had failures.
          </p>
          
          <p>
            Plaid, MX, Yodlee — every single endpoint broke.
          </p>
          
          <p>
            Teller was the outlier with reverse-engineered APIs, and although I didn't yet understand how that tied into automation, I kept the detail.
          </p>
          
          <p>
            Up to that point, I didn't even know:
          </p>
          
          <ul className="text-white/60 space-y-2 ml-6 list-disc">
            <li>companies had entire teams for automations</li>
            <li>Plaid had over a thousand employees</li>
            <li>Teller had multiple engineers</li>
            <li>automation wasn't a feature — it was a whole product category</li>
          </ul>
          
          <p>
            I didn't even consider what we were building as "automations," let alone one of the most complex types of automations, until much later.
          </p>
          
          <p>
            Realizing this was a shock.
          </p>
          
          <p>
            I had been trying to solve everything alone.
          </p>
          
          <h2 className="text-xl font-thin text-white/90 mt-8 mb-4">The turning point</h2>
          
          <p>
            Months after we abandoned my system, I found Browserless and finally met engineers doing real automation. Someone casually mentioned persistent browser sessions (userDataDir). That one sentence explained years of failure.
          </p>
          
          <p>
            The surprising part:
          </p>
          
          <p>
            I had already implemented userDataDir early on by intuition — I just didn't know why it mattered.
          </p>
          
          <p>
            Looking back, I wasn't failing as an engineer.
          </p>
          
          <p>
            I was trying to solve a problem nobody understood yet, with no tools, no references, no vocabulary, no industry — and a live product depending on it.
          </p>
          
          <p>
            Ironically, the only reason the company attempted automation was because my first prototype made it look possible.
          </p>
          
          <p>
            And the only reason that prototype existed is because I wanted to be a good CTO.
          </p>
          
          <p>
            Because of how much pain I went through, I shared everything I learned with the first automation companies I met — so nobody else would repeat the same mistakes.
          </p>
          
          <p>
            Those early years shaped everything I build today:
          </p>
          
          <ul className="text-white/60 space-y-2 ml-6 list-disc">
            <li>session-first automation infrastructure</li>
            <li>BrowserState</li>
            <li>architectures for real-world stability</li>
            <li>systems that avoid the break–fix cycle</li>
            <li>tools that don't rely on constant prompt rewriting</li>
          </ul>
          
          <p>
            And honestly, after all of it, I was just happy to be out.
          </p>
          
          <p>
            It gave me distance — and the clarity to build the foundations that never existed back then.
          </p>
        </div>
      </article>

      <section className="text-white/40 text-sm border-t border-white/10 pt-6">
        <a href="/automations" className="hover:text-white/60 transition-colors">
          ← Back to Automations
        </a>
      </section>
    </div>
  )
}


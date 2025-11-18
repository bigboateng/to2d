export default function ConsultingRealizingWhatIActuallyKnewPage() {
  return (
    <div className="space-y-12 max-w-3xl">
      <section>
        <h1 className="text-3xl font-thin tracking-tight mb-4">
          Consulting — Realizing What I Actually Knew
        </h1>
        <p className="text-white/50 text-sm mb-8">
          The knowledge economy of accumulated failure
        </p>
      </section>

      <article className="prose prose-invert max-w-none">
        <div className="text-white/70 text-sm leading-relaxed space-y-6">
          <p>
            After parting ways with Anon, I assumed authentication and browser agents were basically "solved."
          </p>
          
          <p>
            The industry narrative at the time was simple:
          </p>
          
          <ul className="text-white/60 space-y-2 ml-6 list-disc">
            <li>agents can handle anything</li>
            <li>authentication is a solved plugin</li>
            <li>and the pain from 2018–2021 was obsolete</li>
          </ul>
          
          <p>
            So I didn't plan on building anything new.
          </p>
          
          <p>
            I figured the ecosystem had finally caught up.
          </p>
          
          <p className="text-white/80 font-medium">
            But then I started consulting.
          </p>
          
          <p>
            Very quickly it became obvious:
          </p>
          
          <p className="text-white/60 italic">
            everyone was still running into the exact same problems I had survived years earlier — even with new tools, new LLMs, and browser agents.
          </p>
          
          <p>
            And something snapped into place.
          </p>
          
          <p>
            People didn't need my coding.
          </p>
          
          <p>
            They needed the knowledge I had been dragging around unknowingly:
          </p>
          
          <ul className="text-white/60 space-y-2 ml-6 list-disc">
            <li>how authentication actually fails in the wild</li>
            <li>how device state interacts with risk and fraud systems</li>
            <li>why "errors" are normal in automations, not bugs</li>
            <li>how bot detection reveals itself indirectly</li>
            <li>why some flows survive 8 months and others die instantly</li>
            <li>which signals truly matter for stability</li>
            <li>and the invisible constraints that silently break real products</li>
          </ul>
          
          <p>
            These weren't things you learn from docs or papers.
          </p>
          
          <p>
            They were things you learn by getting crushed by them for years.
          </p>
          
          <p>
            What surprised me was how often teams reacted with:
          </p>
          
          <ul className="text-white/60 space-y-2 ml-6 list-disc">
            <li>"How do you know that?"</li>
            <li>"We've been stuck for weeks."</li>
            <li>"Why isn't this documented anywhere?"</li>
            <li>"How did you see that from one screenshot?"</li>
          </ul>
          
          <p>
            It wasn't intuition — it was accumulated pattern-recognition from:
          </p>
          
          <ul className="text-white/60 space-y-2 ml-6 list-disc">
            <li>early startup chaos</li>
            <li>endless authentication failures</li>
            <li>state loss across devices</li>
            <li>rejected sessions</li>
            <li>thousands of manual recoveries</li>
            <li>and debugging flows long before the ecosystem had vocab for any of this</li>
          </ul>
          
          <p className="text-white/80 font-medium">
            Consulting made something painfully clear:
          </p>
          
          <p className="text-white/80 italic">
            My actual value wasn't the code — it was the domain.
          </p>
          
          <p>
            I understood the space structurally.
          </p>
          
          <p>
            I could see problems before they appeared.
          </p>
          
          <p>
            I could explain failure modes the industry hadn't defined yet.
          </p>
          
          <p>
            This is also when I joined Plyhealth.
          </p>
          
          <p>
            And seeing the same patterns again — at scale, in healthcare — confirmed that the industry was still missing the same foundational pieces:
          </p>
          
          <ul className="text-white/60 space-y-2 ml-6 list-disc">
            <li>proper state handling</li>
            <li>reliable identity across agents</li>
            <li>deterministic behavior in human-facing flows</li>
            <li>real abstractions around sessions, not scripts</li>
          </ul>
          
          <p>
            Plyhealth was the bridge between the early pain and the realization that the entire industry needed new infrastructure — not more retries or prompts.
          </p>
          
          <p className="text-white/80 font-medium">
            Only after that did BrowserState emerge.
          </p>
          
          <p>
            Not as a clever idea.
          </p>
          
          <p>
            Not as an abstraction.
          </p>
          
          <p>
            But as the direct consequence of everything I had seen:
          </p>
          
          <ul className="text-white/60 space-y-2 ml-6 list-disc">
            <li>authentication drift</li>
            <li>session decay</li>
            <li>bot detection heuristics</li>
            <li>the gap between agents and real-world systems</li>
            <li>and the missing "control layer" nobody had built yet</li>
          </ul>
          
          <p>
            Consulting was the moment I finally understood my own map of the automation landscape.
          </p>
          
          <p className="text-white/80 italic">
            BrowserState—and later To2D—weren't inventions.
          </p>
          
          <p className="text-white/80 italic">
            They were inevitabilities.
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


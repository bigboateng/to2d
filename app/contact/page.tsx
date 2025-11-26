export default function ContactPage() {
  return (
    <div className="space-y-12 max-w-3xl">
      <section>
        <h1 className="text-3xl font-thin tracking-tight mb-4">
          Contact
        </h1>
      </section>

      <section className="border border-white/10 p-8">
        <p className="text-white/60 text-sm mb-6">
          Encrypted email preferred.
        </p>
        <a 
          href="mailto:contact@example.com"
          className="text-white/80 hover:text-white transition-colors font-mono text-sm"
        >
          [email address]
        </a>
      </section>

      <section className="text-white/30 text-xs">
        <p>
          Replace with your actual contact method.
        </p>
      </section>
    </div>
  )
}






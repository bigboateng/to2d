export default function CoolStuffPage() {
  const items = [
    {
      label: "Laplace Transform",
      href: "https://en.wikipedia.org/wiki/Laplace_transform",
    },
    {
      label: "Laplace Transform – Khan Academy",
      href: "https://www.khanacademy.org/math/differential-equations/laplace-transform",
    },
    {
      label: "Brian Douglas",
      href: "https://www.youtube.com/@BrianBDouglas",
    },
    {
      label: "System Identification",
      href: "https://en.wikipedia.org/wiki/System_identification",
    },
    {
      label: "Fuzzy Logic",
      href: "https://en.wikipedia.org/wiki/Fuzzy_logic",
    },
    {
      label: "Zero Width",
      href: null,
    },
    {
      label: "State Space",
      href: "https://en.wikipedia.org/wiki/State-space_representation",
    },
    {
      label: "Asteroid Retrieval via Manifolds",
      href: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=hwTiAAsAAAAJ&citation_for_view=hwTiAAsAAAAJ:u-x6o8ySG0sC",
    },
    {
      label: "Enigma Bar Scene",
      href: null,
    },
    {
      label: "Transfer Functions",
      href: "https://en.wikipedia.org/wiki/Transfer_function",
    },
    {
      label: "PID as Intuition",
      href: null,
    },
    {
      label: "Lyapunov Stability",
      href: "https://en.wikipedia.org/wiki/Lyapunov_stability",
    },
    {
      label: "Nonlinear Control",
      href: "https://en.wikipedia.org/wiki/Nonlinear_control",
    },
    {
      label: "Model Predictive Control",
      href: "https://en.wikipedia.org/wiki/Model_predictive_control",
    },
  ]

  return (
    <div className="max-w-4xl mx-auto py-16">
      <div className="mb-16">
        <h1 className="text-3xl font-thin mb-2">Cool Stuff</h1>
        <p className="text-white/30 text-xs font-light">
          things that feed my control brain
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item, index) => (
          <div key={index}>
            {item.href ? (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block py-4 text-white/60 hover:text-white transition-colors font-light group"
              >
                <span className="text-sm">{item.label}</span>
                <span className="ml-2 text-white/20 group-hover:text-white/40 transition-colors text-xs">
                  →
                </span>
              </a>
            ) : (
              <div className="block py-4 text-white/30 font-light">
                <span className="text-sm">{item.label}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}


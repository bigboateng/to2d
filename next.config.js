/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
      {
        source: '/architecture/ai-reliability',
        destination: '/architecture/zero-context-architecture',
        permanent: true,
      },
      {
        source: '/control-systems',
        destination: '/research/control-systems',
        permanent: true,
      },
      {
        source: '/control-systems-ai',
        destination: '/research/control-systems-ai',
        permanent: true,
      },
      {
        source: '/ai-era/zero-context-architecture',
        destination: '/architecture/zero-context-architecture',
        permanent: true,
      },
      {
        source: '/ai-era/domain-extractors-and-problem-rewriting',
        destination: '/primitives/projection',
        permanent: true,
      },
      {
        source: '/ai-era/closed-loop-verification-architecture',
        destination: '/systems/structured-output-correctness',
        permanent: true,
      },
      {
        source: '/ai-era/failure-paths-and-correction-loops',
        destination: '/systems/reliability-loops',
        permanent: true,
      },
      {
        source: '/ai-era/operator-composition-pipelines-and-multi-step-graphs',
        destination: '/systems/agent-harness',
        permanent: true,
      },
      {
        source: '/ai-era/the-automation-primitive-domain-intelligence',
        destination: '/primitives/canonicalization',
        permanent: true,
      },
      {
        source: '/ai-era',
        destination: '/systems',
        permanent: true,
      },
      {
        source: '/automations',
        destination: '/systems/browser-agents',
        permanent: true,
      },
      {
        source: '/automations/:path*',
        destination: '/systems/browser-agents',
        permanent: true,
      },
      {
        source: '/pre-ai-research',
        destination: '/research',
        permanent: true,
      },
      {
        source: '/pre-ai-research/:path*',
        destination: '/research',
        permanent: true,
      },
      {
        source: '/correctness/determinism',
        destination: '/correctness/deterministic-boundaries',
        permanent: true,
      },
      {
        source: '/correctness/determinism/:path*',
        destination: '/correctness/deterministic-boundaries',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig




import { StateSpaceMissingInputBackground } from '@/components/StateSpaceMissingInputBackground'

export default function TestMissingInputPage() {
  return (
    <>
      <StateSpaceMissingInputBackground 
        density={1.5}
        speed={2}
        opacityFactor={0.5}
      />
      <div className="min-h-screen flex items-center justify-center relative" style={{ zIndex: 1 }}>
        <div className="text-center max-w-2xl">
          <h1 className="text-4xl font-thin mb-8">State Space Missing Input Background</h1>
          <div className="text-white/60 space-y-4 text-sm font-mono">
            <p>ẋ = Ax + Bu</p>
            <p>u = ?</p>
            <div className="mt-8 text-white/40 text-xs">
              <p>Watch the small particles move along faint trajectories.</p>
              <p>Every few seconds, they receive a random "kick" (missing input).</p>
              <p>The perturbations gradually decay back to the path.</p>
              <p className="mt-4 text-white/30">(This demo uses higher visibility for testing: density=1.5, opacityFactor=0.15)</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


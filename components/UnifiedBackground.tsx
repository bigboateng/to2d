'use client'

import { AeroManifoldBackground } from './AeroManifoldBackground'
import { StateSpaceMissingInputBackground } from './StateSpaceMissingInputBackground'
import { ControlSystemsBackground } from './ControlSystemsBackground'

interface UnifiedBackgroundProps {
  density?: number
  speed?: number
  opacityFactor?: number
}

export function UnifiedBackground({
  density = 1,
  speed = 1,
  opacityFactor = 0.04,
}: UnifiedBackgroundProps) {
  return (
    <>
      <AeroManifoldBackground 
        density={density} 
        opacityFactor={opacityFactor * 0.8} 
        curveSpeed={speed * 0.8} 
      />
      <StateSpaceMissingInputBackground 
        density={density * 0.6} 
        speed={speed} 
        opacityFactor={opacityFactor * 1.2} 
      />
      <ControlSystemsBackground 
        density={density * 0.5} 
        speed={speed * 0.6} 
        opacity={opacityFactor * 3} 
        variant="full"
      />
    </>
  )
}


'use client'

import { useEffect, useRef, useState } from 'react'

interface To2DStructureBackgroundProps {
  density?: number
  driftSpeed?: number
  opacity?: number
}

interface HorizontalLine {
  id: number
  y: number
  xOffset: number
  driftAmount: number
  driftSpeed: number
  driftDirection: number
  opacity: number
  targetOpacity: number
  opacitySpeed: number
  segments: number
}

interface VerticalConnector {
  id: number
  x: number
  y1: number
  y2: number
  yOffset: number
  driftAmount: number
  driftSpeed: number
  driftDirection: number
  opacity: number
  targetOpacity: number
  opacitySpeed: number
}

export function To2DStructureBackground({
  density = 1,
  driftSpeed = 1,
  opacity = 0.04,
}: To2DStructureBackgroundProps) {
  const svgRef = useRef<SVGSVGElement>(null)
  const horizontalLinesRef = useRef<HorizontalLine[]>([])
  const verticalConnectorsRef = useRef<VerticalConnector[]>([])
  const animationRef = useRef<number>()
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const scrollYRef = useRef(0)

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    updateDimensions()
    window.addEventListener('resize', updateDimensions)

    const handleScroll = () => {
      scrollYRef.current = window.scrollY
    }
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('resize', updateDimensions)
      window.removeEventListener('scroll', handleScroll)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (dimensions.width === 0 || dimensions.height === 0) return

    const baseLineCount = Math.floor(8 * density)
    const lineSpacing = dimensions.height / (baseLineCount + 1)
    
    horizontalLinesRef.current = []
    for (let i = 0; i < baseLineCount; i++) {
      const irregularOffset = (Math.random() - 0.5) * lineSpacing * 0.4
      const y = lineSpacing * (i + 1) + irregularOffset
      
      horizontalLinesRef.current.push({
        id: i,
        y,
        xOffset: 0,
        driftAmount: (5 + Math.random() * 25) * driftSpeed,
        driftSpeed: (0.00005 + Math.random() * 0.00015) * driftSpeed,
        driftDirection: Math.random() > 0.5 ? 1 : -1,
        opacity: opacity * (0.5 + Math.random() * 0.5),
        targetOpacity: opacity * (0.5 + Math.random() * 0.5),
        opacitySpeed: 0.00005 + Math.random() * 0.00015,
        segments: 3 + Math.floor(Math.random() * 4),
      })
    }

    verticalConnectorsRef.current = []
    const connectorCount = Math.floor(baseLineCount * 1.5 * density)
    
    for (let i = 0; i < connectorCount; i++) {
      const line1Index = Math.floor(Math.random() * (baseLineCount - 1))
      const line2Index = line1Index + 1
      
      const line1 = horizontalLinesRef.current[line1Index]
      const line2 = horizontalLinesRef.current[line2Index]
      
      if (line1 && line2) {
        const xPosition = Math.random() * dimensions.width
        const horizontalOffset = (Math.random() - 0.5) * 40
        
        verticalConnectorsRef.current.push({
          id: i,
          x: xPosition + horizontalOffset,
          y1: line1.y,
          y2: line2.y,
          yOffset: 0,
          driftAmount: 1 + Math.random() * 2,
          driftSpeed: (0.00003 + Math.random() * 0.00007) * driftSpeed,
          driftDirection: Math.random() > 0.5 ? 1 : -1,
          opacity: opacity * (0.4 + Math.random() * 0.6),
          targetOpacity: opacity * (0.4 + Math.random() * 0.6),
          opacitySpeed: 0.00005 + Math.random() * 0.00015,
        })
      }
    }

    const animate = () => {
      horizontalLinesRef.current.forEach((line) => {
        line.xOffset += line.driftSpeed * line.driftDirection
        
        if (Math.abs(line.xOffset) > line.driftAmount) {
          line.driftDirection *= -1
        }

        const opacityDiff = line.targetOpacity - line.opacity
        if (Math.abs(opacityDiff) < 0.001) {
          line.targetOpacity = opacity * (0.5 + Math.random() * 1.0)
        } else {
          line.opacity += opacityDiff * line.opacitySpeed
        }
      })

      verticalConnectorsRef.current.forEach((connector) => {
        connector.yOffset += connector.driftSpeed * connector.driftDirection
        
        if (Math.abs(connector.yOffset) > connector.driftAmount) {
          connector.driftDirection *= -1
        }

        const opacityDiff = connector.targetOpacity - connector.opacity
        if (Math.abs(opacityDiff) < 0.001) {
          connector.targetOpacity = opacity * (0.4 + Math.random() * 1.2)
        } else {
          connector.opacity += opacityDiff * connector.opacitySpeed
        }
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [dimensions, density, driftSpeed, opacity])

  if (dimensions.width === 0) {
    return null
  }

  const parallaxFactor = 0.3

  return (
    <svg
      ref={svgRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
      width={dimensions.width}
      height={dimensions.height}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform={`translate(0, ${scrollYRef.current * parallaxFactor})`}>
        {horizontalLinesRef.current.map((line) => {
          const segmentWidth = dimensions.width / line.segments
          const segments = []
          
          for (let i = 0; i < line.segments; i++) {
            const startX = i * segmentWidth
            const endX = startX + segmentWidth * (0.7 + Math.random() * 0.25)
            const gap = (Math.random() * 0.05 + 0.02) * segmentWidth
            
            segments.push(
              <line
                key={`${line.id}-${i}`}
                x1={startX + line.xOffset + gap}
                y1={line.y}
                x2={Math.min(endX + line.xOffset, (i + 1) * segmentWidth - gap)}
                y2={line.y}
                stroke="white"
                strokeWidth={0.5 + Math.random() * 0.5}
                opacity={line.opacity}
                strokeLinecap="round"
              />
            )
          }
          
          return segments
        })}

        {verticalConnectorsRef.current.map((connector) => (
          <line
            key={connector.id}
            x1={connector.x}
            y1={connector.y1 + connector.yOffset}
            x2={connector.x}
            y2={connector.y2 + connector.yOffset}
            stroke="white"
            strokeWidth={0.5}
            opacity={connector.opacity}
            strokeLinecap="round"
          />
        ))}
      </g>
    </svg>
  )
}






import { useEffect, useState } from "react"
import { Particles } from "./particles"

export function ParticlesBackground() {
  const [color, setColor] = useState("#ffffff")

  useEffect(() => {
    const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
    setColor(isDarkMode ? "#ffffff" : "#000000")
  }, [])

  return (
    <Particles
      className="opacity-70"
      quantity={300}
      staticity={5}
      ease={10}
      size={0.5}
      color={color}
      refresh
    />
  )
} 
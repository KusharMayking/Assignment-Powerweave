import { useEffect, useState } from 'react'

const AUTOPLAY_MS = 6000

export function useHeroSlider(slideCount: number) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  const go = (next: number) => setIndex((next + slideCount) % slideCount)

  // autoplay - paused on hover/focus, off completely for reduced motion
  useEffect(() => {
    if (paused) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = window.setInterval(() => setIndex((i) => (i + 1) % slideCount), AUTOPLAY_MS)
    return () => window.clearInterval(id)
  }, [paused, slideCount])

  return { index, setPaused, go }
}

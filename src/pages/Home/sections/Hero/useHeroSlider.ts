import { useEffect, useState } from 'react'

const AUTOPLAY_MS = 6000

export function useHeroSlider(slideCount: number) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  // Wrap around when moving past the first or last slide.
  const go = (next: number) => setIndex((next + slideCount) % slideCount)

  // Pause during interaction and skip autoplay when reduced motion is requested.
  useEffect(() => {
    if (paused) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = window.setInterval(() => setIndex((i) => (i + 1) % slideCount), AUTOPLAY_MS)
    return () => window.clearInterval(id)
  }, [paused, slideCount])

  return { index, setPaused, go }
}

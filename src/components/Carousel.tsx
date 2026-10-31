import { useEffect, useRef, useState, type ReactNode } from 'react'
import { ArrowLeftIcon, ArrowRightIcon } from './Icons'
import './Carousel.css'

interface CarouselProps {
  label: string
  className?: string // carousel--3 / carousel--4 sets cards per view
  children: ReactNode // <li className="carousel__item"> items
}

// Native scroll-snap track with prev/next buttons. Touch and trackpad
// scrolling just work, the buttons only nudge scrollLeft by one card.
export default function Carousel({ label, className = '', children }: CarouselProps) {
  const trackRef = useRef<HTMLUListElement>(null)
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const update = () => {
      setAtStart(track.scrollLeft <= 1)
      setAtEnd(track.scrollLeft + track.clientWidth >= track.scrollWidth - 1)
    }
    update()
    track.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      track.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  const scrollByCard = (dir: 1 | -1) => {
    const track = trackRef.current
    if (!track) return
    const card = track.firstElementChild as HTMLElement | null
    const gap = parseFloat(getComputedStyle(track).columnGap || '0')
    const step = card ? card.offsetWidth + gap : track.clientWidth
    track.scrollBy({ left: step * dir, behavior: 'smooth' })
  }

  return (
    <>
      <ul className={`carousel ${className}`} ref={trackRef} aria-label={label}>
        {children}
      </ul>
      <div className="slider-nav">
        <button type="button" className="arrow-btn" onClick={() => scrollByCard(-1)} disabled={atStart} aria-label="Previous">
          <ArrowLeftIcon />
        </button>
        <button type="button" className="arrow-btn" onClick={() => scrollByCard(1)} disabled={atEnd} aria-label="Next">
          <ArrowRightIcon />
        </button>
      </div>
    </>
  )
}

import { useEffect, useRef, useState, type ReactNode } from 'react'
import { ArrowLeftIcon, ArrowRightIcon } from '@/assets/icons/Icons'
import { classNames } from '@/utils/classNames'
import ArrowButton from '../ArrowButton/ArrowButton'
import styles from './Carousel.module.css'

interface CarouselProps {
  label: string
  itemsPerView: 3 | 4
  children: ReactNode
}

// Keep native touch scrolling and move one card at a time with the arrow buttons.
export default function Carousel({ label, itemsPerView, children }: CarouselProps) {
  const trackRef = useRef<HTMLUListElement>(null)
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const update = () => {
      // Allow a pixel of rounding error when checking the ends of the track.
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
      <ul className={classNames(styles.carousel, styles[`carousel--${itemsPerView}`])} ref={trackRef} aria-label={label}>
        {children}
      </ul>
      <div className={styles['slider-nav']}>
        <ArrowButton onClick={() => scrollByCard(-1)} disabled={atStart} aria-label="Previous">
          <ArrowLeftIcon />
        </ArrowButton>
        <ArrowButton onClick={() => scrollByCard(1)} disabled={atEnd} aria-label="Next">
          <ArrowRightIcon />
        </ArrowButton>
      </div>
    </>
  )
}

export function CarouselItem({ children }: { children: ReactNode }) {
  return <li className={styles.carousel__item}>{children}</li>
}

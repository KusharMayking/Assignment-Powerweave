import { useEffect, useState } from 'react'
import { ArrowLeftIcon, ArrowRightIcon } from './Icons'
import '../styles/components/Hero.css'

const SLIDES = [
  {
    title: "Men's Bags",
    subtitle: '2025 Collection',
    image: 'https://images.unsplash.com/photo-1547949003-9792a18a2601?w=1600&q=70&auto=format&fit=crop',
    alt: 'Backpack on a rock',
  },
  {
    title: 'Outdoor Packs',
    subtitle: 'Built for the trail',
    image: 'https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?w=1600&q=70&auto=format&fit=crop',
    alt: 'Canvas backpack held over a valley',
  },
  {
    title: 'Leather Classics',
    subtitle: 'Timeless everyday carry',
    image: 'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=1600&q=70&auto=format&fit=crop',
    alt: 'Brown leather backpack',
  },
  {
    title: 'Urban Carry',
    subtitle: 'Everyday essentials, sorted',
    image: 'https://images.unsplash.com/photo-1581605405669-fcdf81165afa?w=1600&q=70&auto=format&fit=crop',
    alt: 'Black leather backpack',
  },
]

const AUTOPLAY_MS = 6000

export default function Hero() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  const go = (next: number) => setIndex((next + SLIDES.length) % SLIDES.length)

  // autoplay - paused on hover/focus, off completely for reduced motion
  useEffect(() => {
    if (paused) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = window.setInterval(() => setIndex((i) => (i + 1) % SLIDES.length), AUTOPLAY_MS)
    return () => window.clearInterval(id)
  }, [paused])

  return (
    <section
      className="hero"
      aria-roledescription="carousel"
      aria-label="Featured collections"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {SLIDES.map((slide, i) => {
        const active = i === index
        return (
          <div
            key={slide.title}
            className={`hero__slide ${active ? 'hero__slide--active' : ''}`}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${SLIDES.length}`}
            aria-hidden={!active}
          >
            {/* first slide is above the fold so load it eagerly, lazy for the rest */}
            <img
              className="hero__img"
              src={slide.image}
              alt={slide.alt}
              width="1600"
              height="900"
              fetchPriority={i === 0 ? 'high' : undefined}
              loading={i === 0 ? undefined : 'lazy'}
            />
            <div className="container hero__content">
              {i === 0 ? (
                <h1 className="hero__title">{slide.title}</h1>
              ) : (
                <p className="hero__title">{slide.title}</p>
              )}
              <p className="hero__subtitle">{slide.subtitle}</p>
              <a href="#products" className="btn" tabIndex={active ? 0 : -1}>Shop Now</a>
            </div>
          </div>
        )
      })}

      <button type="button" className="arrow-btn hero__arrow hero__arrow--prev" onClick={() => go(index - 1)} aria-label="Previous slide">
        <ArrowLeftIcon />
      </button>
      <button type="button" className="arrow-btn hero__arrow hero__arrow--next" onClick={() => go(index + 1)} aria-label="Next slide">
        <ArrowRightIcon />
      </button>

      <div className="dots hero__dots" role="tablist" aria-label="Choose slide">
        {SLIDES.map((slide, i) => (
          <button
            key={slide.title}
            type="button"
            role="tab"
            className={`dot dot--light ${i === index ? 'dot--active' : ''}`}
            aria-selected={i === index}
            aria-label={`Slide ${i + 1} of ${SLIDES.length}`}
            onClick={() => go(i)}
          />
        ))}
      </div>
    </section>
  )
}

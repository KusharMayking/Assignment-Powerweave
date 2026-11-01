import { ArrowLeftIcon, ArrowRightIcon } from '@/assets/icons/Icons'
import { ButtonLink } from '@/components/common/Button/Button'
import { classNames } from '@/utils/classNames'
import ArrowButton from '@/components/common/ArrowButton/ArrowButton'
import Container from '@/components/common/Container/Container'
import { SLIDES } from './data'
import { useHeroSlider } from './useHeroSlider'
import styles from './Hero.module.css'

export default function Hero() {
  const { index, setPaused, go } = useHeroSlider(SLIDES.length)
  const currentSlide = SLIDES[index]

  return (
    <section
      className={styles.hero}
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
            className={classNames(styles.hero__slide, active ? styles['hero__slide--active'] : '')}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${SLIDES.length}`}
            aria-hidden={!active}
          >
            {/* Prioritize the first image; later slides can load lazily. */}
            <img
              className={styles.hero__img}
              src={slide.image}
              alt={slide.alt}
              width="1600"
              height="900"
              fetchPriority={i === 0 ? 'high' : undefined}
              loading={i === 0 ? undefined : 'lazy'}
            />
          </div>
        )
      })}

      <ArrowButton className={classNames(styles.hero__arrow, styles['hero__arrow--prev'])} onClick={() => go(index - 1)} aria-label="Previous slide">
        <ArrowLeftIcon />
      </ArrowButton>
      <ArrowButton className={classNames(styles.hero__arrow, styles['hero__arrow--next'])} onClick={() => go(index + 1)} aria-label="Next slide">
        <ArrowRightIcon />
      </ArrowButton>

      <div className={styles.hero__body}>
        <Container className={styles.hero__content}>
          <h1 className={styles.hero__title}>{currentSlide.title}</h1>
          <p className={styles.hero__subtitle}>{currentSlide.subtitle}</p>
          <ButtonLink href="#products">Shop Now</ButtonLink>

          <div className={classNames(styles.dots, styles.hero__dots)} role="tablist" aria-label="Choose slide">
            {SLIDES.map((slide, i) => (
              <button
                key={slide.title}
                type="button"
                role="tab"
                className={classNames(styles.dot, styles['dot--light'], i === index ? styles['dot--active'] : '')}
                aria-selected={i === index}
                aria-label={`Slide ${i + 1} of ${SLIDES.length}`}
                onClick={() => go(i)}
              />
            ))}
          </div>
        </Container>
      </div>
    </section>
  )
}

import Container from '@/components/common/Container/Container'
import SectionHeading from '@/components/common/SectionHeading/SectionHeading'
import { classNames } from '@/utils/classNames'
import { TESTIMONIAL } from './data'
import styles from './Testimonials.module.css'

export default function Testimonials() {
  return (
    <section className={styles.section} aria-labelledby="testimonials-title">
      <Container>
        <SectionHeading id="testimonials-title" className={styles.heading}>Testimonials</SectionHeading>

        <div className={styles.quoteMark} aria-hidden="true">
          <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinejoin="round">
            <path d="M19 6c-6 7-10 16-10 23 0 7 3 11 8 11 4 0 7-3 7-8 0-5-3-8-8-8 0-6 1-12 3-18Z" />
            <path d="M38 6c-6 7-10 16-10 23 0 7 3 11 8 11 4 0 7-3 7-8 0-5-3-8-8-8 0-6 1-12 3-18Z" />
          </svg>
        </div>

        <figure className={styles.testimonial}>
          <blockquote className={styles.quote}>
            <p>{TESTIMONIAL.quote}</p>
          </blockquote>
          <figcaption className={styles.author}>{TESTIMONIAL.author}</figcaption>
        </figure>

        {/* Only one review is available, so these dots are decorative. */}
        <div className={styles.pagination} aria-hidden="true">
          {Array.from({ length: 5 }, (_, index) => (
            <span key={index} className={classNames(styles.dot, index === 1 && styles.activeDot)} />
          ))}
        </div>
      </Container>
    </section>
  )
}

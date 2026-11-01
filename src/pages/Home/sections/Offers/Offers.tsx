import Carousel, { CarouselItem } from '@/components/common/Carousel/Carousel'
import Container from '@/components/common/Container/Container'
import SectionHeading from '@/components/common/SectionHeading/SectionHeading'
import { OFFERS } from './data'
import styles from './Offers.module.css'

export default function Offers() {
  return (
    <section className="section" aria-labelledby="offers-title">
      <Container>
        <SectionHeading id="offers-title">Offers</SectionHeading>
        <Carousel label="Current offers" itemsPerView={3}>
          {OFFERS.map(({ title, text, image, alt, badge }) => (
            <CarouselItem key={title}>
              <a href="#" className={styles.offer__link}>
                <img className={styles.offer__img} src={image} alt={alt} loading="lazy" width="900" height="600" />
                <span className={styles.offer__caption}>
                  <span className={styles.offer__title}>{title}</span>
                  <span className={styles.offer__text}>{text}</span>
                </span>
                {badge && <span className={styles.offer__badge}>{badge}</span>}
              </a>
            </CarouselItem>
          ))}
        </Carousel>
      </Container>
    </section>
  )
}

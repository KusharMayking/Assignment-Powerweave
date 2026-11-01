import Carousel, { CarouselItem } from '@/components/common/Carousel/Carousel'
import Container from '@/components/common/Container/Container'
import SectionHeading from '@/components/common/SectionHeading/SectionHeading'
import { CATEGORIES } from './data'
import styles from './Categories.module.css'

export default function Categories() {
  return (
    <section className="section" aria-labelledby="categories-title">
      <Container>
        <SectionHeading id="categories-title">Top Categories</SectionHeading>
        <Carousel label="Top categories" itemsPerView={4}>
          {CATEGORIES.map(({ name, image, alt }) => (
            <CarouselItem key={name}>
              <a href="#" className={styles.category}>
                <img className={styles.category__img} src={image} alt={alt} loading="lazy" width="600" height="400" />
                <span className={styles.category__label}>{name}</span>
              </a>
            </CarouselItem>
          ))}
        </Carousel>
      </Container>
    </section>
  )
}

import { ButtonLink } from '@/components/common/Button/Button'
import Container from '@/components/common/Container/Container'
import SectionHeading from '@/components/common/SectionHeading/SectionHeading'
import { useProducts } from '../hooks/useProducts'
import ProductCard from './ProductCard'
import SkeletonCard from './SkeletonCard'
import styles from '../Products.module.css'

export default function Products() {
  const { products, status } = useProducts()

  return (
    <section id="products" className="section section--alt" aria-labelledby="products-title">
      <Container>
        <SectionHeading id="products-title">Featured Products</SectionHeading>

        {status === 'error' && <p role="alert">Sorry, products could not be loaded.</p>}

        <div className={styles.products} aria-busy={status === 'loading'}>
          {status === 'loading'
            ? Array.from({ length: 8 }, (_, i) => <SkeletonCard key={i} />)
            : products.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>

        <div className={styles.products__footer}>
          <ButtonLink href="#">View All</ButtonLink>
        </div>
      </Container>
    </section>
  )
}

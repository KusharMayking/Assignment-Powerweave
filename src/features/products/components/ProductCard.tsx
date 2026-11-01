import { formatCurrency } from '@/utils/formatCurrency'
import type { Product } from '../types/product'
import styles from '../Products.module.css'

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className={styles.card}>
      <a href="#" className={styles.card__media} aria-label={product.name}>
        {product.badge && <span className={styles.card__badge}>{product.badge}</span>}
        <img
          className={styles.card__img}
          src={product.image}
          alt={product.name}
          loading="lazy"
          width="600"
          height="600"
        />
      </a>
      <div className={styles.card__body}>
        <p className={styles.card__sku}>{product.sku}</p>
        <h3 className={styles.card__name}>
          <a href="#">{product.name}</a>
        </h3>
        <p className={styles.card__price}>
          As low as <strong>{formatCurrency(product.price)}</strong>
        </p>
      </div>
    </article>
  )
}

import { useEffect, useState } from 'react'
import './Products.css'

export interface Product {
  id: number
  sku: string
  name: string
  price: number
  image: string
  badge: string | null
}

// TODO: swap for a real fetch() once the products API exists.
// Dynamic import keeps the JSON in its own chunk so it loads on demand,
// the timeout is just there so the skeleton state is visible.
async function fetchProducts(): Promise<Product[]> {
  const mod = await import('../data/products.json')
  await new Promise((r) => setTimeout(r, 400))
  return mod.default
}

const formatPrice = (value: number) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value)

function ProductCard({ product }: { product: Product }) {
  return (
    <article className="card">
      <a href="#" className="card__media" aria-label={product.name}>
        {product.badge && <span className="card__badge">{product.badge}</span>}
        <img
          className="card__img"
          src={product.image}
          alt={product.name}
          loading="lazy"
          width="600"
          height="600"
        />
      </a>
      <div className="card__body">
        <p className="card__sku">{product.sku}</p>
        <h3 className="card__name">
          <a href="#">{product.name}</a>
        </h3>
        <p className="card__price">
          As low as <strong>{formatPrice(product.price)}</strong>
        </p>
      </div>
    </article>
  )
}

function SkeletonCard() {
  return <div className="card card--skeleton" aria-hidden="true" />
}

export default function Products() {
  const [products, setProducts] = useState<Product[]>([])
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading')

  useEffect(() => {
    fetchProducts()
      .then((data) => {
        setProducts(data)
        setStatus('ready')
      })
      .catch(() => setStatus('error'))
  }, [])

  return (
    <section id="products" className="section section--alt" aria-labelledby="products-title">
      <div className="container">
        <h2 id="products-title" className="section__title">Featured Products</h2>

        {status === 'error' && <p role="alert">Sorry, products could not be loaded.</p>}

        <div className="products" aria-busy={status === 'loading'}>
          {status === 'loading'
            ? Array.from({ length: 8 }, (_, i) => <SkeletonCard key={i} />)
            : products.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>

        <div className="products__footer">
          <a href="#" className="btn">View All</a>
        </div>
      </div>
    </section>
  )
}

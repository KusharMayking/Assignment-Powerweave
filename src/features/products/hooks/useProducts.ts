import { useEffect, useState } from 'react'
import { fetchProducts } from '../services/productService'
import type { Product } from '../types/product'

type ProductStatus = 'loading' | 'ready' | 'error'

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([])
  const [status, setStatus] = useState<ProductStatus>('loading')

  useEffect(() => {
    let active = true
    fetchProducts()
      .then((data) => {
        if (!active) return
        setProducts(data)
        setStatus('ready')
      })
      .catch(() => { if (active) setStatus('error') })
    return () => { active = false }
  }, [])

  return { products, status }
}

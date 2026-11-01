import type { Product } from '../types/product'

// Load local data in a separate chunk until a products API is available.
export async function fetchProducts(): Promise<Product[]> {
  const mod = await import('../data/products.json')
  // The demo delay makes the loading placeholders visible.
  await new Promise((r) => setTimeout(r, 400))
  return mod.default
}

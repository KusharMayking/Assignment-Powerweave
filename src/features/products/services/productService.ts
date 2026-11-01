import type { Product } from '../types/product'

// TODO: swap for a real fetch() once the products API exists.
// Dynamic import keeps the JSON in its own chunk so it loads on demand,
// the timeout is just there so the skeleton state is visible.
export async function fetchProducts(): Promise<Product[]> {
  const mod = await import('../data/products.json')
  await new Promise((r) => setTimeout(r, 400))
  return mod.default
}

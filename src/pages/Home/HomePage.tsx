import { Products } from '@/features/products'
import Categories from './sections/Categories/Categories'
import Hero from './sections/Hero/Hero'
import Offers from './sections/Offers/Offers'
import Testimonials from './sections/Testimonials/Testimonials'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Categories />
      <Products />
      <Offers />
      <Testimonials />
    </>
  )
}

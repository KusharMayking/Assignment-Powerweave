import Header from './components/Header'
import Hero from './components/Hero'
import Categories from './components/Categories'
import Products from './components/Products'
import Offers from './components/Offers'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Categories />
        <Products />
        <Offers />
      </main>
      <Footer />
    </>
  )
}

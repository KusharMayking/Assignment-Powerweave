import Carousel from './Carousel'
import './Offers.css'

const OFFERS = [
  {
    title: 'Travel Backpacks',
    text: 'Ready for the long weekend',
    image: 'https://images.unsplash.com/photo-1575844264771-892081089af5?w=900&q=70&auto=format&fit=crop',
    alt: 'Hiking backpack by a tree',
    badge: null,
  },
  {
    title: 'Exclusive Collection',
    text: "Don't miss the last opportunity",
    image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=900&q=70&auto=format&fit=crop',
    alt: 'Tan leather handbag',
    badge: '50% OFF',
  },
  {
    title: 'Desk & Tech',
    text: 'Keep your setup cool',
    image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=900&q=70&auto=format&fit=crop',
    alt: 'PC cooling fans',
    badge: null,
  },
  {
    title: 'Leather Handbags',
    text: 'New colours for the season',
    image: 'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=900&q=70&auto=format&fit=crop',
    alt: 'Teal leather handbag',
    badge: null,
  },
  {
    title: 'Wireless Audio',
    text: 'Earbuds from $29',
    image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=900&q=70&auto=format&fit=crop',
    alt: 'Wireless earbuds in case',
    badge: 'New',
  },
]

export default function Offers() {
  return (
    <section className="section" aria-labelledby="offers-title">
      <div className="container">
        <h2 id="offers-title" className="section__title">Offers</h2>
        <Carousel label="Current offers" className="carousel--3">
          {OFFERS.map(({ title, text, image, alt, badge }) => (
            <li key={title} className="carousel__item">
              <a href="#" className="offer__link">
                <img className="offer__img" src={image} alt={alt} loading="lazy" width="900" height="600" />
                <span className="offer__caption">
                  <span className="offer__title">{title}</span>
                  <span className="offer__text">{text}</span>
                </span>
                {badge && <span className="offer__badge">{badge}</span>}
              </a>
            </li>
          ))}
        </Carousel>
      </div>
    </section>
  )
}

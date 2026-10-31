import NewsletterForm from './NewsletterForm'
import { FacebookIcon, InstagramIcon, LinkedinIcon, XIcon } from './Icons'
import '../styles/components/Footer.css'

const LINK_GROUPS = [
  { title: 'Categories', links: ['Apparel', 'Bags', 'Drinkware', 'Lanyards', 'Office', 'Tech', 'Gifts', 'Tradeshow'] },
  { title: 'Services', links: ['24-hour Rush', 'Decoration', 'Sourcing and Custom Pack', 'eMade Specials', 'Press Schedules', 'Special Pricing Process'] },
  { title: 'Tools', links: ['Check Inventory', 'Order Status/Tracking', 'Virtual Samples', 'Customize', 'Future Project List', 'Compare Items', 'Submit Artwork', 'Presentation'] },
]

const SOCIAL = [
  { name: 'Facebook', Icon: FacebookIcon },
  { name: 'X', Icon: XIcon },
  { name: 'LinkedIn', Icon: LinkedinIcon },
  { name: 'Instagram', Icon: InstagramIcon },
]

export default function Footer() {
  return (
    <footer className="footer">
      {/* newsletter: side by side on desktop, stacked on mobile */}
      <div className="footer__signup">
        <div className="container footer__signup-inner">
          <div>
            <h2 className="footer__signup-title">Subscribe to our newsletter</h2>
            <p className="footer__signup-text">Get the latest deals and new arrivals straight to your inbox.</p>
          </div>
          <NewsletterForm />
        </div>
      </div>

      <div className="container footer__grid">
        {LINK_GROUPS.map(({ title, links }) => (
          <nav key={title} aria-labelledby={`footer-${title}`}>
            <h2 id={`footer-${title}`} className="footer__heading">{title}</h2>
            <ul className="footer__links">
              {links.map((link) => (
                <li key={link}><a href="#">{link}</a></li>
              ))}
            </ul>
          </nav>
        ))}

        <div className="footer__contact">
          <h2 className="footer__heading">Contact</h2>
          <address className="footer__address">
            <a href="tel:+12345678910">+1 234 567 8910</a>
            <a href="mailto:sales@onlineshopping.com">sales@onlineshopping.com</a>
            <span>12 Avenue Street, Stafford, TX 77477</span>
          </address>

          <h2 className="footer__heading">Stay Connected</h2>
          <ul className="social">
            {SOCIAL.map(({ name, Icon }) => (
              <li key={name}>
                <a href="#" className="social__link" aria-label={name}>
                  <Icon />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <p className="container">&copy; Online Shopping, 2025. All rights reserved.</p>
      </div>
    </footer>
  )
}

import type { ReactNode } from 'react'
import Container from '@/components/common/Container/Container'
import { LINK_GROUPS, SOCIAL } from '../data/footer'
import styles from '../Footer.module.css'

export default function Footer({ children }: { children?: ReactNode }) {
  return (
    <footer className={styles.footer}>
      {children}

      <Container className={styles.footer__grid}>
        {LINK_GROUPS.map(({ title, links }) => (
          <nav key={title} aria-labelledby={`footer-${title}`}>
            <h2 id={`footer-${title}`} className={styles.footer__heading}>{title}</h2>
            <ul className={styles.footer__links}>
              {links.map((link) => (
                <li key={link}><a href="#">{link}</a></li>
              ))}
            </ul>
          </nav>
        ))}

        <div className="footer__contact">
          <h2 className={styles.footer__heading}>Contact</h2>
          <address className={styles.footer__address}>
            <a href="tel:+12345678910">+1 234 567 8910</a>
            <a href="mailto:sales@onlineshopping.com">sales@onlineshopping.com</a>
            <span>12 Avenue Street, Stafford, TX 77477</span>
          </address>

          <h2 className={styles.footer__heading}>Stay Connected</h2>
          <ul className={styles.social}>
            {SOCIAL.map(({ name, Icon }) => (
              <li key={name}>
                <a href="#" className={styles.social__link} aria-label={name}>
                  <Icon />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <div className={styles.footer__bottom}>
        <Container as="p">&copy; Online Shopping, 2025. All rights reserved.</Container>
      </div>
    </footer>
  )
}

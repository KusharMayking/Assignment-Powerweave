import { useEffect, useState } from 'react'
import { CartIcon, ChevronDownIcon, CloseIcon, HeartIcon, MenuIcon, SearchIcon, UserIcon } from './Icons'
import '../styles/components/Header.css'

// hasMenu just shows the chevron for now, dropdowns aren't built yet
const NAV_ITEMS = [
  { label: '2025 New Products', hasMenu: false },
  { label: 'Apparel', hasMenu: true },
  { label: 'Bags', hasMenu: false },
  { label: 'Drinkware', hasMenu: true },
  { label: 'Health & Wellness', hasMenu: false },
  { label: 'Office', hasMenu: false },
  { label: 'Tech', hasMenu: true },
  { label: 'Gifts', hasMenu: true },
  { label: 'Tradeshow', hasMenu: true },
  { label: 'Travel', hasMenu: true },
]

const TOP_LINKS = ['New Items', 'Clearance', 'Sales Tools', 'Catalog']

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  // esc closes the mobile menu
  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  return (
    <header className="header">
      {/* top bar, desktop only */}
      <div className="topbar">
        <div className="container topbar__inner">
          <p className="topbar__promo">Free shipping on all orders over $99</p>
          <ul className="topbar__links">
            {TOP_LINKS.map((link) => (
              <li key={link}><a href="#">{link}</a></li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container header__main">
        <button
          type="button"
          className="icon-btn header__toggle"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-nav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>

        <a href="#" className="logo" aria-label="Online Shopping home">
          <CartIcon className="logo__icon" />
          <span className="logo__text">
            Online <strong>Shopping</strong>
          </span>
        </a>

        <form className="search" role="search" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="site-search" className="sr-only">Search products</label>
          <input id="site-search" type="search" className="search__input" placeholder="Search here..." />
          <button type="submit" className="icon-btn search__btn" aria-label="Search">
            <SearchIcon />
          </button>
        </form>

        <div className="header__actions">
          <a href="#" className="icon-btn" aria-label="Cart, 2 items">
            <CartIcon />
            <span className="badge" aria-hidden="true">2</span>
          </a>
          <a href="#" className="icon-btn" aria-label="Wishlist">
            <HeartIcon />
          </a>
          <a href="#" className="icon-btn header__account" aria-label="Account">
            <UserIcon />
          </a>
        </div>
      </div>

      {/* inline row on desktop, collapsible panel under the hamburger on mobile */}
      <nav id="primary-nav" className={`nav ${menuOpen ? 'nav--open' : ''}`} aria-label="Primary">
        <ul className="container nav__list">
          {NAV_ITEMS.map(({ label, hasMenu }) => (
            <li key={label}>
              <a href="#" className="nav__link">
                {label}
                {hasMenu && <ChevronDownIcon className="nav__chevron" />}
              </a>
            </li>
          ))}
          {/* top bar links are hidden on mobile so they go in the menu instead */}
          {TOP_LINKS.map((link) => (
            <li key={link} className="nav__mobile-only">
              <a href="#" className="nav__link">{link}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

import { CartIcon, ChevronDownIcon, CloseIcon, HeartIcon, MenuIcon, SearchIcon, UserIcon } from '@/assets/icons/Icons'
import { classNames } from '@/utils/classNames'
import Container from '@/components/common/Container/Container'
import { NAV_ITEMS, TOP_LINKS } from '../data/navigation'
import { useMobileMenu } from '../hooks/useMobileMenu'
import { useHeaderSearch } from '../hooks/useHeaderSearch'
import HeaderSearch from './HeaderSearch'
import styles from '../Header.module.css'

export default function Header() {
  const { menuOpen, toggleMenu } = useMobileMenu()
  const { searchOpen, inputRef, toggleRef, toggleSearch, handleSearchKeyDown } = useHeaderSearch()

  return (
    <header className={styles.header}>
      {/* top bar, desktop only */}
      <div className={styles.topbar}>
        <Container className={styles.topbar__inner}>
          <p className="topbar__promo">Free shipping on all orders over $99</p>
          <ul className={styles.topbar__links}>
            {TOP_LINKS.map((link) => (
              <li key={link}><a href="#">{link}</a></li>
            ))}
          </ul>
        </Container>
      </div>

      <Container className={styles.header__main}>
        <button
          type="button"
          className={classNames('icon-btn', styles.header__toggle)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-nav"
          onClick={toggleMenu}
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>

        <a href="#" className={styles.logo} aria-label="Online Shopping home">
          <CartIcon className={styles.logo__icon} />
          <span className={styles.logo__text}>
            Online <strong>Shopping</strong>
          </span>
        </a>

        <HeaderSearch open={searchOpen} inputRef={inputRef} onKeyDown={handleSearchKeyDown} />

        <div className={styles.header__actions}>
          <button
            ref={toggleRef}
            type="button"
            className={classNames('icon-btn', styles.header__searchToggle)}
            aria-label={searchOpen ? 'Close search' : 'Open search'}
            aria-expanded={searchOpen}
            aria-controls="header-search"
            onClick={toggleSearch}
          >
            {searchOpen ? <CloseIcon /> : <SearchIcon />}
          </button>
          <a href="#" className="icon-btn" aria-label="Cart, 2 items">
            <CartIcon />
            <span className={styles.badge} aria-hidden="true">2</span>
          </a>
          <a href="#" className={classNames('icon-btn', styles.header__wishlist)} aria-label="Wishlist">
            <HeartIcon />
          </a>
          <a href="#" className={classNames('icon-btn', styles.header__account)} aria-label="Account">
            <UserIcon />
          </a>
        </div>
      </Container>

      {/* inline row on desktop, collapsible panel under the hamburger on mobile */}
      <nav id="primary-nav" className={classNames(styles.nav, menuOpen ? styles['nav--open'] : '')} aria-label="Primary">
        <Container as="ul" className={styles.nav__list}>
          {NAV_ITEMS.map(({ label, hasMenu }) => (
            <li key={label}>
              <a href="#" className={styles.nav__link}>
                {label}
                {hasMenu && <ChevronDownIcon className={styles.nav__chevron} />}
              </a>
            </li>
          ))}
          {/* top bar links are hidden on mobile so they go in the menu instead */}
          {TOP_LINKS.map((link) => (
            <li key={link} className={styles['nav__mobile-only']}>
              <a href="#" className={styles.nav__link}>{link}</a>
            </li>
          ))}
          <li className={styles['nav__mobile-only']}>
            <a href="#" className={styles.nav__link}>Wishlist <HeartIcon className={styles.nav__chevron} /></a>
          </li>
          <li className={styles['nav__mobile-only']}>
            <a href="#" className={styles.nav__link}>Account <UserIcon className={styles.nav__chevron} /></a>
          </li>
        </Container>
      </nav>
    </header>
  )
}

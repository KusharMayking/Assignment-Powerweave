import type { KeyboardEventHandler, Ref } from 'react'
import { SearchIcon } from '@/assets/icons/Icons'
import { classNames } from '@/utils/classNames'
import styles from '../Header.module.css'

interface HeaderSearchProps {
  open: boolean
  inputRef: Ref<HTMLInputElement>
  onKeyDown: KeyboardEventHandler<HTMLFormElement>
}

export default function HeaderSearch({ open, inputRef, onKeyDown }: HeaderSearchProps) {
  return (
    <form
      id="header-search"
      className={classNames(styles.search, open && styles['search--open'])}
      role="search"
      onSubmit={(event) => event.preventDefault()}
      onKeyDown={onKeyDown}
    >
      <label htmlFor="site-search" className="sr-only">Search products</label>
      <input
        ref={inputRef}
        id="site-search"
        type="search"
        className={styles.search__input}
        placeholder="Search here..."
      />
      <button type="submit" className={classNames('icon-btn', styles.search__btn)} aria-label="Submit search">
        <SearchIcon />
      </button>
    </form>
  )
}

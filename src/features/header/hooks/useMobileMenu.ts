import { useEffect, useState } from 'react'

export function useMobileMenu() {
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

  return { menuOpen, toggleMenu: () => setMenuOpen((open) => !open) }
}

import { useEffect, useRef, useState, type KeyboardEvent } from 'react'

export function useHeaderSearch() {
  const [searchOpen, setSearchOpen] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (searchOpen) inputRef.current?.focus()
  }, [searchOpen])

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 64em)')
    let focusedControl: EventTarget | null = null
    const rememberFocus = (event: FocusEvent) => {
      focusedControl = event.target === inputRef.current || event.target === toggleRef.current
        ? event.target
        : null
    }
    const handleBreakpoint = () => {
      setSearchOpen(false)
      // Browsers can blur a display:none control before the media event fires.
      // Remember focus so it can move to the visible counterpart in that case.
      if (desktop.matches && focusedControl === toggleRef.current) {
        inputRef.current?.focus()
      } else if (!desktop.matches && focusedControl === inputRef.current) {
        toggleRef.current?.focus()
      }
    }
    document.addEventListener('focusin', rememberFocus)
    desktop.addEventListener('change', handleBreakpoint)
    return () => {
      document.removeEventListener('focusin', rememberFocus)
      desktop.removeEventListener('change', handleBreakpoint)
    }
  }, [])

  const toggleSearch = () => {
    if (searchOpen) toggleRef.current?.focus()
    setSearchOpen((open) => !open)
  }

  const handleSearchKeyDown = (event: KeyboardEvent<HTMLFormElement>) => {
    if (event.key !== 'Escape' || !searchOpen) return
    event.preventDefault()
    setSearchOpen(false)
    toggleRef.current?.focus()
  }

  return { searchOpen, inputRef, toggleRef, toggleSearch, handleSearchKeyDown }
}

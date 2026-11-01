// Basic format check only; this does not verify that the address exists.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

export function validateEmail(email: string): string {
  const value = email.trim()
  if (!value) return 'Please enter your email address.'
  if (!EMAIL_RE.test(value)) return 'Please enter a valid email address, e.g. name@example.com.'
  return ''
}

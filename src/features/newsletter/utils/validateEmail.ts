// good enough for a signup form, the backend should validate properly anyway
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

export function validateEmail(email: string): string {
  const value = email.trim()
  if (!value) return 'Please enter your email address.'
  if (!EMAIL_RE.test(value)) return 'Please enter a valid email address, e.g. name@example.com.'
  return ''
}

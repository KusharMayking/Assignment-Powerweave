import { useId, useState, type FormEvent } from 'react'
import { ArrowRightIcon, MailIcon } from './Icons'
import './NewsletterForm.css'

// good enough for a signup form, the backend should validate properly anyway
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

export default function NewsletterForm() {
  const id = useId()
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const value = email.trim()

    if (!value) {
      setError('Please enter your email address.')
      return
    }
    if (!EMAIL_RE.test(value)) {
      setError('Please enter a valid email address, e.g. name@example.com.')
      return
    }

    setError('')
    setSubscribed(true)
  }

  if (subscribed) {
    return <p className="newsletter__success" role="status">Thanks! You're on the list.</p>
  }

  return (
    // noValidate so the browser's own bubble doesn't show up over our message
    <form className="newsletter" onSubmit={handleSubmit} noValidate>
      <label htmlFor={`${id}-email`} className="sr-only">Email address</label>
      <div className="newsletter__row">
        <span className="newsletter__field">
          <MailIcon className="newsletter__icon" />
          <input
            id={`${id}-email`}
            type="email"
            className="newsletter__input"
            placeholder="Email address"
            autoComplete="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
              if (error) setError('')
            }}
            aria-invalid={error ? true : undefined}
            aria-describedby={error ? `${id}-error` : undefined}
          />
        </span>
        <button type="submit" className="btn">
          Subscribe
          <ArrowRightIcon className="btn__icon" />
        </button>
      </div>
      {error && (
        <p id={`${id}-error`} className="newsletter__error" role="alert">{error}</p>
      )}
    </form>
  )
}

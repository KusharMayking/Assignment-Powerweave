import { useState, type FormEvent } from 'react'
import { validateEmail } from '../utils/validateEmail'

// Demo-only signup state. A successful submission does not contact a backend.
export function useNewsletter() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const message = validateEmail(email)
    setError(message)
    if (!message) setSubscribed(true)
  }

  const updateEmail = (value: string) => {
    setEmail(value)
    if (error) setError('')
  }

  return { email, error, subscribed, updateEmail, handleSubmit }
}

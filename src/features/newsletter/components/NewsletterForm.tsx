import { useId } from 'react'
import { ArrowRightIcon, MailIcon } from '@/assets/icons/Icons'
import Button from '@/components/common/Button/Button'
import { useNewsletter } from '../hooks/useNewsletter'
import styles from '../Newsletter.module.css'

export default function NewsletterForm() {
  const id = useId()
  const { email, error, subscribed, updateEmail, handleSubmit } = useNewsletter()

  if (subscribed) {
    return <p className={styles.newsletter__success} role="status">Thanks! You're on the list.</p>
  }

  return (
    // Show our validation message instead of the browser's default popup.
    <form className={styles.newsletter} onSubmit={handleSubmit} noValidate>
      <label htmlFor={`${id}-email`} className="sr-only">Email address</label>
      <div className={styles.newsletter__row}>
        <span className={styles.newsletter__field}>
          <MailIcon className={styles.newsletter__icon} />
          <input
            id={`${id}-email`}
            type="email"
            className={styles.newsletter__input}
            placeholder="Email address"
            autoComplete="email"
            value={email}
            onChange={(event) => updateEmail(event.target.value)}
            aria-invalid={error ? true : undefined}
            aria-describedby={error ? `${id}-error` : undefined}
          />
        </span>
        <Button type="submit">
          Subscribe
          <ArrowRightIcon className={styles['newsletter__button-icon']} />
        </Button>
      </div>
      {error && (
        <p id={`${id}-error`} className={styles.newsletter__error} role="alert">{error}</p>
      )}
    </form>
  )
}

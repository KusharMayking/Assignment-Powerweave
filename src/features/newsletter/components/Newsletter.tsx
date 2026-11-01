import Container from '@/components/common/Container/Container'
import NewsletterForm from './NewsletterForm'
import styles from '../Newsletter.module.css'

export default function Newsletter() {
  return (
    <div className={styles.newsletter__signup}>
      <Container className={styles['newsletter__signup-inner']}>
        <div>
          <h2 className={styles['newsletter__signup-title']}>Subscribe to our newsletter</h2>
          <p className={styles['newsletter__signup-text']}>Get the latest deals and new arrivals straight to your inbox.</p>
        </div>
        <NewsletterForm />
      </Container>
    </div>
  )
}

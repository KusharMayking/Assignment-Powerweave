import { classNames } from '@/utils/classNames'
import styles from '../Products.module.css'

export default function SkeletonCard() {
  return <div className={classNames(styles.card, styles['card--skeleton'])} aria-hidden="true" />
}

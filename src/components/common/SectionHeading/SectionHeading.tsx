import type { ComponentPropsWithoutRef } from 'react'
import { classNames } from '@/utils/classNames'
import styles from './SectionHeading.module.css'

export default function SectionHeading({ className = '', ...props }: ComponentPropsWithoutRef<'h2'>) {
  return <h2 className={classNames(styles.section__title, className)} {...props} />
}

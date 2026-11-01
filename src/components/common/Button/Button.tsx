import type { ComponentPropsWithoutRef } from 'react'
import { classNames } from '@/utils/classNames'
import styles from './Button.module.css'

export default function Button({ type = 'button', className = '', ...props }: ComponentPropsWithoutRef<'button'>) {
  return <button type={type} className={classNames(styles.btn, className)} {...props} />
}

export function ButtonLink({ className = '', ...props }: ComponentPropsWithoutRef<'a'>) {
  return <a className={classNames(styles.btn, className)} {...props} />
}

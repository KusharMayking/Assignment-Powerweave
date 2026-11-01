import type { ComponentPropsWithoutRef } from 'react'
import { classNames } from '@/utils/classNames'
import styles from './ArrowButton.module.css'

export default function ArrowButton({ className = '', ...props }: Omit<ComponentPropsWithoutRef<'button'>, 'type'>) {
  return <button type="button" className={classNames(styles['arrow-btn'], className)} {...props} />
}

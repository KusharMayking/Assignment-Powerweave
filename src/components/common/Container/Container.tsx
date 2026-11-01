import type { HTMLAttributes } from 'react'
import { classNames } from '@/utils/classNames'
import styles from './Container.module.css'

type ContainerProps = HTMLAttributes<HTMLElement> & { as?: 'div' | 'ul' | 'p' }

export default function Container({ as: Tag = 'div', className = '', ...props }: ContainerProps) {
  return <Tag className={classNames(styles.container, className)} {...props} />
}

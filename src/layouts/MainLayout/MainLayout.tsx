import type { ReactNode } from 'react'
import { Footer } from '@/features/footer'
import { Header } from '@/features/header'
import { Newsletter } from '@/features/newsletter'

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer>
        <Newsletter />
      </Footer>
    </>
  )
}

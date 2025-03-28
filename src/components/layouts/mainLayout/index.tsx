import React from 'react'
import styles from './mainLayout.module.scss'
import Header from '@/components/common/header'
import Footer from '@/components/common/footer'
import Image from 'next/image'
import Logo from '@/components/assets/svg/logo.svg' // Updated import path

export default function MainLayout({ children }: any) {
  return (
    <div>
      <div className={styles.mobileViewShow}>
        <Header />
        {children}
        <Footer />
      </div>
      <div className={styles.tabviewShow}>
        <div className={styles.logoWrap}>
          <Image src={Logo.src} alt='Logo' layout='fill' />
        </div>
      </div>
    </div>
  )
}

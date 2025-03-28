'use client'
import React from 'react'
import styles from './footer.module.scss'
import UpIcon from '@/components/icons/upIcon'
import LinkdinIcon from '@/components/icons/linkdinIcon'
import YoutubeIcon from '@/components/icons/youtubeIcon'
import FacebookIcon from '@/components/icons/facebookIcon'
import Image from 'next/image'
import Logo from '@/components/assets/svg/white-logo.svg'
import Chatbot from '@/components/assets/svg/chatbot.svg'
import { redirect, useParams } from 'next/navigation'
import Link from 'next/link'

export default function Footer() {
  const { locale } = useParams()
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTopbarAlignment}>
        <img src={Logo.src} alt='Logo' />
        <div className={styles.backToTop}>
          <span>Back to top</span>
          <UpIcon />
        </div>
      </div>
      <div className={styles.footerText}>
        <h2>Your Global Search Solution</h2>
        <p>
          FinFocus is a global enterprise search tool. Users should comply with locale laws and
          regulations.
        </p>
      </div>
      <div className={styles.footerMenu}>
        <div>
          <Link href={`/${locale}`} aria-label='home'>
            Home
          </Link>
          <Link href={`/${locale}/economic-calendar`} aria-label='economic-calendar'>
            Economic calendar
          </Link>
          <Link href={`/${locale}/about-us`} aria-label='about-us'>
            About us
          </Link>
        </div>
        <div>
          <Link href={`/${locale}/broker-ranking`} aria-label='broker-ranking'>
            Broker Ranking
          </Link>
          <Link href={`/${locale}/realtime-news`} aria-label='realtime-news'>
            Realtime News
          </Link>
          <Link href={`/${locale}/contact-us`} aria-label='contact-us'>
            Contact us
          </Link>
        </div>
      </div>
      <div className={styles.contactButton}>
        <button aria-label='Contact us' onClick={() => redirect(`/${locale}/contact-us`)}>
          Contact us
          <img src={Chatbot.src} alt='Chatbot' />
        </button>
      </div>
      <div className={styles.ourSocial}>
        <p>Our social</p>
        <div className={styles.allIconAlignment}>
          <div className={styles.icon}>
            <LinkdinIcon />
          </div>
          <div className={styles.icon}>
            <YoutubeIcon />
          </div>
          <div className={styles.icon}>
            <FacebookIcon />
          </div>
        </div>
      </div>
      <div className={styles.footerBottomAlignment}>
        <p>© 2024 FinFocus</p>
        <Link href={`/${locale}/privacy-policy`}>Privacy Policy</Link>
      </div>
    </footer>
  )
}

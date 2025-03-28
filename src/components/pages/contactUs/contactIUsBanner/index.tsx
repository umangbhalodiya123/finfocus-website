import React from 'react'
import styles from './contactIUsBanner.module.scss'
import Image from 'next/image'
import WhatsappIcon from '@/components/assets/svg/whatsapp.svg'
import SendIcon from '@/components/assets/svg/send.svg'
export default function ContactIUsBanner() {
  return (
    <div className={styles.contactIUsBanner}>
      <div className={styles.title}>
        <h1>We are here if you need any help</h1>
        <p>Contact us anytime, anywhere.</p>
      </div>
      <div className={styles.grid}>
        <div className={styles.griditems}>
          <div className={styles.icon}>
            <div className={styles.whatsappIcon}>
              <Image src={WhatsappIcon.src} alt='WhatsappIcon' layout='fill' />
            </div>
          </div>
          <h2>WhatsApp</h2>
          <button>
            Contact us
            <div className={styles.imgWrap}>
              <Image src={SendIcon.src} alt='SendIcon' layout='fill' />
            </div>
          </button>
        </div>
        <div className={styles.griditems}>
          <div className={styles.icon}>
            <div className={styles.whatsappIcon}>
              <Image src={WhatsappIcon.src} alt='WhatsappIcon' layout='fill' />
            </div>
          </div>
          <h2>Telegram</h2>
          <button>
            Contact us
            <div className={styles.imgWrap}>
              <Image src={SendIcon.src} alt='SendIcon' layout='fill' />
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

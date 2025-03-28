import React from 'react'
import styles from './aboutHerobanner.module.scss'
import Image from 'next/image'
import VisionIcon from '@/components/assets/svg/vision.svg'
export default function AboutHerobanner() {
  return (
    <div className={styles.aboutHerobanner}>
      <div className={styles.sectionDetails}>
        <h1>Global Broker Regulation</h1>
        <span>Ensuring Fair and Transparent Markets</span>
        <p>
          Global Broker Regulation refers to the rules and standards governing the activities of
          brokers worldwide. These regulations aim to protect investors, maintain market integrity,
          and ensure fair and transparent trading practices.
        </p>
      </div>
      <div className={styles.roundAlignment}>
        <div className={styles.round}>
          <div className={styles.centerIconAlignment}>
            <div className={styles.imageWrap}>
              <Image src={VisionIcon.src} alt='VisionIcon' layout='fill' />
            </div>
          </div>
          <h3>Our Vision</h3>
          <p>to be a leading force in promoting fair and transparent global financial markets.</p>
        </div>
        <div className={styles.round}>
          <div className={styles.centerIconAlignment}>
            <div className={styles.imageWrap}>
              <Image src={VisionIcon.src} alt='VisionIcon' layout='fill' />
            </div>
          </div>
          <h3>Our Vision</h3>
          <p>to be a leading force in promoting fair and transparent global financial markets.</p>
        </div>
      </div>
    </div>
  )
}

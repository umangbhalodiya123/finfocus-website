import React from 'react'
import styles from './rankingCard.module.scss'
import Image from 'next/image'
import FxtmImage from '@/components/assets/images/fxtm.png'
import LockIcon from '@/components/assets/svg/lock.svg'
export default function RankingCard() {
  return (
    <div className={styles.allRankingCardAlignment}>
      {[...Array(6)].map((_, i) => {
        return (
          <div className={styles.card} key={i}>
            <div className={styles.image}>
              <img src={FxtmImage.src} alt='FxtmImage' />
            </div>
            <div>
              <div className={styles.cardHeader}>
                <div>
                  <h3>FXTM</h3>
                  <p>
                    9.20 <span>Score</span>
                  </p>
                </div>
                <div>
                  <img src={LockIcon.src} alt='LockIcon' />
                </div>
              </div>
              <div className={styles.buttonAlignment}>
                <button>10-15 years</button>
                <button>Regulated in Australia</button>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

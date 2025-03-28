import React from 'react'
import styles from './homeBlog.module.scss'
import RightIcon from '@/components/icons/rightIcon'
import ClockIcon from '@/components/icons/clockIcon'
import CommentIcon from '@/components/icons/commentIcon'
import Image from 'next/image'
import BlogImage from '@/components/assets/images/blog.png'
import OffIcon from '@/components/assets/svg/off.svg'
import SmileIcon from '@/components/assets/svg/smile.svg'
import HappyIcon from '@/components/assets/svg/happy.svg'
export default function HomeBlog() {
  return (
    <div className={styles.homeBlog}>
      <div className={styles.sectiontitle}>
        <h2>Read next</h2>
        <div className={styles.seeMore}>
          <span>See more</span>
          <RightIcon />
        </div>
      </div>
      <div className={styles.cardAlignment}>
        {[...Array(3)].map((_, i) => {
          return (
            <div className={styles.card} key={i}>
              <div className={styles.image}>
                <img src={BlogImage.src} alt='BlogImage' />
              </div>
              <div className={styles.cardDetails}>
                <div className={styles.cardHeader}>
                  <button>Forex</button>
                  <div className={styles.time}>
                    <ClockIcon />
                    <span>2 min read</span>
                  </div>
                </div>
                <h3>Trump's election win impacted forex, gold and oil</h3>
                <div className={styles.cardFooteralignment}>
                  <div className={styles.leftAlignment}>
                    <div className={styles.twoiconAlignment}>
                      <img src={OffIcon.src} alt='OffIcon' />
                      <img src={SmileIcon.src} alt='SmileIcon' />
                    </div>
                    <span>21</span>
                    <img src={HappyIcon.src} alt='HappyIcon' />
                  </div>
                  <div className={styles.commentIconTextalignment}>
                    <CommentIcon />
                    <span>11</span>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

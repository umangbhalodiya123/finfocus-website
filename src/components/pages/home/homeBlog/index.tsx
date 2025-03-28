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
                <Image src={BlogImage.src} alt='BlogImage' layout='fill' />
              </div>
              <div className={styles.cardDetails}>
                <div className={styles.cardHeader}>
                  <button>Forex</button>
                  <div className={styles.time}>
                    <ClockIcon />
                    <span>2 min read</span>
                  </div>
                </div>
                <h3>Trump&#39;s election win impacted forex, gold and oil</h3>
                <div className={styles.cardFooteralignment}>
                  <div className={styles.leftAlignment}>
                    <div className={styles.twoiconAlignment}>
                      <div className={styles.emojiImage1}>
                        <Image src={OffIcon.src} alt='OffIcon' layout='fill' />
                      </div>
                      <div className={styles.emojiImage1}>
                        <Image src={SmileIcon.src} alt='SmileIcon' layout='fill' />
                      </div>
                    </div>
                    <span>21</span>
                    <div className={styles.emojiImage1}>
                      <Image src={HappyIcon.src} alt='HappyIcon' layout='fill' />
                    </div>
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

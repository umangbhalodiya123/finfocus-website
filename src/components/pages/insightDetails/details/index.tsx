import React, { useMemo } from 'react'
import styles from './details.module.scss'
import ClockIcon from '@/components/icons/clockIcon'
import CopyIcon from '@/components/icons/copyIcon'
import CommentIcon from '@/components/icons/commentIcon'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { RootState } from '@/lib/redux/store'
import { useLocale } from 'next-intl'
import { handleLanguage } from '@/utils'
import fallbackImage from '@/components/assets/images/webp/thumbnail.webp'
import OffIcon from '@/components/assets/svg/off.svg'
import SmileIcon from '@/components/assets/svg/smile.svg'
import HappyIcon from '@/components/assets/svg/happy.svg'
// Define the Article Content Type
interface ArticleContent {
  id: string
  insightId: string
  title: string
  content: string
  languageKey: string
  image: string
  permalink: string
  excerpt: string
  createdAt: string
  updatedAt: string
}

export default function Details() {
  const locale = useLocale()
  const { tagsContent } = useSelector((state: RootState) => state.article)

  // Get the correct article content based on language
  const articleContent: ArticleContent | null = useMemo(() => {
    if (!tagsContent?.length) return null
    return (
      tagsContent.find((item: ArticleContent) => item.languageKey === handleLanguage(locale)) ||
      null
    )
  }, [tagsContent, locale])

  return (
    <div className={styles.details}>
      {/* Dynamic Image with Next.js Optimization */}
      <div className={styles.img}>
        <Image
          src={articleContent?.image || fallbackImage.src}
          alt='BlogImage'
          width={300}
          height={180}
          placeholder='blur'
          blurDataURL={fallbackImage.src}
        />
      </div>

      <div className={styles.informationAlignment}>
        {/* Icons Section */}
        <div className={styles.twoIconTextAlignment}>
          <div className={styles.iconText}>
            <ClockIcon />
            <span>5 min read</span>
          </div>
          <div className={styles.iconText}>
            <CopyIcon />
            <span>Copy</span>
          </div>
        </div>

        {/* Article Title */}
        <div className={styles.mainTitle}>
          <h2>{articleContent?.title || ''}</h2>
        </div>

        <div className={styles.mainDetails}>
          <div dangerouslySetInnerHTML={{ __html: articleContent?.content || '' }} />
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
    </div>
  )
}

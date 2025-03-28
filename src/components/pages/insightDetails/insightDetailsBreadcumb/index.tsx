import React from 'react'
import styles from './insightDetailsBreadcumb.module.scss'
import { useSelector } from 'react-redux'
import { RootState } from '@/lib/redux/store'
import { Skeleton } from '@mui/material'
import Link from 'next/link'
import { useLocale } from 'next-intl'

export default function InsightDetailsBreadcumb() {
  const { articleById } = useSelector((state: RootState) => state.article)
  const { isLoading } = useSelector((state: RootState) => state.loading) // Using Redux state for loading
  const locale = useLocale()
  return (
    <div className={styles.insightDetailsBreadcumb}>
      <Link href={`/${locale}/insights`}>Insights</Link>
      {articleById?.insightName && (
        <>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='14'
            height='14'
            viewBox='0 0 14 14'
            fill='none'
          >
            <path
              d='M5.63007 1.95343C5.42016 1.74352 5.07984 1.74352 4.86993 1.95343C4.66002 2.16333 4.66002 2.50366 4.86993 2.71357L7.88668 5.73032C8.588 6.43164 8.588 7.5687 7.88668 8.27001L4.86993 11.2868C4.66002 11.4967 4.66002 11.837 4.86993 12.0469C5.07984 12.2568 5.42016 12.2568 5.63007 12.0469L8.64682 9.03016C9.76795 7.90902 9.76795 6.09131 8.64682 4.97018L5.63007 1.95343Z'
              fill='#1F1F2B'
              stroke='#1F1F2B'
              strokeWidth='0.2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </>
      )}
      {isLoading ? (
        <Skeleton variant='text' width='30%' height={30} />
      ) : (
        <span>{articleById?.insightName}</span>
      )}
    </div>
  )
}

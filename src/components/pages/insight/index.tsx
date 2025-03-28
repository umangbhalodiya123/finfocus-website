'use client'
import React, { useEffect, useMemo, useState, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@/lib/redux/store'
import { getArticles, getCategory, handleArticles } from '@/lib/redux/reducers/articleReducer'
import { useLocale } from 'next-intl'
import { usePathname, useRouter } from 'next/navigation'
import { handleLanguage } from '@/utils'
import styles from './insight.module.scss'
import ClockIcon from '@/components/icons/clockIcon'
import Image from 'next/image'
import fallbackImage from '@/components/assets/images/webp/thumbnail.webp'
import { Skeleton, Typography, Box } from '@mui/material'

const Insight = () => {
  const dispatch = useDispatch<AppDispatch>()
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()

  const currentPath = useMemo(() => pathname?.split('/')?.[2] ?? '', [pathname])

  const {
    allCategorys = { data: { payload: { rows: [] } } },
    articlesList = { data: { payload: { rows: [] } } },
  } = useSelector((state: RootState) => state.article)
  const { isLoading } = useSelector((state: RootState) => state.loading)
  const TabList = useMemo(() => {
    if (!allCategorys?.data?.payload?.rows) {
      return []
    }
    return allCategorys.data.payload.rows.slice().sort((a: any, b: any) => a.priority - b.priority)
  }, [allCategorys])

  const [currentPage, setCurrentPage] = useState(1)
  const [selectedCategory, setSelectedCategory] = useState<any>(null)

  useEffect(() => {
    if (TabList.length > 0 && !selectedCategory) {
      setSelectedCategory(TabList[0])
    }
  }, [TabList, selectedCategory])

  useEffect(() => {
    if (selectedCategory?.id) {
      async function fetchData() {
        try {
          await dispatch(
            getArticles({
              categorys: [selectedCategory.id],
              languageKey: handleLanguage(locale),
              displayIn: 'Mobile',
              type: 'insight',
              page: currentPage,
              limit: 10,
              isActive: true,
            }),
          )
        } catch (error) {}
      }
      fetchData()
    } else {
    }
  }, [selectedCategory?.id, locale, currentPage, dispatch])

  useEffect(() => {
    try {
      dispatch(getCategory({ type: 'insight' }))
    } catch (error) {
      console.error(error)
    }
  }, [dispatch])

  const handleArticleDetails = (id: string) => {
    dispatch(handleArticles())
    router.push(`/${locale}/${currentPath}/${id}`)
  }

  return (
    <div className={styles.insightAlignment}>
      <div className={styles.heroTitle}>
        <h2>Insights</h2>
        <div className={styles.buttonalignment}>
          {isLoading
            ? Array.from({ length: 3 }).map((_, i) => (
                <Skeleton
                  key={i}
                  variant='rectangular'
                  width={100}
                  height={36}
                  sx={{ borderRadius: 50, marginRight: 1 }}
                />
              ))
            : TabList.map((item: { id: string; name: string }) => (
                <button
                  key={item.id}
                  className={item.id === selectedCategory?.id ? styles.activebtn : ''}
                  onClick={() => setSelectedCategory(item)}
                >
                  {item.name}
                </button>
              ))}
        </div>
      </div>

      <div className={styles.cardAlignment}>
        {isLoading ? (
          Array.from({ length: 3 }).map((_, i) => (
            <div className={styles.card} key={i}>
              <Skeleton variant='rectangular' width='100%' height={180} className={styles.image} />
              <div className={styles.cardDetails}>
                <div className={styles.cardHeader}>
                  <Skeleton variant='text' width='30%' height={30} />
                  <Skeleton variant='text' width='30%' height={30} />
                </div>
                <Skeleton variant='text' width='100%' height={20} />
              </div>
            </div>
          ))
        ) : articlesList?.data?.payload?.rows?.length > 0 ? (
          articlesList.data.payload.rows.map((article: any, i: number) => {
            const articleImage =
              article?.InsightContents?.find(
                (item: { languageKey: string }) => item.languageKey === handleLanguage(locale),
              )?.image || fallbackImage

            return (
              <div
                className={styles.card}
                key={i}
                onClick={() => {
                  handleArticleDetails(article.id)
                }}
              >
                <div className={styles.image}>
                  <Image
                    src={articleImage}
                    alt='BlogImage'
                    width={300}
                    height={180}
                    placeholder='blur'
                    blurDataURL={fallbackImage.src}
                  />
                </div>
                <div className={styles.cardDetails}>
                  <div className={styles.cardHeader}>
                    {article?.Categories?.map((item: { name: string }) => (
                      <button key={item.name}>{item.name}</button>
                    ))}
                    <div className={styles.time}>
                      <ClockIcon />
                      <span>2 min read</span>
                    </div>
                  </div>
                  <h3>{article.insightName}</h3>
                </div>
              </div>
            )
          })
        ) : (
          <Box
            display='flex'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
            height='200px'
          >
            <Typography variant='h6'>No Data Found</Typography>
            <Typography variant='body2'>Please try selecting a different category.</Typography>
          </Box>
        )}
      </div>
    </div>
  )
}
export default Insight

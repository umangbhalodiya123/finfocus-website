import { RootState } from '@/lib/redux/store'
import HomeBlog from '../home/homeBlog'
import Details from './details'
import InsightDetailsBreadcumb from './insightDetailsBreadcumb'
import { useDispatch, useSelector } from 'react-redux'
import type { AppDispatch } from '@/lib/redux/store'
import { useEffect } from 'react'
import { useParams } from 'next/navigation'
import { getArticleById, getTagsContent } from '@/lib/redux/reducers/articleReducer'
import { useLocale } from 'next-intl'
import { handleLanguage } from '@/utils'
export default function InsightDetails() {
  const dispatch = useDispatch<AppDispatch>()
  const locale = useLocale()
  const { id } = useParams<{ id: string }>()
  useEffect(() => {
    if (id && locale) {
      const filterParams = {
        languageKey: handleLanguage(locale),
      }
      dispatch(getTagsContent({ id: id as string, filterParams }))
      dispatch(getArticleById(id))
    }
  }, [id, locale, dispatch])
  return (
    <div>
      <InsightDetailsBreadcumb />
      <Details />
      <HomeBlog />
    </div>
  )
}

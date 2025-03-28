'use client'
import dynamic from 'next/dynamic'
import React from 'react'
const Insight = dynamic(() => import('../../../components/pages/insight/index'), { ssr: false })
export default function page() {
  return <Insight />
}

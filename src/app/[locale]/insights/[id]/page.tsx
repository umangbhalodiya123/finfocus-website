'use client'

import dynamic from 'next/dynamic'
import React from 'react'
const InsightDetails = dynamic(() => import('../../../../components/pages/insightDetails/index'), {
  ssr: false,
})

export default function page() {
  return (
    <div>
      <InsightDetails />
    </div>
  )
}

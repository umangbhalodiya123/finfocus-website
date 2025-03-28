import React from 'react'
import HeroTextSection from './heroTextSection'
import HomeRanking from './homeRanking'
import HomeBlog from './homeBlog'

export default function HomePage() {
  return (
    <div>
      <HeroTextSection />
      <HomeRanking />
      <HomeBlog />
    </div>
  )
}

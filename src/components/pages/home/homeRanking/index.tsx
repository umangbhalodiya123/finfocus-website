import React from 'react'
import styles from './homeRanking.module.scss'
import VectorIcon from '@/components/icons/vectorIcon'
import RankingCard from '@/components/rankingCard'
export default function HomeRanking() {
  return (
    <div className={styles.homeRankingAlignment}>
      <div className={styles.titleIconAlignment}>
        <VectorIcon />
        <h2>Ranking</h2>
      </div>
      <RankingCard />
    </div>
  )
}

import React from 'react'
import styles from './brokerList.module.scss'
import VectorIcon from '@/components/icons/vectorIcon'
import RankingCard from '@/components/rankingCard'
export default function BrokerList() {
  return (
    <div className={styles.brokerListalignment}>
      <div className={styles.titleIconAlignment}>
        <VectorIcon />
        <h2>Ranking list</h2>
      </div>
      <RankingCard />
    </div>
  )
}

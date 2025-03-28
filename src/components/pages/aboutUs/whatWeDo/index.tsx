import React from 'react'
import styles from './whatWeDo.module.scss'
export default function WhatWeDo() {
  return (
    <div className={styles.whatWeDoAlignment}>
      <div className={styles.title}>
        <h2>What We Do</h2>
      </div>
      <div className={styles.grid}>
        {[...Array(5)].map((_, i) => {
          return (
            <div className={styles.griditems} key={i}>
              <h4>01</h4>
              <p>Monitor Regulatory Changes</p>
              <span>
                We closely monitor regulatory developments around the world to keep our clients
                informed and compliant.
              </span>
            </div>
          )
        })}
      </div>
      <div className={styles.textStyle}>
        <p>
          By staying informed and taking proactive steps to comply with regulations, investors and
          businesses can mitigate risks and maximize opportunities in today's global financial
          markets.
        </p>
      </div>
    </div>
  )
}

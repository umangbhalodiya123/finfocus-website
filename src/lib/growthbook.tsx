'use client'

import { ReactNode } from 'react'
import { GrowthBook, GrowthBookProvider } from '@growthbook/growthbook-react'

export enum FEATURE_FLAGS {
  MT5_FEATURE = 'MT5_FEATURE',
  PROMOTIONS_FEATURE = 'PROMOTIONS_FEATURE',
  TR_MT5_MAKE_DEPOSIT = 'TR_MT5_MAKE_DEPOSIT',
  TR_MT5_MAKE_WITHDRAWAL = 'TR_MT5_MAKE_WITHDRAWAL',
  TR_MT5_MAKE_TRANSFER = 'TR_MT5_MAKE_TRANSFER',
  TR_MT5_ACCOUNT_REGISTRATION = 'TR_MT5_ACCOUNT_REGISTRATION',
  TR_MT5_SUB_ACCOUNT_CREATION = 'TR_MT5_SUB_ACCOUNT_CREATION',
  TR_MT5_PLATFORM_TYPE_FIELD = 'TR_MT5_PLATFORM_TYPE_FIELD',
  TR_MT5_TRADE_HISTORY = 'TR_MT5_TRADE_HISTORY',
  TR_MAINTENANCE_POP_UP_NOTI = 'TR_MAINTENANCE_POP_UP_NOTI',
}

const gb = new GrowthBook({
  apiHost: 'https://api.growthbook.junomarkets.net',
  clientKey: process.env.NEXT_PUBLIC_GROWTHBOOK_CLIENT_KEY,
  disableCache: true,
})

gb.init({
  streaming: true,
  timeout: 5000,
})

export const IsFeatureFlagEnabled = async (flagKey: FEATURE_FLAGS) => {
  try {
    await gb.init({ timeout: 5000 })
    return gb.isOn(flagKey)
  } catch (error) {}
}

interface GrowthBookSetupProps {
  children: ReactNode
}

const GrowthBookWrapper = ({ children }: GrowthBookSetupProps) => {
  return <GrowthBookProvider growthbook={gb}>{children}</GrowthBookProvider>
}

export default GrowthBookWrapper

'use client'
import React, { useEffect, createContext } from 'react'
import { init, track } from '@amplitude/analytics-browser'

const AMPLITUDE_API_KEY: any = process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY

export const AmplitudeContext = createContext({})

const AmplitudeContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [userId, setUserId] = React.useState<string | null>(null)

  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const localUser: null | string = localStorage.getItem('user')
      setUserId(localUser && JSON.parse(localUser)?.aliasId)
    }
  }, [])

  useEffect(() => {
    init(AMPLITUDE_API_KEY, userId ?? undefined, {
      defaultTracking: {
        sessions: true,
      },
      autocapture: {
        elementInteractions: true,
      },
    })
  }, [userId])

  const trackAmplitudeEvent = (eventName: string, eventProperties: { [key: string]: any }) => {
    track(eventName, eventProperties)
  }

  const value = { trackAmplitudeEvent }

  return <AmplitudeContext.Provider value={value}>{children}</AmplitudeContext.Provider>
}

export default AmplitudeContextProvider

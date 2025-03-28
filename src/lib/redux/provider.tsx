'use client'

import { Provider } from 'react-redux'
import store from './store' // Correctly import the default export

export function Providers({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>
}

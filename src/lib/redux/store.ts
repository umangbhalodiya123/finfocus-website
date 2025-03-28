'use client'
import { configureStore } from '@reduxjs/toolkit'
import articleReducer from './reducers/articleReducer' // Ensure no circular dependency here
import authReducer from './reducers/authReducer'
import loadingReducer from './reducers/loadingReducer'

// Configure store with the persisted reducer
const store = configureStore({
  reducer: {
    auth: authReducer,
    article: articleReducer,
    loading: loadingReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store

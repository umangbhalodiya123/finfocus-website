import { setLoading } from '@/lib/redux/reducers/loadingReducer'
import store from '@/lib/redux/store'
import axios, { AxiosRequestConfig } from 'axios'

// check active request counts, provide global loading state to redux global store
const activeRequestCount = {
  count: 0,
  increment() {
    this.count++
    if (this.count === 1) {
      store.dispatch(setLoading(true))
    }
  },
  decrement() {
    this.count--
    if (this.count === 0) {
      store.dispatch(setLoading(false))
    }
  },
}

// TMP, silent loading for some endpoints
const noLoaderEndpoints: RegExp[] = [
  /partnership\/[a-f0-9-]+$/,
  /partnership\/clients\/[a-f0-9-]+$/,
  /trades/,
  /rebates\/user\/[a-f0-9-]+\/rebate-report$/,
]

// Typing for shouldSkipLoading function
const shouldSkipLoading = (url: string, baseURL: string): boolean => {
  const relativeURL = url.replace(baseURL, '')
  return noLoaderEndpoints.some((pattern) => pattern.test(relativeURL))
}

// Create a new Axios instance with proper types
const createAxiosInstance = (baseURL: string, config?: AxiosRequestConfig) => {
  const instance = axios.create({ baseURL, ...config })

  // Request interceptor
  instance.interceptors.request.use(
    (request) => {
      // Check if the request URL matches any of the noLoaderEndpoints
      if (request.url && !shouldSkipLoading(request.url, baseURL)) {
        activeRequestCount.increment()
      }
      return request
    },
    (error) => {
      activeRequestCount.decrement()
      return Promise.reject(error)
    },
  )

  // Response interceptor
  instance.interceptors.response.use(
    (response) => {
      if (response.config.url && !shouldSkipLoading(response.config.url, baseURL)) {
        activeRequestCount.decrement()
      }
      return response
    },
    (error) => {
      if (error.config.url && !shouldSkipLoading(error.config.url, baseURL)) {
        activeRequestCount.decrement()
      }
      return Promise.reject(error)
    },
  )

  return instance
}

// Create a new axios instance for each microservice endpoint

export const insightServiceEndpoint = createAxiosInstance(
  `${process.env.NEXT_PUBLIC_FINFOCUS_API_BASE_URL}`,
  {
    headers: {
      'Content-Type': 'application/json',
      'ngrok-skip-browser-warning': 'true', // Skip ngrok browser warning
    },
  },
)

// Ensure no imports from redux or reducers here

export const multipartInsightServiceEndpoint = createAxiosInstance(
  `${process.env.NEXT_PUBLIC_FINFOCUS_API_BASE_URL}`,
  {
    headers: {
      'Content-Type': 'multipart/form-data',
      'ngrok-skip-browser-warning': 'true', // Skip ngrok browser warning
    },
  },
)

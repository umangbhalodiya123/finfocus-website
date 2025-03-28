import { AxiosInstance } from 'axios'

type QueryParams = {
  [key: string]: string | number | boolean | null | string[]
}

const axiosGetWithQueryParams = async (
  axiosInstance: AxiosInstance,
  endpoint: string,
  queryParams: QueryParams = {},
) => {
  const defaultParams = {
    page: 1,
    limit: 10,
    sortOrder: 'DESC',
    sortBy: 'createdAt',
  }

  const finalParams = { ...defaultParams, ...queryParams }
  const queryString = Object.entries(finalParams)
    .filter(
      ([_, value]) =>
        value !== undefined && value !== null && !(typeof value === 'string' && value === ''),
    )
    .flatMap(([key, value]) =>
      Array.isArray(value)
        ? value.map((val) => `${encodeURIComponent(key)}%5B%5D=${encodeURIComponent(val)}`)
        : `${encodeURIComponent(key)}=${encodeURIComponent(value)}`,
    )
    .join('&')

  return await axiosInstance.get(`${endpoint}?${queryString}`)
}

export { axiosGetWithQueryParams }

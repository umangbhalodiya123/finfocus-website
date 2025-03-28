export const REPORT_CONFIG = {
  ROWS_PER_PAGE: 50,
  DEFAULT_PAGE: 1,
  DATE_FORMAT: 'YYYY-MM-DD',
  PAYMENTS: 'Payments',
  TRANSFER: 'Transfer',
  PAYMENTS_KEY: 'payments_label',
  TRANSFER_KEY: 'transfer_label',
} as const

export const FILTER_OPTIONS = {
  ALL: 'All',
  FROM_LATEST: 'oldestToLatest',
  FROM_OLDEST: 'latestToOldest',
  FROM_SMALLEST: 'highestToLowest',
  FROM_LARGEST: 'lowestToHighest',
} as const

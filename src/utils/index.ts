import { FORGOTPASS, LOGIN, SIGNUP } from './authTypes'
import { isEqual, matchRegEx, passwordRegex } from './validators'
import { useLocale } from 'next-intl'
import {
  ALL_PERIOD_LABEL,
  HALF_YR_LABEL,
  MONTH_LABEL,
  WEEK_LABEL,
  TODAY_LABEL,
  THIS_LABEL,
} from './tradeFilterMenus'
import { CN, CN_HK, EN, KR, KZ, languageMap, MY, RU, TH, UG, VN } from './languageTypes'
import moment from 'moment-timezone'
import { MT5 } from './platformType'
import toast from 'react-hot-toast'
export {
  INTERNAL_LABEL,
  EXTERNAL_LABEL,
  INTERNAL_PHRASE_KEY,
  EXTERNAL_PHRASE_KEY,
} from './walletTypes'
export { WEB_APP } from './sourceTag'
export { ELIGIBLE_KEY, JOINED_KEY, ENDED_KEY, GENERAL_KEY, STATISTICS_KEY } from './promotionStatus'
export {
  FTD,
  NONFTD,
  NONFTD_KEY,
  VERIFIED_KEY,
  UNVERIFIED_KEY,
  VERIFIED_LABEL,
  UNVERIFIED_LABEL,
} from './allClentsFilterMenus'

export { getCountryCodeFromCoordinates, fetchIPInfo } from './fetchGeoLocation'
export {
  KEY_LOCAL_BANK_TRANSFER,
  KEY_DIGITAL_CURRENCY,
  KEY_CREDIT_CARD,
  KEY_BANK_WIRE,
  KEY_EWALLET,
  getCategoryName,
} from './paymentTypes'
export { langToService } from './languageTypes'
export {
  ALL_PHRASE_KEY,
  DEPOSIT_PHRASE_KEY,
  WITHDRAWAL_PHRASE_KEY,
  TRANSFER_PHRASE_KEY,
  ALL_LABEL,
  DEPOSIT_LABEL,
  WITHDRAWAL_LABEL,
  TRANSFER_LABEL,
  TRANSFER_IN_LABEL,
  TRANSFER_IN_PHRASE_KEY,
  TRANSFER_OUT_LABEL,
  TRANSFER_OUT_PHRASE_KEY,
  REBATE_LABEL,
  CREDIT_LABEL,
  REWARD_LABEL,
  ADJUSTMENT_LABEL,
  ADJUSTMENT_PHRASE_KEY,
  REWARD_PHRASE_KEY,
  CREDIT_PHRASE_KEY,
  REBATE_PHRASE_KEY,
} from './transactionTypes'
export {
  BUY_LABEL,
  BUY_PHRASE_KEY,
  SELL_LABEL,
  SELL_PHRASE_KEY,
  OPEN_LABEL,
  OPEN_PHRASE_KEY,
  BALANCE_LABEL,
  BALANCE_PHRASE_KEY,
  CLOSED_LABEL,
  CLOSED_PHRASE_KEY,
  WEEK_LABEL,
  WEEK_PHRASE_KEY,
  MONTH_LABEL,
  MONTH_PHRASE_KEY,
  HALF_YR_LABEL,
  HALF_YR_PHRASE_KEY,
  ALL_PERIOD_LABEL,
  THIS_LABEL,
  TODAY_LABEL,
  ALL_PERIOD_PHRASE_KEY,
} from './tradeFilterMenus'
export {
  IN_PROGRESS_PHRASE_KEY,
  IN_PROGRESS_LABEL,
  IS_PAID_PHRASE_KEY,
  IS_PAID_LABEL,
  TIMED_OUT_PHRASE_KEY,
  TIMED_OUT_LABEL,
  PENDING_PHRASE_KEY,
  PENDING_LABEL,
  APPROVED_PHRASE_KEY,
  APPROVED_LABEL,
  REJECTED_PHRASE_KEY,
  REJECTED_LABEL,
  NA_PHRASE_KEY,
  NA_LABEL,
  COMPLETED_PHRASE_KEY,
  COMPLETED_LABEL,
  CANCELLED_PHRASE_KEY,
  CANCELLED_LABEL,
} from './transactionStatuses'
export {
  DEFAULT_LABEL,
  NEWEST_LABEL,
  OLDEST_LABEL,
  DEFAULT_PHRASE_KEY,
  NEWEST_PHRASE_KEY,
  OLDEST_PHRASE_KEY,
} from './sortingOptions'
export {
  DEFAULT_PROG_LABEL,
  CUSTOM_PROG_LABEL,
  DEFAULT_PROG_PHRASE_KEY,
  CUSTOM_PROG_PHRASE_KEY,
} from './programTypes'

export {
  PASSPORT,
  DRIVING_LICENSE,
  ID_CARD,
  RESIDENCE_PERMIT,
  KEY_PASSPORT,
  KEY_DRIVING_LICENSE,
  KEY_ID_CARD,
  KEY_RESIDENCE_PERMIT,
  BANK_STATEMENT,
  UTILITY,
  INTERNET,
  PHONE_BILL,
  TAX_RETURN,
  KEY_BANK_STATEMENT,
  KEY_UTILITY,
  KEY_INTERNET,
  KEY_PHONE_BILL,
  KEY_TAX_RETURN,
} from './accVerification'

export const ComparePassword = (values: { password?: string; confirmPassword?: string }) =>
  values.password &&
  values.confirmPassword &&
  isEqual(values.password, values.confirmPassword) &&
  matchRegEx(values.password, passwordRegex)

export const ItemFromPayload = (payload: any, item: string, fallBack: any = null): any => {
  return item && payload && payload.data && payload.data[item] ? payload.data[item] : fallBack
}

export const handleResendOtpType = (form: any) => {
  switch (form) {
    case LOGIN:
      return 'Login'
    case SIGNUP:
      return 'Register'
    case FORGOTPASS:
      return 'Forgot-password'
    default:
      break
  }
}

export const useReferralBaseURL = () => {
  const locale = useLocale()
  if (typeof window !== 'undefined') {
    const origin = window.location.origin
    return `${origin}/${locale}`
  }
  return ''
}

export const getDownloadMT4url = (user: { countryOfCitizenship?: string }) => {
  switch (user?.countryOfCitizenship?.toLowerCase()) {
    case CN:
      return 'https://downloads.junomarkets.com/download/mt4/junomarketsltd4setup.exe'

    case MY:
      return 'https://junomarkets-my.com/metatrader-4/'

    default:
      return 'https://junomarkets.com/metatrader-4/'
  }
}

type ParsedObject = {
  order?: number
  header?: string
  checked?: boolean
  field?: string
  [key: string]: number | string | boolean | undefined
}

export const extractObjectsFromString = (str: string): ParsedObject[] => {
  const objects: ParsedObject[] = []
  let currentObject: ParsedObject = {}
  let key = ''
  let value = ''
  let isKey = false
  let isValue = false

  for (let i = 0; i < str?.length; i++) {
    const char = str[i]

    if (char === '{') {
      currentObject = {}
      isKey = true
      isValue = false
    } else if (char === '}') {
      if (key !== '') {
        value = value.trim()
        // Remove extra single quotes from field values
        if (key.trim() === 'field') {
          if (value.startsWith("'") && value.endsWith("'")) {
            value = value.slice(1, -1)
          }
        }
        // Convert "order" to a number
        if (key.trim() === 'order') {
          currentObject[key.trim()] = parseInt(value)
        }
        // Convert "checked" to a boolean
        else if (key.trim() === 'checked') {
          currentObject[key.trim()] = value.trim() === 'true'
        }
        // Handle "header" to strip the translation function
        else if (key.trim() === 'header') {
          if (value.startsWith("t('") && value.endsWith("')")) {
            value = value.slice(3, -2) // Remove t(' and ')
          }
          currentObject[key.trim()] = value
        }
        // Leave other fields as strings
        else {
          currentObject[key.trim()] = value
        }
      }
      objects.push(currentObject)
      key = ''
      value = ''
      isKey = false
      isValue = false
    } else if (char === ':' && isKey) {
      isKey = false
      isValue = true
    } else if (char === ',' && isValue) {
      value = value.trim()
      // Remove extra single quotes from field values
      if (key.trim() === 'field') {
        if (value.startsWith("'") && value.endsWith("'")) {
          value = value.slice(1, -1)
        }
      }
      // Convert "order" to a number
      if (key.trim() === 'order') {
        currentObject[key.trim()] = parseInt(value)
      }
      // Convert "checked" to a boolean
      else if (key.trim() === 'checked') {
        currentObject[key.trim()] = value.trim() === 'true'
      }
      // Handle "header" to strip the translation function
      else if (key.trim() === 'header') {
        if (value.startsWith("t('") && value.endsWith("')")) {
          value = value.slice(3, -2) // Remove t(' and ')
        }
        currentObject[key.trim()] = value
      }
      // Leave other fields as strings
      else {
        currentObject[key.trim()] = value
      }
      key = ''
      value = ''
      isKey = true
      isValue = false
    } else if (isKey) {
      key += char
    } else if (isValue) {
      value += char
    }
  }

  return objects
}

export const convertObjectsToString = (objects: any[]): string => {
  return (
    '[' +
    objects
      ?.map((obj) => {
        const str = `{ order: ${obj.order}, header: t('${obj.header}'), checked: ${obj.checked}, field: ${obj.field} }`
        return str
      })
      .join(', ') +
    ']'
  )
}

export const formatDateTime = (
  dateTimeString: string,
  timeZone: string = 'UTC',
  separate: boolean = false,
) => {
  const date = moment(dateTimeString)

  if (/^UTC([+-]\d{2}):(\d{2})$/.test(timeZone)) {
    const offset = timeZone.replace('UTC', '')
    date.utcOffset(offset)
  } else {
    date.tz(timeZone)
  }
  const formattedDate = date.format('MM.DD.YYYY')
  const formattedTime = date.format('hh:mm A')

  if (separate) {
    return { datePart: formattedDate, timePart: formattedTime }
  } else {
    const formattedDateTime = `${formattedDate}, ${formattedTime}`
    return formattedDateTime as string
  }
}

export const formatDate = (dateTimeString: string): string => {
  const isoDateTimePattern = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}[+-]\d{2}:\d{2}$/

  if (isoDateTimePattern.test(dateTimeString)) {
    const optionsDate: Intl.DateTimeFormatOptions = {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    }

    const optionsTime: Intl.DateTimeFormatOptions = {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    }

    const datePart = new Date(dateTimeString).toLocaleDateString('en-US', optionsDate)
    const timePart = new Date(dateTimeString).toLocaleTimeString('en-US', optionsTime)

    return `${datePart}, ${timePart}`
  } else {
    return dateTimeString // Return original string if it doesn't match the ISO pattern
  }
}

export const enableNumberInputScrolling = (input: HTMLInputElement) => {
  input.addEventListener('mousewheel', function (this: HTMLInputElement, event) {
    this.blur()
  })
}

export const changeDateFormat = (timestamp: number | string | Date): string => {
  const date = new Date(timestamp)
  const day = date.getDate()
  const month = date.getMonth() + 1 // Adding 1 because getMonth() returns zero-based month index
  const year = date.getFullYear()

  // Format the date components
  const formattedDate = `${day < 10 ? '0' : ''}${day}.${month < 10 ? '0' : ''}${month}.${year}`

  return formattedDate
}

export const changeFormat = (dateString: string): string => {
  const date = new Date(dateString)
  const formattedDate = date
    .toLocaleDateString('en-US', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    })
    .replace(/\//g, '.')
  return formattedDate
}

export const changeDateFormatWithSlash = (isoString: string): string => {
  const date = new Date(isoString)

  // Get the month, day, and year
  const month = date.getUTCMonth() + 1 // getUTCMonth() returns 0-based month, so +1
  const day = date.getUTCDate()
  const year = date.getUTCFullYear()

  // Return in MM/DD/YYYY format
  return `${month}/${day}/${year}`
}

export const changeDateandTimeFormat = (inputTime: string): string => {
  const dateObj = new Date(inputTime)

  const year = dateObj.getFullYear()
  const month = String(dateObj.getMonth() + 1).padStart(2, '0')
  const day = String(dateObj.getDate()).padStart(2, '0')

  const [date, time] = inputTime?.split('T')
  let hours = parseInt(time?.split(':')[0])
  const minutes = time?.split(':')[1]
  const period = hours >= 12 ? 'PM' : 'AM'
  hours = hours % 12 || 12

  const formattedTime = `${month}.${day}.${year}, ${hours}:${minutes} ${period}`
  return formattedTime
}

export const changeMonthYearFormat = (dateString: string) => {
  const date = new Date(dateString)
  const month = date.getMonth() + 1 // Add 1 to get 1-based month (January is 0)
  const year = date.getFullYear()
  return `${month.toString().padStart(2, '0')}/${year}`
}

// convert numbers to locale strings
export const convertToLS = (number: any) => {
  return number && Number(Number(Math.floor(number * 100) / 100).toFixed(2)).toLocaleString()
}

export const toggleDateFormat = (date: string) => {
  // const regex = /^\d{4}-\d{2}-01$/;
  // if (regex.test(date)) {
  //   const [year, month] = date.split('-');
  //   return `${year}-${month}`;
  // } else {
  //   return date;
  // }
  const dateString = new Date(date)
  const month = dateString.getMonth() + 1 // Adding 1 because January is 0
  const year = dateString.getFullYear()

  // Format the month to have a leading zero if necessary
  const formattedMonth = month < 10 ? `0${month}` : month

  return `${formattedMonth || '-'}/${year || '-'}`
}

export const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}

export const mobiScrollFormat = (dateString: string | Date) => {
  const date = new Date(dateString)
  const day = date.getDate().toString().padStart(2, '0')
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const year = date.getFullYear().toString()
  if (day && month && year) {
    return `${day}.${month}.${year}`
  } else return ''
}

export const handleDateformat = (date: Date) => {
  const year = date?.getFullYear()
  const month = String(date?.getMonth() + 1).padStart(2, '0')
  const day = String(date?.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

export const convertDateFormat = (dateString: string) => {
  // Parse the date string to a Date object
  const date = new Date(dateString)

  // Extract the parts of the date you need
  const month = String(date.getUTCMonth() + 1).padStart(2, '0') // getUTCMonth() returns month from 0-11, so add 1
  const day = String(date.getUTCDate()).padStart(2, '0')
  const year = date.getUTCFullYear()
  const hours = String(date.getUTCHours()).padStart(2, '0')
  const minutes = String(date.getUTCMinutes()).padStart(2, '0')

  // Format the date as required
  const formattedDate = `${month}.${day}.${year} ${hours}:${minutes}`

  return formattedDate
}

export const ModifyString = (inputString: string) => {
  // Remove dots
  const noDots = inputString?.replace(/\./g, '')
  // Remove commas
  const noDotsCommas = noDots?.replace(/,/g, '')
  // Remove apostrophes
  const noDotsCommasApostrophes = noDotsCommas?.replace(/'/g, '')
  // Replace spaces with underscores
  const noDotsCommasApostrophesUnderscores = noDotsCommasApostrophes?.replace(/ /g, '_')
  // Convert to lowercase
  const modifiedString = noDotsCommasApostrophesUnderscores?.toLowerCase()
  return modifiedString
}

export const currectTimezoneDate = (date: string) => {
  const d = new Date(date)
  const month = `${d.getMonth() + 1}`.padStart(2, '0')
  const day = `${d.getDate()}`.padStart(2, '0')
  return `${d.getFullYear()}-${month}-${day}`
}

export const calculateDateRange = (selectedOption: string) => {
  const today = new Date()
  let start: Date | null = null
  let end: Date | null = today

  const startOfWeek = (date: Date) => {
    const day = date.getDay()
    const diff = date.getDate() - day + (day === 0 ? -6 : 1) // Adjust when day is Sunday
    return new Date(date.setDate(diff))
  }

  const endOfLastWeek = (date: Date) => {
    const lastWeekEnd = new Date(date)
    lastWeekEnd.setDate(date.getDate() - date.getDay()) // Set to last Sunday
    return lastWeekEnd
  }

  const startOfLastWeek = (date: Date) => {
    const lastWeekStart = new Date(date)
    lastWeekStart.setDate(date.getDate() - date.getDay() - 6) // Set to last Monday
    return lastWeekStart
  }

  const startOfLastMonth = (date: Date) => {
    const lastMonth = new Date(date.getFullYear(), date.getMonth() - 1, 1)
    return lastMonth
  }

  const endOfLastMonth = (date: Date) => {
    const lastMonthEnd = new Date(date.getFullYear(), date.getMonth(), 0)
    return lastMonthEnd
  }

  switch (selectedOption) {
    case TODAY_LABEL:
      start = today
      end = today
      break
    case THIS_LABEL:
      start = startOfWeek(new Date())
      end = today
      break
    case WEEK_LABEL:
      start = startOfLastWeek(new Date())
      end = endOfLastWeek(new Date())
      break
    case MONTH_LABEL:
      start = startOfLastMonth(new Date())
      end = endOfLastMonth(new Date())
      break
    case HALF_YR_LABEL:
      start = new Date(today)
      start.setMonth(today.getMonth() - 6)
      end = today
      break
    case ALL_PERIOD_LABEL:
      start = null
      end = null
      break
    default:
      // Handle "All" or default case
      start = null
      end = null
      break
  }

  return {
    startDate: start
      ? `${start.getFullYear()}-${String(start.getMonth() + 1).padStart(2, '0')}-${String(
          start.getDate(),
        ).padStart(2, '0')}`
      : null,
    endDate: end
      ? `${end.getFullYear()}-${String(end.getMonth() + 1).padStart(2, '0')}-${String(
          end.getDate(),
        ).padStart(2, '0')}`
      : null,
  }
}

export const calculateDateRangeWeb = (selectedOption: string) => {
  const today = new Date()
  let start = null
  let end: any = today

  switch (selectedOption) {
    case WEEK_LABEL:
      start = new Date(today)
      start.setDate(start.getDate() - 7)
      break
    case MONTH_LABEL:
      start = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate())
      break
    case HALF_YR_LABEL:
      start = new Date(today)
      start.setMonth(start.getMonth() - 6)
      break
    case ALL_PERIOD_LABEL:
      start = null
      end = null
      break
    default:
      start = null
      break
  }
  return [start ? start : null, end ? end : null]
}

export const showWalletAlias = (id: any, walletDetails: any) => {
  if (id === walletDetails?.id) {
    return walletDetails?.aliasId
  } else return id
}

export const getSeverity = (status: any) => {
  switch (status) {
    case 'unqualified':
    case 'Rejected':
    case 'Cancelled':
      return 'danger'
    case 'Completed':
    case 'Is Paid':
    case 'Approved':
      return 'success'
    case 'NA':
    case 'Pending':
    case 'In Progress':
      return 'warning'
    case 'renewal':
      return null
    default:
      return null
  }
}

export const getLastFourCharacters = (str: string) => {
  return str?.slice(-4)
}
export const mapTradeToObject = (options: any) => {
  return options.reduce((acc: any, el: any) => {
    acc[el.value] = true
    return acc
  }, {})
}

export const isChinaUser = (countryCode: string) => {
  return [CN, 'china'].includes(countryCode?.toLowerCase())
}

export const isMT5TradeAccount = ({ flag, dataList }: { flag: boolean; dataList: Array<any> }) => {
  if (flag) {
    return dataList
  }
  return dataList?.filter((account: any) => account?.platformType !== MT5)
}

export function convertToLocalTime(utcDateString: string) {
  // Create a Date object from the ISO string
  const date = new Date(utcDateString)

  // Extract hours and minutes in UTC
  const hours = date.getUTCHours().toString().padStart(2, '0')
  const minutes = date.getUTCMinutes().toString().padStart(2, '0')

  // Format to 00:00 UTC
  return `${hours}:${minutes} UTC`
}
export const handleCopyClick = (textToCopy: string) => {
  navigator.clipboard
    .writeText(textToCopy)
    .then(() => {
      const message = 'Link copied successfully.'
      toast.success(message)
    })
    .catch((err) => console.error('Copy failed: ', err))
}

export const formatCardNumber = (cardNumber: string) => {
  // Ensure the card number is at least 4 characters long
  if (cardNumber?.length < 4) {
    return cardNumber
  }

  // First 4 digits remain the same
  const firstFour = cardNumber?.slice(0, 4)
  const masked = cardNumber?.slice(4).replace(/\d/g, 'x')
  const formatted = `${firstFour} ${masked?.replace(/(.{4})/g, '$1 ')}`

  return formatted.trim()
}

export const convertIsoDate = (isoDate: string) => {
  const date = new Date(isoDate)
  return new Intl.DateTimeFormat('en-US', {
    month: 'short', // Abbreviated month name (e.g., "Jun")
    day: '2-digit', // Day with leading zero if needed
    year: 'numeric', // Full year
  }).format(date)
}

export const sessionTime = (dateString: string) => {
  const date = moment(dateString)
  const now = moment()

  if (now.diff(date, 'seconds') < 60) {
    return 'just now'
  } else if (now.diff(date, 'hours') < 24) {
    return date.fromNow() // e.g., "5 hours ago"
  } else if (now.diff(date, 'days') === 1) {
    return `yesterday at ${date.format('hh:mm A')}`
  } else if (now.diff(date, 'days') <= 7) {
    return `last ${date.format('dddd')} at ${date.format('hh:mm A')}` // e.g., "last Wednesday at 11:34 AM"
  } else if (now.year() === date.year()) {
    return date.format('MMMM D') // e.g., "January 1"
  } else {
    return date.format('MMMM D, YYYY') // e.g., "January 1, 2025"
  }
}

export const durationMapper = (input: string | number): string | number => {
  const mapping: Record<string, number> = {
    '1 Week': 7,
    '2 Weeks': 14,
    '1 Month': 30,
    '3 Months': 90,
    '6 Months': 180,
    '1 Year': 365,
  }

  if (typeof input === 'string') {
    // Convert duration to days
    return mapping[input] || 0 // Return 0 if not found
  } else if (typeof input === 'number') {
    // Convert days to duration
    const entry = Object.entries(mapping).find(([, days]) => days === input)
    return entry ? entry[0] : 'Unknown' // Return "Unknown" if not found
  }

  return 'Invalid input'
}

export const handleLanguage = (lang: string) => {
  return languageMap[lang] || 'en-GB'
}

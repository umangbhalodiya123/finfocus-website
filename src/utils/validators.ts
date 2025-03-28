export const numeric = /^[0-9]+$/
export const email =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
export const specialCharactersRegex = /^[0-9a-zA-Z& _-]{1,30}$/
export const phone = /^\(?([+])?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
export const clientUserPhone = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g // eslint-disable-line
export const website =
  /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/ // eslint-disable-line
export const base64 = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/
export const hexColor = /^#(?:[0-9a-fA-F]{3}){1,2}$/
export const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/
export const dobRegex = /^(0?[1-9]|[12][0-9]|3[01])[/](0?[1-9]|1[012])[/]\d{4}$/

export const required = (value: any) => !value

export const isEqual = (value: string, compareValue: string) => value === compareValue

export const matchRegEx = (value: any, pattern: any) => value && pattern && value.match(pattern)

export const minValue = (value: any, min: any) =>
  value && value.length < min ? `Must be at least ${min}` : undefined

export const maxLength = (value: any, max: any) => (value && value.length > max ? true : undefined)

export const hasChildren = (value: any) => (value && value.length > 0 ? undefined : 'Required')

export const compare = (expectedSmaller: any, expectedGreater: any) =>
  expectedSmaller <= expectedGreater

export const httpUrlValidator = (url: any) => /^(?:f|ht)tps?\:\/\//.test(url)

export const emailIsValid = (url: any) => url && email.test(url)

export const phoneIsValid = (url: any) => {
  phone && phone.test(url)
}
export const validatePWCriteria = (key: any, values: any) => {
  switch (key) {
    case '8-15':
      return values && values.length >= 8 && values.length <= 15
    case 'a-z':
      return values && /[a-z]/.test(values)
    case 'A-Z':
      return values && /[A-Z]/.test(values)
    case '0-9':
      return values && /\d/.test(values)
    case 'special':
      return values && /[!@#$%^&*()_\-+={[}\]|\\:;"'<,>.?\/]/.test(values)
    default:
      break
  }
}

export const validatePhoneNumber = (phoneNumber: any, phoneLength: any, countryCode: string) => {
  if (!phoneNumber) {
    return 'av_err_phone_req'
  }

  // Special case for Indonesia (+62)
  if (countryCode === '+62') {
    if (phoneNumber.length !== 11 && phoneNumber.length !== 12) {
      return 'please_enter_a_valid_phone_number'
    }
  } else {
    if (phoneNumber.length !== phoneLength) {
      return 'please_enter_a_valid_phone_number'
    }
  }

  return null
}

export const validateEmail = (email: any) => {
  if (!email) {
    return 'please_enter_an_email_address'
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    return 'please_enter_a_valid_email_address'
  }
  return null
}
export const validatePassword = (password: any) => {
  if (!password) {
    return 'please_enter_a_password'
  }
  return null
}
export const validateOtpLength = (otp: any) => {
  if (!otp || otp.length !== 6) {
    return 'please_enter_otp'
  }
  return null
}
export const comparePasswords = (values: any) => {
  const errors: any = {}
  if (!values.password) {
    errors.password = 'please_enter_a_password'
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = 'Please confirm your password'
  }

  if (
    values.password &&
    values.confirmPassword &&
    !isEqual(values.password, values.confirmPassword)
  ) {
    errors.confirmPassword = 'Passwords do not match'
  }

  return errors
}
export const handleKeyDown = (event: any, phoneLength: any, countryCode: string) => {
  const disallowedCharacters = ['e', '+', '-']
  if (event.key === 'Backspace') {
    return
  }
  if (disallowedCharacters.includes(event.key)) {
    event.preventDefault()
  }

  // Custom logic for Indonesia
  if (countryCode === '+62') {
    const length = event.target.value.length
    if (length >= 12 || (length === 11 && phoneLength !== 12)) {
      event.preventDefault()
      return 'Please enter a valid number (11 or 12 digits)'
    }
  } else {
    if (event.target.value.length >= phoneLength) {
      event.preventDefault()
      return 'Please enter a valid number'
    }
  }
}

export const validateCreditCard = (creditCardNumber: any) => {
  const trimmedCreditCardNumber = creditCardNumber?.replace(/\s+/g, '').replace(/-/g, '')

  // Check if the credit card number contains only digits
  if (!/^\d+$/.test(trimmedCreditCardNumber)) {
    return false // Invalid format (contains non-digit characters)
  }

  // Define the lengths for different card types
  const cardLengths: any = {
    Visa: 16,
    Mastercard: 16,
    'American Express': 15,
  }

  // Check if the credit card number has a valid length for the known card types
  let validLength = false
  for (const cardType in cardLengths) {
    if (trimmedCreditCardNumber.length === cardLengths[cardType]) {
      validLength = true
      break
    }
  }
  if (!validLength) {
    return false // Invalid length for any known card type
  }

  // Luhn algorithm to validate the credit card number
  let sum = 0
  let doubleUp = false
  for (let i = trimmedCreditCardNumber.length - 1; i >= 0; i--) {
    let digit = parseInt(trimmedCreditCardNumber.charAt(i), 10)
    if (doubleUp) {
      digit *= 2
      if (digit > 9) {
        digit -= 9
      }
    }
    sum += digit
    doubleUp = !doubleUp
  }
  return sum % 10 === 0
}

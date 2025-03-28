export const LOCAL_BANK_TRANSFER = 'Local Bank Transfer'
export const DIGITAL_CURRENCY = 'Digital Currency'
export const CREDIT_CARD = 'Credit Card'
export const BANK_WIRE = 'Bank Wire'
export const E_WALLET = 'Crypto Wallet'

export const KEY_LOCAL_BANK_TRANSFER = 'key_local_bank_transfer'
export const KEY_DIGITAL_CURRENCY = 'key_digital_currency'
export const KEY_CREDIT_CARD = 'key_credit_card'
export const KEY_BANK_WIRE = 'key_bank_wire'
export const KEY_EWALLET = 'key_ewallet'

type CategoryKey =
  | typeof KEY_LOCAL_BANK_TRANSFER
  | typeof KEY_DIGITAL_CURRENCY
  | typeof KEY_CREDIT_CARD
  | typeof KEY_BANK_WIRE
  | typeof KEY_EWALLET
type CategoryName =
  | typeof LOCAL_BANK_TRANSFER
  | typeof DIGITAL_CURRENCY
  | typeof CREDIT_CARD
  | typeof BANK_WIRE
  | typeof E_WALLET

export const getCategoryName = (categoryData: CategoryKey | any): CategoryName | string => {
  switch (categoryData) {
    case KEY_LOCAL_BANK_TRANSFER:
      return LOCAL_BANK_TRANSFER
    case KEY_DIGITAL_CURRENCY:
      return DIGITAL_CURRENCY
    case KEY_CREDIT_CARD:
      return CREDIT_CARD
    case KEY_EWALLET:
      return E_WALLET
    default:
      return categoryData
  }
}

export const getCategoryKey = (categoryName: CategoryName): CategoryKey | string => {
  switch (categoryName) {
    case LOCAL_BANK_TRANSFER:
      return KEY_LOCAL_BANK_TRANSFER
    case DIGITAL_CURRENCY:
      return KEY_DIGITAL_CURRENCY
    case CREDIT_CARD:
      return KEY_CREDIT_CARD
    case BANK_WIRE:
      return KEY_BANK_WIRE
    case E_WALLET:
      return KEY_EWALLET
    default:
      return categoryName
  }
}

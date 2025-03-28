export enum PAGE_VIEW_EVENTS {
  DASHBOARD = 'Viewing Dashboard Analytics',
  DEPOSIT = 'Viewing Deposit Page',
  WITHDRAWAL = 'Viewing Withdrawal Page',
  TRANSFER = 'Viewing Transfer Page',
  WALLET = 'Viewing Wallet Page',
  ACCOUNTS = 'Viewing Accounts Page',
  FINANCIAL_REPORT = 'Viewing Financial Report Page',
  TRADE_HISTORY_REPORT = 'Viewing Trade History Page',
  PERSONAL_INFO = 'Viewing Personal Information Page',
  ACCOUNT_VERIFICATION = 'Viewing Account Verification Page',
  PAYMENT_METHODS = 'Viewing Payment Method Page',
  SETTINGS = 'Viewing Settings Page',
  SIGNUP_SUCCESS = 'Viewing Registration Success Page',
  SIGNUP_SET_PW = 'Viewing Registration Set Password Last Step',
  SIGNUP = 'Viewing Registration 1st Step',
}

export enum BUTTON_EVENTS {
  DB_TO_ACCOUNTS = 'Create New Account Button Clicked',
  DB_TO_DEPOSIT = 'Deposit Button Clicked',
  DOWNLOAD_MT4 = 'Download MT4 Button Clicked',
  DEPOSIT = 'Deposit Button Clicked',
  DEPOSIT_CANCEL = 'Deposit Cancel Button Clicked',
  DEPOSIT_CONFIRM = 'Deposit Confirm Button Clicked',
  EMAIL_LOGIN_TAB = 'Login With Email Tab Clicked',
  MOBILE_LOGIN_TAB = 'Login With Mobile Tab Clicked',
  EMAIL_SIGNUP_TAB = 'Register With Email Tab Clicked',
  MOBILE_SIGNUP_TAB = 'Register With Mobile Tab Clicked',
  LOGOUT = 'Log out Button Clicked',
}

export enum LINK_EVENTS {
  FORGOT_PASSWORD = 'Forgot Password Link Clicked',
  SWITCH_TO_OTP = 'Switch to OTP Link Clicked',
  REFRESH_STATS = 'Refresh Stats Link Clicked',
  COPY_TEXT = 'Copy Text Link Clicked',
}

export enum ICON_EVENTS {
  SWITCH_ACC_DD = 'Viewing Switch Account Dropdown',
  SUB_SYSTEM_SWITCH = 'Viewing Subsystem Switch',
  LANGUAGE_DD = 'Viewing Language Dropdown',
}

export enum INPUT_EVENTS {
  REMEMBER_ME_CB = 'Remember Me Checkbox Clicked',
  CURRENCY_CHANGE_DD = 'Currency Changed',
  DEPOSIT_AMT_INPUT = 'Entering Deposit Amount',
}

export enum SUCCESS_EVENTS {
  DEPOSIT_SUBMISSION = 'Deposit Created Successfully',
}

export enum FAILURE_EVENTS {
  DEPOSIT_FAILURE = 'Deposit Process Failed',
}

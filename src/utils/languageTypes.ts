export const ENGLISH: string = 'english'
export const SIMPLIFIED_CHINESE: string = 'simpliefied_chinese'
export const TRADITIONAL_CHINESE: string = 'traditinal_chinese'
export const MALAY: string = 'malay'
export const VIETNAMESE: string = 'vietnamese'
export const UYGHUR: string = 'uyghur'
export const KAZAKH: string = 'kazakh'
export const KOREAN: string = 'korean'
export const RUSSIAN: string = 'russian'
export const THAI: string = 'thai'

export const EN: string = 'en'
export const CN: string = 'zh'
export const CN_HK: string = 'zh-hk'
export const MY: string = 'my'
export const VN: string = 'vi'
export const UG: string = 'ug'
export const KZ: string = 'kk'
export const KR: string = 'ko'
export const RU: string = 'ru'
export const TH: string = 'th'
export const ZH: string = 'zh'
export const ZH_TW: string = 'zh-tw'
export const MS: string = 'ms'
export const VI: string = 'vi'
export const KO: string = 'ko'
export const TW: string = 'tw'

export const localeToLang: { [key: string]: string } = {
  [EN]: ENGLISH,
  [CN]: SIMPLIFIED_CHINESE,
  [CN_HK]: TRADITIONAL_CHINESE,
  [MY]: MALAY,
  [VN]: VIETNAMESE,
  [UG]: UYGHUR,
  [KZ]: KAZAKH,
  [KR]: KOREAN,
  [RU]: RUSSIAN,
  [TH]: THAI,
}

const AcceptedLangs = [EN, CN, RU, TH, VN, KR]
// send language to user & document service for email trigger
export const langToService = (locale: string): string => {
  return localeToLang[locale] || ENGLISH
}

export const locales: string[] = Object.keys(localeToLang)

export const pspLang = (locale: string) => {
  return AcceptedLangs.includes(locale) ? locale : CN
}

export const languageMap: { [key: string]: any } = {
  [EN]: 'en-GB',
  [CN]: 'zh-CN',
  [CN_HK]: 'zh-HK',
  [MY]: 'ms-MY',
  [VN]: 'vi-VN',
  [UG]: 'ug-CN',
  [KR]: 'ko-KR',
  [TH]: 'th-TH',
  [KZ]: 'kk-KZ',
  [RU]: 'ru-RU',
}

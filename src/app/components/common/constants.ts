export const textMask: any = {
  maskTaxFileNumber: [/[0-9]/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, /\d/],
  maskPhoneNumber: [/[0-9]/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/],
  maskFaxNumber: [/[0-9]/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/],
  maskBSBNumber: [/[0-9]/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/],
  maskAccountNumber: [/[0-9]/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/],
  maskFundABN: [/[0-9]/, /\d/, ' ', /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/],
  maskTimeFormat: [/[0-2]/, /\d/, ':', /[0-5]/, /\d/],
  maskOnlyNumber: [/[1-9]/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/],
};

export const textMaskUserInformation: any = {
  maskMobileNumber: [/[0-9]/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/],
};

export const themeColorActions: any = {
  MENU_BAR: 1,
  MENU_TEXT: 2,
  HEADING_BAR: 3,
  HEADING_TEXT: 4
}

export const LOCALSTORE_KEY: any = {
  USER: 'USER',
  CHAR_LIST: 'CHAR_LIST',
  CHAR_CHOOSE: 'CHAR_CHOOSE',
  THEME_SETTING: 'THEME_SETTING',
  COUNTRY_ID: 'COUNTRY_ID'
}

import type { Lang } from '../types'

export type TranslationKey =
  | 'title'
  | 'subtitle'
  | 'currentPair'
  | 'positionParameters'
  | 'liveSynced'
  | 'accountBalance'
  | 'accountBalanceUsd'
  | 'riskPercentage'
  | 'stopLoss'
  | 'stopLossPips'
  | 'conservative'
  | 'aggressive'
  | 'resultLabel'
  | 'lotSizeUnit'
  | 'riskAmount'
  | 'riskOfEquity'
  | 'riskWarningTitle'
  | 'riskWarningBody'
  | 'invalidInput'
  | 'loading'
  | 'switchToLight'
  | 'switchToDark'

const en: Record<TranslationKey, string> = {
  title: 'Lot Size Calculator',
  subtitle: 'Precision risk management for high-frequency trading.',
  currentPair: 'Current Pair',
  positionParameters: 'Position Parameters',
  liveSynced: 'Live Synced',
  accountBalance: 'Account Balance',
  accountBalanceUsd: 'Account Balance (USD)',
  riskPercentage: 'Risk Percentage',
  stopLoss: 'Stop Loss',
  stopLossPips: 'Stop Loss (Pips)',
  conservative: 'Conservative (0.5%)',
  aggressive: 'Aggressive (5%+)',
  resultLabel: 'Recommended Lot Size',
  lotSizeUnit: 'LOTS',
  riskAmount: 'Total Risk Amount',
  riskOfEquity: '{percent}% of total equity',
  riskWarningTitle: 'Risk Warning:',
  riskWarningBody: `Trading foreign exchange on margin carries a high level of risk and may not be suitable for all investors. Ensure you fully understand the risks involved and take appropriate care to manage your exposure. Quantum's calculated lot sizes are based on user inputs and market estimates only.`,
  invalidInput: 'Enter valid balance and stop loss values',
  loading: 'Loading calculator…',
  switchToLight: 'Switch to light mode',
  switchToDark: 'Switch to dark mode',
}

const fa: Record<TranslationKey, string> = {
  title: 'محاسبه‌گر حجم معامله',
  subtitle: 'مدیریت دقیق ریسک برای معاملات پرتعداد.',
  currentPair: 'جفت‌ارز فعلی',
  positionParameters: 'پارامترهای پوزیشن',
  liveSynced: 'همگام زنده',
  accountBalance: 'موجودی حساب',
  accountBalanceUsd: 'موجودی حساب (دلار)',
  riskPercentage: 'درصد ریسک',
  stopLoss: 'حد ضرر',
  stopLossPips: 'حد ضرر (پیپ)',
  conservative: 'محافظه‌کار (۰.۵٪)',
  aggressive: 'تهاجمی (۵٪+)',
  resultLabel: 'حجم پیشنهادی معامله',
  lotSizeUnit: 'لات',
  riskAmount: 'کل مبلغ ریسک',
  riskOfEquity: '{percent}٪ از کل سرمایه',
  riskWarningTitle: 'هشدار ریسک:',
  riskWarningBody: 'معامله ارز خارجی با مارجین ریسک بالایی دارد و ممکن است برای همه سرمایه‌گذاران مناسب نباشد. اطمینان حاصل کنید که ریسک‌های مربوطه را کاملاً درک می‌کنید و مراقبت‌های لازم را برای مدیریت ریسک خود انجام می‌دهید. اندازه‌های لات محاسبه شده توسط کوانتوم فقط بر اساس ورودی‌های کاربر و تخمین‌های بازار است.',
  invalidInput: 'مقادیر معتبر برای موجودی و حد ضرر وارد کنید',
  loading: 'در حال بارگذاری…',
  switchToLight: 'تغییر به حالت روشن',
  switchToDark: 'تغییر به حالت تیره',
}

const catalogs: Record<Lang, Record<TranslationKey, string>> = { en, fa }

export function t(lang: Lang, key: TranslationKey): string {
  return catalogs[lang][key]
}

export function tReplace(
  lang: Lang,
  key: TranslationKey,
  vars: Record<string, string>,
): string {
  let text = t(lang, key)
  for (const [k, v] of Object.entries(vars)) {
    text = text.replace(`{${k}}`, v)
  }
  return text
}

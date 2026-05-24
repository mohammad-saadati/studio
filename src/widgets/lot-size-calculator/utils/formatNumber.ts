import type { Lang } from '../types'

const localeMap: Record<Lang, string> = {
  en: 'en-US',
  fa: 'fa-IR',
}

export function formatNumber(
  value: number,
  lang: Lang,
  options?: Intl.NumberFormatOptions,
): string {
  return new Intl.NumberFormat(localeMap[lang], {
    numberingSystem: lang === 'fa' ? 'arabext' : 'latn',
    maximumFractionDigits: 4,
    ...options,
  }).format(value)
}

export function formatCurrency(value: number, lang: Lang): string {
  return formatNumber(value, lang, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
}

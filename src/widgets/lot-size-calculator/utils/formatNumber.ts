import type { Lang } from '../types'

const localeMap: Record<Lang, string> = {
  en: 'en-US',
  fa: 'fa-IR',
}

function localizeDigits(value: string, lang: Lang): string {
  if (lang !== 'fa') return value
  return value.replace(/\d/g, (digit) =>
    String.fromCharCode(digit.charCodeAt(0) - 0x30 + 0x06F0),
  )
}

export function formatNumber(
  value: number,
  lang: Lang,
  options?: Intl.NumberFormatOptions,
): string {
  const formatted = new Intl.NumberFormat(localeMap[lang], {
    numberingSystem: lang === 'fa' ? 'arabext' : 'latn',
    maximumFractionDigits: 4,
    ...options,
  }).format(value)

  return localizeDigits(formatted, lang)
}

export function formatCurrency(value: number, lang: Lang): string {
  return formatNumber(value, lang, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
}

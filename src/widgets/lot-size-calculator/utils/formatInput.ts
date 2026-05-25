import type { Lang } from '../types'
import { formatNumber } from './formatNumber'

const ARABIC_INDIC_DIGIT_RE = /[\u0660-\u0669]/g
const PERSIAN_DIGIT_RE = /[\u06F0-\u06F9]/g
const ARABIC_DECIMAL_SEPARATOR_RE = /[\u066B]/g
const GROUPING_SEPARATOR_RE = /[,\u066C\u060C\u2009\u202F\u00A0]/g

function normalizeNumericInput(value: string): string {
  return value
    .trim()
    .replace(ARABIC_INDIC_DIGIT_RE, (digit) =>
      String.fromCharCode(digit.charCodeAt(0) - 0x0660 + 0x30),
    )
    .replace(PERSIAN_DIGIT_RE, (digit) =>
      String.fromCharCode(digit.charCodeAt(0) - 0x06F0 + 0x30),
    )
    .replace(ARABIC_DECIMAL_SEPARATOR_RE, '.')
    .replace(GROUPING_SEPARATOR_RE, '')
}

export function parseNumericInput(value: string): number {
  const normalized = normalizeNumericInput(value)
  return Number.parseFloat(normalized)
}

export function formatBalanceInput(value: string, lang: Lang): string {
  const num = parseNumericInput(value)
  if (!Number.isFinite(num)) return value
  return formatNumber(num, lang, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
}

export function formatStopLossInput(value: string, lang: Lang): string {
  const num = parseNumericInput(value)
  if (!Number.isFinite(num)) return value
  return formatNumber(num, lang, {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  })
}

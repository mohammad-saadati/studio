import type { Lang } from '../types'
import { formatNumber } from './formatNumber'

export function parseNumericInput(value: string): number {
  return Number.parseFloat(value.replace(/,/g, '').trim())
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

import type { SymbolOption } from '../types'

/**
 * Static mock pip values (proposal spec). Replace with API later.
 * Lot Size = (Balance × Risk%) / (Stop Loss × Pip Value)
 */
export const SYMBOLS: SymbolOption[] = [
  { id: 'EURUSD', label: 'EUR / USD', pipValue: 10 },
  { id: 'GBPUSD', label: 'GBP / USD', pipValue: 10 },
  { id: 'USDJPY', label: 'USD / JPY', pipValue: 9.1 },
  { id: 'XAUUSD', label: 'XAU / USD', pipValue: 1 },
]

export function getSymbolById(id: string): SymbolOption {
  return SYMBOLS.find((s) => s.id === id) ?? SYMBOLS[0]
}

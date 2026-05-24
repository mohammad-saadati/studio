export type Lang = 'fa' | 'en'
export type Theme = 'light' | 'dark'
export type Direction = 'rtl' | 'ltr'

export interface WidgetConfig {
  lang: Lang
  theme: Theme
  width: number
  height: number
  dir: Direction
}

export interface SymbolOption {
  id: string
  label: string
  pipValue: number
}

export interface LotCalculationInput {
  balance: number
  riskPercent: number
  stopLossPips: number
  pipValue: number
}

export interface LotCalculationResult {
  lotSize: number
  riskAmount: number
}

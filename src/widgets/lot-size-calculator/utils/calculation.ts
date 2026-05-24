import type { LotCalculationInput, LotCalculationResult } from '../types'

/**
 * Mock formula: Lot Size = (Balance × Risk%) / (Stop Loss × Pip Value)
 */
export function calculateLotSize(
  input: LotCalculationInput,
): LotCalculationResult | null {
  const { balance, riskPercent, stopLossPips, pipValue } = input

  if (
    balance <= 0 ||
    riskPercent <= 0 ||
    riskPercent > 100 ||
    stopLossPips <= 0 ||
    pipValue <= 0
  ) {
    return null
  }

  const riskAmount = (balance * riskPercent) / 100
  const denominator = stopLossPips * pipValue
  const lotSize = riskAmount / denominator

  return {
    lotSize,
    riskAmount,
  }
}

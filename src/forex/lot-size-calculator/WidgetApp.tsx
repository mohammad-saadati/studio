import { useMemo } from 'react'
import {
  LotSizeCalculator,
  parseWidgetConfig,
} from '../../widgets/lot-size-calculator'

export function WidgetApp() {
  const config = useMemo(() => parseWidgetConfig(), [])
  return <LotSizeCalculator config={config} />
}

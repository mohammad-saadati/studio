import type { CSSProperties } from 'react'
import type { Lang } from '../types'
import { t } from '../i18n/translations'
import { formatNumber } from '../utils/formatNumber'

export const RISK_MIN = 0.5
export const RISK_MAX = 5
export const RISK_STEP = 0.1

interface RiskSliderProps {
  lang: Lang
  value: number
  onChange: (value: number) => void
}

export function RiskSlider({ lang, value, onChange }: RiskSliderProps) {
  const percent = ((value - RISK_MIN) / (RISK_MAX - RISK_MIN)) * 100

  return (
    <div className="rbg-lsc__slider-block">
      <div className="rbg-lsc__slider-header">
        <span className="rbg-lsc-risk-slider__label">{t(lang, 'riskPercentage')}</span>
        <span className="rbg-lsc__slider-value">
          {formatNumber(value, lang, {
            minimumFractionDigits: 1,
            maximumFractionDigits: 1,
          })}
          %
        </span>
      </div>
      <div className="rbg-lsc__slider-track-wrap">
        <input
          type="range"
          className="rbg-lsc__slider"
          min={RISK_MIN}
          max={RISK_MAX}
          step={RISK_STEP}
          value={value}
          onChange={(e) => onChange(Number.parseFloat(e.target.value))}
          aria-valuemin={RISK_MIN}
          aria-valuemax={RISK_MAX}
          aria-valuenow={value}
          aria-label={t(lang, 'riskPercentage')}
          />
          {/* style={
            { '--rbg-lsc-slider-pct': `${percent}%` } as CSSProperties
          } */}
      </div>
      <div className="rbg-lsc__slider-legend">
        <span className='conservative-text'>{t(lang, 'conservative')}</span>
        <span className='aggressive-text'>{t(lang, 'aggressive')}</span>
      </div>
    </div>
  )
}

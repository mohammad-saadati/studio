import { useCallback, useMemo, useState, type ReactNode } from 'react'
import {
  IconResultsWatermark,
  IconChevronDown,
  IconPips,
  IconSliders,
  IconWallet,
  IconWarning,
} from './components/Icons'
import { RiskSlider } from './components/RiskSlider'
import { Skeleton } from './components/Skeleton'
import { ThemeToggle } from './components/ThemeToggle'
import { SYMBOLS } from './data/symbols'
import { useSimulatedLoading } from './hooks/useSimulatedLoading'
import { t, tReplace } from './i18n/translations'
import type { Theme, WidgetConfig } from './types'
import { calculateLotSize } from './utils/calculation'
import {
  formatBalanceInput,
  formatStopLossInput,
  parseNumericInput,
} from './utils/formatInput'
import { formatCurrency, formatNumber } from './utils/formatNumber'
import './LotSizeCalculator.css'

interface LotSizeCalculatorProps {
  config: WidgetConfig
}

const DEFAULT_BALANCE = 125000
const DEFAULT_STOP_LOSS = 25
const DEFAULT_RISK = 1.5

export function LotSizeCalculator({ config }: LotSizeCalculatorProps) {
  const { lang, width, height, dir } = config
  const [theme, setTheme] = useState<Theme>(config.theme)
  const loading = useSimulatedLoading()

  const [balance, setBalance] = useState(() =>
    formatBalanceInput(String(DEFAULT_BALANCE), lang),
  )
  const [riskPercent, setRiskPercent] = useState(DEFAULT_RISK)
  const [stopLoss, setStopLoss] = useState(() =>
    formatStopLossInput(String(DEFAULT_STOP_LOSS), lang),
  )
  const [symbolId, setSymbolId] = useState(SYMBOLS[0].id)

  const pipValue = useMemo(
    () => SYMBOLS.find((s) => s.id === symbolId)?.pipValue ?? 10,
    [symbolId],
  )

  const selectedSymbol = useMemo(
    () => SYMBOLS.find((s) => s.id === symbolId) ?? SYMBOLS[0],
    [symbolId],
  )

  const result = useMemo(
    () =>
      calculateLotSize({
        balance: parseNumericInput(balance),
        riskPercent,
        stopLossPips: parseNumericInput(stopLoss),
        pipValue,
      }),
    [balance, riskPercent, stopLoss, pipValue],
  )

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }, [])

  const narrow = width < 520
  const short = height < 420

  const balanceNum = parseNumericInput(balance)
  const stopLossNum = parseNumericInput(stopLoss)
  const hasValidInput =
    Number.isFinite(balanceNum) &&
    balanceNum > 0 &&
    Number.isFinite(stopLossNum) &&
    stopLossNum > 0

  const layoutClass = [
    narrow ? 'rbg-lsc--narrow' : '',
    short ? 'rbg-lsc--short' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div
      className={`rbg-lsc rbg-lsc--${theme}${loading ? ' rbg-lsc--loading' : ''}${layoutClass ? ` ${layoutClass}` : ''}`}
      dir={dir}
      lang={lang}
      style={{ width: `${width}px`, height: `${height}px` }}
      data-theme={theme}
      data-lang={lang}
    >
      <div className="rbg-lsc__inner">
        {loading ? (
          <Skeleton lang={lang} narrow={narrow} short={short} />
        ) : (
          <div className="rbg-lsc__content rbg-lsc__content--visible">
            <header className="rbg-lsc__header">
              <div className="rbg-lsc__header-text">
                <h1 className="rbg-lsc__title">{t(lang, 'title')}</h1>
                <p className="rbg-lsc__subtitle">{t(lang, 'subtitle')}</p>
              </div>
              <div className="rbg-lsc__header-actions">
                <div className="rbg-lsc__pair-pill">
                  <span className="rbg-lsc__pair-label">
                    {t(lang, 'currentPair')}
                  </span>
                  <select
                    id="rbg-lsc-symbol"
                    className="rbg-lsc__pair-native"
                    value={symbolId}
                    onChange={(e) => setSymbolId(e.target.value)}
                    aria-label={t(lang, 'currentPair')}
                  >
                    {SYMBOLS.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.label}
                      </option>
                    ))}
                  </select>
                  <span className="rbg-lsc__pair-value">
                    {selectedSymbol.label}
                  </span>
                  <IconChevronDown className="rbg-lsc__pair-chevron" />
                </div>
                <ThemeToggle theme={theme} lang={lang} onToggle={toggleTheme} />
              </div>
            </header>

            <section className="rbg-lsc__card" aria-labelledby="rbg-lsc-params-title">
              <div className="rbg-lsc__card-header">
                <div className="rbg-lsc__card-title-wrap">
                  <IconSliders className="rbg-lsc__card-icon" />
                  <h2 id="rbg-lsc-params-title" className="rbg-lsc__card-title">
                    {t(lang, 'positionParameters')}
                  </h2>
                </div>
                <span className="rbg-lsc__badge">{t(lang, 'liveSynced')}</span>
              </div>

              <div className="rbg-lsc__inputs-row">
                <InputField
                  id="rbg-lsc-balance"
                  label={t(lang, 'accountBalanceUsd')}
                  value={balance}
                  onChange={setBalance}
                  onBlur={() =>
                    setBalance((v) => formatBalanceInput(v, lang))
                  }
                  icon={<IconWallet />}
                />
                <InputField
                  id="rbg-lsc-stoploss"
                  label={t(lang, 'stopLossPips')}
                  value={stopLoss}
                  onChange={setStopLoss}
                  onBlur={() =>
                    setStopLoss((v) => formatStopLossInput(v, lang))
                  }
                  icon={<IconPips />}
                  inputMode="decimal"
                />
              </div>

              <RiskSlider
                lang={lang}
                value={riskPercent}
                onChange={setRiskPercent}
              />

              <div className="rbg-lsc__results" aria-live="polite">
                <IconResultsWatermark className="rbg-lsc__results-watermark" />
                <div className="rbg-lsc__results-left">
                  <span className="rbg-lsc__results-label">
                    {t(lang, 'resultLabel')}
                  </span>
                  {result && hasValidInput ? (
                    <p className="rbg-lsc__lot-display">
                      <span className="rbg-lsc__lot-number">
                        {formatNumber(result.lotSize, lang, {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                      </span>
                      <span className="rbg-lsc__lot-unit">
                        {t(lang, 'lotSizeUnit')}
                      </span>
                    </p>
                  ) : (
                    <p className="rbg-lsc__lot-display rbg-lsc__lot-display--empty">
                      <span className="rbg-lsc__lot-number">—</span>
                    </p>
                  )}
                </div>
                <div className="rbg-lsc__results-right">
                  <span className="rbg-lsc__results-label rbg-lsc__results-label--muted total-result-risk-amount">
                    {t(lang, 'riskAmount')}
                  </span>
                  {result && hasValidInput ? (
                    <>
                      <p className="rbg-lsc__risk-value">
                        −${formatCurrency(result.riskAmount, lang)}
                      </p>
                      <span className="rbg-lsc__risk-note">
                        {tReplace(lang, 'riskOfEquity', {
                          percent: formatNumber(riskPercent, lang, {
                            minimumFractionDigits: 1,
                            maximumFractionDigits: 1,
                          }),
                        })}
                      </span>
                    </>
                  ) : (
                    <p className="rbg-lsc__risk-value rbg-lsc__risk-value--empty">
                      —
                    </p>
                  )}
                </div>
              </div>

              {!hasValidInput && (
                <p className="rbg-lsc__inline-error" role="status">
                  {t(lang, 'invalidInput')}
                </p>
              )}
            </section>

            <aside className="rbg-lsc__warning">
              <IconWarning className="rbg-lsc__warning-icon" />
              <div className="rbg-lsc__warning-text">
                <strong>{t(lang, 'riskWarningTitle')}</strong>
                <p>{t(lang, 'riskWarningBody')}</p>
              </div>
            </aside>
          </div>
        )}
      </div>
    </div>
  )
}

interface InputFieldProps {
  id: string
  label: string
  value: string
  onChange: (v: string) => void
  onBlur?: () => void
  icon: ReactNode
  inputMode?: 'decimal' | 'numeric'
}

function InputField({
  id,
  label,
  value,
  onChange,
  onBlur,
  icon,
  inputMode = 'decimal',
}: InputFieldProps) {
  return (
    <div className="rbg-lsc__field">
      <label className="rbg-lsc__label" htmlFor={id}>
        {label}
      </label>
      <div className="rbg-lsc__input-wrap">
        <input
          id={id}
          className="rbg-lsc__input"
          type="text"
          inputMode={inputMode}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onBlur={onBlur}
          autoComplete="off"
        />
        <span className="rbg-lsc__input-icon">{icon}</span>
      </div>
    </div>
  )
}

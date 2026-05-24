import { WIDGET_DEFAULTS } from '../constants'
import type { Lang, Theme, WidgetConfig } from '../types'

function parseLang(value: string | null): Lang {
  if (value === 'fa' || value === 'en') return value
  return WIDGET_DEFAULTS.lang
}

function parseTheme(value: string | null): Theme {
  if (value === 'light' || value === 'dark') return value
  return WIDGET_DEFAULTS.theme
}

function clampDimension(
  raw: string | null,
  fallback: number,
  min: number,
  max: number,
): number {
  if (!raw) return fallback
  const parsed = Number.parseInt(raw, 10)
  if (!Number.isFinite(parsed) || parsed <= 0) return fallback
  return Math.min(max, Math.max(min, parsed))
}

export function parseWidgetConfig(
  search = typeof window !== 'undefined' ? window.location.search : '',
): WidgetConfig {
  const params = new URLSearchParams(search)
  const lang = parseLang(params.get('lang'))
  const theme = parseTheme(params.get('theme'))
  const width = clampDimension(
    params.get('width'),
    WIDGET_DEFAULTS.width,
    WIDGET_DEFAULTS.minWidth,
    WIDGET_DEFAULTS.maxWidth,
  )
  const height = clampDimension(
    params.get('height'),
    WIDGET_DEFAULTS.height,
    WIDGET_DEFAULTS.minHeight,
    WIDGET_DEFAULTS.maxHeight,
  )

  return {
    lang,
    theme,
    width,
    height,
    dir: lang === 'fa' ? 'rtl' : 'ltr',
  }
}

/** Production widget path (see proposal URL scheme). */
export const WIDGET_PATH = '/forex/lot-size-calculator'

export const WIDGET_DEFAULTS = {
  lang: 'en' as const,
  theme: 'dark' as const,
  width: 800,
  height: 400,
  minWidth: 280,
  maxWidth: 1200,
  minHeight: 280,
  maxHeight: 900,
} as const

/** Employer-required preview sizes. */
export const WIDGET_SIZE_PRESETS = [
  { label: '800 × 400', width: 800, height: 400 },
  { label: '600 × 350', width: 600, height: 350 },
  { label: '360 × 500', width: 360, height: 500 },
] as const

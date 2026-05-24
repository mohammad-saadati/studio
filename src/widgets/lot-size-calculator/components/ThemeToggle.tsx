import type { Lang, Theme } from '../types'
import { t } from '../i18n/translations'
import { IconMoon, IconSun } from './Icons'

interface ThemeToggleProps {
  theme: Theme
  lang: Lang
  onToggle: () => void
}

export function ThemeToggle({ theme, lang, onToggle }: ThemeToggleProps) {
  const isDark = theme === 'dark'
  return (
    <button
      type="button"
      className="rbg-lsc__theme-toggle"
      onClick={onToggle}
      aria-label={t(lang, isDark ? 'switchToLight' : 'switchToDark')}
      title={t(lang, isDark ? 'switchToLight' : 'switchToDark')}
    >
      {isDark ? <IconSun /> : <IconMoon />}
    </button>
  )
}

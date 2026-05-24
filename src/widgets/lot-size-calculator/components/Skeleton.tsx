import { t } from '../i18n/translations'
import type { Lang } from '../types'

interface SkeletonProps {
  lang: Lang
  narrow?: boolean
  short?: boolean
}

export function Skeleton({ lang, narrow, short }: SkeletonProps) {
  const layoutClass = [
    narrow ? 'rbg-lsc-skeleton--narrow' : '',
    short ? 'rbg-lsc-skeleton--short' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div
      className={`rbg-lsc-skeleton${layoutClass ? ` ${layoutClass}` : ''}`}
      role="status"
      aria-busy="true"
      aria-label={t(lang, 'loading')}
    >
      <div className="rbg-lsc-skeleton__top">
        <div>
          <span className="rbg-lsc-skeleton__line rbg-lsc-skeleton__line--title" />
          <span className="rbg-lsc-skeleton__line rbg-lsc-skeleton__line--sub" />
        </div>
        <span className="rbg-lsc-skeleton__line rbg-lsc-skeleton__line--pill" />
      </div>
      <div className="rbg-lsc-skeleton__card">
        <span className="rbg-lsc-skeleton__line rbg-lsc-skeleton__line--title" />
        <div className="rbg-lsc-skeleton__row">
          <span className="rbg-lsc-skeleton__line rbg-lsc-skeleton__line--input" /> 
          <span className="rbg-lsc-skeleton__line rbg-lsc-skeleton__line--input" />
        </div>
        <span className="rbg-lsc-skeleton__line rbg-lsc-skeleton__line--slider" />
        <span className="rbg-lsc-skeleton__line rbg-lsc-skeleton__line--result" />
      </div>
      <span className="rbg-lsc-skeleton__line rbg-lsc-skeleton__line--warn" />
    </div>
  )
}

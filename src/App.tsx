import { useMemo, useState } from 'react'
import {
  WIDGET_PATH,
  WIDGET_SIZE_PRESETS,
} from './widgets/lot-size-calculator'
import './App.css'

const PRODUCTION_ORIGIN = 'https://widgets.rebategane.com'

function buildWidgetUrl(
  lang: string,
  theme: string,
  width: number,
  height: number,
): string {
  const params = new URLSearchParams({
    lang,
    theme,
    width: String(width),
    height: String(height),
  })
  return `${WIDGET_PATH}/?${params.toString()}`
}

function App() {
  const [lang, setLang] = useState<'fa' | 'en'>('fa')
  const [theme, setTheme] = useState<'light' | 'dark'>('dark')
  const [width, setWidth] = useState(800)
  const [height, setHeight] = useState(400)

  const iframeSrc = useMemo(
    () => buildWidgetUrl(lang, theme, width, height),
    [lang, theme, width, height],
  )

  const productionUrl = `${PRODUCTION_ORIGIN}${iframeSrc}`

  return (
    <div className="demo">
      <header className="demo__header">
        <h1>LOT Size Calculator — Embed Demo</h1>
        <p>
          ویجت embed برای سایت‌های third-party. مسیر production مطابق پروپوزال:{' '}
          <code>{WIDGET_PATH}</code>
        </p>
      </header>

      <section className="demo__controls" aria-label="Widget preview controls">
        <label>
          Language
          <select
            value={lang}
            onChange={(e) => setLang(e.target.value as 'fa' | 'en')}
          >
            <option value="en">English (LTR)</option>
            <option value="fa">فارسی (RTL)</option>
          </select>
        </label>
        <label>
          Theme
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value as 'light' | 'dark')}
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </label>
        <label>
          Width
          <input
            type="number"
            min={280}
            max={1200}
            value={width}
            onChange={(e) => setWidth(Number(e.target.value))}
          />
        </label>
        <label>
          Height
          <input
            type="number"
            min={280}
            max={900}
            value={height}
            onChange={(e) => setHeight(Number(e.target.value))}
          />
        </label>
        <div className="demo__presets">
          {WIDGET_SIZE_PRESETS.map((p) => (
            <button
              key={p.label}
              type="button"
              onClick={() => {
                setWidth(p.width)
                setHeight(p.height)
              }}
            >
              {p.label}
            </button>
          ))}
        </div>
      </section>

      <section className="demo__preview">
        <iframe
          key={iframeSrc}
          src={iframeSrc}
          title="LOT Size Calculator Preview"
          width={width}
          height={height}
          style={{ border: '1px solid #334155', borderRadius: 8 }}
        />
      </section>

      <section className="demo__url">
        <h2>Direct URL (local)</h2>
        <code>{window.location.origin + iframeSrc}</code>
        <h2>Direct URL (production example)</h2>
        <code>{productionUrl}</code>
      </section>

      <section className="demo__embed">
        <h2>Embed — iframe (recommended)</h2>
        <pre>{`<iframe
  src="${productionUrl}"
  width="${width}"
  height="${height}"
  style="border:0"
  title="LOT Size Calculator"
  loading="lazy"
></iframe>`}</pre>
        <h2>Embed — script loader</h2>
        <pre>{`<div id="lot-size-widget"></div>
<script
  src="${PRODUCTION_ORIGIN}/embed/lot-size-calculator.js"
  data-target="lot-size-widget"
  data-lang="${lang}"
  data-theme="${theme}"
  data-width="${width}"
  data-height="${height}"
  data-base-url="${PRODUCTION_ORIGIN}"
></script>`}</pre>
      </section>
    </div>
  )
}

export default App

# LOT Size Calculator Widget

Embeddable third-party widget for forex position sizing (Rebategane widget suite).

**Stack:** React + Vite — chosen for maintainability (i18n, theming, components), small production bundle, and simple iframe/script embedding without polluting host pages.

## Quick start

```bash
npm install
npm run dev
```

| URL | Purpose |
|-----|---------|
| `/` | Embed demo with live controls |
| `/forex/lot-size-calculator/?lang=fa&theme=dark&width=800&height=400` | Standalone widget |

Production URL example (from project brief):

`https://widgets.rebategane.com/forex/lot-size-calculator?lang=fa&theme=dark&width=800&height=400`

## Query parameters

| Param | Values | Default | Invalid fallback |
|-------|--------|---------|------------------|
| `lang` | `fa`, `en` | `en` | `en` |
| `theme` | `light`, `dark` | `dark` | `dark` |
| `width` | 280–1200 (px) | `800` | `800` |
| `height` | 280–900 (px) | `400` | `400` |

Theme is set via `?theme=light|dark` and can be toggled in the widget header (session override).

## Required test sizes

Verify layout at:

- `800×400`
- `600×350`
- `360×500`

Use the preset buttons on the demo page (`/`).

## Features (project brief)

| Requirement | Implementation |
|-------------|----------------|
| Multi language (fa/en, RTL/LTR) | `i18n/translations.ts`, `dir` from `lang` |
| Dynamic theme (light/dark) | CSS variables on `.rbg-lsc--light` / `--dark` |
| Dynamic size | `width` / `height` query params |
| Loading skeleton | 500–1200ms simulated delay, theme-aware |
| Static / mock mode | No API; mock pip values in `data/symbols.ts` |
| Third-party safe | Scoped `.rbg-lsc` styles; iframe or script loader |
| Live calculation | `Lot = (Balance × Risk%) / (Stop Loss × Pip Value)` |

### Fields

- Account Balance (USD)
- Risk Percentage (slider)
- Stop Loss (Pips)
- Currency Pair / Symbol
- Result: Lot Size (+ risk amount display)

### Mock pip values

| Symbol | Pip value |
|--------|-----------|
| EURUSD | 10 |
| GBPUSD | 10 |
| USDJPY | 9.1 |
| XAUUSD | 1 |

## Embed options

### iframe (recommended — full CSS isolation)

```html
<iframe
  src="https://widgets.rebategane.com/forex/lot-size-calculator/?lang=fa&theme=dark&width=800&height=400"
  width="800"
  height="400"
  style="border:0"
  title="LOT Size Calculator"
  loading="lazy"
></iframe>
```

### Script loader

Injects an iframe; does not modify `window` except appending to the target container.

```html
<div id="lot-size-widget"></div>
<script
  src="https://widgets.rebategane.com/embed/lot-size-calculator.js"
  data-target="lot-size-widget"
  data-lang="fa"
  data-theme="dark"
  data-width="800"
  data-height="400"
  data-base-url="https://widgets.rebategane.com"
></script>
```

## Architecture

```
src/widgets/lot-size-calculator/
  ├── i18n/                 # fa / en strings
  ├── data/symbols.ts       # Static pip values (API-ready swap later)
  ├── utils/
  │   ├── queryParams.ts    # URL parsing + fallbacks
  │   ├── calculation.ts    # Mock formula
  │   └── formatNumber.ts   # Locale-aware numbers (incl. fa digits)
  ├── LotSizeCalculator.tsx
  └── LotSizeCalculator.css # Theme tokens as CSS variables

forex/lot-size-calculator/  # Standalone HTML entry
public/embed/               # Script loader (copied to dist on build)
```

- **No global CSS leakage:** all styles under `.rbg-lsc`
- **Responsive:** `narrow` (width &lt; 520px) and `short` (height &lt; 420px) modifiers
- **Accessibility:** labels, focus rings, `aria-live` on results, keyboard-friendly range input

## Build

```bash
npm run build
npm run preview
```

Outputs: demo app + `dist/forex/lot-size-calculator/index.html` + `dist/embed/lot-size-calculator.js`.

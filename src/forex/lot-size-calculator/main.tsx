import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { WidgetApp } from './WidgetApp'

const mount = document.getElementById('rbg-lsc-root')
if (mount) {
  createRoot(mount).render(
    <StrictMode>
      <WidgetApp />
    </StrictMode>,
  )
}

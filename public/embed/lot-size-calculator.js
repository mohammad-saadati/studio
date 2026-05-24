/**
 * Rebategane LOT Size Calculator — third-party embed loader
 *
 * Inserts an iframe pointing at the widget URL. No globals are modified.
 *
 * Usage:
 * <div id="my-widget"></div>
 * <script src="https://widgets.rebategane.com/embed/lot-size-calculator.js"
 *   data-target="my-widget"
 *   data-lang="fa"
 *   data-theme="dark"
 *   data-width="800"
 *   data-height="400"
 *   data-base-url="https://widgets.rebategane.com"
 * ></script>
 */
;(function () {
  'use strict'

  var script = document.currentScript
  if (!script) return

  var targetId = script.getAttribute('data-target') || 'rbg-lot-size-calculator'
  var lang = script.getAttribute('data-lang') || 'en'
  var theme = script.getAttribute('data-theme') || 'dark'
  var width = script.getAttribute('data-width') || '800'
  var height = script.getAttribute('data-height') || '400'
  var baseUrl =
    script.getAttribute('data-base-url') ||
    new URL(script.src).origin

  var container = document.getElementById(targetId)
  if (!container) {
    console.warn('[RBG Widget] Target element not found:', targetId)
    return
  }

  var params = new URLSearchParams({
    lang: lang,
    theme: theme,
    width: width,
    height: height,
  })

  var iframe = document.createElement('iframe')
  iframe.src =
    baseUrl.replace(/\/$/, '') +
    '/forex/lot-size-calculator/?' +
    params.toString()
  iframe.title = 'LOT Size Calculator'
  iframe.setAttribute('loading', 'lazy')
  iframe.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin')
  iframe.style.cssText =
    'border:0;width:' +
    width +
    'px;height:' +
    height +
    'px;max-width:100%;display:block;'
  iframe.setAttribute('allowtransparency', 'true')

  container.appendChild(iframe)
})()

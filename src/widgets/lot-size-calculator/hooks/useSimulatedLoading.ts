import { useEffect, useState } from 'react'

const MIN_DELAY_MS = 500
const MAX_DELAY_MS = 1200

function randomDelay(): number {
  return (
    MIN_DELAY_MS +
    Math.floor(Math.random() * (MAX_DELAY_MS - MIN_DELAY_MS + 1))
  )
}

export function useSimulatedLoading(): boolean {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const delay = randomDelay()
    const timer = window.setTimeout(() => setLoading(false), delay)
    return () => window.clearTimeout(timer)
  }, [])

  return loading
}

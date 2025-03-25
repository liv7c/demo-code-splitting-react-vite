import {useEffect, useState} from 'react'

const QUERY = '(prefers-reduced-motion: reduce)'

const getInitialState = () => window.matchMedia(QUERY).matches

export function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] =
    useState(getInitialState)

  useEffect(() => {
    const mediaQueryList = window.matchMedia(QUERY)

    const listener = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches)
    }

    mediaQueryList.addEventListener('change', listener)

    return () => {
      mediaQueryList.removeEventListener('change', listener)
    }
  }, [])

  return prefersReducedMotion
}

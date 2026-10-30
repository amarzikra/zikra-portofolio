'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'

const easeOutExpo = (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t))

export function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.09,
      smoothWheel: true,
      autoRaf: false,
    })

    let frame = 0
    const raf = (time: number) => {
      lenis.raf(time)
      frame = requestAnimationFrame(raf)
    }
    frame = requestAnimationFrame(raf)

    const onClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return
      }

      const target = event.target
      const anchor =
        target instanceof Element ? target.closest<HTMLAnchorElement>('a[href^="#"]') : null
      const hash = anchor?.getAttribute('href')
      if (!hash || hash === '#') return

      const element = document.getElementById(decodeURIComponent(hash.slice(1)))
      if (!element) return

      event.preventDefault()

      if (hash === '#main') {
        element.focus({ preventScroll: true })
      }

      requestAnimationFrame(() => {
        lenis.scrollTo(element, {
          duration: 1.25,
          easing: easeOutExpo,
        })
      })

      if (window.location.hash !== hash) {
        window.history.pushState(null, '', hash)
      }
    }

    document.addEventListener('click', onClick)

    return () => {
      document.removeEventListener('click', onClick)
      cancelAnimationFrame(frame)
      lenis.destroy()
    }
  }, [])

  return null
}

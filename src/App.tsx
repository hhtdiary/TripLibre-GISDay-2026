import { useCallback, useEffect, useRef, useState } from 'react'
import { SLIDES } from './slides'

const W = 1920
const H = 1080

function fromHash() {
  const n = parseInt(location.hash.replace('#', ''), 10)
  return Number.isFinite(n) ? Math.min(Math.max(n, 1), SLIDES.length) - 1 : 0
}

export default function App() {
  const [i, setI] = useState(fromHash)
  const [notes, setNotes] = useState(false)
  const [scale, setScale] = useState(1)
  const wrap = useRef<HTMLDivElement>(null)

  const go = useCallback((n: number) => setI(Math.min(Math.max(n, 0), SLIDES.length - 1)), [])

  useEffect(() => {
    const fit = () => setScale(Math.min(innerWidth / W, innerHeight / H))
    fit()
    addEventListener('resize', fit)
    return () => removeEventListener('resize', fit)
  }, [])

  useEffect(() => {
    const onHash = () => setI(fromHash())
    addEventListener('hashchange', onHash)
    return () => removeEventListener('hashchange', onHash)
  }, [])

  useEffect(() => {
    history.replaceState(null, '', `#${i + 1}`)
    document.title = `${i + 1}/${SLIDES.length} · ${SLIDES[i].title}`
  }, [i])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return
      switch (e.key) {
        case 'ArrowRight': case 'ArrowDown': case 'PageDown': case ' ': case 'Enter':
          e.preventDefault(); go(i + 1); break
        case 'ArrowLeft': case 'ArrowUp': case 'PageUp': case 'Backspace':
          e.preventDefault(); go(i - 1); break
        case 'Home': go(0); break
        case 'End': go(SLIDES.length - 1); break
        case 'n': case 'N': setNotes(v => !v); break
        case 'f': case 'F':
          if (document.fullscreenElement) document.exitFullscreen()
          else document.documentElement.requestFullscreen?.()
          break
      }
    }
    addEventListener('keydown', onKey)
    return () => removeEventListener('keydown', onKey)
  }, [i, go])

  const touch = useRef<number | null>(null)
  const S = SLIDES[i]

  return (
    <div
      className="viewport"
      ref={wrap}
      onTouchStart={e => (touch.current = e.touches[0].clientX)}
      onTouchEnd={e => {
        if (touch.current == null) return
        const dx = e.changedTouches[0].clientX - touch.current
        if (Math.abs(dx) > 50) go(i + (dx < 0 ? 1 : -1))
        touch.current = null
      }}
    >
      <div className="stage" style={{ width: W, height: H, transform: `translate(-50%,-50%) scale(${scale})` }}>
        <section key={i} className={`slide ${S.className ?? ''}`} aria-label={S.title}>
          {S.render()}
        </section>
        {!S.noBrand && <img className="brand" src="./assets/weitzman-logo.svg" alt="Stuart Weitzman School of Design, University of Pennsylvania" />}
        <div className="progress" style={{ width: `${((i + 1) / SLIDES.length) * 100}%` }} />
        <div className="counter">{String(i + 1).padStart(2, '0')} / {SLIDES.length}</div>
      </div>

      <nav className="nav" aria-label="Slide navigation">
        <button onClick={() => go(i - 1)} disabled={i === 0} aria-label="Previous slide">←</button>
        <button onClick={() => setNotes(v => !v)} aria-pressed={notes}>Notes</button>
        <button onClick={() => go(i + 1)} disabled={i === SLIDES.length - 1} aria-label="Next slide">→</button>
      </nav>

      {notes && (
        <aside className="notes">
          <b>{i + 1}. {S.title}</b>
          <p>{S.notes}</p>
        </aside>
      )}
    </div>
  )
}

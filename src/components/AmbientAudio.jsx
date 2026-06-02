import { useEffect, useRef, useState } from 'react'

const AmbientAudio = ({ src }) => {
  const audioRef = useRef(null)
  const [needsUnlock, setNeedsUnlock] = useState(false)

  const attemptPlay = () => {
    const audio = audioRef.current
    if (!audio) return
    const playPromise = audio.play()
    if (playPromise && typeof playPromise.then === 'function') {
      playPromise
        .then(() => setNeedsUnlock(false))
        .catch(() => setNeedsUnlock(true))
    }
  }

  useEffect(() => {
    if (document.readyState === 'complete') {
      attemptPlay()
    } else {
      window.addEventListener('load', attemptPlay)
    }

    return () => {
      window.removeEventListener('load', attemptPlay)
    }
  }, [])

  useEffect(() => {
    if (!needsUnlock) return undefined
    const onUnlock = () => attemptPlay()
    window.addEventListener('pointerdown', onUnlock, { once: true })
    window.addEventListener('keydown', onUnlock, { once: true })

    return () => {
      window.removeEventListener('pointerdown', onUnlock)
      window.removeEventListener('keydown', onUnlock)
    }
  }, [needsUnlock])

  if (!src) return null

  return (
    <>
      <audio
        ref={audioRef}
        className="ambient-audio"
        src={src}
        loop
        preload="auto"
        playsInline
        aria-hidden="true"
      />
      {needsUnlock && (
        <button className="audio-unlock" type="button" onClick={attemptPlay}>
          Enable audio
        </button>
      )}
    </>
  )
}

export default AmbientAudio

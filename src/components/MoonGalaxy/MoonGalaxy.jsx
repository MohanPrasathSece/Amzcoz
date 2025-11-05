import React, { useEffect, useRef } from 'react'
import './MoonGalaxy.css'

const MoonGalaxy = ({ className = '' }) => {
  const containerClassName = ['moon-container', className].filter(Boolean).join(' ')
  const videoRef = useRef(null)

  useEffect(() => {
    const handleVisibility = () => {
      const video = videoRef.current
      if (!video) return
      if (document.hidden) {
        try {
          video.pause()
          video.currentTime = 0
        } catch {}
      } else {
        // Attempt to resume playback when visible
        video.play().catch(() => {})
      }
    }

    document.addEventListener('visibilitychange', handleVisibility)
    // Run once on mount to set initial state
    handleVisibility()
    return () => {
      document.removeEventListener('visibilitychange', handleVisibility)
    }
  }, [])

  return (
    <div className={containerClassName}>
      <video
        ref={videoRef}
        src={"/WhatsApp Video 2025-10-31 at 23.37.36.mp4"}
        className="moon-video"
        autoPlay
        muted
        loop
        playsInline
        preload="none"
      />
    </div>
  )
}

export default MoonGalaxy

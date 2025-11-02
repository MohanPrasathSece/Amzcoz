import React from 'react'
import './MoonGalaxy.css'

const MoonGalaxy = ({ className = '' }) => {
  const containerClassName = ['moon-container', className].filter(Boolean).join(' ')

  return (
    <div className={containerClassName}>
      <video
        src={"/WhatsApp Video 2025-10-31 at 23.37.36.mp4"}
        className="moon-video"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
    </div>
  )
}

export default MoonGalaxy

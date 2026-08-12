import React, { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Preloader.css'

const Preloader = ({ onLoadingComplete }) => {
  const [isVisible, setIsVisible] = useState(true)
  const videoRef = useRef(null)
  const isMobile = window.innerWidth <= 768

  const videoSrc = isMobile ? '/landing mobile.mp4' : '/landing pc.mp4'

  const handleDone = () => {
    if (onLoadingComplete) onLoadingComplete()
    setIsVisible(false)
  }

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // When video ends, fade out
    const onEnded = () => handleDone()
    video.addEventListener('ended', onEnded)

    // Fallback: skip after 10s if video stalls
    const fallback = setTimeout(() => handleDone(), 10000)

    video.play().catch(() => {
      // Autoplay blocked — skip preloader immediately
      handleDone()
    })

    return () => {
      video.removeEventListener('ended', onEnded)
      clearTimeout(fallback)
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="preloader-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          <video
            ref={videoRef}
            className="preloader-video"
            src={videoSrc}
            muted
            playsInline
            preload="auto"
          />

          {/* Cover baked-in watermark at bottom-right of video */}
          <div className="preloader-watermark-cover" />

          {/* Skip button */}
          <button className="preloader-skip" onClick={handleDone}>
            Skip ›
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Preloader

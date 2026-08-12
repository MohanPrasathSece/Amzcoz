import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Preloader.css'

const Preloader = ({ onLoadingComplete }) => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Show preloader for 2.5 seconds
    const timer = setTimeout(() => {
      // Call complete callback right before exit animation starts so the page is ready underneath
      if (onLoadingComplete) onLoadingComplete()
      setIsVisible(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [onLoadingComplete])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="preloader-overlay"
          initial={{ y: 0 }}
          exit={{ y: '-100vh' }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          <motion.div
            className="glass-loader-card"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            <div className="loader-logo-wrapper">
              <span className="loader-logo-text">AMZ</span>
              <span className="loader-logo-highlight">COZ</span>
            </div>

            <div className="loader-progress-track">
              <motion.div
                className="loader-progress-bar"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 2.2, ease: 'easeInOut' }}
              />
            </div>
            
            <p className="loader-text">Optimizing your growth...</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Preloader

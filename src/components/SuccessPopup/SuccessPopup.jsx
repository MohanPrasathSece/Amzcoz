import React, { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FaCheckCircle } from 'react-icons/fa'
import Button from '../Button/Button'
import './SuccessPopup.css'

const SuccessPopup = ({ isOpen, onClose, submission }) => {
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose?.()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  const firstName = submission?.name?.split(' ')[0] || 'there'
  const serviceLabel = submission?.serviceType
  const platformLabel = submission?.platform

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="success-popup-wrapper" role="dialog" aria-modal="true">
          <motion.div
            className="success-popup-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.div
            className="success-popup"
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', stiffness: 220, damping: 20 }}
          >
            <FaCheckCircle className="success-popup-icon" />
            <h3>Booking Confirmed!</h3>
            <p>
              Thanks {firstName}! We&apos;ve received your booking
              {serviceLabel ? ` for ${serviceLabel}` : ''}
              {platformLabel ? ` on ${platformLabel}` : ''}. Our team will connect with you within 24 hours.
            </p>
            <div className="success-popup-actions">
              <Button variant="primary" size="medium" onClick={onClose}>
                Got it
              </Button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

export default SuccessPopup

import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './Button.css'

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  onClick, 
  to, 
  href,
  type = 'button',
  disabled = false,
  fullWidth = false,
  icon,
  iconPosition = 'left',
  className = ''
}) => {
  const buttonClass = `btn btn-${variant} btn-${size} ${fullWidth ? 'btn-full' : ''} ${className}`

  const buttonContent = (
    <>
      {icon && iconPosition === 'left' && <span className="btn-icon btn-icon-left">{icon}</span>}
      <span className="btn-text">{children}</span>
      {icon && iconPosition === 'right' && <span className="btn-icon btn-icon-right">{icon}</span>}
    </>
  )

  const MotionButton = motion.button
  const MotionLink = motion(Link)
  const MotionA = motion.a

  const motionProps = {
    whileHover: { scale: 1 },
    whileTap: { scale: disabled ? 1 : 0.98 },
    transition: { type: 'spring', stiffness: 400, damping: 17 }
  }

  if (to && !disabled) {
    return (
      <MotionLink to={to} className={buttonClass} {...motionProps}>
        {buttonContent}
      </MotionLink>
    )
  }

  if (href && !disabled) {
    return (
      <MotionA href={href} className={buttonClass} target="_blank" rel="noopener noreferrer" {...motionProps}>
        {buttonContent}
      </MotionA>
    )
  }

  return (
    <MotionButton
      type={type}
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}
      {...motionProps}
    >
      {buttonContent}
    </MotionButton>
  )
}

export default Button

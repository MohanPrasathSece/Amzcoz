import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Button from '../Button/Button'
import './LeadForm.css'
import emailjs from '@emailjs/browser'

const LeadForm = ({ onSuccess, variant = 'default' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    platform: '',
    storeLink: '',
    category: '',
    challenges: '',
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [formStatus, setFormStatus] = useState(null)

  const serviceTypes = [
    'E-commerce Management',
    'Advertising & Marketing',
    'Brand Enhancement',
    'Website Development',
    'E-commerce Website',
    'Social Media Marketing',
    'Other',
  ]

  const platforms = [
    'Amazon',
    'Flipkart',
    'Myntra',
    'Ajio',
    'Jio Mart',
    'Meesho',
    'Other',
  ]

  const categories = [
    'Electronics',
    'Fashion & Apparel',
    'Home & Kitchen',
    'Beauty & Personal Care',
    'Sports & Outdoors',
    'Toys & Games',
    'Books & Media',
    'Health & Wellness',
    'Automotive',
    'Other',
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
    if (formStatus) {
      setFormStatus(null)
    }
    if (isSuccess) {
      setIsSuccess(false)
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format'
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (!/^\+?[\d\s-()]+$/.test(formData.phone)) {
      newErrors.phone = 'Invalid phone number'
    }

    if (!formData.serviceType) {
      newErrors.serviceType = 'Please select a service type'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setFormStatus(null)
    setIsSuccess(false)

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey) {
      setFormStatus({
        type: 'error',
        message: 'Email service is not configured. Please add EmailJS keys to your environment.'
      })
      setIsSubmitting(false)
      return
    }

    const emailBodyLines = [
      `Hi ${formData.name || 'there'},`,
      '',
      "Thanks for booking a strategy session with AMZCOZ! This email confirms we've received your request and our specialists will be in touch within 24 hours to schedule the call.",
      '',
      'Booking summary:',
      `• Service requested: ${formData.serviceType}`,
      `• Preferred platform: ${formData.platform || 'Not specified'}`,
      formData.storeLink ? `• Store / website: ${formData.storeLink}` : null,
      formData.category ? `• Category: ${formData.category}` : null,
      '',
      'Project details provided:',
      formData.challenges ? formData.challenges : 'No additional notes were added.',
      '',
      'If you need to make any changes, simply reply to this email or call us at +91 98765 43210.',
      '',
      'We look forward to partnering on your Amazon growth!',
      '',
      'Best regards,',
      'Team AMZCOZ'
    ].filter(Boolean)

    const templateParams = {
      subject: 'AMZCOZ Strategy Session Confirmation',
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      serviceType: formData.serviceType,
      platform: formData.platform,
      storeLink: formData.storeLink,
      category: formData.category,
      challenges: formData.challenges,
      email_body: emailBodyLines.join('\n')
    }

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey)

      const submissionDetails = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        serviceType: formData.serviceType,
        platform: formData.platform,
        storeLink: formData.storeLink,
        category: formData.category,
      }

      setFormData({
        name: '',
        email: '',
        phone: '',
        serviceType: '',
        platform: '',
        storeLink: '',
        category: '',
        challenges: '',
      })
      if (onSuccess) {
        onSuccess(submissionDetails)
      } else {
        setIsSuccess(true)
      }
    } catch (err) {
      console.error('Lead form submission failed:', err)
      setFormStatus({
        type: 'error',
        message: 'Unable to send your request right now. Please try again later.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <motion.div
        className="form-success"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <div className="success-icon">✓</div>
        <h3>Thank You!</h3>
        <p>We've received your request. Our team will contact you within 24 hours.</p>
      </motion.div>
    )
  }

  return (
    <form className={`lead-form lead-form-${variant}`} onSubmit={handleSubmit}>
      <div className="form-grid">
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            Full Name <span className="required">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`form-input ${errors.name ? 'error' : ''}`}
            placeholder="John Doe"
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email Address <span className="required">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`form-input ${errors.email ? 'error' : ''}`}
            placeholder="john@example.com"
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="phone" className="form-label">
            Phone Number <span className="required">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`form-input ${errors.phone ? 'error' : ''}`}
            placeholder="+91 98765 43210"
          />
          {errors.phone && <span className="error-message">{errors.phone}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="serviceType" className="form-label">
            Service Type <span className="required">*</span>
          </label>
          <select
            id="serviceType"
            name="serviceType"
            value={formData.serviceType}
            onChange={handleChange}
            className={`form-select ${errors.serviceType ? 'error' : ''}`}
          >
            <option value="">Select a service</option>
            {serviceTypes.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
          {errors.serviceType && <span className="error-message">{errors.serviceType}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="platform" className="form-label">
            Platform {formData.serviceType?.includes('E-commerce') || formData.serviceType?.includes('Marketing') ? <span className="required">*</span> : '(Optional)'}
          </label>
          <select
            id="platform"
            name="platform"
            value={formData.platform}
            onChange={handleChange}
            className="form-select"
          >
            <option value="">Select a platform</option>
            {platforms.map((platform) => (
              <option key={platform} value={platform}>
                {platform}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="storeLink" className="form-label">
            Store/Website Link (Optional)
          </label>
          <input
            type="url"
            id="storeLink"
            name="storeLink"
            value={formData.storeLink}
            onChange={handleChange}
            className="form-input"
            placeholder="https://..."
          />
        </div>

        <div className="form-group">
          <label htmlFor="category" className="form-label">
            Product/Business Category (Optional)
          </label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="form-select"
          >
            <option value="">Select a category</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group form-group-full">
          <label htmlFor="challenges" className="form-label">
            Tell us about your requirements
          </label>
          <textarea
            id="challenges"
            name="challenges"
            value={formData.challenges}
            onChange={handleChange}
            className="form-textarea"
            placeholder="Tell us about your current challenges, goals, or what you're looking to achieve..."
            rows="4"
          />
        </div>
      </div>

      {formStatus && (
        <div className={`form-status form-status-${formStatus.type}`}>
          {formStatus.message}
        </div>
      )}

      <div className="form-actions">
        <Button
          type="submit"
          variant="primary"
          size="large"
          fullWidth
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Get Started'}
        </Button>
      </div>

      <p className="form-note">
        By submitting this form, you agree to our Privacy Policy and Terms of Service.
      </p>
    </form>
  )
}

export default LeadForm

import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaTwitter, FaFacebook, FaInstagram, FaReddit } from 'react-icons/fa'
import './Footer.css'

const slugify = (text = '') =>
  text
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/\+/g, 'plus')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ]

  const services = [
    { name: 'Amazon Account Management', anchor: 'amazon-account-management' },
    { name: 'Amazon Advertising', anchor: 'amazon-advertising-ppc-dsp' },
    { name: 'Brand Store & A+ Content', anchor: slugify('A+ Content & Brand Store') },
    { name: 'Review Management', anchor: slugify('Review & Reputation Management') },
    { name: 'Webapp Development', anchor: slugify('Webapp Development') },
    { name: 'Social Media Marketing', anchor: slugify('Social Media Marketing') },
  ]

  const socialLinks = [
    { icon: FaLinkedin, url: '#', label: 'LinkedIn' },
    { icon: FaTwitter, url: '#', label: 'Twitter' },
    {
      icon: FaFacebook,
      url: 'https://www.facebook.com/profile.php?id=61583302677569',
      label: 'Facebook',
    },
    { icon: FaInstagram, url: '#', label: 'Instagram' },
    {
      icon: FaReddit,
      url: 'https://www.reddit.com/r/AmzCoz',
      label: 'Reddit',
      target: '_blank',
      rel: 'noopener noreferrer'
    },
  ]

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            <motion.div
              className="footer-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="footer-logo">
                <span className="logo-text">AMZ</span>
                <span className="logo-highlight">COZ</span>
              </div>
              <p className="footer-description">
                Expert Amazon account management, advertising, and e-commerce growth services.
                Helping brands scale with data-driven strategies.
              </p>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    className="social-link"
                    aria-label={social.label}
                    target={social.target || ''}
                    rel={social.rel || ''}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="footer-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h4 className="footer-title">Quick Links</h4>
              <ul className="footer-links">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link to={link.path} className="footer-link">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="footer-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4 className="footer-title">Services</h4>
              <ul className="footer-links">
                {services.map((service, index) => (
                  <li key={index}>
                    <a className="footer-link" href={`/services#${service.anchor}`}>
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="footer-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h4 className="footer-title">Contact Us</h4>
              <ul className="footer-contact">
                <li>
                  <FaPhone className="contact-icon" />
                  <a href="tel:+918007208742" className="contact-link">
                    +91 80072 08742
                  </a>
                </li>
                <li>
                  <FaEnvelope className="contact-icon" />
                  <a href="mailto:adnan@amzcoz.com" className="contact-link">
                    adnan@amzcoz.com
                  </a>
                </li>
                <li>
                  <FaMapMarkerAlt className="contact-icon" />
                  <span className="contact-text">Pune, Maharashtra</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} AMZCOZ. All rights reserved.</p>
            <div className="footer-legal">
              <a href="https://merchant.razorpay.com/policy/RlUrElctDkASJJ/privacy" target="_blank" rel="noopener noreferrer" className="legal-link">Privacy Policy</a>
              <span className="separator">•</span>
              <a href="https://merchant.razorpay.com/policy/RlUrElctDkASJJ/terms" target="_blank" rel="noopener noreferrer" className="legal-link">Terms & Conditions</a>
              <span className="separator">•</span>
              <a href="https://merchant.razorpay.com/policy/RlUrElctDkASJJ/shipping" target="_blank" rel="noopener noreferrer" className="legal-link">Shipping</a>
              <span className="separator">•</span>
              <a href="https://merchant.razorpay.com/policy/RlUrElctDkASJJ/refund" target="_blank" rel="noopener noreferrer" className="legal-link">Cancellation & Refunds</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

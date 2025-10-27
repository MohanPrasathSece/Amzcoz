import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ]

  const services = [
    'Amazon Account Management',
    'Amazon Advertising (PPC & DSP)',
    'Brand Store & A+ Content',
    'Review Management',
    'Webapp Development',
    'Social Media Marketing',
  ]

  const socialLinks = [
    { icon: FaLinkedin, url: '#', label: 'LinkedIn' },
    { icon: FaTwitter, url: '#', label: 'Twitter' },
    { icon: FaFacebook, url: '#', label: 'Facebook' },
    { icon: FaInstagram, url: '#', label: 'Instagram' },
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
                    <span className="footer-link">{service}</span>
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
              <Link to="/privacy" className="legal-link">Privacy Policy</Link>
              <span className="separator">•</span>
              <Link to="/terms" className="legal-link">Terms of Service</Link>
            </div>
          </div>
          <div className="footer-attribution">
            <a
              href="https://www.zyradigitals.info"
              target="_blank"
              rel="noopener noreferrer"
              className="zyra-link"
            >
              Made with ❤️ Zyra Digitals
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

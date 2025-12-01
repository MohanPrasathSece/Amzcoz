import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaGlobe,
  FaAmazon,
  FaChartLine
} from 'react-icons/fa'
import LeadForm from '../../components/LeadForm/LeadForm'
import SEO from '../../components/SEO/SEO'
import './Contact.css'

const Contact = () => {
  const [headerRef, headerInView] = useInView({ threshold: 0.3, triggerOnce: true })
  const [formRef, formInView] = useInView({ threshold: 0.2, triggerOnce: true })

  const contactInfo = [
    {
      icon: FaPhone,
      title: 'Phone',
      details: ['+91 80072 08742'],
      link: 'tel:+918007208742'
    },
    {
      icon: FaEnvelope,
      title: 'Email',
      details: ['adnan@amzcoz.com'],
      link: 'mailto:adnan@amzcoz.com'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Location',
      details: ['Pune, Maharashtra', 'India'],
      link: null
    },
    {
      icon: FaClock,
      title: 'Business Hours',
      details: ['Mon - Sat: 9:00 AM - 7:00 PM', 'Sunday: Closed'],
      link: null
    }
  ]

  const serviceRegions = [
    { icon: FaGlobe, name: 'India', flagSrc: '/images/flags/india.svg', flagAlt: 'Flag of India' },
    { icon: FaGlobe, name: 'USA', flagSrc: '/images/flags/usa.svg', flagAlt: 'Flag of the United States' },
    { icon: FaGlobe, name: 'UAE', flagSrc: '/images/flags/uae.svg', flagAlt: 'Flag of the United Arab Emirates' },
    { icon: FaGlobe, name: 'UK', flagSrc: '/images/flags/uk.svg', flagAlt: 'Flag of the United Kingdom' }
  ]

  const benefits = [
    {
      icon: FaAmazon,
      title: 'Free Growth Audit',
      description: 'Comprehensive review of your current online presence'
    },
    {
      icon: FaChartLine,
      title: 'Growth Strategy Session',
      description: 'Personalized roadmap to scale your business'
    }
  ]

  return (
    <div className="contact-page">
      <SEO
        title="Contact Us - Get Expert E-commerce Consultation"
        description="Get in touch with AMZCOZ for expert e-commerce consultation. Free strategy session, growth audit, and personalized roadmap. Serving clients in India, USA, UAE, and UK. Response within 24 hours."
        keywords="contact amzcoz, e-commerce consultation, amazon help, free strategy session, amazon audit, marketplace consultation, advertising consultation, contact amazon experts"
        canonical="/contact"
      />
      {/* Header Section */}
      <section className="contact-header" ref={headerRef}>
        <div className="contact-header-background">
          <div className="contact-shape contact-shape-1"></div>
          <div className="contact-shape contact-shape-2"></div>
        </div>
        <div className="container">
          <motion.div
            className="contact-header-content"
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h1>Get in Touch</h1>
            <p className="contact-subtitle">
              Ready to grow your business? Request your free consultation today
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="contact-content section-padding">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Information */}
            <motion.div
              className="contact-info-section"
              initial={{ opacity: 0, x: -30 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              ref={formRef}
            >
              <div className="contact-intro">
                <h2>Ready to Accelerate Your Amazon Growth?</h2>
                <p>
                  Book a free strategy session and discover how we can help you achieve your goals.
                </p>
              </div>

              <div className="contact-info-cards">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className="contact-info-card"
                    initial={{ opacity: 0, y: 20 }}
                    animate={formInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="info-icon">
                      <info.icon />
                    </div>
                    <div className="info-content">
                      <h3>{info.title}</h3>
                      {info.link ? (
                        <a href={info.link} className="info-link">
                          {info.details.map((detail, idx) => (
                            <div key={idx}>{detail}</div>
                          ))}
                        </a>
                      ) : (
                        <div className="info-text">
                          {info.details.map((detail, idx) => (
                            <div key={idx}>{detail}</div>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              className="contact-form-section"
              initial={{ opacity: 0, x: 30 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="form-container">
                <div className="form-header">
                  <h2>Request Your Free Consultation</h2>
                  <p>Fill out the form below and we'll get back to you within 24 hours</p>
                </div>
                <LeadForm variant="default" />
              </div>
            </motion.div>

            {/* Service Regions & Benefits */}
            <motion.div
              className="contact-extras"
              initial={{ opacity: 0, y: 30 }}
              animate={formInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.div
                className="service-regions"
                initial={{ opacity: 0, y: 20 }}
                animate={formInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3>We Serve Globally</h3>
                <div className="regions-grid">
                  {serviceRegions.map((region, index) => (
                    <motion.div
                      key={index}
                      className="region-badge"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="region-flag">
                        <img
                          src={region.flagSrc}
                          alt={region.flagAlt}
                          className="region-flag-image"
                        />
                      </span>
                      <span className="region-name">{region.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="contact-benefits"
                initial={{ opacity: 0, y: 20 }}
                animate={formInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.35 }}
              >
                <span className="benefits-eyebrow">Included In Every Session</span>
                <h3>What You'll Get</h3>
                <p className="benefits-subtitle">Actionable deliverables designed to unlock marketplace growth from day one.</p>
                <div className="benefit-list">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="benefit-card">
                      <div className="benefit-icon">
                        <benefit.icon />
                      </div>
                      <div className="benefit-content">
                        <h4>{benefit.title}</h4>
                        <p>{benefit.description}</p>
                      </div>
                      <div className="benefit-index">0{index + 1}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map or Additional Info Section */}
      <section className="contact-additional section-padding bg-light">
        <div className="container">
          <motion.div
            className="additional-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="additional-text">
              <h2>Why Choose AMZCOZ?</h2>
              <div className="additional-features">
                <div className="additional-feature">
                  <div className="feature-number">01</div>
                  <div className="feature-content">
                    <h3>Proven Track Record</h3>
                    <p>15 successful clients with an average 3x ROAS uplift</p>
                  </div>
                </div>
                <div className="additional-feature">
                  <div className="feature-number">02</div>
                  <div className="feature-content">
                    <h3>Expert Team</h3>
                    <p>Certified Amazon specialists with 9+ years of experience</p>
                  </div>
                </div>
                <div className="additional-feature">
                  <div className="feature-number">03</div>
                  <div className="feature-content">
                    <h3>Transparent Pricing</h3>
                    <p>No hidden fees, clear communication, and detailed reporting</p>
                  </div>
                </div>
                <div className="additional-feature">
                  <div className="feature-number">04</div>
                  <div className="feature-content">
                    <h3>End-to-End Support</h3>
                    <p>Complete Amazon management from listings to advertising</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="contact-faq section-padding">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Frequently Asked Questions</h2>
            <p>Quick answers to common questions</p>
          </motion.div>

          <div className="faq-grid">
            {[
              {
                question: 'How long does it take to see results?',
                answer: 'Most clients see initial improvements within 30-60 days, with significant growth by 90 days.'
              },
              {
                question: 'What is included in the free audit?',
                answer: 'Comprehensive analysis of your listings, advertising, pricing strategy, and growth opportunities.'
              },
              {
                question: 'Do you work with new sellers?',
                answer: 'Yes! We work with businesses at all stages, from launch to established brands looking to scale.'
              },
              {
                question: 'What are your pricing models?',
                answer: 'We offer flexible pricing based on your needs. Contact us for a customized quote.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="faq-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact

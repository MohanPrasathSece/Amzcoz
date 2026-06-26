import React from 'react'
// import { motion } from 'framer-motion'
// import { useInView } from 'react-intersection-observer'
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
  // const [headerRef, headerInView] = useInView({ threshold: 0.3, triggerOnce: true })
  // const [formRef, formInView] = useInView({ threshold: 0.2, triggerOnce: true })

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
      details: ['adnan@amzcoz.com / adnanamzcoz@gmail.com'],
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
    { icon: FaGlobe, name: 'India', flagSrc: '/images/ind.png', flagAlt: 'Flag of India' },
    { icon: FaGlobe, name: 'USA', flagSrc: '/images/usa.png', flagAlt: 'Flag of the United States' },
    { icon: FaGlobe, name: 'UAE', flagSrc: '/images/uae.png', flagAlt: 'Flag of the United Arab Emirates' },
    { icon: FaGlobe, name: 'UK', flagSrc: '/images/uk.png', flagAlt: 'Flag of the United Kingdom' }
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
      <section className="contact-header">
        <div className="contact-header-background">
          <div className="contact-shape contact-shape-1"></div>
          <div className="contact-shape contact-shape-2"></div>
        </div>
        <div className="container">
          <div className="contact-header-content">
            <h1>Get in Touch</h1>
            <p className="contact-subtitle">
              Ready to grow your business? Request your free consultation today
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="contact-content section-padding">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Information */}
            <div className="contact-info-section">
              <div className="contact-intro">
                <h2>Ready to Accelerate Your Amazon Growth?</h2>
                <p>
                  Book a free strategy session and discover how we can help you achieve your goals.
                </p>
              </div>

              <div className="contact-info-cards">
                {contactInfo.map((info, index) => (
                  <div key={index} className="contact-info-card">
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
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-section">
              <div className="form-container">
                <div className="form-header">
                  <h2>Request Your Free Consultation</h2>
                  <p>Fill out the form below and we'll get back to you within 24 hours</p>
                </div>
                <LeadForm variant="default" />
              </div>
            </div>

            {/* Service Regions & Benefits */}
            <div className="contact-extras">
              <div className="service-regions">
                <h3>We Serve Globally</h3>
                <div className="regions-grid">
                  {serviceRegions.map((region, index) => (
                    <div key={index} className="region-badge">
                      <span className="region-flag">
                        <img
                          src={region.flagSrc}
                          alt={region.flagAlt}
                          className="region-flag-image"
                          loading="lazy"
                        />
                      </span>
                      <span className="region-name">{region.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="contact-benefits">
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map or Additional Info Section */}
      <section className="contact-additional section-padding bg-light">
        <div className="container">
          <div className="additional-content">
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
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="contact-faq section-padding">
        <div className="container">
          <div className="section-header">
            <h2>Frequently Asked Questions</h2>
            <p>Quick answers to common questions</p>
          </div>

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
              <div key={index} className="faq-item">
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact

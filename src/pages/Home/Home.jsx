import React, { useState } from 'react'
// import { motion } from 'framer-motion'
// import { useInView } from 'react-intersection-observer'
import {
  FaAmazon,
  FaChartLine,
  FaBullhorn,
  FaStar,
  FaUsers,
  FaTrophy,
  FaArrowRight,
  FaQuoteLeft,
  FaCode,
  FaLaptopCode,
  FaFacebook
} from 'react-icons/fa'
import Button from '../../components/Button/Button'
import Brands from '../../components/Brands/Brands'
import Modal from '../../components/Modal/Modal'
import LeadForm from '../../components/LeadForm/LeadForm'
import MoonGalaxy from '../../components/MoonGalaxy/MoonGalaxy'
import SuccessPopup from '../../components/SuccessPopup/SuccessPopup'
import SEO from '../../components/SEO/SEO'
import './Home.css'

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [successDetails, setSuccessDetails] = useState(null)
  // Scroll animations disabled for performance
  // const [heroRef, heroInView] = useInView({ threshold: 0.2, triggerOnce: true })
  // const [statsRef, statsInView] = useInView({ threshold: 0.3, triggerOnce: true })
  // const [servicesRef, servicesInView] = useInView({ threshold: 0.2, triggerOnce: true })
  // const [testimonialsRef, testimonialsInView] = useInView({ threshold: 0.2, triggerOnce: true })

  const stats = [
    { icon: FaUsers, value: '15+', label: 'Brands', color: '#4A90E2' },
    { icon: FaChartLine, value: '2x', label: 'ROAS', color: '#2563EB' },
    { icon: FaTrophy, value: '5+', label: 'Years Experience', color: '#4A90E2' },
    { icon: FaStar, value: '87%', label: 'Client Satisfaction', color: '#2563EB' },
  ]

  const services = [
    {
      icon: FaAmazon,
      title: 'E-commerce Account Management',
      description: 'Complete management across Amazon, Flipkart, Myntra, Ajio, Jio Mart & Meesho. Listing optimization, inventory control, and account health.',
      features: ['Multi-Platform Management', 'Listing Optimization', 'Inventory Control', 'Account Health']
    },
    {
      icon: FaBullhorn,
      title: 'E-commerce Advertising',
      description: 'Expert advertising and DSP campaign management across all major platforms with budget optimization and performance tracking.',
      features: ['Multi-Platform Ads', 'Budget Optimization', 'Performance Reports', 'ROAS Improvement']
    },
    {
      icon: FaStar,
      title: 'Brand Enhancement',
      description: 'A+ Content, Brand Store setup, and creative infographics to boost conversions.',
      features: ['A+ Content', 'Brand Store', 'Premium Templates', 'Brand Story']
    },
    {
      icon: FaCode,
      title: 'Website Development',
      description: 'Corporate and marketing websites crafted for brand storytelling, speed, and responsive experiences.',
      features: ['Corporate Websites', 'Custom UI/UX', 'CMS Integrations', 'SEO Enhancements']
    },
    {
      icon: FaLaptopCode,
      title: 'E-commerce Website',
      description: 'Conversion-focused storefronts with secure checkout, product management, and growth-ready integrations.',
      features: ['Shopify / WooCommerce', 'Catalog Setup', 'Payments & Logistics', 'Conversion Optimization']
    },
    {
      icon: FaFacebook,
      title: 'Social Media Marketing',
      description: 'Content, creatives and paid social to grow awareness and drive conversions.',
      features: ['Content Strategy', 'Meta Ads', 'Community', 'Reporting']
    },
  ]

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      company: 'Electronics Brand',
      image: '👨‍💼',
      rating: 5,
      text: 'AMZCOZ transformed our e-commerce presence across Amazon and Flipkart. Within 60 days, we saw 3x growth in organic sales and significantly improved our ad ROAS.'
    },
    {
      name: 'Priya Sharma',
      company: 'Fashion & Apparel',
      image: '👩‍💼',
      rating: 5,
      text: 'Their expertise in e-commerce advertising across multiple platforms is unmatched. Our advertising campaigns are now profitable and our brand visibility has skyrocketed.'
    },
    {
      name: 'Michael Chen',
      company: 'Home & Kitchen',
      image: '👨‍💼',
      rating: 5,
      text: 'Professional, transparent, and results-driven. AMZCOZ handles everything from listings to ads across Amazon, Myntra, and Meesho, allowing us to focus on product development.'
    },
  ]

  return (
    <div className="home">
      <SEO
        title="AMZCOZ - Amazon Account Management & E-commerce Growth Experts"
        description="Expert Amazon account management, advertising, brand enhancement, and e-commerce growth services across Amazon, Flipkart, Myntra, Ajio & more. 2x ROAS guaranteed."
        keywords="amazon account management, amazon advertising, e-commerce growth, amazon advertising, flipkart management, myntra seller, brand enhancement, amazon optimization, advertising management, e-commerce services"
        canonical="/"
      />
      <section className="hero moon-hero">
        <div className="container">
          <div className="moon-hero-stack">
            <h1 className="brand-backdrop" aria-hidden>
              AmzCoz
            </h1>
            <p className="hero-tagline">
              Scale your e‑commerce growth across marketplaces
            </p>
            <div className="moon-wrap">
              <MoonGalaxy />
            </div>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="container">
          <div className="stats-band">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section section-padding">
        <div className="container">
          <div className="section-header">
            <h2>Our Services</h2>
            <p>Comprehensive Amazon solutions to accelerate your growth</p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">
                  <service.icon />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>
                      <span className="feature-dot"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="ghost" to="/services" icon={<FaArrowRight />} iconPosition="right">
                  Learn More
                </Button>
              </div>
            ))}
          </div>

          <div className="services-cta">
            <Button variant="primary" size="large" to="/services">
              View All Services
            </Button>
          </div>
        </div>
      </section>
      <Brands />

      {/* Testimonials Section */}
      <section className="testimonials-section section-padding bg-light">
        <div className="container">
          <div className="section-header">
            <h2>What Our Clients Say</h2>
            <p>Real results from real businesses</p>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-quote-icon">
                  <FaQuoteLeft />
                </div>
                <p className="testimonial-text">{testimonial.text}</p>
                <div className="testimonial-author-row">
                  <div className="author-avatar">{testimonial.image}</div>
                  <div className="author-info">
                    <div className="author-name">{testimonial.name}</div>
                    <div className="author-company">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section section-padding">
        <div className="container">
          <div className="cta-content">
            <span className="cta-eyebrow">Free Strategy Session</span>
            <h2>Ready to Accelerate Your Amazon Growth?</h2>
            <p>Book a free strategy session and discover how we can help you achieve your goals</p>
            <div className="cta-pill-row">
              <span className="cta-pill">15-minute audit</span>
              <span className="cta-pill">Channel-wise growth plan</span>
              <span className="cta-pill">Actionable next steps</span>
            </div>
            <Button
              variant="primary"
              size="large"
              onClick={() => setIsModalOpen(true)}
              icon={<FaArrowRight />}
              iconPosition="right"
            >
              Book Strategy Session
            </Button>
          </div>
        </div>
      </section>

      {/* Lead Form Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Get Your Free Consultation"
        size="large"
      >
        <LeadForm
          onSuccess={(details) => {
            setIsModalOpen(false)
            setSuccessDetails(details)
          }}
        />
      </Modal>

      <SuccessPopup
        isOpen={!!successDetails}
        submission={successDetails}
        onClose={() => setSuccessDetails(null)}
      />
    </div>
  )
}

export default Home

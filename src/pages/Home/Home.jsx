import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
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
  FaFacebook
} from 'react-icons/fa'
import Button from '../../components/Button/Button'
import Modal from '../../components/Modal/Modal'
import LeadForm from '../../components/LeadForm/LeadForm'
import MoonGalaxy from '../../components/MoonGalaxy/MoonGalaxy'
import './Home.css'

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [heroRef, heroInView] = useInView({ threshold: 0.2, triggerOnce: true })
  const [statsRef, statsInView] = useInView({ threshold: 0.3, triggerOnce: true })
  const [servicesRef, servicesInView] = useInView({ threshold: 0.2, triggerOnce: true })
  const [testimonialsRef, testimonialsInView] = useInView({ threshold: 0.2, triggerOnce: true })

  const stats = [
    { icon: FaUsers, value: '500+', label: 'Happy Clients', color: '#4A90E2' },
    { icon: FaChartLine, value: '3x', label: 'Average ROAS Uplift', color: '#2563EB' },
    { icon: FaTrophy, value: '5+', label: 'Years Experience', color: '#4A90E2' },
    { icon: FaStar, value: '98%', label: 'Client Satisfaction', color: '#2563EB' },
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
      description: 'Expert PPC & DSP campaign management across all major platforms with budget optimization and performance tracking.',
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
      title: 'Webapp Development',
      description: 'Modern, responsive web applications tailored to your business goals.',
      features: ['React Frontend', 'API Integration', 'Authentication', 'Performance']
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
      text: 'Their expertise in e-commerce advertising across multiple platforms is unmatched. Our PPC campaigns are now profitable and our brand visibility has skyrocketed.'
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
      <section className="hero moon-hero" ref={heroRef}>
        <div className="container">
          <div className="moon-hero-stack">
            <motion.h1
              className="brand-backdrop"
              aria-hidden
              initial={{ opacity: 0, scale: 0.95 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              AmzCoz
            </motion.h1>
            <motion.p
              className="hero-tagline"
              initial={{ opacity: 0, y: 6 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Scale your e‑commerce growth across marketplaces
            </motion.p>
            <motion.div
              className="moon-wrap"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.9, delay: 0.25 }}
            >
              <MoonGalaxy />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="stats-section" ref={statsRef}>
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => {
              const isHeroStat = index === 0
              return (
                <motion.div
                  key={index}
                  className={`stat-card${isHeroStat ? ' stat-card--hero' : ''}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={statsInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: isHeroStat ? 1.01 : 1.04 }}
                >
                  {isHeroStat && <span className="stat-card__tag">Trusted by brands</span>}
                  <div className="stat-card__icon" style={{ color: stat.color }}>
                    <stat.icon />
                  </div>
                  <div className="stat-card__body">
                    <div className="stat-card__value">{stat.value}</div>
                    <div className="stat-card__label">{stat.label}</div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section section-padding" ref={servicesRef}>
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, x: -30 }}
            animate={servicesInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2>Our Services</h2>
            <p>Comprehensive Amazon solutions to accelerate your growth</p>
          </motion.div>

          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="service-card"
                initial={{ opacity: 0, x: -50 }}
                animate={servicesInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -15, scale: 1.03, boxShadow: '0 25px 50px rgba(0,0,0,0.15)' }}
              >
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
              </motion.div>
            ))}
          </div>

          <motion.div
            className="services-cta"
            initial={{ opacity: 0, x: -30 }}
            animate={servicesInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Button variant="primary" size="large" to="/services">
              View All Services
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section section-padding bg-light" ref={testimonialsRef}>
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, x: 30 }}
            animate={testimonialsInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2>What Our Clients Say</h2>
            <p>Real results from real businesses</p>
          </motion.div>

          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="testimonial-card"
                initial={{ opacity: 0, x: 50 }}
                animate={testimonialsInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.05, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
              >
                <div className="quote-icon">
                  <FaQuoteLeft />
                </div>
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <p className="testimonial-text">{testimonial.text}</p>
                <div className="testimonial-author">
                  <div className="author-avatar">{testimonial.image}</div>
                  <div className="author-info">
                    <div className="author-name">{testimonial.name}</div>
                    <div className="author-company">{testimonial.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section section-padding">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2>Ready to Scale Your E-commerce Business?</h2>
            <p>Get a free consultation and discover growth opportunities across all platforms</p>
            <Button 
              variant="primary" 
              size="large"
              onClick={() => setIsModalOpen(true)}
            >
              Get Free Consultation
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Lead Form Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Get Your Free Consultation"
        size="large"
      >
        <LeadForm onSuccess={() => setIsModalOpen(false)} />
      </Modal>
    </div>
  )
}

export default Home

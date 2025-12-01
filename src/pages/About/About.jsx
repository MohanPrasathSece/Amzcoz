import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  FaAward,
  FaUsers,
  FaChartLine,
  FaGlobe,
  FaHandshake,
  FaLightbulb,
  FaRocket,
  FaHeart,
  FaCheckCircle
} from 'react-icons/fa'
import Button from '../../components/Button/Button'
import SEO from '../../components/SEO/SEO'
import './About.css'

const About = () => {
  const [headerRef, headerInView] = useInView({ threshold: 0.3, triggerOnce: true })
  const [missionRef, missionInView] = useInView({ threshold: 0.3, triggerOnce: true })
  const [valuesRef, valuesInView] = useInView({ threshold: 0.2, triggerOnce: true })
  const [teamRef, teamInView] = useInView({ threshold: 0.2, triggerOnce: true })
  const [gstRef, gstInView] = useInView({ threshold: 0.2, triggerOnce: true })

  const values = [
    {
      icon: FaLightbulb,
      title: 'Innovation',
      description: 'Constantly evolving strategies to stay ahead in the dynamic e-commerce landscape'
    },
    {
      icon: FaHandshake,
      title: 'Transparency',
      description: 'Clear communication, honest reporting, and no hidden fees'
    },
    {
      icon: FaRocket,
      title: 'Results-Driven',
      description: 'Focused on measurable outcomes and sustainable business growth'
    },
    {
      icon: FaHeart,
      title: 'Client Success',
      description: 'Your success is our success - we grow when you grow'
    }
  ]

  const achievements = [
    { icon: FaUsers, value: '15+', label: 'Brands' },
    { icon: FaChartLine, value: '2x', label: 'ROAS' },
    { icon: FaAward, value: '5+', label: 'Years Experience' },
    { icon: FaCheckCircle, value: '98%', label: 'Client Satisfaction' }
  ]

  const whyChoose = [
    'Comprehensive account health and day-to-day management',
    'Expertise in product positioning and listing optimization',
    'Focus on increasing ROI, visibility, and conversions',
    'Affordable & transparent pricing',
    'End-to-end Amazon support',
    'Serving India, USA, UAE, UK, and more'
  ]

  const certifications = [
    'Amazon Advertising Certified',
    'Google Ads Certified',
    'Meta Blueprint Certified',
    'E-commerce Growth Specialists'
  ]

  return (
    <div className="about-page">
      <SEO
        title="About AMZCOZ - Your Trusted E-commerce Growth Partner"
        description="Learn about AMZCOZ, your trusted partner for Amazon account management and e-commerce growth. 5+ years of experience, 15+ brands scaled, 98% client satisfaction. Certified Amazon specialists."
        keywords="about amzcoz, e-commerce experts, amazon specialists, certified amazon agency, marketplace consultants, advertising experts, e-commerce consultants, amazon certified"
        canonical="/about"
      />
      {/* Header Section */}
      <section className="about-header" ref={headerRef}>
        <div className="about-header-background">
          <div className="about-shape about-shape-1"></div>
          <div className="about-shape about-shape-2"></div>
        </div>
        <div className="container">
          <motion.div
            className="about-header-content"
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h1>About AMZCOZ</h1>
            <p className="about-subtitle">
              Your trusted partner for Amazon growth and e-commerce success
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-section section-padding" ref={missionRef}>
        <div className="container">
          <div className="mission-grid">
            <motion.div
              className="mission-card"
              initial={{ opacity: 0, x: -30 }}
              animate={missionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="mission-icon">
                <FaRocket />
              </div>
              <h2>Our Mission</h2>
              <p>
                To empower businesses of all sizes to achieve exceptional growth on Amazon through
                data-driven strategies, expert management, and unwavering commitment to client success.
                We believe every brand deserves the opportunity to thrive in the competitive e-commerce landscape.
              </p>
            </motion.div>

            <motion.div
              className="mission-card"
              initial={{ opacity: 0, x: 30 }}
              animate={missionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="mission-icon">
                <FaLightbulb />
              </div>
              <h2>Our Vision</h2>
              <p>
                To become the most trusted and results-oriented Amazon growth partner globally,
                known for transforming businesses through innovative strategies, transparent practices,
                and measurable results that exceed expectations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="achievements-section section-padding bg-light">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Our Achievements</h2>
            <p>Numbers that speak for themselves</p>
          </motion.div>

          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="achievement-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="achievement-icon">
                  <achievement.icon />
                </div>
                <div className="achievement-value">{achievement.value}</div>
                <div className="achievement-label">{achievement.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="values-section section-padding" ref={valuesRef}>
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2>Our Core Values</h2>
            <p>The principles that guide everything we do</p>
          </motion.div>

          <div className="values-grid">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="value-card"
                initial={{ opacity: 0, y: 30 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="value-icon">
                  <value.icon />
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-section section-padding bg-light">
        <div className="container">
          <div className="why-choose-content">
            <motion.div
              className="why-choose-text"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2>Why Choose AMZCOZ?</h2>
              <p className="why-choose-intro">
                We're not just another Amazon agency. We're your growth partners,
                committed to your success with proven strategies and transparent practices.
              </p>

              <div className="why-choose-list">
                {whyChoose.map((reason, index) => (
                  <motion.div
                    key={index}
                    className="why-choose-item"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <FaCheckCircle className="check-icon" />
                    <span>{reason}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="why-choose-visual"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="certifications-box">
                <h3>Certifications & Expertise</h3>
                <div className="certifications-list">
                  {certifications.map((cert, index) => (
                    <motion.div
                      key={index}
                      className="certification-badge"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <FaAward />
                      <span>{cert}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="global-reach-box">
                <FaGlobe className="globe-icon" />
                <h3>Global Reach</h3>
                <p>Serving clients in India, USA, UAE, UK, and beyond</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section section-padding" ref={teamRef}>
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            animate={teamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2>Meet Our Expert Team</h2>
            <p>Passionate professionals dedicated to your success</p>
          </motion.div>

          <motion.div
            className="team-intro"
            initial={{ opacity: 0, y: 20 }}
            animate={teamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>
              Our team consists of certified Amazon specialists, advertising experts, content creators,
              and e-commerce strategists with years of hands-on experience. We stay updated with
              the latest Amazon policies, algorithm changes, and best practices to ensure your
              business stays ahead of the competition.
            </p>
          </motion.div>

          <div className="team-stats">
            <motion.div
              className="team-stat"
              initial={{ opacity: 0, y: 20 }}
              animate={teamInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="team-stat-value">15+</div>
              <div className="team-stat-label">Team Members</div>
            </motion.div>
            <motion.div
              className="team-stat"
              initial={{ opacity: 0, y: 20 }}
              animate={teamInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="team-stat-value">50+</div>
              <div className="team-stat-label">Combined Years Experience</div>
            </motion.div>
            <motion.div
              className="team-stat"
              initial={{ opacity: 0, y: 20 }}
              animate={teamInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="team-stat-value">10+</div>
              <div className="team-stat-label">Certifications</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta section-padding">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2>Ready to Accelerate Your Amazon Growth?</h2>
            <p>Book a free strategy session and discover how we can help you achieve your goals</p>
            <Button variant="primary" size="large" to="/contact">
              Book Strategy Session
            </Button>
          </motion.div>
        </div>
      </section>

      {/* GST Information */}
      <section className="about-gst-section section-padding" ref={gstRef}>
        <div className="container">
          <motion.div
            className="gst-card"
            initial={{ opacity: 0, y: 30 }}
            animate={gstInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2>GST Registration Details</h2>
            <p className="gst-number">
              GSTIN: <span>27BRBPT9292A1ZJ</span>
            </p>
            <p className="gst-note">Registered under Goods and Services Tax, Government of India.</p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About

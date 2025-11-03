import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  FaAmazon,
  FaBullhorn,
  FaPalette,
  FaStar,
  FaCode,
  FaGoogle,
  FaFacebook,
  FaInstagram,
  FaChartLine,
  FaCheck,
  FaArrowRight
} from 'react-icons/fa'
import Button from '../../components/Button/Button'
import Modal from '../../components/Modal/Modal'
import LeadForm from '../../components/LeadForm/LeadForm'
import './Services.css'

const Services = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [headerRef, headerInView] = useInView({ threshold: 0.3, triggerOnce: true })

  const services = [
    {
      icon: FaAmazon,
      title: 'Amazon Account Management',
      description: 'Comprehensive day-to-day management to keep your Amazon business running smoothly and profitably, including coordination with advertising for growth.',
      color: '#FF9900',
      features: [
        'Product Listing Optimization',
        'Price Updating & Monitoring',
        'Inventory Management',
        'Negative Feedback Management',
        'A to Z Claims Handling',
        'Pricing Health Monitoring',
        'Storefront Creation/Enhancement',
        'Seller Dashboard Notifications',
        'Case Management & Resolution',
        'Sales Target Estimation',
        'Advertising Support & Coordination (PPC/DSP)'
      ],
      process: [
        'Initial Account Audit',
        'Strategy Development',
        'Daily Monitoring & Updates',
        'Performance Reporting'
      ]
    },
    {
      icon: FaBullhorn,
      title: 'Amazon Advertising (PPC & DSP)',
      description: 'Data-driven advertising campaigns that maximize ROAS and drive sustainable growth.',
      color: '#4A90E2',
      features: [
        'Spending & Sales Target Estimation',
        'Budget-Level Optimization',
        'Campaign Creation (New & Existing)',
        'Daily Campaign Optimization',
        'Keyword Research & Targeting',
        'Bid Management',
        'Negative Keyword Optimization',
        'Performance Reports & Analysis',
        'DSP Campaign Management',
        'Sponsored Brand & Display Ads'
      ],
      process: [
        'Market & Competitor Analysis',
        'Campaign Structure Setup',
        'Continuous Optimization',
        'ROI Tracking & Reporting'
      ]
    },
    {
      icon: FaPalette,
      title: 'A+ Content & Brand Store',
      description: 'Premium visual content that enhances your brand presence and boosts conversions.',
      color: '#9B59B6',
      features: [
        'Basic A+ Content (7-8 templates)',
        'Premium A+ Content (5-6 templates)',
        'Custom Brand-Aligned Creatives',
        'Text + Visual Optimization',
        'Product Video Integration',
        'Brand Story Development',
        'Fully Optimized Storefront',
        'Mobile-Responsive Design',
        'Conversion-Focused Layout',
        'Regular Content Updates'
      ],
      process: [
        'Brand Analysis',
        'Content Strategy',
        'Design & Development',
        'Testing & Optimization'
      ]
    },
    {
      icon: FaStar,
      title: 'Review & Reputation Management',
      description: 'Protect and enhance your brand reputation with proactive review management.',
      color: '#FFA500',
      features: [
        'Review Monitoring',
        'Response Management',
        'Negative Review Mitigation',
        'Review Request Campaigns',
        'Seller Feedback Management',
        'Rating Improvement Strategies'
      ],
      process: [
        'Current Review Analysis',
        'Response Strategy',
        'Ongoing Monitoring',
        'Improvement Tracking'
      ]
    },
    {
      icon: FaGoogle,
      title: 'Google Ads Management',
      description: 'Drive external traffic to your Amazon listings with targeted Google Ads campaigns.',
      color: '#4285F4',
      features: [
        'Search Campaign Setup',
        'Shopping Ads Management',
        'Display Network Campaigns',
        'Remarketing Strategies',
        'Keyword Research',
        'Ad Copy Optimization',
        'Landing Page Optimization',
        'Conversion Tracking'
      ],
      process: [
        'Campaign Planning',
        'Ad Creation & Launch',
        'Performance Monitoring',
        'Continuous Optimization'
      ]
    },
    {
      icon: FaFacebook,
      title: 'Social Media & Meta Ads',
      description: 'Build brand awareness and drive sales through strategic social media marketing.',
      color: '#1877F2',
      features: [
        'Facebook & Instagram Ads',
        'Social Media Content Creation',
        'Community Management',
        'Influencer Collaboration',
        'Creative Content Development',
        'Audience Targeting',
        'Campaign Analytics',
        'Brand Building Strategies'
      ],
      process: [
        'Social Media Audit',
        'Content Calendar',
        'Campaign Execution',
        'Engagement & Growth'
      ]
    },
    {
      icon: FaCode,
      title: 'Webapp Development',
      description: 'Modern, performant web applications tailored to your business with scalable architecture.',
      color: '#0EA5E9',
      features: [
        'React-based Frontends',
        'API Integration',
        'Authentication & Security',
        'Responsive UI/UX',
        'Performance Optimization'
      ],
      process: [
        'Requirement Analysis',
        'Design & Architecture',
        'Development & Testing',
        'Deployment & Handover'
      ]
    },
    {
      icon: FaFacebook,
      title: 'Social Media Marketing',
      description: 'Content, creatives and paid social to grow awareness and drive conversions across platforms.',
      color: '#1778F2',
      features: [
        'Content Strategy',
        'Meta Ads (FB/IG)',
        'Community Management',
        'Monthly Reporting'
      ],
      process: [
        'Audit & Strategy',
        'Content Plan',
        'Campaign Execution',
        'Optimize & Scale'
      ]
    },
    {
      icon: FaInstagram,
      title: 'Influencer Marketing (UAE & Kuwait)',
      description: 'Leverage regional influencers to build trust and accelerate growth in GCC markets.',
      color: '#E1306C',
      features: [
        'Influencer Shortlisting',
        'Negotiation & Briefs',
        'Content Guidelines',
        'Performance Tracking'
      ],
      process: [
        'Market Mapping',
        'Partnerships',
        'Campaign Launch',
        'Reporting'
      ]
    },
    {
      icon: FaPalette,
      title: 'Graphic Designing',
      description: 'Conversion-focused creatives for storefronts, ads, A+ content and social media.',
      color: '#8B5CF6',
      features: [
        'Ad Creatives',
        'A+ Content Modules',
        'Store Banners',
        'Social Media Posts'
      ],
      process: [
        'Brand Study',
        'Concepts',
        'Design & Feedback',
        'Asset Delivery'
      ]
    },
    {
      icon: FaStar,
      title: 'Flipkart, Meesho, Amazon Review Management',
      description: 'Cross-platform review monitoring, response workflows and reputation enhancement.',
      color: '#F59E0B',
      features: [
        'Review Monitoring',
        'Response Playbooks',
        'Escalation Handling',
        'Sentiment Reports'
      ],
      process: [
        'Baseline Audit',
        'SOP Setup',
        'Ongoing Monitoring',
        'Monthly Reporting'
      ]
    },
    {
      icon: FaChartLine,
      title: 'FMCG Marketing',
      description: 'Retail-ready strategies for FMCG brands across marketplaces and paid channels.',
      color: '#10B981',
      features: [
        'Category Strategy',
        'Promo & Pricing Playbooks',
        'Retail Media',
        'Performance Dashboards'
      ],
      process: [
        'Market Analysis',
        'Go-to-Market',
        'Activate & Optimize',
        'Scale & Report'
      ]
    }
  ]

  return (
    <div className="services-page">
      {/* Header Section */}
      <section className="services-header" ref={headerRef}>
        <div className="services-header-background">
          <div className="header-shape header-shape-1"></div>
          <div className="header-shape header-shape-2"></div>
        </div>
        <div className="container">
          <motion.div
            className="services-header-content"
          >
            <h1>Our Services</h1>
            <p className="services-subtitle">
              End-to-end Amazon and e-commerce solutions designed to scale your business
            </p>
            <div className="services-header-stats">
              <div className="header-stat">
                <FaChartLine />
                <div>
                  <div className="stat-value">3x</div>
                  <div className="stat-label">Average ROAS</div>
                </div>
              </div>
              <div className="header-stat">
                <FaStar />
                <div>
                  <div className="stat-value">500+</div>
                  <div className="stat-label">Happy Clients</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-content section-padding">
        <div className="container">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              index={index}
              onBookSession={() => setIsModalOpen(true)}
            />
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose section-padding bg-light">
        <div className="container">
          <motion.div
            className="section-header"
          >
            <h2>Why Choose AMZCOZ?</h2>
            <p>Your trusted partner for Amazon growth</p>
          </motion.div>

          <div className="benefits-grid">
            {[
              {
                icon: FaChartLine,
                title: 'Proven Results',
                description: 'Track record of 3x ROAS uplift and consistent growth for 500+ clients'
              },
              {
                icon: FaStar,
                title: 'Expert Team',
                description: '5+ years of Amazon expertise with certified professionals'
              },
              {
                icon: FaCheck,
                title: 'Transparent Pricing',
                description: 'No hidden fees, clear pricing structure, and detailed reporting'
              },
              {
                icon: FaAmazon,
                title: 'End-to-End Support',
                description: 'Complete Amazon management from listings to advertising'
              },
              {
                icon: FaBullhorn,
                title: 'Data-Driven Approach',
                description: 'Strategic decisions backed by analytics and market insights'
              },
              {
                icon: FaGoogle,
                title: 'Multi-Channel Expertise',
                description: 'Amazon, Google, Meta - we handle all your e-commerce needs'
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="benefit-card"
              >
                <div className="benefit-icon">
                  <benefit.icon />
                </div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta section-padding">
        <div className="container">
          <motion.div
            className="cta-box"
          >
            <h2>Ready to Accelerate Your Amazon Growth?</h2>
            <p>Book a free strategy session and discover how we can help you achieve your goals</p>
            <Button
              variant="primary"
              size="large"
              onClick={() => setIsModalOpen(true)}
              icon={<FaArrowRight />}
              iconPosition="right"
            >
              Book Strategy Session
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Lead Form Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Book Your Strategy Session"
        size="large"
      >
        <LeadForm onSuccess={() => setIsModalOpen(false)} />
      </Modal>
    </div>
  )
}

const ServiceCard = ({ service, index, onBookSession }) => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <div
      ref={ref}
      className="service-detail-card"
    >
      <div className="service-detail-header">
        <div className="service-detail-icon" style={{ backgroundColor: service.color }}>
          <service.icon />
        </div>
        <div className="service-detail-title">
          <h2>{service.title}</h2>
          <p>{service.description}</p>
        </div>
      </div>

      <div className="service-detail-content">
        <div className="service-detail-section">
          <h3>What's Included</h3>
          <div className="features-list">
            {service.features.map((feature, idx) => (
              <motion.div
                key={idx}
                className="feature-item"
              >
                <FaCheck className="check-icon" />
                <span>{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="service-detail-section">
          <h3>Our Process</h3>
          <div className="process-steps">
            {service.process.map((step, idx) => (
              <motion.div
                key={idx}
                className="process-step"
              >
                <div className="step-number">{idx + 1}</div>
                <div className="step-text">{step}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="service-detail-footer">
        <Button
          variant="primary"
          size="medium"
          onClick={onBookSession}
          icon={<FaArrowRight />}
          iconPosition="right"
        >
          Book Strategy Session
        </Button>
      </div>
    </div>
  )
}

export default Services

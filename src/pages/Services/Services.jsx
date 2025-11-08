import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  FaAmazon,
  FaBullhorn,
  FaPalette,
  FaStar,
  FaCode,
  FaLaptopCode,
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
import SuccessPopup from '../../components/SuccessPopup/SuccessPopup'
import './Services.css'

const slugify = (text = '') =>
  text
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/\+/g, 'plus')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')

const Services = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [successDetails, setSuccessDetails] = useState(null)
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
      title: 'Website Development',
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
      icon: FaLaptopCode,
      title: 'Web Development',
      description: 'High-converting websites engineered for SEO, speed, and delightful user experiences.',
      color: '#2563EB',
      features: [
        'Corporate & E-commerce Websites',
        'Headless CMS Integrations',
        'SEO & Performance Optimization',
        'Responsive Design Systems',
        'Analytics & Tracking Setup'
      ],
      process: [
        'Discovery & Goal Alignment',
        'Wireframing & UI Design',
        'Development & Quality Assurance',
        'Launch & Ongoing Support'
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
      <section className="services-content section-padding" id="all-services">
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

      {/* Amazon Account & Advertising Deep Dives */}
      <AmazonAccountManagementSection onBookSession={() => setIsModalOpen(true)} />
      <AmazonAdvertisingSection onBookSession={() => setIsModalOpen(true)} />

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

const ServiceCard = ({ service, index, onBookSession }) => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <div
      ref={ref}
      id={slugify(service.title)}
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

const SectionIntro = ({ eyebrow, title, description }) => (
  <div className="aas-section-intro">
    {eyebrow && <span className="aas-eyebrow">{eyebrow}</span>}
    <h2>{title}</h2>
    {description && <p>{description}</p>}
  </div>
)

const FeatureList = ({ features, className = '', minimal = false }) => (
  <div className={`aas-feature-list ${className}`.trim()}>
    {features.map((feature, index) => (
      <div
        key={index}
        className={`aas-feature-card${minimal ? ' aas-feature-card--minimal' : ''}`.trim()}
      >
        {!minimal && <div className="aas-feature-dot" />}
        <div className="aas-feature-content">
          <h4>{feature.title}</h4>
          {!minimal && feature.description && <p>{feature.description}</p>}
          {feature.points && (
            <ul>
              {feature.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    ))}
  </div>
)

const AmazonAccountManagementSection = ({ onBookSession }) => (
  <section className="amazon-account-section section-padding" id="amazon-account-management">
    <div className="container">
      <SectionIntro
        eyebrow="Amazon Account Management"
        title="Strategic Orchestration for Marketplace Momentum"
        description="From listings and pricing to inventory and analytics, AmzCoz manages every lever that powers sustained Amazon growth."
      />

      <div className="aam-summary">
        {[
          {
            title: 'Lean, End-to-End Coverage',
            description: 'One integrated pod keeps catalogue, pricing, stock and advertising aligned.'
          },
          {
            title: 'Always-On Optimization',
            description: 'Weekly sprints sharpen promotions, listings and buy-box health without noise.'
          },
          {
            title: 'Actionable Reporting',
            description: 'Concise scorecards surface wins, risks and next moves at a glance.'
          }
        ].map((item, index) => (
          <div key={index} className="aam-summary-card">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>

      <div className="aam-feature-groups">
        <div>
          <h3>Core Focus Areas</h3>
          <FeatureList
            minimal
            className="aas-feature-list--minimal"
            features={[
              { title: 'Listing Refreshes' },
              { title: 'Inventory Health' },
              { title: 'Pricing Guardrails' },
              { title: 'Account Hygiene' },
              { title: 'Review Stewardship' },
              { title: 'Ad Alignment' }
            ]}
          />
        </div>
        <div>
          <h3>Operational Rhythm</h3>
          <FeatureList
            minimal
            className="aas-feature-list--minimal"
            features={[
              { title: 'Weekly Business Reviews' },
              { title: 'Promotion Planning' },
              { title: 'Performance Snapshots' },
              { title: 'Forecast & Replenish' },
              { title: 'Issue Escalation' },
              { title: 'Growth Experiments' }
            ]}
          />
        </div>
      </div>

      <div className="aam-cta">
        <p>
          Partner with AmzCoz for calm, consistent marketplace growth—no clutter, just the moves that matter.
        </p>
        <Button
          variant="primary"
          size="large"
          onClick={onBookSession}
          icon={<FaArrowRight />}
          iconPosition="right"
        >
          Speak with an Account Strategist
        </Button>
      </div>
    </div>
  </section>
)

const AmazonAdvertisingSection = ({ onBookSession }) => (
  <section className="amazon-ad-section section-padding" id="amazon-advertising-ppc-dsp">
    <div className="container">
      <SectionIntro
        eyebrow="Amazon Advertising Management"
        title="Profitable Growth with Smarter Ad Spend"
        description="Our advertising pod at AmzCoz balances automated precision with human expertise to align your ACoS, sales, and visibility goals."
      />

      <div className="aas-content-block">
        <h3>Listing Optimization</h3>
        <p>
          Effective advertising begins with high-converting product detail pages. We refine your listings so every click has the best chance to convert.
        </p>
        <FeatureList
          features={[
            {
              title: 'Keyword Research',
              description: 'Identify high-converting terms to strengthen discoverability and relevance.'
            },
            {
              title: 'Compelling Copywriting',
              description: 'Persuasive storytelling that highlights differentiators and buying triggers.'
            },
            {
              title: 'High-Quality Images',
              description: 'Premium visuals sized for every module to build trust instantly.'
            },
            {
              title: 'A/B Testing',
              description: 'Iterative testing on titles, creative and bullets to push conversion rates higher.'
            }
          ]}
        />
        <div className="aas-inline-insight">
          <h4>How to optimize Amazon listings for better ad results?</h4>
          <div className="aas-insight-grid">
            {[
              {
                title: 'High-Quality Images',
                description: 'Visually appealing assets signal credibility and reduce bounce.'
              },
              {
                title: 'Compelling Copywriting',
                description: 'Benefit-led messaging raises engagement and conversion.'
              },
              {
                title: 'Keyword Research',
                description: 'Intent-rich keywords improve ranking and ad efficiency.'
              },
              {
                title: 'A/B Testing',
                description: 'Experimentation uncovers the best-performing presentation.'
              }
            ].map((item, index) => (
              <div key={index} className="aas-insight-card">
                <div className="aas-insight-index">0{index + 1}</div>
                <div>
                  <h5>{item.title}</h5>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="aas-grid">
        <article className="aas-panel">
          <SectionIntro
            eyebrow="Command Center"
            title="Seller Dashboard Oversight"
            description="Proactive monitoring keeps your account healthy and responsive to Amazon signals."
          />
          <FeatureList
            features={[
              {
                title: 'Inventory Alerts',
                description: 'Anticipate stockouts and maintain buy-box momentum.'
              },
              {
                title: 'Policy Violations',
                description: 'Catch compliance issues before they escalate to suspensions.'
              },
              {
                title: 'Performance Metrics',
                description: 'Watch KPIs across sales, conversion, and ACoS daily.'
              },
              {
                title: 'Shipping Issues',
                description: 'Resolve fulfillment delays that threaten CX and rankings.'
              }
            ]}
          />
        </article>

        <article className="aas-panel">
          <SectionIntro
            eyebrow="Forecasting"
            title="Spend & Sales Planning"
            description="A forward-looking budget keeps campaigns on pace with growth targets."
          />
          <FeatureList
            features={[
              {
                title: 'Historical Data Analysis',
                description: 'Spot seasonality, winning placements, and cost benchmarks.'
              },
              {
                title: 'Market Research',
                description: 'Understand competitor moves and category velocity.'
              },
              {
                title: 'Goal Setting',
                description: 'Define ACoS, TACoS and revenue objectives for each funnel stage.'
              },
              {
                title: 'Budget Allocation',
                description: 'Distribute resources to the highest return audiences and keywords.'
              }
            ]}
          />
        </article>
      </div>

      <div className="aas-grid">
        <article className="aas-panel">
          <SectionIntro
            eyebrow="Day-to-Day Control"
            title="Daily Budget-Level Optimization"
            description="Micro adjustments keep spend efficient as pacing and marketplace trends shift."
          />
          <FeatureList
            features={[
              {
                title: 'Performance Monitoring',
                description: 'Track campaign and keyword metrics daily to stay aligned with goals.'
              },
              {
                title: 'Budget Adjustments',
                description: 'Scale investment based on performance velocity and seasonality.'
              },
              {
                title: 'Keyword Refinement',
                description: 'Harvest new opportunities and pause under-performers quickly.'
              },
              {
                title: 'Bid Optimization',
                description: 'Balance impression share with CPA and ROAS expectations.'
              }
            ]}
          />
        </article>

        <article className="aas-panel">
          <SectionIntro
            eyebrow="Launch & Scale"
            title="Campaign Creation"
            description="Structured buildouts ensure every product gets the right coverage across ad types."
          />
          <FeatureList
            features={[
              {
                title: 'Keyword Research',
                description: 'Surface high-intent search queries tied to your catalogue.'
              },
              {
                title: 'Campaign Structure',
                description: 'Design campaigns for control, scalability, and reporting clarity.'
              },
              {
                title: 'Ad Copy Creation',
                description: 'Write persuasive Sponsored Ads messaging that drives clicks.'
              },
              {
                title: 'Targeting Options',
                description: 'Blend keyword, product, and audience targeting to cover the funnel.'
              }
            ]}
          />
        </article>
      </div>

      <div className="aas-grid">
        <article className="aas-panel">
          <SectionIntro
            eyebrow="Continuous Improvement"
            title="Ongoing Campaign Optimization"
            description="Stay ahead of ACoS shifts with continuous testing, refinement, and landing page alignment."
          />
          <FeatureList
            features={[
              {
                title: 'Performance Monitoring',
                description: 'Watch ROAS, ACoS, and conversion behavior to guide changes.'
              },
              {
                title: 'Keyword Refinement',
                description: 'Add, segment, or pause keywords according to profitability.'
              },
              {
                title: 'Bid Optimization',
                description: 'Adjust bids across match types to capture incremental demand.'
              },
              {
                title: 'Ad Copy Testing',
                description: 'Experiment with creative angles to maintain ad fatigue resilience.'
              },
              {
                title: 'Landing Page Optimization',
                description: 'Ensure PDPs and stores reinforce the ad promise for higher conversion.'
              }
            ]}
          />
        </article>

        <article className="aas-panel">
          <SectionIntro
            eyebrow="Competitive Edge"
            title="Competitor Analysis"
            description="Insights into rival strategies inform positioning and budget priorities."
          />
          <FeatureList
            features={[
              {
                title: 'Identifying Key Competitors',
                description: 'Map the players contesting your category space.'
              },
              {
                title: 'Analyzing Their Strategies',
                description: 'Review listing quality, pricing, ad placements, and sentiment.'
              },
              {
                title: 'Identifying Opportunities',
                description: 'Spot gaps for product differentiation and campaign expansion.'
              },
              {
                title: 'Adjusting Your Strategy',
                description: 'Shift bids, messaging, and product focus based on competitive intel.'
              }
            ]}
          />
        </article>
      </div>

      <div className="aas-conclusion">
        <p>
          At AmzCoz, we combine automation with seasoned strategists to scale brands responsibly—maximizing returns while eliminating wasted ad spend. Our Amazon Advertising Management service is the blueprint for sustainable marketplace growth.
        </p>
        <Button
          variant="primary"
          size="large"
          onClick={onBookSession}
          icon={<FaArrowRight />}
          iconPosition="right"
        >
          Plan My Advertising Roadmap
        </Button>
      </div>
    </div>
  </section>
)

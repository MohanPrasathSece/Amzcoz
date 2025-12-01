import React, { useCallback, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaBuilding, FaChartLine, FaMedal, FaShoppingBag, FaRocket, FaImage, FaTshirt, FaDownload } from 'react-icons/fa'
import { LuSparkles } from 'react-icons/lu'
import { PiChartLineUpDuotone } from 'react-icons/pi'
import SEO from '../../components/SEO/SEO'
import './Portfolio.css'

const Portfolio = () => {
  const [brandsRef, brandsInView] = useInView({ threshold: 0.2, triggerOnce: true })
  const [analyticsRef, analyticsInView] = useInView({ threshold: 0.2, triggerOnce: true })
  const [activeImage, setActiveImage] = useState(null)

  const closeModal = useCallback(() => setActiveImage(null), [])

  useEffect(() => {
    if (!activeImage) return

    const handler = (event) => {
      if (event.key === 'Escape') {
        closeModal()
      }
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    window.addEventListener('keydown', handler)

    return () => {
      window.removeEventListener('keydown', handler)
      document.body.style.overflow = previousOverflow
    }
  }, [activeImage, closeModal])

  const brands = [
    { id: 1, name: 'Akai', logo: '/images/brands/akai.jpg' },
    { id: 2, name: 'Filgap', logo: '/images/brands/filgap.jpg' },
    { id: 3, name: 'GoFresh', logo: '/images/brands/gofresh.jpg' },
    { id: 4, name: 'Korleone', logo: '/images/brands/korleone.jpg' },
    { id: 5, name: 'Lal Gulab', logo: '/images/brands/lal_gulab.jpg' },
    { id: 6, name: 'Magic Paints', logo: '/images/brands/magic_paints.jpg' },
    { id: 7, name: 'Saukhyam', logo: '/images/brands/saukhyam.jpg' },
    { id: 8, name: 'Wit Blox', logo: '/images/brands/wit_blox.jpg' },
    { id: 9, name: 'Innovative Edge', logo: '/images/brands/innovative_edge.png' },
    { id: 10, name: 'Real Nutri Co', logo: '/images/brands/real_nutri_co.png' },
    { id: 11, name: 'Tresa', logo: '/images/brands/tresa.jpg' },
    { id: 12, name: 'Veg O Vegan', logo: '/images/brands/veg_O_vegan.png' },
    { id: 13, name: 'Zora', logo: '/images/brands/ZORA_Final_Logo.jpg' },
  ]

  const clientReportsByBrand = [
    {
      id: 'client-1',
      name: 'Client 1',
      images: [
        {
          id: 'client1-sales',
          src: '/data/brand1-1.jpg',
          alt: 'Client 1 marketplace sales growth dashboard',
        },
        {
          id: 'client1-traffic',
          src: '/data/brand1_2.jpg',
          alt: 'Client 1 customer traffic performance overview',
        },
      ],
    },
    {
      id: 'client-2',
      name: 'Client 2',
      images: [
        {
          id: 'client2-sales',
          src: '/data/brand2_1.jpg',
          alt: 'Client 2 sales momentum dashboard',
        },
        {
          id: 'client2-traffic',
          src: '/data/brand2_2.jpg',
          alt: 'Client 2 audience engagement analytics',
        },
      ],
    },
    {
      id: 'client-3',
      name: 'Client 3',
      images: [
        {
          id: 'client3-sales',
          src: '/data/brand3_1.jpg',
          alt: 'Client 3 revenue performance dashboard',
        },
        {
          id: 'client3-traffic',
          src: '/data/brand3_2.jpg',
          alt: 'Client 3 customer acquisition analytics',
        },
      ],
    },
  ]

  const results = [
    {
      id: 1,
      title: 'Marketplace Growth Velocity',
      description: 'Compound monthly growth achieved across our top-performing brands in 2024',
      value: '+38%',
      timeframe: 'YoY Growth',
      icon: <PiChartLineUpDuotone />,
      sparkline: [12, 18, 25, 29, 33, 38],
      breakdown: [
        { label: 'Q1', value: 18, suffix: '%' },
        { label: 'Q2', value: 26, suffix: '%' },
        { label: 'Q3', value: 35, suffix: '%' },
        { label: 'Q4', value: 38, suffix: '%' },
      ],
    },
    {
      id: 2,
      title: 'Advertising Efficiency Score',
      description: 'Return on ad spend uplift driven by precision targeting and creative optimization',
      value: '4.6x',
      timeframe: 'Average ROAS',
      icon: <FaRocket />,
      sparkline: [2.1, 2.8, 3.6, 4.1, 4.6],
      breakdown: [
        { label: 'Amazon', value: 5.1, suffix: 'x', cap: 7 },
        { label: 'Flipkart', value: 4.2, suffix: 'x', cap: 7 },
        { label: 'Myntra', value: 3.8, suffix: 'x', cap: 7 },
        { label: 'Ajio', value: 4.0, suffix: 'x', cap: 7 },
      ],
    },
    {
      id: 3,
      title: 'Brand Experience Index',
      description: 'Customer retention improvements powered by storefront optimization and service SLAs',
      value: '92%',
      timeframe: 'Repeat Purchase Rate',
      icon: <LuSparkles />,
      sparkline: [78, 82, 85, 88, 92],
      breakdown: [
        { label: 'CX Rating', value: 95, suffix: '%' },
        { label: 'Fulfillment', value: 89, suffix: '%' },
        { label: 'Delivery', value: 93, suffix: '%' },
        { label: 'Loyalty', value: 91, suffix: '%' },
      ],
    },
  ]

  const getSparklineGeometry = (values = []) => {
    const height = 40
    if (!values.length) {
      return { width: 120, points: '', areaPath: '' }
    }

    const step = 26
    const coords = values.map((value, idx) => {
      const clamped = Math.max(0, Math.min(value, 100))
      const x = idx * step
      const y = height - (clamped / 100) * (height - 8) - 2
      return { x, y }
    })

    const lastX = coords[coords.length - 1].x
    const width = Math.max(lastX, step)
    const points = coords.map(({ x, y }) => `${x},${y}`).join(' ')
    const areaPath = [
      `M0,${height}`,
      ...coords.map(({ x, y }) => `L${x},${y}`),
      `L${lastX},${height}`,
      'Z',
    ].join(' ')

    return { width, points, areaPath }
  }

  const capabilities = [
    {
      id: 1,
      title: 'Full-Funnel Marketplace Strategy',
      description: 'We audit category dynamics, competition, pricing elasticity, and customer behavior to build growth roadmaps for every marketplace we operate in.',
      icon: <FaChartLine />,
      points: ['Demand forecasting & target modeling', 'Pricing intelligence & dynamic repricing', 'Marketplace expansion playbooks']
    },
    {
      id: 2,
      title: 'Brand Accelerator Pods',
      description: 'Dedicated pods comprised of performance marketers, creatives, content, marketplace ops, and analytics working in agile sprints to execute rapidly.',
      icon: <FaShoppingBag />,
      points: ['Dedicated pod structure across channels', 'Weekly growth sprints and tracking', 'Unified analytics dashboard']
    },
    {
      id: 3,
      title: 'Insights & Analytics Engine',
      description: 'Automated intelligence layer blending marketplace data, inventory systems, and marketing channels to surface growth opportunities & risks.',
      icon: <FaMedal />,
      points: ['SKU-level P&L tracking', 'Anomaly detection & alerting', 'Custom executive reporting']
    },
  ]

  return (
    <div className="portfolio-page">
      <SEO
        title="Portfolio - Successful Amazon & E-commerce Projects"
        description="Explore our portfolio of successful Amazon and e-commerce projects. 15+ brands scaled with 3x ROAS uplift. View our work across Amazon, Flipkart, Myntra & more platforms."
        keywords="amazon portfolio, e-commerce case studies, amazon success stories, brand scaling, flipkart projects, marketplace growth, advertising results, e-commerce success"
        canonical="/portfolio"
      />
      <section className="portfolio-hero">
        <div className="container">
          <motion.div
            className="portfolio-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Our Portfolio</h1>
            <p>Trusted by leading brands across India to scale their e-commerce presence</p>
          </motion.div>
        </div>
      </section>

      <section className="brands-section section-padding" ref={brandsRef}>
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            animate={brandsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2>Brands We Work With</h2>
            <p>Partnering with innovative companies to drive marketplace success</p>
          </motion.div>

          <div className="brands-grid">
            {brands.map((brand, index) => (
              <motion.div
                key={brand.id}
                className="brand-card"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={brandsInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="brand-logo-wrapper">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.nextSibling.style.display = 'flex'
                    }}
                  />
                  <div className="brand-placeholder" style={{ display: 'none' }}>
                    <FaBuilding />
                    <span>{brand.name}</span>
                  </div>
                </div>
                <div className="brand-info">
                  <h3>{brand.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="results-section section-padding" ref={analyticsRef}>
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            animate={analyticsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2>Performance Snapshots</h2>
            <p>Visualizing outcomes across marketplaces, advertising funnels, and customer experience</p>
          </motion.div>

          <div className="results-grid">
            {results.map((result, index) => (
              <motion.div
                key={result.id}
                className="result-card"
                initial={{ opacity: 0, y: 30 }}
                animate={analyticsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                {result.sparkline?.length ? (() => {
                  const { width: sparklineWidth, points, areaPath } = getSparklineGeometry(result.sparkline)
                  const strokeGradientId = `sparklineStroke-${result.id}`
                  const fillGradientId = `sparklineFill-${result.id}`

                  return (
                    <div className="result-graph" aria-hidden>
                      <svg
                        className="result-sparkline"
                        viewBox={`0 0 ${sparklineWidth} 40`}
                        preserveAspectRatio="none"
                      >
                        <defs>
                          <linearGradient id={strokeGradientId} x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.8" />
                            <stop offset="100%" stopColor="#2563eb" stopOpacity="0.9" />
                          </linearGradient>
                          <linearGradient id={fillGradientId} x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="rgba(96, 165, 250, 0.35)" />
                            <stop offset="100%" stopColor="rgba(37, 99, 235, 0)" />
                          </linearGradient>
                        </defs>
                        <line
                          className="result-sparkline__baseline"
                          x1="0"
                          y1="37"
                          x2={sparklineWidth}
                          y2="37"
                        />
                        {areaPath && (
                          <path
                            d={areaPath}
                            fill={`url(#${fillGradientId})`}
                          />
                        )}
                        {points && (
                          <polyline
                            points={points}
                            fill="none"
                            stroke={`url(#${strokeGradientId})`}
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        )}
                      </svg>
                    </div>
                  )
                })() : null}
                <div className="result-card__header">
                  <span className="result-icon">{result.icon}</span>
                  <div className="result-meta">
                    <span className="result-value">{result.value}</span>
                    <span className="result-timeframe">{result.timeframe}</span>
                  </div>
                </div>
                <h3>{result.title}</h3>
                <p>{result.description}</p>
                <div className="result-chart">
                  {result.breakdown.map((item) => (
                    <div key={item.label} className="chart-bar">
                      <div className="chart-bar__label">{item.label}</div>
                      <div className="chart-bar__track">
                        <div
                          className="chart-bar__fill"
                          style={{ width: `${Math.min((item.value / (item.cap || 100)) * 100, 100)}%` }}
                        />
                      </div>
                      <div className="chart-bar__value">{item.value}{item.suffix}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Samples Section */}
      <section className="samples-section section-padding">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2>Samples</h2>
            <p>Explore our design work across different mediums and styles</p>
          </motion.div>

          <div className="samples-grid">
            <motion.div
              className="sample-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="sample-icon">
                <FaChartLine />
              </div>
              <h3>Amazon Infographics</h3>
              <p>Professional infographics designed for Amazon product listings and brand storytelling</p>
              <button className="download-btn" onClick={() => window.open('https://drive.google.com/drive/folders/1EBrYSMBhlQXhMgg5r_gMj9teoFGyrU26?usp=sharing', '_blank')}>
                <FaDownload />
                Download Sample
              </button>
            </motion.div>

            <motion.div
              className="sample-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="sample-icon">
                <FaImage />
              </div>
              <h3>Posters</h3>
              <p>Eye-catching poster designs for marketing campaigns and promotional materials</p>
              <button className="download-btn" onClick={() => window.open('#', '_blank')}>
                <FaDownload />
                Download Sample
              </button>
            </motion.div>

            <motion.div
              className="sample-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="sample-icon">
                <FaTshirt />
              </div>
              <h3>Hoodie Graphics Design</h3>
              <p>Custom hoodie and apparel graphics that make your brand stand out</p>
              <button className="download-btn" onClick={() => window.open('https://drive.google.com/drive/folders/1vQj_Um6La3lKAK-GSxUZqM-iS0NDsj-W?usp=sharing', '_blank')}>
                <FaDownload />
                Download Sample
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="client-report-section section-padding">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2>Client Sales &amp; Traffic Report</h2>
            <p>Marketplace performance insights showcasing sales momentum and audience engagement.</p>
          </motion.div>

          <div className="client-report-brands">
            {clientReportsByBrand.map((brand, brandIndex) => (
              <div className="client-report-brand" key={brand.id}>
                <motion.h3
                  className="client-report-brand__title"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: brandIndex * 0.1 }}
                >
                  {brand.name}
                </motion.h3>
                <div className="client-report-gallery">
                  {brand.images.map((image, index) => (
                    <motion.button
                      key={image.id}
                      type="button"
                      className="client-report-image-button"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      onClick={() => setActiveImage(image)}
                      aria-label={`View ${image.alt}`}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <img src={image.src} alt={image.alt} className="client-report-image" />
                    </motion.button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {activeImage && (
        <div className="image-modal" onClick={closeModal} role="dialog" aria-modal="true">
          <motion.div
            className="image-modal__content"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25 }}
            onClick={(event) => event.stopPropagation()}
          >
            <button type="button" className="image-modal__close" onClick={closeModal}>
              Close
            </button>
            <img src={activeImage.src} alt={activeImage.alt} className="image-modal__image" />
            <span className="image-modal__caption">{activeImage.alt}</span>
          </motion.div>
        </div>
      )}

      {/* Capabilities Section */}
      <section className="capabilities-section section-padding">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2>How We Deliver Impact</h2>
            <p>Dedicated pods, intelligence systems, and rigorous execution ensure every marketplace stays profitable and fast-growing.</p>
          </motion.div>

          <div className="capabilities-grid">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.id}
                className="capability-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <div className="capability-icon">{capability.icon}</div>
                <h3>{capability.title}</h3>
                <p>{capability.description}</p>
                <ul>
                  {capability.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Portfolio

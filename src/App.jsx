import React, { useState, useEffect } from 'react'
import { Analytics } from '@vercel/analytics/react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import Portfolio from './pages/Portfolio/Portfolio'
import Services from './pages/Services/Services'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import { ThemeProvider } from './contexts/ThemeContext'
import './App.css'
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton'

import Preloader from './components/Preloader/Preloader'

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [initialLoading, setInitialLoading] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <HelmetProvider>
      <ThemeProvider>
        <Router>
          <Preloader onLoadingComplete={() => setInitialLoading(false)} />
          <div className="App">
            <Header />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/services" element={<Services />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </main>
            <Footer />
            <WhatsAppButton />
            <ScrollToTop show={showScrollTop} />
            <Analytics />
          </div>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  )
}

export default App

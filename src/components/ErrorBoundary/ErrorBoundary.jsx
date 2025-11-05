import React from 'react'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    try {
      // Basic logging; replace with a proper logger if available
      console.error('ErrorBoundary caught an error:', error, errorInfo)
    } catch {}
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '48px', textAlign: 'center' }}>
          <h2>Something went wrong.</h2>
          <p>Please refresh the page. If the issue persists, contact support.</p>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary

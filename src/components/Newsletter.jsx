/**
 * Newsletter Component
 * Newsletter signup form with adaptive backend support
 */

import { useState } from 'react'
import { API_ENDPOINTS, apiRequest } from '../config/api'

function Newsletter() {
  // Form state
  const [email, setEmail] = useState('')

  // UI state
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState({ type: '', message: '' })
  const [error, setError] = useState('')

  /**
   * Handle email input change
   */
  const handleChange = (e) => {
    setEmail(e.target.value)
    // Clear error when user types
    if (error) setError('')
  }

  /**
   * Validate email
   */
  const validateEmail = () => {
    if (!email.trim()) {
      setError('Email is required')
      return false
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address')
      return false
    }

    return true
  }

  /**
   * Handle form submission
   */
  const handleSubmit = async (e) => {
    e.preventDefault()

    // Clear previous status
    setStatus({ type: '', message: '' })

    // Validate email
    if (!validateEmail()) {
      return
    }

    setLoading(true)

    try {
      // Send request to API
      const response = await apiRequest(API_ENDPOINTS.newsletter, { email })

      // Success
      setStatus({
        type: 'success',
        message: response.message || 'Thank you for subscribing!'
      })

      // Reset form
      setEmail('')
    } catch (error) {
      // Error
      setStatus({
        type: 'error',
        message: error.message || 'Failed to subscribe. Please try again.'
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-3xl mx-auto text-center">
      {/* Heading */}
      <div className="mb-8">
        <h2 className="text-4xl font-bold text-white mb-4">
          Stay Updated
        </h2>
        <p className="text-xl text-primary-100">
          Subscribe to our newsletter for updates, tips, and exclusive content.
        </p>
      </div>

      {/* Newsletter Form */}
      <form onSubmit={handleSubmit} className="max-w-md mx-auto" noValidate>
        <div className="flex flex-col sm:flex-row gap-3">
          {/* Email Input */}
          <div className="flex-1">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              type="email"
              id="newsletter-email"
              name="email"
              value={email}
              onChange={handleChange}
              className={`input ${error ? 'input-error' : ''}`}
              placeholder="Enter your email"
              disabled={loading}
              aria-required="true"
              aria-invalid={error ? 'true' : 'false'}
              aria-describedby={error ? 'newsletter-error' : undefined}
            />
            {error && (
              <p
                id="newsletter-error"
                className="mt-2 text-sm text-red-200 text-left"
              >
                {error}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn bg-white text-primary-600 hover:bg-gray-100 focus:ring-white shadow-lg"
            disabled={loading}
            aria-busy={loading}
          >
            {loading ? (
              <>
                <span className="spinner mr-2" />
                <span>Subscribing...</span>
              </>
            ) : (
              <>
                <span>Subscribe</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </>
            )}
          </button>
        </div>

        {/* Status Messages */}
        {status.message && (
          <div
            className={`mt-4 p-4 rounded-lg ${
              status.type === 'success'
                ? 'bg-green-500/20 text-white border border-green-400'
                : 'bg-red-500/20 text-white border border-red-400'
            }`}
            role="alert"
            aria-live="polite"
          >
            <div className="flex items-center justify-center">
              {status.type === 'success' ? (
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              )}
              <span>{status.message}</span>
            </div>
          </div>
        )}

        {/* Privacy Note */}
        <p className="mt-4 text-sm text-primary-100">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </form>

      {/* Features */}
      <div className="mt-12 grid sm:grid-cols-3 gap-6 text-white">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-3">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="font-semibold mb-1">Weekly Updates</h3>
          <p className="text-sm text-primary-100">Get the latest news every week</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-3">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <h3 className="font-semibold mb-1">Exclusive Content</h3>
          <p className="text-sm text-primary-100">Access subscriber-only resources</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-3">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h3 className="font-semibold mb-1">No Spam</h3>
          <p className="text-sm text-primary-100">Your email is safe with us</p>
        </div>
      </div>
    </div>
  )
}

export default Newsletter

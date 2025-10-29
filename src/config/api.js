/**
 * API Configuration
 * Centralized API endpoint management for hybrid deployment
 *
 * Switch between PHP (Shared Hosting) and Serverless by changing VITE_USE_PHP
 * - PHP Mode: Points to /api/*.php endpoints
 * - Serverless Mode: Points to /api/* endpoints (Vercel/Netlify Functions)
 */

// Determine if we're using PHP backend or serverless functions
const USE_PHP = import.meta.env.VITE_USE_PHP === 'true'

// Base API path
const API_BASE = '/api'

/**
 * Get the appropriate endpoint based on current mode
 * @param {string} endpoint - The endpoint name (e.g., 'contact', 'newsletter')
 * @returns {string} Full endpoint URL
 */
export const getEndpoint = (endpoint) => {
  if (USE_PHP) {
    return `${API_BASE}/${endpoint}.php`
  }
  return `${API_BASE}/${endpoint}`
}

/**
 * API Endpoints
 * Use these throughout your application
 */
export const API_ENDPOINTS = {
  contact: getEndpoint('contact'),
  newsletter: getEndpoint('newsletter'),
}

/**
 * API Request Helper
 * Centralized fetch wrapper with error handling
 *
 * @param {string} endpoint - The endpoint URL
 * @param {Object} data - The data to send
 * @param {Object} options - Additional fetch options
 * @returns {Promise<Object>} Response data
 */
export const apiRequest = async (endpoint, data, options = {}) => {
  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      body: JSON.stringify(data),
      ...options,
    })

    // Parse JSON response
    const result = await response.json()

    // Check if request was successful
    if (!response.ok) {
      throw new Error(result.message || 'Request failed')
    }

    return result
  } catch (error) {
    // Handle network errors
    if (error.name === 'TypeError' && error.message.includes('fetch')) {
      throw new Error('Network error. Please check your connection.')
    }
    throw error
  }
}

/**
 * Get current API mode (for debugging)
 */
export const getApiMode = () => USE_PHP ? 'PHP' : 'Serverless'

// Log current mode in development
if (import.meta.env.DEV) {
  console.log(`[API Config] Running in ${getApiMode()} mode`)
  console.log('[API Config] Endpoints:', API_ENDPOINTS)
}

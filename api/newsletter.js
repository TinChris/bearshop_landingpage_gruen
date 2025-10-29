/**
 * Newsletter Serverless Function
 * Works with Vercel, Netlify, and other serverless platforms
 *
 * Usage:
 * - Vercel: Automatically deployed from /api directory
 * - Netlify: Configure in netlify.toml or use /api directory
 *
 * Environment Variables:
 * - MAILCHIMP_API_KEY (optional): For Mailchimp integration
 * - MAILCHIMP_LIST_ID (optional): Mailchimp audience ID
 * - SENDGRID_API_KEY (optional): For SendGrid integration
 * - DATABASE_URL (optional): For database storage
 */

/**
 * Validate email address
 */
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

/**
 * Sanitize email
 */
function sanitizeEmail(email) {
  return String(email).trim().toLowerCase()
}

/**
 * Add subscriber to mailing list
 * This is a placeholder - implement with your preferred service
 *
 * Services you can integrate:
 * - Mailchimp: https://mailchimp.com/developer/
 * - SendGrid: https://sendgrid.com/solutions/email-marketing/
 * - ConvertKit: https://developers.convertkit.com/
 * - Buttondown: https://buttondown.email/
 * - Custom database (PostgreSQL, MongoDB, etc.)
 */
async function addSubscriber(email) {
  // TODO: Implement newsletter service integration

  // Example: Mailchimp integration
  /*
  const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY
  const MAILCHIMP_LIST_ID = process.env.MAILCHIMP_LIST_ID
  const MAILCHIMP_DC = MAILCHIMP_API_KEY.split('-')[1]

  const response = await fetch(
    `https://${MAILCHIMP_DC}.api.mailchimp.com/3.0/lists/${MAILCHIMP_LIST_ID}/members`,
    {
      method: 'POST',
      headers: {
        Authorization: `apikey ${MAILCHIMP_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email_address: email,
        status: 'subscribed',
      }),
    }
  )

  const data = await response.json()

  if (response.ok) {
    return { success: true }
  } else if (data.title === 'Member Exists') {
    return { success: true, alreadySubscribed: true }
  } else {
    throw new Error(data.detail || 'Failed to subscribe')
  }
  */

  // Placeholder implementation
  console.log('Newsletter subscription:', email)

  // Simulate checking for existing subscriber
  // In production, check your actual database/service
  return { success: true, alreadySubscribed: false }
}

/**
 * Send notification email
 */
async function sendNotification(email) {
  const toEmail = process.env.API_EMAIL || 'info@example.com'

  // TODO: Implement email notification
  console.log('Notification would be sent to:', toEmail, 'for subscriber:', email)

  return true
}

/**
 * Main handler function
 */
export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  // Handle OPTIONS request (CORS preflight)
  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      message: 'Method not allowed. Please use POST.',
    })
  }

  try {
    // Parse request body
    const { email } = req.body

    // Validation
    if (!email || !email.trim()) {
      return res.status(400).json({
        success: false,
        message: 'Email is required',
      })
    }

    // Sanitize email
    const sanitizedEmail = sanitizeEmail(email)

    // Validate email format
    if (!validateEmail(sanitizedEmail)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid email address',
      })
    }

    // Add subscriber
    const result = await addSubscriber(sanitizedEmail)

    // Check if already subscribed
    if (result.alreadySubscribed) {
      return res.status(200).json({
        success: true,
        message: 'You are already subscribed!',
      })
    }

    // Send notification (optional)
    // await sendNotification(sanitizedEmail)

    // Success
    return res.status(200).json({
      success: true,
      message: 'Thank you for subscribing! Check your email for confirmation.',
    })
  } catch (error) {
    console.error('Newsletter error:', error)

    return res.status(500).json({
      success: false,
      message: 'An error occurred. Please try again later.',
    })
  }
}

// For Netlify Functions compatibility
export const handler = handler

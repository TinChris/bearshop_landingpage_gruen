/**
 * Contact Form Serverless Function
 * Works with Vercel, Netlify, and other serverless platforms
 *
 * Usage:
 * - Vercel: Automatically deployed from /api directory
 * - Netlify: Configure in netlify.toml or use /api directory
 *
 * Environment Variables Required:
 * - API_EMAIL: Email address to receive form submissions
 * - SENDGRID_API_KEY (optional): For SendGrid email service
 */

/**
 * Validate email address
 */
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

/**
 * Sanitize input to prevent XSS
 */
function sanitizeInput(input) {
  return String(input)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;')
}

/**
 * Send email using native Node.js (basic implementation)
 * For production, use a service like SendGrid, Resend, or AWS SES
 */
async function sendEmail(to, subject, message) {
  // TODO: Implement email sending using your preferred service
  // Example services:
  // - SendGrid: https://github.com/sendgrid/sendgrid-nodejs
  // - Resend: https://resend.com/docs/send-with-nodejs
  // - AWS SES: https://aws.amazon.com/ses/

  console.log('Email would be sent:', {
    to,
    subject,
    message,
  })

  // For now, just return success
  // In production, replace this with actual email sending
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
    const { name, email, message } = req.body

    // Validation
    const errors = []

    if (!name || name.trim().length < 2) {
      errors.push('Name must be at least 2 characters')
    }

    if (!email) {
      errors.push('Email is required')
    } else if (!validateEmail(email)) {
      errors.push('Invalid email address')
    }

    if (!message || message.trim().length < 10) {
      errors.push('Message must be at least 10 characters')
    }

    // Return validation errors
    if (errors.length > 0) {
      return res.status(400).json({
        success: false,
        message: errors.join(', '),
      })
    }

    // Sanitize inputs
    const sanitizedName = sanitizeInput(name)
    const sanitizedEmail = sanitizeInput(email)
    const sanitizedMessage = sanitizeInput(message)

    // Prepare email
    const toEmail = process.env.API_EMAIL || 'info@example.com'
    const subject = `New Contact Form Submission from ${sanitizedName}`
    const emailBody = `
New contact form submission:

Name: ${sanitizedName}
Email: ${sanitizedEmail}
Message:
${sanitizedMessage}

---
Sent from: ${req.headers.host || 'Unknown'}
IP Address: ${req.headers['x-forwarded-for'] || req.connection.remoteAddress}
Time: ${new Date().toISOString()}
    `.trim()

    // Send email
    const emailSent = await sendEmail(toEmail, subject, emailBody)

    if (emailSent) {
      return res.status(200).json({
        success: true,
        message: 'Thank you! Your message has been sent successfully.',
      })
    } else {
      throw new Error('Failed to send email')
    }
  } catch (error) {
    console.error('Contact form error:', error)

    return res.status(500).json({
      success: false,
      message: 'An error occurred. Please try again later.',
    })
  }
}

// For Netlify Functions compatibility
export const handler = handler

// Minimal Express server to send emails directly using Nodemailer
// Usage:
// 1) npm i express cors nodemailer dotenv
// 2) Create a .env file in project root with:
//    SMTP_HOST=...
//    SMTP_PORT=587
//    SMTP_USER=...
//    SMTP_PASS=...
//    TO_EMAIL=adnan@amzcoz.com
//    FROM_EMAIL=no-reply@amzcoz.com
//    PORT=5001
// 3) node server/emailServer.js

const express = require('express')
const cors = require('cors')
const nodemailer = require('nodemailer')
require('dotenv').config()

const app = express()
app.use(cors())
app.use(express.json())

const {
  SMTP_HOST,
  SMTP_PORT,
  SMTP_USER,
  SMTP_PASS,
  TO_EMAIL,
  FROM_EMAIL,
} = process.env

if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !TO_EMAIL || !FROM_EMAIL) {
  console.warn('[emailServer] Missing SMTP/Email environment variables. Please set them in .env')
}

const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: Number(SMTP_PORT || 587),
  secure: Number(SMTP_PORT || 587) === 465, // true for 465, false for others
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS,
  },
})

app.post('/api/send-email', async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      serviceType,
      platform,
      storeLink,
      category,
      challenges,
    } = req.body || {}

    if (!name || !email || !phone || !serviceType) {
      return res.status(400).json({ ok: false, message: 'Missing required fields' })
    }

    const subject = `Your appointment with AMZCOZ — ${serviceType || 'Consultation'}`

    const textBody = [
      `Subject: ${subject}`,
      '',
      `Hi ${name},`,
      `Thanks for booking with AMZCOZ! This email is to confirm we received your ${serviceType || 'consultation'} request.`,
      '',
      'Request Details:',
      `• Name: ${name}`,
      `• Email: ${email}`,
      `• Phone: ${phone}`,
      `• Service Type: ${serviceType}`,
      `• Platform: ${platform || 'N/A'}`,
      `• Store/Website: ${storeLink || 'N/A'}`,
      `• Category: ${category || 'N/A'}`,
      '',
      'Requirements / Notes:',
      (challenges || 'N/A'),
      '',
      'If you need to update your request, please reply to this email or visit https://amzcoz.com/contact or call +91 80072 08742.',
      '',
      'We look forward to speaking with you!',
      'Best regards,',
      '',
      'AMZCOZ Team',
    ].join('\n')

    const htmlBody = `
      <div style="font-family:Arial,Helvetica,sans-serif;background:#0b0b0c;padding:24px;color:#e5e7eb">
        <div style="max-width:640px;margin:0 auto;background:#0f1115;border:1px solid #1f2937;border-radius:12px;overflow:hidden">
          <div style="padding:20px 24px;border-left:4px solid #60A5FA">
            <p style="margin:0 0 12px 0;color:#93C5FD;font-weight:600">Subject: <span style="color:#e5e7eb">${subject}</span></p>
            <p style="margin:16px 0 8px 0">Hi <strong>${name}</strong>,</p>
            <p style="margin:8px 0">Thanks for booking with <strong>AMZCOZ</strong>! This email is to confirm we received your <strong>${serviceType || 'consultation'}</strong> request.</p>
            <div style="height:12px"></div>
            <p style="margin:0 0 8px 0;font-weight:600;color:#e5e7eb">Request Details</p>
            <ul style="margin:0 0 16px 0;padding-left:18px;color:#cbd5e1">
              <li><strong>Name:</strong> ${name}</li>
              <li><strong>Email:</strong> ${email}</li>
              <li><strong>Phone:</strong> ${phone}</li>
              <li><strong>Service Type:</strong> ${serviceType}</li>
              <li><strong>Platform:</strong> ${platform || 'N/A'}</li>
              <li><strong>Store/Website:</strong> ${storeLink || 'N/A'}</li>
              <li><strong>Category:</strong> ${category || 'N/A'}</li>
            </ul>
            <p style="margin:0 0 6px 0;font-weight:600;color:#e5e7eb">Requirements / Notes</p>
            <p style="margin:0 0 16px 0;color:#cbd5e1">${(challenges || 'N/A').replace(/\n/g, '<br/>')}</p>
            <p style="margin:16px 0;color:#cbd5e1">If you need to reschedule or update your request, please visit <a href="https://amzcoz.com/contact" style="color:#93C5FD;text-decoration:underline">amzcoz.com/contact</a> or call <a href="tel:+918007208742" style="color:#93C5FD;text-decoration:none">+91 80072 08742</a>.</p>
            <p style="margin:16px 0 0 0">We look forward to speaking with you!<br/>Best regards,</p>
            <p style="margin:8px 0 0 0;font-weight:600">AMZCOZ Team</p>
          </div>
        </div>
      </div>
    `

    try {
      // Try sending with the submitter's email as the From (may be rejected by some SMTP providers/SPF/DMARC)
      await transporter.sendMail({
        from: email,
        to: TO_EMAIL,
        replyTo: email,
        subject,
        text: textBody,
        html: htmlBody,
      })
    } catch (primaryErr) {
      // Fallback: send from configured FROM_EMAIL and set Reply-To to the submitter's email for easy reply
      await transporter.sendMail({
        from: FROM_EMAIL,
        to: TO_EMAIL,
        replyTo: email,
        subject,
        text: textBody,
        html: htmlBody,
      })
    }

    return res.json({ ok: true })
  } catch (err) {
    console.error('[emailServer] send-email error:', err)
    return res.status(500).json({ ok: false, message: 'Email send failed' })
  }
})

const PORT = process.env.PORT || 5001
app.listen(PORT, () => {
  console.log(`[emailServer] Listening on port ${PORT}`)
})

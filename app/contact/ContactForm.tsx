'use client'

import { useState } from 'react'
import styles from './ContactForm.module.css'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<string[]>([])

  async function handleSubmit() {
    const firstName = (document.getElementById('firstName') as HTMLInputElement)?.value.trim()
    const lastName  = (document.getElementById('lastName')  as HTMLInputElement)?.value.trim()
    const email     = (document.getElementById('email')     as HTMLInputElement)?.value.trim()
    const phone     = (document.getElementById('phone')     as HTMLInputElement)?.value.trim()
    const address   = (document.getElementById('address')   as HTMLInputElement)?.value.trim()
    const service   = (document.getElementById('service')   as HTMLSelectElement)?.value
    const message   = (document.getElementById('message')   as HTMLTextAreaElement)?.value.trim()
    const contact   = (document.getElementById('contactMethod') as HTMLSelectElement)?.value

    const missing: string[] = []
    if (!firstName) missing.push('First name')
    if (!email)     missing.push('Email')
    if (!phone)     missing.push('Phone number')

    if (missing.length) {
      setErrors(missing)
      return
    }

    setErrors([])
    setLoading(true)

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '83d9fe20-eb33-4da5-b19e-c74f52921b1f',
          subject: `New Quote Request — ${firstName} ${lastName}`.trim(),
          from_name: `${firstName} ${lastName}`.trim(),
          email,
          phone,
          address:           address  || 'Not provided',
          service:           service  || 'Not specified',
          message:           message  || 'No additional details',
          preferred_contact: contact  || 'Not specified',
        }),
      })

      const data = await res.json()

      if (data.success) {
        setSubmitted(true)
      } else {
        setErrors(['Something went wrong. Please try again or call us at (813) 693-2623.'])
      }
    } catch {
      setErrors(['Network error. Please try again or call us at (813) 693-2623.'])
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className={styles.wrap}>
        <div className={styles.success}>
          <div className={styles.checkCircle}>
            <svg viewBox="0 0 24 24" fill="currentColor" width={30} height={30}>
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
            </svg>
          </div>
          <h3>Thank You!</h3>
          <p>
            We&rsquo;ve received your request and will contact you within{' '}
            <strong>24 hours</strong> to schedule your personalized preview.
          </p>
          <p className={styles.successSub}>
            Questions in the meantime? Call or text us at{' '}
            <a href="tel:8136932623">(813) 693-2623</a>
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.wrap}>
      <div className={styles.formHead}>
        <h3>Request a Free Quote</h3>
        <p>
          <em>See the difference before it&rsquo;s installed.</em> We&rsquo;ll respond
          within 24 hours.
        </p>
      </div>

      {errors.length > 0 && (
        <div className={styles.errorBox}>
          {errors.join(' ')}
        </div>
      )}

      <div className={styles.row}>
        <div className={styles.group}>
          <label htmlFor="firstName">First Name *</label>
          <input type="text" id="firstName" placeholder="Jane" />
        </div>
        <div className={styles.group}>
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" placeholder="Smith" />
        </div>
      </div>

      <div className={styles.group}>
        <label htmlFor="email">Email Address *</label>
        <input type="email" id="email" placeholder="jane@example.com" />
      </div>

      <div className={styles.group}>
        <label htmlFor="phone">Phone Number *</label>
        <input type="tel" id="phone" placeholder="(813) 000-0000" />
      </div>

      <div className={styles.group}>
        <label htmlFor="address">Property Address</label>
        <input type="text" id="address" placeholder="123 Main St, Tampa, FL" />
      </div>

      <div className={styles.group}>
        <label htmlFor="service">Service Interested In</label>
        <select id="service">
          <option value="">Select a service...</option>
          <option value="turf">Artificial Turf Installation</option>
          <option value="pavers">Paver Installation</option>
          <option value="both">Turf + Pavers</option>
          <option value="other">Not Sure / Other</option>
        </select>
      </div>

      <div className={styles.group}>
        <label htmlFor="message">Additional Details</label>
        <textarea
          id="message"
          placeholder="Tell us about your project — yard size, timeline, questions, etc."
        />
      </div>

      <div className={styles.group}>
        <label htmlFor="contactMethod">Preferred Contact Method</label>
        <select id="contactMethod">
          <option value="">Select preference...</option>
          <option value="call">Phone Call</option>
          <option value="text">Text Message</option>
          <option value="email">Email</option>
        </select>
      </div>

      <button className={styles.submit} onClick={handleSubmit} disabled={loading}>
        {loading ? 'Sending...' : 'Submit Free Quote Request →'}
      </button>
      <p className={styles.formNote}>100% complimentary · No pressure · No obligation</p>
    </div>
  )
}

import type { Metadata } from 'next'
import Image from 'next/image'
import styles from './contact.module.css'
import ContactForm from './ContactForm'

export const metadata: Metadata = {
  title: 'Contact',
}

export default function ContactPage() {
  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.sectionLabel} style={{ color: 'var(--gold-light)', display: 'block', marginBottom: '14px' }}>
            Get In Touch
          </span>
          <h1>Contact Luxury Tampa Turf</h1>
          <p>
            Simply fill out your details and we&rsquo;ll contact you within{' '}
            <strong style={{ color: '#fff' }}>24 hours</strong> to schedule your
            personalized preview via email, text, or call.
          </p>
        </div>
      </section>

      {/* CONTACT LAYOUT */}
      <section className={styles.contactSection}>
        <div className={styles.sectionInner}>
          <div className={styles.layout}>

            {/* LEFT: INFO */}
            <div className={styles.info}>
              <span className={styles.sectionLabel}>Reach Us Directly</span>
              <h2>We&rsquo;d Love to Hear from You</h2>
              <div className={styles.divider} />
              <p>
                Whether you&rsquo;re ready to schedule a visualization or just have
                questions, we&rsquo;re here 7 days a week. No pressure, no obligation —
                just honest conversation about what we can do for your yard.
              </p>

              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>📞</div>
                <div>
                  <strong>Phone / Text</strong>
                  <a href="tel:8137932623">(813) 793-2623</a>
                  <span>Call or Text — 7 Days a Week</span>
                </div>
              </div>

              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>✉️</div>
                <div>
                  <strong>Email</strong>
                  <a href="mailto:luxurytampaturf@gmail.com">luxurytampaturf@gmail.com</a>
                </div>
              </div>

              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>🕐</div>
                <div>
                  <strong>Business Hours</strong>
                  <span>Monday – Sunday: 7:00 AM – 9:00 PM</span>
                  <span className={styles.muted}>Appointments available outside standard hours</span>
                </div>
              </div>

              <div className={styles.floridaImg}>
                <Image
                  src="https://images.squarespace-cdn.com/content/v1/697fd82b777b644baa33f87b/f1c8d775-330d-4f37-8684-2c353027dd22/florida.jpg"
                  alt="Florida Service Area"
                  width={560}
                  height={220}
                  style={{ width: '100%', height: '220px', objectFit: 'cover' }}
                />
                <div className={styles.floridaOverlay}>
                  Serving Tampa Bay &amp; Surrounding Areas
                </div>
              </div>
            </div>

            {/* RIGHT: FORM */}
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}

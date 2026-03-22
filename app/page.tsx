import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Luxury Tampa Turf — Premium Artificial Turf Installation',
}

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width={24} height={24}>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
      </svg>
    ),
    title: 'Transparent Pricing',
    body: 'No hidden fees, no inflated change orders. Our pricing is straightforward and honest from day one.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width={24} height={24}>
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 4l5 2.18V11c0 3.5-2.33 6.79-5 7.93C9.33 17.79 7 14.5 7 11V7.18L12 5z" />
      </svg>
    ),
    title: '5-Star Service',
    body: 'From first consultation to final installation, exceptional craftsmanship and meticulous attention to detail.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width={24} height={24}>
        <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" />
      </svg>
    ),
    title: 'Free Visualization',
    body: 'See your yard transformed with our proprietary software before a single blade of turf is laid.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width={24} height={24}>
        <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20c7 0 8-8 8-8 0 0 1.25 3.45.75 5.5C18.5 18 20 17 20 17c0-1.08-.4-2.1-1.11-2.89C20.34 12.32 21 10 21 10c-2.22 1.1-3.33.98-4 0 0 0-.82-1.59.18-4C15 4 14 2 13 2 12 2 11 3 11 4c0 1 1 2 2 2s2-1 2-2V8z" />
      </svg>
    ),
    title: 'Low Maintenance',
    body: 'Reduce water usage and enjoy a lush, green yard year-round without the upkeep of natural grass.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width={24} height={24}>
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14l-5-5 1.41-1.41L12 14.17l7.59-7.59L21 10l-9 7z" />
      </svg>
    ),
    title: 'Lasting Quality',
    body: 'Proper base preparation, drainage, and seamless installation that performs beautifully for years.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width={24} height={24}>
        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z" />
      </svg>
    ),
    title: '7 Days a Week',
    body: 'Available Monday – Sunday, 7AM–9PM, with appointments outside standard hours.',
  },
]

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.badge}>Tampa, Florida · Premium Installations</div>
          <h1 className={styles.heroTitle}>
            Transform Your Yard with{' '}
            <em className={styles.heroEm}>Luxury</em> Artificial Turf
          </h1>
          <p className={styles.heroSub}>
            See exactly how your backyard will look before committing — using our
            proprietary real-time visualization software.
          </p>
          <div className={styles.heroCta}>
            <Link href="/contact" className={styles.btnPrimary}>
              <span>Get Free Quote Today</span>
            </Link>
            <Link href="/about" className={styles.btnOutlineLight}>
              <span>Learn About Us</span>
            </Link>
          </div>
        </div>
        <div className={styles.heroScroll}>
          <div className={styles.scrollLine} />
          <span>Scroll</span>
        </div>
      </section>

      {/* QUOTE / VISUALIZATION SECTION */}
      <section className={styles.quoteSection}>
        <div className={styles.sectionInner}>
          <div className={styles.quoteGrid}>
            <div className={styles.quoteText}>
              <span className={styles.sectionLabel}>Request a Free Quote</span>
              <h2>See It Before It&rsquo;s Installed</h2>
              <div className={styles.divider} />
              <p>
                Using our <strong>proprietary real-time visualization software</strong>,
                we&rsquo;ll show you <em>exactly</em> how your backyard will look with
                premium artificial turf — <strong>before you commit to anything</strong>.
              </p>
              <p>
                Simply fill out your details and we&rsquo;ll contact you within{' '}
                <strong>24 hours</strong> to schedule your personalized preview via
                email, text, or call.
              </p>
              <div className={styles.pills}>
                {['100% Complimentary', 'No Pressure', 'No Obligation', 'Custom to Your Property'].map(
                  (p) => (
                    <span key={p} className={styles.pill}>{p}</span>
                  )
                )}
              </div>
              <Link href="/contact" className={styles.btnPrimary}>
                <span>Request My Free Quote</span>
              </Link>
            </div>
            <div className={styles.quoteImageWrap}>
              <Image
                src="https://images.squarespace-cdn.com/content/v1/697fd82b777b644baa33f87b/3ba8fc34-8292-4dd6-92a8-ebf8f86d9ab4/Render_Before_After.png"
                alt="Before and After Turf Visualization"
                width={600}
                height={420}
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className={styles.featuresSection}>
        <div className={styles.sectionInner}>
          <div className={styles.featuresHeader}>
            <span className={styles.sectionLabel}>Why Choose Us</span>
            <h2>The Luxury Tampa Turf Difference</h2>
            <div className={styles.dividerCenter} />
          </div>
          <div className={styles.featuresGrid}>
            {features.map(({ icon, title, body }) => (
              <div key={title} className={styles.featureCard}>
                <div className={styles.featureIcon}>{icon}</div>
                <h3 className={styles.featureTitle}>{title}</h3>
                <p className={styles.featureBody}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className={styles.ctaStrip}>
        <h2>Ready to Transform Your Outdoor Space?</h2>
        <p>
          Join Tampa homeowners who&rsquo;ve already upgraded to luxury artificial turf.
          Your free quote is just one click away.
        </p>
        <Link href="/contact" className={styles.btnPrimary}>
          Get My Free Quote →
        </Link>
      </section>
    </>
  )
}

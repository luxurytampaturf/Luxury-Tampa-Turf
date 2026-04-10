import type { Metadata } from 'next'
import styles from './offer.module.css'
import ContactForm from '@/app/contact/ContactForm'

export const metadata: Metadata = {
  title: 'Easter Special — $250 Off Premium Turf Installation',
  description:
    'Limited-time Easter offer: Save $250 on any artificial turf project over 100 sq ft. Offer expires April 15, 2026.',
}

export default function OfferPage() {
  const expirationDate = 'April 15, 2026'

  return (
    <>
      {/* HERO BANNER */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.badge}>Limited-Time Easter Offer</span>
          <h1 className={styles.heroTitle}>
            Save <em className={styles.amount}>$250</em> This Easter
          </h1>
          <p className={styles.heroSub}>
            On any artificial turf project over 100+ sq ft
          </p>
          <div className={styles.expiryBadge}>
            <svg viewBox="0 0 24 24" fill="currentColor" width={18} height={18}>
              <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z" />
            </svg>
            Offer expires {expirationDate}
          </div>

          {/* Applied offer CTA */}
          <div className={styles.appliedWrap}>
            <a href="#claim-form" className={styles.btnPrimary}>
              <span>Claim Your $250 Off</span>
            </a>
            <div className={styles.appliedBadge}>
              <svg viewBox="0 0 24 24" fill="currentColor" width={14} height={14}>
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
              Offer Applied — $250 Off Your Quote
            </div>
          </div>
        </div>
      </section>

      {/* OFFER DETAILS */}
      <section className={styles.detailsSection}>
        <div className={styles.sectionInner}>
          <div className={styles.detailsGrid}>
            {/* Left — Egg / Easter card */}
            <div className={styles.easterCard}>
              <div className={styles.eggWrap}>
                <svg className={styles.egg} viewBox="0 0 120 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <ellipse cx="60" cy="90" rx="52" ry="65" fill="url(#eggGrad)" />
                  <path d="M10 85 C30 75, 50 95, 70 80 C90 65, 110 90, 110 90" stroke="#7ed957" strokeWidth="3" fill="none" opacity="0.6" />
                  <path d="M8 100 C35 110, 55 90, 80 105 C100 115, 112 100, 112 100" stroke="#c9a84c" strokeWidth="2.5" fill="none" opacity="0.5" />
                  <circle cx="40" cy="70" r="4" fill="#7ed957" opacity="0.4" />
                  <circle cx="75" cy="105" r="5" fill="#c9a84c" opacity="0.35" />
                  <circle cx="55" cy="120" r="3" fill="#7ed957" opacity="0.3" />
                  <defs>
                    <linearGradient id="eggGrad" x1="60" y1="25" x2="60" y2="155" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#f8f5ec" />
                      <stop offset="100%" stopColor="#e8e0cc" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className={styles.savingsTag}>
                <span className={styles.savingsAmount}>$250</span>
                <span className={styles.savingsLabel}>OFF</span>
              </div>
            </div>

            {/* Right — Details */}
            <div className={styles.detailsText}>
              <span className={styles.sectionLabel}>How It Works</span>
              <h2>Your Easter Savings</h2>
              <div className={styles.divider} />
              <div className={styles.steps}>
                <div className={styles.step}>
                  <div className={styles.stepNum}>1</div>
                  <div>
                    <h3>Request Your Free Quote</h3>
                    <p>
                      Fill out our quick form or give us a call. We&rsquo;ll
                      schedule a consultation at your convenience.
                    </p>
                  </div>
                </div>
                <div className={styles.step}>
                  <div className={styles.stepNum}>2</div>
                  <div>
                    <h3>Visualize Your New Yard</h3>
                    <p>
                      See exactly how your space will look using our proprietary
                      real-time visualization software — before any work begins.
                    </p>
                  </div>
                </div>
                <div className={styles.step}>
                  <div className={styles.stepNum}>3</div>
                  <div>
                    <h3>Save $250 at Booking</h3>
                    <p>
                      Mention this Easter offer when you book your project of
                      100+ sq ft and we&rsquo;ll apply your $250 discount automatically.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINE PRINT + TERMS */}
      <section className={styles.termsSection}>
        <div className={styles.sectionInner}>
          <div className={styles.termsCard}>
            <h3>Offer Details</h3>
            <ul className={styles.termsList}>
              <li>$250 off any artificial turf installation project of 100 sq ft or more</li>
              <li>Valid for new bookings only</li>
              <li>Must mention this offer at time of booking</li>
              <li>Cannot be combined with other promotions</li>
              <li>Offer expires April 15, 2026</li>
            </ul>
          </div>
        </div>
      </section>

      {/* EMBEDDED FORM */}
      <section className={styles.formSection} id="claim-form">
        <div className={styles.sectionInner}>
          <div className={styles.formIntro}>
            <span className={styles.sectionLabel}>Claim Your Discount</span>
            <h2>Get Your Free Quote &amp; Lock In $250 Off</h2>
            <div className={styles.divider} />
          </div>
          <div className={styles.formWrap}>
            <ContactForm forceOffer={true} />
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className={styles.ctaStrip}>
        <h2>Don&rsquo;t Miss Out — This Offer Ends Soon</h2>
        <p>
          Spring is the perfect time to transform your yard. Lock in your $250
          savings before April 15th.
        </p>
        <div className={styles.appliedWrap}>
          <a href="#claim-form" className={styles.btnPrimary}>
            <span>Get My Free Quote &amp; Save $250 →</span>
          </a>
          <div className={styles.appliedBadgeDark}>
            <svg viewBox="0 0 24 24" fill="currentColor" width={14} height={14}>
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
            Offer Applied — $250 Off Your Quote
          </div>
        </div>
        <div className={styles.ctaExpiry}>Offer expires {expirationDate}</div>
      </section>
    </>
  )
}

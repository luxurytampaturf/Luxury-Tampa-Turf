import type { Metadata } from 'next'
import Link from 'next/link'
import styles from './about.module.css'

export const metadata: Metadata = {
  title: 'About',
}

const customerGoals = [
  'Provide high-quality, long-lasting turf solutions',
  'Deliver honest pricing, clear communication, and reliable installation',
  'Help homeowners reduce water usage and provide a low-maintenance backyard',
  'Make the most out of outdoor spaces that are functional, withstanding, and visually appealing',
]

const businessGoals = [
  'Become the most trusted turf installation company in Florida',
  'Build long-term relationships through quality workmanship and word-of-mouth referrals',
  'Continuously improve installation techniques and stay ahead of industry standards',
]

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.sectionLabel} style={{ color: 'var(--gold-light)' }}>
            Our Story
          </span>
          <h1>What We Strive For</h1>
          <p>
            Integrity, transparency, and true craftsmanship — from first consultation to
            final installation.
          </p>
        </div>
      </section>

      {/* MISSION */}
      <section className={styles.missionSection}>
        <div className={styles.sectionInner}>
          <div className={styles.missionGrid}>
            <div>
              <span className={styles.sectionLabel}>Our Mission</span>
              <h2>Five-Star Service, Every Step</h2>
              <div className={styles.divider} />
              <p>
                Our mission is to deliver exceptional five-star service throughout the
                entire process — from the very first consultation to the final
                installation. We begin by listening carefully to your vision,
                understanding your space, and providing expert recommendations tailored
                to your needs and budget.
              </p>
              <p>
                Transparency, clear communication, and detailed planning are at the core
                of what we do, ensuring you feel confident and informed every step of
                the way.
              </p>
              <p>
                When it&rsquo;s time to bring your project to life, our team focuses on
                precision, craftsmanship, and long-lasting quality. From proper base
                preparation and drainage to seamless turf installation and expertly laid
                pavers, we handle every detail with care.
              </p>
            </div>
            <div>
              <span className={styles.sectionLabel}>Why We Started</span>
              <h2>Built on Frustration with the Status Quo</h2>
              <div className={styles.divider} />
              <p>
                As founders, we both come from the hardscaping industry and have seen
                firsthand how often customers are overcharged while receiving rushed
                installations and subpar workmanship.
              </p>
              <p>
                We&rsquo;ve watched homeowners invest thousands of dollars into projects
                only to be left with uneven pavers, poorly prepared bases, visible seams
                in turf, and surprise fees that were never clearly explained upfront.
              </p>
              <p>
                That frustration is exactly why we built this company. We believe outdoor
                transformations should be built on integrity, transparency, and true
                craftsmanship. Our pricing is straightforward and honest — no hidden fees,
                no inflated change orders, no cutting corners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE CALLOUT */}
      <div className={styles.callout}>
        <blockquote>
          &ldquo;We treat your property as if it were our own, leaving you with a clean,
          durable, and beautifully finished outdoor space designed to enhance your home
          and stand the test of time.&rdquo;
        </blockquote>
        <cite>— Luxury Tampa Turf Founders</cite>
      </div>

      {/* VALUES */}
      <section className={styles.valuesSection}>
        <div className={styles.sectionInner}>
          <div className={styles.valuesHeader}>
            <span className={styles.sectionLabel}>Our Goals</span>
            <h2>What Drives Us</h2>
            <div className={styles.dividerCenter} />
          </div>
          <div className={styles.valuesCols}>
            <div className={styles.valuesCol}>
              <h3>Customer-Focused Goals</h3>
              <ul className={styles.valuesList}>
                {customerGoals.map((g) => (
                  <li key={g}>{g}</li>
                ))}
              </ul>
            </div>
            <div className={styles.valuesCol}>
              <h3>Growth &amp; Business Goals</h3>
              <ul className={styles.valuesList}>
                {businessGoals.map((g) => (
                  <li key={g}>{g}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <span className={styles.sectionLabel}>Ready to Get Started?</span>
        <h2>Contact Us Today</h2>
        <div className={styles.dividerCenter} />
        <p>
          Experience the Luxury Tampa Turf difference — free consultations, honest
          pricing, and an outdoor space you&rsquo;ll love.
        </p>
        <Link href="/contact" className={styles.btnPrimary}>
          Request a Free Quote
        </Link>
      </section>
    </>
  )
}

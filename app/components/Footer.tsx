import Link from 'next/link'
import Image from 'next/image'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.logoRow}>
          <Image
            src="https://images.squarespace-cdn.com/content/v1/697fd82b777b644baa33f87b/d243f6c5-0693-4c56-820f-0a28ea56b1dd/Artboard+1.png"
            alt="Luxury Tampa Turf"
            width={180}
            height={48}
            style={{ height: '48px', width: 'auto', objectFit: 'contain', filter: 'brightness(0) invert(1)', opacity: 0.9 }}
          />
        </div>
        <div className={styles.grid}>
          <div className={styles.col}>
            <h4 className={styles.colHead}>Business Hours</h4>
            <p>Open 7 Days a Week</p>
            <p>Monday – Sunday: 7:00 AM – 9:00 PM</p>
            <p className={styles.muted}>Appointments available outside standard hours</p>
          </div>
          <div className={styles.col}>
            <h4 className={styles.colHead}>Contact</h4>
            <a href="tel:8137932623">📞 (813) 793-2623</a>
            <p className={styles.muted}>Call or Text — 7 Days a Week</p>
            <a href="mailto:luxurytampaturf@gmail.com">✉️ luxurytampaturf@gmail.com</a>
          </div>
          <div className={styles.col}>
            <h4 className={styles.colHead}>Navigation</h4>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/contact" className={styles.goldLink}>Get a Free Quote →</Link>
          </div>
        </div>
        <div className={styles.bottom}>
          <span>Luxury Tampa Turf LLC © 2026. All rights reserved.</span>
          <span>Complimentary quotes · Professional service</span>
        </div>
      </div>
    </footer>
  )
}

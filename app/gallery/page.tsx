import type { Metadata } from 'next'
import Link from 'next/link'
import styles from './gallery.module.css'

export const metadata: Metadata = { title: 'Gallery' }

// Placeholder gallery items — swap with real photos
const placeholders = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  label: ['Skin Fade', 'Low Fade', 'Taper', 'Lineup', 'Beard Trim', 'Full Service',
          'High Fade', 'Crop Fade', 'Mid Fade', 'Temp Fade', 'Drop Fade', 'Classic Cut'][i],
}))

export default function GalleryPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.tag}>The Work</div>
          <h1>GALLERY</h1>
          <p>Every cut tells a story. Follow <a href="https://instagram.com/cutbygabe" target="_blank" rel="noopener" className={styles.igLink}>@cutbygabe</a> for more.</p>
        </div>
      </section>

      <section className={styles.gallerySection}>
        <div className={styles.grid}>
          {placeholders.map(({ id, label }) => (
            <div key={id} className={styles.item}>
              <div className={styles.placeholder}>
                <span className={styles.placeholderNum}>0{id < 10 ? '0' : ''}{id}</span>
                <div className={styles.scissors}>✂</div>
              </div>
              <div className={styles.overlay}>
                <span>{label}</span>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.igCta}>
          <p>See the full portfolio on Instagram</p>
          <a
            href="https://instagram.com/cutbygabe"
            target="_blank"
            rel="noopener"
            className={styles.btnGold}
          >
            @cutbygabe →
          </a>
        </div>
      </section>

      <section className={styles.bookCta}>
        <h2>LIKE WHAT<br /><span>YOU SEE?</span></h2>
        <p>Book your appointment and get the same results.</p>
        <Link href="/book" className={styles.btnGold}>Book Now</Link>
      </section>
    </>
  )
}

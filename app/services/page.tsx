import type { Metadata } from 'next'
import Link from 'next/link'
import styles from './services.module.css'

export const metadata: Metadata = { title: 'Services' }

const services = [
  {
    category: 'Cuts',
    items: [
      { name: 'Haircut', price: '$35', desc: 'Full precision cut tailored to your style — classic, modern, textured, or anything in between.' },
      { name: 'Fade', price: '$40', desc: 'Skin, low, mid, or high — blended to perfection with Gabe\'s signature smooth transition.' },
      { name: 'Kid\'s Cut', price: '$25', desc: 'Clean and precise cuts for kids 12 and under.' },
    ]
  },
  {
    category: 'Beard',
    items: [
      { name: 'Beard Trim', price: '$20', desc: 'Shaped, lined, and cleaned up to frame your face perfectly.' },
      { name: 'Straight Razor Shave', price: '$30', desc: 'Hot towel, straight razor, aftertreatment. The full experience.' },
      { name: 'Beard Design', price: '$25', desc: 'Custom beard sculpting and detail work.' },
    ]
  },
  {
    category: 'Combos',
    items: [
      { name: 'Cut + Beard', price: '$55', desc: 'Full haircut with beard trim — the complete package.' },
      { name: 'Cut + Lineup', price: '$45', desc: 'Haircut with edge-up for a polished finish.' },
      { name: 'VIP Package', price: '$75', desc: 'Cut + beard + straight razor shave. Show up like a don.' },
    ]
  },
  {
    category: 'Add-ons',
    items: [
      { name: 'Lineup / Edge-Up', price: '$15', desc: 'Clean the edges — hairline, temples, and neckline.' },
      { name: 'Design / Part', price: '$10', desc: 'Custom razor design or hard part added to any service.' },
      { name: 'Shampoo & Style', price: '$15', desc: 'Wash, dry, and styled before the cut.' },
    ]
  }
]

export default function ServicesPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.tag}>The Menu</div>
          <h1>SERVICES &amp;<br /><span>PRICING</span></h1>
          <p>Every cut is a craft. Here&apos;s what Gabe offers.</p>
        </div>
      </section>

      <section className={styles.main}>
        <div className={styles.inner}>
          {services.map(({ category, items }) => (
            <div key={category} className={styles.category}>
              <div className={styles.categoryLabel}>{category}</div>
              <div className={styles.grid}>
                {items.map(({ name, price, desc }) => (
                  <div key={name} className={styles.card}>
                    <div className={styles.cardTop}>
                      <span className={styles.name}>{name}</span>
                      <span className={styles.price}>{price}</span>
                    </div>
                    <p className={styles.desc}>{desc}</p>
                    <Link href="/book" className={styles.bookLink}>Book This →</Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.cta}>
        <h2>READY TO SIT<br /><span>IN THE CHAIR?</span></h2>
        <Link href="/book" className={styles.btnGold}>Book Your Appointment</Link>
      </section>
    </>
  )
}

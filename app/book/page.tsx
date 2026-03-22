import type { Metadata } from 'next'
import BookingSystem from './BookingSystem'
import styles from './book.module.css'

export const metadata: Metadata = { title: 'Book Appointment' }

export default function BookPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.tag}>Reserve Your Seat</div>
          <h1>BOOK YOUR<br /><span>APPOINTMENT</span></h1>
          <p>Pick your service, pick your date. Gabe will handle the rest.</p>
        </div>
      </section>
      <section className={styles.bookSection}>
        <BookingSystem />
      </section>
    </>
  )
}

'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import styles from './Navbar.module.css'

const links = [
  { href: '/',        label: 'Home'    },
  { href: '/about',   label: 'About'   },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const pathname  = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  // Scroll listener
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  // Close menu on route change
  useEffect(() => { setOpen(false) }, [pathname])

  const close = () => setOpen(false)

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''} ${open ? styles.navOpen : ''}`}>
        {/* Logo */}
        <Link href="/" className={styles.logo} onClick={close}>
          <Image
            src="https://images.squarespace-cdn.com/content/v1/697fd82b777b644baa33f87b/509d6134-52d1-4713-8b89-c5e077933066/Artboard+1.png?format=1500w"
            alt="Luxury Tampa Turf"
            width={180}
            height={52}
            style={{ height: '46px', width: 'auto', objectFit: 'contain' }}
            priority
          />
        </Link>

        {/* Desktop links */}
        <ul className={styles.desktopLinks}>
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`${styles.link} ${pathname === href ? styles.active : ''}`}
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/offer"
              className={`${styles.offerBtn} ${pathname === '/offer' ? styles.offerBtnActive : ''}`}
            >
              <span className={styles.offerPulse} />
              <span className={styles.offerLabel}>Easter Special — $250 Off</span>
            </Link>
          </li>
        </ul>

        {/* Hamburger button — mobile only */}
        <button
          className={`${styles.burger} ${open ? styles.burgerOpen : ''}`}
          onClick={() => setOpen(o => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <span className={styles.burgerLine} />
          <span className={styles.burgerLine} />
          <span className={styles.burgerLine} />
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`${styles.drawer} ${open ? styles.drawerOpen : ''}`}
        aria-hidden={!open}
      >
        {/* Backdrop */}
        <div className={styles.backdrop} onClick={close} />

        {/* Panel */}
        <div className={styles.panel}>
          <nav className={styles.mobileNav}>
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`${styles.mobileLink} ${pathname === href ? styles.mobileLinkActive : ''}`}
                onClick={close}
              >
                {label}
              </Link>
            ))}

            {/* Easter offer — full-width gold button */}
            <Link
              href="/offer"
              className={`${styles.mobileOfferBtn} ${pathname === '/offer' ? styles.mobileOfferBtnActive : ''}`}
              onClick={close}
            >
              <span className={styles.offerPulse} />
              <span>Easter Special — $250 Off</span>
            </Link>

            {/* CTA */}
            <Link href="/contact" className={styles.mobileCta} onClick={close}>
              Get My Free Quote →
            </Link>
          </nav>

          <div className={styles.drawerFooter}>
            <a href="tel:8136932623">(813) 693-2623</a>
            <span>Open 7 days · 7 AM – 9 PM</span>
          </div>
        </div>
      </div>
    </>
  )
}

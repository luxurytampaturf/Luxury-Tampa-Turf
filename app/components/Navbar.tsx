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
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <Link href="/" className={styles.logo}>
        <Image
          src="https://images.squarespace-cdn.com/content/v1/697fd82b777b644baa33f87b/509d6134-52d1-4713-8b89-c5e077933066/Artboard+1.png?format=1500w"
          alt="Luxury Tampa Turf"
          width={180}
          height={52}
          style={{ height: '52px', width: 'auto', objectFit: 'contain' }}
          priority
        />
      </Link>
      <ul className={styles.links}>
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
    </nav>
  )
}

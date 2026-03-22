'use client'

import { useState, useMemo } from 'react'
import styles from './BookingSystem.module.css'

const SERVICES = [
  { id: 'haircut',    name: 'Haircut',           price: '$35', duration: 45 },
  { id: 'fade',       name: 'Fade',              price: '$40', duration: 45 },
  { id: 'beard',      name: 'Beard Trim',        price: '$20', duration: 20 },
  { id: 'cut-beard',  name: 'Cut + Beard',       price: '$55', duration: 60 },
  { id: 'lineup',     name: 'Lineup / Edge-Up',  price: '$15', duration: 20 },
  { id: 'kids',       name: "Kid's Cut",         price: '$25', duration: 30 },
  { id: 'shave',      name: 'Straight Razor Shave', price: '$30', duration: 30 },
  { id: 'vip',        name: 'VIP Package',       price: '$75', duration: 90 },
]

const DAYS_OFF = [0, 1] // Sunday=0, Monday=1 closed
const HOURS = { open: 9, close: 19 } // 9am-7pm

function generateTimeSlots(date: Date): string[] {
  const day = date.getDay()
  if (DAYS_OFF.includes(day)) return []
  const close = day === 6 ? 17 : HOURS.close // Saturday closes 5pm
  const slots: string[] = []
  for (let h = HOURS.open; h < close; h++) {
    for (const m of [0, 30]) {
      const hour = h % 12 === 0 ? 12 : h % 12
      const ampm = h < 12 ? 'AM' : 'PM'
      slots.push(`${hour}:${m === 0 ? '00' : '30'} ${ampm}`)
    }
  }
  return slots
}

const MONTHS = ['January','February','March','April','May','June',
                'July','August','September','October','November','December']
const DAYS   = ['Su','Mo','Tu','We','Th','Fr','Sa']

type Step = 'service' | 'datetime' | 'details' | 'confirm'

export default function BookingSystem() {
  const [step, setStep] = useState<Step>('service')
  const [service, setService] = useState<typeof SERVICES[0] | null>(null)
  const [calYear,  setCalYear]  = useState(() => new Date().getFullYear())
  const [calMonth, setCalMonth] = useState(() => new Date().getMonth())
  const [selDate,  setSelDate]  = useState<Date | null>(null)
  const [selTime,  setSelTime]  = useState<string | null>(null)
  const [form, setForm] = useState({ name: '', phone: '', email: '', notes: '' })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<string[]>([])

  const today = useMemo(() => {
    const d = new Date(); d.setHours(0,0,0,0); return d
  }, [])

  // Build calendar grid
  const calDays = useMemo(() => {
    const first = new Date(calYear, calMonth, 1).getDay()
    const daysInMonth = new Date(calYear, calMonth + 1, 0).getDate()
    const cells: (Date | null)[] = Array(first).fill(null)
    for (let d = 1; d <= daysInMonth; d++) {
      cells.push(new Date(calYear, calMonth, d))
    }
    while (cells.length % 7 !== 0) cells.push(null)
    return cells
  }, [calYear, calMonth])

  const timeSlots = useMemo(() => selDate ? generateTimeSlots(selDate) : [], [selDate])

  function isDisabled(d: Date) {
    return d < today || DAYS_OFF.includes(d.getDay())
  }

  function prevMonth() {
    if (calMonth === 0) { setCalYear(y => y - 1); setCalMonth(11) }
    else setCalMonth(m => m - 1)
  }

  function nextMonth() {
    if (calMonth === 11) { setCalYear(y => y + 1); setCalMonth(0) }
    else setCalMonth(m => m + 1)
  }

  function handleDateClick(d: Date) {
    if (isDisabled(d)) return
    setSelDate(d)
    setSelTime(null)
  }

  function handleSubmit() {
    const errs: string[] = []
    if (!form.name.trim()) errs.push('Name')
    if (!form.phone.trim()) errs.push('Phone')
    if (!form.email.trim()) errs.push('Email')
    if (errs.length) { setErrors(errs); return }
    setErrors([])
    setSubmitted(true)
  }

  const stepNum = { service: 1, datetime: 2, details: 3, confirm: 4 }

  if (submitted) {
    return (
      <div className={styles.success}>
        <div className={styles.successIcon}>✓</div>
        <h2>YOU&apos;RE BOOKED!</h2>
        <div className={styles.successDetails}>
          <div className={styles.successRow}>
            <span>Service</span>
            <strong>{service?.name}</strong>
          </div>
          <div className={styles.successRow}>
            <span>Date</span>
            <strong>{selDate?.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</strong>
          </div>
          <div className={styles.successRow}>
            <span>Time</span>
            <strong>{selTime}</strong>
          </div>
          <div className={styles.successRow}>
            <span>Name</span>
            <strong>{form.name}</strong>
          </div>
        </div>
        <p className={styles.successNote}>
          Gabe will confirm your appointment via text at <strong>{form.phone}</strong> within a few hours.
        </p>
        <p className={styles.successSub}>See you in the chair 💈</p>
      </div>
    )
  }

  return (
    <div className={styles.wrapper}>
      {/* Progress */}
      <div className={styles.progress}>
        {(['service','datetime','details','confirm'] as Step[]).map((s, i) => (
          <div key={s} className={`${styles.progressStep} ${stepNum[step] > i + 1 ? styles.done : ''} ${step === s ? styles.current : ''}`}>
            <div className={styles.progressDot}>{stepNum[step] > i + 1 ? '✓' : i + 1}</div>
            <span>{s === 'service' ? 'Service' : s === 'datetime' ? 'Date & Time' : s === 'details' ? 'Your Info' : 'Confirm'}</span>
          </div>
        ))}
      </div>

      <div className={styles.panel}>

        {/* ── STEP 1: SERVICE ── */}
        {step === 'service' && (
          <div className={styles.step}>
            <h3 className={styles.stepTitle}>Choose Your Service</h3>
            <div className={styles.serviceGrid}>
              {SERVICES.map(svc => (
                <button
                  key={svc.id}
                  className={`${styles.svcBtn} ${service?.id === svc.id ? styles.svcSelected : ''}`}
                  onClick={() => setService(svc)}
                >
                  <div className={styles.svcTop}>
                    <span className={styles.svcName}>{svc.name}</span>
                    <span className={styles.svcPrice}>{svc.price}</span>
                  </div>
                  <span className={styles.svcDuration}>{svc.duration} min</span>
                </button>
              ))}
            </div>
            <div className={styles.stepNav}>
              <div />
              <button
                className={styles.btnNext}
                disabled={!service}
                onClick={() => setStep('datetime')}
              >
                Next: Pick Date &amp; Time →
              </button>
            </div>
          </div>
        )}

        {/* ── STEP 2: DATE & TIME ── */}
        {step === 'datetime' && (
          <div className={styles.step}>
            <h3 className={styles.stepTitle}>Pick a Date &amp; Time</h3>
            <div className={styles.calendarWrap}>

              {/* Calendar */}
              <div className={styles.calendar}>
                <div className={styles.calNav}>
                  <button onClick={prevMonth} className={styles.calArrow}>‹</button>
                  <span className={styles.calMonthLabel}>{MONTHS[calMonth]} {calYear}</span>
                  <button onClick={nextMonth} className={styles.calArrow}>›</button>
                </div>
                <div className={styles.calGrid}>
                  {DAYS.map(d => (
                    <div key={d} className={styles.calDayName}>{d}</div>
                  ))}
                  {calDays.map((d, i) => (
                    <div key={i} className={styles.calCell}>
                      {d && (
                        <button
                          className={`
                            ${styles.calDay}
                            ${isDisabled(d) ? styles.calDayDisabled : ''}
                            ${selDate?.toDateString() === d.toDateString() ? styles.calDaySelected : ''}
                            ${d.toDateString() === today.toDateString() ? styles.calDayToday : ''}
                          `}
                          onClick={() => handleDateClick(d)}
                          disabled={isDisabled(d)}
                        >
                          {d.getDate()}
                        </button>
                      )}
                    </div>
                  ))}
                </div>
                <div className={styles.calLegend}>
                  <span className={styles.legendClosed}>■ Closed (Sun/Mon)</span>
                  <span className={styles.legendAvail}>■ Available</span>
                </div>
              </div>

              {/* Time Slots */}
              <div className={styles.timesPanel}>
                {!selDate && (
                  <div className={styles.timesEmpty}>
                    <span>✂</span>
                    <p>Select a date to see available times</p>
                  </div>
                )}
                {selDate && timeSlots.length === 0 && (
                  <div className={styles.timesEmpty}>
                    <span>✗</span>
                    <p>No availability on this day</p>
                  </div>
                )}
                {selDate && timeSlots.length > 0 && (
                  <>
                    <div className={styles.timesDate}>
                      {selDate.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}
                    </div>
                    <div className={styles.timesGrid}>
                      {timeSlots.map(t => (
                        <button
                          key={t}
                          className={`${styles.timeSlot} ${selTime === t ? styles.timeSelected : ''}`}
                          onClick={() => setSelTime(t)}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className={styles.stepNav}>
              <button className={styles.btnBack} onClick={() => setStep('service')}>← Back</button>
              <button
                className={styles.btnNext}
                disabled={!selDate || !selTime}
                onClick={() => setStep('details')}
              >
                Next: Your Info →
              </button>
            </div>
          </div>
        )}

        {/* ── STEP 3: DETAILS ── */}
        {step === 'details' && (
          <div className={styles.step}>
            <h3 className={styles.stepTitle}>Your Info</h3>

            {errors.length > 0 && (
              <div className={styles.errorBox}>
                Please fill in: {errors.join(', ')}
              </div>
            )}

            <div className={styles.formGrid}>
              <div className={styles.formGroup}>
                <label>Full Name *</label>
                <input
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                />
              </div>
              <div className={styles.formGroup}>
                <label>Phone Number *</label>
                <input
                  type="tel"
                  placeholder="(813) 000-0000"
                  value={form.phone}
                  onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                />
              </div>
              <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                <label>Email Address *</label>
                <input
                  type="email"
                  placeholder="you@email.com"
                  value={form.email}
                  onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                />
              </div>
              <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                <label>Notes (optional)</label>
                <textarea
                  placeholder="Any style requests, references, or notes for Gabe..."
                  value={form.notes}
                  onChange={e => setForm(f => ({ ...f, notes: e.target.value }))}
                />
              </div>
            </div>

            <div className={styles.stepNav}>
              <button className={styles.btnBack} onClick={() => setStep('datetime')}>← Back</button>
              <button className={styles.btnNext} onClick={() => { handleSubmit(); if (!errors.length) setStep('confirm') }}>
                Review Booking →
              </button>
            </div>
          </div>
        )}

        {/* ── STEP 4: CONFIRM ── */}
        {step === 'confirm' && (
          <div className={styles.step}>
            <h3 className={styles.stepTitle}>Confirm Your Booking</h3>
            <div className={styles.summary}>
              <div className={styles.summaryRow}>
                <span>Service</span>
                <strong>{service?.name} <em>{service?.price}</em></strong>
              </div>
              <div className={styles.summaryRow}>
                <span>Duration</span>
                <strong>{service?.duration} minutes</strong>
              </div>
              <div className={styles.summaryRow}>
                <span>Date</span>
                <strong>{selDate?.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}</strong>
              </div>
              <div className={styles.summaryRow}>
                <span>Time</span>
                <strong>{selTime}</strong>
              </div>
              <div className={styles.summaryDivider} />
              <div className={styles.summaryRow}>
                <span>Name</span>
                <strong>{form.name}</strong>
              </div>
              <div className={styles.summaryRow}>
                <span>Phone</span>
                <strong>{form.phone}</strong>
              </div>
              <div className={styles.summaryRow}>
                <span>Email</span>
                <strong>{form.email}</strong>
              </div>
              {form.notes && (
                <div className={styles.summaryRow}>
                  <span>Notes</span>
                  <strong>{form.notes}</strong>
                </div>
              )}
            </div>

            <div className={styles.stepNav}>
              <button className={styles.btnBack} onClick={() => setStep('details')}>← Edit Info</button>
              <button className={styles.btnConfirm} onClick={handleSubmit}>
                ✓ Confirm Appointment
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}

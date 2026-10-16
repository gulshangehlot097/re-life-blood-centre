import { Link } from 'react-router-dom'
import { MapPin, Phone, Clock, Heart, Droplet, ArrowRight } from 'lucide-react'
import logo from '../assets/mainlogo.png'

export default function Footer() {
  return (
    <footer className="border-t-4 border-primary bg-surface px-0 pb-6 pt-12 text-ink">
      <div className="mx-auto grid w-[94%] max-w-[1200px] grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.1fr_1.3fr] lg:gap-8">
        {/* Brand Column */}
        <div>
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="Re Life Blood Centre Logo"
              className="h-16 w-16 rounded-full object-contain bg-white shadow-xs p-1 border border-line"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            <div>
              <h3 className="text-base font-extrabold tracking-tight text-primary font-display">
                RE LIFE BLOOD CENTRE
              </h3>
              <p className="text-xs font-bold text-brand-blue tracking-wide">
                JAIPUR, RAJASTHAN
              </p>
            </div>
          </Link>
          <p className="mt-3 max-w-xs text-xs leading-6 text-ink-muted">
            Dedicated to 24x7 emergency blood services, transparent donor networks, and reliable healthcare support across Jaipur.
          </p>

          {/* Social Links & Action */}
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <a
              href="tel:+919610940283"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-3.5 py-2 text-xs font-bold text-white shadow-xs transition hover:bg-primary-dark"
            >
              <Phone size={13} />
              <span>Emergency Desk</span>
            </a>
            <a
              href="https://www.instagram.com/relief_blood_centre?utm_source=qr&rpxt=OGZrZjc2bzI5Nm1p"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Profile"
              className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-white px-3 py-2 text-xs font-semibold text-ink transition hover:border-[#E1306C] hover:text-[#E1306C] shadow-xs"
            >
              <svg className="h-3.5 w-3.5 fill-current text-[#E1306C]" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span>Instagram</span>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-primary">
            Quick Links
          </h4>
          <ul className="space-y-2 text-xs">
            <li>
              <Link className="text-ink-muted transition-colors hover:text-primary flex items-center gap-1.5" to="/">
                <ArrowRight size={12} className="text-primary" /> Home
              </Link>
            </li>
            <li>
              <Link className="text-ink-muted transition-colors hover:text-primary flex items-center gap-1.5" to="/about">
                <ArrowRight size={12} className="text-primary" /> About Us
              </Link>
            </li>
            <li>
              <Link className="text-ink-muted transition-colors hover:text-primary flex items-center gap-1.5" to="/services">
                <ArrowRight size={12} className="text-primary" /> Services
              </Link>
            </li>
            <li>
              <Link className="text-ink-muted transition-colors hover:text-primary flex items-center gap-1.5" to="/gallery">
                <ArrowRight size={12} className="text-primary" /> Gallery
              </Link>
            </li>
            <li>
              <Link className="text-ink-muted transition-colors hover:text-primary flex items-center gap-1.5" to="/contact">
                <ArrowRight size={12} className="text-primary" /> Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Key Services */}
        <div>
          <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-primary">
            Blood Components
          </h4>
          <ul className="space-y-2 text-xs text-ink-muted">
            <li className="flex items-center gap-1.5">
              <Droplet size={12} className="text-brand-blue shrink-0 fill-current" /> Whole Blood Units
            </li>
            <li className="flex items-center gap-1.5">
              <Droplet size={12} className="text-brand-blue shrink-0 fill-current" /> Packed Red Blood Cells
            </li>
            <li className="flex items-center gap-1.5">
              <Droplet size={12} className="text-brand-blue shrink-0 fill-current" /> Fresh Frozen Plasma
            </li>
            <li className="flex items-center gap-1.5">
              <Droplet size={12} className="text-brand-blue shrink-0 fill-current" /> Single Donor Platelets
            </li>
            <li className="flex items-center gap-1.5">
              <Droplet size={12} className="text-brand-blue shrink-0 fill-current" /> Donation Camps
            </li>
          </ul>
        </div>

        {/* Contact & Hours */}
        <div>
          <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-primary">
            Contact &amp; Location
          </h4>
          
          <a
            className="mb-2.5 flex items-center gap-2 text-xs font-bold text-primary hover:underline"
            href="tel:+919610940283"
          >
            <Phone size={14} className="text-primary shrink-0" />
            <span>+91 9610940283</span>
          </a>

          <div className="flex items-start gap-2 text-xs leading-5 text-ink-muted">
            <MapPin size={15} className="text-brand-blue shrink-0 mt-0.5" />
            <span>
              Basement of Plot No. 3/394, Chitrakoot Yogana,<br />
              Chitrakoot, Vaishali Nagar,<br />
              Jaipur, Rajasthan – 302021
            </span>
          </div>

          <div className="mt-3.5 pt-3 border-t border-line">
            <div className="flex items-center gap-2 text-xs text-ink-muted font-medium">
              <Clock size={14} className="text-brand-green shrink-0" />
              <span>24 Hours / 7 Days Operational</span>
            </div>
            <div className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-brand-green-light px-3 py-1 text-xs font-bold text-brand-green-dark">
              <Heart size={13} className="fill-current text-brand-green" />
              <span>Emergency Center Active</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-8 w-[94%] max-w-[1200px] border-t border-line pt-4 text-center text-xs text-ink-muted">
        © 2026 Re Life Blood Centre, Jaipur. All rights reserved.
      </div>
    </footer>
  )
}
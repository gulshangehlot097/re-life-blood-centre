import { Link, NavLink } from 'react-router-dom'
import { Menu, X, MapPin, Phone, Droplet, AlertCircle, HeartHandshake, ChevronDown } from 'lucide-react'
import { useState, useEffect } from 'react'
import logo from '../assets/mainlogo.png'

const servicesList = [
  { name: 'Voluntary Blood Donation Camps', path: '/services#camps' },
  { name: 'Donor Registration', path: '/services#registration' },
  { name: 'Blood Requirements Component', path: '/services#component' },
  { name: 'Whole Blood', path: '/services#whole-blood' },
  { name: 'Packed Red Blood Cells (PRBC)', path: '/services#prbc' },
  { name: 'Fresh Frozen Plasma (FFP)', path: '/services#ffp' },
  { name: 'Random Donor Platelets (RDP)', path: '/services#rdp' },
  { name: 'Single Donor Platelet (SDP)', path: '/services#sdp' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [servicesDropdown, setServicesDropdown] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)

  const close = () => {
    setOpen(false)
    setServicesDropdown(false)
    setMobileServicesOpen(false)
  }

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [open])

  const getNavLinkClass = ({ isActive }) =>
    `relative py-3 md:py-1.5 text-xs md:text-sm font-semibold tracking-wide transition-colors duration-200 
     after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300
     ${isActive
      ? 'text-primary after:w-full font-bold'
      : 'text-ink after:w-0 hover:text-primary hover:after:w-full'
    }`

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-xs">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-primary-dark via-primary to-brand-blue text-white text-[11px] sm:text-xs py-1.5 px-4">
        <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-1 sm:gap-4 text-center sm:text-left">
          <div className="flex items-center gap-1.5 font-medium">
            <Droplet size={13} className="shrink-0 fill-current text-white animate-pulse" />
            <span className="truncate">Re Life Blood Centre • Donate Blood, Save Lives</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-[10px] sm:text-xs">
            <span className="flex items-center gap-1">
              <MapPin size={12} className="shrink-0" />
              <span>Chitrakoot, Vaishali Nagar, Jaipur</span>
            </span>
            <a href="tel:+919610940283" className="flex items-center gap-1 font-semibold hover:underline bg-white/20 px-2 py-0.5 rounded-full">
              <Phone size={12} className="shrink-0" />
              <span>24x7 Helpline: +91 9610940283</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header Container */}
      <div className="border-b border-primary-light bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex h-20 sm:h-24 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-3 shrink-0 py-1" onClick={close}>
            <img
              src={logo}
              alt="Re Life Blood Centre Logo"
              className="h-14 sm:h-16 md:h-20 w-auto object-contain rounded-full shadow-xs"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl md:text-2xl font-black tracking-tight text-primary leading-tight font-display">
                RE LIFE BLOOD CENTRE
              </span>
              <span className="text-[10px] sm:text-xs font-bold text-brand-blue tracking-wider uppercase">
                Jaipur, Rajasthan
              </span>
            </div>
          </Link>

          {/* Navigation Links with Services Dropdown */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            <NavLink to="/" className={getNavLinkClass} end onClick={close}>
              Home
            </NavLink>
            <NavLink to="/about" className={getNavLinkClass} onClick={close}>
              About Us
            </NavLink>

            {/* Desktop Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesDropdown(true)}
              onMouseLeave={() => setServicesDropdown(false)}
            >
              <NavLink 
                to="/services" 
                className={({ isActive }) => 
                  `flex items-center gap-1 py-1.5 text-xs md:text-sm font-semibold tracking-wide transition-colors duration-200 ${
                    isActive ? 'text-primary font-bold' : 'text-ink hover:text-primary'
                  }`
                }
              >
                <span>Services</span>
                <ChevronDown size={14} className={`transition-transform duration-200 ${servicesDropdown ? 'rotate-180 text-primary' : ''}`} />
              </NavLink>

              {servicesDropdown && (
                <div className="absolute left-0 top-full w-72 rounded-xl bg-white p-2 shadow-xl border border-line animate-in fade-in zoom-in-95 z-50">
                  <div className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-brand-blue border-b border-line mb-1">
                    Available Blood Services
                  </div>
                  {servicesList.map((service, index) => (
                    <Link
                      key={index}
                      to={service.path}
                      onClick={close}
                      className="block rounded-lg px-3 py-2 text-xs font-medium text-ink transition-colors hover:bg-primary-light hover:text-primary"
                    >
                      {service.name}
                    </Link>
                  ))}
                  <div className="mt-1 pt-1 border-t border-line">
                    <Link
                      to="/services"
                      onClick={close}
                      className="block text-center text-xs font-bold text-primary py-1 hover:underline"
                    >
                      View All Services →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <NavLink to="/gallery" className={getNavLinkClass} onClick={close}>
              Gallery
            </NavLink>
            <NavLink to="/contact" className={getNavLinkClass} onClick={close}>
              Contact Us
            </NavLink>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              to="/services"
              className="hidden sm:flex items-center gap-1.5 rounded-full bg-brand-green px-3.5 py-2 text-xs font-bold text-white shadow-xs transition hover:bg-brand-green-dark"
            >
              <HeartHandshake size={16} />
              <span>Become a Donor</span>
            </Link>

            <a
              href="tel:+919610940283"
              aria-label="Emergency Contact"
              className="flex items-center gap-1.5 rounded-full bg-primary px-3.5 py-2 text-xs font-bold text-white shadow-xs transition hover:bg-primary-dark animate-pulse"
            >
              <AlertCircle size={16} />
              <span className="hidden xs:inline">Emergency</span>
            </a>

            <button
              className="grid h-10 w-10 place-items-center rounded-full text-ink md:hidden hover:bg-primary-light hover:text-primary"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle Navigation"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Backdrop Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-xs md:hidden"
          onClick={close}
        />
      )}

      {/* Mobile Navigation Dropdown Menu */}
      <div
        className={`absolute left-0 right-0 top-full z-50 w-full bg-white shadow-xl transition-all duration-300 ease-in-out md:hidden border-b border-primary-light max-h-[85vh] overflow-y-auto ${open
          ? 'opacity-100 translate-y-0 visible'
          : 'opacity-0 -translate-y-2 invisible pointer-events-none'
          }`}
      >
        <nav className="flex flex-col divide-y divide-line px-6 py-3">
          <NavLink to="/" className={getNavLinkClass} end onClick={close}>
            Home
          </NavLink>
          <NavLink to="/about" className={getNavLinkClass} onClick={close}>
            About Us
          </NavLink>

          {/* Mobile Accordion for Services */}
          <div className="py-2">
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="flex w-full items-center justify-between text-xs font-semibold text-ink py-1.5"
            >
              <span>Services</span>
              <ChevronDown size={16} className={`transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180 text-primary' : ''}`} />
            </button>
            {mobileServicesOpen && (
              <div className="mt-1 flex flex-col gap-1 pl-3 border-l-2 border-primary-light">
                <Link
                  to="/services"
                  onClick={close}
                  className="py-1 text-xs font-bold text-primary"
                >
                  All Services Overview
                </Link>
                {servicesList.map((service, index) => (
                  <Link
                    key={index}
                    to={service.path}
                    onClick={close}
                    className="py-1 text-[11px] text-ink-muted hover:text-primary"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <NavLink to="/gallery" className={getNavLinkClass} onClick={close}>
            Gallery
          </NavLink>
          <NavLink to="/contact" className={getNavLinkClass} onClick={close}>
            Contact Us
          </NavLink>

          <div className="pt-3 pb-2 flex flex-col gap-2">
            <Link
              to="/services"
              onClick={close}
              className="flex items-center justify-center gap-2 rounded-lg bg-brand-green py-2.5 text-xs font-bold text-white shadow-xs"
            >
              <HeartHandshake size={16} />
              <span>Donate Blood</span>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
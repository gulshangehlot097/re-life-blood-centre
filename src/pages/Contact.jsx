import { useState } from 'react'
import { 
  MapPin, Phone, Clock, MessageSquare, ExternalLink, 
  ShieldCheck, HeartHandshake, ChevronDown, Droplet, Building2
} from 'lucide-react'
import contactImage from '../assets/hero-image.png'

export default function Contact() {
  const [openFaq, setOpenFaq] = useState(null)

  const faqs = [
    {
      q: "How can I request blood or platelets during an emergency?",
      a: "For immediate hospital requirements, call our 24x7 emergency helpline at +91 9610940283 with the doctor's requisition form, blood sample for cross-matching, and patient details."
    },
    {
      q: "What are the working hours of Re Life Blood Centre?",
      a: "Our clinical testing, blood component separation, and emergency blood dispatch units operate 24 hours a day, 7 days a week."
    },
    {
      q: "Who is eligible to donate blood?",
      a: "Any healthy individual between 18 and 65 years of age, weighing at least 45 kg, with a hemoglobin level of 12.5 g/dL or above can donate blood."
    },
    {
      q: "How can our organization or college host a voluntary blood donation camp?",
      a: "You can reach out to our camp coordination desk directly by phone or WhatsApp at +91 9610940283. Our medical team handles equipment, phlebotomists, and refreshment arrangements."
    }
  ]

  return (
    <main className="bg-surface min-h-screen py-10 px-4 sm:px-8 lg:px-[42px]">
      <div className="mx-auto w-full max-w-[1200px]">
        
        {/* Top Hero Banner Header */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary-dark via-primary to-brand-blue p-8 sm:p-12 text-white shadow-xl">
          <div className="absolute -right-10 -top-10 h-64 w-64 rounded-full bg-white/10 blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-[680px]">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white border border-white/30">
              <Droplet size={12} className="text-white fill-current animate-pulse" /> 24x7 Emergency Blood Support
            </span>
            <h1 className="mt-3 font-display text-[32px] sm:text-[42px] font-bold leading-tight">
              Get in Touch with Re Life Blood Centre
            </h1>
            <p className="mt-2 text-[12px] sm:text-[14px] text-red-100 leading-relaxed font-medium">
              Located at Chitrakoot, Vaishali Nagar, Jaipur. Reach out for emergency blood units, apheresis platelet requirements, voluntary donor registration, or organizing donation camps.
            </p>
          </div>
        </div>

        {/* Contact Info Cards Row */}
        <div className="-mt-6 relative z-20 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 px-4">
          
          {/* Card 1: Emergency Phone */}
          <a 
            href="tel:+919610940283" 
            className="group rounded-2xl bg-white p-5 shadow-md border border-line transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary/40"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-light text-primary transition-colors group-hover:bg-primary group-hover:text-white">
              <Phone size={20} />
            </div>
            <span className="mt-4 block text-[10px] font-bold uppercase tracking-wider text-ink-muted">Emergency Helpline</span>
            <strong className="text-[14px] font-bold text-ink group-hover:text-primary transition">+91 9610940283</strong>
            <p className="mt-1 text-[11px] text-ink-muted">Available 24x7 for urgent blood dispatch</p>
          </a>

          {/* Card 2: WhatsApp */}
          <a 
            href={`https://wa.me/919610940283?text=${encodeURIComponent('Hello Re Life Blood Centre Jaipur, I need emergency assistance regarding blood availability.')}`} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group rounded-2xl bg-white p-5 shadow-md border border-line transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[#25D366]/40"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#25D366]/10 text-[#25D366] transition-colors group-hover:bg-[#25D366] group-hover:text-white">
              <MessageSquare size={20} />
            </div>
            <span className="mt-4 block text-[10px] font-bold uppercase tracking-wider text-ink-muted">WhatsApp Assistance</span>
            <strong className="text-[14px] font-bold text-ink group-hover:text-[#25D366] transition">Chat on WhatsApp</strong>
            <p className="mt-1 text-[11px] text-ink-muted">Instant response for availability check</p>
          </a>

          {/* Card 3: Instagram (Standard SVG Icon) */}
          <a 
            href="https://www.instagram.com/relief_blood_centre?utm_source=qr&rpxt=OGZrZjc2bzI5Nm1p" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group rounded-2xl bg-white p-5 shadow-md border border-line transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[#E1306C]/40"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-pink-50 text-[#E1306C] transition-colors group-hover:bg-[#E1306C] group-hover:text-white">
              <svg className="h-5 w-5 fill-current text-[#E1306C] group-hover:text-white transition-colors" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </div>
            <span className="mt-4 block text-[10px] font-bold uppercase tracking-wider text-ink-muted">Instagram Updates</span>
            <strong className="text-[14px] font-bold text-ink group-hover:text-[#E1306C] transition">@relief_blood_centre</strong>
            <p className="mt-1 text-[11px] text-ink-muted">Follow for donation camp stories</p>
          </a>

          {/* Card 4: Location Info */}
          <div className="group rounded-2xl bg-white p-5 shadow-md border border-line transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-blue-light text-brand-blue">
              <Building2 size={20} />
            </div>
            <span className="mt-4 block text-[10px] font-bold uppercase tracking-wider text-ink-muted">Centre Location</span>
            <strong className="text-[13px] font-bold text-ink">Vaishali Nagar, Jaipur</strong>
            <p className="mt-1 text-[11px] text-ink-muted">Plot No. 3/394, Chitrakoot</p>
          </div>

        </div>

        {/* Main Section: Blood Centre Location & Visual Banner */}
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12 items-stretch">
          
          {/* Address & Interactive Map Card */}
          <div className="lg:col-span-6 flex flex-col justify-between rounded-3xl bg-white p-6 sm:p-8 shadow-sm border border-line">
            <div>
              <div className="flex items-center gap-2 text-primary font-bold text-[11px] uppercase tracking-wider">
                <MapPin size={16} /> Physical Address
              </div>
              <h2 className="mt-2 font-display text-[24px] font-semibold text-ink sm:text-[28px]">
                Visit Re Life Blood Centre
              </h2>
              <p className="mt-2 text-[12px] leading-relaxed text-ink-muted">
                Donors and hospital representatives can visit our registered facility in Chitrakoot, Vaishali Nagar, Jaipur for cross-matching tests and component collection.
              </p>

              <div className="mt-6 space-y-2.5 rounded-2xl bg-surface p-4 border border-line">
                <div className="flex items-center justify-between">
                  <b className="text-[13px] font-bold text-primary block font-display">RE LIFE BLOOD CENTRE</b>
                  <span className="rounded-md bg-brand-green-light px-2 py-0.5 text-[9px] font-bold text-brand-green-dark">
                    Active Centre
                  </span>
                </div>
                <p className="text-[11px] text-ink-muted leading-relaxed border-t border-line pt-2">
                  Basement of Plot No. 3/394, Chitrakoot Yogana,<br />
                  Chitrakoot, Vaishali Nagar,<br />
                  Jaipur, Rajasthan – 302021
                </p>
                <p className="text-[11px] text-ink font-semibold">
                  Contact: +91 9610940283
                </p>
              </div>
            </div>

            {/* Embedded Google Map Frame */}
            <div className="mt-6 overflow-hidden rounded-2xl border border-line shadow-inner h-[220px] relative">
              <iframe
                title="Re Life Blood Centre Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.5!2d75.7410!3d26.9030!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDU0JzEwLjgiTiA3NcKwNDQnMjcuNiJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                className="w-full h-full border-0"
                loading="lazy"
              />
              <a 
                href="https://maps.google.com/?q=Plot+No+3/394+Chitrakoot+Vaishali+Nagar+Jaipur+Rajasthan+302021" 
                target="_blank" 
                rel="noopener noreferrer"
                className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-lg bg-primary px-3 py-1.5 text-[10px] font-bold text-white shadow-md hover:bg-primary-dark transition"
              >
                Open in Maps <ExternalLink size={12} />
              </a>
            </div>
          </div>

          {/* Feature Showcase Banner */}
          <div className="relative lg:col-span-6 overflow-hidden rounded-3xl min-h-[420px] shadow-sm border border-line group">
            <img 
              src={contactImage} 
              alt="Re Life Blood Centre Healthcare Services" 
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent" />
            
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white">
              <span className="inline-block rounded-md bg-primary px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-white mb-2">
                Life Saving Network
              </span>
              <h3 className="font-display text-[22px] sm:text-[26px] font-semibold leading-tight">
                Safe Transfusion &amp; Advanced Component Banking
              </h3>
              <p className="mt-2 text-[11px] text-gray-200 max-w-[480px] leading-relaxed">
                Re Life Blood Centre adheres to rigorous clinical safety, screening every blood unit against infectious markers and preserving components under digital temperature control.
              </p>
              
              <div className="mt-4 flex flex-wrap gap-4 pt-2 border-t border-white/20 text-[10px] text-gray-300">
                <span className="flex items-center gap-1.5"><ShieldCheck size={14} className="text-brand-green" /> 100% Pathogen Screened</span>
                <span className="flex items-center gap-1.5"><HeartHandshake size={14} className="text-primary" /> Supported by Voluntary Donors</span>
              </div>
            </div>
          </div>

        </div>

        {/* FAQ Section */}
        <div className="mt-16 rounded-3xl bg-white p-6 sm:p-10 shadow-sm border border-line">
          <div className="text-center max-w-[550px] mx-auto">
            <span className="text-[10px] font-bold uppercase tracking-widest text-primary">Need Assistance?</span>
            <h2 className="mt-1 font-display text-[24px] font-semibold text-ink sm:text-[28px]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="mt-8 max-w-[850px] mx-auto space-y-3">
            {faqs.map((faq, idx) => (
              <div key={idx} className="rounded-xl border border-line bg-surface overflow-hidden transition">
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-4 text-left font-semibold text-[13px] text-ink cursor-pointer hover:text-primary transition"
                >
                  <span>{faq.q}</span>
                  <ChevronDown size={16} className={`transition-transform duration-300 ${openFaq === idx ? 'rotate-180 text-primary' : 'text-gray-400'}`} />
                </button>
                {openFaq === idx && (
                  <div className="px-4 pb-4 text-[12px] text-ink-muted leading-relaxed border-t border-line pt-2">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  )
}
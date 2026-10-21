import { useState, useRef } from 'react'
import {
  Heart, ShieldCheck, Droplet, FileCheck2, AlertCircle, PhoneCall,
  MapPin, Clock, FileText, ChevronRight, UserCheck, Activity
} from 'lucide-react'
import logo from '../assets/main-logo.png'

const termsData = [
  {
    id: 'general',
    heading: '1. General Regulatory Compliance',
    icon: ShieldCheck,
    shortText: 'Clinical standards and statutory adherence in Jaipur.',
    details: 'By using the services of Re Life Blood Centre, donors, patients, and hospital representatives agree to comply with our institutional guidelines and standard clinical practices governed by drug regulatory authorities in India.'
  },
  {
    id: 'donor-eligibility',
    heading: '2. Donor Screening & Eligibility',
    icon: UserCheck,
    shortText: 'Strict medical protocol for voluntary blood donors.',
    details: 'Donors must be healthy individuals between 18 and 65 years of age, weighing at least 45 kg, with hemoglobin above 12.5 g/dL. Medical screening including vitals evaluation, travel history, and medical background checks are mandatory prior to any collection.'
  },
  {
    id: 'blood-safety',
    heading: '3. Testing & Pathogen Screening',
    icon: Droplet,
    shortText: '100 percent mandatory infection testing before dispatch.',
    details: 'All donated units undergo rigorous automated screening for transfusion-transmissible infections including HIV, Hepatitis B, Hepatitis C, Syphilis, and Malaria, along with ABO grouping and Rh typing.'
  },
  {
    id: 'requisition',
    heading: '4. Requisition & Cross-Matching',
    icon: FileCheck2,
    shortText: 'Requirements for blood component issues.',
    details: 'Blood components such as PRBC, FFP, Platelets, or Whole Blood require an authorized medical requisition form signed by a registered medical practitioner, along with an appropriately labeled blood sample for cross-matching.'
  },
  {
    id: 'emergency-dispatch',
    heading: '5. 24x7 Emergency Services & Storage',
    icon: Activity,
    shortText: 'Continuous digital cold chain preservation.',
    details: 'Our storage systems operate continuously under strict temperature controls. Emergency blood issues for trauma and surgical critical cases are facilitated around the clock through our Vaishali Nagar desk in Jaipur.'
  },
  {
    id: 'camps',
    heading: '6. Voluntary Camps & Community Drives',
    icon: Heart,
    shortText: 'Organizing mobile camps across educational and corporate institutions.',
    details: 'Community groups, colleges, and corporate organizations can coordinate voluntary donation camps. Our mobile medical team provides certified staff, sterile disposables, refreshments, and donor certificates.'
  }
]

export default function Terms() {
  return <PolicyPage title="Terms & Clinical Guidelines" items={termsData} />
}

export function PolicyPage({ title, items }) {
  const [activeTab, setActiveTab] = useState(0)
  const itemRefs = useRef([])

  const handleTabClick = (index) => {
    setActiveTab(index)
    if (itemRefs.current[index]) {
      itemRefs.current[index].scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <main className="min-h-screen bg-surface px-4 py-8 sm:px-6 lg:px-[42px] lg:py-12">
      <div className="mx-auto max-w-[1200px]">

        {/* Header Banner */}
        <div className="relative overflow-hidden rounded-3xl bg-white p-6 sm:p-10 text-center shadow-xs border border-line">
          <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-primary-light blur-2xl pointer-events-none" />
          <img
            src={logo}
            alt="Re Life Blood Centre Logo"
            className="mx-auto h-16 w-16 object-contain rounded-full border border-line p-1 shadow-xs"
            onError={(e) => { e.target.style.display = 'none' }}
          />
          <h1 className="mt-3 font-display text-[26px] font-extrabold text-ink sm:text-[34px]">
            {title}
          </h1>
          <p className="mt-1 text-[11px] text-ink-muted">
            Re Life Blood Centre <span className="mx-1 text-primary">/</span> Jaipur, Rajasthan
          </p>
          <div className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-brand-green-light px-4 py-1.5 text-[10px] font-bold text-brand-green-dark border border-brand-green/20">
            <ShieldCheck size={14} /> Certified Blood Banking Standards
          </div>
        </div>

        {/* Clinical Protocol Notice */}
        <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-3 rounded-2xl border border-primary/20 bg-primary-light/40 p-4 text-primary-dark shadow-2xs">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary text-white">
            <AlertCircle size={18} />
          </div>
          <div className="text-[11px] leading-relaxed">
            <strong className="font-bold">Medical Protocol Notice:</strong> Re Life Blood Centre adheres to zero-compromise transfusion safety. Blood components are released strictly against valid hospital requisitions and pre-transfusion cross-matching tests.
          </div>
        </div>

        {/* Mobile Horizontal Quick Navigation */}
        <div className="mt-6 flex lg:hidden overflow-x-auto gap-2 pb-2 scrollbar-none">
          {items.map((item, index) => {
            const Icon = item.icon
            const isActive = activeTab === index
            return (
              <button
                key={item.id}
                onClick={() => handleTabClick(index)}
                className={`flex shrink-0 items-center gap-2 rounded-xl px-3.5 py-2 text-[11px] font-semibold transition cursor-pointer ${isActive
                    ? 'bg-primary text-white shadow-xs'
                    : 'bg-white text-ink border border-line'
                  }`}
              >
                <Icon size={14} />
                <span>{item.heading.split('. ')[1]}</span>
              </button>
            )
          })}
        </div>

        {/* Main Content Layout */}
        <div className="mt-6 lg:mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12 items-start">

          {/* Left Navigation (Desktop) */}
          <div className="hidden lg:col-span-4 lg:block sticky top-28 rounded-2xl bg-white p-3 shadow-xs border border-line">
            <div className="p-3 border-b border-line text-[11px] font-bold uppercase tracking-wider text-ink-muted flex items-center gap-2">
              <FileText size={14} className="text-primary" /> Guidelines Navigation
            </div>
            <div className="mt-2 space-y-1">
              {items.map((item, index) => {
                const Icon = item.icon
                const isActive = activeTab === index
                return (
                  <button
                    key={item.id}
                    onClick={() => handleTabClick(index)}
                    className={`w-full flex items-center justify-between rounded-xl p-3 text-left transition cursor-pointer ${isActive
                        ? 'bg-primary-light text-primary font-bold'
                        : 'text-ink hover:bg-surface text-[11px]'
                      }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon size={16} className={isActive ? 'text-primary' : 'text-ink-muted'} />
                      <span className="text-[11px] truncate">{item.heading}</span>
                    </div>
                    <ChevronRight size={14} className={isActive ? 'text-primary' : 'opacity-0'} />
                  </button>
                )
              })}
            </div>
          </div>

          {/* Right Details Container */}
          <div className="lg:col-span-8 space-y-4">
            {items.map((item, index) => {
              const Icon = item.icon
              return (
                <article
                  key={item.id}
                  ref={(el) => (itemRefs.current[index] = el)}
                  className={`scroll-mt-28 rounded-2xl bg-white p-6 shadow-xs border transition-all duration-300 ${activeTab === index
                      ? 'border-primary/40 ring-2 ring-primary/10'
                      : 'border-line hover:border-gray-300'
                    }`}
                >
                  <div className="flex items-center gap-3 border-b border-line pb-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-light text-primary">
                      <Icon size={20} />
                    </div>
                    <div>
                      <h2 className="font-display text-[16px] font-bold text-ink">{item.heading}</h2>
                      <p className="text-[10px] text-ink-muted">{item.shortText}</p>
                    </div>
                  </div>

                  <p className="mt-4 text-[12px] leading-relaxed text-ink-muted">
                    {item.details}
                  </p>
                </article>
              )
            })}
          </div>

        </div>

        {/* Footer Info Bar */}
        <div className="mt-10 overflow-hidden rounded-2xl bg-ink p-4 sm:p-6 text-white shadow-md border-t-2 border-primary">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

            <div className="flex items-start sm:items-center gap-2.5 text-[11px] text-slate-300">
              <MapPin size={16} className="shrink-0 text-primary mt-0.5 sm:mt-0" />
              <span>Basement of Plot No. 3/394, Chitrakoot Yogana, Chitrakoot, Vaishali Nagar, Jaipur – 302021</span>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-[11px]">
              <a href="tel:+919610940283" className="flex items-center gap-1.5 font-semibold text-white transition hover:text-primary">
                <PhoneCall size={14} className="text-primary" /> +91 9610940283
              </a>
              <span className="hidden sm:inline text-slate-700">|</span>
              <div className="flex items-center gap-1.5 text-brand-green font-semibold">
                <Clock size={14} /> 24x7 Emergency Desk
              </div>
            </div>

          </div>
        </div>

      </div>
    </main>
  )
}
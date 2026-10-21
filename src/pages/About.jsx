import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import {
  ShieldCheck,
  Heart,
  Users,
  Award,
  Clock,
  Phone,
  CheckCircle2,
  ArrowUpRight,
  Sparkles,
  Microscope,
  ThermometerSnowflake,
  Activity,
  Building2,
  Navigation,
  Quote,
  BadgeCheck
} from 'lucide-react'

import logo from '../assets/main-logo.png'
import founderPhoto from '../assets/founder-main.jpeg'
import apheresisPhoto from '../assets/apheresis.jpg'
import coldchainPhoto from '../assets/cold-chain.jpg'
import labPhoto from '../assets/laboratory.jpg'
import campPhoto from '../assets/camp.jpg'

function ScrollCounter({ end, duration = 2, suffix = '' }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          let startTime = null

          const step = (timestamp) => {
            if (!startTime) startTime = timestamp
            const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
            const easeOut = 1 - (1 - progress) * (1 - progress)
            setCount(Math.floor(easeOut * end))

            if (progress < 1) {
              requestAnimationFrame(step)
            } else {
              setCount(end)
            }
          }

          requestAnimationFrame(step)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [end, duration])

  return (
    <span ref={ref} className="tabular-nums inline-block">
      {count.toLocaleString('en-IN')}{suffix}
    </span>
  )
}

export default function About() {
  const stats = [
    {
      label: 'Voluntary Donors Registered',
      value: <ScrollCounter end={5000} suffix="+" />,
      sub: 'Verified registry in Rajasthan'
    },
    {
      label: 'Units Dispatched Safely',
      value: <ScrollCounter end={12500} suffix="+" />,
      sub: 'To trauma ICUs & surgical units'
    },
    {
      label: 'Operational Timing',
      value: <><ScrollCounter end={24} />/7 Hours</>,
      sub: 'Non-stop cross-match laboratory'
    },
    {
      label: 'Certified Testing Quality',
      value: <><ScrollCounter end={100} />% Safe</>,
      sub: 'NAT & antibody screened units'
    },
  ]

  const values = [
    {
      icon: ShieldCheck,
      index: '01',
      title: 'Purity & Clinical Safety',
      description: 'Har unit chemiluminescence, automated antibody cross-match aur strict pathogen clearance ke baad hi release hoti hai.',
      tag: 'Zero Contamination'
    },
    {
      icon: Clock,
      index: '02',
      title: '24x7 Rapid Dispatch',
      description: 'Jaipur ke trauma centres, paediatric wards aur critical care units ke liye 24 ghante emergency transit fleet tayaar rehti hai.',
      tag: 'Critical Care'
    },
    {
      icon: Heart,
      index: '03',
      title: 'Donor Care & Comfort',
      description: 'Clean, sterile aur climate-controlled apheresis lounge me experienced phlebotomists safe donation ensure karte hain.',
      tag: 'Safe Experience'
    },
    {
      icon: Users,
      index: '04',
      title: 'Community Driven Drives',
      description: 'Corporate tech parks, educational institutes aur residential societies ke sath voluntary donation drives organize kiye jaate hain.',
      tag: 'Social Impact'
    }
  ]

  const highlights = [
    { text: 'Automated blood component separation: PRBC, FFP, aur Platelets', icon: Activity },
    { text: 'High-yield apheresis equipment for Single Donor Platelet (SDP)', icon: Microscope },
    { text: 'Advanced cold-chain storage with constant digital temperature tracking', icon: ThermometerSnowflake },
    { text: 'National Blood Transfusion Council ke strict clinical standards ka palan', icon: ShieldCheck },
    { text: 'Jaipur aur aas-paas ke hospitals ke liye fast emergency network', icon: Clock },
    { text: 'Voluntary donor awareness workshops aur felicitation programs', icon: Award }
  ]

  const facilities = [
    {
      img: labPhoto,
      title: '24/7 Clinical Testing Lab',
      desc: 'Automated cross-matching aur chemiluminescence diagnostic setup'
    },
    {
      img: apheresisPhoto,
      title: 'Apheresis & SDP Separation',
      desc: 'Platelet separation aur automated blood components extraction'
    },
    {
      img: coldchainPhoto,
      title: 'Precision Cold-Chain Facility',
      desc: 'Deep freezers aur digital monitoring ke sath temperature storage'
    },
    {
      img: campPhoto,
      title: 'Voluntary Donation & Lounge',
      desc: 'Sterile patient-first consultation aur blood donation drives'
    }
  ]

  return (
    <main className="min-h-screen bg-slate-50/60 py-8 sm:py-14 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Hero Section */}
        <section className="relative overflow-hidden rounded-3xl bg-slate-900 p-8 sm:p-14 lg:p-16 text-white shadow-xl mb-12 border border-slate-800">
          <div className="absolute top-0 right-0 w-96 h-96 bg-rose-600/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-rose-300 border border-white/15 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
              </span>
              Clinical Transfusion Healthcare • Vaishali Nagar, Jaipur
            </span>

            <h1 className="mt-5 font-display text-3xl sm:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight">
              Committed to Saving Lives, <br />
              <span className="bg-gradient-to-r from-rose-400 via-rose-200 to-white bg-clip-text text-transparent">
                Every Second, Every Single Day.
              </span>
            </h1>

            <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal max-w-2xl">
              Chitrakoot, Vaishali Nagar me sthit Re Life Blood Centre ek specialized transfusion aur apheresis facility ke taur par 24 ghante emergency medical requirements fulfill karta hai.
            </p>
          </div>
        </section>

        {/* Story & Clinic Card */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-1.5 rounded-md bg-rose-50 border border-rose-100 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-rose-700">
              <Sparkles size={12} className="text-rose-600" />
              Our Purpose & Journey
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-display leading-[1.2] tracking-tight">
              Ensuring Safe, Pure & Accessible Blood Components for Jaipur
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Safe blood har zarooratmand ka adhikaar hai. Re Life Blood Centre advanced separation methods ke sath ek hi whole blood unit se red cells, plasma aur platelets separate karke kai zindagiyan bachane me help karta hai.
            </p>

            <div className="pt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {highlights.map((item, index) => {
                const ItemIcon = item.icon
                return (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 rounded-xl border border-slate-200/80 bg-white shadow-2xs hover:border-slate-300 transition-colors"
                  >
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-slate-900 text-white mt-0.5">
                      <ItemIcon size={14} />
                    </div>
                    <span className="text-xs font-medium text-slate-700 leading-relaxed">
                      {item.text}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="relative rounded-3xl bg-white p-6 sm:p-8 shadow-sm border border-slate-200/90 text-center w-full max-w-md">
              <div className="mx-auto h-24 w-24 rounded-2xl border border-slate-200 p-2 bg-slate-50 flex items-center justify-center shadow-xs">
                <img
                  src={logo}
                  alt="Re Life Blood Centre Logo"
                  className="h-full w-full object-contain"
                />
              </div>

              <h3 className="mt-4 text-base font-extrabold text-slate-900 font-display tracking-wide uppercase">
                Re Life Blood Centre
              </h3>
              <p className="text-xs font-semibold text-rose-600">
                Chitrakoot, Vaishali Nagar, Jaipur
              </p>

              <div className="mt-6 rounded-2xl bg-slate-50 p-4 border border-slate-200/70 text-left text-xs text-slate-600 space-y-3">
                <div className="flex items-center gap-2.5">
                  <div className="h-6 w-6 rounded-md bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <Clock size={13} />
                  </div>
                  <span className="font-medium text-slate-800">24x7 Active Emergency Lab</span>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="h-6 w-6 rounded-md bg-rose-100 text-rose-700 flex items-center justify-center shrink-0">
                    <Phone size={13} />
                  </div>
                  <a href="tel:+919610940283" className="font-medium text-slate-800 hover:text-rose-600 transition-colors">
                    Helpline: +91 96109 40283
                  </a>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="h-6 w-6 rounded-md bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                    <Award size={13} />
                  </div>
                  <span className="font-medium text-slate-800">State Certified Transfusion Center</span>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span>LICENSE NO. 28/JAIPUR</span>
                <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded">STATUS: ACTIVE</span>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="rounded-3xl bg-slate-900 text-white p-6 sm:p-10 mb-16 shadow-lg border border-slate-800">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 divide-y lg:divide-y-0 lg:divide-x divide-slate-800">
            {stats.map((stat, i) => (
              <div key={i} className={`text-center ${i > 1 ? 'pt-6 lg:pt-0' : ''} px-2`}>
                <div className="text-2xl sm:text-4xl font-black text-white font-display tracking-tight">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs sm:text-sm text-rose-400 font-bold">
                  {stat.label}
                </div>
                <div className="mt-0.5 text-[11px] text-slate-400 font-normal">
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Core Values */}
        <section className="mb-16">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-700 shadow-2xs">
              Quality Benchmarks
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
              Why Healthcare Providers Trust Us
            </h2>
            <p className="mt-1.5 text-xs text-slate-500">
              Strict clinical integrity aur patient safety hamari pehli priority hai.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((val, idx) => {
              const Icon = val.icon
              return (
                <div
                  key={idx}
                  className="group rounded-2xl bg-white border border-slate-200/90 p-6 shadow-2xs hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="h-11 w-11 rounded-xl bg-slate-900 text-white flex items-center justify-center transition-colors group-hover:bg-rose-600 shadow-2xs">
                        <Icon size={20} strokeWidth={1.8} />
                      </div>
                      <span className="font-mono text-[11px] text-slate-400 font-semibold">
                        {val.index}
                      </span>
                    </div>

                    <span className="text-[10px] font-bold uppercase tracking-wider text-rose-700 bg-rose-50 px-2 py-0.5 rounded">
                      {val.tag}
                    </span>

                    <h3 className="mt-2.5 text-sm font-bold text-slate-900 group-hover:text-rose-600 transition-colors">
                      {val.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-slate-500">
                      {val.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-emerald-700 font-medium">
                    <span className="flex items-center gap-1">
                      <CheckCircle2 size={12} className="text-emerald-600" /> Verified Standard
                    </span>
                    <ArrowUpRight size={13} className="text-slate-300 group-hover:text-rose-600 transition-colors" />
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* Founder Section */}
        <section className="mb-16">
          <div className="relative overflow-hidden rounded-3xl bg-white border border-slate-200/90 shadow-sm p-6 sm:p-10 lg:p-12">
            <div className="absolute top-0 right-0 w-80 h-80 bg-rose-50 rounded-full blur-3xl -z-10" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-4 flex flex-col items-center text-center">
                <div className="relative group">
                  <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-rose-500 to-slate-900 opacity-20 blur-sm group-hover:opacity-30 transition duration-300" />
                  <div className="relative h-60 w-52 sm:h-64 sm:w-56 rounded-3xl overflow-hidden border-2 border-white shadow-md bg-slate-100">
                    <img
                      src={founderPhoto}
                      alt="Director & Founder - Re Life Blood Centre"
                      className="h-full w-full object-cover object-top"
                    />
                  </div>
                </div>

               <div className="mt-4 flex flex-col items-center">
  <div className="inline-flex items-center gap-1 text-[11px] font-bold text-rose-600 bg-rose-50 border border-rose-100 px-2.5 py-0.5 rounded-full mb-1.5">
    <BadgeCheck size={13} /> Leadership & Direction
  </div>

  {/* Primary Focus: Founder Name */}
  <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-display tracking-tight">
    Mr. Richhapal Saini
  </h3>

  {/* Secondary Subtitle: Designation */}
  <p className="text-xs sm:text-sm font-semibold text-rose-600 mt-0.5">
    Director & Founder
  </p>

  {/* Organization / Location */}
  <p className="text-xs font-medium text-slate-500 mt-0.5">
    Re Life Blood Centre, Jaipur
  </p>
</div>
              </div>

              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center gap-2 text-rose-600">
                  <Quote size={24} className="rotate-180 shrink-0" />
                  <span className="text-xs font-bold uppercase tracking-wider text-rose-600">
                    Founder's Vision
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display leading-snug">
                  "Emergency me bina kisi delay ke har patient tak pure aur safe blood components pahunchana hi hamara sankalp hai."
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Medical emergency ke dauran families ko blood availability ya purity ko lekar pareshan na hona pade, is uddeshya ke sath Re Life Blood Centre ki sthapna ki gayi.
                </p>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Hamari laboratory 24 ghante modern equipment, digital temperature records aur continuous quality check ke sath operate karti hai.
                </p>

                <div className="pt-2 flex flex-wrap gap-3 text-xs font-semibold text-slate-700">
                  <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-200/80 px-3 py-1.5 rounded-xl">
                    <CheckCircle2 size={14} className="text-emerald-600" />
                    <span>24/7 Patient First Policy</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-200/80 px-3 py-1.5 rounded-xl">
                    <CheckCircle2 size={14} className="text-emerald-600" />
                    <span>Automated Apheresis Standards</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-200/80 px-3 py-1.5 rounded-xl">
                    <CheckCircle2 size={14} className="text-emerald-600" />
                    <span>Voluntary Donor Recognition</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Infrastructure Facility Gallery */}
        <section className="mb-16">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-700 shadow-2xs">
              Center Infrastructure
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
              Advanced Clinical Facility & Diagnostics
            </h2>
            <p className="mt-1.5 text-xs text-slate-500">
              Hamare certified transfusion testing lab, apheresis units aur cold-chain storage facilities.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((item, idx) => (
              <div
                key={idx}
                className="group overflow-hidden rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
              >
                <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 group-hover:text-rose-600 transition-colors">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-xs text-slate-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-emerald-700 font-medium">
                    <span className="flex items-center gap-1">
                      <CheckCircle2 size={12} className="text-emerald-600" /> Operational
                    </span>
                    <span className="text-slate-400 font-mono text-[10px]">FACILITY 0{idx + 1}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Location Box */}
        <section className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-10 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-md mb-2">
              <Building2 size={12} /> Direct Center Location
            </span>
            <h3 className="text-xl font-extrabold text-slate-900 font-display">
              Re Life Blood Centre, Vaishali Nagar, Jaipur
            </h3>
            <p className="mt-1 text-xs text-slate-500 leading-relaxed">
              Basement of Plot No. 3/394, Chitrakoot Yojna, Vaishali Nagar, Jaipur, Rajasthan 302021. Walk-in voluntary donors aur emergency hospital inquiries 24 ghante attend kiye jaate hain.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0 w-full sm:w-auto">
            <a
              href="tel:+919610940283"
              className="flex-1 sm:flex-none justify-center inline-flex items-center gap-2 rounded-xl bg-rose-600 px-6 py-3 text-xs font-bold text-white shadow-sm transition hover:bg-rose-700"
            >
              <Phone size={14} />
              <span>Call: +91 9610940283</span>
            </a>
            <a
              href="https://maps.google.com/?q=Re+Life+Blood+Centre+Vaishali+Nagar+Jaipur"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none justify-center inline-flex items-center gap-2 rounded-xl bg-slate-100 px-6 py-3 text-xs font-bold text-slate-800 border border-slate-200/80 transition hover:bg-slate-200"
            >
              <Navigation size={14} className="text-rose-600" />
              <span>Get Directions</span>
            </a>
          </div>
        </section>

      </div>
    </main>
  )
}
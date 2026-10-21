
import { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from "framer-motion"
import {
  ArrowRight,
  Check,
  ShieldCheck,
  Sparkles,
  HeartHandshake,
  Clock,
  Droplet,
  PhoneCall,
  Activity,
  Award,
  Users,
  Building2,
  CalendarCheck2,
  FileText,
  Coffee,
  HeartPulse,
  ThermometerSnowflake,
  Microscope,
  Truck,
  Sparkle,
  ArrowUpRight,
  UserCheck,
  Flame,
  Snowflake,
  Layers,
  Zap,
  CheckCircle2
} from 'lucide-react'
import heroImage from '../assets/hero-image.png'

const allServicesData = [
  {
    id: "vbdc",
    name: "Voluntary Blood Donation Camps",
    badge: "Community Outreach",
    desc: "Corporate, educational, and residential mobile donation drives with complete logistics and certified clinical staff.",
    icon: HeartHandshake,
    category: "Camps & Drives",
    availability: "Scheduled",
    color: "from-rose-500/10 to-transparent"
  },
  {
    id: "donor-reg",
    name: "Donor Registration",
    badge: "Lifesaver Network",
    desc: "Rapid digital onboarding, rare blood group phenotyping, and automated call-up alerts during critical shortages.",
    icon: UserCheck,
    category: "Donor Registry",
    availability: "Active 24x7",
    color: "from-blue-500/10 to-transparent"
  },
  {
    id: "req-comp",
    name: "Blood Requirements Component",
    badge: "Crossmatch Suite",
    desc: "Precision allocation matching recipient antibodies with vetted inventory units within minutes for emergency orders.",
    icon: Activity,
    category: "Crossmatch",
    availability: "Immediate",
    color: "from-amber-500/10 to-transparent"
  },
  {
    id: "whole-blood",
    name: "Whole Blood",
    badge: "Critical Resuscitation",
    desc: "Sterile whole blood units for acute surgical trauma, massive hemorrhage protocols, and emergency volume replacement.",
    icon: Flame,
    category: "Whole Unit",
    availability: "Stocked",
    color: "from-red-500/10 to-transparent"
  },
  {
    id: "prbc",
    name: "Packed Red Blood Cells (PRBC)",
    badge: "Hematology & Surgery",
    desc: "Leukoreduced concentrated erythrocytes with additive solution for severe chronic anemia and major surgical blood loss.",
    icon: Droplet,
    category: "Concentrate",
    availability: "Constant",
    color: "from-rose-500/10 to-transparent"
  },
  {
    id: "ffp",
    name: "Fresh Frozen Plasma (FFP)",
    badge: "Coagulation Factor",
    desc: "Rapid blast-frozen plasma kept below -30°C to preserve labile factors V, VIII, and fibrinogen for burn care.",
    icon: Snowflake,
    category: "Cryo Storage",
    availability: "Temp-Controlled",
    color: "from-cyan-500/10 to-transparent"
  },
  {
    id: "rdp",
    name: "Random Donor Platelets (RDP)",
    badge: "Platelet Therapy",
    desc: "Fractionated from whole blood donations, kept on continuous agitation at 20°C to 24°C for acute thrombocytopenia.",
    icon: Layers,
    category: "Platelet Unit",
    availability: "Agitated Storage",
    color: "from-purple-500/10 to-transparent"
  },
  {
    id: "sdp",
    name: "Single Donor Platelet (SDP)",
    badge: "Apheresis High-Yield",
    desc: "High-yield automated apheresis platelet concentrate providing a full therapeutic dose from a single matched donor.",
    icon: Zap,
    category: "Apheresis",
    availability: "On-Demand & Ready",
    color: "from-emerald-500/10 to-transparent"
  }
]

const facilityHighlights = [
  {
    icon: Activity,
    tag: 'Haemonetics Tech',
    title: 'Automated Apheresis Unit',
    description: 'Precision cell separators harvesting single donor platelets and plasma with zero donor discomfort and high therapeutic yield.'
  },
  {
    icon: ThermometerSnowflake,
    tag: '-40°C Cold Chain',
    title: 'Deep Cryo-Preservation',
    description: 'Hospital-grade digital cold rooms and cryo-freezers maintaining continuous optimal viability for red cells, platelets, and plasma.'
  },
  {
    icon: Microscope,
    tag: 'Gel Card System',
    title: 'Precision Cross-Matching Lab',
    description: 'Automated screening suites for major and minor antibody compatibility tests to guarantee zero hemolytic transfusion reactions.'
  },
  {
    icon: Truck,
    tag: '24x7 Cold Transit',
    title: 'Emergency Medical Transit',
    description: 'Rapid dispatch network fitted with validated temperature data-loggers serving major medical centres and trauma ICUs across Jaipur.'
  }
]

const donationSteps = [
  {
    step: '01',
    title: 'Rapid Registration',
    icon: FileText,
    desc: 'Fill a basic confidential donor form followed by rapid digital verification.'
  },
  {
    step: '02',
    title: 'Medical Vitals Check',
    icon: HeartPulse,
    desc: 'Quick screening for hemoglobin, blood pressure, pulse, and weight suitability.'
  },
  {
    step: '03',
    title: 'Sterile Collection',
    icon: Droplet,
    desc: 'Takes just 8 to 10 minutes using completely disposable single-use sterile kits.'
  },
  {
    step: '04',
    title: 'Rest & Refreshment',
    icon: Coffee,
    desc: 'Relax in our air-conditioned lounge with fruit drinks and donor certificate.'
  }
]

// Zero-crash native scroll counter
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

export default function Home() {
  const visibleServices = allServicesData.slice(0, 4)

  return (
    <main className="bg-surface min-h-screen text-ink selection:bg-primary selection:text-white overflow-hidden">

      {/* 24x7 live alert marquee ticker */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-ink text-white py-2.5 px-4 overflow-hidden border-b border-primary/30"
      >
        <div className="mx-auto max-w-7xl flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 font-bold text-primary">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
            </span>
            <span className="uppercase tracking-widest text-[11px] text-white">Live Status:</span>
          </div>
          <div className="flex-1 text-slate-300 font-medium truncate">
            Urgent Requirement for <strong className="text-white">O- and B- Whole Blood &amp; Single Donor Platelets</strong> in Vaishali Nagar, Jaipur.
          </div>
          <a
            href="tel:+919610940283"
            className="shrink-0 flex items-center gap-1.5 font-bold text-brand-gold hover:underline"
          >
            <PhoneCall size={12} /> Contact Desk: +91 9610940283
          </a>
        </div>
      </motion.div>

      {/* hero banner section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        <div className="relative grid grid-cols-1 lg:grid-cols-12 rounded-3xl overflow-hidden bg-gradient-to-br from-white via-red-50/50 to-blue-50/40 border border-line shadow-xl">

          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-primary/10 blur-3xl pointer-events-none"
          />
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-brand-blue/10 blur-3xl pointer-events-none"
          />

          {/* content column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative z-10 flex flex-col justify-center px-6 py-10 sm:px-10 lg:col-span-7 lg:px-12 lg:py-16"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="inline-flex items-center gap-2 w-fit rounded-full border border-primary/20 bg-white/95 px-3.5 py-1.5 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-primary backdrop-blur-md shadow-xs"
            >
              <Droplet size={13} className="text-primary fill-current animate-bounce" />
              <span>Dedicated 24x7 Life Support • Jaipur</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-5 font-display text-3xl sm:text-5xl lg:text-6xl font-black leading-[1.12] text-ink tracking-tight"
            >
              One Single Donation. <br />
              <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                Three Lives Saved.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-4 max-w-lg text-xs sm:text-sm leading-relaxed text-ink-muted font-normal"
            >
              Re Life Blood Centre delivers certified blood component processing, automated apheresis platelet concentrates, and emergency transfusion supply across Jaipur with round-the-clock medical oversight.
            </motion.p>

            {/* badges */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-6 flex flex-wrap gap-2.5"
            >
              <span className="flex items-center gap-1.5 rounded-full border border-line bg-white/95 px-3 py-1.5 text-[11px] font-bold text-slate-700 shadow-2xs">
                <ShieldCheck size={14} className="text-brand-green" /> 100% Tested Units
              </span>
              <span className="flex items-center gap-1.5 rounded-full border border-line bg-white/95 px-3 py-1.5 text-[11px] font-bold text-slate-700 shadow-2xs">
                <Clock size={14} className="text-brand-blue" /> 24 Hours Operational
              </span>
              <span className="flex items-center gap-1.5 rounded-full border border-line bg-white/95 px-3 py-1.5 text-[11px] font-bold text-slate-700 shadow-2xs">
                <Activity size={14} className="text-primary" /> Single Donor Platelets
              </span>
            </motion.div>

            {/* action buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link
                  to="/services"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-xs font-bold text-white shadow-md shadow-primary/20 transition-all hover:bg-primary-dark"
                >
                  <span>Request Blood Unit</span>
                  <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <a
                  href="tel:+919610940283"
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary/30 bg-white/90 px-7 py-3 text-xs font-bold text-primary transition-all hover:bg-primary-light hover:border-primary"
                >
                  <PhoneCall size={14} />
                  <span>Call Helpline: +91 9610940283</span>
                </a>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* hero image showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative min-h-[340px] sm:min-h-[440px] lg:col-span-5 lg:min-h-full overflow-hidden bg-slate-100 flex items-center justify-center"
          >
            <img
              src={heroImage}
              alt="Re Life Blood Centre clinical donation facility"
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="absolute bottom-5 left-5 right-5 rounded-2xl bg-white/95 p-4 shadow-xl backdrop-blur-md border border-white/60"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <Building2 size={16} />
                  </div>
                  <div>
                    <h4 className="text-xs font-extrabold text-ink font-display">Re Life Blood Centre</h4>
                    <p className="text-[10px] text-ink-muted">Chitrakoot, Vaishali Nagar, Jaipur</p>
                  </div>
                </div>
                <span className="rounded-full bg-brand-green-light px-2.5 py-1 text-[9px] font-extrabold text-brand-green-dark">
                  Active 24x7
                </span>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* benefits quick strip */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-2">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 rounded-2xl border border-line bg-white p-4 shadow-2xs">
          <Benefit 
            icon={<ShieldCheck className="animate-pulse text-emerald-600" />} 
            title="Sterile Processing" 
            text="Automated cell separation" 
          />
          <Benefit 
            icon={<Activity className="animate-bounce [animation-duration:2s] text-rose-500" />} 
            title="Apheresis Unit" 
            text="SDP & PRP availability" 
          />
          <Benefit 
            icon={<Clock className="animate-spin [animation-duration:8s] text-amber-500" />} 
            title="24x7 Emergency" 
            text="Instant hospital dispatch" 
          />
          <Benefit 
            icon={<Users className="animate-bounce [animation-duration:2.5s] text-blue-600" />} 
            title="Donor Network" 
            text="Voluntary camp drives" 
          />
        </div>
      </section>

      {/* clinical infrastructure showcase section */}
      <section className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="absolute top-1/2 left-10 -translate-y-1/2 w-72 h-72 bg-rose-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/4 right-10 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative rounded-3xl border border-slate-200/80 bg-gradient-to-b from-white via-slate-50/40 to-white p-6 sm:p-12 shadow-sm overflow-hidden">
          
          <div 
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, black 1px, transparent 0)`,
              backgroundSize: "24px 24px"
            }} 
          />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 pb-8 border-b border-slate-100">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-rose-100 bg-rose-50/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-rose-700">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-600"></span>
                </span>
                Advanced Medical Infrastructure
              </div>
              
              <h2 className="mt-4 font-display text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-[1.2]">
                Clinical Technology Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-rose-900">Zero Compromise</span>
              </h2>
            </div>

            <p className="max-w-md text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
              Every unit of blood processed at Re Life Blood Centre undergoes rigorous mechanical fractionation, cold chain monitoring, and certified immuno-hematology assays.
            </p>
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {facilityHighlights.map((facility, index) => {
              const Icon = facility.icon;
              const formattedIndex = String(index + 1).padStart(2, "0");

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.08 }}
                  className="group relative rounded-2xl border border-slate-200/90 bg-white p-6 flex flex-col justify-between transition-all duration-300 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/50"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="relative flex items-center justify-center h-12 w-12 rounded-xl bg-slate-900 text-white shadow-sm transition-transform duration-300 group-hover:scale-105 group-hover:bg-rose-600">
                        <Icon size={22} strokeWidth={1.9} />
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-mono font-medium text-slate-400">
                          {formattedIndex}
                        </span>
                        <span className="text-[10px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200/60">
                          {facility.tag}
                        </span>
                      </div>
                    </div>

                    <h3 className="font-display text-base font-bold text-slate-900 group-hover:text-rose-600 transition-colors duration-200">
                      {facility.title}
                    </h3>

                    <p className="mt-2 text-xs leading-relaxed text-slate-500">
                      {facility.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px]">
                    <div className="flex items-center gap-1.5 font-medium text-emerald-700 bg-emerald-50/80 px-2 py-0.5 rounded">
                      <Check size={13} className="text-emerald-600 stroke-[2.5]" />
                      <span>Clinical Grade</span>
                    </div>

                    <ArrowUpRight size={15} className="text-slate-300 group-hover:text-rose-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* blood services section */}
      <section id="services" className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
        <div className="relative rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-10 lg:p-12 shadow-sm">
          
          <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-100">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-rose-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-rose-700">
                <Sparkles size={12} className="text-rose-600" />
                Re Life Blood Banking
              </div>

              <h2 className="mt-3 font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900">
                Essential Blood Components &amp; Services
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-500 max-w-xl">
                From automated apheresis units to routine community collection camps, every component is rigorously tested, fractionated, and cold-chain preserved.
              </p>
            </div>

            <Link
              to="/services"
              className="group inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-slate-200 hover:border-slate-300 bg-slate-50 hover:bg-white text-xs font-bold text-slate-800 shadow-2xs hover:shadow transition-all duration-200 cursor-pointer w-fit"
            >
              <span>View All {allServicesData.length} Services</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 text-rose-600 transition-transform duration-200" />
            </Link>
          </div>

          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <AnimatePresence>
              {visibleServices.map((service, index) => {
                const Icon = service.icon;
                const formattedIndex = String(index + 1).padStart(2, "0");

                return (
                  <motion.div
                    key={service.id}
                    layout
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3, delay: index * 0.04 }}
                    whileHover={{ y: -5 }}
                    className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-gradient-to-b from-white via-white to-slate-50/50 p-6 transition-all duration-300 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/60"
                  >
                    <div className={`absolute inset-x-0 top-0 h-1.5 rounded-t-2xl bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                    <div>
                      <div className="flex items-center justify-between mb-5">
                        <div className="relative flex items-center justify-center h-12 w-12 rounded-xl bg-slate-900 text-white shadow-sm transition-transform duration-300 group-hover:scale-105 group-hover:bg-rose-600">
                          <Icon size={22} strokeWidth={1.8} />
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="font-mono text-[11px] font-semibold text-slate-400">
                            #{formattedIndex}
                          </span>
                          <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200/70">
                            {service.category}
                          </span>
                        </div>
                      </div>

                      <span className="inline-block text-[11px] font-bold text-rose-700 bg-rose-50 border border-rose-100 px-2.5 py-0.5 rounded-full mb-2">
                        {service.badge}
                      </span>

                      <h3 className="font-display text-base font-bold text-slate-900 group-hover:text-rose-600 transition-colors duration-200 leading-snug">
                        {service.name}
                      </h3>

                      <p className="mt-2.5 text-xs text-slate-500 leading-relaxed font-normal">
                        {service.desc}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-[11px] font-medium text-emerald-700 bg-emerald-50/80 px-2 py-0.5 rounded">
                        <CheckCircle2 size={12} className="text-emerald-600" />
                        <span>{service.availability}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <Link
                          to="/services"
                          className="text-xs font-bold text-slate-700 hover:text-rose-600 flex items-center gap-1 transition-colors"
                        >
                          Info <ArrowRight size={12} />
                        </Link>

                        <a
                          href="tel:+919610940283"
                          className="rounded-lg bg-slate-100 p-2 text-slate-700 hover:bg-rose-600 hover:text-white transition-all shadow-2xs"
                          title="Direct SOS Blood Request"
                        >
                          <PhoneCall size={13} />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>

          <div className="mt-8 rounded-2xl bg-slate-900 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-white">
            <div className="flex items-center gap-3 text-center sm:text-left">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-rose-600 text-white shadow">
                <Droplet size={20} className="fill-current" />
              </div>
              <div>
                <p className="text-sm font-bold">Need an immediate unit or custom component reservation?</p>
                <p className="text-xs text-slate-400">Our round-the-clock transfusion dispatch desk is accessible 24/7.</p>
              </div>
            </div>
            <a
              href="tel:+919610940283"
              className="shrink-0 rounded-xl bg-rose-600 hover:bg-rose-700 px-4 py-2.5 text-xs font-bold text-white transition-colors flex items-center gap-2 shadow-sm"
            >
              <PhoneCall size={14} />
              <span>Emergency Line: +91 96109 40283</span>
            </a>
          </div>

        </div>
      </section>

      {/* 4-stage donation journey */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            Safe &amp; Effortless
          </span>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl font-extrabold text-ink">
            Your 4-Stage Donation Journey
          </h2>
          <p className="mt-1 text-xs text-ink-muted">
            Designed for total donor comfort, hygienic precision, and fast recovery.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {donationSteps.map((s, idx) => {
            const Icon = s.icon
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
                className="group relative rounded-2xl bg-white p-6 border border-line shadow-xs hover:shadow-xl hover:border-primary/40 transition-shadow"
              >
                <div className="flex items-center justify-between">
                  <div className="h-12 w-12 rounded-xl bg-primary-light text-primary flex items-center justify-center transition-transform group-hover:scale-110">
                    <Icon size={22} />
                  </div>
                  <span className="text-3xl font-black text-slate-200 group-hover:text-primary-light transition-colors">
                    {s.step}
                  </span>
                </div>
                <h3 className="mt-5 text-sm font-bold text-ink group-hover:text-primary transition-colors">
                  {s.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-ink-muted">
                  {s.desc}
                </p>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* about spotlight with scroll counting */}
      <section id="about" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        <div className="rounded-3xl border border-line bg-gradient-to-br from-white via-red-50/20 to-surface p-6 sm:p-10 lg:p-12 shadow-xs">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-12">

            <div className="rounded-2xl border border-line bg-ink text-white p-6 sm:p-8 md:col-span-5 lg:col-span-5 shadow-md flex flex-col justify-between min-h-[300px]">
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-gold">
                  <Sparkles size={12} /> Clinical Commitment
                </span>
                <h3 className="mt-4 font-display text-2xl font-bold leading-tight">
                  Zero Contamination. Instant Emergency Support.
                </h3>
                <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                  Our laboratory in Vaishali Nagar is equipped with temperature-controlled cold rooms, apheresis separators, and infection screening suites.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800">
                <p className="text-[11px] text-slate-400">Location:</p>
                <p className="text-xs font-semibold text-white">Chitrakoot, Vaishali Nagar, Jaipur – 302021</p>
              </div>
            </div>

            <div className="flex flex-col justify-center md:col-span-7 lg:col-span-4">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                Why Re Life Blood Centre?
              </span>
              <h2 className="mt-1 font-display text-2xl sm:text-3xl font-extrabold text-ink leading-tight">
                Trusted Transfusion Healthcare
              </h2>

              <ul className="my-6 space-y-3">
                <li className="flex items-center gap-3 text-xs sm:text-sm font-medium text-slate-700">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-green-light text-brand-green">
                    <Check size={12} strokeWidth={3} />
                  </div>
                  Rigorous Cross-Matching &amp; NAT Testing
                </li>
                <li className="flex items-center gap-3 text-xs sm:text-sm font-medium text-slate-700">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-green-light text-brand-green">
                    <Check size={12} strokeWidth={3} />
                  </div>
                  Component Fractionation into PRBC, FFP, and SDP
                </li>
                <li className="flex items-center gap-3 text-xs sm:text-sm font-medium text-slate-700">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-green-light text-brand-green">
                    <Check size={12} strokeWidth={3} />
                  </div>
                  Dedicated Emergency Hospital Network in Rajasthan
                </li>
                <li className="flex items-center gap-3 text-xs sm:text-sm font-medium text-slate-700">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-green-light text-brand-green">
                    <Check size={12} strokeWidth={3} />
                  </div>
                  Hygienic Lounges &amp; Certified Phlebotomists
                </li>
              </ul>

              <Link
                to="/about"
                className="group inline-flex w-fit items-center gap-2 rounded-xl bg-primary px-6 py-3 text-xs font-bold text-white shadow-sm transition-all hover:bg-primary-dark"
              >
                <span>Read Full Mission</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Scroll-triggered stats */}
            <div className="flex flex-col gap-4 md:col-span-12 lg:col-span-3">
              <Stat
                icon={<HeartHandshake size={24} className="text-primary" />}
                value={<ScrollCounter end={5000} suffix="+" />}
                label="Registered Donors"
              />
              <Stat
                icon={<Droplet size={24} className="text-brand-blue fill-current" />}
                value={<ScrollCounter end={12500} suffix="+" />}
                label="Units Dispatched"
              />
              <Stat
                icon={<Clock size={24} className="text-brand-green" />}
                value={<><ScrollCounter end={24} />x7</>}
                label="Emergency Response"
              />
            </div>

          </div>
        </div>
      </section>

      {/* camp booking banner */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.3 }}
          className="rounded-3xl bg-gradient-to-r from-ink via-[#1c1815] to-[#2b1717] p-8 sm:p-12 text-white shadow-xl border-t-4 border-primary flex flex-col lg:flex-row items-center justify-between gap-8"
        >
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/20 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white border border-primary/40">
              <CalendarCheck2 size={13} className="text-primary" /> Corporate &amp; College Drives
            </span>
            <h2 className="mt-4 font-display text-2xl sm:text-4xl font-extrabold leading-tight">
              Organize a Voluntary Blood Camp with Us
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              Empower your institution or company to give back. Re Life Blood Centre provides licensed mobile medical vans, certified technicians, pre-donation checkups, refreshments, and donor certificates.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
            <a
              href="tel:+919610940283"
              className="w-full sm:w-auto text-center rounded-full bg-primary px-7 py-3.5 text-xs font-bold text-white shadow-md hover:bg-primary-dark transition"
            >
              Host a Blood Camp
            </a>
            <Link
              to="/contact"
              className="w-full sm:w-auto text-center rounded-full border border-slate-700 bg-slate-800/80 px-7 py-3.5 text-xs font-bold text-slate-200 hover:bg-slate-800 transition"
            >
              Contact Desk
            </Link>
          </div>
        </motion.div>
      </section>

      {/* trust footer highlights */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-slate-800 rounded-2xl bg-ink px-6 py-5 text-white shadow-md">
          <Trust
            icon={<ShieldCheck size={18} />}
            title="Quality &amp; Testing"
            value="100% Infection Tested"
          />
          <Trust
            icon={<Clock size={18} />}
            title="Operational Timing"
            value="24 Hours / 7 Days Active"
          />
          <Trust
            icon={<PhoneCall size={18} />}
            title="Emergency Control Desk"
            value="+91 9610940283"
          />
        </div>
      </section>

    </main>
  )
}

function Benefit({ icon, title, text }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="flex items-center gap-3 p-2 rounded-xl transition-colors hover:bg-slate-50"
    >
      <span className="shrink-0 text-primary bg-primary-light p-2.5 rounded-xl [&>svg]:h-5 [&>svg]:w-5">
        {icon}
      </span>
      <div>
        <h4 className="text-xs font-bold text-ink">{title}</h4>
        <p className="text-[11px] text-ink-muted mt-0.5">{text}</p>
      </div>
    </motion.div>
  )
}

function Stat({ icon, value, label }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="flex flex-col items-center justify-center p-5 rounded-2xl border border-line bg-white shadow-2xs"
    >
      <div>{icon}</div>
      <div className="mt-2 text-xl font-extrabold text-ink font-display">
        {value}
      </div>
      <span className="text-xs font-semibold text-ink-muted">{label}</span>
    </motion.div>
  )
}

function Trust({ icon, title, value }) {
  return (
    <div className="flex items-center gap-4 py-3 sm:py-2 sm:px-4 first:pl-0 last:pr-0">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-slate-800 text-primary border border-slate-700/50">
        {icon}
      </span>
      <div>
        <p className="text-[11px] text-slate-400 font-medium">{title}</p>
        <strong className="block text-xs sm:text-sm font-semibold text-white mt-0.5">{value}</strong>
      </div>
    </div>
  )
}
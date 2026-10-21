import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Eye, X, ChevronLeft, ChevronRight, Phone, 
  Sparkles, ShieldCheck, Droplet, Share2, ZoomIn, Check, 
  AlertCircle, HeartHandshake, FileText, ArrowRight,
  Clock, ThermometerSnowflake, CheckCircle2, PhoneCall,
  Activity, Zap
} from 'lucide-react'

const allServicesData = [
  {
    id: 1,
    code: "SVC-01",
    name: "Voluntary Blood Donation Camps",
    category: "Community & Drives",
    badge: "Community Initiative",
    availability: "Scheduled Drives",
    turnaround: "Planned",
    image: "https://images.unsplash.com/photo-1615461066841-6116e61058f4?w=800&auto=format&fit=crop&q=60",
    description: "Organizing mobile blood donation drives across colleges, corporate firms, and community societies in Jaipur with certified medical staff and sterile equipment.",
    features: ["End-to-end camp organization", "Donor refreshment & certificates", "Safe transportation & cold chain"]
  },
  {
    id: 2,
    code: "SVC-02",
    name: "Donor Registration & Network",
    category: "Donor Services",
    badge: "Join Network",
    availability: "Active 24x7",
    turnaround: "Instant Match",
    image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&auto=format&fit=crop&q=60",
    description: "Digital voluntary donor database enabling quick matching of registered donors with emergency hospital requests across Rajasthan.",
    features: ["Instant donor verification", "Confidential health records", "Automated emergency call alerts"]
  },
  {
    id: 3,
    code: "SVC-03",
    name: "Blood Requirements & Component Separation",
    category: "Blood Components",
    badge: "24x7 Lab",
    availability: "Continuous Run",
    turnaround: "45-60 Mins",
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&auto=format&fit=crop&q=60",
    description: "Centrifuge-driven blood component fractionation allowing one single donated blood unit to save up to three different critical patients.",
    features: ["Advanced separation technology", "Optimal storage maintenance", "Cross-matching and testing"]
  },
  {
    id: 4,
    code: "SVC-04",
    name: "Whole Blood",
    category: "Blood Components",
    badge: "Emergency Essential",
    availability: "Stock Ready",
    turnaround: "Immediate Dispatch",
    image: "https://images.unsplash.com/photo-1536856136534-bb679c52a9aa?w=800&auto=format&fit=crop&q=60",
    description: "Unseparated whole blood units containing red cells, plasma, and clotting factors for acute massive hemorrhage, shock, and severe trauma surgery.",
    features: ["Sterile anticoagulant preserved", "Screened for all major infections", "Immediate hospital dispatch"]
  },
  {
    id: 5,
    code: "SVC-05",
    name: "Packed Red Blood Cells (PRBC)",
    category: "Blood Components",
    badge: "High Demand",
    availability: "Constant Inventory",
    turnaround: "20 Mins Crossmatch",
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=800&auto=format&fit=crop&q=60",
    description: "Concentrated red blood cells without excess plasma, minimizing fluid overload in severe chronic anemia, dialysis, and surgical care.",
    features: ["High oxygen carrying capacity", "Leukoreduced units available", "24x7 inventory availability"]
  },
  {
    id: 6,
    code: "SVC-06",
    name: "Fresh Frozen Plasma (FFP)",
    category: "Plasma Products",
    badge: "Coagulation Care",
    availability: "Preserved -30°C",
    turnaround: "30 Mins Thawing",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&auto=format&fit=crop&q=60",
    description: "Plasma frozen within hours of collection to preserve labile clotting factors for burn victims, liver disease, and anticoagulant reversal.",
    features: ["Preserved below -30°C", "Full clotting factor efficacy", "Quick scientific thawing system"]
  },
  {
    id: 7,
    code: "SVC-07",
    name: "Random Donor Platelets (RDP)",
    category: "Platelet Services",
    badge: "Rapid Recovery",
    availability: "Agitated Storage",
    turnaround: "Immediate",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&auto=format&fit=crop&q=60",
    description: "Platelet units prepared from standard whole blood donations, essential for handling sudden platelet drops in viral fever, dengue, and sepsis.",
    features: ["Temperature controlled agitators", "Quick routine availability", "Strict bacterial screening"]
  },
  {
    id: 8,
    code: "SVC-08",
    name: "Single Donor Platelet (SDP)",
    category: "Platelet Services",
    badge: "Critical Care",
    availability: "Apheresis Ready",
    turnaround: "On-Demand Harvest",
    image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=800&auto=format&fit=crop&q=60",
    description: "Harvested through specialized apheresis technology from a single donor, providing 6-8 times higher platelet count per transfusion unit.",
    features: ["Automated cell separator machines", "Single donor antibody safety", "Emergency booking assistance"]
  }
]

const donationGuidelines = [
  {
    title: "Age & Weight Criteria",
    detail: "Donors must be aged between 18 and 65 years, weighing at least 45 kg with normal BMI index.",
    badge: "Eligibility"
  },
  {
    title: "Hemoglobin & Vitals",
    detail: "Minimum 12.5 g/dL hemoglobin with stable blood pressure (100-140/60-90 mmHg) and normal pulse.",
    badge: "Clinical Check"
  },
  {
    title: "Safe Interval Window",
    detail: "Mandatory minimum interval of 90 days for men and 120 days for women between successive donations.",
    badge: "Recovery"
  },
  {
    title: "Hydration & Diet Pre-Check",
    detail: "Consume sufficient fluids and a light non-fatty meal. Zero alcohol intake 24 hours prior to donation.",
    badge: "Preparation"
  }
]

export default function Services() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [previewIndex, setPreviewIndex] = useState(null)
  const [copied, setCopied] = useState(false)

  const categories = ['All', 'Blood Components', 'Platelet Services', 'Plasma Products', 'Community & Drives', 'Donor Services']

  const filteredServices = selectedCategory === 'All' 
    ? allServicesData 
    : allServicesData.filter(p => p.category === selectedCategory)

  const handlePrev = () => {
    setPreviewIndex((prev) => (prev === 0 ? filteredServices.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setPreviewIndex((prev) => (prev === filteredServices.length - 1 ? 0 : prev + 1))
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (previewIndex === null) return
      if (e.key === 'ArrowLeft') handlePrev()
      if (e.key === 'ArrowRight') handleNext()
      if (e.key === 'Escape') setPreviewIndex(null)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [previewIndex, filteredServices])

  const activeService = previewIndex !== null ? filteredServices[previewIndex] : null

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <main className="min-h-screen bg-slate-50/60 py-8 sm:py-14 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        
        {/* Header Banner */}
        <section className="relative overflow-hidden rounded-3xl bg-slate-900 p-8 sm:p-12 lg:p-14 text-white shadow-xl mb-10 border border-slate-800">
          <div className="absolute top-0 right-0 w-96 h-96 bg-rose-600/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
          
          <div 
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
              backgroundSize: "28px 28px"
            }} 
          />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-rose-300 border border-white/15 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
                </span>
                Re Life Blood Banking Repository
              </span>

              <h1 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-black leading-[1.15] tracking-tight">
                Comprehensive Blood Banking &amp; <br />
                <span className="bg-gradient-to-r from-rose-400 via-rose-200 to-white bg-clip-text text-transparent">
                  Component Fractionation
                </span>
              </h1>

              <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                Licensed transfusion facilities operating automated apheresis cell separators, continuous temperature monitoring, and rapid emergency dispatch across Jaipur and Rajasthan.
              </p>
            </div>

            {/* Quick 24x7 SOS indicator card */}
            <div className="flex sm:items-center gap-3 bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-md">
              <div className="h-10 w-10 shrink-0 rounded-xl bg-rose-600 flex items-center justify-center text-white shadow-sm">
                <PhoneCall size={18} />
              </div>
              <div>
                <p className="text-[10px] font-mono uppercase text-slate-400">Emergency Transfusion Line</p>
                <a href="tel:+919610940283" className="text-sm font-bold text-white hover:text-rose-400 transition-colors">
                  +91 96109 40283
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Category Tabs Filter */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => {
            const count = cat === 'All' 
              ? allServicesData.length 
              : allServicesData.filter(s => s.category === cat).length

            return (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat)
                  setPreviewIndex(null)
                }}
                className={`group shrink-0 inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat 
                    ? 'bg-slate-900 text-white shadow-md' 
                    : 'bg-white text-slate-700 border border-slate-200/90 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                <span>{cat}</span>
                <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded-md ${
                  selectedCategory === cat 
                    ? 'bg-white/20 text-white' 
                    : 'bg-slate-100 text-slate-500'
                }`}>
                  {count}
                </span>
              </button>
            )
          })}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filteredServices.map((service, idx) => (
            <motion.div 
              key={service.id || idx}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: idx * 0.04 }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-white border border-slate-200/90 shadow-2xs transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-slate-200/60 hover:border-slate-300"
            >
              <div>
                {/* Media Preview Container */}
                <div 
                  onClick={() => setPreviewIndex(idx)}
                  className="relative aspect-4/3 w-full overflow-hidden bg-slate-100 cursor-pointer"
                >
                  <img 
                    src={service.image} 
                    alt={service.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Gradient shade */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

                  {/* Top badges */}
                  <div className="absolute top-3 inset-x-3 flex items-center justify-between">
                    <span className="font-mono text-[10px] font-bold text-white bg-black/40 backdrop-blur-md px-2 py-0.5 rounded-md border border-white/20">
                      {service.code}
                    </span>
                    {service.badge && (
                      <span className="rounded-full bg-rose-600 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white shadow-xs">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  {/* Bottom overlay info */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-[11px]">
                    <span className="flex items-center gap-1 font-medium bg-black/40 backdrop-blur-md px-2 py-0.5 rounded border border-white/10">
                      <Clock size={11} className="text-rose-400" />
                      {service.turnaround}
                    </span>
                    <span className="flex items-center gap-1 font-semibold text-emerald-400 bg-black/40 backdrop-blur-md px-2 py-0.5 rounded border border-white/10">
                      <CheckCircle2 size={11} />
                      {service.availability}
                    </span>
                  </div>

                  {/* Hover Quick Inspection Button */}
                  <div className="absolute inset-0 bg-black/30 opacity-0 transition-opacity duration-200 group-hover:opacity-100 flex items-center justify-center">
                    <span className="flex items-center gap-1.5 rounded-xl bg-white px-3.5 py-2 text-xs font-bold text-slate-900 shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-all">
                      <ZoomIn size={14} className="text-rose-600" /> Inspect Details
                    </span>
                  </div>
                </div>

                {/* Content body */}
                <div className="p-5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    {service.category}
                  </span>
                  <h3 className="mt-1 line-clamp-1 text-base font-bold text-slate-900 group-hover:text-rose-600 transition-colors">
                    {service.name}
                  </h3>
                  <p className="mt-2 text-xs text-slate-500 line-clamp-2 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="p-5 pt-0">
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                  <a
                    href="tel:+919610940283"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl bg-slate-900 py-2.5 text-xs font-bold text-white transition hover:bg-rose-600 shadow-xs"
                  >
                    <Phone size={13} />
                    <span>Request Unit</span>
                  </a>
                  <button
                    onClick={() => setPreviewIndex(idx)}
                    className="p-2.5 rounded-xl border border-slate-200 text-slate-500 hover:text-slate-900 hover:border-slate-400 transition cursor-pointer"
                    title="View details"
                  >
                    <Eye size={15} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Blood Donation Guidelines Section */}
        <section className="mt-16 rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-10 shadow-sm">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-slate-100 pb-6">
            <div>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-rose-700 bg-rose-50 border border-rose-100 px-2.5 py-0.5 rounded-md">
                <FileText size={13} /> Clinical Safety Protocol
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
                Universal Blood Donor Guidelines
              </h2>
            </div>
            <a
              href="tel:+919610940283"
              className="rounded-xl bg-emerald-600 px-5 py-2.5 text-xs font-bold text-white shadow-xs transition hover:bg-emerald-700 inline-flex items-center gap-1.5"
            >
              <CheckCircle2 size={14} />
              <span>Consult Medical Officer</span>
            </a>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {donationGuidelines.map((guide, i) => (
              <div 
                key={i} 
                className="rounded-2xl bg-slate-50/70 p-5 border border-slate-200/80 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-slate-400">
                      0{i + 1}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600 bg-white border border-slate-200 px-2 py-0.5 rounded">
                      {guide.badge}
                    </span>
                  </div>
                  <h3 className="mt-3 text-sm font-bold text-slate-900">
                    {guide.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-500 leading-relaxed font-normal">
                    {guide.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* Fullscreen Specimen Details Lightbox */}
      <AnimatePresence>
        {activeService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-md p-3 sm:p-6">
            
            {/* Top Toolbar */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-white z-10 px-2 sm:px-6">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-medium tracking-wider bg-white/10 px-3 py-1 rounded-lg border border-white/15 backdrop-blur-md">
                  {previewIndex + 1} / {filteredServices.length}
                </span>
                <span className="hidden sm:inline-block text-xs text-slate-400 font-mono">
                  [Use ← → arrow keys to navigate]
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleShare}
                  className="flex h-9 px-3 items-center gap-1.5 rounded-lg bg-white/10 text-white hover:bg-white/20 transition cursor-pointer backdrop-blur-md text-xs font-medium border border-white/10"
                  title="Share link"
                >
                  <Share2 size={14} />
                  <span>{copied ? 'Copied' : 'Share'}</span>
                </button>
                <button
                  onClick={() => setPreviewIndex(null)}
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white hover:bg-rose-600 transition cursor-pointer backdrop-blur-md border border-white/10"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Left Nav */}
            <button
              onClick={handlePrev}
              className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-20 flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-white backdrop-blur-md transition-all hover:bg-white/20 cursor-pointer border border-white/15"
              title="Previous"
            >
              <ChevronLeft size={22} />
            </button>

            {/* Right Nav */}
            <button
              onClick={handleNext}
              className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-20 flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-white backdrop-blur-md transition-all hover:bg-white/20 cursor-pointer border border-white/15"
              title="Next"
            >
              <ChevronRight size={22} />
            </button>

            {/* Main Modal Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-4xl w-full rounded-3xl bg-white overflow-hidden shadow-2xl grid grid-cols-1 md:grid-cols-12 max-h-[90vh] border border-slate-200"
            >
              
              {/* Media Column */}
              <div className="md:col-span-6 relative bg-slate-900 flex items-center justify-center min-h-[260px] sm:min-h-[420px] p-5">
                <img 
                  key={activeService.id || previewIndex}
                  src={activeService.image} 
                  alt={activeService.name} 
                  className="h-full max-h-[50vh] w-full object-cover rounded-2xl shadow-lg border border-slate-800"
                />
                
                <div className="absolute top-8 left-8 flex items-center gap-2">
                  <span className="font-mono text-[10px] font-bold text-white bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/20">
                    {activeService.code}
                  </span>
                  {activeService.badge && (
                    <span className="rounded-md bg-rose-600 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-sm">
                      {activeService.badge}
                    </span>
                  )}
                </div>
              </div>

              {/* Data Specifications Column */}
              <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between bg-white overflow-y-auto">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200">
                      {activeService.category}
                    </span>
                    <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded flex items-center gap-1">
                      <CheckCircle2 size={12} /> {activeService.availability}
                    </span>
                  </div>

                  <h2 className="mt-3 font-display text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                    {activeService.name}
                  </h2>

                  <p className="mt-2.5 text-xs text-slate-500 leading-relaxed font-normal">
                    {activeService.description}
                  </p>

                  {/* Feature Checklist */}
                  <div className="mt-5 space-y-2.5 text-xs text-slate-700 border-t border-b border-slate-100 py-4">
                    <p className="text-[10px] font-mono uppercase text-slate-400 font-bold mb-2">
                      Key Clinical Deliverables
                    </p>
                    {activeService.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2.5">
                        <div className="h-5 w-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                          <Check size={12} strokeWidth={2.5} />
                        </div>
                        <span className="font-medium text-slate-800">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Order CTA */}
                <div className="mt-6 space-y-3">
                  <a
                    href="tel:+919610940283"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-rose-600 hover:bg-rose-700 px-5 py-3.5 text-xs font-bold text-white shadow-sm transition"
                  >
                    <Phone size={14} />
                    <span>Emergency Requisition: +91 96109 40283</span>
                  </a>

                  <p className="text-center text-[10px] text-slate-400 font-mono">
                    Chitrakoot, Vaishali Nagar, Jaipur • 24x7 Clinical Support
                  </p>
                </div>

              </div>

            </motion.div>

          </div>
        )}
      </AnimatePresence>
    </main>
  )
}
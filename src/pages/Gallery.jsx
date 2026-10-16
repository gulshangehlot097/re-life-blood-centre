
import { useState, useEffect } from 'react'
import { 
  Eye, X, ChevronLeft, ChevronRight, Phone, 
  Sparkles, ShieldCheck, Droplet, Share2, ZoomIn, Check, AlertCircle, Clock
} from 'lucide-react'

const bloodServices = [
  {
    id: 1,
    name: "Packed Red Blood Cells (PRBC)",
    category: "Blood Components",
    badge: "High Demand",
    image: "https://images.unsplash.com/photo-1615461066841-6116e61058f4?w=800&auto=format&fit=crop&q=60",
    description: "Leukoreduced red blood cells for trauma cases, surgical interventions, and severe anemia management.",
    features: ["Component separation", "Infection screened", "24x7 cold chain preserved"]
  },
  {
    id: 2,
    name: "Single Donor Platelets (SDP)",
    category: "Apheresis Services",
    badge: "Critical Life Saver",
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&auto=format&fit=crop&q=60",
    description: "High-yield apheresis platelet concentrates specifically harvested for dengue, cancer, and thrombocytopenia patients.",
    features: ["Automated apheresis cell separator", "High platelet yield", "Same day processing"]
  },
  {
    id: 3,
    name: "Fresh Frozen Plasma (FFP)",
    category: "Plasma Products",
    badge: "Available 24x7",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&auto=format&fit=crop&q=60",
    description: "Preserved plasma rich in essential clotting factors for liver ailments, severe burns, and coagulation deficiencies.",
    features: ["Rapid deep-freezer storage", "Sterile sealed units", "Quality compliance assured"]
  },
  {
    id: 4,
    name: "Cryoprecipitate",
    category: "Plasma Products",
    badge: "Specialized",
    image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=800&auto=format&fit=crop&q=60",
    description: "Concentrated factor VIII and fibrinogen required during acute hemorrhage and hemophilia support.",
    features: ["High fibrinogen concentration", "Carefully thawed protocol", "Pediatric and adult units"]
  },
  {
    id: 5,
    name: "Platelet Rich Plasma (PRP)",
    category: "Apheresis Services",
    badge: "Clinical Grade",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&auto=format&fit=crop&q=60",
    description: "Sterile autologous and allogeneic platelet preparation for wound healing and regenerative therapies.",
    features: ["Clinical centrifuge separation", "Pure biological harvest", "Certified medical handling"]
  },
  {
    id: 6,
    name: "Cross-Matching & Antibody Screening",
    category: "Diagnostic Testing",
    badge: "Precision Lab",
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=800&auto=format&fit=crop&q=60",
    description: "Gel card technology and automated testing for safe pre-transfusion cross-matching.",
    features: ["Major and minor cross matching", "Rare antibody detection", "Instant digital reports"]
  }
]

export default function Services() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [previewIndex, setPreviewIndex] = useState(null)
  const [copied, setCopied] = useState(false)

  const categories = ['All', ...new Set(bloodServices.map(p => p.category))]

  const filteredServices = selectedCategory === 'All' 
    ? bloodServices 
    : bloodServices.filter(p => p.category === selectedCategory)

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
    <main className="min-h-screen bg-surface py-8 px-4 sm:px-8 lg:px-[42px]">
      <div className="mx-auto max-w-[1200px]">
        
        {/* Header Banner */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#B9121A] via-[#D91B24] to-[#0284C7] p-8 text-white shadow-xl mb-8">
          <div className="absolute -right-10 -top-10 h-64 w-64 rounded-full bg-white/10 blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-[700px]">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white border border-white/30">
              <Sparkles size={12} className="text-brand-gold" /> Re Life Blood Centre Services
            </span>
            <h1 className="mt-3 font-display text-[28px] sm:text-[38px] font-bold leading-tight">
              Blood Components &amp; Clinical Services
            </h1>
            <p className="mt-2 text-[12px] sm:text-[14px] text-red-100 leading-relaxed">
              Certified blood bank facilities located at Vaishali Nagar, Jaipur. Offering 24x7 blood component separation, apheresis, and rapid emergency units dispatch.
            </p>
          </div>
        </div>

        {/* Category Tabs Filter */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat)
                setPreviewIndex(null)
              }}
              className={`shrink-0 rounded-full px-5 py-2.5 text-[11px] font-bold transition-all duration-300 cursor-pointer ${
                selectedCategory === cat 
                  ? 'bg-primary text-white shadow-md scale-105' 
                  : 'bg-white text-ink border border-line hover:border-primary hover:text-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {filteredServices.map((service, idx) => (
            <div 
              key={service.id || idx}
              className="group relative flex flex-col overflow-hidden rounded-2xl bg-white border border-line shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-primary/40"
            >
              {/* Image Container */}
              <div 
                onClick={() => setPreviewIndex(idx)}
                className="relative aspect-4/3 w-full overflow-hidden bg-slate-100 cursor-pointer"
              >
                <img 
                  src={service.image} 
                  alt={service.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-108"
                />

                {/* Badge */}
                {service.badge && (
                  <span className="absolute top-3 left-3 rounded-full bg-primary px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white shadow-xs">
                    {service.badge}
                  </span>
                )}

                {/* Hover Quick View Overlay */}
                <div className="absolute inset-0 bg-black/35 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                  <span className="flex items-center gap-1.5 rounded-full bg-white/95 px-4 py-2 text-[11px] font-bold text-ink shadow-lg backdrop-blur-xs transform translate-y-2 group-hover:translate-y-0 transition-all">
                    <ZoomIn size={14} className="text-primary" /> View Details
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col justify-between p-5">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-brand-blue">
                    {service.category}
                  </span>
                  <h3 className="mt-1 line-clamp-1 text-[15px] font-bold text-ink leading-snug">
                    {service.name}
                  </h3>
                  <p className="mt-1.5 text-xs text-ink-muted line-clamp-2 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Emergency Dispatch Action */}
                <div className="mt-4 pt-3 border-t border-line flex items-center justify-between gap-2">
                  <a
                    href="tel:+919610940283"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl bg-primary py-2.5 text-[11px] font-bold text-white transition hover:bg-primary-dark shadow-xs"
                  >
                    <Phone size={13} /> Request Blood Unit
                  </a>
                  <button
                    onClick={() => setPreviewIndex(idx)}
                    className="p-2.5 rounded-xl border border-line text-ink-muted hover:text-primary hover:border-primary transition"
                    title="View details"
                  >
                    <Eye size={15} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Fullscreen Details Modal */}
      {activeService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-3 sm:p-6 transition-all duration-300">
          
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-white z-10 px-2 sm:px-6">
            <span className="text-[11px] font-medium tracking-wider bg-white/10 px-3 py-1 rounded-full border border-white/10 backdrop-blur-md">
              {previewIndex + 1} / {filteredServices.length}
            </span>

            <div className="flex items-center gap-2">
              <button
                onClick={handleShare}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-primary transition cursor-pointer backdrop-blur-md"
                title="Share link"
              >
                <Share2 size={16} />
              </button>
              <button
                onClick={() => setPreviewIndex(null)}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white hover:bg-primary transition cursor-pointer backdrop-blur-md"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          <button
            onClick={handlePrev}
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-md transition-all hover:bg-primary hover:scale-110 cursor-pointer border border-white/10"
            title="Previous"
          >
            <ChevronLeft size={26} />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-md transition-all hover:bg-primary hover:scale-110 cursor-pointer border border-white/10"
            title="Next"
          >
            <ChevronRight size={26} />
          </button>

          <div className="relative max-w-[850px] w-full rounded-3xl bg-white overflow-hidden shadow-2xl grid grid-cols-1 md:grid-cols-12 max-h-[90vh]">
            
            <div className="md:col-span-6 relative bg-slate-100 flex items-center justify-center min-h-[250px] sm:min-h-[380px] p-4">
              <img 
                key={activeService.id || previewIndex}
                src={activeService.image} 
                alt={activeService.name} 
                className="h-full max-h-[55vh] w-full object-cover rounded-xl"
              />
              {activeService.badge && (
                <span className="absolute top-4 left-4 rounded-full bg-primary px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-sm">
                  {activeService.badge}
                </span>
              )}
            </div>

            <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between bg-white">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-blue">
                  {activeService.category}
                </span>
                <h2 className="mt-1 font-display text-[20px] sm:text-[22px] font-bold text-ink leading-snug">
                  {activeService.name}
                </h2>
                <p className="mt-2 text-xs text-ink-muted leading-relaxed">
                  {activeService.description}
                </p>

                <div className="mt-4 space-y-2 text-xs text-slate-700 border-t border-b border-line py-4">
                  {activeService.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Check size={14} className="text-brand-green shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <a
                  href="tel:+919610940283"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3.5 text-xs font-bold text-white shadow-md transition hover:bg-primary-dark"
                >
                  <Phone size={15} /> Emergency Request: +91 9610940283
                </a>

                <p className="text-center text-[10px] text-ink-muted">
                  Basement of Plot No. 3/394, Chitrakoot, Vaishali Nagar, Jaipur
                </p>
              </div>

            </div>

          </div>

        </div>
      )}
    </main>
  )
}
import { ShieldCheck, Heart, Users, Award, Clock, MapPin, Phone, Droplet, CheckCircle2 } from 'lucide-react'
import logo from '../assets/mainlogo.png'

export default function About() {
  const stats = [
    { label: 'Voluntary Donors Registered', value: '5,000+' },
    { label: 'Units Dispatched Safely', value: '12,500+' },
    { label: 'Operational Coverage', value: '24/7 Hours' },
    { label: 'Quality Compliance', value: '100% Certified' },
  ]

  const values = [
    {
      icon: <ShieldCheck size={28} className="text-primary" />,
      title: 'Purity & Clinical Safety',
      description: 'Every collected unit goes through rigorous cross-matching, NAT testing, and automated pathogen screening before reaching patients.'
    },
    {
      icon: <Clock size={28} className="text-brand-blue" />,
      title: '24x7 Rapid Dispatch',
      description: 'Dedicated emergency team available around the clock to support trauma centers, thalassemia patients, and critical surgeries in Jaipur.'
    },
    {
      icon: <Heart size={28} className="text-primary" />,
      title: 'Donor Care & Comfort',
      description: 'Clean, hygienic, temperature-controlled donor lounges with experienced phlebotomists ensuring a seamless donation experience.'
    },
    {
      icon: <Users size={28} className="text-brand-green" />,
      title: 'Community Driven',
      description: 'Active voluntary blood donation drives across educational institutions, corporate offices, and housing societies in Rajasthan.'
    }
  ]

  const highlights = [
    'Automated blood component separation into PRBC, FFP, and Platelets',
    'High-yield apheresis equipment for Single Donor Platelet (SDP) extraction',
    'Advanced cold-chain storage with constant digital temperature tracking',
    'Strict adherence to national blood transfusion council regulatory standards',
    'Fast emergency hospital network delivery across Jaipur and nearby districts',
    'Regular voluntary donor awareness workshops and felicitation programs'
  ]

  return (
    <main className="min-h-screen bg-surface py-10 px-4 sm:px-8 lg:px-[42px]">
      <div className="mx-auto max-w-[1200px]">
        
        {/* Hero Header Banner */}
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary-dark via-primary to-brand-blue p-8 sm:p-14 text-white shadow-xl mb-12">
          <div className="absolute -right-12 -top-12 h-72 w-72 rounded-full bg-white/10 blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-[750px]">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-white border border-white/30">
              <Droplet size={13} className="text-white fill-current animate-pulse" /> About Re Life Blood Centre
            </span>
            <h1 className="mt-4 font-display text-3xl sm:text-5xl font-extrabold leading-tight">
              Committed to Saving Lives, Every Second, Every Day
            </h1>
            <p className="mt-3 text-xs sm:text-sm text-red-100 leading-relaxed font-medium">
              Based in Chitrakoot, Vaishali Nagar, Jaipur, Re Life Blood Centre is a modern blood banking and apheresis institution dedicated to bridging the critical gap between voluntary blood donors and emergency medical needs.
            </p>
          </div>
        </section>

        {/* Story & Mission Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-blue">
              Our Purpose &amp; Journey
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-ink font-display leading-snug">
              Ensuring Safe, Pure &amp; Accessible Blood Components for Jaipur
            </h2>
            <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
              Established with the core belief that safe blood is a universal right, Re Life Blood Centre operates as a premier clinical blood bank in Jaipur. We leverage modern separation technology to optimize each whole blood donation, converting a single unit into red blood cells, plasma, and platelets to help multiple patients simultaneously.
            </p>
            <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
              From supporting acute trauma cases and major surgeries to sustaining pediatric thalassemia patients and oncology treatments, our infrastructure is designed to maintain zero downtime with rapid emergency dispatch capability.
            </p>

            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-start gap-2 text-xs text-slate-700">
                  <CheckCircle2 size={16} className="text-brand-green shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="relative rounded-3xl bg-white p-6 shadow-xl border border-line text-center max-w-sm w-full">
              <div className="mx-auto h-28 w-28 rounded-full border-4 border-primary-light p-2 bg-white flex items-center justify-center shadow-sm">
                <img
                  src={logo}
                  alt="Re Life Blood Centre Official Logo"
                  className="h-full w-full object-contain rounded-full"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </div>
              <h3 className="mt-4 text-lg font-extrabold text-primary font-display">
                RE LIFE BLOOD CENTRE
              </h3>
              <p className="text-xs font-bold text-brand-blue">
                Chitrakoot, Vaishali Nagar, Jaipur
              </p>
              <div className="mt-4 rounded-2xl bg-surface p-4 border border-line text-left text-xs text-ink-muted space-y-2">
                <div className="flex items-center gap-2">
                  <Clock size={15} className="text-brand-green shrink-0" />
                  <span>24 Hours / 7 Days Active Emergency Lab</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={15} className="text-primary shrink-0" />
                  <span>Helpline: +91 9610940283</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award size={15} className="text-brand-gold shrink-0" />
                  <span>Rajasthan Healthcare Certified Facility</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Numbers & Impact */}
        <section className="rounded-3xl bg-ink text-white p-8 sm:p-12 mb-16 shadow-lg border-t-4 border-brand-gold">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center divide-y lg:divide-y-0 lg:divide-x divide-slate-800">
            {stats.map((stat, i) => (
              <div key={i} className={`${i > 1 ? 'pt-6 lg:pt-0' : ''}`}>
                <div className="text-2xl sm:text-4xl font-extrabold text-brand-gold font-display">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs text-slate-400 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Core Values Section */}
        <section className="mb-16">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              Core Principles
            </span>
            <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold text-ink font-display">
              Why Healthcare Providers Trust Us
            </h2>
            <p className="mt-2 text-xs text-ink-muted">
              Built on strict clinical integrity, zero-compromise testing, and compassionate donor care.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-line p-6 shadow-xs hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="h-12 w-12 rounded-xl bg-surface flex items-center justify-center border border-line">
                  {val.icon}
                </div>
                <h3 className="mt-4 text-sm font-bold text-ink">
                  {val.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-ink-muted">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Location & Quick Action Box */}
        <section className="rounded-3xl border border-line bg-white p-8 sm:p-10 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-brand-green">
              Visit Our Blood Bank
            </span>
            <h3 className="mt-1 text-xl font-extrabold text-ink font-display">
              Re Life Blood Centre, Vaishali Nagar, Jaipur
            </h3>
            <p className="mt-1 text-xs text-ink-muted max-w-xl">
              Basement of Plot No. 3/394, Chitrakoot Yogana, Chitrakoot, Vaishali Nagar, Jaipur, Rajasthan 302021. Walk-in donors and emergency requirement inquiries welcome 24 hours a day.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="tel:+919610940283"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-xs font-bold text-white shadow-xs transition hover:bg-primary-dark"
            >
              <Phone size={14} /> Call: +91 9610940283
            </a>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-surface px-5 py-3 text-xs font-bold text-ink border border-line transition hover:border-primary"
            >
              <MapPin size={14} className="text-brand-blue" /> Get Directions
            </a>
          </div>
        </section>

      </div>
    </main>
  )
}
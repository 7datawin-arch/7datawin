import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import logo7datawin from '../assets/logo11.png'

const slides = [
  {
    id: 'somalia',
    country: 'Soomaaliya',
    flag: '🇸🇴',
    title: 'Xeebaha Indhada Ku Qanciya',
    desc: 'Lambarada cagaaran, biyaha buluugga ah — quruxda dabiiciga ah ee Soomaaliya',
    gradient: 'from-cyan-500 via-blue-600 to-teal-800',
    image: '/hero1.png',
  },
  {
    id: 'ethiopia',
    country: 'Itoobiya',
    flag: '🇪🇹',
    title: 'Buuraha Dhaadheer & Dhulka Barwaaqada',
    desc: 'Simien Mountains, dalagyada qurxoon, iyo dhaqanka qadiimiga ah',
    gradient: 'from-green-600 via-yellow-500 to-amber-700',
    image: '/hero2.png',
  },
  {
    id: 'kenya',
    country: 'Kenya',
    flag: '🇰🇪',
    title: 'Savannah & Dugaagada Qaangaarka Ah',
    desc: 'Maasai Mara, Kilimanjaro, iyo dugaagta quruxda badan ee Afrika',
    gradient: 'from-orange-600 via-red-500 to-amber-800',
    image: '/hero3.png',
  },
  {
    id: 'djibouti',
    country: 'Jabuuti',
    flag: '🇩🇯',
    title: 'Isku Xirka Geeska Afrika',
    desc: 'Lac Assal, jasiiradaha qurxoon, iyo ganacsiga caalamiga',
    gradient: 'from-sky-400 via-blue-500 to-indigo-700',
    image: '/hero4.png',
  },
]

const tickerItems = [
  // 🇸🇴 Soomaaliya
  { name: 'Hormuud', icon: '📡' },
  { name: 'Telesom', icon: '📞' },
  { name: 'Somnet', icon: '🌐' },
  { name: 'Amtel', icon: '📶' },
  { name: 'Golis', icon: '🏔️' },
  { name: 'NationLink', icon: '🌍' },
  // 🇪🇹 Itoobiya
  { name: 'Ethio Telecom', icon: '🇪🇹' },
  { name: 'Safaricom Ethiopia', icon: '🟢' },
  // 🇰🇪 Kenya
  { name: 'Safaricom', icon: '🟢' },
  { name: 'Airtel Kenya', icon: '🔴' },
  { name: 'Telkom Kenya', icon: '🔵' },
  { name: 'Jamii Telecom', icon: '📶' },
  // 🇩🇯 Jabuuti
  { name: 'Djibouti Telecom', icon: '🇩🇯' },
  { name: 'SOMTEL', icon: '📞' },
  { name: 'Evatis', icon: '🌍' },
  // Repeat for seamless loop
  { name: 'Hormuud', icon: '📡' },
  { name: 'Telesom', icon: '📞' },
  { name: 'Somnet', icon: '🌐' },
  { name: 'Amtel', icon: '📶' },
  { name: 'Golis', icon: '🏔️' },
  { name: 'NationLink', icon: '🌍' },
  { name: 'Ethio Telecom', icon: '🇪🇹' },
  { name: 'Safaricom Ethiopia', icon: '🟢' },
  { name: 'Safaricom', icon: '🟢' },
  { name: 'Airtel Kenya', icon: '🔴' },
  { name: 'Telkom Kenya', icon: '🔵' },
  { name: 'Jamii Telecom', icon: '📶' },
  { name: 'Djibouti Telecom', icon: '🇩🇯' },
  { name: 'SOMTEL', icon: '📞' },
  { name: 'Evatis', icon: '🌍' },
]

const operators = [
  // 🇸🇴 Soomaaliya
  { name: 'Hormuud', icon: '📡', country: 'Soomaaliya', flag: '🇸🇴' },
  { name: 'Telesom', icon: '📞', country: 'Soomaaliya', flag: '🇸🇴' },
  { name: 'Somnet', icon: '🌐', country: 'Soomaaliya', flag: '🇸🇴' },
  { name: 'Amtel', icon: '📶', country: 'Soomaaliya', flag: '🇸🇴' },
  { name: 'Golis', icon: '🏔️', country: 'Soomaaliya', flag: '🇸🇴' },
  // 🇪🇹 Itoobiya
  { name: 'Ethio Telecom', icon: '🇪🇹', country: 'Itoobiya', flag: '🇪🇹' },
  { name: 'Safaricom Ethiopia', icon: '🟢', country: 'Itoobiya', flag: '🇪🇹' },
  // 🇰🇪 Kenya
  { name: 'Safaricom', icon: '🟢', country: 'Kenya', flag: '🇰🇪' },
  { name: 'Airtel Kenya', icon: '🔴', country: 'Kenya', flag: '🇰🇪' },
  { name: 'Telkom Kenya', icon: '🔵', country: 'Kenya', flag: '🇰🇪' },
  // 🇩🇯 Jabuuti
  { name: 'Djibouti Telecom', icon: '🇩🇯', country: 'Jabuuti', flag: '🇩🇯' },
  { name: 'SOMTEL Djibouti', icon: '📞', country: 'Jabuuti', flag: '🇩🇯' },
  { name: 'Evatis', icon: '🌍', country: 'Jabuuti', flag: '🇩🇯' },
]

export default function HeroBanner() {
  const [current, setCurrent] = useState(0)
  const [opsOpen, setOpsOpen] = useState(true)
  const [logoError, setLogoError] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const slide = slides[current]

  return (
    <section className="relative w-full overflow-hidden bg-gray-950">
      {/* ============ 7DATAWIN TICKER (sida CNN/Al Jazeera) ============ */}
      <div className="relative z-30 w-full bg-gradient-to-r from-gray-950 via-gray-900 to-gray-950 border-b border-emerald-500/10 overflow-hidden shadow-lg shadow-black/30">
        <div className="flex items-center">
          {/* 7DataWin Logo - Circular with Shadow */}
          <div className="flex-shrink-0 z-10 relative flex items-center justify-center px-3 py-1.5
            bg-gradient-to-r from-emerald-700 via-emerald-600 to-emerald-700
            shadow-md shadow-emerald-900/50">
            {!logoError ? (
              <div className="flex items-center gap-2">
                <img
                  src={logo7datawin}
                  alt="7DataWin"
                  className="h-9 w-9 md:h-11 md:w-11 rounded-full object-cover ring-2 ring-emerald-400/60
                    shadow-lg shadow-emerald-500/50 drop-shadow-xl"
                  onError={() => setLogoError(true)}
                />
                <span className="text-white text-xs md:text-sm font-black uppercase tracking-widest
                  drop-shadow-lg [text-shadow:_0_2px_4px_rgb(0_0_0_/_60%)]">
                  7DataWin
                </span>
              </div>
            ) : (
              <span className="text-white text-xs font-bold uppercase tracking-wider whitespace-nowrap">
                7DataWin
              </span>
            )}
          </div>

          {/* Scrolling Ticker with better background */}
          <div className="overflow-hidden flex-1 relative py-1.5
            bg-gradient-to-r from-gray-900/95 via-gray-800/90 to-gray-900/95">
            {/* Subtle gradient edges to fade text in/out */}
            <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-gray-900/95 to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-r from-transparent to-gray-900/95 z-10 pointer-events-none" />
            <div className="ticker-track inline-flex items-center gap-1 whitespace-nowrap will-change-transform">
              {[...tickerItems, ...tickerItems, ...tickerItems, ...tickerItems].map((item, i) => (
                <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm drop-shadow-md">
                  <span className="text-base drop-shadow">{item.icon}</span>
                  <span className="text-white font-bold drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] whitespace-nowrap">{item.name}</span>
                  <span className="text-emerald-500/50 mx-1">▎</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ============ HERO SLIDESHOW ============ */}
      <div className="relative w-full min-h-[85vh] flex items-center justify-center">
        {/* Background Slides */}
        {slides.map((s, i) => (
          <div
            key={s.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              i === current ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
            }`}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${s.gradient}`} />
            <div className="absolute inset-0">
              <img
                src={s.image}
                alt={s.country}
                className={`w-full h-full object-cover transition-all duration-1000 ${
                  i === current ? 'opacity-40 scale-100' : 'opacity-0 scale-110'
                }`}
              />
            </div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05)_0%,transparent_70%)]" />
          </div>
        ))}

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          {/* Slide indicator - dots */}
          <div className="flex justify-center gap-2 mb-6">
            {slides.map((s, i) => (
              <button
                key={s.id}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all duration-500 ease-out ${
                  i === current
                    ? 'w-12 bg-emerald-400 shadow-lg shadow-emerald-400/50'
                    : 'w-2 bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>

          {/* Flag + Country badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5 mb-5">
            <span className="text-xl">{slide.flag}</span>
            <span className="text-white/80 text-sm font-medium uppercase tracking-wider">
              {slide.country}
            </span>
          </div>

          {/* Title */}
          <h1
            key={slide.id + '-title'}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight drop-shadow-2xl animate-fadeInUp"
          >
            {slide.title}
          </h1>

          {/* Description */}
          <p
            key={slide.id + '-desc'}
            className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto mb-10 drop-shadow-lg animate-fadeInUp animation-delay-200"
          >
            {slide.desc}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 animate-fadeInUp animation-delay-400">
            <Link
              to="/buy-data"
              className="bg-emerald-500 hover:bg-emerald-400 text-white px-8 py-3.5 rounded-xl text-lg font-bold transition-all duration-300 shadow-lg shadow-emerald-500/30 hover:shadow-emerald-400/50 hover:scale-105 hover:-translate-y-1"
            >
              🚀 Hadda Iibso Data
            </Link>
            <Link
              to="/pricing"
              className="backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/20 text-white px-8 py-3.5 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105 hover:-translate-y-1"
            >
              💰 Fiiri Qiimaha
            </Link>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-gray-950 via-gray-950/80 to-transparent" />
      </div>

      {/* ============ OPERATORS SECTION (Collapse) ============ */}
      <div className="max-w-6xl mx-auto px-4 -mt-20 relative z-20 pb-16">
        <div className="bg-gray-900/90 backdrop-blur-xl border border-gray-700/50 rounded-3xl shadow-2xl overflow-hidden">

          {/* Collapse Header */}
          <button
            onClick={() => setOpsOpen(!opsOpen)}
            className="w-full flex items-center justify-between p-6 md:p-8 hover:bg-gray-800/50 transition-colors group"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-emerald-500/10 rounded-lg flex items-center justify-center">
                <span className="text-emerald-400 text-sm font-bold">📡</span>
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-white text-left">
                Shirkadaha Isgaarsiinta <span className="text-emerald-400">Geeska Afrika</span>
              </h2>
            </div>
            <div className={`text-emerald-400 transition-all duration-300 group-hover:scale-110 ${opsOpen ? 'rotate-180' : ''}`}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </button>

          {/* Operators Grid (Collapsible) */}
          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden ${
              opsOpen ? 'max-h-[1500px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="px-6 md:px-8 pb-6 md:pb-8">
              {/* Country Groups */}
              {[
                { flag: '🇸🇴', name: 'Soomaaliya', gradient: 'from-cyan-500/10 to-blue-600/5', operators: operators.filter(o => o.country === 'Soomaaliya') },
                { flag: '🇪🇹', name: 'Itoobiya', gradient: 'from-green-500/10 to-yellow-500/5', operators: operators.filter(o => o.country === 'Itoobiya') },
                { flag: '🇰🇪', name: 'Kenya', gradient: 'from-orange-500/10 to-red-500/5', operators: operators.filter(o => o.country === 'Kenya') },
                { flag: '🇩🇯', name: 'Jabuuti', gradient: 'from-sky-500/10 to-blue-500/5', operators: operators.filter(o => o.country === 'Jabuuti') },
              ].map((group) => (
                group.operators.length > 0 && (
                  <div key={group.name} className="mb-4 last:mb-0">
                    <div className={`flex items-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-r ${group.gradient} border border-white/5 mb-2`}>
                      <span className="text-lg">{group.flag}</span>
                      <span className="text-white font-bold text-sm">{group.name}</span>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
                      {group.operators.map((op) => (
                        <Link
                          key={op.name}
                          to="/buy-data"
                          className="group flex items-center gap-3 bg-gray-800/60 hover:bg-gray-700/80 border border-gray-700/50 hover:border-emerald-500/50 rounded-xl px-3 py-3 md:px-4 md:py-3.5 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/10"
                        >
                          <span className="text-xl md:text-2xl flex-shrink-0">{op.icon}</span>
                          <div className="min-w-0">
                            <span className="text-white font-semibold text-xs md:text-sm block truncate group-hover:text-emerald-300 transition-colors">
                              {op.name}
                            </span>
                            <span className="text-gray-500 text-[10px] md:text-xs">
                              {op.flag} {op.country}
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes ticker-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-25%); }
        }
        .ticker-track {
          animation: ticker-scroll 10s linear infinite;
        }
        .ticker-track:hover {
          animation-play-state: paused;
        }

        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .animation-delay-200 { animation-delay: 0.2s; }
        .animation-delay-400 { animation-delay: 0.4s; }
      `}</style>
    </section>
  )
}

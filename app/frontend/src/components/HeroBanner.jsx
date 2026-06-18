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
    }, 4000)
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

      {/* ============ HERO SECTION ============ */}
      <div className="relative w-full">
        {/* Image Grid - Slow Moving */}
        <div className="w-full py-8 md:py-12 px-4 bg-gradient-to-b from-gray-900 via-gray-900/95 to-gray-950">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              {slides.map((s, i) => {
                const isActive = i === current
                return (
                  <button
                    key={s.id}
                    onClick={() => setCurrent(i)}
                    className={`relative group overflow-hidden rounded-xl transition-all duration-[4000ms] ease-in-out ${
                      isActive
                        ? 'scale-100 brightness-110'
                        : 'scale-95 brightness-75'
                    }`}
                    style={{ aspectRatio: '16/10' }}
                  >
                    <img
                      src={s.image}
                      alt={s.country}
                      className={`absolute inset-0 w-full h-full object-cover transition-all duration-[4000ms] ${
                        isActive ? 'opacity-100 scale-105' : 'opacity-70 scale-100'
                      }`}
                    />
                    {/* Simple overlay for readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                    
                    {/* Flag + Country */}
                    <div className="relative z-10 p-2 md:p-3 flex flex-col justify-end h-full">
                      <div className="flex items-center gap-1.5">
                        <span className="text-xl md:text-2xl">{s.flag}</span>
                        <span className={`text-white font-semibold text-xs md:text-sm transition-all duration-1000 ${
                          isActive ? 'opacity-100 translate-y-0' : 'opacity-80 translate-y-1'
                        }`}>
                          {s.country}
                        </span>
                      </div>
                    </div>

                    {/* Active indicator - clean dot */}
                    {isActive && (
                      <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-emerald-400 rounded-full animate-softPulse" />
                    )}
                  </button>
                )
              })}
            </div>

            {/* Slide position indicator */}
            <div className="flex justify-center gap-1.5 mt-4">
              {slides.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => setCurrent(i)}
                  className={`h-1.5 rounded-full transition-all duration-700 ${
                    i === current ? 'w-10 bg-emerald-400' : 'w-1.5 bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Text Section - Wide Layout Below Images */}
        <div className="w-full bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 pb-10 md:pb-16">
          <div className="max-w-6xl mx-auto px-4 text-center">
            {/* Flag + Country badge */}
            <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5 mb-4 animate-fadeInUp">
              <span className="text-xl">{slide.flag}</span>
              <span className="text-white/70 text-xs font-medium uppercase tracking-wider">
                {slide.country}
              </span>
            </div>

            {/* Big Wide Title */}
            <h1
              key={slide.id + '-title'}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white mb-4 leading-[1.1] drop-shadow-2xl animate-fadeInUp max-w-5xl mx-auto"
            >
              {slide.title}
            </h1>

            {/* Description */}
            <p
              key={slide.id + '-desc'}
              className="text-gray-400 text-base md:text-lg max-w-3xl mx-auto mb-8 animate-fadeInUp animation-delay-200 leading-relaxed"
            >
              {slide.desc}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-3 animate-fadeInUp animation-delay-400">
              <Link
                to="/buy-data"
                className="bg-emerald-500 hover:bg-emerald-400 text-white px-8 py-3.5 rounded-xl text-base md:text-lg font-bold transition-all duration-300 shadow-lg shadow-emerald-500/30 hover:shadow-emerald-400/50 hover:scale-105 hover:-translate-y-1"
              >
                🚀 Hadda Iibso Data
              </Link>
              <Link
                to="/pricing"
                className="backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/20 text-white px-8 py-3.5 rounded-xl text-base md:text-lg font-semibold transition-all duration-300 hover:scale-105 hover:-translate-y-1"
              >
                💰 Fiiri Qiimaha
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ============ $100 BISHKII - Loyalty Program ============ */}
      <div className="max-w-6xl mx-auto px-4 mt-10 relative z-20">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-900/60 via-emerald-800/40 to-gray-900/80 border border-emerald-500/20 shadow-2xl shadow-emerald-500/5">
          {/* Decorative circles */}
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-emerald-500/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-emerald-400/5 rounded-full blur-2xl" />
          
          <div className="relative z-10 p-6 md:p-10 flex flex-col md:flex-row items-center gap-6 md:gap-10">
            {/* Left: Icon/Visual */}
            <div className="flex-shrink-0">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center shadow-xl shadow-emerald-500/20 animate-float">
                <span className="text-4xl md:text-5xl">💎</span>
              </div>
            </div>

            {/* Middle: Content */}
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-3 py-1 mb-3">
                <span className="text-yellow-400 text-xs">🏆</span>
                <span className="text-emerald-300 text-xs font-semibold uppercase tracking-wider">Loyalty Program</span>
              </div>
              <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-2">
                <span className="text-emerald-400">$100</span> Bishkii
              </h2>
              <p className="text-gray-300 text-sm md:text-base max-w-xl leading-relaxed">
                Qof kasta oo <span className="text-emerald-300 font-semibold">2 jeer</span> ama ka badan adeegga noo iibsada, 
                waxaan siinaa <span className="text-emerald-400 font-bold">$100</span> bil kasta! Waa lagama maarmaan 
                si aad uga faa'iidaysatid adeeggaaga data-da.
              </p>
              <div className="flex flex-wrap gap-3 mt-4">
                <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-lg px-2.5 py-1">
                  <span className="text-emerald-400 text-xs">✅</span>
                  <span className="text-gray-400 text-xs">2 iibis +</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-lg px-2.5 py-1">
                  <span className="text-emerald-400 text-xs">✅</span>
                  <span className="text-gray-400 text-xs">$100 bil kasta</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-lg px-2.5 py-1">
                  <span className="text-emerald-400 text-xs">✅</span>
                  <span className="text-gray-400 text-xs">Waqti kasta</span>
                </div>
              </div>
            </div>

            {/* Right: CTA */}
            <div className="flex-shrink-0">
              <Link
                to="/pricing"
                className="group inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white px-6 py-3.5 rounded-xl font-bold transition-all duration-300 shadow-lg shadow-emerald-500/30 hover:shadow-emerald-400/50 hover:scale-105"
              >
                <span>💰 Bilow</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ============ GUULAYSTAYAASHA BISHII ============ */}
      <div className="max-w-6xl mx-auto px-4 mt-10 relative z-20">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500/10 to-emerald-500/10 border border-yellow-500/20 rounded-full px-4 py-1.5 mb-3">
            <span className="text-yellow-400 text-sm">🏆</span>
            <span className="text-yellow-300 text-xs font-bold uppercase tracking-wider">Guulaystayaasha Bishii</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white">
            Wiilashii <span className="text-emerald-400">$100</span> ku Guuleystay
          </h2>
          <p className="text-gray-500 text-sm mt-1">Bishaan — dad somali ah oo adeegga 2 jeer iibsaday</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Winner 1 */}
          <div className="relative group bg-gradient-to-br from-gray-800/60 to-gray-900/60 border border-gray-700/40 hover:border-emerald-500/30 rounded-2xl p-5 md:p-6 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/5">
            {/* Winner badge */}
            <div className="absolute -top-2 -right-2 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full px-3 py-1 shadow-lg shadow-yellow-500/30 flex items-center gap-1">
              <span className="text-yellow-900 text-xs font-bold">$100</span>
              <span className="text-white text-[10px]">🏆</span>
            </div>

            <div className="flex items-start gap-4">
              {/* Avatar */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-full flex items-center justify-center ring-2 ring-emerald-400/20 shadow-lg">
                  <span className="text-3xl md:text-4xl">👨🏾‍💻</span>
                </div>
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-white font-bold text-base md:text-lg">Cabdimalik Maxamed</h3>
                  <span className="text-xs bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded-full">Winner</span>
                </div>
                
                {/* Stars */}
                <div className="flex items-center gap-0.5 mb-2">
                  {[1,2,3,4,5].map(s => (
                    <span key={s} className="text-yellow-400 text-sm">⭐</span>
                  ))}
                  <span className="text-gray-500 text-xs ml-1">5.0</span>
                </div>

                {/* Review */}
                <div className="bg-gray-800/40 rounded-xl p-3 border border-gray-700/20">
                  <p className="text-gray-300 text-xs md:text-sm leading-relaxed italic">
                    "Waan ka faa'iidaystay bishan! 2 jeer ayaa data ka iibsaday 7DataWin, 
                    waxaana helay <span className="text-emerald-400 font-bold">$100</span> oo dhamaystiran. 
                    Adeeg degdeg ah oo lagu kalsoonaan karo. 
                    <span className="text-emerald-300">#Guul</span>"
                  </p>
                </div>

                <div className="flex items-center gap-2 mt-2">
                  <span className="text-gray-600 text-[10px]">📅 Bisha June 2026</span>
                  <span className="text-gray-700 text-[10px]">•</span>
                  <span className="text-emerald-400/60 text-[10px]">✅ Xaqiijiyay</span>
                </div>
              </div>
            </div>
          </div>

          {/* Winner 2 */}
          <div className="relative group bg-gradient-to-br from-gray-800/60 to-gray-900/60 border border-gray-700/40 hover:border-emerald-500/30 rounded-2xl p-5 md:p-6 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/5">
            {/* Winner badge */}
            <div className="absolute -top-2 -right-2 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full px-3 py-1 shadow-lg shadow-yellow-500/30 flex items-center gap-1">
              <span className="text-yellow-900 text-xs font-bold">$100</span>
              <span className="text-white text-[10px]">🏆</span>
            </div>

            <div className="flex items-start gap-4">
              {/* Avatar */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center ring-2 ring-purple-400/20 shadow-lg">
                  <span className="text-3xl md:text-4xl">👩🏾‍💻</span>
                </div>
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-white font-bold text-base md:text-lg">Xaawo Ciise</h3>
                  <span className="text-xs bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded-full">Winner</span>
                </div>
                
                {/* Stars */}
                <div className="flex items-center gap-0.5 mb-2">
                  {[1,2,3,4,5].map(s => (
                    <span key={s} className="text-yellow-400 text-sm">⭐</span>
                  ))}
                  <span className="text-gray-500 text-xs ml-1">5.0</span>
                </div>

                {/* Review */}
                <div className="bg-gray-800/40 rounded-xl p-3 border border-gray-700/20">
                  <p className="text-gray-300 text-xs md:text-sm leading-relaxed italic">
                    "Runtii waan yaabay! Markii 2-aad oo aan data ka iibsaday, $100 baa i la soo wacay. 
                    Waxaan u talinayaa qof kasta oo Somali ah inuu 7DataWin isticmaalo. 
                    <span className="text-emerald-400 font-bold">Mahadsanid 7DataWin!</span>"
                  </p>
                </div>

                <div className="flex items-center gap-2 mt-2">
                  <span className="text-gray-600 text-[10px]">📅 Bisha June 2026</span>
                  <span className="text-gray-700 text-[10px]">•</span>
                  <span className="text-emerald-400/60 text-[10px]">✅ Xaqiijiyay</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-6">
          <Link
            to="/buy-data"
            className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-semibold text-sm transition-colors"
          >
            Adiguna ku bilow 🚀 →
          </Link>
        </div>
      </div>

      {/* ============ OPERATORS MENU (Collapse) ============ */}
      <div className="max-w-6xl mx-auto px-4 mt-8 relative z-20 pb-16">
        <div className="bg-gray-900/90 backdrop-blur-xl border border-gray-700/50 rounded-3xl shadow-2xl overflow-hidden">

          {/* Collapse Header - short title */}
          <button
            onClick={() => setOpsOpen(!opsOpen)}
            className="w-full flex items-center justify-between p-5 md:p-6 hover:bg-gray-800/50 transition-colors group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-emerald-500/15 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-emerald-400 text-lg">📡</span>
              </div>
              <h2 className="text-lg md:text-xl font-bold text-white text-left">
                Shirkadaha <span className="text-emerald-400">Geeska Afrika</span>
              </h2>
            </div>
            <div className={`text-emerald-400 transition-all duration-300 group-hover:scale-110 ${opsOpen ? 'rotate-180' : ''}`}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </button>

          {/* Operators Menu Grid (Collapsible) */}
          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden ${
              opsOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="px-5 md:px-6 pb-6">
              {/* Country Groups */}
              {[
                { flag: '🇸🇴', name: 'Soomaaliya', gradient: 'from-cyan-500/10 to-blue-600/5', border: 'border-cyan-500/20', text: 'text-cyan-300', operators: operators.filter(o => o.country === 'Soomaaliya') },
                { flag: '🇪🇹', name: 'Itoobiya', gradient: 'from-green-500/10 to-yellow-500/5', border: 'border-green-500/20', text: 'text-yellow-300', operators: operators.filter(o => o.country === 'Itoobiya') },
                { flag: '🇰🇪', name: 'Kenya', gradient: 'from-orange-500/10 to-red-500/5', border: 'border-red-500/20', text: 'text-orange-300', operators: operators.filter(o => o.country === 'Kenya') },
                { flag: '🇩🇯', name: 'Jabuuti', gradient: 'from-sky-500/10 to-blue-500/5', border: 'border-sky-500/20', text: 'text-sky-300', operators: operators.filter(o => o.country === 'Jabuuti') },
              ].map((group) => (
                group.operators.length > 0 && (
                  <div key={group.name} className="mb-5 last:mb-0">
                    <div className={`flex items-center gap-2 px-3 py-2 rounded-xl bg-gradient-to-r ${group.gradient} border ${group.border} mb-3`}>
                      <span className="text-xl">{group.flag}</span>
                      <span className={`text-sm font-bold ${group.text}`}>{group.name}</span>
                      <span className={`text-xs ${group.text} opacity-60`}>({group.operators.length})</span>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                      {group.operators.map((op) => (
                        <Link
                          key={op.name}
                          to="/buy-data"
                          className="flex flex-col items-center gap-2 bg-gray-800/40 hover:bg-gray-700/60 border border-gray-700/40 hover:border-emerald-500/40 rounded-2xl px-3 py-5 transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:shadow-emerald-500/5 text-center group/card"
                        >
                          <div className="w-14 h-14 bg-gray-800/80 rounded-2xl flex items-center justify-center group-hover/card:bg-emerald-500/10 group-hover/card:scale-110 transition-all duration-300 border border-gray-700/30 group-hover/card:border-emerald-500/20">
                            <span className="text-3xl">{op.icon}</span>
                          </div>
                          <div>
                            <p className="text-white font-semibold text-sm group-hover/card:text-emerald-300 transition-colors">
                              {op.name}
                            </p>
                            <p className="text-gray-500 text-[10px]">
                              {op.flag} {op.country}
                            </p>
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
          animation: ticker-scroll 30s linear infinite;
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

        @keyframes softPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        .animate-softPulse {
          animation: softPulse 2s ease-in-out infinite;
        }

        @keyframes slowZoom {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.03); }
        }
      `}</style>
    </section>
  )
}

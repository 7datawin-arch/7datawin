import { useState, useEffect } from 'react'
import { Globe, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'

const countries = [
  {
    id: 'somalia',
    name: 'Soomaaliya',
    flag: '🇸🇴',
    gradient: 'from-emerald-900 via-emerald-800 to-blue-900',
    accent: 'text-emerald-400',
    badge: 'bg-emerald-500/20 border-emerald-500/40',
    tagline: 'Halkan qiimaha data waa kan ugu jaban',
    operators: ['Hormuud', 'Telesom', 'Somnet', 'Amtel', 'Golis'],
  },
  {
    id: 'ethiopia',
    name: 'Itoobiya',
    flag: '🇪🇹',
    gradient: 'from-green-900 via-yellow-900 to-red-900',
    accent: 'text-yellow-400',
    badge: 'bg-yellow-500/20 border-yellow-500/40',
    tagline: 'Data rakista ugu fiican dalka',
    operators: ['Ethio Telecom', 'Safaricom Ethiopia'],
  },
  {
    id: 'kenya',
    name: 'Kenya',
    flag: '🇰🇪',
    gradient: 'from-green-900 via-red-900 to-black',
    accent: 'text-green-400',
    badge: 'bg-green-500/20 border-green-500/40',
    tagline: 'Tuko hapa kwa data bei nafuu',
    operators: ['Safaricom', 'Airtel Kenya', 'Telkom Kenya'],
  },
]

const slogans = [
  'Meesha Ugu Fiican',
  'Wadanka Oo Dhan',
  'Geeska Afrika',
  'Dakhliga Kugu Habboon',
]

export default function HeroBanner() {
  const [current, setCurrent] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % slogans.length)
        setVisible(true)
      }, 400)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="max-w-6xl mx-auto px-4 pt-20 pb-8 text-center relative">
      {/* Hero Heading with Animation */}
      <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 leading-tight">
        Data <span className="text-emerald-400">Qiimo Jaban</span>{' '}
        <br className="hidden md:block" />
        <span
          className={`inline-block transition-all duration-500 ease-in-out ${
            visible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 -translate-y-4'
          }`}
        >
          {slogans[current]}
        </span>
      </h1>

      <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-8">
        Ku xidhnow shirkadaha isgaarsiinta ee Soomaaliya, Itoobiya iyo Kenya oo dhan.
        Iibso data qiimo jaban, hel degdeg, adeeg 24/7.
      </p>

      <div className="flex flex-wrap justify-center gap-4 mb-10">
        <Link
          to="/buy-data"
          className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-xl text-lg font-bold transition"
        >
          Hadda Iibso Data
        </Link>
        <Link
          to="/pricing"
          className="border border-gray-600 hover:border-emerald-400 text-gray-200 hover:text-emerald-400 px-8 py-3 rounded-xl text-lg font-semibold transition"
        >
          Fiiri Qiimaha
        </Link>
      </div>

      {/* Country Promo Banners */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {countries.map((country) => (
          <Link
            key={country.id}
            to="/buy-data"
            className={`bg-gradient-to-br ${country.gradient} rounded-2xl border border-white/10 p-5 text-left hover:scale-[1.02] transition-all duration-300 group relative overflow-hidden`}
          >
            {/* Decorative circle */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-white/5 rounded-full" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white/5 rounded-full" />

            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">{country.flag}</span>
              <span className="text-white font-bold text-lg">{country.name}</span>
            </div>

            <p className={`text-sm font-semibold ${country.accent} mb-3`}>
              {country.tagline}
            </p>

            <div className="flex flex-wrap gap-1.5 mb-3">
              <Globe className={`w-3.5 h-3.5 ${country.accent}`} />
              <span className="text-gray-300 text-xs">Shirkadaha:</span>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {country.operators.map((op) => (
                <span
                  key={op}
                  className={`text-[10px] px-2 py-0.5 rounded-full ${country.badge} text-white/90 border`}
                >
                  {op}
                </span>
              ))}
            </div>

            {/* Arrow hint */}
            <div className={`mt-3 text-xs ${country.accent} font-medium opacity-0 group-hover:opacity-100 transition-opacity`}>
              Iibso Hadda →
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

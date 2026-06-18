import { Shield, Zap, Globe, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import HeroBanner from '../components/HeroBanner'

const features = [
  {
    icon: Zap,
    title: 'Iibsi Degdeg ah',
    desc: 'Data-gaaga hel 5 daqiiqo gudahood, 24/7 adeeg',
  },
  {
    icon: Shield,
    title: 'Ammmaan Buuxda',
    desc: 'Lacag-bixintaada waxaa ilaalinaya nidaam ammaan ah',
  },
  {
    icon: Globe,
    title: 'Shirkado Dhan',
    desc: 'Hormuud, Telesom, Ethio Telecom, Safaricom iyo kuwo kale',
  },
  {
    icon: Users,
    title: 'Taageero 24/7',
    desc: 'Koox taageero oo diyaar ah markasta oo aad u baahato',
  },
]

export default function Home() {
  return (
    <div>
      <HeroBanner />

      {/* Features */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Sababta 7DataWin loo doorto
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 text-center hover:border-emerald-500/50 transition"
            >
              <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <f.icon className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-white font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-400 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-4 py-16 text-center">
        <div className="bg-gradient-to-r from-emerald-900/40 to-gray-800/40 border border-gray-700 rounded-2xl p-10">
          <h2 className="text-3xl font-bold text-white mb-4">
            Diyaar ma u tahay?
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-6">
            Iibso data qiimo jaban, hel adeeg degdeg ah, uguna raaxayso internet-ka
            si dhib la'aan ah.
          </p>
          <Link
            to="/buy-data"
            className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-xl text-lg font-bold transition"
          >
            Hadda Bilow
          </Link>
        </div>
      </section>
    </div>
  )
}

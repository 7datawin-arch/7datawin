import { Shield, Zap, Globe, Users } from 'lucide-react'
import { Link } from 'react-router-dom'

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
    desc: 'Hormuud, Telesom, Somnet, Amtel, Golis iyo kuwo kale',
  },
  {
    icon: Users,
    title: 'Taageero 24/7',
    desc: 'Koox taageero oo diyaar ah markasta oo aad u baahato',
  },
]

const operators = [
  { name: 'Hormuud', color: 'bg-green-600' },
  { name: 'Telesom', color: 'bg-blue-600' },
  { name: 'Somnet', color: 'bg-purple-600' },
  { name: 'Amtel', color: 'bg-red-600' },
  { name: 'Golis', color: 'bg-yellow-600' },
  { name: 'Nationlink', color: 'bg-indigo-600' },
]

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 pt-20 pb-16 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 leading-tight">
          Data <span className="text-emerald-400">Qiimo Jaban</span>{' '}
          <br className="hidden md:block" />
          Meesha Ugu Fiican
        </h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Ku xidhnow shirkadaha isgaarsiinta ee Soomaaliya oo dhan.
          Iibso data qiimo jaban, hel degdeg, adeeg 24/7.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
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

        {/* Operator badges */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {operators.map((op) => (
            <span
              key={op.name}
              className={`${op.color} bg-opacity-20 text-white border ${op.color.replace('bg-', 'border-')} border-opacity-30 px-4 py-1.5 rounded-full text-sm font-medium`}
            >
              {op.name}
            </span>
          ))}
        </div>
      </section>

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

import { useState } from 'react'
import { Smartphone, Wifi, Package, CheckCircle, Globe } from 'lucide-react'

const countryData = {
  somalia: {
    name: 'Soomaaliya',
    flag: '🇸🇴',
    operators: ['Hormuud', 'Telesom', 'Somnet', 'Amtel', 'Golis'],
    packs: {
      Hormuud: ['100MB - $0.50', '500MB - $2.00', '1GB - $3.50', '5GB - $10.00', '10GB - $18.00'],
      Telesom: ['100MB - $0.50', '500MB - $2.00', '1GB - $3.00', '5GB - $9.00', '10GB - $16.00'],
      Somnet: ['200MB - $0.60', '1GB - $3.00', '3GB - $7.00', '8GB - $14.00'],
      Amtel: ['150MB - $0.50', '500MB - $2.00', '1GB - $3.50', '4GB - $9.00'],
      Golis: ['100MB - $0.50', '500MB - $2.00', '1GB - $3.00', '3GB - $7.00'],
    },
    phonePlaceholder: 'e.g. 0634123456',
    phonePrefix: 'Soomaali (+252)',
  },
  ethiopia: {
    name: 'Itoobiya',
    flag: '🇪🇹',
    operators: ['Ethio Telecom', 'Safaricom Ethiopia'],
    packs: {
      'Ethio Telecom': ['500MB - 25 ETB', '1GB - 45 ETB', '3GB - 100 ETB', '5GB - 150 ETB', '10GB - 250 ETB'],
      'Safaricom Ethiopia': ['500MB - 30 ETB', '1GB - 50 ETB', '3GB - 120 ETB', '5GB - 180 ETB', '10GB - 300 ETB'],
    },
    phonePlaceholder: 'e.g. 0912345678',
    phonePrefix: 'Itoobiya (+251)',
  },
  kenya: {
    name: 'Kenya',
    flag: '🇰🇪',
    operators: ['Safaricom', 'Airtel Kenya', 'Telkom Kenya'],
    packs: {
      'Safaricom': ['100MB - 10 KES', '500MB - 50 KES', '1GB - 100 KES', '5GB - 300 KES', '10GB - 500 KES'],
      'Airtel Kenya': ['100MB - 8 KES', '500MB - 45 KES', '1GB - 90 KES', '5GB - 280 KES', '10GB - 450 KES'],
      'Telkom Kenya': ['100MB - 8 KES', '500MB - 40 KES', '1GB - 85 KES', '5GB - 250 KES', '10GB - 400 KES'],
    },
    phonePlaceholder: 'e.g. 0712345678',
    phonePrefix: 'Kenya (+254)',
  },
}

const countries = [
  { id: 'somalia', name: 'Soomaaliya', flag: '🇸🇴' },
  { id: 'ethiopia', name: 'Itoobiya', flag: '🇪🇹' },
  { id: 'kenya', name: 'Kenya', flag: '🇰🇪' },
]

export default function BuyData() {
  const [country, setCountry] = useState('somalia')
  const [phone, setPhone] = useState('')
  const [selectedOp, setSelectedOp] = useState('')
  const [selectedPack, setSelectedPack] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const data = countryData[country]
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!phone || !selectedOp || !selectedPack) return
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="max-w-lg mx-auto px-4 pt-20 text-center">
        <CheckCircle className="w-16 h-16 text-emerald-400 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-white mb-2">Codsigaaga waa la helay!</h2>
        <p className="text-gray-400 mb-2">
          Waxaanu soo wacaynaa ama WhatsApp kuugu soo dirraa 5 daqiiqo gudahood.
        </p>
        <p className="text-sm text-gray-500">
          {countryData[country].flag} {countryData[country].name} | {phone} | {selectedOp} | {selectedPack}
        </p>
        <button
          onClick={() => { setSubmitted(false); setPhone(''); setSelectedOp(''); setSelectedPack('') }}
          className="mt-6 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-lg transition"
        >
          Mid Kale Iibso
        </button>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto px-4 pt-12 pb-16">
      <h1 className="text-3xl font-bold text-white text-center mb-2">
        Iibso Data
      </h1>
      <p className="text-gray-400 text-center mb-8">
        Dooro wadankaaga, shirkadda, iyo xirmada data-da
      </p>

      {/* Country Tabs */}
      <div className="flex justify-center gap-2 mb-8">
        {countries.map((c) => (
          <button
            key={c.id}
            onClick={() => { setCountry(c.id); setSelectedOp(''); setSelectedPack('') }}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold border transition ${
              country === c.id
                ? 'bg-emerald-500/20 border-emerald-500 text-emerald-400'
                : 'bg-gray-800 border-gray-700 text-gray-400 hover:border-gray-500'
            }`}
          >
            <span className="text-lg">{c.flag}</span>
            {c.name}
          </button>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Phone */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            <Smartphone className="w-4 h-4 inline mr-1 text-emerald-400" />
            Telefoonkaaga
          </label>
          <div className="flex gap-2">
            <span className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-3 text-gray-400 text-sm whitespace-nowrap">
              {data.phonePrefix}
            </span>
            <input
              type="tel"
              placeholder={data.phonePlaceholder}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500"
              required
            />
          </div>
        </div>

        {/* Operator */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            <Wifi className="w-4 h-4 inline mr-1 text-emerald-400" />
            Shirkadda
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {data.operators.map((op) => (
              <button
                key={op}
                type="button"
                onClick={() => { setSelectedOp(op); setSelectedPack('') }}
                className={`px-4 py-3 rounded-lg text-sm font-medium border transition ${
                  selectedOp === op
                    ? 'bg-emerald-500/20 border-emerald-500 text-emerald-400'
                    : 'bg-gray-800 border-gray-700 text-gray-300 hover:border-gray-500'
                }`}
              >
                {op}
              </button>
            ))}
          </div>
        </div>

        {/* Data Packs */}
        {selectedOp && (
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              <Package className="w-4 h-4 inline mr-1 text-emerald-400" />
              Xirmada Data
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {data.packs[selectedOp].map((pack) => (
                <button
                  key={pack}
                  type="button"
                  onClick={() => setSelectedPack(pack)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium border transition ${
                    selectedPack === pack
                      ? 'bg-emerald-500/20 border-emerald-500 text-emerald-400'
                      : 'bg-gray-800 border-gray-700 text-gray-300 hover:border-gray-500'
                  }`}
                >
                  {pack}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={!phone || !selectedOp || !selectedPack}
          className="w-full bg-emerald-500 hover:bg-emerald-600 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-bold py-3 rounded-lg transition"
        >
          Hadda Iibso
        </button>
      </form>
    </div>
  )
}

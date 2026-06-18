import { useState } from 'react'
import { Smartphone, Wifi, Package, CheckCircle } from 'lucide-react'

const operators = ['Hormuud', 'Telesom', 'Somnet', 'Amtel', 'Golis']

const dataPacks = {
  Hormuud: ['100MB - $0.50', '500MB - $2.00', '1GB - $3.50', '5GB - $10.00', '10GB - $18.00'],
  Telesom: ['100MB - $0.50', '500MB - $2.00', '1GB - $3.00', '5GB - $9.00', '10GB - $16.00'],
  Somnet: ['200MB - $0.60', '1GB - $3.00', '3GB - $7.00', '8GB - $14.00'],
  Amtel: ['150MB - $0.50', '500MB - $2.00', '1GB - $3.50', '4GB - $9.00'],
  Golis: ['100MB - $0.50', '500MB - $2.00', '1GB - $3.00', '3GB - $7.00'],
}

export default function BuyData() {
  const [phone, setPhone] = useState('')
  const [selectedOp, setSelectedOp] = useState('')
  const [selectedPack, setSelectedPack] = useState('')
  const [submitted, setSubmitted] = useState(false)

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
          Telefoonka: {phone} | {selectedOp} | {selectedPack}
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
      <p className="text-gray-400 text-center mb-10">
        Buuxi macluumaadka hoose oo data-gaaga hel degdeg
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Phone */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            <Smartphone className="w-4 h-4 inline mr-1 text-emerald-400" />
            Telefoonkaaga
          </label>
          <input
            type="tel"
            placeholder="e.g. 0634123456"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500"
            required
          />
        </div>

        {/* Operator */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            <Wifi className="w-4 h-4 inline mr-1 text-emerald-400" />
            Shirkadda
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {operators.map((op) => (
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
              {dataPacks[selectedOp].map((pack) => (
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

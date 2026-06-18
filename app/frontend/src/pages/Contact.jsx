import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  if (sent) {
    return (
      <div className="max-w-lg mx-auto px-4 pt-20 text-center">
        <MessageCircle className="w-16 h-16 text-emerald-400 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-white mb-2">Farriintaadii waa la diray!</h2>
        <p className="text-gray-400">Waxaanu kula soo xiriirnaa dhawaan.</p>
        <button
          onClick={() => setSent(false)}
          className="mt-6 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-lg transition"
        >
          Mid kale dir
        </button>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto px-4 pt-12 pb-16">
      <h1 className="text-3xl font-bold text-white text-center mb-2">
        Nagala Soo Xiriir
      </h1>
      <p className="text-gray-400 text-center mb-12">
        Su'aal ama caawinaad baad u baahan tahay? Nagala hadal.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <Phone className="w-5 h-5 text-emerald-400 mt-1" />
            <div>
              <h3 className="text-white font-semibold">Telefoon</h3>
              <p className="text-gray-400 text-sm">
                <a href="tel:+252XXXXXXXXX" className="hover:text-emerald-400 transition">+252 XX XXX XXXX</a>
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Mail className="w-5 h-5 text-emerald-400 mt-1" />
            <div>
              <h3 className="text-white font-semibold">Email</h3>
              <p className="text-gray-400 text-sm">
                <a href="mailto:info@7datawin.com" className="hover:text-emerald-400 transition">info@7datawin.com</a>
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <MapPin className="w-5 h-5 text-emerald-400 mt-1" />
            <div>
              <h3 className="text-white font-semibold">Goobta</h3>
              <p className="text-gray-400 text-sm">Hargeysa, Soomaaliya / Somaliland</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <MessageCircle className="w-5 h-5 text-emerald-400 mt-1" />
            <div>
              <h3 className="text-white font-semibold">WhatsApp</h3>
              <p className="text-gray-400 text-sm">
                <a
                  href="https://wa.me/252XXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition"
                >
                  Ka hadal WhatsApp-ka
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Magacaaga"
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500"
            required
          />
          <input
            type="email"
            placeholder="Email-kaaga"
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500"
            required
          />
          <textarea
            placeholder="Farriintaada..."
            rows={4}
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 resize-none"
            required
          />
          <button
            type="submit"
            className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 rounded-lg transition"
          >
            Dir Farriin
          </button>
        </form>
      </div>
    </div>
  )
}

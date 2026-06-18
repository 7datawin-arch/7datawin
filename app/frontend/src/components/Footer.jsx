import { Smartphone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About */}
        <div>
          <div className="flex items-center gap-2 text-white font-bold text-lg mb-3">
            <Smartphone className="w-5 h-5 text-emerald-400" />
            <span className="text-emerald-400">7</span>DataWin
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Adiga oo ku raaxaysanaya internet-ka lacag jaban, 7DataWin waa meesha
            ugufiican ee aad data ka iibsato. Shirkadaha waaweyn ee Soomaaliya oo dhan.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Xiriirinta Degdegga ah</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-emerald-400" />
              info@7datawin.com
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-emerald-400" />
              Soomaaliya, Hargeysa
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-white font-semibold mb-3">La Soco</h3>
          <p className="text-gray-400 text-sm mb-3">
            Nagala soo xiriir WhatsApp-ka ama kusoo biir qaybaha bulshada.
          </p>
          <a
            href="https://wa.me/252XXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition"
          >
            WhatsApp hadda
          </a>
        </div>
      </div>

      <div className="border-t border-gray-800 py-4 text-center text-xs text-gray-500">
        &copy; 2025 7DataWin. Xuquuqda dhammaan waa la ilaaliyaa.
      </div>
    </footer>
  )
}

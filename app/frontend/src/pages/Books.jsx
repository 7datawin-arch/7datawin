import { Book, BookOpen, CheckCircle } from 'lucide-react'

const books = [
  {
    title: 'ISBAR COMPUTER',
    price: '$5',
    pages: '89',
    features: [
      'Computer basics',
      'Software & hardware',
      'Windows 11 iyo Mac OS',
      'Microsoft Office iyo Photoshop',
      'OBS Studio iyo editing'
    ],
  },
  {
    title: 'ISBAR PROGRAMMING',
    price: '$5',
    pages: '177',
    features: [
      'Programming basics',
      'Web development',
      'Programming languages',
      'Databases',
      'Code editors iyo IDEs'
    ],
  },
  {
    title: 'ISBAR AI BASIC',
    price: '$7',
    pages: '189',
    features: [
      'Taariikhda AI',
      'AI & waxbarashada',
      'AI & shaqooyinka',
      'AI & graphic design',
      'AI & ganacsiga'
    ],
  },
  {
    title: 'ISBAR ChatGPT Prompts Basic',
    price: 'Free',
    pages: '87',
    features: [
      'Waa maxay ChatGPT',
      'Sida loo qoro prompts',
      'Shaqooyinka ChatGPT',
      'ChatGPT waxbarashada',
      'ChatGPT & ganacsiga'
    ],
  },
]

export default function Books() {
  return (
    <div className="max-w-6xl mx-auto px-4 pt-12 pb-16">
      <div className="text-center mb-10">
        <p className="text-emerald-400 uppercase tracking-[0.3em] text-xs mb-3">Buugaag Qiimo Jaban</p>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Buugaagta Barashada IT iyo AI</h1>
        <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed">
          Buugaagta waxaa loogu talagalay dadka doonaya inay bilaabaan computer, coding, AI iyo ChatGPT. Waxaa la heli karaa PDF, si sahlan ayaad u akhrin kartaa.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {books.map((book) => (
          <div key={book.title} className="rounded-3xl border border-gray-700/80 bg-gray-900/70 p-6 shadow-lg shadow-black/30 transition hover:border-emerald-500/50">
            <div className="flex items-center justify-between gap-4 mb-5">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-emerald-400">{book.price}</p>
                <h2 className="text-2xl font-bold text-white mt-2">{book.title}</h2>
              </div>
              <div className="rounded-2xl bg-emerald-500/10 p-3 text-emerald-300">
                <Book className="w-6 h-6" />
              </div>
            </div>

            <p className="text-gray-400 mb-5 text-sm">Pages: {book.pages}</p>
            <ul className="space-y-3 text-gray-300 text-sm mb-6">
              {book.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mt-1 shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <button className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-emerald-400">
              <BookOpen className="w-4 h-4" />
              Nala soo xiriir si aad u hesho
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

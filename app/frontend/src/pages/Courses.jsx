import { useState } from 'react'
import { BookOpen, ChevronDown, ChevronUp, Cpu, Sparkles, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const courses = [
  {
    id: 'ai-40-youtube',
    title: '40 Cashar AI (YouTube)',
    subtitle: 'Koorso dhameystiran oo AI iyo chatbot ah',
    icon: Cpu,
    price: 'Free',
    summary: 'Baro chatbots, Manus AI, prompts, iyo sifooyin AI oo aad online ka daawan karto.',
    details: [
      'Aasaaska chatbot-yada iyo noocyadooda',
      'Knowledge base pipeline iyo ManyChat',
      'Prompt engineering iyo Gemini AI',
      'AI Video tools iyo social automation',
      '40 cashar oo hab fudud loo raaco'
    ],
    link: 'https://www.youtube.com/playlist?list=PLAI'
  },
  {
    id: 'ai-video-editing',
    title: '14 Maalmood AI Video Editing',
    subtitle: 'Casharro gaar ah oo video editing AI-ku ku shaqeeyo',
    icon: Sparkles,
    price: 'Free',
    summary: 'Baro sida AI ay u hagaajiso video editing, effects, iyo project workflow.',
    details: [
      'AI-powered editing tools',
      'Automated scene detection iyo filters',
      'Create motion graphics iyo thumbnails',
      'Value-add for marketing iyo content creation',
      'Maalin walba cashar iyo su’aalo la fahmi karo'
    ],
    link: 'https://loom.com/share/77792231bc8140008e8eeaab77b3d788'
  },
  {
    id: 'social-automation',
    title: 'Social Automation & Chatbot Building',
    subtitle: 'Fahan iyo dhis chatbot isticmaalaya WhatsApp, Telegram, iyo Messenger',
    icon: BookOpen,
    price: 'Free',
    summary: 'Koorso ku saabsan automation-ka, bot-building, iyo adeegyada AI ee suuqgeynta.',
    details: [
      'ManyChat, Chatfuel, Botfather iyo Chatbase',
      'Automation workflows iyo integrations',
      'Sida loo dhiso service automation degdeg ah',
      'Qorshaha mashruuca iyo product thinking',
      'Casharro diyaar u ah isticmaalaha bilowga ah'
    ],
    link: 'https://t.me/ISBAR_AI'
  },
]

export default function Courses() {
  const [openId, setOpenId] = useState('')

  return (
    <div className="max-w-6xl mx-auto px-4 pt-12 pb-16">
      <div className="text-center mb-10">
        <p className="text-emerald-400 uppercase tracking-[0.3em] text-xs mb-3">Free AI Courses</p>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Koorsooyin AI oo lacag la'aan ah</h1>
        <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed">
          Macaamiisha 7DataWin waxay helayaan koorsooyin AI bilaash ah inta data-du shaqeyneyso. Taabo koorsada si aad u aragto faahfaahinta.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {courses.map((course) => {
          const Icon = course.icon
          const open = openId === course.id

          return (
            <div key={course.id} className="rounded-3xl border border-gray-700/80 bg-gray-900/70 p-6 shadow-lg shadow-black/40 transition hover:border-emerald-500/50">
              <div className="flex items-center gap-4 mb-4">
                <div className="rounded-2xl bg-emerald-500/10 p-3 text-emerald-300">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-emerald-400">{course.price}</p>
                  <h2 className="text-xl font-bold text-white mt-1">{course.title}</h2>
                </div>
              </div>
              <p className="text-gray-400 mb-4 text-sm leading-6">{course.summary}</p>
              <button
                type="button"
                onClick={() => setOpenId(open ? '' : course.id)}
                className="flex items-center justify-between w-full rounded-2xl border border-gray-700 bg-gray-800/70 px-4 py-3 text-left text-white hover:border-emerald-500 transition"
              >
                <span className="font-semibold">Faahfaahin</span>
                {open ? <ChevronUp className="w-5 h-5 text-emerald-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
              </button>

              {open && (
                <div className="mt-4 space-y-3 text-gray-300 text-sm">
                  {course.details.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span className="mt-1 text-emerald-400">•</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              )}

              <a
                href={course.link}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-emerald-400 text-sm font-semibold hover:text-white transition"
              >
                Ka daawo / Ka baro hadda <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          )
        })}
      </div>

      <div className="mt-10 rounded-3xl border border-emerald-500/20 bg-emerald-500/5 p-6 text-center">
        <p className="text-gray-300 mb-4">
          Haddii aad data naga iibsatid, waxaad heli doontaa koorsooyinka AI bilaash inta adeeggaaga la isticmaalayo. Waxay kuugu jiraan dhamaan barnaamijyada koorsada iyo buugaagta.
        </p>
        <Link
          to="/buy-data"
          className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-500/20 hover:bg-emerald-400 transition"
        >
          Iibso Data oo hel Koorso Bilaash ah <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  )
}

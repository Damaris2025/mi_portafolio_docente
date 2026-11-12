import { motion } from 'framer-motion'
import { School } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'
import { getIcon } from '../ui/iconMap'
import { tones } from '../ui/styles'
import { contexto } from '../../data/damarisPortfolioData'

/** Distribución Bento: institución ancha, grupo alto, dos bloques pequeños. */
const spans = {
  institucion: 'lg:col-span-4',
  grupo: 'lg:col-span-2 lg:row-span-2',
  tecnologia: 'lg:col-span-2',
  barrera: 'lg:col-span-2',
}

export default function Contexto() {
  return (
    <div>
      <SectionHeader
        number={4}
        icon={School}
        title="Contexto educativo"
        subtitle="La institución, el grupo y las condiciones que enmarcan la práctica."
      />
      <div className="grid gap-4 lg:grid-cols-6">
        {contexto.map((b, i) => {
          const Icon = getIcon(b.icon)
          const t = tones[b.tone]
          return (
            <motion.article
              key={b.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className={`flex flex-col rounded-3xl border p-6 shadow-sm ${t.soft} ${t.border} ${spans[b.id]}`}
            >
              <div className="mb-4 flex items-center gap-3">
                <span className={`flex h-11 w-11 items-center justify-center rounded-2xl ${t.solid}`}>
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="font-serif text-xl font-bold text-indigo-950 dark:text-white">{b.title}</h3>
              </div>

              {b.bigNumber && (
                <div className="mb-4">
                  <p className={`font-serif text-6xl font-extrabold ${t.text}`}>{b.bigNumber}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{b.bigLabel}</p>
                </div>
              )}

              <p className="leading-relaxed text-slate-700 dark:text-slate-300">{b.text}</p>

              <div className="mt-auto flex flex-wrap gap-2 pt-5">
                {b.chips.map((c) => (
                  <span key={c} className={`rounded-full px-3 py-1 text-xs font-semibold ${t.chip}`}>
                    {c}
                  </span>
                ))}
              </div>
            </motion.article>
          )
        })}
      </div>
    </div>
  )
}

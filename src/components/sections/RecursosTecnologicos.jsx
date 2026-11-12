import { motion } from 'framer-motion'
import { MonitorSmartphone } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'
import { getIcon } from '../ui/iconMap'
import { tones } from '../ui/styles'
import { recursosTecnologicos } from '../../data/damarisPortfolioData'

export default function RecursosTecnologicos() {
  return (
    <div>
      <SectionHeader
        number={12}
        icon={MonitorSmartphone}
        title="Recursos tecnológicos aplicados"
        subtitle="Las herramientas digitales que sostuvieron el diagnóstico y las clases."
      />
      <div className="grid gap-5 md:grid-cols-2">
        {recursosTecnologicos.map((r, i) => {
          const Icon = getIcon(r.icon)
          const t = tones[r.tone]
          return (
            <motion.article
              key={r.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className={`relative overflow-hidden rounded-3xl border p-7 ${t.soft} ${t.border}`}
            >
              <Icon className={`absolute -right-4 -top-4 h-32 w-32 opacity-10 ${t.text}`} />
              <span className={`relative flex h-14 w-14 items-center justify-center rounded-2xl ${t.solid}`}>
                <Icon className="h-7 w-7" />
              </span>
              <h3 className="relative mt-4 font-serif text-2xl font-bold text-indigo-950 dark:text-white">{r.name}</h3>
              <p className="relative mt-2 text-slate-700 dark:text-slate-300">{r.text}</p>
              <div className="relative mt-5 flex flex-wrap gap-2">
                {r.tags.map((tag) => (
                  <span key={tag} className={`rounded-full px-3 py-1 text-xs font-semibold ${t.chip}`}>
                    {tag}
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

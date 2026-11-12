import { motion } from 'framer-motion'
import { Target } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'
import { getIcon } from '../ui/iconMap'
import { objetivos } from '../../data/damarisPortfolioData'

export default function Objetivos() {
  return (
    <div>
      <SectionHeader
        number={3}
        icon={Target}
        title="Objetivos de la práctica docente"
        subtitle="La ruta que guía el diagnóstico y la intervención."
      />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-rose-600 to-violet-700 p-8 text-white shadow-xl"
      >
        <Target className="absolute -right-6 -top-6 h-40 w-40 text-white/10" />
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-300">Objetivo general</p>
        <p className="relative mt-3 max-w-3xl font-serif text-2xl leading-snug">{objetivos.general}</p>
      </motion.div>

      <h3 className="mb-4 mt-10 font-serif text-2xl font-bold text-indigo-950 dark:text-white">Objetivos específicos</h3>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {objetivos.especificos.map((o, i) => {
          const Icon = getIcon(o.icon)
          return (
            <motion.div
              key={o.text}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.08 }}
              whileHover={{ y: -6, rotate: -0.6 }}
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
            >
              <span className="absolute -right-2 -top-4 font-serif text-8xl font-extrabold text-slate-100 transition-colors group-hover:text-rose-100 dark:text-slate-800 dark:group-hover:text-rose-950">
                {i + 1}
              </span>
              <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-950 text-white dark:bg-indigo-500">
                <Icon className="h-6 w-6" />
              </span>
              <p className="relative mt-4 leading-relaxed text-slate-700 dark:text-slate-300">{o.text}</p>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

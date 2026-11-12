import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { UserRound } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'
import Tabs from '../ui/Tabs'
import DynamicIcon from '../ui/DynamicIcon'
import { presentacion } from '../../data/damarisPortfolioData'

export default function Presentacion() {
  const [tab, setTab] = useState(presentacion.tabs[0].id)
  const current = presentacion.tabs.find((t) => t.id === tab)

  return (
    <div>
      <SectionHeader
        number={2}
        icon={UserRound}
        title="Presentación personal y profesional"
        subtitle="Quién soy, qué me motiva y qué espero de esta experiencia."
      />
      <Tabs tabs={presentacion.tabs} value={tab} onChange={setTab} groupId="presentacion" />

      <AnimatePresence mode="wait">
        <motion.div
          key={tab}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25 }}
          className="mt-6 grid gap-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm lg:grid-cols-[auto_1fr] dark:border-slate-800 dark:bg-slate-900"
        >
          <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-rose-600 to-violet-700 text-white shadow-lg">
            <DynamicIcon name={current.icon} className="h-10 w-10" />
          </div>
          <div>
            <h3 className="mb-3 font-serif text-2xl font-bold text-indigo-950 dark:text-white">{current.label}</h3>
            <p className="text-lg leading-relaxed text-slate-600 first-letter:float-left first-letter:mr-3 first-letter:font-serif first-letter:text-6xl first-letter:font-bold first-letter:leading-[0.85] first-letter:text-rose-600 dark:text-slate-300">
              {current.text}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

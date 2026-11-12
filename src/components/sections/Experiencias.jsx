import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Rocket, Sparkles, Star, TriangleAlert } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'
import Tabs from '../ui/Tabs'
import { experiencias } from '../../data/damarisPortfolioData'

function ListCard({ title, icon: Icon, items, tone }) {
  const styles =
    tone === 'rose'
      ? 'border-rose-200 bg-rose-50 dark:border-rose-900 dark:bg-rose-950/30'
      : 'border-emerald-200 bg-emerald-50 dark:border-emerald-900 dark:bg-emerald-950/30'
  const dot = tone === 'rose' ? 'bg-rose-600' : 'bg-emerald-600'
  return (
    <div className={`rounded-3xl border p-7 ${styles}`}>
      <h3 className="mb-4 flex items-center gap-3 font-serif text-2xl font-bold text-indigo-950 dark:text-white">
        <Icon className="h-6 w-6" /> {title}
      </h3>
      <ul className="space-y-3">
        {items.map((it, i) => (
          <motion.li
            key={it}
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.08 }}
            className="flex gap-3 text-slate-700 dark:text-slate-300"
          >
            <span className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-white ${dot}`}>
              {tone === 'rose' ? <Rocket className="h-3.5 w-3.5" /> : <Check className="h-3.5 w-3.5" />}
            </span>
            {it}
          </motion.li>
        ))}
      </ul>
    </div>
  )
}

export default function Experiencias() {
  const [tab, setTab] = useState('relato')

  return (
    <div>
      <SectionHeader
        number={13}
        icon={Sparkles}
        title="Experiencias significativas"
        subtitle="Lo que la práctica dejó en mí: relatos, logros, retos y proyección."
      />
      <Tabs
        groupId="experiencias"
        value={tab}
        onChange={setTab}
        tabs={[
          { id: 'relato', label: 'Relato', icon: 'BookOpen' },
          { id: 'logros', label: 'Logros y mejoras', icon: 'ListChecks' },
          { id: 'valoracion', label: 'Valoración', icon: 'Sparkles' },
          { id: 'proyeccion', label: 'Proyección', icon: 'Rocket' },
        ]}
      />

      <motion.div key={tab} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} className="mt-6">
        {tab === 'relato' && (
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <h3 className="mb-3 font-serif text-2xl font-bold text-indigo-950 dark:text-white">
              Relato de situaciones relevantes
            </h3>
            <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">{experiencias.relato}</p>
          </div>
        )}
        {tab === 'logros' && (
          <div className="grid gap-5 lg:grid-cols-2">
            <ListCard title="Logros alcanzados" icon={Star} items={experiencias.logros} tone="emerald" />
            <ListCard title="Áreas de mejora" icon={TriangleAlert} items={experiencias.mejoras} tone="rose" />
          </div>
        )}
        {tab === 'valoracion' && (
          <div className="rounded-3xl bg-gradient-to-br from-rose-600 to-violet-700 p-8 text-white shadow-xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-300">Valoración general de la práctica</p>
            <p className="mt-4 font-serif text-2xl leading-relaxed">{experiencias.valoracion}</p>
          </div>
        )}
        {tab === 'proyeccion' && (
          <div className="rounded-3xl bg-gradient-to-br from-indigo-950 to-violet-800 p-8 text-white shadow-xl">
            <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-amber-400">
              <Rocket className="h-4 w-4" /> Proyección profesional · 5 años
            </p>
            <p className="mt-4 font-serif text-2xl leading-relaxed">{experiencias.proyeccion}</p>
          </div>
        )}
      </motion.div>
    </div>
  )
}

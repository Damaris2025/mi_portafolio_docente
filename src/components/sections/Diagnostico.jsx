import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChartColumn, ExternalLink, Info } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'
import Tabs from '../ui/Tabs'
import AccordionItem from '../ui/AccordionItem'
import AnimatedBarChart from '../ui/AnimatedBarChart'
import { getIcon } from '../ui/iconMap'
import { tones } from '../ui/styles'
import { diagnostico } from '../../data/damarisPortfolioData'

function Instrumentos() {
  const [open, setOpen] = useState(diagnostico.instrumentos[0].id)
  return (
    <div className="space-y-3">
      {diagnostico.instrumentos.map((ins, i) => (
        <AccordionItem
          key={ins.id}
          open={open === ins.id}
          onToggle={() => setOpen(open === ins.id ? null : ins.id)}
          icon={getIcon(ins.icon)}
          title={`${i + 1}. ${ins.title}`}
          meta={ins.meta}
        >
          <p className="leading-relaxed text-slate-600 dark:text-slate-300">{ins.text}</p>
          <div className="mt-4 flex flex-wrap items-center gap-2">
            {ins.highlights.map((h) => (
              <span key={h} className="rounded-full bg-rose-100 px-3 py-1 text-xs font-semibold text-rose-700 dark:bg-rose-950 dark:text-rose-300">
                {h}
              </span>
            ))}
            {ins.link && (
              <a
                href={ins.link}
                target="_blank"
                rel="noreferrer"
                className="ml-auto inline-flex items-center gap-1.5 rounded-xl bg-indigo-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-violet-700"
              >
                Abrir formulario <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </div>
        </AccordionItem>
      ))}
    </div>
  )
}

function Graficos() {
  return (
    <div>
      <div className="mb-5 flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800 dark:border-amber-900 dark:bg-amber-950/30 dark:text-amber-200">
        <Info className="mt-0.5 h-4 w-4 shrink-0" />
        <p>
          {diagnostico.note} La barra <span className="font-bold text-rose-600">rosa</span> marca la respuesta dominante.
        </p>
      </div>
      <div className="grid gap-5 lg:grid-cols-2">
        {diagnostico.charts.map((c) => (
          <AnimatedBarChart
            key={c.id}
            index={c.id}
            title={c.title}
            items={c.items}
            interpretation={c.interpretation}
            n={diagnostico.n}
          />
        ))}
      </div>
    </div>
  )
}

function Foda() {
  const [focus, setFocus] = useState(null)
  return (
    <div>
      <p className="mb-4 text-sm text-slate-500 dark:text-slate-400">
        Toca un cuadrante para enfocarlo; vuelve a tocarlo para ver la matriz completa.
      </p>
      <motion.div layout className={`grid gap-4 ${focus ? 'grid-cols-1' : 'sm:grid-cols-2'}`}>
        {diagnostico.foda
          .filter((q) => !focus || q.id === focus)
          .map((q) => {
            const t = tones[q.tone]
            const Icon = getIcon(q.icon)
            return (
              <motion.button
                layout
                key={q.id}
                type="button"
                onClick={() => setFocus(focus === q.id ? null : q.id)}
                whileHover={{ scale: focus ? 1 : 1.015 }}
                className={`rounded-3xl border p-6 text-left shadow-sm ${t.soft} ${t.border}`}
              >
                <div className="mb-4 flex items-center gap-4">
                  <span className={`flex h-14 w-14 items-center justify-center rounded-2xl font-serif text-3xl font-extrabold ${t.solid}`}>
                    {q.letter}
                  </span>
                  <div>
                    <h4 className="font-serif text-xl font-bold text-indigo-950 dark:text-white">{q.title}</h4>
                    <p className={`text-xs font-semibold uppercase tracking-wider ${t.text}`}>
                      {q.id === 'fortalezas' || q.id === 'debilidades' ? 'Factor interno' : 'Factor externo'}
                    </p>
                  </div>
                  <Icon className={`ml-auto h-7 w-7 ${t.text}`} />
                </div>
                <ul className="space-y-2">
                  {q.items.map((it, i) => (
                    <motion.li
                      key={it}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06 }}
                      className="flex gap-2 text-slate-700 dark:text-slate-300"
                    >
                      <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${t.solid}`} />
                      {it}
                    </motion.li>
                  ))}
                </ul>
              </motion.button>
            )
          })}
      </motion.div>
    </div>
  )
}

export default function Diagnostico() {
  const [tab, setTab] = useState('contexto')

  return (
    <div>
      <SectionHeader
        number={6}
        icon={ChartColumn}
        title="Diagnóstico educativo"
        subtitle="Dashboard analítico: contexto, instrumentos, resultados (n = 30) e interpretación crítica."
      />
      <Tabs
        groupId="diagnostico"
        value={tab}
        onChange={setTab}
        tabs={[
          { id: 'contexto', label: 'Contexto', icon: 'School' },
          { id: 'instrumentos', label: 'Instrumentos', icon: 'ClipboardList' },
          { id: 'graficos', label: '9 gráficos', icon: 'ChartColumn' },
          { id: 'foda', label: 'Matriz FODA', icon: 'Scale' },
        ]}
      />
      <AnimatePresence mode="wait">
        <motion.div
          key={tab}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22 }}
          className="mt-6"
        >
          {tab === 'contexto' && (
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <h3 className="mb-3 font-serif text-2xl font-bold text-indigo-950 dark:text-white">
                Descripción del contexto escolar y pedagógico
              </h3>
              <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">{diagnostico.descripcion}</p>
            </div>
          )}
          {tab === 'instrumentos' && <Instrumentos />}
          {tab === 'graficos' && <Graficos />}
          {tab === 'foda' && <Foda />}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CalendarRange } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'
import Tabs from '../ui/Tabs'
import DynamicIcon from '../ui/DynamicIcon'
import { gantt, planSemanal } from '../../data/damarisPortfolioData'

const MONTHS = ['Todos', 'Agosto', 'Septiembre']

function Gantt() {
  const [month, setMonth] = useState('Todos')
  const [tip, setTip] = useState(null) // { x, y, act }

  const cols = gantt.columns.filter((c) => month === 'Todos' || c.month === month)
  const first = cols[0].id
  const last = cols[cols.length - 1].id
  const visible = gantt.actividades.filter((a) => a.end >= first && a.start <= last)
  const months = [...new Set(cols.map((c) => c.month))]
  const template = `repeat(${cols.length}, minmax(52px, 1fr))`

  const showTip = (e, act) => setTip({ x: e.clientX, y: e.clientY, act })

  return (
    <div>
      <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
        <div className="text-sm text-slate-600 dark:text-slate-300">
          <p>
            <strong className="text-indigo-950 dark:text-white">Periodo:</strong> {gantt.periodo}
          </p>
          <p>
            <strong className="text-indigo-950 dark:text-white">Responsable:</strong> {gantt.responsable}
          </p>
        </div>
        <div className="flex rounded-2xl bg-slate-200/70 p-1 dark:bg-slate-800">
          {MONTHS.map((m) => (
            <button
              key={m}
              type="button"
              onClick={() => setMonth(m)}
              className={`rounded-xl px-4 py-1.5 text-sm font-semibold transition ${
                month === m
                  ? 'bg-white text-rose-600 shadow dark:bg-slate-950 dark:text-rose-400'
                  : 'text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white'
              }`}
            >
              {m}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-4 flex flex-wrap gap-4 text-xs">
        {Object.values(gantt.fases).map((f) => (
          <span key={f.label} className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
            <span className={`h-3 w-3 rounded ${f.bar}`} /> {f.label}
          </span>
        ))}
      </div>

      <div className="overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <div className="min-w-[760px]">
          {/* Cabecera de meses */}
          <div className="grid grid-cols-[260px_1fr] border-b border-slate-200 dark:border-slate-800">
            <div className="p-3 text-xs font-bold uppercase tracking-wider text-slate-400">Actividad</div>
            <div className="grid" style={{ gridTemplateColumns: template }}>
              {months.map((m) => {
                const span = cols.filter((c) => c.month === m).length
                return (
                  <div
                    key={m}
                    style={{ gridColumn: `span ${span}` }}
                    className="border-l border-slate-200 bg-indigo-950 p-2 text-center text-xs font-bold uppercase tracking-wider text-white first:rounded-none dark:border-slate-800"
                  >
                    {m}
                  </div>
                )
              })}
            </div>
          </div>
          {/* Cabecera de fechas */}
          <div className="grid grid-cols-[260px_1fr] border-b border-slate-200 dark:border-slate-800">
            <div />
            <div className="grid" style={{ gridTemplateColumns: template }}>
              {cols.map((c) => (
                <div key={c.id} className="border-l border-slate-200 p-2 text-center text-xs font-semibold text-slate-500 dark:border-slate-800 dark:text-slate-400">
                  {c.label}
                </div>
              ))}
            </div>
          </div>

          <AnimatePresence initial={false}>
            {visible.map((a) => {
              const s = Math.max(a.start, first) - first + 1
              const e = Math.min(a.end, last) - first + 2
              return (
                <motion.div
                  layout
                  key={a.n}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="grid grid-cols-[260px_1fr] border-b border-slate-100 last:border-0 hover:bg-slate-50 dark:border-slate-800/60 dark:hover:bg-slate-800/40"
                >
                  <div className="flex items-center gap-2 p-3 text-sm text-slate-700 dark:text-slate-200">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xs font-bold text-slate-500 dark:bg-slate-800">
                      {a.n}
                    </span>
                    {a.name}
                  </div>
                  <div
                    className="relative grid items-center py-2"
                    style={{
                      gridTemplateColumns: template,
                      backgroundImage:
                        'linear-gradient(to right, rgba(148,163,184,0.25) 1px, transparent 1px)',
                      backgroundSize: `calc(100% / ${cols.length}) 100%`,
                    }}
                  >
                    <motion.button
                      type="button"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      style={{ gridColumn: `${s} / ${e}`, transformOrigin: 'left' }}
                      transition={{ duration: 0.5, delay: a.n * 0.03 }}
                      whileHover={{ scaleY: 1.25 }}
                      onMouseEnter={(ev) => showTip(ev, a)}
                      onMouseMove={(ev) => showTip(ev, a)}
                      onMouseLeave={() => setTip(null)}
                      onClick={(ev) => showTip(ev, a)}
                      aria-label={`${a.name}: ${a.when}`}
                      className={`mx-0.5 h-6 rounded-full ${gantt.fases[a.fase].bar} shadow`}
                    />
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>
      </div>

      {tip && (
        <div
          className="pointer-events-none fixed z-[90] max-w-xs rounded-2xl bg-indigo-950 px-4 py-3 text-sm text-white shadow-2xl"
          style={{ left: Math.min(tip.x + 14, window.innerWidth - 280), top: tip.y + 18 }}
        >
          <p className="font-bold">
            {tip.act.n}. {tip.act.name}
          </p>
          <p className="text-amber-300">{tip.act.when}</p>
          <p className="text-xs text-white/60">
            Fase: {gantt.fases[tip.act.fase].label} · {gantt.responsable}
          </p>
        </div>
      )}
    </div>
  )
}

function PlanSemanal() {
  const [active, setActive] = useState(0)
  const item = planSemanal[active]

  return (
    <div>
      {/* Línea de tiempo horizontal */}
      <div className="relative mb-8 px-2">
        <div className="absolute left-8 right-8 top-6 h-1 rounded bg-slate-200 dark:bg-slate-800" />
        <motion.div
          className="absolute left-8 top-6 h-1 rounded bg-gradient-to-r from-rose-600 to-violet-700"
          animate={{ width: `calc((100% - 4rem) * ${active / (planSemanal.length - 1)})` }}
          transition={{ duration: 0.4 }}
        />
        <div className="relative flex justify-between">
          {planSemanal.map((w, i) => (
            <button
              key={w.week}
              type="button"
              onClick={() => setActive(i)}
              className="group flex flex-col items-center gap-2"
              aria-label={`Semana ${w.week}`}
            >
              <span
                className={`flex h-12 w-12 items-center justify-center rounded-full border-4 text-sm font-bold transition ${
                  i <= active
                    ? 'border-white bg-rose-600 text-white shadow-lg dark:border-slate-950'
                    : 'border-white bg-slate-200 text-slate-500 group-hover:bg-rose-100 dark:border-slate-950 dark:bg-slate-800'
                } ${i === active ? 'scale-110 ring-4 ring-rose-600/30' : ''}`}
              >
                {w.week}
              </span>
              <span className={`text-xs font-semibold ${i === active ? 'text-rose-600 dark:text-rose-400' : 'text-slate-500'}`}>
                Semana {w.week}
              </span>
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -24 }}
          transition={{ duration: 0.25 }}
          className="grid gap-4 md:grid-cols-[2fr_1fr]"
        >
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <div className="mb-3 flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-100 text-violet-700 dark:bg-violet-900/50 dark:text-violet-300">
                <DynamicIcon name={item.icon} className="h-5 w-5" />
              </span>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Acción · Semana {item.week}</p>
            </div>
            <p className="font-serif text-2xl font-bold text-indigo-950 dark:text-white">{item.action}</p>
          </div>
          <div className="rounded-3xl bg-gradient-to-br from-amber-500 to-rose-600 p-7 text-white shadow-lg">
            <p className="text-xs font-bold uppercase tracking-widest text-white/80">Producto</p>
            <p className="mt-2 font-serif text-2xl font-bold">{item.product}</p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default function Planeacion() {
  const [tab, setTab] = useState('gantt')

  return (
    <div>
      <SectionHeader
        number={5}
        icon={CalendarRange}
        title="Planeación y organización"
        subtitle="Cronograma del diagnóstico y plan de acción de las cinco semanas del módulo."
      />
      <Tabs
        groupId="planeacion"
        value={tab}
        onChange={setTab}
        tabs={[
          { id: 'gantt', label: 'A · Diagrama de Gantt', icon: 'CalendarRange' },
          { id: 'plan', label: 'B · Plan de acción semanal', icon: 'ListChecks' },
        ]}
      />
      <div className="mt-6">{tab === 'gantt' ? <Gantt /> : <PlanSemanal />}</div>
    </div>
  )
}

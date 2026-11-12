import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Lightbulb, Package, Quote, Sparkles, TrendingUp } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'
import { getIcon } from '../ui/iconMap'
import DynamicIcon from '../ui/DynamicIcon'
import { propuesta } from '../../data/damarisPortfolioData'

const steps = [
  { id: 'justificacion', label: 'Justificación' },
  { id: 'objetivo', label: 'Objetivo' },
  { id: 'acciones', label: 'Acciones' },
  { id: 'recursos', label: 'Recursos' },
  { id: 'impacto', label: 'Impacto' },
  { id: 'reflexion', label: 'Reflexión' },
]

function StepContent({ id }) {
  switch (id) {
    case 'justificacion':
      return (
        <div>
          <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">{propuesta.justificacion}</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {propuesta.datosClave.map((d) => (
              <div key={d.label} className="rounded-2xl bg-rose-50 p-4 dark:bg-rose-950/30">
                <p className="font-serif text-3xl font-extrabold text-rose-600">{d.value}</p>
                <p className="text-xs text-slate-600 dark:text-slate-300">{d.label}</p>
              </div>
            ))}
          </div>
        </div>
      )
    case 'objetivo':
      return <p className="font-serif text-2xl leading-snug text-indigo-950 dark:text-white">{propuesta.objetivo}</p>
    case 'acciones':
      return (
        <div>
        <div className="grid gap-4 sm:grid-cols-2">
          {propuesta.acciones.map((a, i) => {
            const Icon = getIcon(a.icon)
            return (
              <motion.div
                key={a.text}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="flex gap-4 rounded-2xl bg-slate-50 p-4 dark:bg-slate-800/60"
              >
                <span className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-violet-700 text-white">
                  <Icon className="h-6 w-6" />
                  <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-amber-500 text-xs font-bold text-indigo-950">
                    {i + 1}
                  </span>
                </span>
                <p className="text-slate-700 dark:text-slate-300">{a.text}</p>
              </motion.div>
            )
          })}
        </div>
        {propuesta.accionesNota && (
          <p className="mt-5 text-sm italic text-slate-500 dark:text-slate-400">{propuesta.accionesNota}</p>
        )}
        </div>
      )
    case 'recursos':
      return (
        <div>
        <div className="grid gap-4 sm:grid-cols-2">
          {propuesta.recursos.map((g, gi) => (
            <div key={g.tipo} className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-800/60">
              <p className="mb-3 flex items-center gap-2 text-sm font-bold text-violet-700 dark:text-violet-300">
                <DynamicIcon name={g.icon} className="h-4 w-4" /> {g.tipo}
              </p>
              <div className="flex flex-wrap gap-2">
                {g.items.map((r, i) => (
                  <motion.span
                    key={r}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: gi * 0.08 + i * 0.05 }}
                    className="inline-flex items-center gap-2 rounded-full bg-indigo-950 px-3.5 py-1.5 text-sm font-semibold text-white dark:bg-indigo-500"
                  >
                    <Package className="h-3.5 w-3.5 shrink-0" /> {r}
                  </motion.span>
                ))}
              </div>
            </div>
          ))}
        </div>
        {propuesta.recursosNota && (
          <p className="mt-5 text-sm italic text-slate-500 dark:text-slate-400">{propuesta.recursosNota}</p>
        )}
        </div>
      )
    case 'impacto':
      return (
        <div className="flex items-start gap-4">
          <TrendingUp className="mt-1 h-10 w-10 shrink-0 text-emerald-600" />
          <p className="text-xl leading-relaxed text-slate-700 dark:text-slate-300">{propuesta.impacto}</p>
        </div>
      )
    default:
      return null
  }
}

export default function Propuesta() {
  const [step, setStep] = useState(0)
  const current = steps[step]

  return (
    <div>
      <SectionHeader
        number={11}
        icon={Lightbulb}
        title="Propuesta de mejora"
        subtitle="Infografía interactiva paso a paso, nacida de los hallazgos del diagnóstico."
      />

      {/* Barra de pasos */}
      <div className="mb-6 grid grid-cols-3 gap-2 sm:grid-cols-6">
        {steps.map((s, i) => (
          <button
            key={s.id}
            type="button"
            onClick={() => setStep(i)}
            className={`relative overflow-hidden rounded-2xl px-3 py-3 text-center text-xs font-bold transition sm:text-sm ${
              i === step
                ? 'bg-gradient-to-br from-rose-600 to-violet-700 text-white shadow-lg'
                : i < step
                  ? 'bg-violet-100 text-violet-800 dark:bg-violet-900/40 dark:text-violet-200'
                  : 'bg-slate-200/70 text-slate-500 dark:bg-slate-800 dark:text-slate-400'
            }`}
          >
            <span className="block text-[10px] opacity-70">Paso {i + 1}</span>
            {s.label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.25 }}
          className="min-h-56 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900"
        >
          {current.id === 'reflexion' ? (
            <div className="relative rounded-2xl bg-gradient-to-br from-amber-100 to-rose-100 p-8 dark:from-amber-950/40 dark:to-rose-950/40">
              <Quote className="absolute right-4 top-4 h-12 w-12 text-amber-500/30" />
              <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-rose-600">
                <Sparkles className="h-4 w-4" /> Reflexión personal sobre el diseño de la propuesta
              </p>
              <p className="mt-3 font-serif text-xl italic leading-relaxed text-indigo-950 dark:text-white">
                {propuesta.reflexion}
              </p>
            </div>
          ) : (
            <>
              <h3 className="mb-4 font-serif text-2xl font-bold text-rose-600">{current.label}</h3>
              <StepContent id={current.id} />
            </>
          )}
        </motion.div>
      </AnimatePresence>

      <div className="mt-5 flex justify-between">
        <button
          type="button"
          disabled={step === 0}
          onClick={() => setStep((s) => s - 1)}
          className="rounded-xl bg-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-700 transition enabled:hover:bg-slate-300 disabled:opacity-40 dark:bg-slate-800 dark:text-slate-200"
        >
          Anterior
        </button>
        <button
          type="button"
          disabled={step === steps.length - 1}
          onClick={() => setStep((s) => s + 1)}
          className="rounded-xl bg-indigo-950 px-5 py-2.5 text-sm font-semibold text-white transition enabled:hover:bg-rose-600 disabled:opacity-40"
        >
          Siguiente paso
        </button>
      </div>
    </div>
  )
}

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, GraduationCap, Quote } from 'lucide-react'
import { portada, sections } from '../../data/damarisPortfolioData'
import { getIcon } from '../ui/iconMap'

/** Marco artístico con la fotografía profesional (o avatar si aún no existe). */
function PhotoFrame() {
  const [failed, setFailed] = useState(false)
  return (
    <div className="relative mx-auto h-80 w-64 sm:h-96 sm:w-72">
      <div className="absolute -inset-3 rotate-3 rounded-[2.5rem] bg-gradient-to-br from-rose-600 to-violet-700 opacity-90" />
      <div className="absolute -inset-3 -rotate-3 rounded-[2.5rem] border-2 border-amber-500/70" />
      <div className="relative h-full w-full overflow-hidden rounded-[2rem] bg-indigo-950 shadow-2xl ring-4 ring-white dark:ring-slate-900">
        {/*
          ▸ PARA REEMPLAZAR LA FOTO: copia tu fotografía profesional en
            `public/FOTO_PRINCIPAL.png` (o cambia `portada.foto` en
            src/data/damarisPortfolioData.js). Si el archivo no existe se
            muestra automáticamente este avatar.
        */}
        {!failed ? (
          <img
            src={portada.foto}
            alt={`Fotografía profesional de ${portada.estudiante}`}
            className="h-full w-full object-cover"
            onError={() => setFailed(true)}
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-gradient-to-b from-violet-700 via-indigo-950 to-indigo-950 text-white">
            <div className="flex h-28 w-28 items-center justify-center rounded-full border-4 border-white/30 bg-white/10 font-serif text-5xl font-bold">
              DO
            </div>
            <p className="px-6 text-center text-xs text-white/70">
              Agrega tu foto en <code className="rounded bg-white/15 px-1.5 py-0.5">public/FOTO_PRINCIPAL.png</code>
            </p>
          </div>
        )}
      </div>
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
        className="absolute -bottom-5 -right-6 flex items-center gap-2 rounded-2xl bg-amber-500 px-4 py-2 text-sm font-bold text-indigo-950 shadow-xl"
      >
        <GraduationCap className="h-4 w-4" /> DDP1109
      </motion.div>
    </div>
  )
}

export default function Portada({ onNavigate }) {
  const quick = sections.filter((s) => s.id !== 'portada').slice(0, 6)

  return (
    <div className="space-y-8">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-indigo-950 via-violet-900 to-indigo-950 p-8 text-white shadow-2xl sm:p-12">
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-rose-600/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-amber-500/20 blur-3xl" />

        <div className="relative grid items-center gap-12 lg:grid-cols-[1.4fr_1fr]">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-400">{portada.universidad}</p>
            <p className="mt-1 text-sm text-white/70">
              {portada.facultad} · {portada.escuela}
            </p>
            <p className="text-sm text-white/70">{portada.carrera}</p>

            <h1 className="mt-6 font-serif text-5xl font-extrabold leading-[1.05] sm:text-6xl">
              {portada.titulo}
            </h1>
            <p className="mt-3 text-lg text-rose-200">
              {portada.asignatura} · {portada.ciclo}
            </p>

            <p className="mt-8 font-serif text-3xl font-semibold text-white">{portada.estudiante}</p>

            <dl className="mt-6 grid gap-4 text-sm sm:grid-cols-2">
              {[
                ['Docente tutor (UES)', portada.tutorUES],
                ['Coordinador de asignatura', portada.coordinador],
                ['Institución de práctica', portada.institucion],
              ].map(([k, v]) => (
                <div key={k} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                  <dt className="text-xs uppercase tracking-wider text-white/50">{k}</dt>
                  <dd className="mt-1 font-semibold">{v}</dd>
                </div>
              ))}
            </dl>

            <blockquote className="mt-8 flex gap-3 border-l-4 border-amber-500 pl-4">
              <Quote className="mt-1 h-5 w-5 shrink-0 text-amber-400" />
              <p className="font-serif text-xl italic text-white/90">“{portada.lema}”</p>
            </blockquote>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.15 }}>
            <PhotoFrame />
          </motion.div>
        </div>
      </div>

      {/* Quick stats */}
      <div className="grid gap-4 sm:grid-cols-3">
        {portada.stats.map((s, i) => {
          const Icon = getIcon(s.icon)
          return (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              whileHover={{ y: -4 }}
              className="flex items-center gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-rose-100 text-rose-600 dark:bg-rose-950 dark:text-rose-400">
                <Icon className="h-7 w-7" />
              </span>
              <div>
                <p className="font-serif text-3xl font-bold text-indigo-950 dark:text-white">{s.value}</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">{s.label}</p>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Acceso rápido */}
      <div>
        <h3 className="mb-4 font-serif text-2xl font-bold text-indigo-950 dark:text-white">Explora el portafolio</h3>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {quick.map((s) => {
            const Icon = getIcon(s.icon)
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => onNavigate(s.id)}
                className="group flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 text-left transition hover:border-rose-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:border-rose-700"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-100 text-violet-700 dark:bg-violet-900/50 dark:text-violet-300">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="flex-1 text-sm font-semibold text-slate-700 dark:text-slate-200">{s.label}</span>
                <ArrowRight className="h-4 w-4 text-slate-300 transition group-hover:translate-x-1 group-hover:text-rose-600" />
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

import { motion } from 'framer-motion'
import { ClipboardCheck, Hourglass, Quote } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'
import { getIcon } from '../ui/iconMap'
import { tones } from '../ui/styles'
import { evaluacion } from '../../data/damarisPortfolioData'

export default function Evaluacion() {
  return (
    <div>
      <SectionHeader
        number={10}
        icon={ClipboardCheck}
        title="Evaluación y retroalimentación"
        subtitle="Mi autoevaluación y las voces de quienes acompañaron el proceso."
      />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-950 to-violet-800 p-8 text-white shadow-xl"
      >
        <Quote className="absolute right-6 top-6 h-20 w-20 text-white/10" />
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-400">Autoevaluación del desempeño docente</p>
        <p className="relative mt-4 max-w-4xl font-serif text-xl leading-relaxed">{evaluacion.autoevaluacion}</p>
      </motion.div>

      <h3 className="mb-4 mt-10 font-serif text-2xl font-bold text-indigo-950 dark:text-white">
        Comentarios de tutores y estudiantes
      </h3>
      <div className="grid gap-5 md:grid-cols-3">
        {evaluacion.comentarios.map((c, i) => {
          const Icon = getIcon(c.icon)
          const t = tones[c.tone]
          return (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.1 }}
              whileHover={{ y: -6 }}
              className={`flex flex-col rounded-3xl border p-6 ${t.soft} ${t.border}`}
            >
              <span className={`mb-4 flex h-12 w-12 items-center justify-center rounded-2xl ${t.solid}`}>
                <Icon className="h-6 w-6" />
              </span>
              <p className={`text-xs font-bold uppercase tracking-widest ${t.text}`}>{c.rol}</p>
              <p className="mt-1 font-serif text-lg font-bold text-indigo-950 dark:text-white">{c.nombre}</p>

              {c.texto ? (
                <>
                  <p className="mt-4 italic text-slate-700 dark:text-slate-300">“{c.texto}”</p>
                  {c.nota && <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">{c.nota}</p>}
                </>
              ) : (
                <div className="mt-auto pt-6">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-amber-700 shadow-sm dark:bg-slate-900 dark:text-amber-300">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-500 opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-500" />
                    </span>
                    <Hourglass className="h-3.5 w-3.5" /> {evaluacion.estado}
                  </span>
                </div>
              )}
            </motion.div>
          )
        })}
      </div>

      {evaluacion.reflexionComentarios && (
        <div className="mt-6 rounded-3xl border border-amber-200 bg-amber-50 p-6 dark:border-amber-900/50 dark:bg-amber-950/30">
          <p className="text-xs font-bold uppercase tracking-widest text-amber-700 dark:text-amber-300">
            Reflexión sobre los comentarios recibidos
          </p>
          <p className="mt-2 font-serif text-lg italic text-indigo-950 dark:text-white">“{evaluacion.reflexionComentarios}”</p>
        </div>
      )}
    </div>
  )
}

import { motion } from 'framer-motion'

/**
 * Gráfico de barras horizontales animado.
 * - La barra con `dominant: true` se resalta en rose-600; las demás en indigo-900.
 * - Las barras se animan al entrar en pantalla.
 */
export default function AnimatedBarChart({ index, title, items, interpretation, n = 30 }) {
  const max = 100

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.4 }}
      className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
    >
      <div className="mb-5 flex items-start gap-3">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-indigo-950 text-sm font-bold text-white dark:bg-indigo-500">
          {index}
        </span>
        <div>
          <h4 className="font-serif text-lg font-bold leading-snug text-indigo-950 dark:text-white">
            {title}
          </h4>
          <p className="text-xs text-slate-400">n = {n}</p>
        </div>
      </div>

      <ul className="flex-1 space-y-3">
        {items.map((item, i) => (
          <li key={item.label}>
            <div className="mb-1 flex items-baseline justify-between gap-3 text-sm">
              <span
                className={
                  item.dominant
                    ? 'font-bold text-rose-600 dark:text-rose-400'
                    : 'font-medium text-slate-600 dark:text-slate-300'
                }
              >
                {item.label}
              </span>
              <span className="shrink-0 tabular-nums text-xs text-slate-500 dark:text-slate-400">
                {item.value} · <strong className="text-sm">{item.pct.toFixed(1)}%</strong>
              </span>
            </div>
            <div className="h-3 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${(item.pct / max) * 100}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.1 + i * 0.08, ease: 'easeOut' }}
                className={`h-full rounded-full ${
                  item.dominant ? 'bg-rose-600' : 'bg-indigo-900 dark:bg-indigo-500'
                }`}
              />
            </div>
          </li>
        ))}
      </ul>

      <p className="mt-5 rounded-2xl bg-slate-50 p-3 text-sm italic leading-relaxed text-slate-600 dark:bg-slate-800/60 dark:text-slate-300">
        “{interpretation}”
      </p>
    </motion.article>
  )
}

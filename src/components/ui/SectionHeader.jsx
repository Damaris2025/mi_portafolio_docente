import { motion } from 'framer-motion'

export default function SectionHeader({ number, icon: Icon, title, subtitle }) {
  return (
    <motion.header
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
    >
      <div className="flex items-start gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-600 to-violet-700 text-white shadow-lg shadow-rose-600/20">
          {Icon && <Icon className="h-7 w-7" />}
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-rose-600 dark:text-rose-400">
            Apartado {String(number).padStart(2, '0')}
          </p>
          <h2 className="font-serif text-3xl font-bold leading-tight text-indigo-950 sm:text-4xl dark:text-white">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-1 max-w-2xl text-sm text-slate-500 dark:text-slate-400">{subtitle}</p>
          )}
        </div>
      </div>
      <span
        aria-hidden="true"
        className="hidden font-serif text-7xl font-extrabold leading-none text-slate-200 sm:block dark:text-slate-800"
      >
        {String(number).padStart(2, '0')}
      </span>
    </motion.header>
  )
}

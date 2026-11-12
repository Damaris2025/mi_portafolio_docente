import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

/** Panel desplegable (acordeón) con animación de altura. */
export default function AccordionItem({ open, onToggle, icon: Icon, title, meta, children }) {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center gap-4 p-5 text-left transition hover:bg-slate-50 dark:hover:bg-slate-800/50"
      >
        {Icon && (
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-violet-100 text-violet-700 dark:bg-violet-900/50 dark:text-violet-300">
            <Icon className="h-5 w-5" />
          </span>
        )}
        <span className="min-w-0 flex-1">
          <span className="block font-serif text-lg font-bold text-indigo-950 dark:text-white">{title}</span>
          {meta && <span className="block text-xs text-slate-500 dark:text-slate-400">{meta}</span>}
        </span>
        <motion.span animate={{ rotate: open ? 180 : 0 }} className="text-slate-400">
          <ChevronDown className="h-5 w-5" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="border-t border-slate-100 p-5 dark:border-slate-800">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

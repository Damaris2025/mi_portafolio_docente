import { motion } from 'framer-motion'
import { getIcon } from './iconMap'

/**
 * Pestañas animadas. `tabs`: [{ id, label, icon?: string }]
 * El indicador activo se desliza con layoutId (único por grupo).
 */
export default function Tabs({ tabs, value, onChange, groupId = 'tabs' }) {
  return (
    <div
      role="tablist"
      className="flex gap-1 overflow-x-auto rounded-2xl border border-slate-200 bg-white p-1.5 shadow-sm dark:border-slate-800 dark:bg-slate-900"
    >
      {tabs.map((tab) => {
        const Icon = tab.icon ? getIcon(tab.icon) : null
        const active = tab.id === value
        return (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => onChange(tab.id)}
            className={`relative flex shrink-0 items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors ${
              active
                ? 'text-white'
                : 'text-slate-600 hover:text-rose-600 dark:text-slate-300 dark:hover:text-rose-400'
            }`}
          >
            {active && (
              <motion.span
                layoutId={`${groupId}-pill`}
                className="absolute inset-0 rounded-xl bg-gradient-to-r from-rose-600 to-violet-700"
                transition={{ type: 'spring', stiffness: 400, damping: 32 }}
              />
            )}
            <span className="relative flex items-center gap-2">
              {Icon && <Icon className="h-4 w-4" />}
              {tab.label}
            </span>
          </button>
        )
      })}
    </div>
  )
}

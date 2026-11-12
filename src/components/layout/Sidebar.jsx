import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  GraduationCap, LayoutGrid, Menu, Moon, PanelLeftClose, PanelLeftOpen, Rows3, Search, Sun, X,
} from 'lucide-react'
import { getIcon } from '../ui/iconMap'
import { sections } from '../../data/damarisPortfolioData'

/** Buscador + lista de apartados (compartido por sidebar y drawer). */
function NavList({ active, onSelect, collapsed = false, query, visited }) {
  const items = useMemo(() => {
    const q = query.trim().toLowerCase()
    return q ? sections.filter((s) => s.label.toLowerCase().includes(q)) : sections
  }, [query])

  if (!items.length) {
    return <p className="px-3 py-6 text-center text-sm text-slate-400">Sin resultados</p>
  }

  return (
    <ul className="space-y-1">
      {items.map((s) => {
        const Icon = getIcon(s.icon)
        const isActive = s.id === active
        return (
          <li key={s.id}>
            <button
              type="button"
              onClick={() => onSelect(s.id)}
              title={s.label}
              aria-current={isActive ? 'page' : undefined}
              className={`group relative flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-medium transition-colors ${
                isActive
                  ? 'text-white'
                  : 'text-slate-600 hover:bg-rose-50 hover:text-rose-700 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-rose-300'
              } ${collapsed ? 'justify-center' : ''}`}
            >
              {isActive && (
                <motion.span
                  layoutId={collapsed ? 'nav-active-c' : 'nav-active'}
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-rose-600 to-violet-700 shadow-md"
                  transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                />
              )}
              <span className="relative shrink-0">
                <Icon className="h-5 w-5" />
                {visited.has(s.id) && !isActive && (
                  <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-amber-500" />
                )}
              </span>
              {!collapsed && (
                <>
                  <span className="relative flex-1 truncate">{s.label}</span>
                  <span className={`relative text-[10px] font-bold ${isActive ? 'text-white/70' : 'text-slate-300 dark:text-slate-600'}`}>
                    {String(s.number).padStart(2, '0')}
                  </span>
                </>
              )}
            </button>
          </li>
        )
      })}
    </ul>
  )
}

function SearchBox({ query, setQuery }) {
  return (
    <label className="relative block">
      <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Buscar apartado…"
        aria-label="Buscar apartado"
        className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-9 pr-3 text-sm outline-none transition focus:border-rose-400 focus:ring-2 focus:ring-rose-400/30 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
      />
    </label>
  )
}

function ModeSwitch({ mode, onModeChange, compact = false }) {
  const opts = [
    { id: 'modulos', label: 'Módulos', icon: LayoutGrid },
    { id: 'continua', label: 'Vista completa', icon: Rows3 },
  ]
  return (
    <div className={`flex rounded-xl bg-slate-100 p-1 dark:bg-slate-800 ${compact ? 'flex-col' : ''}`}>
      {opts.map((o) => (
        <button
          key={o.id}
          type="button"
          onClick={() => onModeChange(o.id)}
          title={o.id === 'continua' ? 'Vista completa / exploración continua' : 'Navegación por módulos'}
          className={`flex flex-1 items-center justify-center gap-1.5 rounded-lg px-2 py-2 text-xs font-semibold transition ${
            mode === o.id
              ? 'bg-white text-rose-600 shadow dark:bg-slate-950 dark:text-rose-400'
              : 'text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white'
          }`}
        >
          <o.icon className="h-4 w-4" />
          {!compact && o.label}
        </button>
      ))}
    </div>
  )
}

function Progress({ value, collapsed }) {
  const pct = Math.round(value * 100)
  if (collapsed) {
    return (
      <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full border-2 border-rose-600 text-[10px] font-bold text-rose-600" title={`Progreso de lectura: ${pct}%`}>
        {pct}%
      </div>
    )
  }
  return (
    <div>
      <div className="mb-1.5 flex justify-between text-xs font-semibold text-slate-500 dark:text-slate-400">
        <span>Progreso de lectura</span>
        <span className="text-rose-600 dark:text-rose-400">{pct}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-rose-600 via-violet-700 to-amber-500"
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>
    </div>
  )
}

export default function Sidebar({
  active, onSelect, collapsed, onToggleCollapse, dark, onToggleDark,
  mode, onModeChange, progress, visited,
}) {
  const [query, setQuery] = useState('')
  const [drawer, setDrawer] = useState(false)

  const pick = (id) => {
    onSelect(id)
    setDrawer(false)
  }

  const quickIds = ['portada', 'diagnostico', 'evidencias', 'anexos']

  return (
    <>
      {/* ───────── Desktop ───────── */}
      <motion.aside
        animate={{ width: collapsed ? 84 : 304 }}
        transition={{ type: 'spring', stiffness: 300, damping: 34 }}
        className="fixed inset-y-0 left-0 z-40 hidden flex-col border-r border-slate-200 bg-white/90 backdrop-blur-xl lg:flex dark:border-slate-800 dark:bg-slate-950/90"
      >
        <div className={`flex items-center gap-3 p-4 ${collapsed ? 'justify-center' : ''}`}>
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-600 to-violet-700 text-white shadow-lg">
            <GraduationCap className="h-6 w-6" />
          </span>
          {!collapsed && (
            <div className="min-w-0">
              <p className="truncate font-serif text-lg font-bold leading-tight text-indigo-950 dark:text-white">Portafolio Docente</p>
              <p className="truncate text-xs text-slate-500">Damaris Ordoñez · DDP1109</p>
            </div>
          )}
        </div>

        {!collapsed && (
          <div className="space-y-3 px-4 pb-3">
            <SearchBox query={query} setQuery={setQuery} />
            <ModeSwitch mode={mode} onModeChange={onModeChange} />
          </div>
        )}
        {collapsed && (
          <div className="px-3 pb-3">
            <ModeSwitch mode={mode} onModeChange={onModeChange} compact />
          </div>
        )}

        <nav className="min-h-0 flex-1 overflow-y-auto px-3 pb-3" aria-label="Apartados del portafolio">
          <NavList active={active} onSelect={onSelect} collapsed={collapsed} query={collapsed ? '' : query} visited={visited} />
        </nav>

        <div className="space-y-3 border-t border-slate-200 p-4 dark:border-slate-800">
          <Progress value={progress} collapsed={collapsed} />
          <div className={`flex gap-2 ${collapsed ? 'flex-col items-center' : ''}`}>
            <button
              type="button"
              onClick={onToggleDark}
              aria-label="Alternar modo oscuro"
              className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-slate-100 p-2.5 text-sm font-semibold text-slate-700 transition hover:bg-amber-100 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
            >
              {dark ? <Sun className="h-4 w-4 text-amber-400" /> : <Moon className="h-4 w-4" />}
              {!collapsed && (dark ? 'Modo claro' : 'Modo oscuro')}
            </button>
            <button
              type="button"
              onClick={onToggleCollapse}
              aria-label={collapsed ? 'Expandir menú' : 'Colapsar menú'}
              className="rounded-xl bg-slate-100 p-2.5 text-slate-700 transition hover:bg-rose-100 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
            >
              {collapsed ? <PanelLeftOpen className="h-4 w-4" /> : <PanelLeftClose className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </motion.aside>

      {/* ───────── Mobile: barra inferior ───────── */}
      <nav
        className="fixed inset-x-0 bottom-0 z-40 flex items-center justify-around border-t border-slate-200 bg-white/95 px-2 py-1.5 backdrop-blur-xl lg:hidden dark:border-slate-800 dark:bg-slate-950/95"
        aria-label="Navegación rápida"
      >
        {quickIds.map((id) => {
          const s = sections.find((x) => x.id === id)
          const Icon = getIcon(s.icon)
          const isActive = active === id
          return (
            <button
              key={id}
              type="button"
              onClick={() => pick(id)}
              className={`flex w-16 flex-col items-center gap-0.5 rounded-xl py-1.5 text-[10px] font-semibold ${
                isActive ? 'text-rose-600 dark:text-rose-400' : 'text-slate-500 dark:text-slate-400'
              }`}
            >
              <Icon className="h-5 w-5" />
              <span className="max-w-full truncate">{s.label.split(' ')[0]}</span>
            </button>
          )
        })}
        <button
          type="button"
          onClick={() => setDrawer(true)}
          aria-label="Abrir menú completo"
          className="flex w-16 flex-col items-center gap-0.5 rounded-xl bg-gradient-to-br from-rose-600 to-violet-700 py-1.5 text-[10px] font-semibold text-white"
        >
          <Menu className="h-5 w-5" />
          Menú
        </button>
      </nav>

      {/* ───────── Mobile: drawer ───────── */}
      <AnimatePresence>
        {drawer && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setDrawer(false)}
              className="fixed inset-0 z-50 bg-indigo-950/70 backdrop-blur-sm lg:hidden"
            />
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed inset-x-0 bottom-0 z-50 flex max-h-[85svh] flex-col rounded-t-3xl bg-white p-4 shadow-2xl lg:hidden dark:bg-slate-950"
              role="dialog"
              aria-label="Menú de apartados"
            >
              <div className="mb-3 flex items-center justify-between">
                <p className="font-serif text-lg font-bold text-indigo-950 dark:text-white">Apartados</p>
                <div className="flex gap-2">
                  <button type="button" onClick={onToggleDark} aria-label="Alternar modo oscuro" className="rounded-xl bg-slate-100 p-2 dark:bg-slate-800 dark:text-white">
                    {dark ? <Sun className="h-5 w-5 text-amber-400" /> : <Moon className="h-5 w-5" />}
                  </button>
                  <button type="button" onClick={() => setDrawer(false)} aria-label="Cerrar menú" className="rounded-xl bg-slate-100 p-2 dark:bg-slate-800 dark:text-white">
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>
              <div className="space-y-3 pb-3">
                <SearchBox query={query} setQuery={setQuery} />
                <ModeSwitch mode={mode} onModeChange={onModeChange} />
                <Progress value={progress} />
              </div>
              <div className="min-h-0 flex-1 overflow-y-auto">
                <NavList active={active} onSelect={pick} query={query} visited={visited} />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

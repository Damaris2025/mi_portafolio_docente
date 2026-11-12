import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import './App.css'
import Sidebar from './components/layout/Sidebar'
import Portada from './components/sections/Portada'
import Presentacion from './components/sections/Presentacion'
import Objetivos from './components/sections/Objetivos'
import Contexto from './components/sections/Contexto'
import Planeacion from './components/sections/Planeacion'
import Diagnostico from './components/sections/Diagnostico'
import Planificaciones from './components/sections/Planificaciones'
import Evidencias from './components/sections/Evidencias'
import Diario from './components/sections/Diario'
import Evaluacion from './components/sections/Evaluacion'
import Propuesta from './components/sections/Propuesta'
import RecursosTecnologicos from './components/sections/RecursosTecnologicos'
import Experiencias from './components/sections/Experiencias'
import Anexos from './components/sections/Anexos'
import { sections } from './data/damarisPortfolioData'

const components = {
  portada: Portada,
  presentacion: Presentacion,
  objetivos: Objetivos,
  contexto: Contexto,
  planeacion: Planeacion,
  diagnostico: Diagnostico,
  planificaciones: Planificaciones,
  evidencias: Evidencias,
  diario: Diario,
  evaluacion: Evaluacion,
  propuesta: Propuesta,
  recursos: RecursosTecnologicos,
  experiencias: Experiencias,
  anexos: Anexos,
}

function getInitialDark() {
  const saved = localStorage.getItem('portafolio-dark')
  if (saved !== null) return saved === '1'
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

function App() {
  const [active, setActive] = useState('portada')
  const [mode, setMode] = useState('modulos') // 'modulos' | 'continua'
  const [dark, setDark] = useState(getInitialDark)
  const [collapsed, setCollapsed] = useState(false)
  const [visited, setVisited] = useState(() => new Set(['portada']))

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })

  const markVisited = useCallback((id) => {
    setVisited((prev) => (prev.has(id) ? prev : new Set(prev).add(id)))
  }, [])

  /* Modo oscuro: clase `.dark` en <html> + persistencia */
  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('portafolio-dark', dark ? '1' : '0')
  }, [dark])

  /* Vista completa: detecta el apartado visible (scroll-spy) */
  useEffect(() => {
    if (mode !== 'continua') return undefined
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.dataset.section
            setActive(id)
            markVisited(id)
          }
        })
      },
      { rootMargin: '-35% 0px -55% 0px' },
    )
    document.querySelectorAll('[data-section]').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [mode, markVisited])

  const select = useCallback(
    (id) => {
      setActive(id)
      markVisited(id)
      if (mode === 'continua') {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    },
    [mode, markVisited],
  )

  const changeMode = (next) => {
    setMode(next)
    if (next === 'continua') {
      // Espera al render de todas las secciones y salta a la activa
      setTimeout(() => document.getElementById(active)?.scrollIntoView({ block: 'start' }), 80)
    } else {
      window.scrollTo({ top: 0 })
    }
  }

  const index = sections.findIndex((s) => s.id === active)
  const prev = sections[index - 1]
  const next = sections[index + 1]
  const Current = components[active]

  return (
    <div className="min-h-svh bg-slate-50 text-slate-800 transition-colors dark:bg-slate-950 dark:text-slate-200">
      {mode === 'continua' && (
        <motion.div
          style={{ scaleX, transformOrigin: '0 50%' }}
          className="fixed inset-x-0 top-0 z-[60] h-1 bg-gradient-to-r from-rose-600 via-violet-700 to-amber-500"
        />
      )}

      <Sidebar
        active={active}
        onSelect={select}
        collapsed={collapsed}
        onToggleCollapse={() => setCollapsed((c) => !c)}
        dark={dark}
        onToggleDark={() => setDark((d) => !d)}
        mode={mode}
        onModeChange={changeMode}
        progress={visited.size / sections.length}
        visited={visited}
      />

      <main
        style={{ '--sb': collapsed ? '84px' : '304px' }}
        className="transition-[padding] duration-300 lg:pl-[var(--sb)]"
      >
        <div className="mx-auto max-w-6xl px-4 pb-28 pt-8 sm:px-8 lg:pb-16">
          {mode === 'modulos' ? (
            <>
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25 }}
                >
                  <Current onNavigate={select} />
                </motion.div>
              </AnimatePresence>

              <div className="mt-14 flex items-center justify-between gap-4 border-t border-slate-200 pt-6 dark:border-slate-800">
                {prev ? (
                  <button
                    type="button"
                    onClick={() => select(prev.id)}
                    className="group flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-3 text-left transition hover:border-rose-300 dark:border-slate-800 dark:bg-slate-900"
                  >
                    <ArrowLeft className="h-4 w-4 text-slate-400 transition group-hover:-translate-x-1 group-hover:text-rose-600" />
                    <span>
                      <span className="block text-[10px] uppercase tracking-wider text-slate-400">Anterior</span>
                      <span className="text-sm font-semibold">{prev.label}</span>
                    </span>
                  </button>
                ) : (
                  <span />
                )}
                {next && (
                  <button
                    type="button"
                    onClick={() => select(next.id)}
                    className="group flex items-center gap-3 rounded-2xl bg-gradient-to-r from-rose-600 to-violet-700 px-5 py-3 text-right text-white shadow-lg transition hover:shadow-xl"
                  >
                    <span>
                      <span className="block text-[10px] uppercase tracking-wider text-white/70">Siguiente</span>
                      <span className="text-sm font-semibold">{next.label}</span>
                    </span>
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </button>
                )}
              </div>
            </>
          ) : (
            <div className="divide-y divide-slate-200 dark:divide-slate-800">
              {sections.map((s) => {
                const Section = components[s.id]
                return (
                  <section key={s.id} id={s.id} data-section={s.id} className="scroll-mt-4 py-14 first:pt-0">
                    <Section onNavigate={select} />
                  </section>
                )
              })}
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

export default App

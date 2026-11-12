import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ExternalLink, Eye, Info, NotebookPen } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'
import Tabs from '../ui/Tabs'
import ModalViewer from '../ui/ModalViewer'
import { pdfUrl } from '../ui/pdfUrl'
import { planificaciones } from '../../data/damarisPortfolioData'

export default function Planificaciones() {
  const [tab, setTab] = useState(planificaciones.tabs[0].id)
  const [modal, setModal] = useState(false)
  const current = planificaciones.tabs.find((t) => t.id === tab)
  const src = pdfUrl(current.embedUrl)

  return (
    <div>
      <SectionHeader
        number={7}
        icon={NotebookPen}
        title="Planificaciones de clases"
        subtitle={planificaciones.asignatura}
      />

      <Tabs groupId="planificaciones" tabs={planificaciones.tabs} value={tab} onChange={setTab} />

      <AnimatePresence mode="wait">
        <motion.div key={tab} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="mt-6">
          <div className="mb-4 flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:flex-row md:items-center md:justify-between dark:border-slate-800 dark:bg-slate-900">
            <div>
              <h3 className="font-serif text-2xl font-bold text-indigo-950 dark:text-white">{current.title}</h3>
              <p className="mt-2 flex flex-wrap gap-x-6 gap-y-1 text-sm text-slate-600 dark:text-slate-300">
                <span><strong className="text-indigo-950 dark:text-white">Asignatura:</strong> {current.asignatura}</span>
                <span><strong className="text-indigo-950 dark:text-white">Duración:</strong> {current.jornada} ({current.fecha})</span>
                <span><strong className="text-indigo-950 dark:text-white">Tutor:</strong> {current.tutor}</span>
              </p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-3">
              <button
                type="button"
                onClick={() => setModal(true)}
                className="inline-flex items-center gap-2 rounded-xl bg-indigo-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-rose-600"
              >
                <Eye className="h-4 w-4" /> Vista previa
              </button>
              <a
                href={src}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-rose-400 hover:text-rose-600 dark:border-slate-700 dark:text-slate-200"
              >
                <ExternalLink className="h-4 w-4" /> Abrir PDF
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <iframe title={current.title} src={src} className="h-[75vh] w-full bg-slate-100" />
            <p className="flex items-start gap-2 border-t border-slate-200 p-4 text-xs text-slate-500 dark:border-slate-800 dark:text-slate-400">
              <Info className="mt-0.5 h-4 w-4 shrink-0" />
              Si el documento no se muestra, copia el PDF en{' '}
              <code className="rounded bg-slate-100 px-1 dark:bg-slate-800">public{current.embedUrl}</code>.
            </p>
          </div>
        </motion.div>
      </AnimatePresence>

      <ModalViewer open={modal} onClose={() => setModal(false)} title={current.title}>
        <iframe title={current.title} src={src} className="h-[75vh] w-full bg-slate-100" />
      </ModalViewer>
    </div>
  )
}

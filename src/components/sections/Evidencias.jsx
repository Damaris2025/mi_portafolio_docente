import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Eye, Images, Info } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'
import Tabs from '../ui/Tabs'
import ModalViewer from '../ui/ModalViewer'
import ImageWithFallback from '../ui/ImageWithFallback'
import { getIcon } from '../ui/iconMap'
import { pdfUrl } from '../ui/pdfUrl'
import { evidencias, evidenciasFotos } from '../../data/damarisPortfolioData'

function Materiales() {
  const [preview, setPreview] = useState(null)
  return (
    <>
      <div className="grid gap-5 md:grid-cols-3">
        {evidencias.materiales.map((m, i) => {
          const Icon = getIcon(m.icon)
          return (
            <motion.div
              key={m.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="flex flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
            >
              <span className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-600 to-violet-700 text-white">
                <Icon className="h-7 w-7" />
              </span>
              <h4 className="font-serif text-xl font-bold text-indigo-950 dark:text-white">{m.title}</h4>
              <p className="mt-2 flex-1 text-sm text-slate-600 dark:text-slate-300">{m.text}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => setPreview(m)}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-indigo-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-rose-600"
                >
                  <Eye className="h-4 w-4" /> Vista previa
                </button>
                {m.embedUrl && (
                  <a
                    href={pdfUrl(m.embedUrl)}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-rose-400 hover:text-rose-600 dark:border-slate-700 dark:text-slate-200"
                  >
                    <ExternalLink className="h-4 w-4" /> Abrir PDF
                  </a>
                )}
              </div>
            </motion.div>
          )
        })}
      </div>

      <ModalViewer open={!!preview} onClose={() => setPreview(null)} title={preview?.title}>
        {preview?.embedUrl ? (
          <iframe title={preview.title} src={pdfUrl(preview.embedUrl)} className="h-[70vh] w-full" allowFullScreen />
        ) : (
          <div className="flex flex-col items-center gap-3 p-12 text-center text-slate-500 dark:text-slate-400">
            <Info className="h-10 w-10 text-amber-500" />
            <p className="font-semibold text-indigo-950 dark:text-white">Material aún no vinculado</p>
            <p className="max-w-md text-sm">
              Agrega el enlace de publicación (Canva, Google Slides, YouTube embed o Drive) en el campo{' '}
              <code className="rounded bg-slate-100 px-1.5 py-0.5 dark:bg-slate-800">embedUrl</code> de «{preview?.title}» en{' '}
              <code className="rounded bg-slate-100 px-1.5 py-0.5 dark:bg-slate-800">damarisPortfolioData.js</code>.
            </p>
          </div>
        )}
      </ModalViewer>
    </>
  )
}

function Fotografias() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {evidenciasFotos.map((src, i) => (
        <div
          key={src}
          className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900"
        >
          <ImageWithFallback
            src={src}
            alt={`Evidencia de la práctica docente ${i + 1}`}
            placeholderLabel={src.slice(1)}
            className="aspect-[4/3] w-full object-cover"
          />
        </div>
      ))}
    </div>
  )
}

function Recursos() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {evidencias.recursos.map((r, i) => {
        const Icon = getIcon(r.icon)
        return (
          <motion.div
            key={r.title}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.07 }}
            whileHover={{ y: -6, rotate: 1 }}
            className="flex items-center gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
          >
            <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400">
              <Icon className="h-8 w-8" />
            </span>
            <div>
              <h4 className="font-serif text-lg font-bold text-indigo-950 dark:text-white">{r.title}</h4>
              <p className="text-sm text-slate-500 dark:text-slate-400">{r.text}</p>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}

export default function Evidencias() {
  const [tab, setTab] = useState('materiales')
  return (
    <div>
      <SectionHeader
        number={8}
        icon={Images}
        title="Evidencias de la práctica docente"
        subtitle="Materiales, fotografías y recursos utilizados durante la experiencia."
      />
      <Tabs
        groupId="evidencias"
        value={tab}
        onChange={setTab}
        tabs={[
          { id: 'materiales', label: 'Materiales didácticos digitales', icon: 'Presentation' },
          { id: 'fotos', label: 'Fotografías y capturas', icon: 'Images' },
          { id: 'recursos', label: 'Recursos utilizados', icon: 'Boxes' },
        ]}
      />
      <div className="mt-6">
        {tab === 'materiales' && <Materiales />}
        {tab === 'fotos' && <Fotografias />}
        {tab === 'recursos' && <Recursos />}
      </div>
    </div>
  )
}

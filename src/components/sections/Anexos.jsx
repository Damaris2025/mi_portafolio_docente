import { useState } from 'react'
import { motion } from 'framer-motion'
import { Eye, ExternalLink, FolderOpen, Info, QrCode } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'
import ModalViewer from '../ui/ModalViewer'
import { getIcon } from '../ui/iconMap'
import { pdfUrl } from '../ui/pdfUrl'
import { anexos } from '../../data/damarisPortfolioData'

/** QR generado dinámicamente a partir del enlace (servicio público api.qrserver.com). */
const qrSrc = (url) =>
  `https://api.qrserver.com/v1/create-qr-code/?size=240x240&margin=10&data=${encodeURIComponent(url)}`

function Preview({ anexo }) {
  if (anexo.type === 'forms') {
    return (
      <div className="flex flex-col items-center gap-5 p-8 text-center">
        <img
          src={qrSrc(anexo.url)}
          alt="Código QR del cuestionario"
          width="240"
          height="240"
          className="rounded-2xl border border-slate-200 bg-white p-2 shadow"
        />
        <p className="max-w-md text-sm text-slate-600 dark:text-slate-300">
          Escanea el código con tu teléfono o abre el formulario directamente:
        </p>
        <a
          href={anexo.url}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-xl bg-rose-600 px-5 py-3 font-semibold text-white transition hover:bg-rose-700"
        >
          {anexo.url} <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    )
  }
  const path = anexo.embedUrl || anexo.file
  return (
    <div>
      <iframe title={anexo.title} src={pdfUrl(path)} className="h-[70vh] w-full bg-slate-100" />
      <p className="flex items-start gap-2 border-t border-slate-200 p-4 text-xs text-slate-500 dark:border-slate-800 dark:text-slate-400">
        <Info className="mt-0.5 h-4 w-4 shrink-0" />
        Si el documento no se muestra, copia el PDF en <code className="rounded bg-slate-100 px-1 dark:bg-slate-800">public{path}</code>.
      </p>
    </div>
  )
}

export default function Anexos() {
  const [preview, setPreview] = useState(null)

  return (
    <div>
      <SectionHeader
        number={14}
        icon={FolderOpen}
        title="Anexos"
        subtitle="Centro de documentos y enlaces de respaldo del portafolio."
      />
      <div className="grid gap-5 md:grid-cols-2">
        {anexos.map((a, i) => {
          const Icon = getIcon(a.icon)
          const href = a.type === 'forms' ? a.url : pdfUrl(a.embedUrl || a.file)
          return (
            <motion.article
              key={a.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="flex flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="mb-3 flex items-start gap-4">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-600 to-violet-700 text-white">
                  <Icon className="h-7 w-7" />
                </span>
                <div>
                  <span className="rounded-full bg-amber-100 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-amber-700 dark:bg-amber-900/30 dark:text-amber-300">
                    {a.subtitle}
                  </span>
                  <h3 className="mt-1 font-serif text-xl font-bold text-indigo-950 dark:text-white">{a.title}</h3>
                </div>
              </div>
              <p className="flex-1 text-sm text-slate-600 dark:text-slate-300">{a.text}</p>
              <div className="mt-5 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => setPreview(a)}
                  className="inline-flex items-center gap-2 rounded-xl bg-indigo-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-violet-700"
                >
                  {a.type === 'forms' ? <QrCode className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  {a.type === 'forms' ? 'Ver código QR' : 'Vista previa'}
                </button>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-rose-400 hover:text-rose-600 dark:border-slate-700 dark:text-slate-200"
                >
                  <ExternalLink className="h-4 w-4" /> Abrir enlace
                </a>
              </div>
            </motion.article>
          )
        })}
      </div>

      <ModalViewer open={!!preview} onClose={() => setPreview(null)} title={preview?.title}>
        {preview && <Preview anexo={preview} />}
      </ModalViewer>
    </div>
  )
}

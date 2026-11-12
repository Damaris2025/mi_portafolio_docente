import { useState } from 'react'
import { ImageOff } from 'lucide-react'

/**
 * Imagen con marcador visual si el archivo aún no existe en /public.
 */
export default function ImageWithFallback({ src, alt, className = '', placeholderLabel }) {
  const [failed, setFailed] = useState(!src)

  if (failed) {
    return (
      <div
        className={`flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-violet-100 via-rose-50 to-amber-50 p-4 text-center text-slate-500 dark:from-indigo-950 dark:via-violet-950 dark:to-slate-900 dark:text-slate-400 ${className}`}
        role="img"
        aria-label={alt}
      >
        <ImageOff className="h-8 w-8 opacity-60" />
        <span className="text-xs font-medium">{placeholderLabel || 'Fotografía por agregar'}</span>
        {src && <code className="rounded bg-white/70 px-2 py-0.5 text-[10px] dark:bg-slate-800/70">public{src}</code>}
      </div>
    )
  }

  return <img src={src} alt={alt} className={className} onError={() => setFailed(true)} loading="lazy" />
}

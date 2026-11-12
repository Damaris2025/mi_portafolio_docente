import { BookOpen } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'
import ImageWithFallback from '../ui/ImageWithFallback'
import { getIcon } from '../ui/iconMap'
import { diarioBloques, diarioResumen, diarioFotos } from '../../data/damarisPortfolioData'

export default function Diario() {
  return (
    <div className="space-y-8">
      <SectionHeader
        number={9}
        icon={BookOpen}
        title="Diario reflexivo semanal"
        subtitle="Reflexión pedagógica y registro fotográfico de las jornadas realizadas."
      />

      {/* 4 bloques de reflexión general en cuadrícula 2x2 */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {diarioBloques.map((b) => {
          const Icon = getIcon(b.icon)
          const text = diarioResumen[b.key]
          return (
            <div
              key={b.key}
              className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900"
            >
              <p className="mb-2 flex items-center gap-2 text-sm font-bold text-violet-700 dark:text-violet-300">
                <Icon className="h-4 w-4 shrink-0" />
                <span>{b.label}</span>
              </p>
              <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                {text}
              </p>
            </div>
          )
        })}
      </div>

      {/* Galería estática de las 5 jornadas */}
      <div>
        <h3 className="mb-4 font-serif text-lg font-bold text-indigo-950 dark:text-white">
          Registro fotográfico de las jornadas
        </h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {diarioFotos.map((src, i) => (
            <div
              key={src}
              className="overflow-hidden rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900"
            >
              <ImageWithFallback
                src={src}
                alt={`Jornada de práctica docente ${i + 1}`}
                placeholderLabel={src.slice(1)}
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
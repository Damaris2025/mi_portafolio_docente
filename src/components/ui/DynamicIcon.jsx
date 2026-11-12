import { Circle } from 'lucide-react'
import { icons } from './iconMap'

/** Renderiza un ícono de lucide a partir de su nombre (string del archivo de datos). */
export default function DynamicIcon({ name, ...props }) {
  const Icon = icons[name] || Circle
  return <Icon {...props} />
}

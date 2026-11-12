import {
  Home, UserRound, Target, School, CalendarRange, ChartColumn, NotebookPen, Images,
  BookOpen, ClipboardCheck, Lightbulb, MonitorSmartphone, Sparkles, FolderOpen, Users,
  CalendarDays, GraduationCap, Cpu, Compass, Eye, UsersRound, Laptop, Scale, ListChecks,
  Building2, Smartphone, Route, ClipboardList, Presentation, MessagesSquare, FileQuestion,
  UserRoundCheck, Briefcase, ShieldCheck, TriangleAlert, Rocket, CloudLightning, Boxes,
  Accessibility, Clapperboard, FileText, PenLine, Projector, Printer, Mountain,
  MessageCircleHeart, BookOpenCheck, Palette, Circle, FileSpreadsheet,
} from 'lucide-react'

/** Resuelve los nombres de íconos (strings) usados en damarisPortfolioData.js */
export const icons = {
  FileSpreadsheet,
  Home, UserRound, Target, School, CalendarRange, ChartColumn, NotebookPen, Images,
  BookOpen, ClipboardCheck, Lightbulb, MonitorSmartphone, Sparkles, FolderOpen, Users,
  CalendarDays, GraduationCap, Cpu, Compass, Eye, UsersRound, Laptop, Scale, ListChecks,
  Building2, Smartphone, Route, ClipboardList, Presentation, MessagesSquare, FileQuestion,
  UserRoundCheck, Briefcase, ShieldCheck, TriangleAlert, Rocket, CloudLightning, Boxes,
  Accessibility, Clapperboard, FileText, PenLine, Projector, Printer, Mountain,
  MessageCircleHeart, BookOpenCheck, Palette,
}

export function getIcon(name) {
  return icons[name] || Circle
}

import type { LucideIcon } from 'lucide-react';
import { Shield, FileText, Scan, BarChart3, Settings, Briefcase } from 'lucide-react';

export const serviceIcons: Record<string, LucideIcon> = {
  auditoria: Shield,
  fiscal: FileText,
  digitalizacion: Scan,
  financiero: BarChart3,
  operacional: Settings,
  estrategica: Briefcase,
};

export const getServiceIcon = (iconKey: string): LucideIcon => {
  return serviceIcons[iconKey] ?? Shield;
};

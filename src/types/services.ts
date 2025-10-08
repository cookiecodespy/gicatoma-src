export interface Subservice { title: string; description: string; icon?: string }
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  highlight?: boolean;
  badge?: string;
  features?: string[];
  subservices?: Subservice[];
}

export interface StyledService extends Service {
  color: string;
}

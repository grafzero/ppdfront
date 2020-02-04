export interface ProductSchedule {
  id: number;
  name: string;
  comaSeparatedDayIndexes: string;
}

export interface PromotionSchedule {
  id: number;
  name: string;
  comaSeparatedDayIndexes: string;
}

export interface User {
  id: number;
  username: string;
  competitionMonitor: boolean;
  competitionPromotionMonitor: boolean;
  productSchedule: ProductSchedule;
  promotionSchedule: PromotionSchedule;
  competitionMonitoringEmail: string;
  competitionMonitoringAdmin: boolean;
}

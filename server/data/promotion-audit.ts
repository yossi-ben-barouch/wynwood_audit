import { emailAudit, seoAudit, paidAudit, socialAudit, marketplacesAudit } from './Audit/Promotion';
import { promotionSummary } from './Audit/Promotion/summary';

export interface PromotionAudit {
  summary?: typeof promotionSummary;
  email?: typeof emailAudit;
  seo?: typeof seoAudit;
  paid?: typeof paidAudit;
  social?: typeof socialAudit;
  marketplaces?: typeof marketplacesAudit;
}

export const promotionAudit: PromotionAudit = {
  summary: promotionSummary,
  email: emailAudit,
  seo: seoAudit,
  paid: paidAudit,
  social: socialAudit,
  marketplaces: marketplacesAudit,
};

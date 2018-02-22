import {CLASSIC_AD, STANDOUT_AD, PREMIUM_AD} from '../ads/ads';
import { MORE_FOR_LESS_DEAL, DISCOUNT_PRICE, DISCOUNT_WHEN_BUY_MORE } from '../pricing-rules/pricing-rules';

export const DEFAULT = 'DEFAULT';
export const UNILIVER = 'UNILIVER';
export const APPLE = 'APPLE';
export const NIKE = 'NIKE';
export const FORD = 'FORD';

export const pricingRules = {
  [UNILIVER]: {
    [MORE_FOR_LESS_DEAL]: [{adType: CLASSIC_AD, purchasedAds: 3, billingAds: 2}]
  },
  [APPLE]: {
    [DISCOUNT_PRICE]: [{adType:STANDOUT_AD, price: 299.99}]
  },
  [NIKE]: {
    [DISCOUNT_WHEN_BUY_MORE]: [{adType: PREMIUM_AD, price: 379.99, minAds: 4}]
  },
  [FORD]: {
    [MORE_FOR_LESS_DEAL]: [{adType: CLASSIC_AD, purchasedAds: 5, billingAds: 4}],
    [DISCOUNT_PRICE]: [{adType:STANDOUT_AD, price: 309.99}],
    [DISCOUNT_WHEN_BUY_MORE]: [{adType: PREMIUM_AD, price: 389.99, minAds: 3}]
  }
}
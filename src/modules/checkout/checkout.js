import { adPrices, CLASSIC_AD, STANDOUT_AD, PREMIUM_AD } from '../ads/ads';
import { pricingRules } from '../customer/customer';
import { getTotalPrice, getDiscountPrices, getDiscountPricesWhenBuyMore, getMoreForLessDealDiscount, MORE_FOR_LESS_DEAL, DISCOUNT_PRICE, DISCOUNT_WHEN_BUY_MORE } from '../pricing-rules/pricing-rules';

export default (customer) => {
  return (items) => {
    const customRules = pricingRules[customer];
    let customPrices = {...adPrices};
    let discount = 0;
    if (customRules) {
      if (customRules[DISCOUNT_PRICE]) {
        customPrices = getDiscountPrices({prices: customPrices, rules: customRules[DISCOUNT_PRICE]});
      }

      if (customRules[DISCOUNT_WHEN_BUY_MORE]) {
        customPrices = getDiscountPricesWhenBuyMore({items, prices: customPrices, rules: customRules[DISCOUNT_WHEN_BUY_MORE]});
      }

      if (customRules[MORE_FOR_LESS_DEAL]) {
        discount = getMoreForLessDealDiscount({items, prices: customPrices, rules: customRules[MORE_FOR_LESS_DEAL]});
      }
    }
    return getTotalPrice({prices: customPrices, items}) - discount;
  }
}
import {adPrices, CLASSIC_AD, STANDOUT_AD, PREMIUM_AD} from '../ads/ads';
export const DEFAULT = 'DEFAULT';
export const UNILIVER = 'UNILIVER';
export const APPLE = 'APPLE';
export const NIKE = 'NIKE';

export default (customer) => {
  switch(customer) {
    case UNILIVER:
      return (items) => {
        return getTotalPrice(adPrices, items) - getMoreForLessDealDiscount(items, CLASSIC_AD, 3, 2);
      }
    case APPLE:
      return (items) => {
        const applePrices = getDiscountPrice(adPrices, STANDOUT_AD, 299.99)
        return getTotalPrice(applePrices, items);
      }
    case NIKE:
      return (items) => {
        return getTotalPrice(getDiscountPriceWhenBuyMore(items, adPrices, PREMIUM_AD, 379.99, 4), items);
      }
    default:
      return (items) => {
        return getTotalPrice(adPrices, items);
      }
  }
}

const getTotalPrice = (adPrices, items) => {
  return items.reduce((total, item) => parseFloat(total) + adPrices[item], [0]);
}

const getMoreForLessDealDiscount = (items, adType, purchasedAds, billingAds) => {
  const filteredItem = items.filter((item) => item === adType);
  const freeAds = Math.floor(filteredItem.length / purchasedAds) * (purchasedAds - billingAds);
  return freeAds * adPrices[adType];
}

const getDiscountPrice = (adPrices, adType, price) => {
  return { ...adPrices, [adType]: price};
}

const getDiscountPriceWhenBuyMore = (items, adPrices, adType, price, minAd) => {
  if(items.filter(item => item === adType ).length >= minAd) {
    return { ...adPrices, [adType]: price};
  }
  return adPrices;
}
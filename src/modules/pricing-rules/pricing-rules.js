export const MORE_FOR_LESS_DEAL = 'MORE_FOR_LESS_DEAL';
export const DISCOUNT_PRICE = 'DISCOUNT_PRICE';
export const DISCOUNT_WHEN_BUY_MORE = 'DISCOUNT_WHEN_BUY_MORE';

export const getTotalPrice = ({prices, items}) => {
  return items.reduce((total, item) => parseFloat(total) + prices[item], [0]);
}

export const getMoreForLessDealDiscount = ({prices, items, rules}) => {
  return rules.reduce((discount, { adType, purchasedAds, billingAds }) => {
    const filteredItem = items.filter((item) => item === adType);
    const freeAds = Math.floor(filteredItem.length / purchasedAds) * (purchasedAds - billingAds);
    return freeAds * prices[adType];
  }, [0]);
}

export const getDiscountPrices = ({prices, rules}) => {
  return rules.reduce((newPrices, {adType, price}) => {
    return { ...newPrices, [adType]: price};
  }, prices);
}

export const getDiscountPricesWhenBuyMore = ({items, prices, rules} ) => {
  return rules.reduce((newPrices, {adType, price, minAds}) => {
    return (items.filter(item => item === adType ).length >= minAds) ? { ...newPrices, [adType]: price} : newPrices;
  }, prices);
}
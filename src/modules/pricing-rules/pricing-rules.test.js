import { getTotalPrice, getDiscountPrices, getDiscountPricesWhenBuyMore, getMoreForLessDealDiscount } from "./pricing-rules";

describe('pricing-rules', () => {
  const prices = {'A': 1, 'B': 2};
  const items = ['A','B','B'];
  
  it('should display correct total', () => {
    expect(getTotalPrice({prices, items})).toBeCloseTo(5);
  })

  it('should update discount price correctly', () => {
    const rules = [{adType: 'B', price: 1}];
    expect(getDiscountPrices({prices, rules})).toEqual({...prices, 'B': 1});
  })

  it('should update discount price when buy more then equal min ads', () => {
    const rules = [{adType: 'B', price: 1, minAds: 2}];
    expect(getDiscountPricesWhenBuyMore({prices, items, rules})).toEqual({...prices, 'B': 1});
  })

  it('should not update prices when buy less then min ads', () => {
    const rules = [{adType: 'B', price: 1, minAds: 3}];
    expect(getDiscountPricesWhenBuyMore({prices, items, rules})).toEqual({...prices});
  });

  it('should return discount prices when hit buy more for less deal', () => {
    const rules = [{adType: 'B', purchasedAds: 2, billingAds: 1}];
    expect(getMoreForLessDealDiscount({prices, items, rules})).toEqual(2);
  });
});
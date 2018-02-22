import { CLASSIC_AD, STANDOUT_AD, PREMIUM_AD } from '../ads/ads';
import checkout from './checkout';
import {DEFAULT, UNILIVER, APPLE, NIKE, FORD} from '../customer/customer';

describe('checkout', () => {
  it('should correct for Default', () => {
    const total = checkout(DEFAULT)([CLASSIC_AD,STANDOUT_AD,PREMIUM_AD]);
    expect(total).toBeCloseTo(987.97);
  });

  it('should correct for Unilever', () => {
    const total = checkout(UNILIVER)([CLASSIC_AD,CLASSIC_AD,CLASSIC_AD,PREMIUM_AD]);
    expect(total).toBeCloseTo(934.97);
  });

  it('should correct for Apple', () => {
    const total = checkout(APPLE)([STANDOUT_AD,STANDOUT_AD,STANDOUT_AD,PREMIUM_AD]);
    expect(total).toBeCloseTo(1294.96);
  });

  it('should correct for Nike', () => {
    const total = checkout(NIKE)([PREMIUM_AD,PREMIUM_AD,PREMIUM_AD,PREMIUM_AD]);
    expect(total).toBeCloseTo(1519.96);
  });

  it('should correct for Ford', () => {
    const total = checkout(FORD)([CLASSIC_AD,CLASSIC_AD,CLASSIC_AD,CLASSIC_AD,CLASSIC_AD, STANDOUT_AD, PREMIUM_AD,PREMIUM_AD,PREMIUM_AD]);
    expect(total).toBeCloseTo(2559.92);
  });
})
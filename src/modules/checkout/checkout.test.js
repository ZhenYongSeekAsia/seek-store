import {CLASSIC_AD, STANDOUT_AD, PREMIUM_AD} from '../ads/ads';
import checkout, {DEFAULT} from './checkout';

describe('checkout', () => {
  it('should correct for Default', () => {
    const total = checkout(DEFAULT)([CLASSIC_AD,STANDOUT_AD,PREMIUM_AD]);
    expect(total).toEqual(987.97);
  })
})
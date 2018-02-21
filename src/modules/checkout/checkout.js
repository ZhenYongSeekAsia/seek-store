import {defaultPrices} from '../ads/ads';
export const DEFAULT = 'DEFAULT';

export default (customer) => {
  console.log(defaultPrices);
  return (items) => {
    return items.reduce((total, item) => parseFloat(total) + defaultPrices[item], [0])
  }
}
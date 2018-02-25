import { createStore } from 'redux';
import { DEFAULT } from '../data/customer/customer';
import checkout from '../modules/checkout/checkout';

const initialState = {
  customer: DEFAULT,
  items: [],
  total: 0
}

const seekStore = (state = initialState, action) => {
  switch(action.type) {
    case 'CHANGE_CUSTOMER':
      return {
        ...state,
        customer: action.payload.customer,
        total: checkout(action.payload.customer)(state.items)
      }
    case 'ADD_ITEM':
      const addedItems = [
        ...state.items,
        action.payload.item
      ];
      return {
        ...state,
        items: addedItems,
        total: checkout(state.customer)(addedItems)
      }
    case 'REMOVE_ITEM':
      const removedItems = state.items.filter((item, index) => index !== action.payload.index);
      return {
        ...state,
        items: removedItems,
        total: checkout(state.customer)(removedItems)
      }
    default:
      return state;
  }
}

export default createStore(seekStore);
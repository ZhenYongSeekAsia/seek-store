import React from 'react';
import { Provider } from 'react-redux';
import store from '../store/store';
import SeekStore from './components/SeekStore/SeekStore';

export default () => (
  <Provider store={store}>
    <SeekStore />
  </Provider>
);
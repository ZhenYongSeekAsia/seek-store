import React from 'react';
import { connect } from 'react-redux';
import styles from './CheckoutBar.less';

const CheckoutBar = ({total}) => {
  return (
    <div className={styles.root}>
      <div className={styles.label}>Total:</div>
      <div className={styles.amount}>${total}</div>
    </div>
  );
}

export default connect(state => state)(CheckoutBar);
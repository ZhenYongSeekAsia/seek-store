import React from 'react';
import { connect } from 'react-redux';
import styles from './ShoppingCart.less';

const mapDispatchToProps = dispatch => {
  return {
    handleClick: (index) => {
      dispatch({
        type: 'REMOVE_ITEM',
        payload: {
          index
        }
      })
    }
  }
}

const ShoppingCart = ({items, handleClick}) => {
  return (
    <div className={styles.root}>
      <div className={styles.label}>Shopping Cart:<br /><small>*Click to remove</small></div> 
      {items.map((option, index) => {
        return (
          <button 
            key={index} 
            className={styles.button} 
            onClick={() =>handleClick(index)}>
            {option}
          </button>);
      })}
    </div>
  )
}

export default connect(state => state, mapDispatchToProps)(ShoppingCart);
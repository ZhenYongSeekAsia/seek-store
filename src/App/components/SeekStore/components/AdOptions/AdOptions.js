import React from 'react';
import { connect } from 'react-redux';
import { CLASSIC_AD, STANDOUT_AD, PREMIUM_AD } from '../../../../../data/ads/ads';
import styles from './AdOptions.less';

const mapDispatchToProps = dispatch => {
  return {
    handleClick: (option) => {
      dispatch({
        type: 'ADD_ITEM',
        payload: {
          item: option
        } 
      })
    }
  }
}

const AdOptions = ({handleClick}) => {
  const options = [CLASSIC_AD, STANDOUT_AD, PREMIUM_AD];
  return (
    <div className={styles.root}>
      <div className={styles.label}>Ad options:</div> 
      {options.map((option, index) => {
        return (
          <button 
            key={index} 
            className={styles.button} 
            onClick={() =>handleClick(option)}>
            {option}
          </button>);
      })}
    </div>
  )
};

export default connect(null , mapDispatchToProps)(AdOptions);
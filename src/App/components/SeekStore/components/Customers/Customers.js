import React from 'react';
import { connect } from 'react-redux';
import { DEFAULT, UNILIVER, APPLE, NIKE, FORD } from '../../../../../data/customer/customer';
import styles from './Customers.less';
import classnames from "classnames";

const mapDispatchToProps = dispatch => {
  return {
    handleClick: (option) => {
      dispatch({
        type: 'CHANGE_CUSTOMER',
        payload: {
          customer: option
        }
      })
    }
  }
}

const Customers = ({customer, handleClick}) => {
  const options = [ DEFAULT, UNILIVER, APPLE, NIKE, FORD ];
  return (
    <div className={styles.root}>
      <div className={styles.label}>Customer:</div> 
      {options.map((option, index) => {
        return (
          <button 
            key={index} 
            className={classnames([styles.button, {[styles.activeButton]: option === customer} ])} 
            onClick={() =>handleClick(option)}>
            {option}
          </button>);
      })}
    </div>
  )
}

export default connect(state => state, mapDispatchToProps)(Customers);
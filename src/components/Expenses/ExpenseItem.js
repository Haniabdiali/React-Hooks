import React from 'react';

import ExpenseDate from './ExpenseData.js';
import ExCard from '../UI/ExpensesCard.js';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  return (
    <ExCard className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
    </ExCard>
  );
}

export default ExpenseItem;
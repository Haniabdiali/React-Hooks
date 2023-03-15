import React from 'react';

import './ExpensesCard.css';

const Card = (props) => {
  const classes = 'card ' + props.className;

  return <div className={classes}>{props.children}</div>;
};

export default Card;
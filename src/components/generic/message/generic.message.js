import React from 'react';
import styles from './generic.message.css';

function GenericMessage(props) {
  // Set generic class
  let className = styles.genericMessage;

  if(props.messageSwitch){
    className = styles.show;
  }

  return (
    <div className={className}>{props.message}</div>
  )
}

export default GenericMessage;

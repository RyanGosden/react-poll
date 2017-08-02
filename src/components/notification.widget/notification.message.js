import React, {Component} from 'react';
import styles from './notification-widget.css';

function NotificationMessage(props) {
  let className = styles.notificationMessage;

  if(props.payload.message){
    className = styles.show;
  }

  return(
    <div className={className}>
      {props.payload.message}
    </div>
  )
}

export default NotificationMessage;

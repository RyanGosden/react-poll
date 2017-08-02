import React, {Component} from 'react';
import NotificationMessage from './notification.message'

import styles from './notification-widget.css';


class NotificationWidget extends Component {

notificationPayload(){
  return {
    "message":   "Error Message",
    "type":      "warning"
  }
}


  render(){
    return(
      <div className={styles.notificationWidget}>
        <NotificationMessage
          payload={this.notificationPayload()}
        />
        <button>TEST</button>
      </div>
    )
  }

}

export default NotificationWidget;



// on button click (event click)
// call function to set notification type state and noticiation message state...
//

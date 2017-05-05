import React from 'react';
import style from './generic.widget.css';

function GenericWidget(props) {

  return (
    <div className={style.pollWidget}>
      <div className={style.pollHeader}>
        <h1 className={style.pollTitle}>{props.widgetTitle}</h1>
      </div>
      <div className={style.pollBody}>
          {props.widgetView()}
      </div>
    </div>
  )
}

export default GenericWidget;

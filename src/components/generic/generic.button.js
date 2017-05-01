import React from 'react';

import style from './generic.button.css';


// Rename this an a genic button
// Takes two properties
//  1.Label (props.label)
//  2.button callback (props.handleButtonClick)

// Example of usage:
// <PollFooterButtons label="View Results" handleButtonClick={this.handleButtonClick}/>

function GenericButton(props) {
  const handleClick = function(){
    props.handleButtonClick();
  };

  return (
    <button className={style.genericButton} onClick={handleClick}>{props.label}</button>
  )
}

export default GenericButton;

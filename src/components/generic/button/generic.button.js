import React from 'react';

import styles from './generic.button.css';


// Rename this an a genic button
// Takes three properties
//  1. label (props.label)
//  2. button callback (props.handleButtonClick)
//  3. className (props.className) 

// Example of usage:
// <PollFooterButtons label="View Results" handleButtonClick={this.handleButtonClick}/>

function GenericButton(props) {
  // Set generic class
  let className = styles.genericButton;

  // Override class if class is added to component
  if(props.className !== undefined){
        className = props.className
    }

  const handleClick = function(){
    props.handleButtonClick();
  };

  return (
    <button className={className} onClick={handleClick}>{props.label}</button>
  )
}

export default GenericButton;

import React from 'react';

// Rename this an a genic button
// Takes two properties
//  1.Label (props.label)
//  2.button callback (props.handleButtonClick)

// Example of usage:
// <PollFooterButtons label="View Results" handleButtonClick={this.handleButtonClick}/>

function PollFooterButtons(props) {
  const handleClick = function(){
    props.handleButtonClick();
  };

  return (
    <button onClick={handleClick}>{props.label}</button>
  )
}

export default PollFooterButtons;

import React from 'react';
import PollFooterButtons from './poll.footer-buttons';

// here check state of vote and decide to show button

function PollResults(props) {

  function handleButtonClick(){
    props.toggleViewState();
  }

  function renderBackButton(){
    if (!props.voteStatus){
        return <PollFooterButtons label="View Question" handleButtonClick={handleButtonClick}/>

      }
    }

  return (
    <div>
      <h1>Results</h1>
        {renderBackButton()}
    </div>
  )
}
export default PollResults;

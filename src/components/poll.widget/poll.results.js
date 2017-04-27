import React from 'react';
import PollFooterButtons from './poll.footer-buttons';


class PollResults extends React.Component{
  render(){
    return(
      <div>
        <h1>Results</h1>
        <PollFooterButtons label="View Question"/>
      </div>
  );
  }
}

export default PollResults;

import React from 'react';

function PollResultsInformation(props) {

  function preparePollResultsInformation(){
    var pieData = [];
    var pollAnswers = props.pollAnswers;
      var  x = pollAnswers.map((pollAnswer)=>{
         return <li key={pollAnswer.key}>({pollAnswer.key}){pollAnswer.result}% - {pollAnswer.answer} </li>

    });
    return x;

  }


  return (<ul>{preparePollResultsInformation()}</ul>)
}
export default PollResultsInformation;

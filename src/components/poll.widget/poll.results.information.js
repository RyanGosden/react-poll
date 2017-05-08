import React from 'react';
import styles from './poll.css';

function PollResultsInformation(props) {

  function preparePollResultsInformation(){
    var pollAnswers = props.pollAnswers;
      var  pollAnswerResults = pollAnswers.map((pollAnswer)=>{
         return <li key={pollAnswer.key}>{pollAnswer.key}) {pollAnswer.answer} - {pollAnswer.result}% </li>

    });
    return pollAnswerResults;

  }

  return (<ul className={styles.pollAnswerResults}>{preparePollResultsInformation()}</ul>)
}

export default PollResultsInformation;

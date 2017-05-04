import React from 'react';
import {PieChart} from 'react-easy-chart';

import GenericButton from '../generic/button/generic.button';
import styles from './poll.css';


function PollResults(props) {

  function handleButtonClick(){
    props.toggleViewState();
  }

  function renderBackButton(){
    if (!props.voteStatus){
        return <GenericButton label="View Choices" className={styles.pollGenericButton} handleButtonClick={handleButtonClick}/>
      }
    }

  function preparePieChartData(){
    var pieData = [];
    var pollAnswers = props.pollAnswers;
    pollAnswers.map((pollAnswer)=>{
      var result = { key : pollAnswer.key, value : pollAnswer.result };
      pieData.push(result);
    });
  return pieData;
  }

  return (
    <div>
    <p className={styles.pollQuestion}> {props.pollQuestion}</p>
      <div className={styles.pollPiechart}>
        <PieChart
          labels
          size={150}
          data={preparePieChartData()}
          styles={{
            '.chart_lines': {
                strokeWidth: 0
            },
            '.chart_text': {
              fontFamily: 'serif',
              fontSize: '1.25em',
              fill: '#333'
            }
          }}
          />


      </div>
      {renderBackButton()}
    </div>
  )
}
export default PollResults;

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
        return <GenericButton label="View Question" className={styles.pollGenericButton} handleButtonClick={handleButtonClick}/>

      }
    }

  return (
    <div>
    <p className={styles.pollQuestion}> {props.pollQuestion}</p>
      <div className={styles.pollPiechart}>
        <PieChart
          size={150}
          data={[
            { key: 'A', value: 100 },
            { key: 'B', value: 200 },
            { key: 'C', value: 50 }
          ]}
          />
      </div>
      {renderBackButton()}
    </div>
  )
}
export default PollResults;

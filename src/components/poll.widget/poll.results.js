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
        return <GenericButton label="View Question" handleButtonClick={handleButtonClick}/>

      }
    }

  return (
    <div>
      <PieChart
        size={100}
        data={[
          { key: 'A', value: 100 },
          { key: 'B', value: 200 },
          { key: 'C', value: 50 }
        ]}
        />
      {renderBackButton()}
    </div>
  )
}
export default PollResults;

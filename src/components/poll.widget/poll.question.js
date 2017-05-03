import React from 'react';
import GenericButton from '../generic/button/generic.button';

import styles from './poll.css';

class PollQuestion extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      pollChoice : "",
      checked: false
    }

    this.handleSubmit      = this.handleSubmit.bind(this);
    this.handleRadioChange = this.handleRadioChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  };


  handleSubmit(e){
    e.preventDefault();
    this.props.handleSubmit(e.target.value);
  };

  handleRadioChange(e){
    this.setState({pollChoice: e.target.value});
  }

  handleButtonClick(props){
    this.props.toggleViewState();
  }

  render(){
    return(
        <div>
          <form>
            <p className={styles.pollQuestion}> What do you think of Maltas Tourism? </p>
            <label>
              <input type="radio" value="option-1" name="poll-buttons" defaultChecked
                onChange={this.handleRadioChange}/>
              It needs serious touch-ups!
            </label>
            <label>
              <input type="radio" value="option-2" name="poll-buttons"
                onChange={this.handleRadioChange}/>
              Its fine!
            </label>
            <button onClick={this.handleSubmit} className={styles.pollButton}>Vote</button>
          </form>
          <GenericButton label="View Results" className={styles.pollGenericButton} handleButtonClick={this.handleButtonClick}/>
        </div>
  );
  }
}

export default PollQuestion;

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

renderQuestions(){
  const answers = this.props.pollAnswers;

  if(answers === undefined){
    return <div> Return </div>
  } else{
      var list = answers.map((answer)=> {
        return ( <label>
                    <input type="radio" value="option-1" name="poll-buttons"
                    onChange={this.handleRadioChange}/>{answer.answer}
                 </label>)
     })
  return list;
  }
}

  render(){
    return(
        <div>
          <form>
            <p className={styles.pollQuestion}> {this.props.pollQuestion}</p>
{this.renderQuestions()}
            <button onClick={this.handleSubmit} className={styles.pollButton}>Vote</button>
          </form>
          <GenericButton label="View Results" className={styles.pollGenericButton} handleButtonClick={this.handleButtonClick}/>
        </div>
  );
  }
}

export default PollQuestion;

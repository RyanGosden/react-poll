import React from 'react';
import GenericButton from '../generic/button/generic.button';
import GenericMessage from '../generic/message/generic.message';

import styles from './poll.css';

class PollQuestion extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      pollChoice : "",
      message : {
        pollQuestion : false
      }
    }

    this.handleSubmit      = this.handleSubmit.bind(this);
    this.handleRadioChange = this.handleRadioChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  };


  handleSubmit(e){
    e.preventDefault();
    if (this.state.pollChoice === ""){
      var messageObj = this.state.message;
      messageObj.pollQuestion = true;
      this.setState({message : messageObj})
    }else{
      this.props.handleSubmit(this.state.pollChoice);
    }
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
    return <div> Loading ... </div>
  } else{
      var list = answers.map((answer)=> {
        return ( <label key={answer.key}>
                    <input type="radio" value={answer.key} name="poll-buttons"
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
          <GenericMessage messageType={"error"} message={"Error - please select a field"} messageSwitch={this.state.message.pollQuestion} />
          <GenericButton label="View Results" className={styles.pollGenericButton} handleButtonClick={this.handleButtonClick}/>
        </div>
  );
  }
}

export default PollQuestion;

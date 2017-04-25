import React from 'react';
import p from './styles.css';


class PollQuestion extends React.Component{
  constructor(props){
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleSubmit(e){
    e.preventDefault();
    this.props.handleSubmit(e.target.value);
  };

  render(){
    return(
        <form onClick={this.handleSubmit}>
          <p className={p.pollQuestion}> What do you think of Malta's Tourism? </p>
          <label>
            <input type="radio" value="option-1" name="submit-input"
              onClick={this.handleSubmit}/>
            It needs serious touch-ups!
          </label>
          <label>
            <input type="radio" value="option-2" name="submit-input"
              onClick={this.handleSubmit}/>
            Its fine!
          </label>
          <button className={p.pollButton}>Vote</button>
        </form>
  );
  }
}

export default PollQuestion;

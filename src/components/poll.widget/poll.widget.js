import React, { Component} from 'react';
import Cookies from 'universal-cookie';

import PollQuestion from './poll.question';
import PollResults from './poll.results';

import p from './styles.css';

class PollWidget extends Component{
  constructor(props){
    super(props);

    this.cookie = new Cookies();

    this.state = {
      alreadyVoted: this.cookie.get('poll-status') || false,
      pollViewRender: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePollView = this.handlePollView.bind(this);
    this.toggleViewState = this.toggleViewState.bind(this);




    //set view based on cookie
    //to check or move directly to state
   if(this.state.alreadyVoted){
     this.state.pollViewRender = true;
   }
  }

  handleSubmit(value){
    alert("`Submitting form...");
    this.cookie.set('poll-status', 'true', { path: '/' });
    this.setState({alreadyVoted: true});
    this.setState({pollViewRender: true});

  }

  toggleViewState(){
    var currentState = this.state.pollViewRender;
    this.setState({pollViewRender : !currentState})
  }

  handlePollView(){
    if (!this.state.pollViewRender){
        return (<PollQuestion handleSubmit={this.handleSubmit} toggleViewState={this.toggleViewState} /> )
    }else{
        return (<PollResults voteStatus={this.state.alreadyVoted} toggleViewState={this.toggleViewState} /> )
    }
  }


  render(){
    return(
    <div className={p.pollWidget}>
      <div className={p.pollHeader}>
        <h1 className={p.pollTitle}>Poll Widget</h1>
      </div>
      <div className={p.pollBody}>
          {this.handlePollView()}
      </div>
    </div>
  );
  }
}

export default PollWidget;

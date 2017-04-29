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
      pollViewRender: 'question'
    };

    this.pollViewRender = 'question';

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePollView = this.handlePollView.bind(this);
  }

  handleSubmit(value){
    alert("`Submitting form...");
    this.cookie.set('poll-status', 'true', { path: '/' });
    this.setState({alreadyVoted: true});
  }

  handlePollView(){
    // create a poll view state/varibale switch
    // check its value and render the view
    // force result view if already voted
    if(this.state.alreadyVoted){
      this.setState({pollViewRender : 'results'});
      return ( <PollResults voteStatus={this.state.alreadyVoted}/> )
    } else {
        if (this.pollViewRender === "question"){
        return (<PollQuestion handleSubmit={this.handleSubmit} pollViewRender={this.state.pollViewRender} /> )
      }else{
        return (<PollResults voteStatus={this.state.alreadyVoted} /> )
      }
    }

}
  //   if (this.state.pollViewRender === "")
  //
  //   return (this.state.alreadyVoted) ?
  //       <PollResults voteStatus={this.state.alreadyVoted}/> :
  //       <PollQuestion handleSubmit={this.handleSubmit} />;
  // }

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

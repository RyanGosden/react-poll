//Check cookie
//If non-existant

import React, { Component} from 'react';
import Cookies from 'universal-cookie';

import PollQuestion from './poll.question';
import PollResults from './poll.results';
import PollFooterButtons from './poll.footer-buttons';

import p from './styles.css';


class PollWidget extends Component{
  constructor(props){
    super(props);

    this.cookie = new Cookies();

    this.state = {
      alreadyVoted: ""
    };

//    this.getVoteStatus();

    console.log(this.cookie.get('poll-status'));

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePollView = this.handlePollView.bind(this);
    this.getVoteStatus = this.getVoteStatus.bind(this);


  }

  handleSubmit(value){
    alert("`Submitting form...");
    this.cookie.set('poll-status', 'true', { path: '/' });
    this.setState({alreadyVoted: true});
  }

  getVoteStatus(){
    if (this.cookie.get('poll-status')){
      this.setState({alreadyVoted : true});
    } else{
      this.setState({alreadyVoted : false});
    }
  }

  handlePollView(){
    // this.getVoteStatus();
    return (this.state.alreadyVoted === true) ?
        <PollResults /> :
        <PollQuestion handleSubmit={this.handleSubmit} />;
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
      <PollFooterButtons/>
    </div>
  );
  }
}

export default PollWidget;

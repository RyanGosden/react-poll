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
      alreadyVoted: this.cookie.get('poll-status') || false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePollView = this.handlePollView.bind(this);
  }

  handleSubmit(value){
    alert("`Submitting form...");
    this.cookie.set('poll-status', 'true', { path: '/' });
    this.setState({alreadyVoted: true});
  }

  handlePollView(){
    return (this.state.alreadyVoted) ?
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

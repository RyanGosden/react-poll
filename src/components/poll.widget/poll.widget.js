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

    const cookie = new Cookies();

    this.state = {
      alreadyVoted: cookie.get('poll-completed') || 'poll-not-completed',
    };

    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleSubmit(value){
  }

  render(){
    // When submitting form
    //    cookie.set('poll-completed', 'Pacman', { path: '/' });


    var pollView;
    this.state.alreadyVoted === true ?
    pollView = <PollResults /> :
    pollView = <PollQuestion handleSubmit={this.handleSubmit} />;

    return(
    <div className={p.pollWidget}>
      <div className={p.pollHeader}>
        <h1 className={p.pollTitle}>Poll Widget</h1>
      </div>
      <div className={p.pollBody}>
          {pollView}
      </div>
      <PollFooterButtons/>
    </div>
  );
  }
}

export default PollWidget;

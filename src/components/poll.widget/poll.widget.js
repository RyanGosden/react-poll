import React, { Component} from 'react';
import Cookies from 'universal-cookie';
import axios from 'axios';

import GenericWidget from '../../components/generic/widget/generic.widget';
import PollQuestion from './poll.question';
import PollResults from './poll.results';

import styles from './poll.css';

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
    if(this.state.alreadyVoted){
      this.state.pollViewRender = true;
    }

    //load data
    axios
      .get('/poll-data.json')
      .then(function(result) {
          console.log(result)  });
        }

  handleSubmit(value){
    alert("`Submitting form...");
    this.cookie.set('poll-status', 'true', { path: '/' });
    this.setState({alreadyVoted: true});
    this.setState({pollViewRender: true});
  }

  toggleViewState(){
    this.setState({
      pollViewRender : !this.state.pollViewRender
    })
  }

  handlePollView(){
    if (this.state.pollViewRender){
        return (<PollResults voteStatus={this.state.alreadyVoted} toggleViewState={this.toggleViewState} /> )
    }else{
        return (<PollQuestion handleSubmit={this.handleSubmit} toggleViewState={this.toggleViewState} /> )
    }
  }

  render(){
    return <GenericWidget widgetTitle={"Poll Widget"} widgetView={this.handlePollView}/>;
  }
}

export default PollWidget;

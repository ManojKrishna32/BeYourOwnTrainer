import React, { Component } from 'react';
import { Alert } from 'react-bootstrap';

class DisclaimerAlert extends Component {
    constructor(props){
        super(props);
        this.state = {
            alertVisible: true
        };

        this.handleAlertDismiss = this.handleAlertDismiss.bind(this);
        this.handleAlertShow = this.handleAlertShow.bind(this);
    }

    handleAlertDismiss() {
    this.setState({alertVisible: false});
  }

  handleAlertShow() {
    this.setState({alertVisible: true});
  }

    render() {
        if (this.state.alertVisible) {
      return (
        <Alert bsStyle="danger" onDismiss={this.handleAlertDismiss} style={{margin:0}}>
          <h4>Important disclaimer</h4>
          <p>Please note i'm neither a nutritionist nor a fitness trainer. I have listed what had best worked out for me. Please take this workouts and diet as reference only.</p>
        </Alert>
      );
    }
}
}

export default DisclaimerAlert;
import React, { Component } from 'react';
import './App.css';
import Navigation from './components/navigation';
import DisclaimerAlert from './components/disclaimerAlert';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />

        <div style={styles.containerClass}>
          {this.props.children}
        </div>

        <DisclaimerAlert />

        <Footer />
      </div>
    );
  }
}

const styles = {
  containerClass: {
    marginLeft: '1%',
    marginRight: '1%',
    marginTop: 60,
    backgroundColor: '#fefefe'
  }
};

export default App;

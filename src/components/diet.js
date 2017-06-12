import React,  { Component } from 'react'

import SidePanels from './sidePanels'
import DietContent from './dietContent'

class Diet extends Component {
  constructor(props){
        super(props);
        this.state= {
            activeKey: '1'
        }
        this.handleSelect = this.handleSelect.bind(this);
    }

    handleSelect(activeKey) {
        this.setState({ activeKey });
    }

  render() {
    return  (
      <div >
    <div style={styles.sideNav}>
        <SidePanels />
    </div>
    <div style={styles.content}>
        <DietContent />
    </div>
  </div>
    )
  }
  
};

const styles= {
  sideNav: {
    height:'100vh',
    position: 'fixed',
    width: '15%',
  },
  content: {
    marginLeft: '25%',
    textAlign: 'left'
  }
}

export default Diet;
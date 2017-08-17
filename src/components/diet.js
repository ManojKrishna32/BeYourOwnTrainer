import React, { Component } from 'react';
import MediaQuery from 'react-responsive';

import SidePanels from './sidePanels';
import DietContent from './dietContent';

class Diet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeKey: '1'
    };
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(activeKey) {
    this.setState({ activeKey });
  }

  render() {
    return (
      <div>
        <MediaQuery query="(min-device-width: 720px)">
          <div style={styles.sideNavDesktop}>
            <SidePanels />
          </div>
          <div style={styles.contentDesktop}>
            <DietContent />
          </div>
        </MediaQuery>

        <MediaQuery query="(max-width: 720px)">
          <div style={styles.contentMobile}>
            <DietContent />
          </div>
        </MediaQuery>
      </div>
    );
  }
}

const styles = {
  sideNavDesktop: {
    height: 'auto',
    position: 'fixed',
    width: '15%'
  },
  contentDesktop: {
    flex: 1,
    textAlign: 'left',
    marginLeft: '20%',
    padding: '0 1%'
  },
  contentMobile: {
    flex: 1,
    textAlign: 'left',
    padding: '0 2%'
  }
};

export default Diet;

import React, { Component } from 'react';
import MediaQuery from 'react-responsive';

import WorkoutSidePannel from './workoutSidePannel';
import WorkoutContent from './workoutContent';

class Workout extends Component {
  render() {
    return (
      <div>
        <MediaQuery query="(min-device-width: 720px)">
          <div style={styles.sideNavDesktop}>
            <WorkoutSidePannel />
          </div>
          <div style={styles.contentDesktop}>
            <WorkoutContent />
          </div>
        </MediaQuery>
        
        <MediaQuery query="(max-width: 720px)">
          <div style={styles.contentMobile}>
            <WorkoutContent />
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

export default Workout;

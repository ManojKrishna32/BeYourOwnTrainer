import React, { Component } from 'react';
import { PanelGroup, Panel, ListGroup, ListGroupItem } from 'react-bootstrap';

import data from '../data/workouts';

class WorkoutSidePannel extends Component {
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

  scrollToView(tag) {
    //scroll the view to that id
    document.getElementById(tag).scrollIntoView();

    /*since we had a fixed header and used margin top to aligin this diet conatiner
    view is scrolling 50px more whisch is margin-top.
    so to align perfectly, below trick is implemented */
    let scrolledY = window.scrollY;

    if (scrolledY) {
      window.scroll(0, scrolledY - 50);
    }
  }

  pannelGroupsGenerator(start, end, eventKey) {
    let panel = (
      <Panel header={`Day ${start}-${end}`} eventKey={eventKey}>
        <ListGroup fill>
          {data.data.map((obj, index) => {
            if (index + 1 >= start && index < end) {
              return (
                <div>
                  <ListGroupItem>
                    <div
                      onClick={this.scrollToView.bind(this, `day${index + 1}`)}
                    >{`day ${index + 1}`}</div>
                  </ListGroupItem>
                </div>
              );
            } else {
              return null;
            }
          })}
        </ListGroup>
      </Panel>
    );
    return panel;
  }

  render() {
    return (
      <div style={{ textAlign: 'left' }}>
        <PanelGroup
          activeKey={this.state.activeKey}
          onSelect={this.handleSelect}
          accordion
        >
          {this.pannelGroupsGenerator(1, 10, 1)}
          {this.pannelGroupsGenerator(11, 20, 2)}
        </PanelGroup>
      </div>
    );
  }
}

export default WorkoutSidePannel;

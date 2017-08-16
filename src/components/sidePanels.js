import React, { Component } from 'react';

import { PanelGroup, Panel, ListGroup, ListGroupItem } from 'react-bootstrap';

class SidePanels extends Component {
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

  render() {
    return (
      <div style={{ textAlign: 'left' }}>
        <PanelGroup
          activeKey={this.state.activeKey}
          onSelect={this.handleSelect}
          accordion
        >
          {/*preparation guide*/}
          <Panel
            header="Gude to meal prep"
            eventKey="1"
            onSelect={this.scrollToView.bind(this, 'GuideToMealPrep')}
          >
            <ListGroup fill>
              <ListGroupItem>
                <div onClick={this.scrollToView.bind(this, 'plan')}>Plan</div>
              </ListGroupItem>
              <ListGroupItem>
                <div onClick={this.scrollToView.bind(this, 'prep')}>Prep</div>
              </ListGroupItem>
              <ListGroupItem>
                <div onClick={this.scrollToView.bind(this, 'meatPrep')}>
                  Meat Prep
                </div>
              </ListGroupItem>
              <ListGroupItem>
                <div onClick={this.scrollToView.bind(this, 'tips')}>Tips</div>
              </ListGroupItem>
            </ListGroup>
          </Panel>

          {/*Meal plan 1*/}
          <Panel
            header="Diet Plan 1"
            eventKey="2"
            onSelect={this.scrollToView.bind(this, 'DietPlan1')}
          >
            <ListGroup fill>
              <ListGroupItem>
                <div onClick={this.scrollToView.bind(this, 'DietPlan1Meal1')}>
                  Meal 1
                </div>
              </ListGroupItem>
              <ListGroupItem>
                <div onClick={this.scrollToView.bind(this, 'DietPlan1Meal2')}>
                  Meal 2
                </div>
              </ListGroupItem>
              <ListGroupItem>
                <div onClick={this.scrollToView.bind(this, 'DietPlan1Meal3')}>
                  Meal 3
                </div>
              </ListGroupItem>
              <ListGroupItem>
                <div onClick={this.scrollToView.bind(this, 'DietPlan1Meal4')}>
                  Meal 4
                </div>
              </ListGroupItem>
              <ListGroupItem>
                <div onClick={this.scrollToView.bind(this, 'DietPlan1Meal5')}>
                  Meal 5
                </div>
              </ListGroupItem>
              <ListGroupItem>
                <div onClick={this.scrollToView.bind(this, 'DietPlan1Meal6')}>
                  Meal 6
                </div>
              </ListGroupItem>
              <ListGroupItem>
                <div onClick={this.scrollToView.bind(this, 'DietPlan1Meal7')}>
                  Meal 7
                </div>
              </ListGroupItem>
            </ListGroup>
          </Panel>

          {/*Meal Plan 2*/}
          <Panel
            header="Diet Plan 2"
            eventKey="3"
            onSelect={this.scrollToView.bind(this, 'DietPlan2')}
          >
            <ListGroup fill>
              <ListGroupItem>
                <div onClick={this.scrollToView.bind(this, 'DietPlan2Meal1')}>
                  Meal 1
                </div>
              </ListGroupItem>
              <ListGroupItem>
                <div onClick={this.scrollToView.bind(this, 'DietPlan2Meal2')}>
                  Meal 2
                </div>
              </ListGroupItem>
              <ListGroupItem>
                <div onClick={this.scrollToView.bind(this, 'DietPlan2Meal3')}>
                  Meal 3
                </div>
              </ListGroupItem>
              <ListGroupItem>
                <div onClick={this.scrollToView.bind(this, 'DietPlan2Meal4')}>
                  Meal 4
                </div>
              </ListGroupItem>
              <ListGroupItem>
                <div onClick={this.scrollToView.bind(this, 'DietPlan2Meal5')}>
                  Meal 5
                </div>
              </ListGroupItem>
            </ListGroup>
          </Panel>

          {/*Meal Plan 3*/}
          <Panel
            header="Diet Plan 3"
            eventKey="4"
            onSelect={this.scrollToView.bind(this, 'DietPlan3')}
          >
            <ListGroup fill>
              <ListGroupItem>
                <div onClick={this.scrollToView.bind(this, 'DietPlan3Meal1')}>
                  Meal 1
                </div>
              </ListGroupItem>
              <ListGroupItem>
                <div onClick={this.scrollToView.bind(this, 'DietPlan3Meal2')}>
                  Meal 2
                </div>
              </ListGroupItem>
              <ListGroupItem>
                <div onClick={this.scrollToView.bind(this, 'DietPlan3Meal3')}>
                  Meal 3
                </div>
              </ListGroupItem>
              <ListGroupItem>
                <div onClick={this.scrollToView.bind(this, 'DietPlan3Meal4')}>
                  Meal 4
                </div>
              </ListGroupItem>
              <ListGroupItem>
                <div onClick={this.scrollToView.bind(this, 'DietPlan3Meal5')}>
                  Meal 5
                </div>
              </ListGroupItem>
            </ListGroup>
          </Panel>

          {/*Meal Plan 4*/}
          <Panel
            header="Diet Plan 4"
            eventKey="5"
            onSelect={this.scrollToView.bind(this, 'DietPlan4')}
          >
            <ListGroup fill>
              <ListGroupItem>
                <div onClick={this.scrollToView.bind(this, 'DietPlan4Meal1')}>
                  Meal 1
                </div>
              </ListGroupItem>
              <ListGroupItem>
                <div onClick={this.scrollToView.bind(this, 'DietPlan4Meal2')}>
                  Meal 2
                </div>
              </ListGroupItem>
              <ListGroupItem>
                <div onClick={this.scrollToView.bind(this, 'DietPlan4Meal3')}>
                  Meal 3
                </div>
              </ListGroupItem>
              <ListGroupItem>
                <div onClick={this.scrollToView.bind(this, 'DietPlan4Meal4')}>
                  Meal 4
                </div>
              </ListGroupItem>
              <ListGroupItem>
                <div onClick={this.scrollToView.bind(this, 'DietPlan4Meal5')}>
                  Meal 5
                </div>
              </ListGroupItem>
              <ListGroupItem>
                <div onClick={this.scrollToView.bind(this, 'DietPlan4Meal6')}>
                  Meal 6
                </div>
              </ListGroupItem>
            </ListGroup>
          </Panel>

          {/*Meal Plan 5*/}
          <Panel
            header="Diet Plan 5"
            eventKey="6"
            onSelect={this.scrollToView.bind(this, 'DietPlan5')}
          >
            <ListGroup fill>
              <ListGroupItem>
                <div onClick={this.scrollToView.bind(this, 'DietPlan5diet1')}>
                  diet 1
                </div>
              </ListGroupItem>
              <ListGroupItem>
                <div onClick={this.scrollToView.bind(this, 'DietPlan5diet2')}>
                  diet 2
                </div>
              </ListGroupItem>
              <ListGroupItem>
                <div onClick={this.scrollToView.bind(this, 'DietPlan5diet3')}>
                  diet 3
                </div>
              </ListGroupItem>
            </ListGroup>
          </Panel>

          {/*Indian Diet*/}
          <Panel
            header="Indian Diet"
            eventKey="7"
            onSelect={this.scrollToView.bind(this, 'indianDiet')}
          />

          {/*Vegan Diet*/}
          <Panel
            header="Vegan Diet"
            eventKey="8"
            onSelect={this.scrollToView.bind(this, 'veganDiet')}
          />
        </PanelGroup>
      </div>
    );
  }
}

export default SidePanels;

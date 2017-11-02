import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter
} from 'react-router-dom'

import BigScreen from './BigScreen/BigScreen';
import LittleScreen from './LittleScreen/LittleScreen';
import Mobile from './Mobile/Mobile';

const smallestBigScreen = 900;
const smallestLittleScreen = 500;

const BIG_SCREEN = 0;
const LITTLE_SCREEN = 1;
const MOBILE = 2;

const determineScreenSize = (size) => {
  if(size > smallestBigScreen){
    return BIG_SCREEN;
  }
  if(size > smallestLittleScreen){
    return LITTLE_SCREEN;
  }
  return MOBILE;
}

class App extends Component {
  constructor() {
    super();

    this.state = {
      screenSize: determineScreenSize(window.innerWidth)
    };
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  // make sure to remove the listener
  // when the component is not mounted anymore
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    let newScreenSize = determineScreenSize(window.innerWidth);
    let currentScreenSize = this.state.screenSize;
    if(newScreenSize != currentScreenSize){
      switch(newScreenSize){
        case BIG_SCREEN:
          this.props.history.replace("/bigScreen");
          break;
        case LITTLE_SCREEN:
          this.props.history.replace("/littleScreen");
          break;
        case MOBILE:
          this.props.history.replace("/mobile");
          break;
      }
      this.setState({screenSize: newScreenSize});
    }
  };

  render(){
    return (
      <div>
        <Route exact path="/bigScreen" component={BigScreen}/>
        <Route exact path="/littleScreen" component={LittleScreen}/>
        <Route exact path="/mobile" component={Mobile}/>
      </div>
    );
  }
}

export default withRouter(App);

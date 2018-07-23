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

export const screenSizes = {
  BIG_SCREEN: 0,
  LITTLE_SCREEN: 1,
  MOBILE: 2
}
export const screenSizeToText = {
  [screenSizes.BIG_SCREEN] : 'big',
  [screenSizes.LITTLE_SCREEN] : 'little',
  [screenSizes.MOBILE] : 'mobile'
};

//CSS Modules support coming v soon
//https://github.com/facebook/create-react-app/issues/3815

const determineScreenSize = (size) => {
  if(size > smallestBigScreen){
    return screenSizes.BIG_SCREEN;
  }
  if(size > smallestLittleScreen){
    return screenSizes.LITTLE_SCREEN;
  }
  return screenSizes.MOBILE;
}

const newLocation = (oldLocation, newBase) => {
  alert(oldLocation);
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      screenType: determineScreenSize(window.innerWidth)
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
    let newScreenType = determineScreenSize(window.innerWidth);
    if(newScreenType !== this.state.screenType){
      this.setState({screenType: newScreenType});
    }
  };

  render(){
    return (
      <div>
        {
          this.state.screenType === screenSizes.BIG_SCREEN && <BigScreen/>
        }
        {
          this.state.screenType === screenSizes.LITTLE_SCREEN && <LittleScreen/>
        }
        {
          this.state.screenType === screenSizes.MOBILE && <Mobile/>
        }
      </div>
    );
  }
}

export default withRouter(App);

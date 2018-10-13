/* global window:true */
import React, { Component } from 'react';
import {
  withRouter,
} from 'react-router-dom';

import screenSizes from './ScreenSizes';
import BigScreen from './BigScreen/BigScreen';
import LittleScreen from './LittleScreen/LittleScreen';
import Mobile from './Mobile/Mobile';

const smallestBigScreen = 900;
const smallestLittleScreen = 500;

// CSS Modules support coming v soon
// https://github.com/facebook/create-react-app/issues/3815

const determineScreenSize = (size) => {
  if (size > smallestBigScreen) {
    return screenSizes.BIG_SCREEN;
  }
  if (size > smallestLittleScreen) {
    return screenSizes.LITTLE_SCREEN;
  }
  return screenSizes.MOBILE;
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      screenType: determineScreenSize(window.innerWidth),
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
    const { screenType } = this.state;
    const newScreenType = determineScreenSize(window.innerWidth);
    if (newScreenType !== screenType) {
      this.setState({ screenType: newScreenType });
    }
  };

  render() {
    const { screenType } = this.state;
    return (
      <div>
        {
          screenType === screenSizes.BIG_SCREEN && <BigScreen />
        }
        {
          screenType === screenSizes.LITTLE_SCREEN && <LittleScreen />
        }
        {
          screenType === screenSizes.MOBILE && <Mobile />
        }
      </div>
    );
  }
}

export default withRouter(App);

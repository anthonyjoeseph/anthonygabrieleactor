import React from 'react';
import PropTypes from 'prop-types';

import { screenSizeToText } from '../ScreenSizes';

const Home = ({
  screenSize,
}) => (
  <div>
    {screenSizeToText[screenSize]}
    {' '}
    home
  </div>
);
Home.propTypes = {
  screenSize: PropTypes.number.isRequired,
};

export default Home;

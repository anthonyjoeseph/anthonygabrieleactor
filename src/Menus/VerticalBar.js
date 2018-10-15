import React from 'react';
import PropTypes from 'prop-types';
import ScreenSizes from '../ScreenSizes';

const VerticalBar = ({
  screenSize,
}) => (
  <div
    style={{
      width: 3,
      height: screenSize === ScreenSizes.BIG_SCREEN ? 80 : 50,
      borderRadius: '1',
      backgroundColor: 'gray',
    }}
  />
);
VerticalBar.propTypes = {
  screenSize: PropTypes.number.isRequired,
};

export default VerticalBar;

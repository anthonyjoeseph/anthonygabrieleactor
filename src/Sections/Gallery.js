import React from 'react';
import PropTypes from 'prop-types';
import { screenSizeToText } from '../ScreenSizes';

const Gallery = ({
  screenSize,
}) => (
  <div>
    {screenSizeToText[screenSize]}
    {' '}
    gallery
  </div>
);
Gallery.propTypes = {
  screenSize: PropTypes.number.isRequired,
};

export default Gallery;

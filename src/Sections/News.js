import React from 'react';
import PropTypes from 'prop-types';
import { screenSizeToText } from '../ScreenSizes';

const News = ({
  screenSize,
}) => (
  <div>
    {screenSizeToText[screenSize]}
    {' '}
    news
  </div>
);
News.propTypes = {
  screenSize: PropTypes.number.isRequired,
};

export default News;

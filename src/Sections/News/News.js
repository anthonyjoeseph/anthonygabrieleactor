import React from 'react';
import FlexBox from 'flexbox-react';
import PropTypes from 'prop-types';
import NewsBlocks from './NewsBlocks';
import * as newsItems from './NewsInfo.json';

const News = ({
  screenSize,
}) => (
  <FlexBox
    flexDirection="column"
    alignItems="center"
  >
    News
    <NewsBlocks
      screenSize={screenSize}
      newsItems={newsItems}
    />
  </FlexBox>
);
News.propTypes = {
  screenSize: PropTypes.number.isRequired,
};

export default News;

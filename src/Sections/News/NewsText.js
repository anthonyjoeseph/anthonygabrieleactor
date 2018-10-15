import React from 'react';
import FlexBox from 'flexbox-react';
import PropTypes from 'prop-types';
import Block from './Block';

const NewsText = ({
  title,
  text,
  screenSize,
}) => (
  <Block
    screenSize={screenSize}
  >
    <FlexBox
      flexDirection="column"
    >
      <p
        style={{
          fontSize: 40,
        }}
      >
        {title}
      </p>
      <p
        style={{
          fontSize: 20,
        }}
      >
        {text}
      </p>
    </FlexBox>
  </Block>
);
NewsText.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  screenSize: PropTypes.number.isRequired,
};
export default NewsText;

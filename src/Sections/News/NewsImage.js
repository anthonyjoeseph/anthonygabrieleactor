import React from 'react';
import PropTypes from 'prop-types';
import Block from './Block';

const NewsImage = ({
  imageUri,
  altText,
  screenSize,
}) => {
  const imageSrc = `/newsImages/${imageUri}`;
  return (
    <Block
      screenSize={screenSize}
    >
      <div
        style={{
          width: 'inherit',
          left: '50%',
          marginRight: '-50%',
        }}
      >
        <img
          alt={altText}
          src={imageSrc}
          style={{
            width: 'inherit',
          }}
        />
      </div>
    </Block>
  );
};
NewsImage.propTypes = {
  imageUri: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  screenSize: PropTypes.number.isRequired,
};
export default NewsImage;

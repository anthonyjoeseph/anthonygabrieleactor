import React from 'react';
import FlexBox from 'flexbox-react';
import PropTypes from 'prop-types';
import ScreenSizes from '../../ScreenSizes';
import NewsImage from './NewsImage';
import NewsText from './NewsText';

const newsItemType = PropTypes.shape({
  title: PropTypes.string,
  text: PropTypes.string,
  image: PropTypes.string,
});

const NewsBlocks = ({
  screenSize,
  newsItems,
}) => (
  <FlexBox
    flexDirection="column"
  >
    {newsItems != null
      && newsItems.map((newsItem, index) => (
        <NewsBlock
          key={newsItem.title}
          screenSize={screenSize}
          newsData={newsItem}
          even={index % 2 === 0}
        />
      ))}
  </FlexBox>
);
NewsBlocks.propTypes = {
  screenSize: PropTypes.number.isRequired,
  newsItems: PropTypes.arrayOf(newsItemType).isRequired,
};

const NewsBlock = ({
  screenSize,
  newsData,
  even,
}) => {
  const isMobile = screenSize === ScreenSizes.MOBILE;
  const flexDirection = isMobile ? (
    'column'
  ) : (
    'row'
  );
  const imageBlock = (
    <NewsImage
      screenSize={screenSize}
      altText={newsData.title}
      imageUri={newsData.image}
    />
  );
  const textBlock = (
    <NewsText
      screenSize={screenSize}
      title={newsData.title}
      text={newsData.text}
    />
  );
  const blocks = isMobile || even ? [
    textBlock, imageBlock,
  ] : [
    imageBlock, textBlock,
  ];
  return (
    <FlexBox
      flexDirection={flexDirection}
      justifyContent="center"
      alignItems="center"
    >
      {blocks}
    </FlexBox>
  );
};
NewsBlock.propTypes = {
  screenSize: PropTypes.number.isRequired,
  newsData: newsItemType.isRequired,
  even: PropTypes.number.isRequired,
};

export default NewsBlocks;

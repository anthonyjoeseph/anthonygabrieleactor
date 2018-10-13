import React from 'react';
import FlexBox from 'flexbox-react';
import ReactPlayer from 'react-player';
import PropTypes from 'prop-types';

import screenSizes from '../ScreenSizes';

const Media = ({
  screenSize,
}) => (
  <FlexBox
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
  >
    <p
      style={{
        fontSize: 40,
      }}
    >
      {'Reel'}
    </p>
    <EmbeddedVideo
      url="https://www.youtube.com/watch?v=gmDzyfpNug0"
      screenSize={screenSize}
    />
    <p
      style={{
        fontSize: 40,
      }}
    >
      {'Song & Tap Dance Routine'}
    </p>
    <EmbeddedVideo
      url="https://www.youtube.com/watch?v=EvsgloHCWUk"
      screenSize={screenSize}
    />
  </FlexBox>
);
Media.propTypes = {
  screenSize: PropTypes.number.isRequired,
};

export default Media;

const EmbeddedVideo = ({
  url,
  screenSize,
}) => (
  <FlexBox
    style={{ width: '100%' }}
    flexDirection="row"
    justifyContent="center"
  >
    {screenSize === screenSizes.MOBILE && (
      <div
        style={{
          position: 'relative',
          width: '100%',
          paddingTop: '56.25%',
        }}
      >
        <ReactPlayer
          url={url}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
          }}
          width="100%"
          height="100%"
        />
      </div>
    )}
    {screenSize !== screenSizes.MOBILE && (
      <ReactPlayer
        url={url}
      />
    )}
  </FlexBox>
);
EmbeddedVideo.propTypes = {
  url: PropTypes.string.isRequired,
  screenSize: PropTypes.number.isRequired,
};

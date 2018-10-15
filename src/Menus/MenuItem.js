import React from 'react';
import {
  Link,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import Flexbox from 'flexbox-react';
import ScreenSizes from '../ScreenSizes';

const MenuItem = ({
  screenSize,
  to,
  text,
}) => {
  const fontSize = screenSize === ScreenSizes.BIG_SCREEN ? 30 : 20;
  const width = screenSize === ScreenSizes.BIG_SCREEN ? 150 : 120;
  const height = screenSize === ScreenSizes.BIG_SCREEN ? 100 : 80;
  return (
    <Flexbox
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      style={{
        width,
        height,
      }}
    >
      <Link to={to}>
        <div
          style={{
            fontSize,
          }}
        >
          {text}
        </div>
      </Link>
    </Flexbox>
  );
};
MenuItem.propTypes = {
  screenSize: PropTypes.number.isRequired,
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default MenuItem;

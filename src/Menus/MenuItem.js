import React from 'react';
import {
  Link,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import Flexbox from 'flexbox-react';

const MenuItem = ({
  to,
  text,
}) => (
  <Flexbox
    flexDirection="row"
    justifyContent="center"
    alignItems="center"
    style={{
      width: 150,
      height: 100,
    }}
  >
    <Link to={to}>
      <div
        style={{
          fontSize: 30,
        }}
      >
        {text}
      </div>
    </Link>
  </Flexbox>
);
MenuItem.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default MenuItem;

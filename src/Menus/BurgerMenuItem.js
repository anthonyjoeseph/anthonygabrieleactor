import React from 'react';
import {
  Link,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import Flexbox from 'flexbox-react';

const MenuItem = ({
  to,
  text,
  onClick,
}) => (
  <Flexbox
    style={{
      width: 100,
      height: 50,
      backgroundColor: 'green',
    }}
  >
    <Link to={to}>
      <div
        onClick={onClick}
        onKeyPress={() => {}}
        role="menuitem"
        tabIndex={0}
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
  onClick: PropTypes.func.isRequired,
};

export default MenuItem;

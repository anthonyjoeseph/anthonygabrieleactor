import React from 'react';
import Flexbox from 'flexbox-react';
import PropTypes from 'prop-types';
import ScreenSizes from '../../ScreenSizes';

const Block = ({
  screenSize,
  children,
}) => {
  let width = '';
  if (screenSize === ScreenSizes.MOBILE) {
    width = '70%';
  } else if (screenSize === ScreenSizes.LITTLE_SCREEN) {
    width = '200px';
  } else {
    width = '400px';
  }
  return (
    <Flexbox
      flexDirection="row"
      justifyContent="center"
    >
      <div
        style={{
          backgroundColor: 'rgb(100, 100, 100)',
          borderStyle: 'solid',
          borderWidth: 3,
          borderColor: 'rgb(200, 200, 200)',
          borderRadius: 10,
          padding: 20,
          width,
        }}
      >
        {children}
      </div>
    </Flexbox>
  );
};
Block.propTypes = {
  screenSize: PropTypes.number.isRequired,
  children: PropTypes.node,
};
Block.defaultProps = {
  children: <div />,
};
export default Block;

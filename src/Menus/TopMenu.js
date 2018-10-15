import React from 'react';
import Flexbox from 'flexbox-react';
import PropTypes from 'prop-types';
import ScreenSizes from '../ScreenSizes';
import MenuItem from './MenuItem';
import VerticalBar from './VerticalBar';

const TopMenu = ({
  screenSize,
}) => {
  if (screenSize === ScreenSizes.LITTLE_SCREEN) {
    return (
      <Flexbox
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <FirstRow
          screenSize={screenSize}
        />
        <SecondRow
          screenSize={screenSize}
        />
      </Flexbox>
    );
  }
  return (
    <Flexbox
      flexDirection="row"
      justifyContent="center"
      alignItems="flex-end"
    >
      <FirstRow
        screenSize={screenSize}
      />
      <VerticalBar />
      <SecondRow
        screenSize={screenSize}
      />
    </Flexbox>
  );
};
TopMenu.propTypes = {
  screenSize: PropTypes.number.isRequired,
};

export default TopMenu;

const FirstRow = ({
  screenSize,
}) => (
  <Flexbox
    flexDirection="row"
    justifyContent="center"
    alignItems="flex-end"
  >
    <MenuItem
      screenSize={screenSize}
      to="/home"
      text="home"
    />
    <VerticalBar
      screenSize={screenSize}
    />
    <MenuItem
      screenSize={screenSize}
      to="/news"
      text="news"
    />
    <VerticalBar
      screenSize={screenSize}
    />
    <MenuItem
      screenSize={screenSize}
      to="/resume"
      text="resume"
    />
  </Flexbox>
);
FirstRow.propTypes = {
  screenSize: PropTypes.number.isRequired,
};

const SecondRow = ({
  screenSize,
}) => (
  <Flexbox
    flexDirection="row"
    justifyContent="center"
    alignItems="flex-end"
  >
    <MenuItem
      screenSize={screenSize}
      to="/media"
      text="media"
    />
    <VerticalBar
      screenSize={screenSize}
    />
    <MenuItem
      screenSize={screenSize}
      to="/gallery"
      text="gallery"
    />
    <VerticalBar
      screenSize={screenSize}
    />
    <MenuItem
      screenSize={screenSize}
      to="/contact"
      text="contact"
    />
  </Flexbox>
);
SecondRow.propTypes = {
  screenSize: PropTypes.number.isRequired,
};

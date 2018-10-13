import React from 'react';
import Flexbox from 'flexbox-react';

import MenuItem from './MenuItem';
import VerticalBar from './VerticalBar';

const TopMenu = () => (
  <Flexbox
    flexDirection="row"
    justifyContent="center"
    alignItems="flex-end"
  >
    <MenuItem
      to="/home"
      text="home"
    />
    <VerticalBar />
    <MenuItem
      to="/news"
      text="news"
    />
    <VerticalBar />
    <MenuItem
      to="/resume"
      text="resume"
    />
    <VerticalBar />
    <MenuItem
      to="/media"
      text="media"
    />
    <VerticalBar />
    <MenuItem
      to="/gallery"
      text="gallery"
    />
    <VerticalBar />
    <MenuItem
      to="/contact"
      text="contact"
    />
  </Flexbox>
);

export default TopMenu;

import React, { Component } from 'react';
import {
  Route,
  Link
} from 'react-router-dom';
import Flexbox from 'flexbox-react';

import MenuItem from './MenuItem';

const TopMenu  = () => (
  <Flexbox
   flexDirection="row"
   justifyContent="flex-end"
   alignItems="flex-end"
   style={{
     backgroundColor: 'red'
   }}
  >
    <MenuItem
      to="/home"
      text="home"
    />
    <MenuItem
      to="/news"
      text="news"
    />
    <MenuItem
      to="/resume"
      text="resume"
    />
    <MenuItem
      to="/media"
      text="media"
    />
    <MenuItem
      to="/gallery"
      text="gallery"
    />
    <MenuItem
      to="/contact"
      text="contact"
    />
  </Flexbox>
);

export default TopMenu;
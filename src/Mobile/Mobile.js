import React, { Component } from 'react';
import {
  Route,
  Link
} from 'react-router-dom';

import {screenSizes} from '../App';

import BurgerMenu from '../Menus/BurgerMenu';
import AllSections from '../Sections/AllSections';

const Mobile = () => (
  <div>
    <BurgerMenu/>
    <p>
      Mobile
    </p>
    <AllSections
      screenSize={screenSizes.MOBILE} 
    />
  </div>
);

export default Mobile;

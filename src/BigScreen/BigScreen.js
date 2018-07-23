import React, { Component } from 'react';
import {
  Route,
  Link
} from 'react-router-dom';

import { screenSizes } from '../App';

import TopMenu from '../Menus/TopMenu';
import AllSections from '../Sections/AllSections'

const BigScreen = () => (
  <div>
    <p>
      Big Screen
    </p>
    <TopMenu/>
    <AllSections
      screenSize={screenSizes.BIG_SCREEN} 
    />
  </div>
);

export default BigScreen;

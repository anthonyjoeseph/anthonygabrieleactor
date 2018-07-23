import React, { Component } from 'react';
import {
  Route,
  Link
} from 'react-router-dom';

import {screenSizes} from '../App';

import TopMenu from '../Menus/TopMenu';
import AllSections from '../Sections/AllSections';

const LittleScreen = () => (
  <div>
    <p>
      Little Screen
    </p>
    <TopMenu/>
    <AllSections
      screenSize={screenSizes.LITTLE_SCREEN} 
    />
  </div>
);

export default LittleScreen;

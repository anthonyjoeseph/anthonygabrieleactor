import React, { Component } from 'react';
import {screenSizes, screenSizeToText} from '../App';

const Home  = ({
  screenSize
}) => (
  <div>
    {screenSizeToText[screenSize]} home
  </div>
);

export default Home;
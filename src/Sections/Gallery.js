import React, { Component } from 'react';
import {screenSizes, screenSizeToText} from '../App';

const Gallery  = ({
  screenSize
}) => (
  <div>
    {screenSizeToText[screenSize]} gallery
  </div>
);

export default Gallery;
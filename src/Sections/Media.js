import React, { Component } from 'react';
import {screenSizes, screenSizeToText} from '../App';

const Media  = ({
  screenSize
}) => (
  <div>
    {screenSizeToText[screenSize]} media
  </div>
);

export default Media;
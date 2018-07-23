import React, { Component } from 'react';
import {screenSizes, screenSizeToText} from '../App';

const Resume  = ({
  screenSize
}) => (
  <div>
    {screenSizeToText[screenSize]} resume
  </div>
);

export default Resume;
import React, { Component } from 'react';
import {screenSizes, screenSizeToText} from '../App';

const News  = ({
  screenSize
}) => (
  <div>
    {screenSizeToText[screenSize]} news
  </div>
);

export default News;
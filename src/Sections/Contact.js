import React, { Component } from 'react';
import {screenSizes, screenSizeToText} from '../App';

const Contact  = ({
  screenSize
}) => (
  <div>
    {screenSizeToText[screenSize]} contact
  </div>
);

export default Contact;
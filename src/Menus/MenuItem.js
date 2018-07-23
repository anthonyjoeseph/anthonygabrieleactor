import React, { Component } from 'react';
import {
  Route,
  Link
} from 'react-router-dom';
import Flexbox from 'flexbox-react';

const MenuItem = ({
  to,
  text
}) => (
  <Flexbox
    style={{
      width: 150,
      height: 100,
      backgroundColor: 'green'
    }}
  >
    <Link to={to}>
      <div
        style={{
          fontSize: 30
        }}
      >
        {text}
      </div>
    </Link>
  </Flexbox>
);

export default MenuItem;
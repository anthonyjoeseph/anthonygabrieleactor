import React, { Component } from 'react';
import {
  Route,
  Link
} from 'react-router-dom';
import Flexbox from 'flexbox-react';

const MenuItem = ({
  to,
  text,
  onClick
}) => (
  <Flexbox
    style={{
      width: 100,
      height: 50,
      backgroundColor: 'green'
    }}
  >
    <Link to={to}>
      <div
        onClick={onClick}
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
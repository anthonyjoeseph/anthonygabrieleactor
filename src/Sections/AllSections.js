import React from 'react';
import {
  Route,
} from 'react-router-dom';
import PropTypes from 'prop-types';

import Home from './Home';
import Contact from './Contact';
import Gallery from './Gallery';
import Media from './Media';
import News from './News/News';
import Resume from './Resume';

const AllSections = ({
  screenSize,
}) => (
  <div>
    <Route
      path="/home"
      render={() => (
        <Home
          screenSize={screenSize}
        />
      )}
    />
    <Route
      path="/news"
      render={() => (
        <News
          screenSize={screenSize}
        />
      )}
    />
    <Route
      path="/resume"
      render={() => (
        <Resume
          screenSize={screenSize}
        />
      )}
    />
    <Route
      path="/media"
      render={() => (
        <Media
          screenSize={screenSize}
        />
      )}
    />
    <Route
      path="/gallery"
      render={() => (
        <Gallery
          screenSize={screenSize}
        />
      )}
    />
    <Route
      path="/contact"
      render={() => (
        <Contact
          screenSize={screenSize}
        />
      )}
    />
  </div>
);
AllSections.propTypes = {
  screenSize: PropTypes.number.isRequired,
};

export default AllSections;

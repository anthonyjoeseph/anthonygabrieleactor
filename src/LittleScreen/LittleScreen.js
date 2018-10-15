import React from 'react';
import screenSizes from '../ScreenSizes';

import TopMenu from '../Menus/TopMenu';
import AllSections from '../Sections/AllSections';

const LittleScreen = () => (
  <div>
    <p
      style={{
        textAlign: 'center',
        fontSize: 40,
      }}
    >
      Anthony Gabriele
    </p>
    <TopMenu
      screenSize={screenSizes.LITTLE_SCREEN}
    />
    <AllSections
      screenSize={screenSizes.LITTLE_SCREEN}
    />
  </div>
);

export default LittleScreen;

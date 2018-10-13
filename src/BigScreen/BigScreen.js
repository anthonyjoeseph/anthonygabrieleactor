import React from 'react';
import FlexBox from 'flexbox-react';

import screenSizes from '../ScreenSizes';
import TopMenu from '../Menus/TopMenu';
import AllSections from '../Sections/AllSections';

const BigScreen = () => (
  <div
    style={{
      fontSize: 40,
      textAlign: 'center',
    }}
  >
    <FlexBox>
      <div
        style={{ width: 50 }}
      />
      <p>
        Anthony Gabriele
      </p>
      <TopMenu />
    </FlexBox>
    <AllSections
      screenSize={screenSizes.BIG_SCREEN}
    />
  </div>
);

export default BigScreen;

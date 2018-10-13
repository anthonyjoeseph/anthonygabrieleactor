import React from 'react';
import FlexBox from 'flexbox-react';

import screenSizes from '../ScreenSizes';
import BurgerMenu from '../Menus/BurgerMenu';
import AllSections from '../Sections/AllSections';

const Mobile = () => (
  <div>
    <BurgerMenu />
    <FlexBox
      flexDirection="row"
    >
      <div
        style={{ width: 20 }}
      />
      <p
        style={{
          fontSize: 30,
          textAlign: 'left',
        }}
      >
        Anthony Gabriele
      </p>
    </FlexBox>
    <AllSections
      screenSize={screenSizes.MOBILE}
    />
  </div>
);

export default Mobile;

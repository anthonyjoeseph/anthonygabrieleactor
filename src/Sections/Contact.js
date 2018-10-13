import React from 'react';
import FlexBox from 'flexbox-react';

const Contact = () => (
  <FlexBox
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
    style={{
      fontSize: 30,
    }}
  >
    {'Email at:'}
    <FlexBox
      flexDirection="row"
      justifyContent="center"
    >
      <a
        style={{
          fontSize: 20,
        }}
        href="mailto:anthony@anthonygabrieleactor.com"
      >
        anthony@anthonygabrieleactor.com
      </a>
    </FlexBox>
  </FlexBox>
);

export default Contact;

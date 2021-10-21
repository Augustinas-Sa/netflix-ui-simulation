import React from 'react';
import Button from '../Button/Button';
import {
  StyledCTA,
  StyledImg,
  StyledImg1,
  StyledDiv,
  StyledH3,
} from './CTA.style';

const CTA = () => {
  return (
    <StyledCTA>
      <StyledImg></StyledImg>
      <StyledDiv>
        <StyledH3>Get in touch with us for your service related query</StyledH3>
        <Button text='Contact Us' secondary large right />
      </StyledDiv>
      <StyledImg1></StyledImg1>
    </StyledCTA>
  );
};

export default CTA;

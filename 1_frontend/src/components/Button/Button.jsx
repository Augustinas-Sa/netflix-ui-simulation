import React from 'react';
import { StyledButton } from './Button.style';

const Button = ({ text, action, primary, secondary, medium, large, basic, right }) => {
  return (
    <StyledButton onClick={action} primary={primary} secondary={secondary} medium={medium} large={large} basic={basic} right={right}>
      {text}
    </StyledButton>
  );
};

export default Button;

import React from 'react';
import { StyledButton } from './Button.style';

const Button = ({ text, action, primary, secondary }) => {
  return (
    <StyledButton onClick={action} primary={primary} secondary={secondary}>
      {text}
    </StyledButton>
  );
};

export default Button;

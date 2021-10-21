import styled from 'styled-components';

export const StyledButton = styled.button`
  border: none;
  padding: ${(props) =>
    props.medium ? '10px 15px' : props.large ? '15px 40px' : '10px 15px'};

  background-color: ${(props) =>
    props.primary ? '#ff6433' : props.secondary ? '#1e1b1b' : '#ff6433'};

  margin: ${(props) =>
    props.basic ? '0px' : props.right ? '0px 490px 0px 0px' : '0px'};

  color: white;

  font-family: 'Manrope', sans-serif;

  border-radius: 12px;

  &:hover {
    opacity: 0.85;
    cursor: pointer;
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;

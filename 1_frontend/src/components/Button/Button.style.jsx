import styled from 'styled-components';

export const StyledButton = styled.button`
  border: none;
  padding: 10px 15px;

  background-color: ${(props) =>
    props.primary ? '#ff6433' : props.secondary ? '#1e1b1b' : '#ff6433'};

  color: white;

  &:hover {
    opacity: 0.85;
    cursor: pointer;
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;

import styled from 'styled-components';

export const Nav = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;
  width: 100%;
`;

export const Logo = styled.div`
  margin-left: 200px;
  padding: 20px;
`;

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 200px;
`;

export const Li = styled.li`
  margin-right: 20px;
  color: rgb(61, 61, 61);
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Manrope', sans-serif;
`;

export const Assistance = styled.div`
  display: flex;
  align-items: center;
  width: 300px;
  margin-left: 20px;
`;

export const AssistanceIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #61c4a1;
  margin-right: 10px;
`;

export const StyledP = styled.p`
  font-family: 'Manrope', sans-serif;
`;

export const StyledPRoad = styled.p`
  font-family: 'Manrope', sans-serif;
  font-weight: 500;
`;

export const StyledPPhone = styled.p`
  font-family: 'Manrope', sans-serif;
  font-weight: 600;
`;

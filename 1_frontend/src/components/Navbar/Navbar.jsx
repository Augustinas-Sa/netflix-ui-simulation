import React from 'react';
import {
  Nav,
  Logo,
  Ul,
  Li,
  Assistance,
  AssistanceIcon,
  StyledP,
  StyledPRoad,
  StyledPPhone,
} from './Navbar.style';
import { FaPhoneAlt } from 'react-icons/fa';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <Nav>
        <Logo>
          <StyledP>finsweep</StyledP>
        </Logo>
        <nav>
          <Ul>
            <Li>
              <Link
                to='/'
                style={{
                  color: '#000',
                  textDecoration: 'none',
                  fontFamily: "'Manrope', sans-serif",
                }}
              >
                Home
              </Link>
            </Li>
            <Li>
              <Link
                to='/about'
                style={{
                  color: '#000',
                  textDecoration: 'none',
                  fontFamily: "'Manrope', sans-serif",
                }}
              >
                About us
              </Link>
            </Li>
            <Li>
              <Link
                to='/services'
                style={{
                  color: '#000',
                  textDecoration: 'none',
                  fontFamily: "'Manrope', sans-serif",
                }}
              >
                Services
              </Link>
            </Li>
            <Li>
              <Link
                to='/blog'
                style={{
                  color: '#000',
                  textDecoration: 'none',
                  fontFamily: "'Manrope', sans-serif",
                }}
              >
                Blog
              </Link>
            </Li>
            <Li>
              <Link
                to='/contact'
                style={{
                  color: '#000',
                  textDecoration: 'none',
                  fontFamily: "'Manrope', sans-serif",
                }}
              >
                Contact
              </Link>
            </Li>
            <p>|</p>
            <Assistance>
              <AssistanceIcon>
                <FaPhoneAlt className='phone-alt' />
              </AssistanceIcon>
              <div>
                <StyledPRoad>Road Assistance</StyledPRoad>
                <StyledPPhone>1800 265 24 52</StyledPPhone>
              </div>
            </Assistance>
          </Ul>
        </nav>
      </Nav>
    </header>
  );
};

export default Navbar;



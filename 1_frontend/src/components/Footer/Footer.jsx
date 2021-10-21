import React from 'react';
import {
  StyledFooter,
  StyledFooterTop,
  StyledFooterBottom,
  StyledH3,
  StyledFooterLeft,
  StyledIconsDiv,
  StyledFacebookIcon,
  StyledTwitterIcon,
  StyledInstagramIcon,
  StyledLinkedinIcon,
  StyledTextDiv,
  StyledP1,
  StyledP2,
  StyledFooterRight,
  Logo,
  Ul,
  Li,
  StyledP,
  StyledCopyrightDiv,
  StyledCopyrightP,
} from './Footer.style';
import {
  FaFacebook,
  FaTwitter,
  FaInstagramSquare,
  FaLinkedin,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <StyledFooter>
      <StyledFooterTop>
        <StyledFooterLeft>
          <StyledH3>Get in touch with us for your service</StyledH3>
          <StyledIconsDiv>
            <StyledFacebookIcon>
              <FaFacebook />
            </StyledFacebookIcon>
            <StyledTwitterIcon>
              <FaTwitter />
            </StyledTwitterIcon>
            <StyledInstagramIcon>
              <FaInstagramSquare />
            </StyledInstagramIcon>
            <StyledLinkedinIcon>
              <FaLinkedin />
            </StyledLinkedinIcon>
          </StyledIconsDiv>
        </StyledFooterLeft>
        <StyledFooterRight>
          <StyledTextDiv>
            <StyledP1>Help Line Number</StyledP1>
            <StyledP2>1800 265 24 52</StyledP2>
          </StyledTextDiv>
          <StyledTextDiv>
            <StyledP1>Address</StyledP1>
            <StyledP2>NH234 Public Square San Francisco 65368</StyledP2>
          </StyledTextDiv>
          <StyledTextDiv>
            <StyledP1>We are open</StyledP1>
            <StyledP2>Monday to Friday 9:00 AM to 10:00 AM</StyledP2>
          </StyledTextDiv>
        </StyledFooterRight>
      </StyledFooterTop>
      <StyledFooterBottom>
        <Logo>
          <StyledP>finsweep</StyledP>
        </Logo>
        <div>
          <Ul>
            <Li>
              <Link
                to='/'
                style={{
                  color: '#ffffff',
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
                  color: '#ffffff',
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
                  color: '#ffffff',
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
                  color: '#ffffff',
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
                  color: '#ffffff',
                  textDecoration: 'none',
                  fontFamily: "'Manrope', sans-serif",
                }}
              >
                Contact us
              </Link>
            </Li>
          </Ul>
        </div>
        <StyledCopyrightDiv>
          <StyledCopyrightP>@ Copyright Finsweet 2021</StyledCopyrightP>
        </StyledCopyrightDiv>
      </StyledFooterBottom>
    </StyledFooter>
  );
};

export default Footer;

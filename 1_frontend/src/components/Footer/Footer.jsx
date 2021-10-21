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
} from './Footer.style';
import {
  FaFacebook,
  FaTwitter,
  FaInstagramSquare,
  FaLinkedin,
} from 'react-icons/fa';

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
        <div></div>
        <div></div>
      </StyledFooterBottom>
    </StyledFooter>
  );
};

export default Footer;

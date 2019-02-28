import React from "react";
import styled from 'styled-components';

const FooterContainer = styled.footer`
  margin-left: 2%;
`;
const FooterP = styled.p`
  color: black;
`;

const Footer = () => (
  <FooterContainer>
    <FooterP>© 2019 Awesome Blog. All rights reserved - version 1.0</FooterP>
  </FooterContainer>
);

export default Footer;

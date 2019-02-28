import React from "react";
import styled from 'styled-components';

const HeaderDiv = styled.div`
  text-align: center;
`;

const HeaderH1 = styled.h1`
  color: #2196F3
`

const HeaderText = ({ text }) => (
  <HeaderDiv>
    <HeaderH1>{text}</HeaderH1>
  </HeaderDiv>
)

export default HeaderText;

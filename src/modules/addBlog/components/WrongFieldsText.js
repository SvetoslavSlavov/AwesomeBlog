import React from "react";
import styled from 'styled-components';

const WrongFiledP = styled.p`
    color: red;
`

const WrongFieldsText = ({ text }) => (
    <WrongFiledP>
        {text}
     </WrongFiledP>
)

export default WrongFieldsText;

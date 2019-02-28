import styled from 'styled-components';

const MainButton = styled.button`
    background: ${props => props.primary ? "#2196F3;" : "white"};
    color: ${props => props.primary ? "white" : "#2196F3;"};
    font-size: 1em;
    margin: 1em;
    width: 30%;
    height: 20%;
    padding: 2%;
    border: 2px solid #2196F3;
    border-radius: 3px;
    &:hover {
    background-color: #f1f1f1;
    cursor: pointer;
    color: ${props => props.primary ? "#2196F3" : "white"};
    background: ${props => props.primary ? "white" : "#2196F3"};
`;

export default MainButton;

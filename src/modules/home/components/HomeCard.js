import React from "react";
import styled from 'styled-components';
import MainButton from '../../../common/buttons/MainButton';

const CardRow = styled.div`
    margin: 2% 10% 0 10%;
    &:after {
        content: "";
        display: table;
        clear: both;
    }
`;

const Card = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    padding: 16px;
    text-align: center;
    background-color: #f1f1f1;
`;

const CardP = styled.p`
    padding: 16px;
`;

const CardH3 = styled.h3`
    padding: 16px;
`;

const HomeCard = ({ title, created, text, author, pressFavorites, textFavorites, textDelete, pressDelete }) =>
(
    <CardRow>
        <Card>
            <CardH3>{title}</CardH3>
            <CardP>{created}</CardP>
            <CardP>{text}</CardP>
            <CardP>{author}</CardP>
            <MainButton primary onClick={pressFavorites}>{textFavorites === true ? 'Remove from favorites' : 'Add to favorites'}</MainButton>
            <MainButton onClick={pressDelete}>{textDelete}</MainButton>
        </Card>
    </CardRow>
);


export default HomeCard;

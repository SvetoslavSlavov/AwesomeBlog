import React from 'react';
import styled from 'styled-components';
import MainButton from '../../../common/buttons/MainButton';

const CardsRow = styled.div`
  margin: 2% 10% 0 10%;
  &:after {
    content: '';
    display: table;
    clear: both;
  }
`;

const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 16px;
  text-align: center;
  background-color: #f1f1f1;
  margin: 5%;
`;

const CardP = styled.p`
  padding: 16px;
`;

const CardH3 = styled.h3`
  padding: 16px;
`;

const HomeCards = ({ posts, pressFavorites, pressDelete, textDelete }) => (
  <CardsRow>
    {posts.map((post, index) => {
      const { title, created, text, author, id, isFavorite } = post;
      return (
        <Card key={id}>
          <CardH3>{title}</CardH3>
          <CardP>{created}</CardP>
          <CardP>{text}</CardP>
          <CardP>{author}</CardP>
          <MainButton primary onClick={() => pressFavorites(isFavorite, index)}>
            {isFavorite ? 'Remove from favorites' : 'Add to favorites'}
          </MainButton>
          <MainButton onClick={() => pressDelete(index)}>
            {textDelete}
          </MainButton>
        </Card>
      );
    })}
  </CardsRow>
);

export default HomeCards;

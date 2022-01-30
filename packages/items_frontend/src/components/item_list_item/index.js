import React from 'react';
import styled from 'styled-components';
import { Link, useRouteMatch } from 'react-router-dom';
import AsyncLoader from '../async_loader';

const CardContainer = React.lazy(() => import('shared_frontend/CardContainer'));
const Body = React.lazy(() => import('shared_frontend/Body'));


const ItemListItem = ({ item, onAddItem }) => {
  const { url } = useRouteMatch();

  const onAddButtonClick = () => onAddItem(item);

  return (
    <AsyncLoader noLoading>
      <ItemListItemLayout>
        <Link to={`${url}/details/${item.id}`}>
          <StyledImg src={item.imgUrl} />
        </Link>
        <CardContainer horizontal noPadding>
          <InfoContainer>
            <ItemListItemHeader>{item.name}</ItemListItemHeader>
            <Body>{item.price}</Body>
          </InfoContainer>
          <ButtonContainer>
            <AddToCartButton onClick={onAddButtonClick}>
              +
            </AddToCartButton>
          </ButtonContainer>
        </CardContainer>
      </ItemListItemLayout>
    </AsyncLoader>
  );
};


const ItemListItemHeader = styled.h1`
  font-size: 1.6rem;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  color: #ffffff;
`;

const AddToCartButton = styled.button`
  color: #fff;
  background-color: #215b63;
  padding: 10px 20px;
  border: none;
  border-radius: 50%;
  font-size: 2rem;
  cursor: pointer;
  height: 62px;
  width: 62px;
`;  

const ItemListItemLayout = styled.div`
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  height: 500px;
  background-color: #5fcc9c;
  border-radius: 10px;
`;

const StyledImg = styled.img`
  height: 350px;
  width: 100%;
  object-fit: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const InfoContainer = styled.div`
  flex: 2;
  padding: 0 30px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export default ItemListItem;

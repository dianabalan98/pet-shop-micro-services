import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import useItems from '../../hooks/useItems';

import AsyncLoader from '../async_loader';


const Wrapper = React.lazy(() => import('shared_frontend/Wrapper'));

const ItemDetails = ({ itemsInCart, setItemsInCart, setNotification }) => {
  const { itemId } = useParams();
  const history = useHistory();

  const items = useItems();
  const item = items.find(item => item.id === Number(itemId));

  const onAddButtonClick = () => {
    setItemsInCart([...itemsInCart, item]);
    setNotification({ type: 'success', message: 'Item added to cart!' });
    history.push('/items');
  }

  return (
    <AsyncLoader>
      <Wrapper>
        {item && <ItemDetailsLayout>
          <StyledImg src={item.imgUrl} />
          <TextDetailsLayout>
            <ItemDetailsHeader>{item.name}</ItemDetailsHeader>
            <ItemDetailsDescription>{item.description}</ItemDetailsDescription>
            <ItemDetailsPrice>{item.price}</ItemDetailsPrice>
            <AddToCartButton onClick={onAddButtonClick}>
              Add item to cart
            </AddToCartButton>
          </TextDetailsLayout>
        </ItemDetailsLayout>}
      </Wrapper>
    </AsyncLoader>
  );
};


const ItemDetailsHeader = styled.h1`
  font-size: 2rem;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  color: #232855;
`;

const ItemDetailsPrice = styled.p`
  font-size: 1.6rem;
  margin-block-start: 0.5rem;
  margin-block-end: 0.5rem;
  margin-bottom: 40px;
  color: #232855;
`;

const ItemDetailsDescription = styled.p`
  font-size: 1rem;
  margin-block-start: 0.5rem;
  margin-block-end: 0.5rem;
  text-align: justify;
  margin-bottom: 30px;
  color: #232855;
`;


const TextDetailsLayout = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 0 60px;
  align-items: center;
  @media (max-width: 890px) {
    padding: 30px;
  }
`;

const AddToCartButton = styled.button`
  color: #fff;
  background-color: #215b63;
  padding: 10px 20px;
  border: none;
  border-radius: 2rem;
  font-size: 1.6rem;
  cursor: pointer;
  height: 62px;
  width: 50%;
`;  

const ItemDetailsLayout = styled.div`
  display: flex;
  margin-top: 2rem;
  margin-bottom: 4rem;
  flex-direction: column;
  align-items: center;
`;

const StyledImg = styled.img`
  width: 635px;
  height: 340px;
  object-fit: cover;
  border-radius: 2rem;
`;

export default ItemDetails;

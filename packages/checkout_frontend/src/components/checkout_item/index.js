import React from 'react';
import styled from 'styled-components';

const CardContainer = React.lazy(() => import('shared_frontend/CardContainer'));
const Body = React.lazy(() => import('shared_frontend/Body'));

const CheckoutItem = ({ item }) => {
  return (
    <CheckoutItemLayout>
      <StyledImg src={item.imgUrl} />
      <CardContainer style={{ justifyContent: 'center'}}>
        <Body>{item.name}</Body>
        <Body>{item.price}</Body>
      </CardContainer>
    </CheckoutItemLayout>
  );
};

const CheckoutItemLayout = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;
  border-radius: 2rem;
  background-color: #5fcc9c;
`;

const StyledImg = styled.img`
  height: 150px;
  width: 180px;
  object-fit: cover;
  border-top-left-radius: 2rem;
  border-bottom-left-radius: 2rem;
`;

export default CheckoutItem;

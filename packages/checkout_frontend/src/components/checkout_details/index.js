import React from 'react';
import styled from 'styled-components';
import AsyncLoader from '../async_loader';
import CheckoutItem from '../checkout_item';

const Wrapper = React.lazy(() => import('shared_frontend/Wrapper'));
const Header = React.lazy(() => import('shared_frontend/Header'));

const CheckoutDetails = ({ itemsInCart, setItemsInCart, setNotification }) => {
  const onPurchaseClick = () => {
    fetch('http://localhost:8002', {method: 'POST', body: JSON.stringify(itemsInCart)})
     .then(
        response => {
          return response.json();
        })
     .then(_ => {
        setItemsInCart([]);
        setNotification({ type: 'success', message: 'Thank you!' });
      })
     .catch(error => {
        setNotification({ type: 'error', message: 'An error has occured!' });
      }); 
  }

  return (
    <AsyncLoader>
      <Wrapper>
        <CheckoutDetailsLayout>
          {itemsInCart.map((item) => <CheckoutItem key={item.name} item={item} />)}
          {itemsInCart.length === 0 && (
            <Header style={{ textAlign: 'center', marginTop: '5rem' }}>You have no items in your cart!</Header>
          )}
          {itemsInCart.length > 0 && (
            <PurchaseButton onClick={onPurchaseClick}>
              Purchase items
            </PurchaseButton>
          )}
        </CheckoutDetailsLayout>
      </Wrapper>
    </AsyncLoader>
  );
};

const PurchaseButton = styled.button`
  color: #fff;
  background-color: #215b63;
  padding: 10px 20px;
  border: none;
  border-radius: 2rem;
  font-size: 1.6rem;
  cursor: pointer;
  height: 62px;
  width: 50%;
  align-self: center;
`;  


const CheckoutDetailsLayout = styled.div`
  margin: 30px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default CheckoutDetails;

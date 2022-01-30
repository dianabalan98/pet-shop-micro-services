import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import CartSvg from '../../assets/cart.svg';

const CheckoutCart = ({ itemsInCart }) => {
  return (
    <CheckoutCartLayout>
      <StyledLink to="/checkout">
        <StyledIcon src={CartSvg} alt="cart logo"/>
        {itemsInCart.length > 0 && <NumberOfItems>{itemsInCart.length}</NumberOfItems>}
      </StyledLink>
    </CheckoutCartLayout>
  );
};

const CheckoutCartLayout = styled.div`
  display: flex;
  width: 100px;
  height: 100px;
`;

const StyledLink = styled(Link)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  height: 100%;
  width: 100%;
  text-align: center;
`;

const StyledIcon = styled.img`
  height: 60px;
  width: 60px;
`;

const NumberOfItems = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  color: #fff;
  top: 25%;
  left: 70%;
  transform: translateX(-30%);
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background-color: #232855;
`;

export default CheckoutCart;

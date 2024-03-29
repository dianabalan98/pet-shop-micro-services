import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import AsyncLoader from '../async_loader';

const Wrapper = React.lazy(() => import('shared_frontend/Wrapper'));
const CheckoutCart = React.lazy(() => import('checkout_frontend/CheckoutCart'));

const Navbar = ({ itemsInCart }) => {
  return (
    <Nav>
      <AsyncLoader>
        <Wrapper>
          <NavbarLayout>
            <LinksWrapper>
              <StyledNavbarLink to="/items">PetLand</StyledNavbarLink>
            </LinksWrapper>
            <CheckoutCart itemsInCart={itemsInCart} />
          </NavbarLayout>
        </Wrapper>
      </AsyncLoader>
    </Nav>
  );
};

const Nav = styled.nav`
  height: 100px;
  background-color: #215b63;
`;

const NavbarLayout = styled.div`
  height: 100px;
  display: flex;
  flex-direction: row;
`;

const LinksWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

const StyledNavbarLink = styled(Link)`
  position: relative;
  color: #ffffff;
  font-size: 1.5rem;
  margin-right: 30px;
  text-decoration: none;
  &:after {
    content: ' ';
    transition: opacity 200ms;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -15%;
    opacity: 0;
    height: 3px;
    width: 80%;
    background-color: #ffffff;
  }
  &:hover {
    &:after {
      opacity: 1;
    }
  }
`;

export default Navbar;

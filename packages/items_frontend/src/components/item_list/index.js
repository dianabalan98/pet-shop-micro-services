import React from 'react';
import styled from 'styled-components';
import ItemListItem from '../item_list_item';
import AsyncLoader from '../async_loader';
import useItems from '../../hooks/useItems';

const Wrapper = React.lazy(() => import('shared_frontend/Wrapper'));

const ItemList = ({ itemsInCart, setItemsInCart, setNotification }) => {
  const items = useItems();

  const itemsAvailable = items.filter(item => !itemsInCart.find(itemInCart => itemInCart.id === item.id));

  const onAddItem = (itemToAdd) => {
    setItemsInCart([...itemsInCart, itemToAdd]);
    setNotification({ type: 'success', message: 'Item added to cart!' });
  }

  return (
    <AsyncLoader>
      <Wrapper>
        <ItemListLayout>
          {
            itemsAvailable.map(item =>
              <ItemListItem
                key={item.name}
                item={item}
                onAddItem={onAddItem}
              />
            )
          }
        </ItemListLayout>
      </Wrapper>
    </AsyncLoader>
  );
};

const ItemListLayout = styled.div`
  padding: 30px 0;
  display: grid; 
  grid-template-columns: 1fr 1fr;
  gap: 0px 40px; 
`;

export default ItemList;

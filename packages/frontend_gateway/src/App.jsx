import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Navbar from './components/navbar';
import AsyncLoader from './components/async_loader';
import GlobalState from './components/global_state';

const ItemRoutes = React.lazy(() => import('items_frontend/Routes'));
const CheckoutRoutes = React.lazy(() => import('checkout_frontend/Routes'));

ReactDOM.render(
  <Router>
    <GlobalState>
      {(itemsInCart, setItemsInCart, setNotification) => (
        <>
          <Navbar itemsInCart={itemsInCart} />
          <Switch>
            <Route path="/checkout">
              <AsyncLoader>
                <CheckoutRoutes
                  itemsInCart={itemsInCart}
                  setItemsInCart={setItemsInCart}
                  setNotification={setNotification}
                />
              </AsyncLoader>
            </Route>
            <Route path="/items">
              <AsyncLoader>
                <ItemRoutes
                  itemsInCart={itemsInCart}
                  setItemsInCart={setItemsInCart}
                  setNotification={setNotification}
                />
              </AsyncLoader>
            </Route>
            <Redirect to="/items" from="/" />
          </Switch>
        </>
      )}
    </GlobalState>
  </Router>
  , document.getElementById('app'),
);

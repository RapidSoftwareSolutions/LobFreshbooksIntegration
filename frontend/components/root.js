import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './app';
import InvoiceIndexContainer from './invoices/invoice_index_container';


const Root = ({ store }) => (
  <Provider store={ store }>
    <Router history={ browserHistory }>
      <Route path='/' component={ App } >
        <IndexRoute component={ InvoiceIndexContainer } />
      </Route>
    </Router>
  </Provider>
);

export default Root;

import { combineReducers } from 'redux';

import InvoiceReducer from './invoice_reducer';

const rootReducer = combineReducers({
  invoices: InvoiceReducer
});

export default rootReducer;

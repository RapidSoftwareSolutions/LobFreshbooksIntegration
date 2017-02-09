import { RECEIVE_ALL_INVOICES } from '../actions/invoice_actions';

const InvoiceReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_ALL_INVOICES:
      return action.invoices;
    default:
      return state;
  }
};

export default InvoiceReducer;

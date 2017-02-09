import * as APIUtil from '../util/invoice_api_util';

export const RECEIVE_ALL_INVOICES = "RECEIVE_ALL_INVOICES";

export const fetchInvoices = () => dispatch => {
  return APIUtil.fetchInvoices()
    .then(invoices => dispatch(receiveInvoices(invoices)));
};


export const receiveInvoices = invoices => ({
	type: RECEIVE_ALL_INVOICES,
	invoices
});

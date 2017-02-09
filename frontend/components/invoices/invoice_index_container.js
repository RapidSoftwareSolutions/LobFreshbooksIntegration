import { connect } from 'react-redux';
import InvoiceIndex from './invoice_index';
import { fetchInvoices } from '../../actions/invoice_actions';
import { selectAllInvoices } from '../../reducers/selectors';

const mapStateToProps = state => ({
  invoices: selectAllInvoices(state)
});

const mapDispatchToProps = dispatch => ({
  fetchInvoices: () => dispatch(fetchInvoices())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InvoiceIndex);

import React from 'react';
import InvoiceIndexItem from './invoice_index_item';

class InvoiceIndex extends React.Component {
  componentDidMount() {
    this.props.fetchInvoices();
  }

  render() {
    const { invoices } = this.props;
    return (
      <div>
        {invoices.map(invoice => (
          <InvoiceIndexItem invoice={invoice} key={invoice.invoiceid} />
        ))}
      </div>
    );
  }
}

export default InvoiceIndex;

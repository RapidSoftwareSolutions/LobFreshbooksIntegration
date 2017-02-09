import React from 'react';

class InvoiceIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.sendMail = this.sendMail.bind(this);
  }

  sendMail() {
    let invoice = this.props.invoice;
    $.get({
      url: 'lob/send_invoice',
      data: {
        name: invoice.fname + " " + invoice.lname,
        amount: invoice.amount,
        organization: invoice.organization,
        address_line_1: invoice.street,
        city: invoice.city,
        state: invoice.province,
        zip_code: invoice.code,
        country: invoice.country,
        invoice_number: invoice.invoice_number,
        customer_id: invoice.customerid,
        create_date: invoice.create_date,
        lines: invoice.lines
      }
    }).done(function(res) {
      document.getElementById(invoice.invoice_number).style.background = "#33b849";
      document.getElementById(invoice.invoice_number).innerHTML = "Sent!";
      document.getElementById(invoice.invoice_number).disabled = true;
    }).fail(function(res) {
      document.getElementById(invoice.invoice_number).style.background = "#b53838";
      document.getElementById(invoice.invoice_number).innerHTML = "Error";
    });
  }

  render() {
    let invoice = this.props.invoice;
    return (
      <div className='invoice-index-item'>
        <div className='invoice'>
          <div className='invoice-attribute-container'>
            <p className='invoice-attribute'>{invoice.invoice_number}</p>
          </div>
          <div className='invoice-attribute-container'>
            <p className='invoice-attribute'>{invoice.lname}, {invoice.fname}</p>
          </div>
          <div className='invoice-attribute-container'>
            <p className='invoice-attribute'>{invoice.organization}</p>
          </div>
          <div className='invoice-attribute-container'>
            <p className='invoice-attribute'>{invoice.amount.amount} {invoice.amount.code}</p>
          </div>
        </div>
        <div className='lob-attribute-container'>
          <div className='invoice-attribute-container'>
            <p className='invoice-attribute'>{invoice.payment_status}</p>
          </div>
          <div className='invoice-attribute-container'>
            <button className='send-mail-button' id={invoice.invoice_number} onClick={this.sendMail}>Send Mail</button>
          </div>
        </div>
      </div>
    );
  }
}

export default InvoiceIndexItem;

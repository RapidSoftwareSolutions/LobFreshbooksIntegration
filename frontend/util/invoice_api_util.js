export const fetchInvoices = () => {
  return $.get({
    url: 'freshbooks/get_invoices'
  });
};

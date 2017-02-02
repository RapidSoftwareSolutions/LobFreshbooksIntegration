Rails.application.routes.draw do
  root to: 'static_pages#root'

  get 'freshbooks/get_invoices', :to => 'freshbooks#get_invoices'
end

class FreshbooksController < ApplicationController

  def get_invoices
    require 'rapidapisdk'

    ::RapidAPI.config(project: "LobFreshbooks", token: ENV['RAPID_API_APP_KEY'])

    root = ::RapidAPI.call('FreshbooksAPI', 'getInvoices', {
    	'accessToken': ENV['FRESHBOOKS_ACCESS_TOKEN'],
    	'accountId': ENV['FRESHBOOKS_ACCOUNT_ID']
    })

    render json: JSON.pretty_generate(root)
  end
end

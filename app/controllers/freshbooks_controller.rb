class FreshbooksController < ApplicationController

  def get_invoices
    require 'rapidapisdk'

    ::RapidAPI.config(project: "LobFreshbooks", token: ENV['RAPID_API_APP_KEY'])

    root = ::RapidAPI.call('FreshbooksAPI', 'getInvoices', {
    	'accessToken': '#################################',
    	'accountId': '####',
      'include': 'lines'
    })

    render json: JSON.pretty_generate(root['payload']['response']['result']['invoices'])
  end

end

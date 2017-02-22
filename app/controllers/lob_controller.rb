class LobController < ApplicationController
  def send_invoice
    require 'rapidapisdk'

    @params = params
    ::RapidAPI.config(project: "LobFreshbooks", token: "42a3880c-2d5b-4387-90cc-b2912109bdf5")

    Dir.chdir(File.dirname(__FILE__))

    erb_string = File.read('../views/lob/send_invoice.html.erb')

    renderer = ERB.new(erb_string)
    result = renderer.result(binding)

    response = ::RapidAPI.call('Lob', 'createLetter', {
    	'apiKey': 'test_3f9226a73238e5e5fa4714f249fa8bd999f',
    	'letterTo': JSON.generate({
        name: params['name'],
        address_line1: params['address_line_1'],
        address_city: params['city'],
        address_state: Lob.state[params['state'].to_sym],
        address_country: Lob.iso[params['country']],
        address_zip: params['zip_code']
      }),
    	'letterFrom': JSON.generate({
        name: "Dave's Construction",
        address_line1: "600 California St.",
        address_city: 'San Francisco',
        address_state: 'CA',
        address_country: 'US',
        address_zip: '94109'
      }),
    	'color': true,
    	'file': result
    })

    render json: response
  end
end

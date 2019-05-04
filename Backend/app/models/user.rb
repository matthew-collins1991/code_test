require 'pry'

class User < ApplicationRecord
  before_save { self.email = email.downcase }
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  validates :email, presence: true, length: { maximum: 255 },
                    format: { with: VALID_EMAIL_REGEX },
                    uniqueness: { case_sensitive: false }
  validates :name,  presence: true, length: { maximum: 50 }
  validates :business_name,  presence: true, length: { maximum: 50 }
  validates :telephone_number,  presence: true, length: { maximum: 13 }, numericality: { only_integer: true }
  validates :contact_time,  presence: true

  def format_time
    time = self.contact_time.strftime("%F %T")
    return time
  end

  def make_post_req
    # binding.pry
    require 'net/http'
    require 'uri'
    require 'json'
    begin
        uri = URI.parse('http://mic-leads.dev-test.makeiteasy.com/api/v1/create')
        http = Net::HTTP.new(uri.host, uri.port)
        req = Net::HTTP::Post.new(uri.path, {'Content-Type' =>'application/x-www-form-urlencoded', 'Accept' =>'application/json', 'Authorization' => ENV['LEAD_API_ACCESS_TOKEN']} )
        req.body = URI.encode_www_form({
          'access_token'=> ENV['LEAD_API_ACCESS_TOKEN'],
          'pGUID' => ENV['LEAD_API_PGUID'],
          'pAccName' => ENV['LEAD_API_PACCNAME'],
          'pPartner' => ENV['LEAD_API_PPARTNER'],
          'name' => self.name,
          'business_name' => self.business_name,
          'telephone_number' => self.telephone_number,
          'email' => self.email,
          'contact_time' => self.format_time
        })
        res = http.request(req)
        puts req
        puts req.body
        puts res
        puts "response #{res.body}"
        puts JSON.parse(res.body)
    rescue => e
        puts "failed #{e}"
    end
  end
end










#

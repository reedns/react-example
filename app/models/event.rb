class Event < ApplicationRecord
  include PgSearch

  pg_search_scope :search_events,
                  against: [:name, :place, :description],
                  using: [tsearch: { any_word: true, prefix: true }]

  def self.search(query)
    query.present? ? search_events(query) : all.order(:event_date)
  end
end

10.times do |time|
  Event.create(name: "Name #{time}", description: "Event ##{time}", event_date: Time.zone.now + rand(6).weeks, place: 'Seattle, WA')
end

class Todo < ActiveRecord::Base
  scope :title, lambda { |value| where("title LIKE (?)", "%#{value}%") }

  def self.filter(attributes)
    return self.all if attributes.empty?

    supported_filters = [:title]
    attributes.slice(*supported_filters).inject(self) do |scope, (key, value)|
      value.present? ? scope.send(key, value) : scope
    end
  end
end

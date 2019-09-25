class Heroine < ApplicationRecord
  belongs_to :power

  def self.all_heroine_data
    all_data = Heroine.all.map { |heroine| heroine.heroine_data }
  end

  def heroine_data
    heroine_data = {
        id: self.id,
        name: self.name,
        super_name: self.super_name,
        power_id: self.power_id,
        power_name: self.power.name
    }
  end
end

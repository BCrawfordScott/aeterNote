# == Schema Information
#
# Table name: taggings
#
#  note_id    :integer          not null
#  tag_id     :integer          not null
#  created_at :datetime
#  updated_at :datetime
#

class Tagging < ApplicationRecord
  validates :note_id, :tag_id, presence: true

  belongs_to :note
  belongs_to :tag

end

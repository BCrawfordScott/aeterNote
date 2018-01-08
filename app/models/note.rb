# == Schema Information
#
# Table name: notes
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  content     :string
#  user_id     :integer          not null
#  notebook_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Note < ApplicationRecord
  validates :title, :user_id, :notebook_id, presence: true
  validtaes :title, uniquness: {
    scope: :notebook_id,
    message: "already belongs to a note in this notebook."
  }

  belongs_to :user
  belongs_to :notebook
end

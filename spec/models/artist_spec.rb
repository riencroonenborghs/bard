# == Schema Information
#
# Table name: artists
#
#  id            :integer          not null, primary key
#  last_fm_image :string
#  last_fm_mbid  :string
#  last_fm_url   :string
#  name          :string           not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
# Indexes
#
#  index_artists_on_name  (name) UNIQUE
#
require 'rails_helper'

RSpec.describe Artist, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end

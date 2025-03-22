# == Schema Information
#
# Table name: input_sources
#
#  id           :integer          not null, primary key
#  active       :boolean          default(TRUE), not null
#  last_fetched :datetime
#  path         :string           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
# Indexes
#
#  index_input_sources_on_path  (path) UNIQUE
#
require 'rails_helper'

RSpec.describe InputSource, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end

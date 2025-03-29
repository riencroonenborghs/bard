# frozen_string_literal: true

class Levenshtein
  def self.distance(s, t)
    v0 = (0..t.length).to_a
    v1 = []

    s.chars.each_with_index do |s_ch, i|
      v1[0] = i + 1
      t.chars.each_with_index do |t_ch, j|
        cost = s_ch == t_ch ? 0 : 1
        v1[j + 1] = [v1[j] + 1, v0[j + 1] + 1, v0[j] + cost].min
      end
      v0 = v1.dup
    end

    v0[t.length]
  end
end

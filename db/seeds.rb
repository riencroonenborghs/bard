input_source = InputSource.create!(path: "/Users/rien/Downloads/Music")
InputSources::CreateTracks.perform(input_source: input_source)

ap "Artists: #{Artist.count}"
ap "Albums: #{Album.count}"
ap "Tracks: #{Track.count}"
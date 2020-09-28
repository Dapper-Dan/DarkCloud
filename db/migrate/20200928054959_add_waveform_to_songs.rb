class AddWaveformToSongs < ActiveRecord::Migration[5.2]
  def change
    add_column :songs, :waveForm, :string
  end
end

# AudioCloud

An audio platform and music sharing site consisting of listeners and creators. Find new music via navigating to your favorite artist's page or through curated playlists showcasing hot and new tracks. Got the talent for music creation? Upload your best tracks and showcase them to the online community!

### [Live Site](https://myaudiocloud.herokuapp.com/)
![AudioCloud Screen Shot](https://github.com/Dapper-Dan/AudioCloud/blob/master/app/assets/images/WikiScreenShot1.png)
## Technology
- Ruby
- JavaScript
- Ruby on Rails
- React/Redux
- PostgreSQL
- HTML Canvas
- Amazon S3
- AudioContext Web API

### The Crux
The crux of this app is the media player and audio waveform. An audio waveform put simply is a graphic representation of the high and low frequencies throughout a song. My site, like SoundCloud, has a colored waveform overlayed on a grey waveform and the colored version covers more of the grey version as the song progresses. I initially attempted to use HTML Canvas to draw a waveform on render then if a song was played, Canvas would draw the colored version as the song went on. This proved to be quite heavy on the frontend as Canvas was continuously drawing a full image from scratch. My answer to this delimma was simple. A waveform image is drawn via Canvas when a user uploads a track and that image is saved to the database. When said track is played, an overlayed containing div with a colored version of the image has its width constantly adjusted to match the current progress in the song.

![AudioCloud waveform](https://github.com/Dapper-Dan/AudioCloud/blob/master/app/assets/images/wikiScreenShot2.png)
//find out what to listen to via the disocer page. screenshot here

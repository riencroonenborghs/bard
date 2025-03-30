// amplitudejs@5.3.2 downloaded from https://ga.jspm.io/npm:amplitudejs@5.3.2/dist/amplitude.js

var e="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:global;var t={};(function webpackUniversalModuleDefinition(e,a){t=a()})(0,(function(){return function(e){var t={};function __webpack_require__(a){if(t[a])return t[a].exports;var l=t[a]={i:a,l:false,exports:{}};e[a].call(l.exports,l,l.exports,__webpack_require__);l.l=true;return l.exports}__webpack_require__.m=e;__webpack_require__.c=t;__webpack_require__.i=function(e){return e};__webpack_require__.d=function(e,t,a){__webpack_require__.o(e,t)||Object.defineProperty(e,t,{configurable:false,enumerable:true,get:a})};__webpack_require__.n=function(e){var t=e&&e.__esModule?function getDefault(){return e.default}:function getModuleExports(){return e};__webpack_require__.d(t,"a",t);return t};__webpack_require__.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s=47)}([function(e,t,a){var l=a(59);e.exports={version:l.version,audio:new Audio,active_metadata:{},active_album:"",active_index:0,active_playlist:null,playback_speed:1,callbacks:{},songs:[],playlists:{},start_song:"",starting_playlist:"",starting_playlist_song:"",repeat:false,repeat_song:false,shuffle_list:{},shuffle_on:false,default_album_art:"",default_playlist_art:"",debug:false,volume:.5,pre_mute_volume:.5,volume_increment:5,volume_decrement:5,soundcloud_client:"",soundcloud_use_art:false,soundcloud_song_count:0,soundcloud_songs_ready:0,is_touch_moving:false,buffered:0,bindings:{},continue_next:true,delay:0,player_state:"stopped",web_audio_api_available:false,context:null,source:null,analyser:null,visualizations:{available:[],active:[],backup:""},waveforms:{sample_rate:100,built:[]}};
/**
       * These variables make Amplitude run. The config is the most important
       * containing active settings and parameters.
       *
       * The config JSON is the global settings for ALL of Amplitude functions.
       * This is global and contains all of the user preferences. The default
       * settings are set, and the user overwrites them when they initialize
       * Amplitude.
       *
       * @module config
       * @type {object}
       * @property {string}  	config.version          				- The current version of AmplitudeJS.
       * @property {object} 	config.audio 		 								-	Handles all of the audio.
       * @property {object} 	config.active_metadata					- Contains the active metadata for the song.
       * @property {string} 	config.active_album							- Holds the active album name. Used to check and see if the album changed and run the album changed callback.
       * @property {number} 	config.active_index							- Contains the index of the actively playing song.
       * @property {string} 	config.active_playlist					- Contains the key to the active playlist index.
       * @property {number} 	config.playback_speed						- Sets the initial playback speed of the song. The values for this can be 1.0, 1.5, 2.0
       * @property {object} 	config.callbacks								- The user can pass a JSON object with a key => value store of callbacks to be run at certain events.
       * @property {array} 		config.songs										- Contains all of the songs the user has passed to Amplitude to use.
       * @property {object} 	config.playlists								- Contains all of the playlists the user created.
       * @property {object} 	config.start_song 							- The index of the song that AmplitudeJS should start with.
       * @property {string} 	config.starting_playlist 				- The starting playlist the player will intiialize to.
       * @property {string} 	config.starting_playlist_song 	- The index of the song in the playlist that should be started.
       * @property {boolean} 	config.repeat 									- When repeat is on, when the song ends the song will replay itself.
       * @property {object} 	config.shuffle_list							- When shuffled, gets populated with the songs the user provided in a random order.
       * @property {boolean} 	config.shuffle_on								- When on, gets set to true so when traversing through songs, AmplitudeJS knows whether or not to use the songs object or the shuffle_list
       * @property {string}		config.default_album_art 				- The user can set default album art to be displayed if the song they set doesn't contain album art.
       * @property {string} 	config.default_playlist_art 		- The user can set default playlist art to be displayed if the playlist they are setting meta data for doesn't contain an art picture.
       * @property {boolean} 	config.debug										- When set to true, AmplitudeJS will print to the console any errors providing helpful feedback to the user.
       * @property {number} 	config.volume 									- The user can set the initial volume to a number between 0 and 1 over-riding the default of .5
       * @property {number} 	config.pre_mute_volume 					- This is set on mute so that when a user un-mutes AmplitudeJS knows what to restore the volume to.
       * @property {number}		config.volume_increment 				- The default values are an integer between 1 and 100 for how much the volume should increase when the user presses the volume up button.
       * @property {number}		config.volume_decrement 				- The default values are an integer between 1 and 100 for how much the volume should decrease when the user presses the volume down button.
       * @property {string} 	config.soundcloud_client 				- When using SoundCloud, the user will have to provide their API Client ID
       * @property {boolean} 	config.soundcloud_use_art 			- The user can set this to true and AmplitudeJS will use the album art for the song returned from the Soundcloud API
       * @property {number} 	config.soundcloud_song_count 		- Used on config to count how many songs are from Soundcloud and compare it to how many are ready for when to move to the rest of the configuration
       * @property {number} 	config.soundcloud_songs_ready 	- Used on config to count how many songs are ready so when we get all of the data from the SoundCloud API that we need this should match the SoundCloud song count meaning we can move to the rest of the config.
       * @property {integer}	config.is_touch_moving 					- Flag for if the user is moving the screen.
       * @property {boolean}	config.buffered									- How much of the song is buffered.
       * @property {object} 	config.bindings									- Array of bindings to certain key events.
       * @property {boolean} 	config.continue_next 						- Determines when a song ends, we should continue to the next song.
       * @property {number}   config.delay 										- Sets the delay between songs in MS.
       * @property {boolean}  config.use_web_audio_api 				- Flag that determines if the user wants to use Web Audio API Components.
       * @property {boolean}  config.web_audio_api_available  - Flag that determines if the Web Audio API is available.
       * @property {object}  	config.context 									- Web Audio API Context
       * @property {object}		config.source 									- Web Audio API Source
       * @property {object} 	config.analyser 								- Web Audio API Analyser
       * @property {string}		config.player_state 						- The current state of the player.
       */},function(e,t,a){Object.defineProperty(t,"__esModule",{value:true});var l=a(0);var u=_interopRequireDefault(l);var n=a(5);_interopRequireDefault(n);var i=a(3);_interopRequireDefault(i);var r=a(2);_interopRequireDefault(r);var s=a(7);_interopRequireDefault(s);var d=a(9);var o=_interopRequireDefault(d);var f=a(4);var c=_interopRequireDefault(f);var v=a(16);var p=_interopRequireDefault(v);var y=a(6);var g=_interopRequireDefault(y);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var _=function(){function play(){p.default.stop();p.default.run();u.default.active_metadata.live&&reconnectStream();/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&!u.default.paused&&reconnectStream();var e=u.default.audio.play();void 0!==e&&e.then((function(e){})).catch((function(e){}));u.default.audio.play();u.default.audio.playbackRate=u.default.playback_speed;g.default.setPlayerState()}function pause(){p.default.stop();u.default.audio.pause();u.default.paused=true;u.default.active_metadata.live&&disconnectStream();g.default.setPlayerState()}function stop(){p.default.stop();0!=u.default.audio.currentTime&&(u.default.audio.currentTime=0);u.default.audio.pause();u.default.active_metadata.live&&disconnectStream();g.default.setPlayerState();o.default.run("stop")}
/**
         * Sets the song volume.
         *
         * Public Accessor: Amplitude.setVolume( volumeLevel )
         *
         * @access public
         * @param {number} volumeLevel - A number between 1 and 100 as a percentage of
         * min to max for a volume level.
         */function setVolume(e){u.default.audio.muted=0==e;u.default.volume=e;u.default.audio.volume=e/100}
/**
         * Sets the song percentage. If it's a live song, we ignore this because
         * we can't skip ahead. This is an issue if you have a playlist with
         * a live source.
         *
         * Public Accessor: Amplitude.setSongLocation( songPercentage )
         *
         * @access public
         * @param {number} songPercentage - A number between 1 and 100 as a percentage of song completion.
         */function setSongLocation(e){u.default.active_metadata.live||(u.default.audio.currentTime=u.default.audio.duration*(e/100))}
/**
         * Skips to a location in a song
         *
         * Public Accessor: Amplitude.skipToLocation( seconds )
         *
         * @access public
         * @param {number} seconds - An integer containing the seconds to skip to
         */function skipToLocation(e){u.default.audio.addEventListener("canplaythrough",(function(){u.default.audio.duration>=e&&e>0?u.default.audio.currentTime=e:c.default.writeMessage("Amplitude can't skip to a location greater than the duration of the audio or less than 0")}),{once:true})}function disconnectStream(){u.default.audio.src="";u.default.audio.load()}function reconnectStream(){u.default.audio.src=u.default.active_metadata.url;u.default.audio.load()}
/**
         * Sets the playback speed for the song.
         *
         * @param {number} playbackSpeed The speed we want the song to play back at.
         */function setPlaybackSpeed(e){u.default.playback_speed=e;u.default.audio.playbackRate=u.default.playback_speed}return{play:play,pause:pause,stop:stop,setVolume:setVolume,setSongLocation:setSongLocation,skipToLocation:skipToLocation,disconnectStream:disconnectStream,reconnectStream:reconnectStream,setPlaybackSpeed:setPlaybackSpeed}}();t.default=_;e.exports=t.default},function(e,t,a){Object.defineProperty(t,"__esModule",{value:true});var l=a(0);var u=_interopRequireDefault(l);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var n=function(){function sync(){syncGlobal();syncPlaylist();syncSong();syncSongInPlaylist()}function syncGlobal(){var e=u.default.audio.paused?"paused":"playing";var t=document.querySelectorAll(".amplitude-play-pause");for(var a=0;a<t.length;a++){var l=t[a].getAttribute("data-amplitude-playlist");var n=t[a].getAttribute("data-amplitude-song-index");if(null==l&&null==n)switch(e){case"playing":setElementPlay(t[a]);break;case"paused":setElementPause(t[a]);break}}}function syncPlaylist(){var e=u.default.audio.paused?"paused":"playing";var t=document.querySelectorAll('.amplitude-play-pause[data-amplitude-playlist="'+u.default.active_playlist+'"]');for(var a=0;a<t.length;a++){var l=t[a].getAttribute("data-amplitude-song-index");if(null==l)switch(e){case"playing":setElementPlay(t[a]);break;case"paused":setElementPause(t[a]);break}}}function syncSong(){var e=u.default.audio.paused?"paused":"playing";var t=document.querySelectorAll('.amplitude-play-pause[data-amplitude-song-index="'+u.default.active_index+'"]');for(var a=0;a<t.length;a++){var l=t[a].getAttribute("data-amplitude-playlist");if(null==l)switch(e){case"playing":setElementPlay(t[a]);break;case"paused":setElementPause(t[a]);break}}}function syncSongInPlaylist(){var e=u.default.audio.paused?"paused":"playing";var t=""!=u.default.active_playlist&&null!=u.default.active_playlist?u.default.playlists[u.default.active_playlist].active_index:null;var a=document.querySelectorAll('.amplitude-play-pause[data-amplitude-song-index="'+t+'"][data-amplitude-playlist="'+u.default.active_playlist+'"]');for(var l=0;l<a.length;l++)switch(e){case"playing":setElementPlay(a[l]);break;case"paused":setElementPause(a[l]);break}}function syncToPause(){var e=document.querySelectorAll(".amplitude-play-pause");for(var t=0;t<e.length;t++)setElementPause(e[t])}
/**
         * Sets an element to be playing by removing the 'amplitude-paused' class
         * and adding the 'amplitude-playing' class
         *
         * @access public
         * @param {element} element 	- The element getting the playing class added.
         */function setElementPlay(e){e.classList.add("amplitude-playing");e.classList.remove("amplitude-paused")}
/**
         * Sets an element to be paused by adding the 'amplitude-paused' class
         * and removing the 'amplitude-playing' class
         *
         * @access public
         * @param {element} element 	- The element getting the paused class added.
         */function setElementPause(e){e.classList.remove("amplitude-playing");e.classList.add("amplitude-paused")}return{sync:sync,syncGlobal:syncGlobal,syncPlaylist:syncPlaylist,syncSong:syncSong,syncSongInPlaylist:syncSongInPlaylist,syncToPause:syncToPause}}();t.default=n;e.exports=t.default},function(e,t,a){Object.defineProperty(t,"__esModule",{value:true});var l=a(0);var u=_interopRequireDefault(l);var n=a(1);var i=_interopRequireDefault(n);var r=a(9);var s=_interopRequireDefault(r);var d=a(5);var o=_interopRequireDefault(d);var f=a(2);var c=_interopRequireDefault(f);var v=a(14);var p=_interopRequireDefault(v);var y=a(20);var g=_interopRequireDefault(y);var _=a(15);var m=_interopRequireDefault(_);var h=a(7);var b=_interopRequireDefault(h);var P=a(49);var S=_interopRequireDefault(P);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var A=function(){
/**
         * Sets the next song
         *
         * @access public
         * @param {boolean} [songEnded=false] If the song ended, this is set to true
         * so we take into effect the repeat setting.
         */
function setNext(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];var t=null;var a={};var l=false;if(u.default.repeat_song)if(u.default.shuffle_on){t=u.default.shuffle_list[u.default.active_index].index;a=u.default.shuffle_list[t]}else{t=u.default.active_index;a=u.default.songs[t]}else if(u.default.shuffle_on){if(parseInt(u.default.active_index)+1<u.default.shuffle_list.length)t=parseInt(u.default.active_index)+1;else{t=0;l=true}a=u.default.shuffle_list[t]}else{if(parseInt(u.default.active_index)+1<u.default.songs.length)t=parseInt(u.default.active_index)+1;else{t=0;l=true}a=u.default.songs[t]}changeSong(a,t);l&&!u.default.repeat||e&&!u.default.repeat&&l||i.default.play();c.default.sync();s.default.run("next");u.default.repeat_song&&s.default.run("song_repeated")}
/**
         * Sets the next song in a playlist
         *
         * @param {string} playlist - The playlist being shuffled
         * @param {boolean} [songEnded=false] - If the song ended, this is set to true
         * so we take into effect the repeat setting.
         */function setNextPlaylist(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];var a=null;var l={};var n=false;if(u.default.repeat_song)if(u.default.playlists[e].shuffle){a=u.default.playlists[e].active_index;l=u.default.playlists[e].shuffle_list[a]}else{a=u.default.playlists[e].active_index;l=u.default.playlists[e].songs[a]}else if(u.default.playlists[e].shuffle){if(parseInt(u.default.playlists[e].active_index)+1<u.default.playlists[e].shuffle_list.length)a=u.default.playlists[e].active_index+1;else{a=0;n=true}l=u.default.playlists[e].shuffle_list[a]}else{if(parseInt(u.default.playlists[e].active_index)+1<u.default.playlists[e].songs.length)a=parseInt(u.default.playlists[e].active_index)+1;else{a=0;n=true}l=u.default.playlists[e].songs[a]}setActivePlaylist(e);changeSongPlaylist(e,l,a);n&&!u.default.repeat||t&&!u.default.repeat&&n||i.default.play();c.default.sync();s.default.run("next");u.default.repeat_song&&s.default.run("song_repeated")}function setPrevious(){var e=null;var t={};if(u.default.repeat_song)if(u.default.shuffle_on){e=u.default.active_index;t=u.default.shuffle_list[e]}else{e=u.default.active_index;t=u.default.songs[e]}else{e=parseInt(u.default.active_index)-1>=0?parseInt(u.default.active_index-1):parseInt(u.default.songs.length-1);t=u.default.shuffle_on?u.default.shuffle_list[e]:u.default.songs[e]}changeSong(t,e);i.default.play();c.default.sync();s.default.run("prev");u.default.repeat_song&&s.default.run("song_repeated")}function setPreviousPlaylist(e){var t=null;var a={};if(u.default.repeat_song)if(u.default.playlists[e].shuffle){t=u.default.playlists[e].active_index;a=u.default.playlists[e].shuffle_list[t]}else{t=u.default.playlists[e].active_index;a=u.default.playlists[e].songs[t]}else{t=parseInt(u.default.playlists[e].active_index)-1>=0?parseInt(u.default.playlists[e].active_index-1):parseInt(u.default.playlists[e].songs.length-1);a=u.default.playlists[e].shuffle?u.default.playlists[e].shuffle_list[t]:u.default.playlists[e].songs[t]}setActivePlaylist(e);changeSongPlaylist(e,a,t);i.default.play();c.default.sync();s.default.run("prev");u.default.repeat_song&&s.default.run("song_repeated")}function changeSong(e,t){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];prepareSongChange(e);u.default.audio.src=e.url;u.default.active_metadata=e;u.default.active_album=e.album;u.default.active_index=parseInt(t);afterSongChange(a)}function changeSongPlaylist(e,t,a){var l=arguments.length>3&&void 0!==arguments[3]&&arguments[3];prepareSongChange(t);u.default.audio.src=t.url;u.default.active_metadata=t;u.default.active_album=t.album;u.default.active_index=null;u.default.playlists[e].active_index=parseInt(a);afterSongChange(l)}function prepareSongChange(e){i.default.stop();c.default.syncToPause();p.default.resetElements();g.default.resetElements();m.default.resetCurrentTimes();o.default.newAlbum(e)&&s.default.run("album_change")}function afterSongChange(e){b.default.displayMetaData();S.default.setActive(e);m.default.resetDurationTimes();s.default.run("song_change")}
/**
         * Sets the active playlist
         *
         * @access public
         * @param {string} playlist - The string of the playlist being set to active.
         */function setActivePlaylist(e){if(u.default.active_playlist!=e){s.default.run("playlist_changed");u.default.active_playlist=e;null!=e&&(u.default.playlists[e].active_index=0)}}return{setNext:setNext,setNextPlaylist:setNextPlaylist,setPrevious:setPrevious,setPreviousPlaylist:setPreviousPlaylist,changeSong:changeSong,changeSongPlaylist:changeSongPlaylist,setActivePlaylist:setActivePlaylist}}();t.default=A;e.exports=t.default},function(e,t,a){Object.defineProperty(t,"__esModule",{value:true});var l=a(0);var u=_interopRequireDefault(l);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var n=function(){
/**
         * Writes out debug message to the console if enabled.
         *
         * Public Accessor: Debug.writeMessage( message )
         *
         * @access public
         * @param {string} message - The string that gets printed to alert the user of a debugging error.
         */
function writeMessage(e){u.default.debug&&console.log(e)}return{writeMessage:writeMessage}}();t.default=n;e.exports=t.default},function(e,t,a){Object.defineProperty(t,"__esModule",{value:true});var l=a(0);var u=_interopRequireDefault(l);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var n=function(){
/**
         * Checks to see if the new song to be played is different than the song
         * that is currently playing. To be true, the user would have selected
         * play on a new song with a new index. To be false, the user would have
         * clicked play/pause on the song that was playing.
         *
         * Public Accessor: Checks.newSong( playlist, songIndex )
         * @access public
         * @param {string} playlist - The playlist we are checking the new song for. Could be null
         * @param {number} songIndex - The index of the new song to be played.
         * @returns {boolean} True if we are setting a new song, false if we are not setting a new song.
         */
function newSong(e,t){return u.default.active_playlist!=e||(null==u.default.active_playlist&&null==e?u.default.active_index!=t:u.default.active_playlist==e&&u.default.playlists[e].active_index!=t)}
/**
         * Checks to see if there is a new album
         *
         * Public Accessor: Checks.newAlbum( album )
         *
         * @access public
         * @param {string} album - Checks to see if the new song will have a new album.
         * @returns {boolean} True if there is a new album, false if there is not a new ablum.
         */function newAlbum(e){return u.default.active_album!=e}
/**
         * Checks to see if there is a new playlist
         *
         * Public Accessor: Checks.newPlaylist( playlist )
         *
         * @access public
         * @param {string} playlist - The playlist passed in to check against the active playlist.
         * @returns {boolean} True if there is a new playlist, false if there is not a new playlist.
         */function newPlaylist(e){return u.default.active_playlist!=e}
/**
         * Determines if the string passed in is a URL or not
         *
         * Public Accessor: AmplitudeHelpers.isURL( url )
         *
         * @access public
         * @param {string} url - The string we are testing to see if it's a URL.
         * @returns {boolean} True if the string is a url, false if it is not.
         */function isURL(e){var t=/(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;return t.test(e)}
/**
         * Determines if what is passed in is an integer or not.
         *
         * Public Accessor: AmplitudeHelpers.isInt( int )
         *
         * @access public
         * @param {string|number} int - The variable we are testing to see is an integer or not.
         * @returns {boolean} If the variable is an integer or not.
         */function isInt(e){return!isNaN(e)&&parseInt(Number(e))==e&&!isNaN(parseInt(e,10))}return{newSong:newSong,newAlbum:newAlbum,newPlaylist:newPlaylist,isURL:isURL,isInt:isInt}}();t.default=n;e.exports=t.default},function(e,t,a){Object.defineProperty(t,"__esModule",{value:true});var l=a(0);var u=_interopRequireDefault(l);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var n=function(){function resetConfig(){u.default.audio=new Audio;u.default.active_metadata={};u.default.active_album="";u.default.active_index=0;u.default.active_playlist=null;u.default.playback_speed=1;u.default.callbacks={};u.default.songs=[];u.default.playlists={};u.default.start_song="";u.default.starting_playlist="";u.default.starting_playlist_song="";u.default.repeat=false;u.default.shuffle_list={};u.default.shuffle_on=false;u.default.default_album_art="";u.default.default_playlist_art="";u.default.debug=false;u.default.volume=.5;u.default.pre_mute_volume=.5;u.default.volume_increment=5;u.default.volume_decrement=5;u.default.soundcloud_client="";u.default.soundcloud_use_art=false;u.default.soundcloud_song_count=0;u.default.soundcloud_songs_ready=0;u.default.continue_next=true}function setPlayerState(){u.default.audio.paused&&0==u.default.audio.currentTime&&(u.default.player_state="stopped");u.default.audio.paused&&u.default.audio.currentTime>0&&(u.default.player_state="paused");u.default.audio.paused||(u.default.player_state="playing")}return{resetConfig:resetConfig,setPlayerState:setPlayerState}}();t.default=n;e.exports=t.default},function(e,t,a){Object.defineProperty(t,"__esModule",{value:true});var l=a(0);var u=_interopRequireDefault(l);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var n=function(){function displayMetaData(){var e=["cover_art_url","station_art_url","podcast_episode_cover_art_url"];var t=document.querySelectorAll("[data-amplitude-song-info]");for(var a=0;a<t.length;a++){var l=t[a].getAttribute("data-amplitude-song-info");var n=t[a].getAttribute("data-amplitude-playlist");var i=t[a].getAttribute("data-amplitude-song-index");if(null==i&&(u.default.active_playlist==n||null==n&&null==i)){var r=void 0!=u.default.active_metadata[l]?u.default.active_metadata[l]:null;if(e.indexOf(l)>=0){r=r||u.default.default_album_art;t[a].setAttribute("src",r)}else{r=r||"";t[a].innerHTML=r}}}}function displayPlaylistMetaData(){var e=["image_url"];var t=document.querySelectorAll("[data-amplitude-playlist-info]");for(var a=0;a<t.length;a++){var l=t[a].getAttribute("data-amplitude-playlist-info");var n=t[a].getAttribute("data-amplitude-playlist");void 0!=u.default.playlists[n][l]?e.indexOf(l)>=0?t[a].setAttribute("src",u.default.playlists[n][l]):t[a].innerHTML=u.default.playlists[n][l]:e.indexOf(l)>=0?""!=u.default.default_playlist_art?t[a].setAttribute("src",u.default.default_playlist_art):t[a].setAttribute("src",""):t[a].innerHTML=""}}
/**
         * Sets the first song in the playlist. This is used to fill in the meta
         * data in the playlist
         *
         * @param {object} song 			- The song we are setting to be the first song in the playlist
         * @param {string} playlist 	- Key of the playlist we are setting the first song in
         */function setFirstSongInPlaylist(e,t){var a=["cover_art_url","station_art_url","podcast_episode_cover_art_url"];var l=document.querySelectorAll('[data-amplitude-song-info][data-amplitude-playlist="'+t+'"]');for(var u=0;u<l.length;u++){var n=l[u].getAttribute("data-amplitude-song-info");var i=l[u].getAttribute("data-amplitude-playlist");i==t&&(void 0!=e[n]?a.indexOf(n)>=0?l[u].setAttribute("src",e[n]):l[u].innerHTML=e[n]:a.indexOf(n)>=0?""!=e.default_album_art?l[u].setAttribute("src",e.default_album_art):l[u].setAttribute("src",""):l[u].innerHTML="")}}function syncMetaData(){var e=["cover_art_url","station_art_url","podcast_episode_cover_art_url"];var t=document.querySelectorAll("[data-amplitude-song-info]");for(var a=0;a<t.length;a++){var l=t[a].getAttribute("data-amplitude-song-index");var n=t[a].getAttribute("data-amplitude-playlist");if(null!=l&&null==n){var i=t[a].getAttribute("data-amplitude-song-info");var r=void 0!=u.default.songs[l][i]?u.default.songs[l][i]:null;if(e.indexOf(i)>=0){r=r||u.default.default_album_art;t[a].setAttribute("src",r)}else t[a].innerHTML=r}if(null!=l&&null!=n){var s=t[a].getAttribute("data-amplitude-song-info");void 0!=u.default.playlists[n].songs[l][s]&&(e.indexOf(s)>=0?t[a].setAttribute("src",u.default.playlists[n].songs[l][s]):t[a].innerHTML=u.default.playlists[n].songs[l][s])}}displayPlaylistMetaData()}return{displayMetaData:displayMetaData,setFirstSongInPlaylist:setFirstSongInPlaylist,syncMetaData:syncMetaData,displayPlaylistMetaData:displayPlaylistMetaData}}();t.default=n;e.exports=t.default},function(e,t,a){Object.defineProperty(t,"__esModule",{value:true});var l=a(0);var u=_interopRequireDefault(l);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var n=function(){function syncRepeat(){var e=document.getElementsByClassName("amplitude-repeat");for(var t=0;t<e.length;t++)if(u.default.repeat){e[t].classList.add("amplitude-repeat-on");e[t].classList.remove("amplitude-repeat-off")}else{e[t].classList.remove("amplitude-repeat-on");e[t].classList.add("amplitude-repeat-off")}}function syncRepeatPlaylist(e){var t=document.getElementsByClassName("amplitude-repeat");for(var a=0;a<t.length;a++)if(t[a].getAttribute("data-amplitude-playlist")==e)if(u.default.playlists[e].repeat){t[a].classList.add("amplitude-repeat-on");t[a].classList.remove("amplitude-repeat-off")}else{t[a].classList.add("amplitude-repeat-off");t[a].classList.remove("amplitude-repeat-on")}}function syncRepeatSong(){var e=document.getElementsByClassName("amplitude-repeat-song");for(var t=0;t<e.length;t++)if(u.default.repeat_song){e[t].classList.add("amplitude-repeat-song-on");e[t].classList.remove("amplitude-repeat-song-off")}else{e[t].classList.remove("amplitude-repeat-song-on");e[t].classList.add("amplitude-repeat-song-off")}}return{syncRepeat:syncRepeat,syncRepeatPlaylist:syncRepeatPlaylist,syncRepeatSong:syncRepeatSong}}();t.default=n;e.exports=t.default},function(e,t,a){Object.defineProperty(t,"__esModule",{value:true});var l=a(0);var u=_interopRequireDefault(l);var n=a(4);var i=_interopRequireDefault(n);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var r=function(){function initialize(){u.default.audio.addEventListener("abort",(function(){run("abort")}));u.default.audio.addEventListener("error",(function(){run("error")}));u.default.audio.addEventListener("loadeddata",(function(){run("loadeddata")}));u.default.audio.addEventListener("loadedmetadata",(function(){run("loadedmetadata")}));u.default.audio.addEventListener("loadstart",(function(){run("loadstart")}));u.default.audio.addEventListener("pause",(function(){run("pause")}));u.default.audio.addEventListener("playing",(function(){run("playing")}));u.default.audio.addEventListener("play",(function(){run("play")}));u.default.audio.addEventListener("progress",(function(){run("progress")}));u.default.audio.addEventListener("ratechange",(function(){run("ratechange")}));u.default.audio.addEventListener("seeked",(function(){run("seeked")}));u.default.audio.addEventListener("seeking",(function(){run("seeking")}));u.default.audio.addEventListener("stalled",(function(){run("stalled")}));u.default.audio.addEventListener("suspend",(function(){run("suspend")}));u.default.audio.addEventListener("timeupdate",(function(){run("timeupdate")}));u.default.audio.addEventListener("volumechange",(function(){run("volumechange")}));u.default.audio.addEventListener("waiting",(function(){run("waiting")}));u.default.audio.addEventListener("canplay",(function(){run("canplay")}));u.default.audio.addEventListener("canplaythrough",(function(){run("canplaythrough")}));u.default.audio.addEventListener("durationchange",(function(){run("durationchange")}));u.default.audio.addEventListener("ended",(function(){run("ended")}))}
/**
         * Runs a user defined callback method
         *
         * Public Accessor: Callbacks.run( callbackName )
         *
         * @access public
         * @param {string} callbackName - The name of the callback we are going to run.
         */function run(e){if(u.default.callbacks[e]){var t=u.default.callbacks[e];i.default.writeMessage("Running Callback: "+e);try{t()}catch(e){if("CANCEL EVENT"==e.message)throw e;i.default.writeMessage("Callback error: "+e.message)}}}return{initialize:initialize,run:run}}();t.default=r;e.exports=t.default},function(e,t,a){Object.defineProperty(t,"__esModule",{value:true});var l=function(){
/**
         * Syncs mute for all of the mute buttons. This represents the
         * state of the player if it's muted or not.
         *
         * @access public
         * @param {string} state 	- The muted state of the player.
         */
function setMuted(e){var t=document.getElementsByClassName("amplitude-mute");for(var a=0;a<t.length;a++)if(e){t[a].classList.remove("amplitude-not-muted");t[a].classList.add("amplitude-muted")}else{t[a].classList.add("amplitude-not-muted");t[a].classList.remove("amplitude-muted")}}return{setMuted:setMuted}}();t.default=l;e.exports=t.default},function(e,t,a){Object.defineProperty(t,"__esModule",{value:true});var l=a(0);var u=_interopRequireDefault(l);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var n=function(){function sync(){var e=document.getElementsByClassName("amplitude-volume-slider");for(var t=0;t<e.length;t++)e[t].value=100*u.default.audio.volume}return{sync:sync}}();t.default=n;e.exports=t.default},function(e,t,a){Object.defineProperty(t,"__esModule",{value:true});var l=a(0);var u=_interopRequireDefault(l);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var n=function(){
/**
         * Sets the state of the repeat for a song.
         *
         * @access public
         * @param {boolean} repeat - A boolean representing whether the repeat should be on or off
         */
function setRepeat(e){u.default.repeat=e}
/**
         * Sets the state of the repeat for a playlist.
         *
         * @access public
         * @param {boolean} repeat - A boolean representing whether the repeat should be on or off
         * @param {string} playlist - The key of the playlist for repeating
         */function setRepeatPlaylist(e,t){u.default.playlists[t].repeat=e}
/**
         * Sets the state of the repeat song
         *
         * @access public
         * @param {boolean} repeat - A boolean representing whether the repeat shoudl be on or off for the song.
         */function setRepeatSong(e){u.default.repeat_song=e}return{setRepeat:setRepeat,setRepeatPlaylist:setRepeatPlaylist,setRepeatSong:setRepeatSong}}();t.default=n;e.exports=t.default},function(e,t,a){Object.defineProperty(t,"__esModule",{value:true});var l=a(0);var u=_interopRequireDefault(l);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var n=function(){
/**
         * Sets the shuffle state globally
         *
         * @access public
         * @param {boolean} shuffle   - True when we are shuffling, false when we turn it off.
         */
function setShuffle(e){u.default.shuffle_on=e;e?shuffleSongs():u.default.shuffle_list=[]}function toggleShuffle(){if(u.default.shuffle_on){u.default.shuffle_on=false;u.default.shuffle_list=[]}else{u.default.shuffle_on=true;shuffleSongs()}}
/**
         * Sets the shuffle state for a playlist
         *
         * @access public
         * @param {string} playlist   The key of the playlist we are shuffling.
         * @param {boolean} shuffle   True when we are shuffling the playlist, false when we turn off shuffle.
         */function setShufflePlaylist(e,t){u.default.playlists[e].shuffle=t;u.default.playlists[e].shuffle?shufflePlaylistSongs(e):u.default.playlists[e].shuffle_list=[]}
/**
         * Sets the shuffle state for a playlist
         *
         * @access public
         * @param {string} playlist   The key of the playlist we are shuffling.
         */function toggleShufflePlaylist(e){if(u.default.playlists[e].shuffle){u.default.playlists[e].shuffle=false;u.default.playlists[e].shuffle_list=[]}else{u.default.playlists[e].shuffle=true;shufflePlaylistSongs(e)}}function shuffleSongs(){var e=new Array(u.default.songs.length);for(var t=0;t<u.default.songs.length;t++)e[t]=u.default.songs[t];for(var a=u.default.songs.length-1;a>0;a--){var l=Math.floor(Math.random()*u.default.songs.length+1);shuffleSwap(e,a,l-1)}u.default.shuffle_list=e}
/**
         * Shuffle songs in a playlist
         *
         * Public Accessor: Shuffle.shufflePlaylistSongs( playlist )
         *
         * @access public
         * @param {string} playlist - The playlist we are shuffling.
         */function shufflePlaylistSongs(e){var t=new Array(u.default.playlists[e].songs.length);for(var a=0;a<u.default.playlists[e].songs.length;a++)t[a]=u.default.playlists[e].songs[a];for(var l=u.default.playlists[e].songs.length-1;l>0;l--){var n=Math.floor(Math.random()*u.default.playlists[e].songs.length+1);shuffleSwap(t,l,n-1)}u.default.playlists[e].shuffle_list=t}
/**
         * Swaps and randomizes the song shuffle.
         *
         * @access private
         * @param {object} shuffleList 	- The list of songs that is going to be shuffled
         * @param {number} original 		- The original index of he song in the songs array
         * @param {number} random 			- The randomized index that will be the new index of the song in the shuffle array.
         */function shuffleSwap(e,t,a){var l=e[t];e[t]=e[a];e[a]=l}return{setShuffle:setShuffle,toggleShuffle:toggleShuffle,setShufflePlaylist:setShufflePlaylist,toggleShufflePlaylist:toggleShufflePlaylist,shuffleSongs:shuffleSongs,shufflePlaylistSongs:shufflePlaylistSongs}}();t.default=n;e.exports=t.default},function(e,t,a){Object.defineProperty(t,"__esModule",{value:true});var l=a(0);var u=_interopRequireDefault(l);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var n=function(){
/**
         * Syncs all of the song slider elements.
         *
         * @access public
         * @param {number} location 	- The location of the song as a percentage.
         * @param {string} playlist 	- The playlist we are setting the song slider for.
         * @param {number} songIndex 	- The index of the song we are adjusting the song slider for.
         */
function sync(e,t,a){syncMain(e);syncPlaylist(e,t);syncSong(e,a);syncSongInPlaylist(e,t)}
/**
         * Syncs the main slider location
         *
         * @access public
         * @param {number} location 	- The location of the song as a percentage.
         */function syncMain(e){e=isNaN(e)?0:e;var t=document.querySelectorAll(".amplitude-song-slider");for(var a=0;a<t.length;a++){var l=t[a].getAttribute("data-amplitude-playlist");var u=t[a].getAttribute("data-amplitude-song-index");null==l&&null==u&&(t[a].value=e)}}
/**
         * Syncs playlist song slider locations
         *
         * @access public
         * @param {number} location 	- The location of the song as a percentage.
         * @param {string} playlist 	- The playlist we are setting the song slider for.
         */function syncPlaylist(e,t){e=isNaN(e)?0:e;var a=document.querySelectorAll('.amplitude-song-slider[data-amplitude-playlist="'+t+'"]');for(var l=0;l<a.length;l++){var u=a[l].getAttribute("data-amplitude-playlist");var n=a[l].getAttribute("data-amplitude-song-index");u==t&&null==n&&(a[l].value=e)}}
/**
         * Syncs individual song slider locations
         *
         * @access public
         * @param {number} location 	- The location of the song as a percentage.
         * @param {number} songIndex 	- The index of the song we are adjusting the song slider for.
         */function syncSong(e,t){if(null==u.default.active_playlist){e=isNaN(e)?0:e;var a=document.querySelectorAll('.amplitude-song-slider[data-amplitude-song-index="'+t+'"]');for(var l=0;l<a.length;l++){var n=a[l].getAttribute("data-amplitude-playlist");var i=a[l].getAttribute("data-amplitude-song-index");null==n&&i==t&&(a[l].value=e)}}}
/**
         * Syncs individual song slider locations
         *
         * @access public
         * @param {number} location 	- The location of the song as a percentage.
         * @param {string} playlist 	- The playlist we are setting the song slider for.
         */function syncSongInPlaylist(e,t){e=isNaN(e)?0:e;var a=""!=u.default.active_playlist&&null!=u.default.active_playlist?u.default.playlists[u.default.active_playlist].active_index:null;var l=document.querySelectorAll('.amplitude-song-slider[data-amplitude-playlist="'+t+'"][data-amplitude-song-index="'+a+'"]');for(var n=0;n<l.length;n++)l[n].value=e}function resetElements(){var e=document.getElementsByClassName("amplitude-song-slider");for(var t=0;t<e.length;t++)e[t].value=0}return{sync:sync,syncMain:syncMain,syncPlaylist:syncPlaylist,syncSong:syncSong,syncSongInPlaylist:syncSongInPlaylist,resetElements:resetElements}}();t.default=n;e.exports=t.default},function(e,t,a){Object.defineProperty(t,"__esModule",{value:true});var l=a(53);var u=_interopRequireDefault(l);var n=a(50);var i=_interopRequireDefault(n);var r=a(51);var s=_interopRequireDefault(r);var d=a(52);var o=_interopRequireDefault(d);var f=a(54);var c=_interopRequireDefault(f);var v=a(55);var p=_interopRequireDefault(v);var y=a(56);var g=_interopRequireDefault(y);var _=a(57);var m=_interopRequireDefault(_);var h=a(58);var b=_interopRequireDefault(h);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var P=function(){function resetCurrentTimes(){u.default.resetTimes();i.default.resetTimes();s.default.resetTimes();o.default.resetTimes()}
/**
         * Syncs the current time elements to the time provided.
         *
         * @param {Object} currentTime - An object representing the current time of the audio.
         */function syncCurrentTimes(e){u.default.sync(e);i.default.sync(e.hours);s.default.sync(e.minutes);o.default.sync(e.seconds)}function resetDurationTimes(){c.default.resetTimes();p.default.resetTimes();g.default.resetTimes();m.default.resetTimes();b.default.resetTimes()}
/**
         * Syncs the duration times to the times provided.
         *
         * @param {Object} currentTime - An object representing the current time of the audio.
         * @param {Object} songDuration - An object representing the duration of the audio
         */function syncDurationTimes(e,t){c.default.sync(e,t);b.default.sync(t);p.default.sync(t.hours);g.default.sync(t.minutes);m.default.sync(t.seconds)}return{resetCurrentTimes:resetCurrentTimes,syncCurrentTimes:syncCurrentTimes,resetDurationTimes:resetDurationTimes,syncDurationTimes:syncDurationTimes}}();t.default=P;e.exports=t.default},function(e,t,a){Object.defineProperty(t,"__esModule",{value:true});var l=a(0);var u=_interopRequireDefault(l);var n=a(4);_interopRequireDefault(n);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var i=function(){function run(){var e=document.querySelectorAll(".amplitude-visualization");if(u.default.web_audio_api_available){if(Object.keys(u.default.visualizations.available).length>0&&e.length>0)for(var t=0;t<e.length;t++){var a=e[t].getAttribute("data-amplitude-playlist");var l=e[t].getAttribute("data-amplitude-song-index");null==a&&null==l&&runGlobalVisualization(e[t]);null!=a&&null==l&&runPlaylistVisualization(e[t],a);null==a&&null!=l&&runSongVisualization(e[t],l);null!=a&&null!=l&&runSongInPlaylistVisualization(e[t],a,l)}}else displayBackups()}
/**
         * Runs a global visualization
         *
         * @param {Node} element  The container element that handles the visualization.
         */function runGlobalVisualization(e){var t=u.default.visualization;var a=null!=u.default.active_index?u.default.songs[u.default.active_index].visualization:u.default.playlists[u.default.active_playlist].songs[u.default.playlists[u.default.active_playlist].active_index].visualization;if(void 0!=a&&void 0!=u.default.visualizations.available[a])addToActiveVisualizations(a,e);else if(void 0!=t&&void 0!=u.default.visualizations.available[t])addToActiveVisualizations(t,e);else{var l=Object.keys(u.default.visualizations.available).length>0?Object.keys(u.default.visualizations.available)[0]:null;null!=l&&addToActiveVisualizations(l,e)}}
/**
         * Run a specific playlist visualization.
         *
         * @param {Node} element  The container element that handles the visualization.
         * @param {string} playlist The key of the playlist we are running the visualization for.
         */function runPlaylistVisualization(e,t){if(t==u.default.active_playlist){var a=u.default.playlists[u.default.active_playlist].songs[u.default.playlists[u.default.active_playlist].active_index].visualization;var l=u.default.playlists[u.default.active_playlist].visualization;var n=u.default.visualization;if(void 0!=a&&void 0!=u.default.visualizations.available[a])addToActiveVisualizations(a,e);else if(void 0!=l&&void 0!=u.default.visualizations.available[l])addToActiveVisualizations(l,e);else if(void 0!=n&&void 0!=u.default.visualizations.available[n])addToActiveVisualizations(n,e);else{var i=Object.keys(u.default.visualizations.available).length>0?Object.keys(u.default.visualizations.available)[0]:null;null!=i&&addToActiveVisualizations(i,e)}}}
/**
         * Run a song specific visualization.
         *
         * @param {Node} element The container element that handles the visualization.
         * @param {string} song The song index that we are running the visualization for.
         */function runSongVisualization(e,t){if(t==u.default.active_index){var a=u.default.songs[u.default.active_index].visualization;var l=u.default.visualization;if(void 0!=a&&void 0!=u.default.visualizations.available[a])addToActiveVisualizations(a,e);else if(void 0!=l&&void 0!=u.default.visualizations.available[l])addToActiveVisualizations(l,e);else{var n=Object.keys(u.default.visualizations.available).length>0?Object.keys(u.default.visualizations.available)[0]:null;null!=n&&addToActiveVisualizations(n,e)}}}
/**
         * Run a song in playlist visualization.
         *
         * @param {Node} element - The element containing the visualization.
         * @param {string} playlist - The string of the playlist key.
         * @param {index} song - The index of the song in the playlist.
         */function runSongInPlaylistVisualization(e,t,a){if(t==u.default.active_playlist&&u.default.playlists[t].active_index==a){var l=u.default.playlists[u.default.active_playlist].songs[u.default.playlists[u.default.active_playlist].active_index].visualization;var n=u.default.playlists[u.default.active_playlist].visualization;var i=u.default.visualization;if(void 0!=l&&void 0!=u.default.visualizations.available[l])addToActiveVisualizations(l,e);else if(void 0!=n&&void 0!=u.default.visualizations.available[n])addToActiveVisualizations(n,e);else if(void 0!=i&&void 0!=u.default.visualizations.available[i])addToActiveVisualizations(i,e);else{var r=Object.keys(u.default.visualizations.available).length>0?Object.keys(u.default.visualizations.available)[0]:null;null!=r&&addToActiveVisualizations(r,e)}}}
/**
         * Add a visualization to the array of active visualizations.
         *
         * @param {string} key - The key of the active visualization.
         * @param {Node} element - The element that the visualization will be applied to.
         */function addToActiveVisualizations(e,t){var a=new u.default.visualizations.available[e].object;a.setPreferences(u.default.visualizations.available[e].preferences);a.startVisualization(t);u.default.visualizations.active.push(a)}function stop(){for(var e=0;e<u.default.visualizations.active.length;e++)u.default.visualizations.active[e].stopVisualization();u.default.visualizations.active=[]}
/**
         * Registers any visualization we can use.
         *
         * @param {object} visualization The visualization object itself
         * @param {object} preferences User preferences overrides.
         */function register(e,t){var a=new e;u.default.visualizations.available[a.getID()]=new Array;u.default.visualizations.available[a.getID()].object=e;u.default.visualizations.available[a.getID()].preferences=t}function displayBackups(){var e=document.querySelectorAll(".amplitude-visualization");if(e.length>0)for(var t=0;t<e.length;t++){var a=e[t].getAttribute("data-amplitude-playlist");var l=e[t].getAttribute("data-amplitude-song-index");null==a&&null==l&&displayGlobalBackup(e[t]);null!=a&&null==l&&displayPlaylistBackup(e[t],a);null==a&&null!=l&&displaySongBackup(e[t],l);null!=a&&null!=l&&displaySongInPlaylistBackup(e[t],a,l)}}
/**
         * Displays the global backup which is the cover art of the image in the
         * visualization container.
         *
         * @param {node} element  - The element we are adding the background image to.
         */function displayGlobalBackup(e){e.style.backgroundImage="url("+u.default.active_metadata.cover_art_url+")"}
/**
         * Displays the playlist backup which is the cover art of the image in the
         * visualization container.
         *
         * @param {node} element  - The element we are adding the background image to.
         */function displayPlaylistBackup(e,t){u.default.active_playlist==t&&(e.style.backgroundImage="url("+u.default.active_metadata.cover_art_url+")")}
/**
         * Displays the song backup which is the cover art of the image in the
         * visualization container.
         *
         * @param {node} element  - The element we are adding the background image to.
         */function displaySongBackup(e,t){u.default.active_index==t&&(e.style.backgroundImage="url("+u.default.active_metadata.cover_art_url+")")}
/**
         * Displays the song in playlist backup which is the cover art of the image in the
         * visualization container.
         *
         * @param {node} element  - The element we are adding the background image to.
         */function displaySongInPlaylistBackup(e,t,a){u.default.active_playlist==t&&u.default.playlists[active_playlist].active_index==a&&(e.style.backgroundImage="url("+u.default.active_metadata.cover_art_url+")")}return{run:run,stop:stop,register:register}}();t.default=i;e.exports=t.default},function(e,t,a){Object.defineProperty(t,"__esModule",{value:true});var l=a(0);var u=_interopRequireDefault(l);var n=a(21);var i=_interopRequireDefault(n);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var r=function(){
/**
         * Defines the temporary user config used while we configure soundcloud
         * @type {object}
         */
var e={};
/**
         * Loads the soundcloud SDK for use with Amplitude so the user doesn't have
         * to load it themselves.
         * With help from: http://stackoverflow.com/questions/950087/include-a-javascript-file-in-another-javascript-file
         *
         * @access public
         * @param {object} userConfig 	- The config defined by the user for AmplitudeJS
         */function loadSoundCloud(t){e=t;var a=document.getElementsByTagName("head")[0];var l=document.createElement("script");l.type="text/javascript";l.src="https://connect.soundcloud.com/sdk.js";l.onreadystatechange=initSoundcloud;l.onload=initSoundcloud;a.appendChild(l)}function initSoundcloud(){SC.initialize({client_id:u.default.soundcloud_client});getStreamableURLs()}function getStreamableURLs(){var e=/^https?:\/\/(soundcloud.com|snd.sc)\/(.*)$/;for(var t=0;t<u.default.songs.length;t++)if(u.default.songs[t].url.match(e)){u.default.soundcloud_song_count++;resolveStreamable(u.default.songs[t].url,t)}}
/**
         * Resolves an individual streamable URL.
         *
         * @param {string} url - The URL of the SoundCloud song to get the streamable URL from.
         * @param {string} playlist - The playlist we are getting the streamable URL for.
         * @param {Integer} index - The index of the song in the playlist or the songs array.
         * @param {boolean} addToShuffleList - Whether we add to the shuffle list for the songs or playlist.
         *
         */function resolveIndividualStreamableURL(e,t,a){var l=arguments.length>3&&void 0!==arguments[3]&&arguments[3];SC.get("/resolve/?url="+e,(function(e){if(e.streamable)if(null!=t){u.default.playlists[t].songs[a].url=e.stream_url+"?client_id="+u.default.soundcloud_client;l&&(u.default.playlists[t].shuffle_list[a].url=e.stream_url+"?client_id="+u.default.soundcloud_client);if(u.default.soundcloud_use_art){u.default.playlists[t].songs[a].cover_art_url=e.artwork_url;l&&(u.default.playlists[t].shuffle_list[a].cover_art_url=e.artwork_url)}u.default.playlists[t].songs[a].soundcloud_data=e;l&&(u.default.playlists[t].shuffle_list[a].soundcloud_data=e)}else{u.default.songs[a].url=e.stream_url+"?client_id="+u.default.soundcloud_client;l&&u.default.shuffle_list[a].stream_url+"?client_id="+u.default.soundcloud_client;if(u.default.soundcloud_use_art){u.default.songs[a].cover_art_url=e.artwork_url;l&&(u.default.shuffle_list[a].cover_art_url=e.artwork_url)}u.default.songs[a].soundcloud_data=e;l&&(u.default.shuffle_list[a].soundcloud_data=e)}else null!=t?AmplitudeHelpers.writeDebugMessage(u.default.playlists[t].songs[a].name+" by "+u.default.playlists[t].songs[a].artist+" is not streamable by the Soundcloud API"):AmplitudeHelpers.writeDebugMessage(u.default.songs[a].name+" by "+u.default.songs[a].artist+" is not streamable by the Soundcloud API")}))}
/**
         * Due to Soundcloud SDK being asynchronous, we need to scope the
         * index of the song in another function. The privateGetSoundcloudStreamableURLs
         * function does the actual iteration and scoping.
         *
         * @access private
         * @param {string} url 		- URL of the soundcloud song
         * @param {number} index 	- The index of the soundcloud song in the songs array.
         */function resolveStreamable(t,a){SC.get("/resolve/?url="+t,(function(t){if(t.streamable){u.default.songs[a].url=t.stream_url+"?client_id="+u.default.soundcloud_client;u.default.soundcloud_use_art&&(u.default.songs[a].cover_art_url=t.artwork_url);u.default.songs[a].soundcloud_data=t}else AmplitudeHelpers.writeDebugMessage(u.default.songs[a].name+" by "+u.default.songs[a].artist+" is not streamable by the Soundcloud API");u.default.soundcloud_songs_ready++;u.default.soundcloud_songs_ready==u.default.soundcloud_song_count&&i.default.setConfig(e)}))}
/**
         * Determines if a given URL is a SoundCloud URL.
         *
         * @param {string} url - The URL to test if it's a SoundCloud URL.
         */function isSoundCloudURL(e){var t=/^https?:\/\/(soundcloud.com|snd.sc)\/(.*)$/;return e.match(t)}return{loadSoundCloud:loadSoundCloud,resolveIndividualStreamableURL:resolveIndividualStreamableURL,isSoundCloudURL:isSoundCloudURL}}();t.default=r;e.exports=t.default},function(e,t,a){Object.defineProperty(t,"__esModule",{value:true});var l=a(0);var u=_interopRequireDefault(l);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var n=function(){function sync(){var e=document.getElementsByClassName("amplitude-playback-speed");for(var t=0;t<e.length;t++){e[t].classList.remove("amplitude-playback-speed-10");e[t].classList.remove("amplitude-playback-speed-15");e[t].classList.remove("amplitude-playback-speed-20");switch(u.default.playback_speed){case 1:e[t].classList.add("amplitude-playback-speed-10");break;case 1.5:e[t].classList.add("amplitude-playback-speed-15");break;case 2:e[t].classList.add("amplitude-playback-speed-20");break}}}return{sync:sync}}();t.default=n;e.exports=t.default},function(e,t,a){Object.defineProperty(t,"__esModule",{value:true});var l=a(0);var u=_interopRequireDefault(l);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var n=function(){function syncMain(){var e=document.getElementsByClassName("amplitude-shuffle");for(var t=0;t<e.length;t++)if(null==e[t].getAttribute("data-amplitude-playlist"))if(u.default.shuffle_on){e[t].classList.add("amplitude-shuffle-on");e[t].classList.remove("amplitude-shuffle-off")}else{e[t].classList.add("amplitude-shuffle-off");e[t].classList.remove("amplitude-shuffle-on")}}
/**
         * Syncs the playlist shuffle button visual state.
         *
         * @access public
         * @param {string} playlist - The playlist string the shuffle button belongs to.
         */function syncPlaylist(e){var t=document.querySelectorAll('.amplitude-shuffle[data-amplitude-playlist="'+e+'"]');for(var a=0;a<t.length;a++)if(u.default.playlists[e].shuffle){t[a].classList.add("amplitude-shuffle-on");t[a].classList.remove("amplitude-shuffle-off")}else{t[a].classList.add("amplitude-shuffle-off");t[a].classList.remove("amplitude-shuffle-on")}}return{syncMain:syncMain,syncPlaylist:syncPlaylist}}();t.default=n;e.exports=t.default},function(e,t,a){Object.defineProperty(t,"__esModule",{value:true});var l=a(0);var u=_interopRequireDefault(l);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var n=function(){
/**
         * Syncs the song played progress bars. These are HTML5 progress elements.
         *
         * @access private
         * @param {number} songPlayedPercentage  	- The percentage of the song that has been played.
         */
function sync(e){syncGlobal(e);syncPlaylist(e);syncSong(e);syncSongInPlaylist(e)}
/**
         * Sync how much has been played with a progress bar. This is the global progress bar.
         *
         * @access private
         * @param {number} songPlayedPercentage 	- The percent of the song completed.
         */function syncGlobal(e){if(!isNaN(e)){var t=document.querySelectorAll(".amplitude-song-played-progress");for(var a=0;a<t.length;a++){var l=t[a].getAttribute("data-amplitude-playlist");var u=t[a].getAttribute("data-amplitude-song-index");if(null==l&&null==u){var n=t[a].max;t[a].value=e/100*n}}}}
/**
         * Sync how much has been played with a progress bar. This is the playlist progress bar.
         *
         * @access public
         * @param {number} songPlayedPercentage 	- The percent of the song completed.
         */function syncPlaylist(e){if(!isNaN(e)){var t=document.querySelectorAll('.amplitude-song-played-progress[data-amplitude-playlist="'+u.default.active_playlist+'"]');for(var a=0;a<t.length;a++){var l=t[a].getAttribute("data-amplitude-song-index");if(null==l){var n=t[a].max;t[a].value=e/100*n}}}}
/**
         * Sync how much has been played with a progress bar. This is for an individual song.
         *
         * @access private
         * @param {number} songPlayedPercentage 	- The percent of the song completed.
         */function syncSong(e){if(null==u.default.active_playlist&&!isNaN(e)){var t=document.querySelectorAll('.amplitude-song-played-progress[data-amplitude-song-index="'+u.default.active_index+'"]');for(var a=0;a<t.length;a++){var l=t[a].getAttribute("data-amplitude-playlist");if(null==l){var n=t[a].max;t[a].value=e/100*n}}}}
/**
         * Sync how much has been played with a progress bar. This is for an individual song in playlist.
         *
         * @access private
         * @param {number} songPlayedPercentage 	- The percent of the song completed.
         */function syncSongInPlaylist(e){if(!isNaN(e)){var t=""!=u.default.active_playlist&&null!=u.default.active_playlist?u.default.playlists[u.default.active_playlist].active_index:null;var a=document.querySelectorAll('.amplitude-song-played-progress[data-amplitude-playlist="'+u.default.active_playlist+'"][data-amplitude-song-index="'+t+'"]');for(var l=0;l<a.length;l++){var n=a[l].getAttribute("data-amplitude-playlist");var i=a[l].getAttribute("data-amplitude-song-index");if(null!=n&&null!=i){var r=a[l].max;a[l].value=e/100*r}}}}function resetElements(){var e=document.getElementsByClassName("amplitude-song-played-progress");for(var t=0;t<e.length;t++)e[t].value=0}return{sync:sync,resetElements:resetElements}}();t.default=n;e.exports=t.default},function(e,t,a){Object.defineProperty(t,"__esModule",{value:true});var l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};var u=a(0);var n=_interopRequireDefault(u);var i=a(1);var r=_interopRequireDefault(i);var s=a(17);var d=_interopRequireDefault(s);var o=a(6);var f=_interopRequireDefault(o);var c=a(4);var v=_interopRequireDefault(c);var p=a(5);var y=_interopRequireDefault(p);var g=a(13);var _=_interopRequireDefault(g);var m=a(26);var h=_interopRequireDefault(m);var b=a(46);var P=_interopRequireDefault(b);var S=a(16);var A=_interopRequireDefault(S);var D=a(22);var q=_interopRequireDefault(D);var R=a(3);var x=_interopRequireDefault(R);var M=a(9);var L=_interopRequireDefault(M);var w=a(48);var T=_interopRequireDefault(w);var k=a(19);var E=_interopRequireDefault(k);var I=a(10);var z=_interopRequireDefault(I);var C=a(11);var O=_interopRequireDefault(C);var N=a(15);var j=_interopRequireDefault(N);var B=a(2);var V=_interopRequireDefault(B);var H=a(7);var G=_interopRequireDefault(H);var U=a(18);var W=_interopRequireDefault(U);var F=a(8);var K=_interopRequireDefault(F);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var Y=function(){
/**
         * The main init function.  The user will call this through
         * Amplitude.init({}) and pass in their settings.
         *
         * Public Accessor: Amplitude.init( user_config_json )
         * @access public
         * @param {object} userConfig - A JSON object of user defined values that help configure and initialize AmplitudeJS.
         */
function initialize(e){var t=false;f.default.resetConfig();h.default.initialize();L.default.initialize();n.default.debug=void 0!=e.debug&&e.debug;setArt(e);if(e.songs)if(0!=e.songs.length){n.default.songs=e.songs;t=true}else v.default.writeMessage("Please add some songs, to your songs object!");else v.default.writeMessage("Please provide a songs object for AmplitudeJS to run!");if(P.default.webAudioAPIAvailable()){if(P.default.determineUsingAnyFX()){P.default.configureWebAudioAPI();document.documentElement.addEventListener("mousedown",(function(){"running"!==n.default.context.state&&n.default.context.resume()}));document.documentElement.addEventListener("keydown",(function(){"running"!==n.default.context.state&&n.default.context.resume()}));document.documentElement.addEventListener("keyup",(function(){"running"!==n.default.context.state&&n.default.context.resume()}));void 0!=e.waveforms&&void 0!=e.waveforms.sample_rate&&(n.default.waveforms.sample_rate=e.waveforms.sample_rate);q.default.init();if(void 0!=e.visualizations&&e.visualizations.length>0)for(var a=0;a<e.visualizations.length;a++)A.default.register(e.visualizations[a].object,e.visualizations[a].params)}}else v.default.writeMessage("The Web Audio API is not available on this platform. We are using your defined backups!");initializeDefaultLiveSettings();initializeDefaultSongIndexes();if(t){n.default.soundcloud_client=void 0!=e.soundcloud_client?e.soundcloud_client:"";n.default.soundcloud_use_art=void 0!=e.soundcloud_use_art?e.soundcloud_use_art:"";var l={};if(""!=n.default.soundcloud_client){l=e;d.default.loadSoundCloud(l)}else setConfig(e)}v.default.writeMessage("Initialized With: ");v.default.writeMessage(n.default)}function rebindDisplay(){h.default.initialize();G.default.displayMetaData()}
/**
         * Finishes the initalization of the config. Takes all of the user defined
         * parameters and makes sure they override the defaults. The important
         * config information is assigned in the publicInit() function.
         *
         * This function can be called from 2 different locations:
         * 	1. Right away on init after the important settings are defined.
         *
         * 	2. After all of the Soundcloud URLs are resolved properly and
         *	 	soundcloud is configured.  We will need the proper URLs from Soundcloud
         * 		to stream through Amplitude so we get those right away before we
         * 		set the information and the active song
         *
         * @access public
         * @param {object} userConfig - A JSON object of user defined values that help configure and initialize AmplitudeJS.
         */function setConfig(e){e.playlists&&countPlaylists(e.playlists)>0&&T.default.initialize(e.playlists);void 0==e.start_song||e.starting_playlist?x.default.changeSong(n.default.songs[0],0):y.default.isInt(e.start_song)?x.default.changeSong(n.default.songs[e.start_song],e.start_song):v.default.writeMessage("You must enter an integer index for the start song.");if(void 0!=e.shuffle_on&&e.shuffle_on){n.default.shuffle_on=true;_.default.shuffleSongs();x.default.changeSong(n.default.shuffle_list[0],0)}n.default.continue_next=void 0==e.continue_next||e.continue_next;n.default.playback_speed=void 0!=e.playback_speed?e.playback_speed:1;r.default.setPlaybackSpeed(n.default.playback_speed);n.default.audio.preload=void 0!=e.preload?e.preload:"auto";n.default.callbacks=void 0!=e.callbacks?e.callbacks:{};n.default.bindings=void 0!=e.bindings?e.bindings:{};n.default.volume=void 0!=e.volume?e.volume:50;n.default.delay=void 0!=e.delay?e.delay:0;n.default.volume_increment=void 0!=e.volume_increment?e.volume_increment:5;n.default.volume_decrement=void 0!=e.volume_decrement?e.volume_decrement:5;r.default.setVolume(n.default.volume);setArt(e);initializeElements();if(void 0!=e.starting_playlist&&""!=e.starting_playlist){n.default.active_playlist=e.starting_playlist;if(void 0!=e.starting_playlist_song&&""!=e.starting_playlist_song)if(void 0!=l(e.playlists[e.starting_playlist].songs[parseInt(e.starting_playlist_song)]))x.default.changeSongPlaylist(n.default.active_playlist,e.playlists[e.starting_playlist].songs[parseInt(e.starting_playlist_song)],parseInt(e.starting_playlist_song));else{x.default.changeSongPlaylist(n.default.active_playlist,e.playlists[e.starting_playlist].songs[0],0);v.default.writeMessage("The index of "+e.starting_playlist_song+" does not exist in the playlist "+e.starting_playlist)}else x.default.changeSong(n.default.active_playlist,e.playlists[e.starting_playlist].songs[0],0);V.default.sync()}L.default.run("initialized")}
/**
         * Sets the default_album_art and default_playlist_art from the
         * user supplied configuration.
         *
         * @access public
         * @param {object} userConfig - A JSON object of user defined values that help configure and initialize AmplitudeJS.
         */function setArt(e){void 0!=e.default_album_art?n.default.default_album_art=e.default_album_art:n.default.default_album_art="";void 0!=e.default_playlist_art?n.default.default_playlist_art=e.default_playlist_art:n.default.default_playlist_art=""}function initializeElements(){E.default.syncMain();z.default.setMuted(0==n.default.volume);O.default.sync();W.default.sync();j.default.resetCurrentTimes();V.default.syncToPause();G.default.syncMetaData();K.default.syncRepeatSong()}
/**
         * Counts the number of playlists the user has configured. This ensures
         * that the user has at least 1 playlist so we can validate the songs
         * defined in the playlist are correct and they didn't enter an invalid
         * ID.
         *
         * @access private
         * @param {object} playlists 	-
         */function countPlaylists(e){var t=0,a=void 0;for(a in e)e.hasOwnProperty(a)&&t++;v.default.writeMessage("You have "+t+" playlist(s) in your config");return t}function initializeDefaultLiveSettings(){for(var e=0;e<n.default.songs.length;e++)void 0==n.default.songs[e].live&&(n.default.songs[e].live=false)}function initializeDefaultSongIndexes(){for(var e=0;e<n.default.songs.length;e++)n.default.songs[e].index=e}return{initialize:initialize,setConfig:setConfig,rebindDisplay:rebindDisplay}}();t.default=Y;e.exports=t.default},function(e,t,a){Object.defineProperty(t,"__esModule",{value:true});var l=a(0);var u=_interopRequireDefault(l);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var n=function(){var e="";var t="";var a="";function init(){t=u.default.waveforms.sample_rate;var e=document.querySelectorAll(".amplitude-wave-form");if(e.length>0)for(var a=0;a<e.length;a++){e[a].innerHTML="";var l=document.createElementNS("http://www.w3.org/2000/svg","svg");l.setAttribute("viewBox","0 -1 "+t+" 2");l.setAttribute("preserveAspectRatio","none");var n=document.createElementNS("http://www.w3.org/2000/svg","g");l.appendChild(n);var i=document.createElementNS("http://www.w3.org/2000/svg","path");i.setAttribute("d","");i.setAttribute("id","waveform");n.appendChild(i);e[a].appendChild(l)}}function build(){if(u.default.web_audio_api_available)if(void 0==u.default.waveforms.built[Math.abs(u.default.audio.src.split("").reduce((function(e,t){e=(e<<5)-e+t.charCodeAt(0);return e&e}),0))]){var l=new XMLHttpRequest;l.open("GET",u.default.audio.src,true);l.responseType="arraybuffer";l.onreadystatechange=function(n){4==l.readyState&&200==l.status&&u.default.context.decodeAudioData(l.response,(function(l){e=l;a=getPeaks(t,e);process(t,e,a)}))};l.send()}else displayWaveForms(u.default.waveforms.built[Math.abs(u.default.audio.src.split("").reduce((function(e,t){e=(e<<5)-e+t.charCodeAt(0);return e&e}),0))])}
/**
         * Processes the audio and generates the waveform.
         *
         * @param {sampleRate} sampleRate - The rate we should sample the audio.
         * @param {arraybuffer} buffer - The Web Audio API
         * @param {array} peaks - The peaks in the audio.
         */function process(e,t,a){if(t){var l=a.length;var n="";for(var i=0;i<l;i++)n+=i%2===0?" M"+~~(i/2)+", "+a.shift():" L"+~~(i/2)+", "+a.shift();u.default.waveforms.built[Math.abs(u.default.audio.src.split("").reduce((function(e,t){e=(e<<5)-e+t.charCodeAt(0);return e&e}),0))]=n;displayWaveForms(u.default.waveforms.built[Math.abs(u.default.audio.src.split("").reduce((function(e,t){e=(e<<5)-e+t.charCodeAt(0);return e&e}),0))])}}
/**
         * Get the peaks of the audio for the waveform.
         *
         * @param {number} length - The sample size of the audio.
         * @param {array} buffer - The array buffer used to find the peaks in the audio.
         */function getPeaks(e,t){var a=t.length/e;var l=~~(a/10)||1;var u=t.numberOfChannels;var n=[];for(var i=0;i<u;i++){var r=[];var s=t.getChannelData(i);for(var d=0;d<e;d++){var o=~~(d*a);var f=~~(o+a);var c=s[0];var v=s[0];for(var p=o;p<f;p+=l){var y=s[p];y>v&&(v=y);y<c&&(c=y)}r[2*d]=v;r[2*d+1]=c;(0===i||v>n[2*d])&&(n[2*d]=v);(0===i||c<n[2*d+1])&&(n[2*d+1]=c)}}return n}
/**
         * Displays all of the waveforms necessary.
         *
         * @param {path} svg - The drawing of the waveform.
         */function displayWaveForms(e){var t=document.querySelectorAll(".amplitude-wave-form");for(var a=0;a<t.length;a++){var l=t[a].getAttribute("data-amplitude-playlist");var u=t[a].getAttribute("data-amplitude-song-index");null==l&&null==u&&displayGlobalWaveform(t[a],e);null!=l&&null==u&&displayPlaylistWaveform(t[a],e,l);null==l&&null!=u&&displaySongWaveform(t[a],e,u);null!=l&&null!=u&&displaySongInPlaylistWaveform(t[a],e,l,u)}}
/**
         * Displays a global wave form.
         *
         * @param {Node} element - Element to display the waveform in.
         * @param {SVG} svg - The waveform path.
         */function displayGlobalWaveform(e,t){var a=e.querySelector("svg g path");a.setAttribute("d",t)}
/**
         * Displays a playlist wave form.
         *
         * @param {Node} element - Element to display the waveform in.
         * @param {SVG} svg - The waveform path.
         * @param {string} playlist - The playlist we are displaying the waveform for.
         */function displayPlaylistWaveform(e,t,a){if(u.default.active_playlist==a){var l=e.querySelector("svg g path");l.setAttribute("d",t)}}
/**
         * Displays a song wave form.
         *
         * @param {Node} element - Element to display the waveform in.
         * @param {SVG} svg - The waveform path.
         * @param {Integer} song - The index of the song we are displaying the
         * waveform for.
         */function displaySongWaveform(e,t,a){if(u.default.active_index==a){var l=e.querySelector("svg g path");l.setAttribute("d",t)}}
/**
         * Displays a song in playlist waveform.
         *
         * @param {Node} element - Element to display the waveform in.
         * @param {SVG} svg - The waveform path.
         * @param {String} playlist - The playlist the waveform is in.
         * @param {Integer} song - The index of the song we are displaying the waveform for.
         */function displaySongInPlaylistWaveform(e,t,a,l){if(u.default.active_playlist==a&&u.default.playlists[u.default.active_playlist].active_index==l){var n=e.querySelector("svg g path");n.setAttribute("d",t)}}function determineIfUsingWaveforms(){var e=document.querySelectorAll(".amplitude-wave-form");return e.length>0}return{init:init,build:build,determineIfUsingWaveforms:determineIfUsingWaveforms}}();t.default=n;e.exports=t.default},function(e,t,a){Object.defineProperty(t,"__esModule",{value:true});var l=a(0);var u=_interopRequireDefault(l);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var n=function(){function computeCurrentTimes(){var e={};var t=(Math.floor(u.default.audio.currentTime%60)<10?"0":"")+Math.floor(u.default.audio.currentTime%60);var a=Math.floor(u.default.audio.currentTime/60);var l="00";a<10&&(a="0"+a);if(a>=60){l=Math.floor(a/60);a%=60;a<10&&(a="0"+a)}e.seconds=t;e.minutes=a;e.hours=l;return e}function computeSongDuration(){var e={};var t=(Math.floor(u.default.audio.duration%60)<10?"0":"")+Math.floor(u.default.audio.duration%60);var a=Math.floor(u.default.audio.duration/60);var l="00";a<10&&(a="0"+a);if(a>=60){l=Math.floor(a/60);a%=60;a<10&&(a="0"+a)}e.seconds=isNaN(t)?"00":t;e.minutes=isNaN(a)?"00":a;e.hours=isNaN(l)?"00":l.toString();return e}function computeSongCompletionPercentage(){return u.default.audio.currentTime/u.default.audio.duration*100}function setCurrentTime(e){u.default.active_metadata.live||isFinite(e)&&(u.default.audio.currentTime=e)}return{computeCurrentTimes:computeCurrentTimes,computeSongDuration:computeSongDuration,computeSongCompletionPercentage:computeSongCompletionPercentage,setCurrentTime:setCurrentTime}}();t.default=n;e.exports=t.default},function(e,t,a){Object.defineProperty(t,"__esModule",{value:true});var l=a(0);var u=_interopRequireDefault(l);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var n=function(){function sync(){syncGlobal();syncPlaylist();syncSong();syncSongInPlaylist()}function syncGlobal(){var e=document.getElementsByClassName("amplitude-buffered-progress");for(var t=0;t<e.length;t++){var a=e[t].getAttribute("data-amplitude-playlist");var l=e[t].getAttribute("data-amplitude-song-index");null!=a||null!=l||isNaN(u.default.buffered)||(e[t].value=parseFloat(parseFloat(u.default.buffered)/100))}}function syncPlaylist(){var e=document.querySelectorAll('.amplitude-buffered-progress[data-amplitude-playlist="'+u.default.active_playlist+'"]');for(var t=0;t<e.length;t++){var a=e[t].getAttribute("data-amplitude-song-index");null!=a||isNaN(u.default.buffered)||(e[t].value=parseFloat(parseFloat(u.default.buffered)/100))}}function syncSong(){var e=document.querySelectorAll('.amplitude-buffered-progress[data-amplitude-song-index="'+u.default.active_index+'"]');for(var t=0;t<e.length;t++){var a=e[t].getAttribute("data-amplitude-playlist");null!=a||isNaN(u.default.buffered)||(e[t].value=parseFloat(parseFloat(u.default.buffered)/100))}}function syncSongInPlaylist(){var e=null!=u.default.active_playlist&&""!=u.default.active_playlist?u.default.playlists[u.default.active_playlist].active_index:null;var t=document.querySelectorAll('.amplitude-buffered-progress[data-amplitude-song-index="'+e+'"][data-amplitude-playlist="'+u.default.active_playlist+'"]');for(var a=0;a<t.length;a++)isNaN(u.default.buffered)||(t[a].value=parseFloat(parseFloat(u.default.buffered)/100))}function reset(){var e=document.getElementsByClassName("amplitude-buffered-progress");for(var t=0;t<e.length;t++)e[t].value=0}return{sync:sync,reset:reset}}();t.default=n;e.exports=t.default},function(e,t,a){Object.defineProperty(t,"__esModule",{value:true});var l=a(0);var u=_interopRequireDefault(l);var n=a(3);var i=_interopRequireDefault(n);var r=a(1);var s=_interopRequireDefault(r);var d=a(2);var o=_interopRequireDefault(d);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var f=function(){function handle(){setTimeout((function(){if(u.default.continue_next)""==u.default.active_playlist||null==u.default.active_playlist?i.default.setNext(true):i.default.setNextPlaylist(u.default.active_playlist,true);else if(!u.default.is_touch_moving){s.default.stop();o.default.sync()}}),u.default.delay)}return{handle:handle}}();t.default=f;e.exports=t.default},function(e,t,a){Object.defineProperty(t,"__esModule",{value:true});var l=a(0);var u=_interopRequireDefault(l);var n=a(27);var i=_interopRequireDefault(n);var r=a(42);var s=_interopRequireDefault(r);var d=a(25);var o=_interopRequireDefault(d);var f=a(35);var c=_interopRequireDefault(f);var v=a(31);var p=_interopRequireDefault(v);var y=a(30);var g=_interopRequireDefault(y);var _=a(32);var m=_interopRequireDefault(_);var h=a(41);var b=_interopRequireDefault(h);var P=a(28);var S=_interopRequireDefault(P);var A=a(45);var D=_interopRequireDefault(A);var q=a(43);var R=_interopRequireDefault(q);var x=a(40);var M=_interopRequireDefault(x);var L=a(44);var w=_interopRequireDefault(L);var T=a(29);var k=_interopRequireDefault(T);var E=a(34);var I=_interopRequireDefault(E);var z=a(36);var C=_interopRequireDefault(z);var O=a(37);var N=_interopRequireDefault(O);var j=a(33);var B=_interopRequireDefault(j);var V=a(38);var H=_interopRequireDefault(V);var G=a(39);var U=_interopRequireDefault(G);var W=a(22);var F=_interopRequireDefault(W);var K=a(4);var Y=_interopRequireDefault(K);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var X=function(){function initialize(){Y.default.writeMessage("Beginning initialization of event handlers..");document.addEventListener("touchmove",(function(){u.default.is_touch_moving=true}));document.addEventListener("touchend",(function(){u.default.is_touch_moving&&(u.default.is_touch_moving=false)}));bindTimeUpdate();bindKeyDownEventHandlers();bindSongEnded();bindProgress();bindPlay();bindPause();bindPlayPause();bindStop();bindMute();bindVolumeUp();bindVolumeDown();bindSongSlider();bindVolumeSlider();bindNext();bindPrev();bindShuffle();bindRepeat();bindRepeatSong();bindPlaybackSpeed();bindSkipTo();bindCanPlayThrough()}function bindTimeUpdate(){u.default.audio.removeEventListener("timeupdate",s.default.handle);u.default.audio.addEventListener("timeupdate",s.default.handle);u.default.audio.removeEventListener("durationchange",s.default.handle);u.default.audio.addEventListener("durationchange",s.default.handle)}function bindKeyDownEventHandlers(){document.removeEventListener("keydown",i.default.handle);document.addEventListener("keydown",i.default.handle)}function bindSongEnded(){u.default.audio.removeEventListener("ended",o.default.handle);u.default.audio.addEventListener("ended",o.default.handle)}function bindProgress(){u.default.audio.removeEventListener("progress",c.default.handle);u.default.audio.addEventListener("progress",c.default.handle)}function bindPlay(){var e=document.getElementsByClassName("amplitude-play");for(var t=0;t<e.length;t++)if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){e[t].removeEventListener("touchend",p.default.handle);e[t].addEventListener("touchend",p.default.handle)}else{e[t].removeEventListener("click",p.default.handle);e[t].addEventListener("click",p.default.handle)}}function bindPause(){var e=document.getElementsByClassName("amplitude-pause");for(var t=0;t<e.length;t++)if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){e[t].removeEventListener("touchend",g.default.handle);e[t].addEventListener("touchend",g.default.handle)}else{e[t].removeEventListener("click",g.default.handle);e[t].addEventListener("click",g.default.handle)}}function bindPlayPause(){var e=document.getElementsByClassName("amplitude-play-pause");for(var t=0;t<e.length;t++)if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){e[t].removeEventListener("touchend",m.default.handle);e[t].addEventListener("touchend",m.default.handle)}else{e[t].removeEventListener("click",m.default.handle);e[t].addEventListener("click",m.default.handle)}}function bindStop(){var e=document.getElementsByClassName("amplitude-stop");for(var t=0;t<e.length;t++)if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){e[t].removeEventListener("touchend",b.default.handle);e[t].addEventListener("touchend",b.default.handle)}else{e[t].removeEventListener("click",b.default.handle);e[t].addEventListener("click",b.default.handle)}}function bindMute(){var e=document.getElementsByClassName("amplitude-mute");for(var t=0;t<e.length;t++)if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))if(/iPhone|iPad|iPod/i.test(navigator.userAgent))Y.default.writeMessage("iOS does NOT allow volume to be set through javascript: https://developer.apple.com/library/safari/documentation/AudioVideo/Conceptual/Using_HTML5_Audio_Video/Device-SpecificConsiderations/Device-SpecificConsiderations.html#//apple_ref/doc/uid/TP40009523-CH5-SW4");else{e[t].removeEventListener("touchend",S.default.handle);e[t].addEventListener("touchend",S.default.handle)}else{e[t].removeEventListener("click",S.default.handle);e[t].addEventListener("click",S.default.handle)}}function bindVolumeUp(){var e=document.getElementsByClassName("amplitude-volume-up");for(var t=0;t<e.length;t++)if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))if(/iPhone|iPad|iPod/i.test(navigator.userAgent))Y.default.writeMessage("iOS does NOT allow volume to be set through javascript: https://developer.apple.com/library/safari/documentation/AudioVideo/Conceptual/Using_HTML5_Audio_Video/Device-SpecificConsiderations/Device-SpecificConsiderations.html#//apple_ref/doc/uid/TP40009523-CH5-SW4");else{e[t].removeEventListener("touchend",D.default.handle);e[t].addEventListener("touchend",D.default.handle)}else{e[t].removeEventListener("click",D.default.handle);e[t].addEventListener("click",D.default.handle)}}function bindVolumeDown(){var e=document.getElementsByClassName("amplitude-volume-down");for(var t=0;t<e.length;t++)if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))if(/iPhone|iPad|iPod/i.test(navigator.userAgent))Y.default.writeMessage("iOS does NOT allow volume to be set through javascript: https://developer.apple.com/library/safari/documentation/AudioVideo/Conceptual/Using_HTML5_Audio_Video/Device-SpecificConsiderations/Device-SpecificConsiderations.html#//apple_ref/doc/uid/TP40009523-CH5-SW4");else{e[t].removeEventListener("touchend",R.default.handle);e[t].addEventListener("touchend",R.default.handle)}else{e[t].removeEventListener("click",R.default.handle);e[t].addEventListener("click",R.default.handle)}}function bindSongSlider(){var e=window.navigator.userAgent;var t=e.indexOf("MSIE ");var a=document.getElementsByClassName("amplitude-song-slider");for(var l=0;l<a.length;l++)if(t>0||!!navigator.userAgent.match(/Trident.*rv\:11\./)){a[l].removeEventListener("change",M.default.handle);a[l].addEventListener("change",M.default.handle)}else{a[l].removeEventListener("input",M.default.handle);a[l].addEventListener("input",M.default.handle)}}function bindVolumeSlider(){var e=window.navigator.userAgent;var t=e.indexOf("MSIE ");var a=document.getElementsByClassName("amplitude-volume-slider");for(var l=0;l<a.length;l++)if(/iPhone|iPad|iPod/i.test(navigator.userAgent))Y.default.writeMessage("iOS does NOT allow volume to be set through javascript: https://developer.apple.com/library/safari/documentation/AudioVideo/Conceptual/Using_HTML5_Audio_Video/Device-SpecificConsiderations/Device-SpecificConsiderations.html#//apple_ref/doc/uid/TP40009523-CH5-SW4");else if(t>0||!!navigator.userAgent.match(/Trident.*rv\:11\./)){a[l].removeEventListener("change",w.default.handle);a[l].addEventListener("change",w.default.handle)}else{a[l].removeEventListener("input",w.default.handle);a[l].addEventListener("input",w.default.handle)}}function bindNext(){var e=document.getElementsByClassName("amplitude-next");for(var t=0;t<e.length;t++)if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){e[t].removeEventListener("touchend",k.default.handle);e[t].addEventListener("touchend",k.default.handle)}else{e[t].removeEventListener("click",k.default.handle);e[t].addEventListener("click",k.default.handle)}}function bindPrev(){var e=document.getElementsByClassName("amplitude-prev");for(var t=0;t<e.length;t++)if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){e[t].removeEventListener("touchend",I.default.handle);e[t].addEventListener("touchend",I.default.handle)}else{e[t].removeEventListener("click",I.default.handle);e[t].addEventListener("click",I.default.handle)}}function bindShuffle(){var e=document.getElementsByClassName("amplitude-shuffle");for(var t=0;t<e.length;t++){e[t].classList.remove("amplitude-shuffle-on");e[t].classList.add("amplitude-shuffle-off");if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){e[t].removeEventListener("touchend",H.default.handle);e[t].addEventListener("touchend",H.default.handle)}else{e[t].removeEventListener("click",H.default.handle);e[t].addEventListener("click",H.default.handle)}}}function bindRepeat(){var e=document.getElementsByClassName("amplitude-repeat");for(var t=0;t<e.length;t++){e[t].classList.remove("amplitude-repeat-on");e[t].classList.add("amplitude-repeat-off");if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){e[t].removeEventListener("touchend",C.default.handle);e[t].addEventListener("touchend",C.default.handle)}else{e[t].removeEventListener("click",C.default.handle);e[t].addEventListener("click",C.default.handle)}}}function bindRepeatSong(){var e=document.getElementsByClassName("amplitude-repeat-song");for(var t=0;t<e.length;t++){e[t].classList.remove("amplitude-repeat-on");e[t].classList.add("amplitude-repeat-off");if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){e[t].removeEventListener("touchend",N.default.handle);e[t].addEventListener("touchend",N.default.handle)}else{e[t].removeEventListener("click",N.default.handle);e[t].addEventListener("click",N.default.handle)}}}function bindPlaybackSpeed(){var e=document.getElementsByClassName("amplitude-playback-speed");for(var t=0;t<e.length;t++)if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){e[t].removeEventListener("touchend",B.default.handle);e[t].addEventListener("touchend",B.default.handle)}else{e[t].removeEventListener("click",B.default.handle);e[t].addEventListener("click",B.default.handle)}}function bindSkipTo(){var e=document.getElementsByClassName("amplitude-skip-to");for(var t=0;t<e.length;t++)if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){e[t].removeEventListener("touchend",U.default.handle);e[t].addEventListener("touchend",U.default.handle)}else{e[t].removeEventListener("click",U.default.handle);e[t].addEventListener("click",U.default.handle)}}function bindCanPlayThrough(){if(F.default.determineIfUsingWaveforms()){u.default.audio.removeEventListener("canplaythrough",F.default.build);u.default.audio.addEventListener("canplaythrough",F.default.build)}}return{initialize:initialize}}();t.default=X;e.exports=t.default},function(e,t,a){Object.defineProperty(t,"__esModule",{value:true});var l=a(0);var u=_interopRequireDefault(l);var n=a(1);var i=_interopRequireDefault(n);var r=a(13);var s=_interopRequireDefault(r);var d=a(12);var o=_interopRequireDefault(d);var f=a(3);var c=_interopRequireDefault(f);var v=a(8);var p=_interopRequireDefault(v);var y=a(2);var g=_interopRequireDefault(y);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var _=function(){function handle(e){runKeyEvent(e.which)}
/**
         * Runs an event on key down
         *
         * @access public
         * @param {number} key 	- The key code the event is bound to.
         */function runKeyEvent(e){if(void 0!=u.default.bindings[e])switch(u.default.bindings[e]){case"play_pause":runPlayPauseKeyDownEvent();break;case"next":runNextKeyDownEvent();break;case"prev":runPrevKeyDownEvent();break;case"stop":runStopKeyDownEvent();break;case"shuffle":runShuffleKeyDownEvent();break;case"repeat":runRepeatKeyDownEvent();break}}function runPlayPauseKeyDownEvent(){u.default.audio.paused?i.default.play():i.default.pause();g.default.sync()}function runNextKeyDownEvent(){""==u.default.active_playlist||null==u.default.active_playlist?c.default.setNext():c.default.setNextPlaylist(u.default.active_playlist)}function runPrevKeyDownEvent(){""==u.default.active_playlist||null==u.default.active_playlist?c.default.setPrevious():c.default.setPreviousPlaylist(u.default.active_playlist)}function runStopKeyDownEvent(){g.default.syncToPause();i.default.stop()}function runShuffleKeyDownEvent(){""==u.default.active_playlist||null==u.default.active_playlist?s.default.toggleShuffle():s.default.toggleShufflePlaylist(u.default.active_playlist)}function runRepeatKeyDownEvent(){o.default.setRepeat(!u.default.repeat);p.default.syncRepeat()}return{handle:handle}}();t.default=_;e.exports=t.default},function(e,t,a){Object.defineProperty(t,"__esModule",{value:true});var l=a(0);var u=_interopRequireDefault(l);var n=a(1);var i=_interopRequireDefault(n);var r=a(10);var s=_interopRequireDefault(r);var d=a(11);var o=_interopRequireDefault(d);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var f=function(){function handle(){if(!u.default.is_touch_moving){if(0==u.default.volume)i.default.setVolume(u.default.pre_mute_volume);else{u.default.pre_mute_volume=u.default.volume;i.default.setVolume(0)}s.default.setMuted(0==u.default.volume);o.default.sync()}}return{handle:handle}}();t.default=f;e.exports=t.default},function(e,t,a){Object.defineProperty(t,"__esModule",{value:true});var l=a(0);var u=_interopRequireDefault(l);var n=a(1);_interopRequireDefault(n);var i=a(2);_interopRequireDefault(i);var r=a(9);_interopRequireDefault(r);var s=a(3);var d=_interopRequireDefault(s);var o=a(4);var f=_interopRequireDefault(o);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var c=function(){function handle(){if(!u.default.is_touch_moving){var e=this.getAttribute("data-amplitude-playlist");null==e&&handleGlobalNext();null!=e&&handlePlaylistNext(e)}}function handleGlobalNext(){""==u.default.active_playlist||null==u.default.active_playlist?d.default.setNext():d.default.setNextPlaylist(u.default.active_playlist)}function handlePlaylistNext(e){e==u.default.active_playlist?d.default.setNextPlaylist(e):f.default.writeMessage("You can not go to the next song on a playlist that is not being played!")}return{handle:handle}}();t.default=c;e.exports=t.default},function(e,t,a){Object.defineProperty(t,"__esModule",{value:true});var l=a(0);var u=_interopRequireDefault(l);var n=a(6);_interopRequireDefault(n);var i=a(1);var r=_interopRequireDefault(i);var s=a(2);var d=_interopRequireDefault(s);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var o=function(){function handle(){if(!u.default.is_touch_moving){var e=this.getAttribute("data-amplitude-song-index");var t=this.getAttribute("data-amplitude-playlist");null==t&&null==e&&handleGlobalPause();null!=t&&null==e&&handlePlaylistPause(t);null==t&&null!=e&&handleSongPause(e);null!=t&&null!=e&&handleSongInPlaylistPause(t,e)}}function handleGlobalPause(){r.default.pause();d.default.sync()}
/**
         * Handles the playlist pause.
         *
         * @access private
         * @param {string} playlist The playlist the pause button belongs to.
         */function handlePlaylistPause(e){if(u.default.active_playlist==e){r.default.pause();d.default.sync()}}
/**
         * Handles the song pause.
         *
         * @access private
         * @param {integer} song The song the pause button belongs to.
         */function handleSongPause(e){if((""==u.default.active_playlist||null==u.default.active_playlist)&&u.default.active_index==e){r.default.pause();d.default.sync()}}
/**
         * Handles the song in playlist pause.
         *
         * @access private
         * @param {string} playlist The playlist the pause button belongs to.
         * @param {integer} song The song the pause button belongs to.
         */function handleSongInPlaylistPause(e,t){if(u.default.active_playlist==e&&u.default.playlists[e].active_index==t){r.default.pause();d.default.sync()}}return{handle:handle}}();t.default=o;e.exports=t.default},function(e,t,a){Object.defineProperty(t,"__esModule",{value:true});var l=a(0);var u=_interopRequireDefault(l);var n=a(6);_interopRequireDefault(n);var i=a(1);var r=_interopRequireDefault(i);var s=a(5);var d=_interopRequireDefault(s);var o=a(3);var f=_interopRequireDefault(o);var c=a(2);var v=_interopRequireDefault(c);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var p=function(){function handle(){if(!u.default.is_touch_moving){var e=this.getAttribute("data-amplitude-song-index");var t=this.getAttribute("data-amplitude-playlist");null==t&&null==e&&handleGlobalPlay();null!=t&&null==e&&handlePlaylistPlay(t);null==t&&null!=e&&handleSongPlay(e);null!=t&&null!=e&&handleSongInPlaylistPlay(t,e)}}function handleGlobalPlay(){r.default.play();v.default.sync()}
/**
         * Handle the playlist play.
         *
         * @access private
         * @param {string} playlist The playlist the play button belongs to.
         */function handlePlaylistPlay(e){if(d.default.newPlaylist(e)){f.default.setActivePlaylist(e);u.default.playlists[e].shuffle?f.default.changeSongPlaylist(e,u.default.playlists[e].shuffle_list[0],0):f.default.changeSongPlaylist(e,u.default.playlists[e].songs[0],0)}r.default.play();v.default.sync()}
/**
         * Handles the song play button.
         *
         * @access private
         * @param {integer} song The index of the song we are playing.
         */function handleSongPlay(e){if(d.default.newPlaylist(null)){f.default.setActivePlaylist(null);f.default.changeSong(u.default.songs[e],e)}d.default.newSong(null,e)&&f.default.changeSong(u.default.songs[e],e);r.default.play();v.default.sync()}
/**
         * Handles the song in playlist play.
         *
         * @access private
         * @param {string} playlist The playlist the play button belongs to.
         * @param {integer} song The song the play button belongs to.
         */function handleSongInPlaylistPlay(e,t){if(d.default.newPlaylist(e)){f.default.setActivePlaylist(e);f.default.changeSongPlaylist(e,u.default.playlists[e].songs[t],t)}d.default.newSong(e,t)&&f.default.changeSongPlaylist(e,u.default.playlists[e].songs[t],t);r.default.play();v.default.sync()}return{handle:handle}}();t.default=p;e.exports=t.default},function(e,t,a){Object.defineProperty(t,"__esModule",{value:true});var l=a(0);var u=_interopRequireDefault(l);var n=a(6);_interopRequireDefault(n);var i=a(1);var r=_interopRequireDefault(i);var s=a(5);var d=_interopRequireDefault(s);var o=a(3);var f=_interopRequireDefault(o);var c=a(2);var v=_interopRequireDefault(c);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var p=function(){function handle(){if(!u.default.is_touch_moving){var e=this.getAttribute("data-amplitude-playlist");var t=this.getAttribute("data-amplitude-song-index");null==e&&null==t&&handleGlobalPlayPause();null!=e&&null==t&&handlePlaylistPlayPause(e);null==e&&null!=t&&handleSongPlayPause(t);null!=e&&null!=t&&handleSongInPlaylistPlayPause(e,t)}}function handleGlobalPlayPause(){u.default.audio.paused?r.default.play():r.default.pause();v.default.sync()}
/**
         * Sets the playlist main play pause buttons to the current state of the song.
         * @access private
         * @param {string} playlist The playlist the main play pause button controls
         */function handlePlaylistPlayPause(e){if(d.default.newPlaylist(e)){f.default.setActivePlaylist(e);u.default.playlists[e].shuffle?f.default.changeSongPlaylist(e,u.default.playlists[e].shuffle_list[0],0,true):f.default.changeSongPlaylist(e,u.default.playlists[e].songs[0],0)}u.default.audio.paused?r.default.play():r.default.pause();v.default.sync()}
/**
         * Sets the playlist main play pause buttons to the current state of the song.
         * @access private
         * @param {string} song The index of the song being played/paused
         */function handleSongPlayPause(e){if(d.default.newPlaylist(null)){f.default.setActivePlaylist(null);f.default.changeSong(u.default.songs[e],e,true)}d.default.newSong(null,e)&&f.default.changeSong(u.default.songs[e],e,true);u.default.audio.paused?r.default.play():r.default.pause();v.default.sync()}
/**
         * Sets the song in playlist play pause buttons to the current
         * state of the song.
         * @access private
         * @param {string} playlist The playlist the song is a part of
         * @param {number} song The index of the song being played/paused
         */function handleSongInPlaylistPlayPause(e,t){if(d.default.newPlaylist(e)){f.default.setActivePlaylist(e);f.default.changeSongPlaylist(e,u.default.playlists[e].songs[t],t,true)}d.default.newSong(e,t)&&f.default.changeSongPlaylist(e,u.default.playlists[e].songs[t],t,true);u.default.audio.paused?r.default.play():r.default.pause();v.default.sync()}return{handle:handle}}();t.default=p;e.exports=t.default},function(e,t,a){Object.defineProperty(t,"__esModule",{value:true});var l=a(0);var u=_interopRequireDefault(l);var n=a(1);var i=_interopRequireDefault(n);var r=a(18);var s=_interopRequireDefault(r);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var d=function(){function handle(){if(!u.default.is_touch_moving){switch(u.default.playback_speed){case 1:i.default.setPlaybackSpeed(1.5);break;case 1.5:i.default.setPlaybackSpeed(2);break;case 2:i.default.setPlaybackSpeed(1);break}s.default.sync()}}return{handle:handle}}();t.default=d;e.exports=t.default},function(e,t,a){Object.defineProperty(t,"__esModule",{value:true});var l=a(0);var u=_interopRequireDefault(l);var n=a(3);var i=_interopRequireDefault(n);var r=a(4);var s=_interopRequireDefault(r);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var d=function(){function handle(){if(!u.default.is_touch_moving){var e=this.getAttribute("data-amplitude-playlist");null==e&&handleGlobalPrev();null!=e&&handlePlaylistPrev(e)}}function handleGlobalPrev(){""==u.default.active_playlist||null==u.default.active_playlist?i.default.setPrevious():i.default.setPreviousPlaylist(u.default.active_playlist)}function handlePlaylistPrev(e){e==u.default.active_playlist?i.default.setPreviousPlaylist(u.default.active_playlist):s.default.writeMessage("You can not go to the previous song on a playlist that is not being played!")}return{handle:handle}}();t.default=d;e.exports=t.default},function(e,t,a){Object.defineProperty(t,"__esModule",{value:true});var l=a(0);var u=_interopRequireDefault(l);var n=a(24);var i=_interopRequireDefault(n);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var r=function(){function handle(){if(u.default.audio.buffered.length-1>=0){var e=u.default.audio.buffered.end(u.default.audio.buffered.length-1);var t=u.default.audio.duration;u.default.buffered=e/t*100}i.default.sync()}return{handle:handle}}();t.default=r;e.exports=t.default},function(e,t,a){Object.defineProperty(t,"__esModule",{value:true});var l=a(0);var u=_interopRequireDefault(l);var n=a(12);var i=_interopRequireDefault(n);var r=a(8);var s=_interopRequireDefault(r);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var d=function(){function handle(){if(!u.default.is_touch_moving){var e=this.getAttribute("data-amplitude-playlist");null==e&&handleGlobalRepeat();null!=e&&handlePlaylistRepeat(e)}}function handleGlobalRepeat(){i.default.setRepeat(!u.default.repeat);s.default.syncRepeat()}function handlePlaylistRepeat(e){i.default.setRepeatPlaylist(!u.default.playlists[e].repeat,e);s.default.syncRepeatPlaylist(e)}return{handle:handle}}();t.default=d;e.exports=t.default},function(e,t,a){Object.defineProperty(t,"__esModule",{value:true});var l=a(0);var u=_interopRequireDefault(l);var n=a(12);var i=_interopRequireDefault(n);var r=a(8);var s=_interopRequireDefault(r);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var d=function(){function handle(){if(!u.default.is_touch_moving){i.default.setRepeatSong(!u.default.repeat_song);s.default.syncRepeatSong()}}return{handle:handle}}();t.default=d;e.exports=t.default},function(e,t,a){Object.defineProperty(t,"__esModule",{value:true});var l=a(0);var u=_interopRequireDefault(l);var n=a(13);var i=_interopRequireDefault(n);var r=a(19);var s=_interopRequireDefault(r);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var d=function(){function handle(){if(!u.default.is_touch_moving){var e=this.getAttribute("data-amplitude-playlist");null==e?handleGlobalShuffle():handlePlaylistShuffle(e)}}function handleGlobalShuffle(){i.default.toggleShuffle();s.default.syncMain(u.default.shuffle_on)}
/**
         * Handles the event on the playlist shuffle button.
         *
         * @param {string} playlist - The playlist string the shuffle button belongs to.
         */function handlePlaylistShuffle(e){i.default.toggleShufflePlaylist(e);s.default.syncPlaylist(e)}return{handle:handle}}();t.default=d;e.exports=t.default},function(e,t,a){Object.defineProperty(t,"__esModule",{value:true});var l=a(0);var u=_interopRequireDefault(l);var n=a(4);var i=_interopRequireDefault(n);var r=a(3);var s=_interopRequireDefault(r);var d=a(5);var o=_interopRequireDefault(d);var f=a(1);var c=_interopRequireDefault(f);var v=a(2);var p=_interopRequireDefault(v);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var y=function(){function handle(){if(!u.default.is_touch_moving){var e=this.getAttribute("data-amplitude-playlist");var t=this.getAttribute("data-amplitude-song-index");var a=this.getAttribute("data-amplitude-location");null==a&&i.default.writeMessage("You must add an 'data-amplitude-location' attribute in seconds to your 'amplitude-skip-to' element.");null==t&&i.default.writeMessage("You must add an 'data-amplitude-song-index' attribute to your 'amplitude-skip-to' element.");null!=a&&null!=t&&(null==e?handleSkipToSong(parseInt(t),parseInt(a)):handleSkipToPlaylist(e,parseInt(t),parseInt(a)))}}
/**
         * Handles the skipping to a specific song
         *
         * @access private
         * @param {string} songIndex  - The index of the song being skipped to
         * @param {number} location   - The seconds location of the song in the playlist.
         */function handleSkipToSong(e,t){s.default.changeSong(u.default.songs[e],e);c.default.play();p.default.syncGlobal();p.default.syncSong();c.default.skipToLocation(t)}
/**
         * Handles the skipping to a song that's in a playlist.
         *
         * @access private
         * @param {string} playlist   - The playlist being skipped to
         * @param {string} songIndex  - The index of the song in the playlist
         * @param {number} location   - The seconds location of the song in the playlist.
         */function handleSkipToPlaylist(e,t,a){o.default.newPlaylist(e)&&s.default.setActivePlaylist(e);s.default.changeSongPlaylist(e,u.default.playlists[e].songs[t],t);c.default.play();p.default.syncGlobal();p.default.syncPlaylist();p.default.syncSong();c.default.skipToLocation(a)}return{handle:handle}}();t.default=y;e.exports=t.default},function(t,a,l){Object.defineProperty(a,"__esModule",{value:true});var u=l(0);var n=_interopRequireDefault(u);var i=l(23);var r=_interopRequireDefault(i);var s=l(14);var d=_interopRequireDefault(s);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var o=function(){function handle(){var t=(this||e).value;var a=n.default.audio.duration*(t/100);var l=this.getAttribute("data-amplitude-playlist");var u=this.getAttribute("data-amplitude-song-index");null==l&&null==u&&handleGlobalSongSlider(a,t);null!=l&&null==u&&handlePlaylistSongSlider(a,t,l);null==l&&null!=u&&handleSongSongSlider(a,t,u);null!=l&&null!=u&&handleSongInPlaylistSongSlider(a,t,l,u)}
/**
         * Handles a change on a global audio slider
         *
         * @access private
         * @param {integer} computedTime  - The time we will set the audio to.
         * @param {float}   locationPercentage - The percent through the song.
         */function handleGlobalSongSlider(e,t){if(!n.default.active_metadata.live){r.default.setCurrentTime(e);d.default.sync(t,n.default.active_playlist,n.default.active_index)}}
/**
         * Handles a change on a playlist audio slider
         *
         * @access private
         * @param {integer} computedTime  - The time we will set the audio to.
         * @param {float}   locationPercentage - The percent through the song.
         * @param {string}  playlist = The playlist the song slider belongs to.
         */function handlePlaylistSongSlider(e,t,a){if(n.default.active_playlist==a&&!n.default.active_metadata.live){r.default.setCurrentTime(e);d.default.sync(t,a,n.default.active_index)}}
/**
         * Handles a change on a song audio slider
         *
         * @access private
         * @param {integer} computedTime  - The time we will set the audio to.
         * @param {float}   locationPercentage - The percent through the song.
         * @param {integer} songIndex = The song being navigated.
         */function handleSongSongSlider(e,t,a){if(n.default.active_index==a&&null==n.default.active_playlist&&!n.default.active_metadata.live){r.default.setCurrentTime(e);d.default.sync(t,n.default.active_playlist,a)}}
/**
         * Handles a change on a song audio slider
         *
         * @access private
         * @param {integer} computedTime  - The time we will set the audio to.
         * @param {float}   locationPercentage - The percent through the song.
         * @param {integer} playlist = The playlist the song belongs to.
         * @param {integer} songIndex = The song being navigated.
         */function handleSongInPlaylistSongSlider(e,t,a,l){if(n.default.playlists[a].active_index==l&&n.default.active_playlist==a&&!n.default.active_metadata.live){r.default.setCurrentTime(e);d.default.sync(t,a,l)}}return{handle:handle}}();a.default=o;t.exports=a.default},function(e,t,a){Object.defineProperty(t,"__esModule",{value:true});var l=a(0);var u=_interopRequireDefault(l);var n=a(6);_interopRequireDefault(n);var i=a(2);var r=_interopRequireDefault(i);var s=a(1);var d=_interopRequireDefault(s);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var o=function(){function handle(){if(!u.default.is_touch_moving){r.default.syncToPause();d.default.stop()}}return{handle:handle}}();t.default=o;e.exports=t.default},function(e,t,a){Object.defineProperty(t,"__esModule",{value:true});var l=a(0);var u=_interopRequireDefault(l);var n=a(24);var i=_interopRequireDefault(n);var r=a(15);var s=_interopRequireDefault(r);var d=a(14);var o=_interopRequireDefault(d);var f=a(20);var c=_interopRequireDefault(f);var v=a(23);var p=_interopRequireDefault(v);var y=a(9);_interopRequireDefault(y);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var g=function(){function handle(){computeBufferedTime();i.default.sync();updateTimeInformation();runTimeCallbacks()}function computeBufferedTime(){if(u.default.audio.buffered.length-1>=0){var e=u.default.audio.buffered.end(u.default.audio.buffered.length-1);var t=u.default.audio.duration;u.default.buffered=e/t*100}}function updateTimeInformation(){if(!u.default.active_metadata.live){var e=p.default.computeCurrentTimes();var t=p.default.computeSongCompletionPercentage();var a=p.default.computeSongDuration();s.default.syncCurrentTimes(e);o.default.sync(t,u.default.active_playlist,u.default.active_index);c.default.sync(t);s.default.syncDurationTimes(e,a)}}function runTimeCallbacks(){var e=Math.floor(u.default.audio.currentTime);if(void 0!=u.default.active_metadata.time_callbacks&&void 0!=u.default.active_metadata.time_callbacks[e]){if(!u.default.active_metadata.time_callbacks[e].run){u.default.active_metadata.time_callbacks[e].run=true;u.default.active_metadata.time_callbacks[e]()}}else for(var t in u.default.active_metadata.time_callbacks)u.default.active_metadata.time_callbacks.hasOwnProperty(t)&&(u.default.active_metadata.time_callbacks[t].run=false)}return{handle:handle}}();t.default=g;e.exports=t.default},function(e,t,a){Object.defineProperty(t,"__esModule",{value:true});var l=a(0);var u=_interopRequireDefault(l);var n=a(1);var i=_interopRequireDefault(n);var r=a(10);var s=_interopRequireDefault(r);var d=a(11);var o=_interopRequireDefault(d);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var f=function(){function handle(){if(!u.default.is_touch_moving){var e=null;e=u.default.volume-u.default.volume_increment>0?u.default.volume-u.default.volume_increment:0;i.default.setVolume(e);s.default.setMuted(0==u.default.volume);o.default.sync()}}return{handle:handle}}();t.default=f;e.exports=t.default},function(t,a,l){Object.defineProperty(a,"__esModule",{value:true});var u=l(0);var n=_interopRequireDefault(u);var i=l(1);var r=_interopRequireDefault(i);var s=l(10);var d=_interopRequireDefault(s);var o=l(11);var f=_interopRequireDefault(o);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var c=function(){function handle(){r.default.setVolume((this||e).value);d.default.setMuted(0==n.default.volume);f.default.sync()}return{handle:handle}}();a.default=c;t.exports=a.default},function(e,t,a){Object.defineProperty(t,"__esModule",{value:true});var l=a(0);var u=_interopRequireDefault(l);var n=a(1);var i=_interopRequireDefault(n);var r=a(10);var s=_interopRequireDefault(r);var d=a(11);var o=_interopRequireDefault(d);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var f=function(){function handle(){if(!u.default.is_touch_moving){var e=null;e=u.default.volume+u.default.volume_increment<=100?u.default.volume+u.default.volume_increment:100;i.default.setVolume(e);s.default.setMuted(0==u.default.volume);o.default.sync()}}return{handle:handle}}();t.default=f;e.exports=t.default},function(e,t,a){Object.defineProperty(t,"__esModule",{value:true});var l=a(0);var u=_interopRequireDefault(l);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var n=function(){function configureWebAudioAPI(){var e=window.AudioContext||window.webkitAudioContext||window.mozAudioContext||window.oAudioContext||window.msAudioContext;if(e){u.default.context=new e;u.default.analyser=u.default.context.createAnalyser();u.default.audio.crossOrigin="anonymous";u.default.source=u.default.context.createMediaElementSource(u.default.audio);u.default.source.connect(u.default.analyser);u.default.analyser.connect(u.default.context.destination)}else AmplitudeHelpers.writeDebugMessage("Web Audio API is unavailable! We will set any of your visualizations with your back up definition!")}function webAudioAPIAvailable(){var e=window.AudioContext||window.webkitAudioContext||window.mozAudioContext||window.oAudioContext||window.msAudioContext;u.default.web_audio_api_available=false;if(e){u.default.web_audio_api_available=true;return true}u.default.web_audio_api_available=false;return false}function determineUsingAnyFX(){var e=document.querySelectorAll(".amplitude-wave-form");var t=document.querySelectorAll(".amplitude-visualization");return e.length>0||t.length>0}return{configureWebAudioAPI:configureWebAudioAPI,webAudioAPIAvailable:webAudioAPIAvailable,determineUsingAnyFX:determineUsingAnyFX}}();t.default=n;e.exports=t.default},function(e,t,a){Object.defineProperty(t,"__esModule",{value:true});var l=a(21);var u=_interopRequireDefault(l);var n=a(0);var i=_interopRequireDefault(n);var r=a(1);var s=_interopRequireDefault(r);var d=a(13);var o=_interopRequireDefault(d);var f=a(6);_interopRequireDefault(f);var c=a(3);var v=_interopRequireDefault(c);var p=a(12);var y=_interopRequireDefault(p);var g=a(5);var _=_interopRequireDefault(g);var m=a(16);var h=_interopRequireDefault(m);var b=a(19);var P=_interopRequireDefault(b);var S=a(8);var A=_interopRequireDefault(S);var D=a(14);var q=_interopRequireDefault(D);var R=a(20);var x=_interopRequireDefault(R);var M=a(15);var L=_interopRequireDefault(M);var w=a(2);var T=_interopRequireDefault(w);var k=a(7);var E=_interopRequireDefault(k);var I=a(18);var z=_interopRequireDefault(I);var C=a(4);var O=_interopRequireDefault(C);var N=a(17);var j=_interopRequireDefault(N);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var B=function(){
/**
         * The main init function.  The user will call this through
         * Amplitude.init({}) and pass in their settings.
         *
         * Public Accessor: Amplitude.init( user_config_json );
         *
         * @access public
         * @param {object} userConfig 	- A JSON object of user defined values that helps configure and initialize AmplitudeJS.
         */
function init(e){u.default.initialize(e)}function getConfig(){return i.default}function bindNewElements(){u.default.rebindDisplay()}function getActivePlaylist(){return i.default.active_playlist}function getPlaybackSpeed(){return i.default.playback_speed}function setPlaybackSpeed(e){s.default.setPlaybackSpeed(e);z.default.sync()}function getRepeat(){return i.default.repeat}function getRepeatPlaylist(e){return i.default.playlists[e].repeat}function getShuffle(){return i.default.shuffle_on}
/**
         * Returns the shuffle state of the playlist.
         *
         * Public Accessor: Amplitude.getShufflePlaylist( playlist )
         *
         * @access public
         * @param {string} playlist 	- The key representing the playlist ID to see if it's shuffled or not.
         */function getShufflePlaylist(e){return i.default.playlists[e].shuffle}
/**
         * Sets the shuffle state for the player.
         *
         * Public Accessor: Amplitude.setShuffle()
         *
         * @param {boolean} shuffle  	- True when we are shuffling the songs, false when we turn off shuffle.
         *
         * @access public
         */function setShuffle(e){o.default.setShuffle(e);P.default.syncMain()}
/**
         * Sets the shuffle state for the playlist
         *
         * Public Accessor: Amplitude.setShufflePlaylist( playlist )
         *
         * @access public
         * @param {string} playlist 	- The key representing the playlist ID to to shuffle the playlist.
         * @param {boolean} shuffle 	- True when we are shuffling the playlist, false when we turn off shuffle.
         */function setShufflePlaylist(e,t){o.default.setShufflePlaylist(e,t);P.default.syncMain();P.default.syncPlaylist(e)}
/**
         * Sets the repeat state for the player.
         *
         * Public Accessor: Amplitude.setRepeat()
         *
         * @access public
         * @param {boolean} repeatState 	- The state you want the repeat song to be in.
         */function setRepeat(e){y.default.setRepeat(e);A.default.syncRepeat()}
/**
         * Sets the repeat state for a playlist.
         *
         * Public Accessor: Amplitude.setRepeatPlaylist( playlistKey )
         *
         * @access public
         * @param {string} playlist 	- The key representing the playlist ID to to shuffle the playlist.
         * @param {boolean} repeatState - The state you want the repeat playlist to be in.
         */function setRepeatPlaylist(e,t){y.default.setRepeatPlaylist(t,e);A.default.syncRepeatPlaylist(e)}
/**
         * Sets the repeat state for the song.
         *
         * Public Accessor: Amplitude.setRepeatSong()
         *
         * @access public
         * @param {boolean} repeatState 	- The state you want the repeat song status to be in.
         */function setRepeatSong(e){if(!i.default.is_touch_moving){y.default.setRepeatSong(!i.default.repeat_song);A.default.syncRepeatSong()}}function getDefaultAlbumArt(){return i.default.default_album_art}function getDefaultPlaylistArt(){return i.default.default_playlist_art}
/**
         * Sets the default album art for the player
         *
         * Public Accessor: Amplitude.setDefaultAlbumArt( url )
         *
         * @access public
         * @param {string} url 	- A string representing the URL of the new default album art.
         */function setDefaultAlbumArt(e){i.default.default_album_art=e}
/**
         * Sets the default playlist art for the player
         *
         * Public Accessor: Amplitude.setDefaultPlaylistArt( url )
         *
         * @access public
         * @param {string} url - A string representing the URL of the new default playlist art.
         */function setDefaultPlaylistArt(e){i.default.default_plalist_art=e}function getSongPlayedPercentage(){return i.default.audio.currentTime/i.default.audio.duration*100}function getSongPlayedSeconds(){return i.default.audio.currentTime}function getSongDuration(){return i.default.audio.duration}
/**
         * Allows the user to set how far into the song they want to be. This is
         * helpful for implementing custom range sliders. Only works on the current song.
         *
         * Public Accessor: Amplitude.setSongPlayedPercentage( float );
         *
         * @access public
         * @param {number} percentage 	- The percentage of the song played
         */function setSongPlayedPercentage(e){"number"==typeof e&&e>0&&e<100&&(i.default.audio.currentTime=i.default.audio.duration*(e/100))}
/**
         * Allows the user to turn on debugging.
         *
         * Public Accessor: Amplitude.setDebug( bool );
         *
         * @access public
         * @param {boolean} state 		- Turns debugging on and off.
         */function setDebug(e){i.default.debug=e}
/**
         * Returns the active song meta data for the user to do what is
         * needed.
         *
         * Public Accessor: Amplitude.getActiveSongMetadata();
         *
         * @access public
         * @returns {object} JSON Object with the active song information
         */function getActiveSongMetadata(){return i.default.active_metadata}
/**
         * Returns the active playlist meta data for the for the user to use.
         *
         * Public Accessor: Amplitude.getActivePlaylistMetadata();
         *
         * @access public
         * @returns {object} JSON representation for the active playlist
         */function getActivePlaylistMetadata(){return i.default.playlists[i.default.active_playlist]}
/**
         * Returns a song in the songs array at that index
         *
         * Public Accessor: Amplitude.getSongAtIndex( song_index )
         *
         * @access public
         * @param {number} index 	- The integer for the index of the song in the songs array.
         * @returns {object} JSON representation for the song at a specific index.
         */function getSongAtIndex(e){return i.default.songs[e]}
/**
         * Returns a song at a playlist index
         *
         * Public Accessor: Amplitude.getSongAtPlaylistIndex( playlist, index
         *
         * @access public
         * @param {number} index 			- The integer for the index of the song in the playlist.
         * @param {string} playlist		- The key of the playlist we are getting the song at the index for
         * @returns {object} JSON representation for the song at a specific index.
         */function getSongAtPlaylistIndex(e,t){var a=i.default.playlists[e].songs[t];return a}
/**
         * Adds a song to the end of the config array.  This will allow Amplitude
         * to play the song in a playlist type setting.
         *
         * Public Accessor: Amplitude.addSong( song_json )
         *
         * @access public
         * @param {object} song 	- JSON representation of a song.
         * @returns {number} New index of the song.
         */function addSong(e){void 0==i.default.songs&&(i.default.songs=[]);i.default.songs.push(e);i.default.shuffle_on&&i.default.shuffle_list.push(e);j.default.isSoundCloudURL(e.url)&&j.default.resolveIndividualStreamableURL(e.url,null,i.default.songs.length-1,i.default.shuffle_on);return i.default.songs.length-1}
/**
         * Adds a song to the beginning of the config array.
         * This will allow Amplitude to play the song in a
         * playlist type setting.
         *
         * Public Accessor: Amplitude.addSong( song_json )
         *
         * @access public
         * @param {object} song 	- JSON representation of a song.
         * @returns {number} New index of the song (0)
         */function prependSong(e){void 0==i.default.songs&&(i.default.songs=[]);i.default.songs.unshift(e);i.default.shuffle_on&&i.default.shuffle_list.unshift(e);j.default.isSoundCloudURL(e.url)&&j.default.resolveIndividualStreamableURL(e.url,null,i.default.songs.length-1,i.default.shuffle_on);return 0}
/**
         * Adds a song to a playlist. This will allow Amplitude to play the song in the
         * playlist
         *
         * Public Accessor: Amplitude.addSongToPlaylist( song_json, playlist_key )
         *
         * @access public
         * @param {object} song 			- JSON representation of a song.
         * @param {string} playlist		- Playlist we are adding the song to.
         * @returns {mixed} New index of song in playlist or null if no playlist exists
         */function addSongToPlaylist(e,t){if(void 0!=i.default.playlists[t]){i.default.playlists[t].songs.push(e);i.default.playlists[t].shuffle&&i.default.playlists[t].shuffle_list.push(e);j.default.isSoundCloudURL(e.url)&&j.default.resolveIndividualStreamableURL(e.url,t,i.default.playlists[t].songs.length-1,i.default.playlists[t].shuffle);return i.default.playlists[t].songs.length-1}O.default.writeMessage("Playlist doesn't exist!");return null}
/**
         * Adds a playlist to Amplitude.
         *
         * @param {string} key  - The key of the playlist we are adding.
         * @param {object} data - The data relating to the playlist
         * @param {array} songs - The songs to add to the playlist
         */function addPlaylist(e,t,a){if(void 0==i.default.playlists[e]){i.default.playlists[e]={};var l=["repeat","shuffle","shuffle_list","songs","src"];for(var u in t)l.indexOf(u)<0&&(i.default.playlists[e][u]=t[u]);i.default.playlists[e].songs=a;i.default.playlists[e].active_index=null;i.default.playlists[e].repeat=false;i.default.playlists[e].shuffle=false;i.default.playlists[e].shuffle_list=[];return i.default.playlists[e]}O.default.writeMessage("A playlist already exists with that key!");return null}
/**
         * Removes a song from the song array
         *
         * Public Accessor: Amplitude.removeSong( index )
         *
         * @access public
         * @param {integer} index - Index of the song being removed
         * @returns {boolean} True if removed false if not.
         */function removeSong(e){i.default.songs.splice(e,1)}
/**
         * Removes a song from the playlist
         *
         * Public Accessor: Amplitude.removeSongFromPlaylist( index, playlist )
         *
         * @access public
         * @param {integer} index 			- Index of the song being removed from the playlist.
         * @param {string} playlist			- Playlist we are removing the song from.
         * @returns {boolean} True if removed false if not.
         */function removeSongFromPlaylist(e,t){void 0!=i.default.playlists[t]&&i.default.playlists[t].songs.splice(e,1)}
/**
         * When you pass a song object it plays that song right awawy.  It sets
         * the active song in the config to the song you pass in and synchronizes
         * the visuals.
         *
         * Public Accessor: Amplitude.playNow( song )
         *
         * @access public
         * @param {object} song 	- JSON representation of a song.
         */function playNow(e){if(e.url){i.default.audio.src=e.url;i.default.active_metadata=e;i.default.active_album=e.album}else O.default.writeMessage("The song needs to have a URL!");s.default.play();T.default.sync();E.default.displayMetaData();q.default.resetElements();x.default.resetElements();L.default.resetCurrentTimes();L.default.resetDurationTimes()}
/**
         * Plays a song at the index passed in from the songs array.
         *
         * Public Accessor: Amplitude.playSongAtIndex( index )
         *
         * @access public
         * @param {number} index 	- The number representing the song in the songs array.
         */function playSongAtIndex(e){s.default.stop();if(_.default.newPlaylist(null)){v.default.setActivePlaylist(null);v.default.changeSong(i.default.songs[e],e)}_.default.newSong(null,e)&&v.default.changeSong(i.default.songs[e],e);s.default.play();T.default.sync()}
/**
         * Plays a song at the index passed in for the playlist provided. The index passed
         * in should be the index of the song in the playlist and not the songs array.
         *
         * @access public
         * @param {number} index 		- The number representing the song in the playlist array.
         * @param {string} playlist - The key string representing the playlist we are playing the song from.
         *
         */function playPlaylistSongAtIndex(e,t){s.default.stop();if(_.default.newPlaylist(t)){v.default.setActivePlaylist(t);v.default.changeSongPlaylist(t,i.default.playlists[t].songs[e],e)}_.default.newSong(t,e)&&v.default.changeSongPlaylist(t,i.default.playlists[t].songs[e],e);T.default.sync();s.default.play()}function play(){s.default.play()}function pause(){s.default.pause()}function stop(){s.default.stop()}function getAudio(){return i.default.audio}function getAnalyser(){return i.default.analyser}
/**
         * Plays the next song either in the playlist or globally.
         *
         * Public Accessor: Amplitude.next( playlist );
         *
         * @access public
         * @param {string} [playlist = null 	- The playlist key
         */function next(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;""==e||null==e?null==i.default.active_playlist||""==i.default.active_playlist?v.default.setNext():v.default.setNextPlaylist(i.default.active_playlist):v.default.setNextPlaylist(e)}
/**
         * Plays the prev song either in the playlist or globally.
         *
         * Public Accessor: Amplitude.prev( playlist );
         *
         * @access public
         * @param {string} [playlist = null] 	- The playlist key
         */function prev(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;""==e||null==e?null==i.default.active_playlist||""==i.default.active_playlist?v.default.setPrevious():v.default.setPreviousPlaylist(i.default.active_playlist):v.default.setPreviousPlaylist(e)}function getSongs(){return i.default.songs}
/**
         * Gets all of the songs in a playlist
         *
         * Public Accessor: Amplitude.getSongsInPlaylist( playlist );
         *
         * @access public
         * @param {string} playlist 	- The playlist key
         */function getSongsInPlaylist(e){return i.default.playlists[e].songs}function getSongsState(){return i.default.shuffle_on?i.default.shuffle_list:i.default.songs}
/**
         * Get current state of songs in playlist. If shuffled, this will return the
         * shuffled songs.
         *
         * Public Accessor: Amplitude.getSongsStatePlaylist( playlist );
         *
         * @access public
         * @param {string} playlist 	- The playlist key
         */function getSongsStatePlaylist(e){return i.default.playlists[e].shuffle?i.default.playlists[e].shuffle_list:i.default.playlists[e].songs}function getActiveIndex(){return parseInt(i.default.active_index)}function getVersion(){return i.default.version}function getBuffered(){return i.default.buffered}
/**
         * Skip to a certain location in a selected song.
         *
         * Public Accessor: Amplitude.getBuffered()
         *
         * @access public
         * @param {number} seconds 						- The amount of seconds we should skip to in the song.
         * @param {number} songIndex 					- The index of the song in the songs array.
         * @param {string} [playlist = null]	- The playlist the song we are skipping to belogns to.
         */function skipTo(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;e=parseInt(e);if(null!=a){_.default.newPlaylist(a)&&v.default.setActivePlaylist(a);v.default.changeSongPlaylist(a,i.default.playlists[a].songs[t],t);s.default.play();T.default.syncGlobal();T.default.syncPlaylist();T.default.syncSong();s.default.skipToLocation(e)}else{v.default.changeSong(i.default.songs[t],t);s.default.play();T.default.syncGlobal();T.default.syncSong();s.default.skipToLocation(e)}}
/**
         * Sets the meta data for a song in the songs array. This will set any
         * meta data for a song besides the URL. The URL could cause issues if the
         * song was playing.
         *
         * Public Accessor: Amplitude.setSongMetaData()
         *
         * @access public
         * @param {number} index					- The index of the song in the songs array.
         * @param {object} metaData 			- The object containing the meta data we are updating.
         * @param {string} playlist       - The playlist we are updating the song meta data for.
         */function setSongMetaData(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(""!=a&&null!=a&&void 0!=i.default.playlists[a])for(var l in t)t.hasOwnProperty(l)&&"url"!=l&&"URL"!=l&&"live"!=l&&"LIVE"!=l&&(i.default.playlists[a].songs[e][l]=t[l]);else for(var l in t)t.hasOwnProperty(l)&&"url"!=l&&"URL"!=l&&"live"!=l&&"LIVE"!=l&&(i.default.songs[e][l]=t[l]);E.default.displayMetaData();E.default.syncMetaData()}function setPlaylistMetaData(e,t){if(void 0!=i.default.playlists[e]){var a=["repeat","shuffle","shuffle_list","songs","src"];for(var l in t)t.hasOwnProperty(l)&&a.indexOf(l)<0&&(i.default.playlists[e][l]=t[l]);E.default.displayPlaylistMetaData()}else O.default.writeMessage("You must provide a valid playlist key!")}
/**
         * Sets the delay between the songs when they are finished.
         *
         * Public Accessor: Amplitude.setDelay()
         *
         * @access public
         * @param {number} delay 	- The millisecond delay time between songs
         */function setDelay(e){i.default.delay=e}function getDelay(){return i.default.delay}function getPlayerState(){return i.default.player_state}
/**
         * Registers a visualization and sets that visualization's
         * preferences. When creating a visualization, you can set certain
         * preferences that the user can overwrite similar to Amplitude.
         * Public Accessor: Amplitude.registerVisualization( visualization, preferences )
         *
         * @param {object} visualzation A visualization object that gets registered
         * with Amplitude
         *
         * @param {object} preferences A JSON object of preferences relating to the
         * visualization
         */function registerVisualization(e,t){h.default.register(e,t)}
/**
         * Set the visualization for the playlist
         *
         * @param {string} playlist - The playlist we are setting the visualization for.
         * @param {string} visualizationKey - The key of the visualization we are adding to the playlist.
         */function setPlaylistVisualization(e,t){void 0!=i.default.playlists[e]?void 0!=i.default.visualizations.available[t]?i.default.playlists[e].visualization=t:O.default.writeMessage("A visualization does not exist for the key provided."):O.default.writeMessage("The playlist for the key provided does not exist")}
/**
         * Set a visualization for the song.
         *
         * @param {number} songIndex - The index of the song in the songs array we are setting the visualization for.
         * @param {string} visualizationKey - The key of the visualization we are adding to the playlist.
         */function setSongVisualization(e,t){i.default.songs[e]?void 0!=i.default.visualizations.available[t]?i.default.songs[e].visualization=t:O.default.writeMessage("A visualization does not exist for the key provided."):O.default.writeMessage("A song at that index is undefined")}
/**
         * Set song in playlist visualization.
         *
         * @param {string} playlist - The playlist we are setting the song visualization for.
         * @param {number} songIndex - The index we are setting the visualization for.
         * @param {strong} visualizationKey - The key of the visualization we are adding to the song in the playlist.
         */function setSongInPlaylistVisualization(e,t,a){void 0!=i.default.playlists[e].songs[t]?void 0!=i.default.visualizations.available[a]?i.default.playlists[e].songs[t].visualization=a:O.default.writeMessage("A visualization does not exist for the key provided."):O.default.writeMessage("The song in the playlist at that key is not defined")}function setGlobalVisualization(e){void 0!=i.default.visualizations.available[e]?i.default.visualization=e:O.default.writeMessage("A visualization does not exist for the key provided.")}
/**
         * Sets the active volume.
         * @param {number} volumeLevel - A number between 1 and 100 as a percentage of
         * min to max for a volume level.
         */function setVolume(e){s.default.setVolume(e)}function getVolume(){return i.default.volume}return{init:init,getConfig:getConfig,bindNewElements:bindNewElements,getActivePlaylist:getActivePlaylist,getPlaybackSpeed:getPlaybackSpeed,setPlaybackSpeed:setPlaybackSpeed,getRepeat:getRepeat,getRepeatPlaylist:getRepeatPlaylist,getShuffle:getShuffle,getShufflePlaylist:getShufflePlaylist,setShuffle:setShuffle,setShufflePlaylist:setShufflePlaylist,setRepeat:setRepeat,setRepeatSong:setRepeatSong,setRepeatPlaylist:setRepeatPlaylist,getDefaultAlbumArt:getDefaultAlbumArt,setDefaultAlbumArt:setDefaultAlbumArt,getDefaultPlaylistArt:getDefaultPlaylistArt,setDefaultPlaylistArt:setDefaultPlaylistArt,getSongPlayedPercentage:getSongPlayedPercentage,setSongPlayedPercentage:setSongPlayedPercentage,getSongPlayedSeconds:getSongPlayedSeconds,getSongDuration:getSongDuration,setDebug:setDebug,getActiveSongMetadata:getActiveSongMetadata,getActivePlaylistMetadata:getActivePlaylistMetadata,getSongAtIndex:getSongAtIndex,getSongAtPlaylistIndex:getSongAtPlaylistIndex,addSong:addSong,prependSong:prependSong,addSongToPlaylist:addSongToPlaylist,removeSong:removeSong,removeSongFromPlaylist:removeSongFromPlaylist,playNow:playNow,playSongAtIndex:playSongAtIndex,playPlaylistSongAtIndex:playPlaylistSongAtIndex,play:play,pause:pause,stop:stop,getAudio:getAudio,getAnalyser:getAnalyser,next:next,prev:prev,getSongs:getSongs,getSongsInPlaylist:getSongsInPlaylist,getSongsState:getSongsState,getSongsStatePlaylist:getSongsStatePlaylist,getActiveIndex:getActiveIndex,getVersion:getVersion,getBuffered:getBuffered,skipTo:skipTo,setSongMetaData:setSongMetaData,setPlaylistMetaData:setPlaylistMetaData,setDelay:setDelay,getDelay:getDelay,getPlayerState:getPlayerState,addPlaylist:addPlaylist,registerVisualization:registerVisualization,setPlaylistVisualization:setPlaylistVisualization,setSongVisualization:setSongVisualization,setSongInPlaylistVisualization:setSongInPlaylistVisualization,setGlobalVisualization:setGlobalVisualization,getVolume:getVolume,setVolume:setVolume}}();t.default=B;e.exports=t.default},function(e,t,a){Object.defineProperty(t,"__esModule",{value:true});var l=a(0);var u=_interopRequireDefault(l);var n=a(4);var i=_interopRequireDefault(n);var r=a(5);var s=_interopRequireDefault(r);var d=a(7);var o=_interopRequireDefault(d);var f=a(17);var c=_interopRequireDefault(f);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var v=function(){
/**
         * Initializes the playlists for AmplitudeJS
         *
         * @param {Object} playlists - The playlists defined by the user.
         */
function initialize(e){u.default.playlists=e;copySongsToPlaylists();grabSoundCloudData();initializePlaylistActiveIndexes();initializePlaylistShuffleStatuses();initializePlaylistsRepeatStatuses();initializePlaylistShuffleLists();initializeFirstSongInPlaylistMetaData()}function initializePlaylistActiveIndexes(){for(var e in u.default.playlists)u.default.playlists[e].active_index=null}function copySongsToPlaylists(){for(var e in u.default.playlists)if(u.default.playlists.hasOwnProperty(e)&&u.default.playlists[e].songs)for(var t=0;t<u.default.playlists[e].songs.length;t++){if(s.default.isInt(u.default.playlists[e].songs[t])){u.default.playlists[e].songs[t]=u.default.songs[u.default.playlists[e].songs[t]];u.default.playlists[e].songs[t].index=t}s.default.isInt(u.default.playlists[e].songs[t])&&!u.default.songs[u.default.playlists[e].songs[t]]&&i.default.writeMessage("The song index: "+u.default.playlists[e].songs[t]+" in playlist with key: "+e+" is not defined in your songs array!");s.default.isInt(u.default.playlists[e].songs[t])||(u.default.playlists[e].songs[t].index=t)}}function grabSoundCloudData(){for(var e in u.default.playlists)if(u.default.playlists.hasOwnProperty(e))for(var t=0;t<u.default.playlists[e].songs.length;t++)c.default.isSoundCloudURL(u.default.playlists[e].songs[t].url)&&void 0==u.default.playlists[e].songs[t].soundcloud_data&&c.default.resolveIndividualStreamableURL(u.default.playlists[e].songs[t].url,e,t)}function initializePlaylistShuffleStatuses(){for(var e in u.default.playlists)u.default.playlists[e].shuffle=false}function initializePlaylistsRepeatStatuses(){for(var e in u.default.playlists)u.default.playlists[e].repeat=false}function initializePlaylistShuffleLists(){for(var e in u.default.playlists)u.default.playlists[e].shuffle_list=[]}function initializeFirstSongInPlaylistMetaData(){for(var e in u.default.playlists)o.default.setFirstSongInPlaylist(u.default.playlists[e].songs[0],e)}return{initialize:initialize}}();t.default=v;e.exports=t.default},function(e,t,a){Object.defineProperty(t,"__esModule",{value:true});var l=a(0);var u=_interopRequireDefault(l);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}
/**
       * Handles all of the container elements.
       *
       * @param visual/ContainerElements
       */var n=function(){function setActive(e){var t=document.getElementsByClassName("amplitude-song-container");for(var a=0;a<t.length;a++)t[a].classList.remove("amplitude-active-song-container");if(""==u.default.active_playlist||null==u.default.active_playlist){var l="";l=e?u.default.active_index:u.default.shuffle_on?u.default.shuffle_list[u.default.active_index].index:u.default.active_index;if(document.querySelectorAll('.amplitude-song-container[data-amplitude-song-index="'+l+'"]')){var n=document.querySelectorAll('.amplitude-song-container[data-amplitude-song-index="'+l+'"]');for(var i=0;i<n.length;i++)n[i].hasAttribute("data-amplitude-playlist")||n[i].classList.add("amplitude-active-song-container")}}else{if(null!=u.default.active_playlist&&""!=u.default.active_playlist||e)var r=u.default.playlists[u.default.active_playlist].active_index;else{r="";r=u.default.playlists[u.default.active_playlist].shuffle?u.default.playlists[u.default.active_playlist].shuffle_list[u.default.playlists[u.default.active_playlist].active_index].index:u.default.playlists[u.default.active_playlist].active_index}if(document.querySelectorAll('.amplitude-song-container[data-amplitude-song-index="'+r+'"][data-amplitude-playlist="'+u.default.active_playlist+'"]')){var s=document.querySelectorAll('.amplitude-song-container[data-amplitude-song-index="'+r+'"][data-amplitude-playlist="'+u.default.active_playlist+'"]');for(var d=0;d<s.length;d++)s[d].classList.add("amplitude-active-song-container")}}}return{setActive:setActive}}();t.default=n;e.exports=t.default},function(e,t,a){Object.defineProperty(t,"__esModule",{value:true});var l=a(0);var u=_interopRequireDefault(l);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var n=function(){function sync(e){syncGlobal(e);syncPlaylist(e);syncSong(e);syncSongInPlaylist(e)}
/**
         * Updates any elements that display the current hour for the song.
         *
         * @access public
         * @param {number} hours 	- An integer conaining how many hours into the song.
         */function syncGlobal(e){var t=document.querySelectorAll(".amplitude-current-hours");for(var a=0;a<t.length;a++){var l=t[a].getAttribute("data-amplitude-playlist");var u=t[a].getAttribute("data-amplitude-song-index");null==l&&null==u&&(t[a].innerHTML=e)}}
/**
         * Syncs the playlist current hour elements.
         *
         * @param {Integer} hour - The current audio hour.
         */function syncPlaylist(e){var t=document.querySelectorAll('.amplitude-current-hours[data-amplitude-playlist="'+u.default.active_playlist+'"]');for(var a=0;a<t.length;a++){var l=t[a].getAttribute("data-amplitude-song-index");null==l&&(t[a].innerHTML=e)}}
/**
         * Syncs the song hour elements.
         *
         * @param {Integer} hour - The current audio hour.
         */function syncSong(e){if(null==u.default.active_playlist){var t=document.querySelectorAll('.amplitude-current-hours[data-amplitude-song-index="'+u.default.active_index+'"]');for(var a=0;a<t.length;a++){var l=t[a].getAttribute("data-amplitude-playlist");null==l&&(t[a].innerHTML=e)}}}
/**
         * Syncs the song in playlist song hour elements.
         *
         * @param {Integer} hour - The current audio hour.
         */function syncSongInPlaylist(e){var t=""!=u.default.active_playlist&&null!=u.default.active_playlist?u.default.playlists[u.default.active_playlist].active_index:null;var a=document.querySelectorAll('.amplitude-current-hours[data-amplitude-playlist="'+u.default.active_playlist+'"][data-amplitude-song-index="'+t+'"]');for(var l=0;l<a.length;l++)a[l].innerHTML=e}function resetTimes(){var e=document.querySelectorAll(".amplitude-current-hours");for(var t=0;t<e.length;t++)e[t].innerHTML="00"}return{sync:sync,resetTimes:resetTimes}}();t.default=n;e.exports=t.default},function(e,t,a){Object.defineProperty(t,"__esModule",{value:true});var l=a(0);var u=_interopRequireDefault(l);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var n=function(){
/**
         * Syncs the current minutes elements.
         *
         * @param {Integer} minutes - The current audio minutes.
         */
function sync(e){syncGlobal(e);syncPlaylist(e);syncSong(e);syncSongInPlaylist(e)}
/**
         * Syncs the global current minutes elements.
         *
         * @param {Integer} minutes - The current audio minutes.
         */function syncGlobal(e){var t=document.querySelectorAll(".amplitude-current-minutes");for(var a=0;a<t.length;a++){var l=t[a].getAttribute("data-amplitude-playlist");var u=t[a].getAttribute("data-amplitude-song-index");null==l&&null==u&&(t[a].innerHTML=e)}}
/**
         * Syncs the playlist minutes elements.
         *
         * @param {Integer} minutes - The current audio minutes.
         */function syncPlaylist(e){var t=document.querySelectorAll('.amplitude-current-minutes[data-amplitude-playlist="'+u.default.active_playlist+'"]');for(var a=0;a<t.length;a++){var l=t[a].getAttribute("data-amplitude-song-index");null==l&&(t[a].innerHTML=e)}}
/**
         * Syncs the current song minutes elements.
         *
         * @param {Integer} minutes - The current audio minutes.
         */function syncSong(e){if(null==u.default.active_playlist){var t=document.querySelectorAll('.amplitude-current-minutes[data-amplitude-song-index="'+u.default.active_index+'"]');for(var a=0;a<t.length;a++){var l=t[a].getAttribute("data-amplitude-playlist");null==l&&(t[a].innerHTML=e)}}}
/**
         * Syncs the current song in playlist minutes elements.
         *
         * @param {Integer} minutes - The current audio minutes.
         */function syncSongInPlaylist(e){var t=""!=u.default.active_playlist&&null!=u.default.active_playlist?u.default.playlists[u.default.active_playlist].active_index:null;var a=document.querySelectorAll('.amplitude-current-minutes[data-amplitude-playlist="'+u.default.active_playlist+'"][data-amplitude-song-index="'+t+'"]');for(var l=0;l<a.length;l++)a[l].innerHTML=e}function resetTimes(){var e=document.querySelectorAll(".amplitude-current-minutes");for(var t=0;t<e.length;t++)e[t].innerHTML="00"}return{sync:sync,resetTimes:resetTimes}}();t.default=n;e.exports=t.default},function(e,t,a){Object.defineProperty(t,"__esModule",{value:true});var l=a(0);var u=_interopRequireDefault(l);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var n=function(){
/**
         * Syncs the current seconds elements.
         *
         * @param {Integer} seconds - The current audio seconds.
         */
function sync(e){syncGlobal(e);syncPlaylist(e);syncSong(e);syncSongInPlaylist(e)}
/**
         * Syncs the global current seconds elements.
         *
         * @param {Integer} seconds - The current audio seconds.
         */function syncGlobal(e){var t=document.querySelectorAll(".amplitude-current-seconds");for(var a=0;a<t.length;a++){var l=t[a].getAttribute("data-amplitude-playlist");var u=t[a].getAttribute("data-amplitude-song-index");null==l&&null==u&&(t[a].innerHTML=e)}}
/**
         * Syncs the playlist seconds elements.
         *
         * @param {Integer} seconds - The current audio seconds.
         */function syncPlaylist(e){var t=document.querySelectorAll('.amplitude-current-seconds[data-amplitude-playlist="'+u.default.active_playlist+'"]');for(var a=0;a<t.length;a++){var l=t[a].getAttribute("data-amplitude-song-index");null==l&&(t[a].innerHTML=e)}}
/**
         * Syncs the current song seconds elements.
         *
         * @param {Integer} seconds - The current audio seconds.
         */function syncSong(e){if(null==u.default.active_playlist){var t=document.querySelectorAll('.amplitude-current-seconds[data-amplitude-song-index="'+u.default.active_index+'"]');for(var a=0;a<t.length;a++){var l=t[a].getAttribute("data-amplitude-playlist");null==l&&(t[a].innerHTML=e)}}}
/**
         * Syncs the current song in playlist seconds elements.
         *
         * @param {Integer} seconds - The current audio seconds.
         */function syncSongInPlaylist(e){var t=""!=u.default.active_playlist&&null!=u.default.active_playlist?u.default.playlists[u.default.active_playlist].active_index:null;var a=document.querySelectorAll('.amplitude-current-seconds[data-amplitude-playlist="'+u.default.active_playlist+'"][data-amplitude-song-index="'+t+'"]');for(var l=0;l<a.length;l++)a[l].innerHTML=e}function resetTimes(){var e=document.querySelectorAll(".amplitude-current-seconds");for(var t=0;t<e.length;t++)e[t].innerHTML="00"}return{sync:sync,resetTimes:resetTimes}}();t.default=n;e.exports=t.default},function(e,t,a){Object.defineProperty(t,"__esModule",{value:true});var l=a(0);var u=_interopRequireDefault(l);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var n=function(){
/**
         * Visually displays the current time on the screen. This is called on
         * time update for the current song.
         *
         * @access public
         * @param {object} currentTime 					- An object containing the current time for the song in seconds, minutes, and hours.
         */
function sync(e){syncGlobal(e);syncPlaylist(e);syncSong(e);syncSongInPlaylist(e)}
/**
         * Updates any elements that display the current time for the song. This
         * is a computed field that will be commonly used.
         *
         * @access public
         * @param {object} time 	- A json object conaining the parts for the current time for the song.
         */function syncGlobal(e){var t=document.querySelectorAll(".amplitude-current-time");var a=e.minutes+":"+e.seconds;e.hours>0&&(a=e.hours+":"+a);for(var l=0;l<t.length;l++){var u=t[l].getAttribute("data-amplitude-playlist");var n=t[l].getAttribute("data-amplitude-song-index");null==u&&null==n&&(t[l].innerHTML=a)}}
/**
         * Updates any elements that display the current time for the song. This
         * is a computed field that will be commonly used.
         *
         * @access public
         * @param {object} time 	- A json object conaining the parts for the current time for the song.
         */function syncPlaylist(e){var t=document.querySelectorAll('.amplitude-current-time[data-amplitude-playlist="'+u.default.active_playlist+'"]');var a=e.minutes+":"+e.seconds;e.hours>0&&(a=e.hours+":"+a);for(var l=0;l<t.length;l++){var n=t[l].getAttribute("data-amplitude-song-index");null==n&&(t[l].innerHTML=a)}}
/**
         * Updates any elements that display the current time for the song. This
         * is a computed field that will be commonly used.
         *
         * @access public
         * @param {object} time 	- A json object conaining the parts for the current time for the song.
         */function syncSong(e){if(null==u.default.active_playlist){var t=document.querySelectorAll('.amplitude-current-time[data-amplitude-song-index="'+u.default.active_index+'"]');var a=e.minutes+":"+e.seconds;e.hours>0&&(a=e.hours+":"+a);for(var l=0;l<t.length;l++){var n=t[l].getAttribute("data-amplitude-playlist");null==n&&(t[l].innerHTML=a)}}}
/**
         * Updates any elements that display the current time for the song. This
         * is a computed field that will be commonly used.
         *
         * @access public
         * @param {object} time 	- A json object conaining the parts for the current time for the song.
         */function syncSongInPlaylist(e){var t=""!=u.default.active_playlist&&null!=u.default.active_playlist?u.default.playlists[u.default.active_playlist].active_index:null;var a=document.querySelectorAll('.amplitude-current-time[data-amplitude-playlist="'+u.default.active_playlist+'"][data-amplitude-song-index="'+t+'"]');var l=e.minutes+":"+e.seconds;e.hours>0&&(l=e.hours+":"+l);for(var n=0;n<a.length;n++)a[n].innerHTML=l}function resetTimes(){var e=document.querySelectorAll(".amplitude-current-time");for(var t=0;t<e.length;t++)e[t].innerHTML="00:00"}return{sync:sync,resetTimes:resetTimes}}();t.default=n;e.exports=t.default},function(e,t,a){Object.defineProperty(t,"__esModule",{value:true});var l=a(0);var u=_interopRequireDefault(l);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var n=function(){
/**
         * Syncs all of the countdown time elements.
         *
         * @param {object} countDownTime - The current time of the audio.
         * @param {object} songDuration - The song duration of the audio.
         */
function sync(e,t){var a=computeTimeRemaining(e,t);syncGlobal(a);syncPlaylist(a);syncSong(a);syncSongInPlaylist(a)}
/**
         * Syncs the global count down time elements.
         *
         * @param {string} timeRemaining - The time remaining for the audio.
         */function syncGlobal(e){var t=document.querySelectorAll(".amplitude-time-remaining");for(var a=0;a<t.length;a++){var l=t[a].getAttribute("data-amplitude-playlist");var u=t[a].getAttribute("data-amplitude-song-index");null==l&&null==u&&(t[a].innerHTML=e)}}
/**
         * Syncs the playlist count down time elements.
         *
         * @param {string} timeRemaining - The time remaining for the audio.
         */function syncPlaylist(e){var t=document.querySelectorAll('.amplitude-time-remaining[data-amplitude-playlist="'+u.default.active_playlist+'"]');for(var a=0;a<t.length;a++){var l=t[a].getAttribute("data-amplitude-song-index");null==l&&(t[a].innerHTML=e)}}
/**
         * Syncs the song count down time elements.
         *
         * @param {string} timeRemaining - The time remaining for the audio.
         */function syncSong(e){if(null==u.default.active_playlist){var t=document.querySelectorAll('.amplitude-time-remaining[data-amplitude-song-index="'+u.default.active_index+'"]');for(var a=0;a<t.length;a++){var l=t[a].getAttribute("data-amplitude-playlist");null==l&&(t[a].innerHTML=e)}}}
/**
         * Syncs the song in playlist count down time elements.
         *
         * @param {string} timeRemaining - The time remaining for the audio.
         */function syncSongInPlaylist(e){var t=""!=u.default.active_playlist&&null!=u.default.active_playlist?u.default.playlists[u.default.active_playlist].active_index:null;var a=document.querySelectorAll('.amplitude-time-remaining[data-amplitude-playlist="'+u.default.active_playlist+'"][data-amplitude-song-index="'+t+'"]');for(var l=0;l<a.length;l++)a[l].innerHTML=e}function resetTimes(){var e=document.querySelectorAll(".amplitude-time-remaining");for(var t=0;t<e.length;t++)e[t].innerHTML="00"}
/**
         * Computes the time remaining for the audio.
         *
         * @param {object} currentTime - The current time of the audio.
         * @param {object} songDuration - The duration of the audio.
         */function computeTimeRemaining(e,t){var a="00:00";var l=parseInt(e.seconds)+60*parseInt(e.minutes)+60*parseInt(e.hours)*60;var u=parseInt(t.seconds)+60*parseInt(t.minutes)+60*parseInt(t.hours)*60;if(!isNaN(l)&&!isNaN(u)){var n=u-l;var i=Math.floor(n/3600);var r=Math.floor((n-3600*i)/60);var s=n-3600*i-60*r;a=(r<10?"0"+r:r)+":"+(s<10?"0"+s:s);i>0&&(a=i+":"+a)}return a}return{sync:sync,resetTimes:resetTimes}}();t.default=n;e.exports=t.default},function(e,t,a){Object.defineProperty(t,"__esModule",{value:true});var l=a(0);var u=_interopRequireDefault(l);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var n=function(){
/**
         * Sync the duration hours elements.
         *
         * @param {Integer} hours - The duration hours for the audio.
         */
function sync(e){syncGlobal(e);syncPlaylist(e);syncSong(e);syncSongInPlaylist(e)}
/**
         * Syncs the global duration hours elements.
         *
         * @param {Integer} hours - the duration hours for the audio.
         */function syncGlobal(e){var t=document.querySelectorAll(".amplitude-duration-hours");for(var a=0;a<t.length;a++){var l=t[a].getAttribute("data-amplitude-playlist");var u=t[a].getAttribute("data-amplitude-song-index");null==l&&null==u&&(t[a].innerHTML=e)}}
/**
         * Syncs the playlist duration hours for the audio.
         *
         * @param {Integer} hours - The duration hours for the audio.
         */function syncPlaylist(e){var t=document.querySelectorAll('.amplitude-duration-hours[data-amplitude-playlist="'+u.default.active_playlist+'"]');for(var a=0;a<t.length;a++){var l=t[a].getAttribute("data-amplitude-song-index");null==l&&(t[a].innerHTML=e)}}
/**
         * Syncs the song duration hours.
         *
         * @param {Integer} hours - The duration hours for the audio.
         */function syncSong(e){if(null==u.default.active_playlist){var t=document.querySelectorAll('.amplitude-duration-hours[data-amplitude-song-index="'+u.default.active_index+'"]');for(var a=0;a<t.length;a++){var l=t[a].getAttribute("data-amplitude-playlist");null==l&&(t[a].innerHTML=e)}}}
/**
         * Syncs the song in playlist duration hours.
         *
         * @param {Integer} hours - The duration hours of the audio.
         */function syncSongInPlaylist(e){var t=""!=u.default.active_playlist&&null!=u.default.active_playlist?u.default.playlists[u.default.active_playlist].active_index:null;var a=document.querySelectorAll('.amplitude-duration-hours[data-amplitude-playlist="'+u.default.active_playlist+'"][data-amplitude-song-index="'+t+'"]');for(var l=0;l<a.length;l++)a[l].innerHTML=e}function resetTimes(){var e=document.querySelectorAll(".amplitude-duration-hours");for(var t=0;t<e.length;t++)e[t].innerHTML="00"}return{sync:sync,resetTimes:resetTimes}}();t.default=n;e.exports=t.default},function(e,t,a){Object.defineProperty(t,"__esModule",{value:true});var l=a(0);var u=_interopRequireDefault(l);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var n=function(){
/**
         * Sync the duration minutes elements.
         *
         * @param {Integer} minutes - The duration minutes for the audio.
         */
function sync(e){syncGlobal(e);syncPlaylist(e);syncSong(e);syncSongInPlaylist(e)}
/**
         * Syncs the global duration minutes elements.
         *
         * @param {Integer} minutes - the duration minutes for the audio.
         */function syncGlobal(e){var t=document.querySelectorAll(".amplitude-duration-minutes");for(var a=0;a<t.length;a++){var l=t[a].getAttribute("data-amplitude-playlist");var u=t[a].getAttribute("data-amplitude-song-index");null==l&&null==u&&(t[a].innerHTML=e)}}
/**
         * Syncs the playlist duration minutes for the audio.
         *
         * @param {Integer} minutes - The duration minutes for the audio.
         */function syncPlaylist(e){var t=document.querySelectorAll('.amplitude-duration-minutes[data-amplitude-playlist="'+u.default.active_playlist+'"]');for(var a=0;a<t.length;a++){var l=t[a].getAttribute("data-amplitude-song-index");null==l&&(t[a].innerHTML=e)}}
/**
         * Syncs the song duration minutes.
         *
         * @param {Integer} minutes - The duration minutes for the audio.
         */function syncSong(e){if(null==u.default.active_playlist){var t=document.querySelectorAll('.amplitude-duration-minutes[data-amplitude-song-index="'+u.default.active_index+'"]');for(var a=0;a<t.length;a++){var l=t[a].getAttribute("data-amplitude-playlist");null==l&&(t[a].innerHTML=e)}}}
/**
         * Syncs the song in playlist duration minutes.
         *
         * @param {Integer} minutes - The duration minutes of the audio.
         */function syncSongInPlaylist(e){var t=""!=u.default.active_playlist&&null!=u.default.active_playlist?u.default.playlists[u.default.active_playlist].active_index:null;var a=document.querySelectorAll('.amplitude-duration-minutes[data-amplitude-playlist="'+u.default.active_playlist+'"][data-amplitude-song-index="'+t+'"]');for(var l=0;l<a.length;l++)a[l].innerHTML=e}function resetTimes(){var e=document.querySelectorAll(".amplitude-duration-minutes");for(var t=0;t<e.length;t++)e[t].innerHTML="00"}return{sync:sync,resetTimes:resetTimes}}();t.default=n;e.exports=t.default},function(e,t,a){Object.defineProperty(t,"__esModule",{value:true});var l=a(0);var u=_interopRequireDefault(l);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var n=function(){
/**
         * Sync the duration seconds elements.
         *
         * @param {Integer} seconds - The duration seconds for the audio.
         */
function sync(e){syncGlobal(e);syncPlaylist(e);syncSong(e);syncSongInPlaylist(e)}
/**
         * Syncs the global duration seconds elements.
         *
         * @param {Integer} seconds - the duration seconds for the audio.
         */function syncGlobal(e){var t=document.querySelectorAll(".amplitude-duration-seconds");for(var a=0;a<t.length;a++){var l=t[a].getAttribute("data-amplitude-playlist");var u=t[a].getAttribute("data-amplitude-song-index");null==l&&null==u&&(t[a].innerHTML=e)}}
/**
         * Syncs the playlist duration seconds for the audio.
         *
         * @param {Integer} seconds - The duration seconds for the audio.
         */function syncPlaylist(e){var t=document.querySelectorAll('.amplitude-duration-seconds[data-amplitude-playlist="'+u.default.active_playlist+'"]');for(var a=0;a<t.length;a++){var l=t[a].getAttribute("data-amplitude-song-index");null==l&&(t[a].innerHTML=e)}}
/**
         * Syncs the song duration seconds.
         *
         * @param {Integer} seconds - The duration seconds for the audio.
         */function syncSong(e){if(null==u.default.active_playlist){var t=document.querySelectorAll('.amplitude-duration-seconds[data-amplitude-song-index="'+u.default.active_index+'"]');for(var a=0;a<t.length;a++){var l=t[a].getAttribute("data--amplitude-playlist");null==l&&(t[a].innerHTML=e)}}}
/**
         * Syncs the song in playlist duration seconds.
         *
         * @param {Integer} seconds - The duration seconds of the audio.
         */function syncSongInPlaylist(e){var t=""!=u.default.active_playlist&&null!=u.default.active_playlist?u.default.playlists[u.default.active_playlist].active_index:null;var a=document.querySelectorAll('.amplitude-duration-seconds[data-amplitude-playlist="'+u.default.active_playlist+'"][data-amplitude-song-index="'+t+'"]');for(var l=0;l<a.length;l++)a[l].innerHTML=e}function resetTimes(){var e=document.querySelectorAll(".amplitude-duration-seconds");for(var t=0;t<e.length;t++)e[t].innerHTML="00"}return{sync:sync,resetTimes:resetTimes}}();t.default=n;e.exports=t.default},function(e,t,a){Object.defineProperty(t,"__esModule",{value:true});var l=a(0);var u=_interopRequireDefault(l);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var n=function(){
/**
         * Syncs the duration time for all elements.
         *
         * @param {Object} durationTime - The object containing all of the song duration times.
         */
function sync(e){var t=computeDurationText(e);syncGlobal(t);syncPlaylist(t);syncSong(t);syncSongInPlaylist(t)}
/**
         * Sync the global song duration elements.
         *
         * @param {Object} durationText - The text for the song duration.
         */function syncGlobal(e){var t=document.querySelectorAll(".amplitude-duration-time");for(var a=0;a<t.length;a++){var l=t[a].getAttribute("data-amplitude-playlist");var u=t[a].getAttribute("data-amplitude-song-index");null==l&&null==u&&(t[a].innerHTML=e)}}
/**
         * Sync the playlist duration times.
         *
         * @param {Object} durationText - The text for the song duration.
         */function syncPlaylist(e){var t=document.querySelectorAll('.amplitude-duration-time[data-amplitude-playlist="'+u.default.active_playlist+'"]');for(var a=0;a<t.length;a++){var l=t[a].getAttribute("data-amplitude-song-index");null==l&&(t[a].innerHTML=e)}}
/**
         * Sync the song duration times.
         *
         * @param {Object} durationText - The text for the song duration.
         */function syncSong(e){if(null==u.default.active_playlist){var t=document.querySelectorAll('.amplitude-duration-time[data-amplitude-song-index="'+u.default.active_index+'"]');for(var a=0;a<t.length;a++){var l=t[a].getAttribute("data-amplitude-playlist");null==l&&(t[a].innerHTML=e)}}}
/**
         * Sync the song in playlist duration times.
         *
         * @param {Object} durationText - An object containing the duration text.
         */function syncSongInPlaylist(e){var t=""!=u.default.active_playlist&&null!=u.default.active_playlist?u.default.playlists[u.default.active_playlist].active_index:null;var a=document.querySelectorAll('.amplitude-duration-time[data-amplitude-playlist="'+u.default.active_playlist+'"][data-amplitude-song-index="'+t+'"]');for(var l=0;l<a.length;l++)a[l].innerHTML=e}function resetTimes(){var e=document.querySelectorAll(".amplitude-duration-time");for(var t=0;t<e.length;t++)e[t].innerHTML="00:00"}
/**
         * Computes the duration text
         *
         * @param {Object} durationTime - An object containint the duration times.
         */function computeDurationText(e){var t="00:00";if(!isNaN(e.minutes)&&!isNaN(e.seconds)){t=e.minutes+":"+e.seconds;!isNaN(e.hours)&&e.hours>0&&(t=e.hours+":"+t)}return t}return{sync:sync,resetTimes:resetTimes}}();t.default=n;e.exports=t.default},function(e,t){e.exports={name:"amplitudejs",version:"5.3.2",description:"A JavaScript library that allows you to control the design of your media controls in your webpage -- not the browser. No dependencies (jQuery not required) https://521dimensions.com/open-source/amplitudejs",main:"dist/amplitude.js",devDependencies:{"babel-core":"^6.26.3","babel-loader":"^7.1.5","babel-plugin-add-module-exports":"0.2.1","babel-polyfill":"^6.26.0","babel-preset-es2015":"^6.18.0",husky:"^1.3.1",jest:"^23.6.0",prettier:"1.15.1","pretty-quick":"^1.11.1",watch:"^1.0.2",webpack:"^2.7.0"},directories:{doc:"docs"},files:["dist"],funding:{type:"opencollective",url:"https://opencollective.com/amplitudejs"},scripts:{build:"node_modules/.bin/webpack",prettier:"npx pretty-quick",preversion:"npx pretty-quick && npm run test",postversion:"git push && git push --tags",test:"jest",version:"npm run build && git add -A dist"},repository:{type:"git",url:"git+https://github.com/521dimensions/amplitudejs.git"},keywords:["webaudio","html5","javascript","audio-player"],author:"521 Dimensions (https://521dimensions.com)",license:"MIT",bugs:{url:"https://github.com/521dimensions/amplitudejs/issues"},homepage:"https://github.com/521dimensions/amplitudejs#readme"}}])}));var a=t;const l=t.Amplitude,u=t.version,n=t.__esModule;export default a;export{l as Amplitude,n as __esModule,u as version};


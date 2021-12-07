// brings in a "class" of music-container
const musicContainer = document.querySelector('.music-container');
// brings in an "id" of play
const playBtn = document.querySelector('#play');
// brings in an "id" of prev (previous)
const prevBtn = document.querySelector('#prev');
// brings in an "id" of next
const nextBtn = document.querySelector('#next');
// brings in an "id" of audio
const audio = document.querySelector('#audio');
// brings in a "class" of progress
const progress = document.querySelector('.progress');
// brings in a "class" of progress-container
const progressContainer = document.querySelector('.progress-container');
// brings in an "id" of title
const title = document.querySelector('#title');
// brings in an "id" of cover
const cover = document.querySelector('#cover');

// Song titles
const songs = ['cant-stop', 'danger-zone', 'glory-days', 'seven-nation-army']

// Keep track of songs
let songIndex = 0

// Initially load song info DOM
loadSong(songs[songIndex])

// Update song details
function loadSong(song) {
    title.innerText = song
    // music folder / song.mp3 file
    audio.src = `music/${song}.mp3`
    // images folder / image.jpeg file
    cover.src = `images/${song}.jpeg`

}

function playSong() {
    musicContainer.classList.add('play')
    // change "playBtn" icon to "pauseBtn" icon
    playBtn.querySelector('i.fas').classList.remove('fa-play')
    playBtn.querySelector('i.fas').classList.add('fa-pause')
    // audio.play will play the song when the playBtn is removed
    audio.play()
}

function prevSong() {
    // change current song to previous song by -1
    songIndex--
    // change song to beginning if song number less than 0
    if(songIndex < 0) {
        songIndex = songs.length - 1
    }

    loadSong(songs[songIndex])

    playSong()
}

function nextSong() {
     // change current song to next song by +1
     songIndex++
    // if current song is the last one then set song to the beginning
     if(songIndex > songs.length - 1) {
         // set song to first song which is number 0
         songIndex = 0
     }
 
     loadSong(songs[songIndex])
 
     playSong()
}

function pauseSong() {
    musicContainer.classList.remove('play')
    // change "pauseBtn" icon to "playBtn" icon
    playBtn.querySelector('i.fas').classList.add('fa-play')
    playBtn.querySelector('i.fas').classList.remove('fa-pause')
    // audio.pause will pause the song when the playBtn is added
    audio.pause()
}

// updates the progress bar as the song plays
// updateProgress function will take in an 'event' object
function updateProgress(e) {
    // console.log(e.srcElement.currentTime)
    // console.log(e.srcElement.duration)
    // deconstruct both "currentTime" and "duration" values
    const { currentTime, duration } = e.srcElement
    // set progress bar percentage
    const progressPercent = (currentTime / duration) * 100
    // set width of the progress bar as song plays
    progress.style.width = `${progressPercent}%`
}

// updates to progress bar when clicked at a particular location
// setProgress function will take in an 'event' object
function setProgress(e) {
    // update the width of the progress bar from where it was clicked
    const width = this.clientWidth 
    // console.log(width)
    // update progress width on the x-axis where clicked
    const clickX = e.offsetX
    // console.log(clickX) 
    // Get duration amount of progress bar when clicked through audio element
    const duration = audio.duration

    // set current time of song from location of where the click was on the progress bar
    audio.currentTime = (clickX / width) * duration
}

// Event listeners
playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play')

    if(isPlaying) {
        pauseSong()
    } else {
        playSong()
    }
})

// Change song events
prevBtn.addEventListener('click', prevSong)
nextBtn.addEventListener('click', nextSong)

// When the song is playing the "timeupdate" event will be called and will call a function called updateProgress
// For the progress bar percentage
audio.addEventListener('timeupdate', updateProgress)

// When the song progress bar is clicked the song progress with update to a function called setProgress
// To go anywhere in the song time when a location on the progress bar is clicked
progressContainer.addEventListener('click', setProgress)

// When song ends automatically move on to the next song on the track list
// When current song has 'ended' we want to call the nextSong function
audio.addEventListener('ended', nextSong)
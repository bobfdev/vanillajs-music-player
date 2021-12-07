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
let songIndex = 2

// Initially load song info DOM

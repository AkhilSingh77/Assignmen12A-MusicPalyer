const data = [
  {
    title: "Death Bed",

    artist: "Powfu",

    artwork: "https://samplesongs.netlify.app/album-arts/death-bed.jpg",

    url: "https://samplesongs.netlify.app/Death%20Bed.mp3",

    id: "1",
  },

  {
    title: "Bad Liar",

    artist: "Imagine Dragons",

    artwork: "https://samplesongs.netlify.app/album-arts/bad-liar.jpg",

    url: "https://samplesongs.netlify.app/Bad%20Liar.mp3",

    id: "2",
  },

  {
    title: "Faded",

    artist: "Alan Walker",

    artwork: "https://samplesongs.netlify.app/album-arts/faded.jpg",

    url: "https://samplesongs.netlify.app/Faded.mp3",

    id: "3",
  },

  {
    title: "Hate Me",

    artist: "Ellie Goulding",

    artwork: "https://samplesongs.netlify.app/album-arts/hate-me.jpg",

    url: "https://samplesongs.netlify.app/Hate%20Me.mp3",

    id: "4",
  },

  {
    title: "Solo",

    artist: "Clean Bandit",

    artwork: "https://samplesongs.netlify.app/album-arts/solo.jpg",

    url: "https://samplesongs.netlify.app/Solo.mp3",

    id: "5",
  },

  {
    title: "Without Me",

    artist: "Halsey",

    artwork: "https://samplesongs.netlify.app/album-arts/without-me.jpg",

    url: "https://samplesongs.netlify.app/Without%20Me.mp3",

    id: "6",
  },
];

const img = document.getElementsByClassName("musicwrapper__top--img")[0];
const title = document.getElementsByClassName("bottom__details--title")[0];
const artist = document.getElementsByClassName("bottom__details--artist")[0];
const forwardButton = document.getElementsByClassName(
  "buttonscontainer__nextprevious--forward"
)[0];
const previousButton = document.getElementsByClassName(
  "buttonscontainer__nextprevious--previous"
)[0];
const playButton = document.getElementsByClassName("play")[0];
const pauseplayCont = document.getElementsByClassName("pauseplay")[0];
const repeatButton = document.getElementsByClassName("repeat")[0];
const shuffleButton = document.getElementsByClassName("shuffle")[0];
const currentTimeElement = document.getElementsByClassName('bottom__musicplayer__timings--currenttime')[0];
const durationElement = document.getElementsByClassName('bottom__musicplayer__timings--duration')[0];
const progresBar = document.getElementsByClassName('bottom__musicplayer__main--progress')[0];

let value = 0;
let randomSong = false;
let playPauseBolleanValue = false;
let repeat = false;
let audioElement = new Audio();
let durationTime;

changeSong(0);

audioElement.addEventListener('ended', () => {
    if (repeat) {
        changeSong(value); 
        playpauseSong();
      } else {
        value = value + 1;
        changeSong(value); 
        playpauseSong();
      }
  });


function getTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
};

if (!playPauseBolleanValue) 
    {
  pauseplayCont.innerHTML = '<i class="fa-solid fa-play play"></i>';
  audioElement.pause();
} else 
{
  pauseplayCont.innerHTML = '<i class="fa-solid fa-pause play"></i>';
  audioElement.play();
}

function changeSong(index) {
  let length = data.length;
  value = index;

  if (randomSong) {
    const index = Math.floor(Math.random() * length);
    value = index;
  } else {
    if (value >= length) {
      value = 0;
    } else if (value < 0) {
      value = length - 1;
    }
  }

  const item = data[value];
  img.src = item.artwork;
  title.textContent = item.title;
  artist.textContent = item.artist;
  audioElement.src = item.url;

  audioElement.addEventListener('loadedmetadata', () => {
    const duration = audioElement.duration;
      durationTime =duration;
    durationElement.textContent = getTime(duration);
});


setInterval(() => {
    if (!audioElement.paused) {  
        const currentTime = audioElement.currentTime;
        const progressPercent = (currentTime / durationTime) * 100;

        progresBar.style.width = `${progressPercent}%`;
        currentTimeElement.textContent = getTime(currentTime);
    }
}, 1000); 





}

function playpauseSong(){
    if (!playPauseBolleanValue
    
    ) {
        pauseplayCont.innerHTML = ' <i class="fa-solid fa-play play"></i>';
        audioElement.pause();
        img.style.animationPlayState = 'paused';
        
      } else {
        pauseplayCont.innerHTML = ' <i class="fa-solid fa-pause play"></i>';
        audioElement.play();
        img.style.animationPlayState = 'running';
      }

}



forwardButton.addEventListener("click", () => {
  value = value + 1;

  changeSong(value);

  
    playPauseBolleanValue
=true;
    playpauseSong();

});

previousButton.addEventListener("click", () => {
  value = value - 1;

  changeSong(value);

    playPauseBolleanValue
=true;
    playpauseSong();

});

pauseplayCont.addEventListener("click", () => {

  playPauseBolleanValue
 = !playPauseBolleanValue
;
  playpauseSong();
});

repeatButton.addEventListener("click", () => {
  repeat = !repeat;
  if (repeat) {
    repeatButton.classList.add("active");
  
  } else {
    repeatButton.classList.remove("active");
  
  }

});



shuffleButton.addEventListener("click", () => {
  randomSong = !randomSong;

  if (randomSong) {
    shuffleButton.classList.add("active");
  } else {
    shuffleButton.classList.remove("active");
  }
});

const data =[

  {

    "title": "Death Bed",

    "artist": "Powfu",

    "artwork": "https://samplesongs.netlify.app/album-arts/death-bed.jpg",

    "url": "https://samplesongs.netlify.app/Death%20Bed.mp3",

    "id": "1"

  },

  {

    "title": "Bad Liar",

    "artist": "Imagine Dragons",

    "artwork": "https://samplesongs.netlify.app/album-arts/bad-liar.jpg",

    "url": "https://samplesongs.netlify.app/Bad%20Liar.mp3",

    "id": "2"

  },

  {

    "title": "Faded",

    "artist": "Alan Walker",

    "artwork": "https://samplesongs.netlify.app/album-arts/faded.jpg",

    "url": "https://samplesongs.netlify.app/Faded.mp3",

    "id": "3"

  },

  {

    "title": "Hate Me",

    "artist": "Ellie Goulding",

    "artwork": "https://samplesongs.netlify.app/album-arts/hate-me.jpg",

    "url": "https://samplesongs.netlify.app/Hate%20Me.mp3",

    "id": "4"

  },

  {

    "title": "Solo",

    "artist": "Clean Bandit",

    "artwork": "https://samplesongs.netlify.app/album-arts/solo.jpg",

    "url": "https://samplesongs.netlify.app/Solo.mp3",

    "id": "5"

  },

  {

    "title": "Without Me",

    "artist": "Halsey",

    "artwork": "https://samplesongs.netlify.app/album-arts/without-me.jpg",

    "url": "https://samplesongs.netlify.app/Without%20Me.mp3",

    "id": "6"

  }

]

const img = document.getElementsByClassName('musicwrapper__top--img')[0];
const title = document.getElementsByClassName('bottom__details--title')[0];
const artist = document.getElementsByClassName('bottom__details--artist')[0];
const forwardButton = document.getElementsByClassName('buttonscontainner__nextprevious--forward')[0];
// console.log("forward",forwardButton);
const previousButton = document.getElementsByClassName('buttonscontainner__nextprevious--previous')[0];
const playButton = document.getElementsByClassName('play')[0];
const pauseplayCont = document.getElementsByClassName('pauseplay')[0];
const repeatButton = document.getElementsByClassName('repeat')[0];

 

let value = 0;

changeSong(0);

let bool  = true;
let repeat = false; 
 


function changeSong(index){
    let length = data.length;
    value = index;
    if(value >= length){
        value = 0;
    } else if (value < 0) {
        value = length - 1; // Handle previous button to loop back to the last song
    }

    const item = data[value];
    img.src = item.artwork;
    title.textContent = item.title;
    artist.textContent = item.artist;
};


forwardButton.addEventListener('click',()=>{
    if(repeat){
        value = value;
    }
    else{
        value = value+1;
    }
  
    // console.log("forward",value);
    changeSong(value);
})

previousButton.addEventListener('click',()=>{
    if(repeat){
        value = value;
    }
    else{
        value = value-1;
    }

    changeSong(value)
})


pauseplayCont.addEventListener('click',()=>{
   bool = !bool;
       pauseplayCont.innerHTML =' ';
   if(bool){
    pauseplayCont.innerHTML =' <i class="fa-solid fa-pause play"></i>'
   }
   else{
        pauseplayCont.innerHTML =' <i class="fa-solid fa-play play"></i>'
   }
})


repeatButton.addEventListener('click',()=>{
   repeat = !repeat;
})
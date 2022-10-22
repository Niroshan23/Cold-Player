let previous = document.querySelector('#pre');
let play = document.querySelector('#play');
let next = document.querySelector('#next');
let title = document.querySelector('#title');
let recent_volume= document.querySelector('#volume');
let volume_show = document.querySelector('#volume_show');
let slider = document.querySelector('#duration_slider');
let show_duration = document.querySelector('#show_duration');
let track_image = document.querySelector('#track_image');
let auto_play = document.querySelector('#auto');
let present = document.querySelector('#present');
let total = document.querySelector('#total');
let artist = document.querySelector('#artist');



let timer;
let autoplay = 0;

let index_no = 0;
let Playing_song = false;

//create a audio Element
let track = document.createElement('audio');


//All songs list
let All_song = [
   {
    name: "42",
     path: "../../Audio/Viva la Vida or Death and all His Friends/Coldplay - 42.mp3",
     img: "images/downloadviva.jpg",
     singer: "ColdPlay",
   },
   {
    name: "Cemeteries of London",
     path: "../../Audio/Viva la Vida or Death and all His Friends/Coldplay - Cemeteries of London.mp3",
     img: "images/downloadvivaa.jpg",
     singer: "ColdPlay"
   },
   {
     name: "death and all his friends",
     path: "../../Audio/Viva la Vida or Death and all His Friends/coldplay - death and all his friends.mp3",
     img: "images/Viva la Vida or Death and All His Friends.jpg",
     singer: "ColdPlay"
   },
   {
     name: "Life In Technicolor ii",
     path: "../../Audio/Viva la Vida or Death and all His Friends/Coldplay - Life In Technicolor ii (Official Video).mp3",
     img: "images/d4y16nn-9e3e257e-c5cc-4453-982b-10e0fe43f777.jpg",
     singer: "ColdPlay"
   },
   {
     name: "Lost!",
     path: "../../Audio/Viva la Vida or Death and all His Friends/Coldplay - Lost! (Official Music Video).mp3",
     img: "images/artworks-000065950323-jze0as-t500x500.jpg",
     singer: "ColdPlay"
   },
   {
     name: "Lovers In Japan",
     path: "../../Audio/Viva la Vida or Death and all His Friends/Coldplay - Lovers In Japan (Official Video).mp3 ",
     img: "images/5d11c3f514e7a8b36363924b5e9b8be3.jpg",
     singer: "ColdPlay"
   },
   {
     name: " Strawberry Swing",
     path: "../../Audio/Viva la Vida or Death and all His Friends/Coldplay - Strawberry Swing (Official Video).mp3",
     img: "images/32e9b67797bf343c7ab7a7c56683f9fd.jpg",
     singer: "ColdPlay  "
   },{
     name: "Violet Hill ",
     path: "../../Audio/Viva la Vida or Death and all His Friends/Coldplay - Violet Hill (Official Video).mp3",
     img:  "images/artworks-000229379221-lzt0qs-t500x500.jpg",
     singer: "ColdPlay"
   },{
     name: "Viva La Vida",
     path: "../../Audio/Viva la Vida or Death and all His Friends/Coldplay - Viva La Vida (Official Video).mp3",
     img: "images/Viva la Vida or Death and All His Friends.jpg",
     singer: "ColdPlay"
   },{
     name: "Yes",
     path: "../../Audio/Viva la Vida or Death and all His Friends/Coldplay - Yes.mp3",
     img:  "images/d4xdnkf-f61be832-fd23-44a8-8da9-d821e0f36935.jpg",
     singer: "ColdPlay"
   },
];


// All functions


// function load the track
function load_track(index_no){
	clearInterval(timer);
	reset_slider();

	track.src = All_song[index_no].path;
	title.innerHTML = All_song[index_no].name;	
	track_image.src = All_song[index_no].img;
    artist.innerHTML = All_song[index_no].singer;
    track.load();

	timer = setInterval(range_slider ,1000);
	total.innerHTML = All_song.length;
	present.innerHTML = index_no + 1;
}

load_track(index_no);


//mute sound function
function mute_sound(){
	track.volume = 0;
	volume.value = 0;
	volume_show.innerHTML = 0;
}


// checking.. the song is playing or not
 function justplay(){
 	if(Playing_song==false){
 		playsong();

 	}else{
 		pausesong();
 	}
 }


// reset song slider
 function reset_slider(){
 	slider.value = 0;
 }

// play song
function playsong(){
  track.play();
  Playing_song = true;
  play.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
}

//pause song
function pausesong(){
	track.pause();
	Playing_song = false;
	play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
}


// next song
function next_song(){
	if(index_no < All_song.length - 1){
		index_no += 1;
		load_track(index_no);
		playsong();
	}else{
		index_no = 0;
		load_track(index_no);
		playsong();

	}
}


// previous song
function previous_song(){
	if(index_no > 0){
		index_no -= 1;
		load_track(index_no);
		playsong();

	}else{
		index_no = All_song.length;
		load_track(index_no);
		playsong();
	}
}


// change volume
function volume_change(){
	volume_show.innerHTML = recent_volume.value;
	track.volume = recent_volume.value / 100;
}

// change slider position 
function change_duration(){
	slider_position = track.duration * (slider.value / 100);
	track.currentTime = slider_position;
}

// autoplay function
function autoplay_switch(){
	if (autoplay==1){
       autoplay = 0;
       auto_play.style.background = "rgba(255,255,255,0.2)";
	}else{
       autoplay = 1;
       auto_play.style.background = "#FF8A65";
	}
}


function range_slider(){
	let position = 0;
        
        // update slider position
		if(!isNaN(track.duration)){
		   position = track.currentTime * (100 / track.duration);
		   slider.value =  position;
	      }

       
       // function will run when the song is over
       if(track.ended){
       	 play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
           if(autoplay==1){
		       index_no += 1;
		       load_track(index_no);
		       playsong();
           }
	    }
     }
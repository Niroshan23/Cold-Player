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
    name: "Army of One",
     path: "../../Audio/A Head Full of Dreams/Army of One.mp3",
     img: "images/pngkey.com-ukulele-png-16449412.png",
     singer: "ColdPlay",
   },
   {
    name: "A Head Full Of Dreams",
     path: "../../Audio/A Head Full of Dreams/Coldplay - A Head Full Of Dreams (Official Video).mp3",
     img: "images/st,small,507x507-pad,600x600,f8f8f8.jpg",
     singer: "ColdPlay"
   },
   {
     name: "Adventure Of A Lifetime",
     path: "../../Audio/A Head Full of Dreams/Coldplay - Adventure Of A Lifetime (Official Video).mp3",
     img: "images/hqdefault1.png",
     singer: "ColdPlay"
   },
   {
     name: "Amazing Day",
     path: "../../Audio/A Head Full of Dreams/Coldplay - Amazing Day - LYRICS.mp3",
     img: "images/artworks-000197217505-jb8ptb-t500x500.jpg-1.png",
     singer: "ColdPlay"
   },
   {
     name: "Birds",
     path: "../../Audio/A Head Full of Dreams/Coldplay - Birds (Official Video).mp3",
     img: "images/artworks-000389727681-omxhu6-t500x5001.png",
     singer: "ColdPlay"
   },
   {
     name: "Everglow",
     path: "../../Audio/A Head Full of Dreams/Coldplay - Everglow -Single Version- - (Official Video).mp3   ",
     img: "images/MV5BNTk3Yzk2ZTctMGQyOS00NDRmLTg2NjctNjRmZjE4NmNjM2Q1XkEyXkFqcGdeQXVyMjUyNDk2ODc@._V1_1.png",
     singer: "ColdPlay"
   },
   {
     name: "Fun ft. Tove Lo",
     path: "../../Audio/A Head Full of Dreams/Coldplay - Fun (ft. Tove Lo) (Official Video).mp3",
     img: "images/artworks-000202446615-zc0erk-t500x500.jpg",
     singer: "ColdPlay ft . Tove Lo "
   },{
     name: "Hymn For The Weekend",
     path: "../../Audio/A Head Full of Dreams/Coldplay - Hymn For The Weekend (Official Video).mp3",
     img: "images/56e25157708083.59e0330da69b7.png",
     singer: "ColdPlay"
   },{
     name: "Kaleidoscope",
     path: "../../Audio/A Head Full of Dreams/Coldplay - Kaleidoscope - LYRICS.mp3",
     img: "images/Coldplay_-_Hypnotised.png",
     singer: "ColdPlay"
   },{
     name: "Up&Up",
     path: "../../Audio/A Head Full of Dreams/Coldplay - Up&Up (Official Video).mp3",
     img: "images/artworks-000190945723-w6f70q-t500x500.png",
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
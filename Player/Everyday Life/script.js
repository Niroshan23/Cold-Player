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
    name: "Broken",
     path: "../../Audio/Everyday Life/Coldplay - BrokEn (Official Lyric Video).mp3",
     img: "images/download.jpg",
     singer: "ColdPlay",
   },
   {
    name: "Champion Of The World",
     path: "../../Audio/Everyday Life/Coldplay - Champion Of The World (Official Video).mp3",
     img: "images/maxresdefault.jpg",
     singer: "ColdPlay"
   },
   {
     name: "Church ",
     path: "../../Audio/Everyday Life/Coldplay - Church (Official Lyric Video).mp3",
     img: "images/Church.png",
     singer: "ColdPlay"
   },
   {
     name: "Cry Cry Cry",
     path: "../../Audio/Everyday Life/Coldplay - Cry Cry Cry (Official Video).mp3",
     img: "images/255cc2382155153ce79f620613dfa0ef.png",
     singer: "ColdPlay"
   },
   {
     name: "Daddy",
     path: "../../Audio/Everyday Life/Coldplay - Daddy (Official Video).mp3",
     img: "images/download (1).jpg",
     singer: "ColdPlay"
   },
   {
     name: "Èkó",
     path: "../../Audio/Everyday Life/Coldplay - Èkó (Official Lyric Video).mp3  ",
     img: "images/sddefault.jpg",
     singer: "ColdPlay"
   },
   {
     name: "Guns",
     path: "../../Audio/Everyday Life/Coldplay - Guns (Official Lyric Video).mp3",
     img: "images/maxresdefault (1).jpg",
     singer: "ColdPlay "
   },{
     name: "Old Friends",
     path: "../../Audio/Everyday Life/Coldplay - Old Friends (Official Lyric Video).mp3",
     img: "images/maxresdefault (3).jpg",
     singer: "ColdPlay"
   },{
     name: "Orphans",
     path: "./../Audio/Everyday Life/Coldplay - Orphans (Official Video).mp3",
     img: "images/Orphans.jpg",
     singer: "ColdPlay"
   },
{
     name: "Sunrise",
     path: "../../Audio/Everyday Life/Coldplay - Sunrise (Official Lyric Video).mp3",
     img: "images/maxresdefault (2).jpg",
     singer: "ColdPlay"
   },
   {
     name: "Trouble In Town",
     path: "../../Audio/Everyday Life/Coldplay - Trouble In Town (Official Video).mp3",
     img: "images/maxresdefault (4).jpg",
     singer: "ColdPlay"
   },
   {
     name: " When I Need A Friend",
     path: "../../Audio/Everyday Life/Coldplay - When I Need A Friend (Official Lyric Video).mp3",
     img: "images/maxresdefault (5).jpg",
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
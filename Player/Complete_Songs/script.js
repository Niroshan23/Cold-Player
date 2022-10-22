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
   },{
    name: "Amsterdam",
     path: "../../Audio/A Rush of Blood To The Head/Amsterdam - Coldplay.mp3",
     img: "images/Capture.PNG",
     singer: "ColdPlay",
   },
   {
    name: "A Whisper",
     path: "../../Audio/A Rush of Blood To The Head/Coldplay - A Whisper.mp3",
     img: "images/j9wyhbuzjnxz.jpg",
     singer: "ColdPlay"
   },
   {
     name: "Clocks",
     path: "../../Audio/A Rush of Blood To The Head/Coldplay - Clocks (Official Video).mp3",
     img: "images/artworks-000134891393-zz8pr5-t500x500.jpg",
     singer: "ColdPlay"
   },
   {
     name: "God Put A Smile Upon Your Face ",
     path: "../../Audio/A Rush of Blood To The Head/Coldplay - God Put A Smile Upon Your Face (Official Video).mp3",
     img: "images/93cd96dc547e4f4d4b6c194811b31c25.jpg",
     singer: "ColdPlay"
   },
   {
     name: "Green Eyes",
     path: "../../Audio/A Rush of Blood To The Head/Coldplay - Green Eyes.mp3",
     img: "images/artworks-000293625048-5a6tin-t500x500.jpg",
     singer: "ColdPlay"
   },
   {
     name: "In My Place",
     path: "../../Audio/A Rush of Blood To The Head/Coldplay - In My Place (Official Video).mp3",
     img: "images/In_My_Place.jpg",
     singer: "ColdPlay"
   },
   {
     name: "Politik",
     path: "../../Audio/A Rush of Blood To The Head/Coldplay - Politik.mp3",
     img: "images/8e7c4b89e9a6c0e15c4e58a030cc883a.jpg",
     singer: "ColdPlay"
   },{
     name: "The Scientist",
     path: "../../Audio/A Rush of Blood To The Head/Coldplay - The Scientist (Official Video).mp3",
     img: "images/unnamed.jpg",
     singer: "ColdPlay"
   },{
     name: "Daylight",
     path: "../../Audio/A Rush of Blood To The Head/Coldplay Daylight.mp3",
     img: "images/k8u5lffpqw401.png",
     singer: "ColdPlay"
   },{
     name: "Warning Sign ",
     path: "../../Audio/A Rush of Blood To The Head/Warning Sign - Coldplay.mp3",
     img: "images/hqdefault.jpg",
     singer: "ColdPlay"
   },{
    name: "Broken",
     path: "../../Audio/Everyday Life/Coldplay - BrokEn (Official Lyric Video).mp3",
     img: "images/download.jpg",
     singer: "ColdPlay",
   },
   {
    name: "Champion Of The World",
     path: "../../Audio/Everyday Life/Coldplay - Champion Of The World (Official Video).mp3",
     img: "images/maxresdefaults.jpg",
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
   },{
    name: "A Sky Full Of Stars",
     path: "../../Audio/Ghost Stories/Coldplay - A Sky Full Of Stars (Official Video).mp3",
     img: "images/artworks-000100845859-z9agl4-t500x500.jpg",
     singer: "ColdPlay",
   },
   {
    name: "Another's Arms",
     path: "../../Audio/Ghost Stories/Coldplay - Another's Arms (Official audio).mp3",
     img: "images/1Iq3xU4.png",
     singer: "ColdPlay"
   },
   {
     name: "Magic",
     path: "../../Audio/Ghost Stories/Coldplay - Magic (Official Video).mp3",
     img: "images/maxresdefaulte.jpg",
     singer: "ColdPlay"
   },
   {
     name: "Midnight",
     path: "../../Audio/Ghost Stories/Coldplay - Midnight (Official Video).mp3",
     img: "images/artworks-000250879369-95o7dk-t500x500.jpg",
     singer: "ColdPlay"
   },
   {
     name: "Trouble",
     path: "../../Audio/Ghost Stories/Coldplay - Trouble (Official video).mp3",
     img: "images/artworks-JKTtMSUKhpjAe4c6-Mc2hyg-t500x500.jpg",
     singer: "ColdPlay"
   },
   {
     name: "True Love",
     path: "../../Audio/Ghost Stories/Coldplay - True Love (Official Video).mp3   ",
     img: "images/maxresdefault23.jpg",
     singer: "ColdPlay"
   },
   {
     name: "Ink ",
     path: "../../Audio/Ghost Stories/Coldplay- Ink (lyrics).mp3",
     img: "images/artworks-000112708018-7owzkr-t500x500.jpg",
     singer: "ColdPlay "
   },{
     name: "Always In My Head",
     path: "../../Audio/Ghost Stories/ColdplayAlways In My Head.mp3",
     img: "images/81q5h0Wkt1L._SS500_.jpg",
     singer: "ColdPlay"
   },{
     name: "Oceans",
     path: "../../Audio/Ghost Stories/Oceans - Coldplay.mp3",
     img: "images/artworks-000250879369-95o7dk-t500x500.jpg",
     singer: "ColdPlay"
   },{
    name: " Charlie Brown",
     path: "../../Audio/Mylo Xyloto/Coldplay - Charlie Brown (Official Video).mp3",
     img: "images/downloadmylo.jpg",
     singer: "ColdPlay",
   },
   {
    name: "Don't Let It Break Your Heart",
     path: "../../Audio/Mylo Xyloto/Coldplay - Don't Let It Break Your Heart.mp3",
     img: "images/downloadmylo1.jpg",
     singer: "ColdPlay"
   },
   {
     name: "Every Teardrop Is a Waterfall",
     path: "../../Audio/Mylo Xyloto/Coldplay - Every Teardrop Is a Waterfall (Official Video).mp3",
     img: "images/71XiV9z2JoL._SL1250_.jpg",
     singer: "ColdPlay"
   },
   {
     name: "Major Minus",
     path: "../../Audio/Mylo Xyloto/Coldplay - Major Minus (Official Audio).mp3",
     img: "images/downloadmylos.jpg",
     singer: "ColdPlay"
   },
   {
     name: "Paradise",
     path: "../../Audio/Mylo Xyloto/Coldplay - Paradise (Official Video).mp3",
     img: "images/downloadmylos3.jpg",
     singer: "ColdPlay"
   },
   {
     name: "Princess Of China ",
     path: "../../Audio/Mylo Xyloto/Coldplay - Princess Of China ft. Rihanna (Official Video).mp3 ",
     img: "images/downloadmylos21.jpg",
     singer: "ColdPlay ft. Rihanna"
   },
   {
     name: "Up With the Birds",
     path: "../../Audio/Mylo Xyloto/Coldplay - Up With the Birds.mp3",
     img:  "images/downloadmyloxylo.jpg",
     singer: "ColdPlay  "
   },{
     name: "Up In Flames",
     path: "../../Audio/Mylo Xyloto/Coldplay- Up In Flames.mp3",
     img: "images/artworks-000224453327-j72wc6-t500x500.jpg",
     singer: "ColdPlay"
   },{
     name: "Us Against the World",
     path: "../../Audio/Mylo Xyloto/Us Against the World.mp3",
     img: "images/artworks-000068590598-ddyad8-t500x500.jpg",
     singer: "ColdPlay"
   }, {
    name: "Don't Panic",
     path: "../../Audio/Parachutes/Coldplay - Don't Panic (Official Video).mp3",
     img: "images/R-1548468-1259303816.jpeg.jpg",
     singer: "ColdPlay",
   },
   {
    name: "High Speed",
    path: "../../Audio/Parachutes/Coldplay - High Speed.mp3",
    img:  "images/MuH4zK9.png",
    singer: "ColdPlay"
   },
   {
     name: "Sparks",
     path: "../../Audio/Parachutes/Coldplay - Sparks.mp3",
     img: "images/d9fca15c340e2e91229d7d5b0654dec8.jpg",
     singer: "ColdPlay"
   },
   {
     name: "We Never Change",
     path: "../../Audio/Parachutes/Coldplay - We Never Change.mp3",
     img: "images/artworks-000141203688-qkuhk0-t500x500.jpg",
     singer: "ColdPlay"
   },
   {
     name: "Yellow",
     path: "../../Audio/Parachutes/Coldplay - Yellow (Official Video).mp3",
     img: "images/51CmR3kSqtL._SX466_.jpg",
     singer: "ColdPlay"
   },
   {
     name: "spies",
     path: "../../Audio/Parachutes/Coldplay-spies.mp3   ",
     img: "images/wq7fadm0vzwz.jpg",
     singer: "ColdPlay"
   },
   {
     name: "Everything's Not Lost",
     path: "../../Audio/Parachutes/Everything's Not Lost - Coldplay.mp3",
     img: "images/pfmkg44r7ko61.jpg",
     singer: "ColdPlay "
   },{
     name: "O Fly On",
     path: "../../Audio/Parachutes/O Fly On - Coldplay.mp3",
     img: "images/artworks-000174884844-z8oa39-t500x500.jpg",
     singer: "ColdPlay"
   },{
     name: "Shiver",
     path: "../../Audio/Parachutes/Shiver - Coldplay (lyrics).mp3",
     img: "images/downloadpara.jpg",
     singer: "ColdPlay"
   },{
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
   },{
    name: "A Message ",
     path: "../../Audio/X & Y/Coldplay - A Message (with lyrics).mp3",
     img: "images/4d9c50db82dd7bf62517b40b5cded6f8.500x500x1.jpg",
     singer: "ColdPlay",
   },
   {
    name: "Fix You",
     path: "../../Audio/X & Y/Coldplay - Fix You (Official Video).mp3",
     img: "images/artworks-000169141754-3wd128-t500x500.jpg",
     singer: "ColdPlay"
   },
   {
     name: "Low",
     path: "../../Audio/X & Y/Coldplay - Low.mp3",
     img: "images/f84c8f7f52aee2f0843f4ae95cf5fc69.jpg",
     singer: "ColdPlay"
   },
   {
     name: "Speed Of Sound",
     path: "../../Audio/X & Y/Coldplay - Speed Of Sound (Official Video).mp3",
     img: "images/41JZKMGT7JL.jpg",
     singer: "ColdPlay"
   },
   {
     name: "Talk",
     path: "../../Audio/X & Y/Coldplay - Talk (Official Video).mp3",
     img: "images/31TmhG9oz7L._SY355_.jpg",
     singer: "ColdPlay"
   },
   {
     name: "The Hardest Part ",
     path: "../../Audio/X & Y/Coldplay - The Hardest Part (Official Video).mp3  ",
     img:  "images/artworks-000072456576-xsxx46-t500x500.jpg",
     singer: "ColdPlay"
   },
   {
     name: "Twisted Logic",
     path: "../../Audio/X & Y/Coldplay - Twisted Logic.mp3",
     img:  "images/7a446d3c134c92a8cfefcc09d87ead4d.500x500x1.jpg",
     singer: "ColdPlay ft . Tove Lo "
   },{
     name: "What If",
     path: "../../Audio/X & Y/Coldplay - What If.mp3",
     img: "images/1c364d067baa82177869c11901801fe6.300x300x1.jpg",
     singer: "ColdPlay"
   },{
     name: "Swallowed in the Sea",
     path: "../../Audio/X & Y/Lyrics to Swallowed in the Sea - Coldplay.mp3",
     img: "images/artworks-000059517290-c80ukg-t500x500.jpg",
     singer: "ColdPlay"
   },{
     name: "Square One",
     path: "../../Audio/X & Y/Square One - Coldplay.mp3",
     img: "images/artworks-000121765764-kdz5l1-t500x500.jpg",
     singer: "ColdPlay"
   },
   {
     name: "White Shadows",
     path: "../../Audio/X & Y/White Shadows with Lyrics.mp3",
     img: "images/artworks-000115955270-rdoc5c-t500x500.jpg",
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
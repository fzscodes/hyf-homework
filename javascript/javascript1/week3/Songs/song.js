const songDatabase = [{
  songId: 1,
  title: 'My baby',
  artist: 'Soggy socks',
},
{
  songId: 2,
  title: '3 nails in wood',
  artist: 'The carpenters',
},
{
  songId: 3,
  title: 'Blacker than black',
  artist: 'Instant coffee',
},
{
  songId: 4,
  title: 'When is enough too little?',
  artist: 'The spies girls',
},
];


const myPlaylist = [];
function addToMyPlaylist(index) {
  let newSong = songDatabase[index];
  myPlaylist.push(newSong);


}
console.log("My playlist:");

addToMyPlaylist(0);
addToMyPlaylist(3);
console.log(myPlaylist);

function addSongToDatabase(song) {
  songDatabase.push(song);
}
const song1 = new Object();
song1.songId = 5;
song1.title = "Summer of 69";
song1.artist = "Bryan Adams";

const song2 = new Object();
song2.songId = 6;
song2.title = "Cheap Thrills";
song2.artist = "Sia";

addSongToDatabase(song1);
addSongToDatabase(song2);
console.log(songDatabase);

function getSongByTitle(title) {
  index = songDatabase.findIndex(x => x.title === title);
  const newSearchedSong = songDatabase[index];
  return newSearchedSong;
}

const searchedSong = getSongByTitle("Cheap Thrills");
console.log(searchedSong);

const searchedSong2 = getSongByTitle("My baby");
console.log(searchedSong2);
const searchedSong3 = getSongByTitle("You're still the one");
console.log(searchedSong3);


function addSongToMyPlaylist(title) {
  index = songDatabase.findIndex(x => x.title === title);
  const newSongToAdd = songDatabase[index];
  
  myPlaylist.push(newSongToAdd);
  return myPlaylist;

}
addSongToMyPlaylist('3 nails in wood');
console.log(myPlaylist);

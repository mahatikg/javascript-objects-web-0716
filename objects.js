
// did this one yesterday but it didn't register on learn
//at all so am recloning and submitting
var playlist = {
  'artistName': 'songTitle',
};




function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
};

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
};

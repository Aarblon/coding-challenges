/*
Given a string representation of a 2d map, return the number of islands in the map. 
Land spaces are denoted by a zero, while water is denoted by a dot. 
Two land spaces are considered connected if they are adjacent (but not diagonal).
*/



function countIslands (mapStr) {
  var map = mapStr.split('\n');
  map = map.map(function(row) {
    return row.split('');
  });
  var islands = 0;
  for(var i = 0; i < map.length; i++) {
    for(var j = 0; j < map[i].length; j++) {
      //check for land aka '0'
      if(map[i][j] === '0') {
        //we've found a new island
        islands++;
        //let's sink every piece of land connected to the island
        islandDestroyer(i, j);
      }
    }
  }
  function islandDestroyer(x,y) {
    if(map[x][y] === '0') {
      map[x][y] = '.';
      if(map[x+1] !== undefined && map[x+1][y] === '0') {
        islandDestroyer(x+1, y);
      }
      if(map[x-1] !== undefined && map[x-1][y] === '0') {
        islandDestroyer(x-1, y);
      }
      if(map[x][y+1] === '0') {
        islandDestroyer(x, y+1);
      }
      if(map[x][y-1] === '0') {
        islandDestroyer(x, y-1);
      }
    } else {
      return;
    }
  }
  return islands;
}

/* assert 
input: .0...
       .00..
       ....0

output: 2

*/

/* Water collection problem */

var findWater = function(buildings) {
  var tallest = 0;
  var water = 0;
  for(var i = 1; i < buildings.length; i++) {
    if(buildings[i] >= tallest) {
      tallest = buildings[i];
    }
    if(buildings[i] < tallest) {
      var wall = Math.min(Math.max.apply(null, buildings.slice(0, i)), Math.max.apply(null, buildings.slice(i+1)));
      if(wall > buildings[i]) {
        water += wall - buildings[i];
      }
    }
  }

  return water;
}

// assert findWater([5, 3, 7, 2, 6, 4, 5, 9, 1, 2]) === 14
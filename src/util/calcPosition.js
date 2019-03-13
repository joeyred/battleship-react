export function grid(locations) {
  let xStart,
    xEnd,
    yStart,
    yEnd;

  // This handles things if just an array with one
  // set of coordinates are passed
  if (typeof locations[0] === 'number') {
    // console.log('one location');
    xStart = locations[0] + 1;
    xEnd = locations[0] + 2;
    yStart = locations[1] + 1;
    yEnd = locations[1] + 2
  }
  // handles an array of arrays that contain coordinates
  if (typeof locations[0] === 'object') {
    // console.log('lots of locations');
    xStart = locations[0][0] + 1;
    yStart = locations[0][1] + 1;

    xEnd = locations[locations.length - 1][0] + 2;
    yEnd = locations[locations.length - 1][1] + 2;
  }
  return `${yStart} / ${xStart} / ${yEnd} / ${xEnd}`;
}
/**
 * Converts coordinates to CSS absolute positioning
 * @method absolute
 * @param  {Number} cellSize    - The height or width of the square grid cell
 * @param  {Array} coordinates  - The array of the starting coordinates
 * @return {Array}              - Array of the x and y values to use for positioning
 */
export function absolute(cellSize, coordinates) {
  return [cellSize * coordinates[0], cellSize * coordinates[1]];
}

export default {
  grid,
  absolute
}

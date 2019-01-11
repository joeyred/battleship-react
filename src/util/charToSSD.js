// NOTE SSD stands for Seven Segment Display

// |--2--|
// 0     5
// |--3--|
// 1     6
// |--4--|

function charToSSD(character) {
  const segmentArrays = {
    // Numbers
    '0': [true, true, true, false, true, true, true],
    '1': [false, false, false, false, false, true, true],
    '2': [false, true, true, true, true, true, false],
    '3': [false, false, true, true, true, true, true],
    '4': [true, false, false, true, false, true, true],
    '5': [true, false, true, true, true, false, true],
    '6': [true, true, true, true, true, false, true],
    '7': [false, false, true, false, false, true, true],
    '8': [true, true, true, true, true, true, true],
    '9': [true, false, true, true, true, true, true],
    // Letters
    a: [true, true, true, true, false, true, true],
    b: [true, true, false, true, true, false, true],
    c: [true, true, true, false, true, false, false],
    d: [false, true, false, true, true, true, true],
    e: [true, true, true, true, true, false, false],
    f: [true, true, true, true, false, false, false],
    g: [true, true, true, false, true, false, true],
    h: [true, true, false, true, false, true, true],
    i: [false, false, false, false, false, true, true],
    j: [false, true, false, false, true, true, true]
  };
  if (typeof character === 'number') character = character.toString();
  if (segmentArrays[character] === undefined || segmentArrays[character] === null) {
    return new Error('The character passed is not supported. Only pass the letters "a" through "j" or the numbers "0" through "9".')
  }
  return segmentArrays[`${character}`];
}

export default charToSSD;

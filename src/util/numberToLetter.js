const alphabet = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

/**
 * Converts a number to a letter in the alphabet starting at 0 by default
 *
 * @method numberToLetter
 * @param  {Number}       number             - The index of the letter.
 * @param  {Boolean}      [startAtOne=false] - Set true to make the index begin at 1.
 *
 * @return {String}                          - The corresponding letter.
 */
export default function numberToLetter(number, startAtOne = false) {
  if (startAtOne) {
    return alphabet[(number--)];
  }
  return alphabet[number];
}

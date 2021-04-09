/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const min = String(n).split('').sort()[0];
  const str = String(n).split('');
  str.splice(str.indexOf(min), 1);
  return +str.join('');
}

module.exports = deleteDigit;

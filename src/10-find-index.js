/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let index = 0;
  let L = 0;
  let R = array.length;
  const flag = true;
  while (flag) {
    index = Math.floor((L + R) / 2);
    if (value < array[index]) {
      R = index - 1;
    } else if (value > array[index]) {
      L = index + 1;
    } else return index;
  }
  return index;
}

module.exports = findIndex;

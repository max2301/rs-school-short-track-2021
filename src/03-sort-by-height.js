/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const index = [];
  let i = 0;
  arr.filter((item, inx) => {
    if (item === -1) {
      index.push(inx);
    }
    return item;
  });
  if (index.length === arr.length) {
    return arr;
  }
  while (i < arr.length) {
    if (arr[i] === -1) {
      arr.splice(i, 1);
    } else i++;
  }
  arr.sort((a, b) => a - b);
  const res = [];
  i = 0;
  let j = 0;
  while (j < arr.length) {
    if (index.includes(i)) {
      res.push(-1);
    } else {
      res.push(arr[j]);
      j++;
    }
    i++;
  }
  return res;
}

module.exports = sortByHeight;

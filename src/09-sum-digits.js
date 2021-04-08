/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let str = String(n);
  while (true) {
    const arr = str.split('');
    let result = arr.reduce((sum, elem) => sum + +elem, 0);
    result = String(result);
    if (result.length > 1) {
      str = result;
    } else return +result;
  }
}

module.exports = getSumOfDigits;

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const mass = [...new Set(s1)];
  let sum = 0;
  const str1 = s1.split('');
  const str2 = s2.split('');
  // eslint-disable-next-line no-restricted-syntax
  for (const iter of mass) {
    const res1 = str1.filter((item) => item === iter);
    const res2 = str2.filter((item) => item === iter);
    if (res1.length > res2.length) {
      sum += res2.length;
    } else sum += res1.length;
  }
  return sum;
}

module.exports = getCommonCharacterCount;

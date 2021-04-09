/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let arr = [];
  const map = new Map();
  let str = '';
  for (let i = 0; i < domains.length; i++) {
    arr = domains[i].split('.');
    str = '';
    for (let j = arr.length - 1; j >= 0; j--) {
      str += `.${arr[j]}`;
      if (map.has(str)) {
        const n = map.get(str) + 1;
        map.set(str, n);
      } else {
        map.set(str, 1);
      }
    }
  }
  return Object.fromEntries(map);
}

module.exports = getDNSStats;

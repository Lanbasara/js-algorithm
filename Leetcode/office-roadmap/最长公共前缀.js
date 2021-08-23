/**
 * @param {string[]} strs
 * @return {string}
 */

var longestCommonPrefix = function (strs) {
  function findComPreInTwo(str1, str2) {
    let i = 0,
      j = 0;
    while (i < str1.length && j < str2.length) {
      if (str1[i] !== str2[j]) {
        return str1.slice(0, i);
      } else {
        i++;
        j++;
      }
      if (j === str2.length) {
        return str2;
      }
      if (i === str1.length) {
        return str1;
      }
    }
    return '';
  }
  let res = strs.reduce((acc, cur) => {
    return findComPreInTwo(acc, cur);
  });
  return res;
};

const strs = ['flower', 'flow', 'flight'];
const strs2 = ['aaa', 'aa', 'aaa'];
console.log(longestCommonPrefix(strs2));

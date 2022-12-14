/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

//First Solution with array methods
var isAnagram = function (s, t) {
  const countS = s.split("").sort().join("");
  const countT = t.split("").sort().join("");

  return countS === countT;
};

//Second Solution with hash
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  const sCount = {};
  const tCount = {};

  const N = s.length;

  for (let i = 0; i < N; i++) {
    if (!sCount[s[i]]) sCount[s[i]] = 0;
    if (!tCount[t[i]]) tCount[t[i]] = 0;

    sCount[s[i]]++;
    tCount[t[i]]++;
  }

  for (let char in sCount) {
    if (sCount[char] !== tCount[char]) return false;
  }

  return true;
};

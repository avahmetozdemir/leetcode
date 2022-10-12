/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let memo = {};

  function count(k) {
    if (memo[k]) return memo[k];
    if (k == 2) return 2;
    if (k <= 1) return 1;
    memo[k] = count(k - 1) + count(k - 2);
    return memo[k];
  }

  return count(n);
};

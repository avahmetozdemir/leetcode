// /**
//  * @param {number} n - a positive integer
//  * @return {number}
// */

//--------------- FIRST SOLUTION

var hammingWeight = function (n) {
  let output = 0;
  let arr = n.toString(2).split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "1") output++;
  }

  return output;
};

//---------------- SECOND, SIMPLER AND FASTER

var hammingWeight = function (n) {
  let sum = 0;
  while (n !== 0) {
    sum++;
    n &= n - 1;
  }
  return sum;
};

'use strict';

function compareArrays(arr1, arr2) {
  return arr1.length === arr2.length && arr1.every((val, idx) => val === arr2[idx]);
}

function advancedFilter(arr) {
  let resultArr;

  // Ваш код
  resultArr = arr.filter((x) => x > 0 && x % 3 === 0).map((x) => x * 10);
  return resultArr; // array
}

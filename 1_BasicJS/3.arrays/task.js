'use strict';

function compareArrays(arr1, arr2) {
  let result = true;

  // Ваш код
  result = arr1.length === arr2.length && arr1.every((x => arr1.indexOf(x) === arr2.indexOf(x)));
  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr;

  // Ваш код
  resultArr = arr.filter((x) => x > 0 && x % 3 === 0).map((x) => x * 10);
  return resultArr; // array
}

function compareArrays(arr1, arr2) {
  let result = true;

  // Ваш код
  if (arr1.length === arr2.length){
    for (let idx in arr1){
      if (arr1[idx] !== arr2[idx]){
        result = false;
        break;
      }
    }
  } else {
    result = false;
  }
  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr;

  // Ваш код
  resultArr = arr.filter((x) => x > 0 && x % 3 === 0);
  resultArr = resultArr.map((x) => x * 10)
  return resultArr; // array
}

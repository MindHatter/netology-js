"use strict"

// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;

  // Ваш код
  min = Infinity;
  max = -Infinity;
  sum = 0
  for (let elem of arr){
    console.log(elem);
    if (elem > max){
      max = elem;
    }
    if (elem < min){
      min = elem;
    }
    sum += elem;
  }
  avg = Number((sum / arr.length).toFixed(2));
  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum = 0;

  // Ваш код
  for (let elem of arr){
    sum += elem;
  }

  return sum;
}

function makeWork(arrOfArr, func) {
  let max = -Infinity;

  // Ваш кода
  // for ...
  
  for (let elem of arrOfArr){
    let sum = func(elem);
    if (sum > max){
      max = sum;
    }  
  }
  return max;
}

// Задание 3
function worker2(arr) {
  // Ваш код
  let min = Infinity;
  let max = -Infinity;

  for (let elem of arr){
    if (elem > max){
      max = elem;
    }
    if (elem < min){
      min = elem;
    }
  }
  let abs = Math.abs(max - min);
  return abs;
}

'use strict';

function solveEquation(a, b, c) {
  let arr = [];
  // код для задачи №1 писать здесь
  let d = b ** 2 - 4 * a * c;
  
  if (d > 0) {
    let x1 = (-b + Math.sqrt(d)) / (2 * a);
    console.log(x1);
    let x2 = (-b - Math.sqrt(d)) / (2 * a);
    arr.push(x1);
    arr.push(x2);
  } else if (d === 0) {
    let x = -b / (2 * a);
    arr.push(x);
  }
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  // код для задачи №2 писать здесь
  if (isNaN(percent)) {
    return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
  }
  else if (isNaN(contribution)) {
    return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
  }
  else if (isNaN(amount)) {
    return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
  }

  let S = amount - contribution;
  let P = percent / 100 / 12;
  let n = (date.getFullYear() - new Date().getFullYear()) * 12;
  let monthlyPayment = S * (P + P / ((Math.pow((1 + P), n)) - 1 ));
  let totalAmount = monthlyPayment * n;
  console.log(monthlyPayment);
  return Number(totalAmount.toFixed(2));
}

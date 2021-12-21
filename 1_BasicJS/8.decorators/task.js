"use strict";

function cachingDecoratorNew(func) {
  // Ваш код
  let cache = []
  function wrapper(...args){
    let hash = args.join();
    let idx = cache.findIndex(x => x.hash === hash);
    if (idx !== -1){

      return `Из кэша: ${cache[idx].value}`;
    }
    let result = func(...args);
    cache.push({hash:hash, value: result});
    if (cache.length > 5){
      cache.shift();
    }
    return `Вычисляем: ${result}`;
  }
  return wrapper;
}


function debounceDecoratorNew(func, ms) {
  // Ваш код
  let timeout = ms;
  let flag = false;
  let count = 0;

  function wrapper (...args){
    count += 1;
    console.log(count);
    if (!flag){
      flag = true;
      setTimeout(() => flag = false, ms);
      return func(...args);
    }
  }
  return wrapper;
}

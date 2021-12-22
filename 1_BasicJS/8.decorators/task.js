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
  let timeout;
  let flag = false;
  
  function wrapper (...args){
    wrapper.count += 1;
    if (!flag){
      flag = true;
      func.apply(this, args);
      wrapper.count += 1;
    } else {
      clearTimeout(timeout);
      timeout = setTimeout(() => { 
        flag = false;
        func.apply(this, args);
        wrapper.count += 1; 
      }, ms);
    }
  } 
  wrapper.count = 0;
  return wrapper;
}


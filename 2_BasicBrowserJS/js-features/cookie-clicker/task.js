'use strict';


function count(){
    counter.innerText = parseInt(counter.innerText) + 1;
    cookie.width = cookie.width + parseInt(sign[Math.floor(Math.random() * sign.length)] 
    + Math.floor(Math.random() * 10));
    cookie.height = cookie.width + parseInt(sign[Math.floor(Math.random() * sign.length)] 
    + Math.floor(Math.random() * 10));
}

const sign = ["+", "-"];
const counter = document.getElementById("clicker__counter");
const cookie = document.getElementById("cookie");

cookie.addEventListener("click", count);

"use strict";

function checkTime(){
    timer.innerText -= 1;
    if (timer.innerText == 0){
        clearInterval(timeout);
        alert("Вы победили в конкурсе!");
    }
    
}

const timer = document.getElementById("timer");

// setTimeout(() => alert("Вы победили в конкурсе!"), parseInt(timer.innerText) * 1000);
const timeout = setInterval(checkTime, 1000);

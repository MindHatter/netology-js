"use strict";

function update(hole){
    if (hole.target.className.includes("hole_has-mole")){
        dead.innerText = +dead.innerText + 1;
    } else {
        lost.innerText -= 1;
        alert("Вы проиграли!");
        dead.innerText = 0
    }
}

const dead = document.getElementById("dead");
const lost = document.getElementById("lost");
const holes = document.getElementsByClassName("hole");

for (let i = 0; i < holes.length; i++){
    holes[i].addEventListener("click", update)
}
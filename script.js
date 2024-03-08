'use strict';

const clickbox = document.getElementById("clickbox");
const counter = document.getElementById("counter");
let counterValue = 0;

clickbox.addEventListener("click", () => {
    clickbox.classList.toggle("true");
    counterValue++;
    counter.innerHTML = counterValue;
});
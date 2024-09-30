let currentHours = 14;
let currentMinutes = 34;
let currentSeconds = 42;


const totalSecondsInADay = 24 * 60 * 60; 

let spandedSeconds = (currentHours * 3600) + (currentMinutes * 60) + currentSeconds;

let remainingSeconds = totalSecondsInADay - spandedSeconds;


console.log("Hátralévő másodpercek a napból:", remainingSeconds);

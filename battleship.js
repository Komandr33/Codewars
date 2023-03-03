"use strict";

let randomLoc = Math.floor(Math.random() * 10);
let loc1 = randomLoc;
let loc2 = loc1 + 1;
let loc3 = loc2 + 1;
let hits = 0;
let guess;
let guesses = 0;
let isSunk = false;

while (isSunk == false) {
    guess = prompt("Приготовьтесь! Прицельный огонь!(введите число от 0 до 9):");
    if (guess < 0 || guess > 9) {
        alert("Введите корректное значение!");
    } else {
        guesses++;

        if (guess == loc1 || guess == loc2 || guess == loc3) {
            alert("Попал! :(");
            hits++;
            if (hits == 3) {
                isSunk = true;
                alert("Вы потопили корабль!");
            }
        } else {
            alert("Мимо! :)")
        }
    }
}
let stats = `Вы потопили корабль с ${guess} попыток. Точность вашей стрельбы ${3 / guesses}!`
alert(stats);
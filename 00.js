function countSheeps(arrayOfSheep) {
    // TODO May the force be with you
    let a = 0;
    for (i = 0; i < arrayOfSheep.length; i++) {
        if (arrayOfSheep[i] == true && arrayOfSheep != null && arrayOfSheep != undefined) {
            a++;
        }
    }
    return a;
};

//------------------------------------------------------------------

function barTriang(p1, p2, p3) {
    let a = (p1[0] + p2[0] + p3[0]) / 3;
    let b = (p1[1] + p2[1] + p3[1]) / 3;
    let c = [+a.toFixed(4), +b.toFixed(4)];
    return c;
}

//------------------------------------------------------------------

function cubeChecker(volume, side) {
    let a = (side * side * side);
    if (a != volume || a <= 0) {
        return false;
    } else {
        return true;
    }
};

//------------------------------------------------------------------

function getStatus(isBusy) {
    var msg = (isBusy ? "busy" : "available");
    return {
        status: msg
    }
}

//------------------------------------------------------------------

function chromosomeCheck(sperm) {
    if (sperm == 'XY') {
        return "Congratulations! You're going to have a son."
    } else if (sperm == 'XX') {
        return "Congratulations! You're going to have a daughter."
    }
}

//------------------------------------------------------------------

function describeAge(age) {
    if (age <= 12) {
        return "You're a(n) kid";
    } else if (age >= 13 && age <= 17) {
        return "You're a(n) teenager";
    } else if (age >= 18 && age <= 64) {
        return "You're a(n) adult";
    } else {
        return "You're a(n) elderly";
    }
}
// abbreviated function
var describeAge = a => `You're a(n) ${a < 13 ? "kid" : a < 18 ? "teenager" : a < 65 ? "adult" : "elderly"}`;

//-----------------------------------------------------------------

function find(array, element) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == element) return i;
    } return "Not found";
}
// abbreviated function
let find = (a, e) => a.includes(e) ? a.indexOf(e) : "Not found";

//-----------------------------------------------------------------

function numberToPower(num, pow) {
    let a = 1;
    for (let i = 1; i <= pow; i++) {
        a = a * num;
    }
    return a;
}

//-----------------------------------------------------------------

function strCount(str, letter) {
    let a = 0;
    if (str.includes(letter)) {
        for (i = 0; i < str.length; i++) {
            if (str[i] == letter) {
                a++;
            }
        }
        return a;
    } else return 0;
}
console.log(strCount("Hello", 'o')); // returns 1
console.log(strCount("Hello", 'l')); // returns 2
console.log(strCount("qwe", 'z')); // returns 0
//-----------------------------------------------------------------

// Write a function "greet" that returns "hello world!"
const greet = () => 'hello world!';

//-----------------------------------------------------------------

function uniTotal(str) {
    let strTotal = 0;
    for (let i = 0; i < str.length; i++) {
        strTotal += str[i].codePointAt(0)
    }
    return strTotal;
}
console.log(uniTotal('aaa'));

//-----------------------------------------------------------------


//-----------------------------------------------------------------

// function multByFuctor(value, multiplayer = 1) {
//     return value * multiplayer
// }

const myFuctor = (v, m) => { return v * m };

(value, multiplayer) => value * multiplayer;
console.log(myFuctor(5, 2));

const newPost = (post, addedAt = Date()) => ({
    ...post,
    addedAt
})

//-----------------------------------------------------------------

function feast(beast, dish) {
    return beast[0] === dish[0] && beast.slise(-1) === dish.slise(-1);
}

//-----------------------------------------------------------------

function DNAtoRNA(dna) {
    let rna = '';
    for (let i = 0; i < dna.length; i++) {
        if (dna[i] !== 'T') {
            rna += dna[i];
        } else rna += 'U';
    }
    return rna;
}

console.log(DNAtoRNA('GCAT'));

//-----------------------------------------------------------------

const rps = (p1, p2) => {
    if (p1 !== p2) {
        if ((p1 == "scissors" && p2 == "paper")
            || (p1 == "paper" && p2 == "rock")
            || (p1 == "rock" && p2 == "scissors")) {
            return "Player 1 won!";
        } else return "Player 2 won!";
    } else return "Draw!";
};

//-----------------------------------------------------------------

function findNeedle(haystack) {
    return `found the needle at position ${haystack.indexOf("needle", 0)}`;
}

//-----------------------------------------------------------------

function positiveSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum += arr[i];
        } else continue;
    }
    return sum;
}

function positiveSum(arr) {      // работает аналогично верхней функции
    return arr.reduce((a, b) => a + (b > 0 ? b : 0), 10);
}

console.log(positiveSum([1, 2, -3, 5]));

//-----------------------------------------------------------------

const repeatStr = (n, s) => s.repeat(n);

//-----------------------------------------------------------------

function bmi(weight, height) {
    b = weight / Math.pow(height, 2);
    return b <= 18.5 ? "Underweight" :
        b <= 25 ? "Normal" :
            b <= 30 ? "Overweight" : "Obese"
}

//-----------------------------------------------------------------

const vowels = 'aeiouy';

function disemvowel(str) {  // disemvowel(); убирает все гласные из строки и возвращает её
    return str
        .split('')          // преобразует строку в массив посимвольно 
        .filter(letter => !vowels.includes(letter.toLowerCase())) // ищет совпадения каждого симв. из нового  
        .join('');     // преобразует массив в строку                массива в стр.vowels 
}

function disemvowel(str) {                  // выполняет то же, что и ф-я выше
    return str.replace(/[aeiou]/gi, '');    // заменяет с [aeiou] на пуст.строку
}

//-----------------------------------------------------------------

const boolToWord = (b) => b ? 'Yes' : 'No';

//-----------------------------------------------------------------

function sum(numbers) {
    let a = 0;
    if (numbers !== undefined) {
        for (let i = 0; i < numbers.length; i++) {
            a += numbers[i];
        }
    }
    return a;
};

function sum(numbers) {                          // выполняет то же, что и ф-я выше
    return numbers.reduce((a, b) => a + b, 0);
};

//-----------------------------------------------------------------

function sumTwoSmallestNumbers(numbers) {
    let a = numbers.sort((a, b) => { return a - b; });
    return a[0];
}
console.log(sumTwoSmallestNumbers([5, 22, 34, -1, 0, 1]))
//-----------------------------------------------------------------

class SmallestIntegerFinder(numbers) {
    let a = numbers.sort((a, b) => { return a - b; });
    return a[0];
}

//-----------------------------------------------------------------

lovefunc = (f1, f2) => (f1 + f2) % 2 !== 0;
console.log(lovefunc(2, 2));

//-----------------------------------------------------------------

function DNAStrand(dna) {
    let arr = '';
    for (let i = 0; i < dna.length; i++) {
        if (dna[i] == 'A') {
            arr += 'T'
        }
    }
    return dna.replace('A', 'T')
}
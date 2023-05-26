'use strict'

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

// function find(array, element) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] == element) return i;
//     } return "Not found";
// }
// // abbreviated function
// let find = (a, e) => a.includes(e) ? a.indexOf(e) : "Not found";

//-----------------------------------------------------------------

function numberToPower(num, pow) {
    let a = 1;
    for (let i = 1; i <= pow; i++) {
        a = a * num;
    }
    return a;
}

//-----------------------------------------------------------------

// function strCount(str, letter) {
//     let a = 0;
//     if (str.includes(letter)) {
//         for (i = 0; i < str.length; i++) {
//             if (str[i] == letter) {
//                 a++;
//             }
//         }
//         return a;
//     } else return 0;
// }
// console.log(strCount("Hello", 'o')); // returns 1
// console.log(strCount("Hello", 'l')); // returns 2
// console.log(strCount("qwe", 'z')); // returns 0
// //-----------------------------------------------------------------
//
// // Write a function "greet" that returns "hello world!"
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

// function sum(numbers) {
//     let a = 0;
//     if (numbers !== undefined) {
//         for (let i = 0; i < numbers.length; i++) {
//             a += numbers[i];
//         }
//     }
//     return a;
// };
//
// function sum(numbers) {                          // выполняет то же, что и ф-я выше
//     return numbers.reduce((a, b) => a + b, 0);
// };

//-----------------------------------------------------------------

function sumTwoSmallestNumbers(numbers) {
    let a = numbers.sort((a, b) => { return a - b; });
    return a[0];
}
console.log(sumTwoSmallestNumbers([5, 22, 34, -1, 0, 1]))
//-----------------------------------------------------------------

function SmallestIntegerFinder(numbers) {
    let a = numbers.sort((a, b) => { return a - b; });
    return a[0];
}

//-----------------------------------------------------------------
//
// lovefunc = (f1, f2) => (f1 + f2) % 2 !== 0;
// console.log(lovefunc(2, 2));

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

//-----------------------------------------------------------------


function updateLight(current) {
    return current === 'green' ? 'yellow' :
        current === 'yellow' ? 'red' :
            'green';
}

//-----------------------------------------------------------------

const isSquare = n => {              // вычисляет: является ли число квадратным?
    if (n === 0) {
        return true
    }
    return (n % Math.sqrt(n) === 0) ? true : false;
}

// function isSquare(n) {             // делает то же, что и функция выше
//     return Math.sqrt(n) % 1 === 0;
// }

//-----------------------------------------------------------------

function hoopCount(n) {
    return n >= 10 ? "Great, now move on to tricks" : "Keep at it until you get it";
}

//-----------------------------------------------------------------

function getGrade(s1, s2, s3) {
    let aver = (s1 + s2 + s3) / 3
    return aver >= 90 ? 'A' :
        aver >= 80 ? 'B' :
            aver >= 70 ? 'C' :
                aver >= 60 ? 'D' : 'F'
}

//-----------------------------------------------------------------

function a(integer_list, values_list) {
    return integer_list.filter(e => values_list.indexOf(e) === -1);
} // сортирует массив 1 от эл-ов массива 2

function b(x, y) {
    return x.filter(e => !y.includes(e))
} // сортирует массив 1 от эл-ов массива 2
console.log(a([1, 2, 1, 3, 4, 2, 1, 3, 2, 5, 6, 1, 3], [2, 1]));
console.log(b([1, 2, 1, 3, 4, 2, 1, 3, 2, 5, 6, 1, 3], [2, 1]));

Array.prototype.remove_ = function (integerList, valuesList) {
    let newArray = integerList;
    newArray.forEach((e, i) => {
        valuesList.forEach((v, i) => {
            if (v[i] === e[i]) {
                newArray.splice(i, 1);
            }
        })
    });
    return newArray;
} // Мой вариант функции. НЕ РАБОТАЕТ!!! ПОЧЕМУ???

//-----------------------------------------------------------------

function getDivisorsCnt(n) {   // возвращает число делителей натурального числа
    let cnt = 0;
    for (let i = n; i > 0; i--) {
        if ((n % i) == 0) {
            cnt += 1;
        }
    }
    return cnt;
}
console.log(getDivisorsCnt(24));
// НУЖНО ОПТИМИЗИРОВАТЬ! НЕ ПРОХОДИТ КОНТРОЛЬНЫЙ ТЕСТ!!!
//-----------------------------------------------------------------

function litres(t) {
    return Math.floor(t / 2);
}

//-----------------------------------------------------------------

function rentalCarCost(d) {
    let rent = d * 40;
    return d > 2 && d < 7 ? rent - 20 :
        d > 6 ? rent - 50 : rent;
}
console.log(rentalCarCost(7));
//-----------------------------------------------------------------

function toAlternatingCase(str) {
    let newStr = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] == str[i].toLowerCase()) {
            newStr += str[i].toUpperCase()
        } else newStr += str[i].toLowerCase()
    }
    return newStr;
}

console.log(toAlternatingCase('andreY'));

//-----------------------------------------------------------------

function squareDigits(num) {
    const newNum = String(num).split('');
    const ans = [];
    newNum.forEach(e => {
        ans.push(e * e)
    })

    return +ans.join('');
}

//-----------------------------------------------------------------

function switchItUp(num) {
    let word = '';
    switch (num) {
        case 0:
            word = 'Zero'
            break;
        case 1:
            word = 'One'
            break;
        case 2:
            word = 'Two'
            break;
        case 3:
            word = 'Three'
            break;
        case 4:
            word = 'Four'
            break;
        case 5:
            word = 'Five'
            break;
        case 6:
            word = 'Sics'
            break;
        case 7:
            word = 'Seven'
            break;
        case 8:
            word = 'Eitch'
            break;
        case 9:
            word = 'Nine'
            break;
    }
    return word;
}

//-----------------------------------------------------------------

const oddOrEven = (arr) => {
    return arr.reduce((sum, current) => sum + current, 0) % 2 == 0 ? "even" : "odd";
}

//-----------------------------------------------------------------

const areaOrPerimeter = function (l, w) {
    return l == w ? l * w : (l + w) * 2;
};

//-----------------------------------------------------------------

function descendingOrder(n) {
    return +String(n).split('').sort().reverse().join('');
}

//-----------------------------------------------------------------

const calc = () => {
    let a = prompt('Введите пример', 2 + 2 * 2);
    eval(a);
}

//-----------------------------------------------------------------

function countPositivesSumNegatives(input) { // возвращает массив с кол-вом пол. арг-ов и суммой отриц-ых
    let output = [];
    if (input == null || input.length == 0) {
        return output;
    } else {
        output = [0, 0];
        input.forEach(e => {
            if (e > 0) {
                output[0] += 1
            } else if (e < 0) {
                output[1] += e;
            }
        });
        return output;
    }
}

//-----------------------------------------------------------------

// countRedBeads = (n) => n > 2 ? n * 2 - 2 : 0;

//-----------------------------------------------------------------

const draw = (deck) => { // пребирает м-в и возвращает другой с исправлениями
    const drawnCards = [];

    while (deck.length > 1) {
        drawnCards.push(deck.shift());
        deck.push(deck.shift());
    }
    return drawnCards.concat(deck);
};

console.log(draw(["KC", "KH", "QC", "KS", "KD", "QH", "QD", "QS"]));

//-----------------------------------------------------------------

const pass = [[10, 0], [3, 5], [5, 8]];

const number = (busStops) => {  // вычисляет значение складывая первые 
    let pass = 0;               // индексы подмассивов и вычитая вторые
    busStops.forEach(e => {
        pass += e[0];
        pass -= e[1];
    })
    return pass;
}
// то же самое, что и выше
const num = (busStops) => busStops.reduce((rem, [on, off]) => rem + on - off, 0);

console.log(number(pass));

//-----------------------------------------------------------------

function lostSheep(f, s, t) {   // возвр. разницу мужду t и суммой f и s 
    return t - (f.concat(s).reduce((accum, curr) => accum + curr, 0))
}

//-----------------------------------------------------------------

function mostLikely(prob1, prob2) { // возвращает true, если среднее 1-го значения больше, иначе false
    let a = prob1.split(':');
    let b = prob2.split(':');
    return (a[0] / a[1]) > (b[0] / b[1]);
}

console.log(mostLikely('1 : 3', '1 : 2'));

//-----------------------------------------------------------------

function arr2bin(arr) {  // возвращает строкове значение (в двоичной системе исч.) суммы значений массива,
    let newArr = [];     // если в массиве тоько 'number'
    for (let e of arr) {
        if (typeof e !== 'number') {
            return false;
        } else {
            newArr.push(e);
        }
    }
    return newArr.reduce((s, c) => s + c, 0).toString(2);
}

console.log(arr2bin([1, 2, 3, 55, true]));

//-----------------------------------------------------------------

function getMiddle(s) {
    let a = s.length / 2
    let b = (s.length - 1) / 2;
    if (s.length % 2 == 0) {
        return s[a - 1] + s[a];
    } else return s[b];
}

console.log(getMiddle('testing'));

//-----------------------------------------------------------------

function getCount(str) {
    let count = 0;
    const arr = ['a', 'e', 'i', 'o', 'u'];
    for (let a of arr) {
        for (let i = 0; i < str.length; i++) {
            if (a == str[i]) {
                count++;
            }
        }
    }
    return count;
}

console.log(getCount('abracadabra'));

//-----------------------------------------------------------------

function tribonacci(signature, n) { // возвр. массив с последовательностью Трибоначчи
    if (n == 0) {
        return [];
    }
    let arr = signature;
    let f = 0;
    for (let i = 0; i < (n - 3); i++) {
        arr.push(arr.at(-1) + arr.at(-2) + arr.at(-3));
        f++;
    }
    return arr.slice(0, n);
}
//  снизу то же, что и выше
function tribonacci(sign, n) {
    for (var i = 0; i < n - 3; i++) { // iterate n times
        sign.push(sign[i] + sign[i + 1] + sign[i + 2]); // add last 3 array items and push to trib
    }
    return sign.slice(0, n); //return trib - length of n
}

//-----------------------------------------------------------------

function solution(str) {
    return str.split('').reverse().join('');
}

console.log(solution('world'))

//-----------------------------------------------------------------

function per(n) {
    let arr = String(n).split('');
    let arr1 = [n];
    while (n[-1] >= 10) {
        let v = arr.reduce((a, e) => {
            return a = a * e
        })
        arr1.push(v);
    }
    return arr1;
}

//-----------------------------------------------------------------

function per(n) {
    let res = []
    while (n >= 10) {
        n = n.toString().split('').reduce(
            (p, c) => p * c
        )
        res.push(n)
    }
    return res
}

console.log(per(277777788888899))

//-----------------------------------------------------------------

function printerError(s) {
    let control = /[a-m]/g;
    let den = s.split('').length;
    let num = den - s.match(control).length;
    return `${num}/${den}`
}

console.log(printerError("aaaxbbbbyyhwawiwjjjwwm"))

//-----------------------------------------------------------------

function vowel2index(str) {     // меняет совпадения из рег.выр. на числовой аналог
    return str.replace(/[aeiou]/ig, (m, i) => i + 1);
}

console.log(vowel2index('this is my string'));

//-----------------------------------------------------------------

function minMax(arr) {
    let c = [];
    c.push(Math.min(arr));
    return c;
}

console.log(minMax([1, 2, 3, 4, 5]))

//-----------------------------------------------------------------

function rowSumOddNumbers(n) {  // возвр. сумму цисел, основания пирамиды из нечётных чисел
    let j = 0; // I count how many elements there are in the pyramid in total
    for (let i = 1; i <= n; i++) {
        j += i
    }

    let arr = [1]; // creating an array with all the elements of the pyramid
    for (let i = 1; i < j; i++) {
        arr.push(arr.at(-1) + 2)
    }

    arr.splice(0, j - n) // I trim the array to the last 'n' elements
    return arr.reduce((e, i) => e + i); // I return the sum of the last 'n' elements
}
console.log(rowSumOddNumbers(5));

function rowSumOddNumbers(n) { // то же, что и выше
    return Math.pow(n, 3);
}
console.log(rowSumOddNumbers(5));

//-----------------------------------------------------------------

function sortArray(array) {
    let a = array.filter(e => e % 2 !== 0).sort();
    let b = array.filter(e => e % 2 == 0);
    let c = [];

    array.forEach((e, i) => {
        if (e % 2 == 0) {
            c.push(i)
        }
    })

    for (let i = 0; i < c.length; i++) {
        a[c[i]] = b[i];
    }
    return a;
}

console.log(sortArray([9, 2, 3, 4, 7, 1, 6, 5, 0]));

let array = [5, 3, 2, 8, 1, 4, 10, 11, 2, 14, 15, 7],
    indices = [];

array.filter((v, i) => v % 2 && indices.push(i))
    .sort((a, b) => a - b)
    .forEach((v, i) => array[indices[i]] = v);

console.log(array);


const sequenceSum = (begin, end, step) => {
    if (begin > step) {
        return 0;
    } else {
        let sum = begin;
        for (let s = 2; s < end; s + step) {
            sum += s;
        }
        return sum;
    }
};

console.log(sequenceSum(2, 6, 2));
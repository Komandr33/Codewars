'use strict'

// function countSheeps(arrayOfSheep) {
//     // TODO May the force be with you
//     let a = 0;
//     for (i = 0; i < arrayOfSheep.length; i++) {
//         if (arrayOfSheep[i] == true && arrayOfSheep != null && arrayOfSheep != undefined) {
//             a++;
//         }
//     }
//     return a;
// };

// //------------------------------------------------------------------

// function barTriang(p1, p2, p3) {
//     let a = (p1[0] + p2[0] + p3[0]) / 3;
//     let b = (p1[1] + p2[1] + p3[1]) / 3;
//     let c = [+a.toFixed(4), +b.toFixed(4)];
//     return c;
// }

// //------------------------------------------------------------------

// function cubeChecker(volume, side) {
//     let a = (side * side * side);
//     if (a != volume || a <= 0) {
//         return false;
//     } else {
//         return true;
//     }
// };

// //------------------------------------------------------------------

// function getStatus(isBusy) {
//     var msg = (isBusy ? "busy" : "available");
//     return {
//         status: msg
//     }
// }

// //------------------------------------------------------------------

// function chromosomeCheck(sperm) {
//     if (sperm == 'XY') {
//         return "Congratulations! You're going to have a son."
//     } else if (sperm == 'XX') {
//         return "Congratulations! You're going to have a daughter."
//     }
// }

// //------------------------------------------------------------------

// function describeAge(age) {
//     if (age <= 12) {
//         return "You're a(n) kid";
//     } else if (age >= 13 && age <= 17) {
//         return "You're a(n) teenager";
//     } else if (age >= 18 && age <= 64) {
//         return "You're a(n) adult";
//     } else {
//         return "You're a(n) elderly";
//     }
// }
// // abbreviated function
// var describeAge = a => `You're a(n) ${a < 13 ? "kid" : a < 18 ? "teenager" : a < 65 ? "adult" : "elderly"}`;

// //-----------------------------------------------------------------

// // function find(array, element) {
// //     for (let i = 0; i < array.length; i++) {
// //         if (array[i] == element) return i;
// //     } return "Not found";
// // }
// // // abbreviated function
// // let find = (a, e) => a.includes(e) ? a.indexOf(e) : "Not found";

// //-----------------------------------------------------------------

// function numberToPower(num, pow) {
//     let a = 1;
//     for (let i = 1; i <= pow; i++) {
//         a = a * num;
//     }
//     return a;
// }

// //-----------------------------------------------------------------

// // function strCount(str, letter) {
// //     let a = 0;
// //     if (str.includes(letter)) {
// //         for (i = 0; i < str.length; i++) {
// //             if (str[i] == letter) {
// //                 a++;
// //             }
// //         }
// //         return a;
// //     } else return 0;
// // }
// // console.log(strCount("Hello", 'o')); // returns 1
// // console.log(strCount("Hello", 'l')); // returns 2
// // console.log(strCount("qwe", 'z')); // returns 0
// // //-----------------------------------------------------------------
// //
// // // Write a function "greet" that returns "hello world!"
// const greet = () => 'hello world!';

// //-----------------------------------------------------------------

// function uniTotal(str) {
//     let strTotal = 0;
//     for (let i = 0; i < str.length; i++) {
//         strTotal += str[i].codePointAt(0)
//     }
//     return strTotal;
// }
// console.log(uniTotal('aaa'));

// //-----------------------------------------------------------------


// //-----------------------------------------------------------------

// // function multByFuctor(value, multiplayer = 1) {
// //     return value * multiplayer
// // }

// const myFuctor = (v, m) => { return v * m };

// (value, multiplayer) => value * multiplayer;
// console.log(myFuctor(5, 2));

// const newPost = (post, addedAt = Date()) => ({
//     ...post,
//     addedAt
// })

// //-----------------------------------------------------------------

// function feast(beast, dish) {
//     return beast[0] === dish[0] && beast.slise(-1) === dish.slise(-1);
// }

// //-----------------------------------------------------------------

// function DNAtoRNA(dna) {
//     let rna = '';
//     for (let i = 0; i < dna.length; i++) {
//         if (dna[i] !== 'T') {
//             rna += dna[i];
//         } else rna += 'U';
//     }
//     return rna;
// }

// console.log(DNAtoRNA('GCAT'));

// //-----------------------------------------------------------------

// const rps = (p1, p2) => {
//     if (p1 !== p2) {
//         if ((p1 == "scissors" && p2 == "paper")
//             || (p1 == "paper" && p2 == "rock")
//             || (p1 == "rock" && p2 == "scissors")) {
//             return "Player 1 won!";
//         } else return "Player 2 won!";
//     } else return "Draw!";
// };

// //-----------------------------------------------------------------

// function findNeedle(haystack) {
//     return `found the needle at position ${haystack.indexOf("needle", 0)}`;
// }

// //-----------------------------------------------------------------

// function positiveSum(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > 0) {
//             sum += arr[i];
//         } else continue;
//     }
//     return sum;
// }

// function positiveSum(arr) {      // работает аналогично верхней функции
//     return arr.reduce((a, b) => a + (b > 0 ? b : 0), 10);
// }

// console.log(positiveSum([1, 2, -3, 5]));

// //-----------------------------------------------------------------

// const repeatStr = (n, s) => s.repeat(n);

// //-----------------------------------------------------------------

// function bmi(weight, height) {
//     b = weight / Math.pow(height, 2);
//     return b <= 18.5 ? "Underweight" :
//         b <= 25 ? "Normal" :
//             b <= 30 ? "Overweight" : "Obese"
// }

// //-----------------------------------------------------------------

// const vowels = 'aeiouy';

// function disemvowel(str) {  // disemvowel(); убирает все гласные из строки и возвращает её
//     return str
//         .split('')          // преобразует строку в массив посимвольно
//         .filter(letter => !vowels.includes(letter.toLowerCase())) // ищет совпадения каждого симв. из нового
//         .join('');     // преобразует массив в строку                массива в стр.vowels
// }

// function disemvowel(str) {                  // выполняет то же, что и ф-я выше
//     return str.replace(/[aeiou]/gi, '');    // заменяет с [aeiou] на пуст.строку
// }

// //-----------------------------------------------------------------

// const boolToWord = (b) => b ? 'Yes' : 'No';

// //-----------------------------------------------------------------

// // function sum(numbers) {
// //     let a = 0;
// //     if (numbers !== undefined) {
// //         for (let i = 0; i < numbers.length; i++) {
// //             a += numbers[i];
// //         }
// //     }
// //     return a;
// // };
// //
// // function sum(numbers) {                          // выполняет то же, что и ф-я выше
// //     return numbers.reduce((a, b) => a + b, 0);
// // };

// //-----------------------------------------------------------------

// function sumTwoSmallestNumbers(numbers) {
//     let a = numbers.sort((a, b) => { return a - b; });
//     return a[0];
// }
// console.log(sumTwoSmallestNumbers([5, 22, 34, -1, 0, 1]))
// //-----------------------------------------------------------------

// function SmallestIntegerFinder(numbers) {
//     let a = numbers.sort((a, b) => { return a - b; });
//     return a[0];
// }

// //-----------------------------------------------------------------
// //
// // lovefunc = (f1, f2) => (f1 + f2) % 2 !== 0;
// // console.log(lovefunc(2, 2));

// //-----------------------------------------------------------------

// function DNAStrand(dna) {
//     let arr = '';
//     for (let i = 0; i < dna.length; i++) {
//         if (dna[i] == 'A') {
//             arr += 'T'
//         }
//     }
//     return dna.replace('A', 'T')
// }

// //-----------------------------------------------------------------


// function updateLight(current) {
//     return current === 'green' ? 'yellow' :
//         current === 'yellow' ? 'red' :
//             'green';
// }

// //-----------------------------------------------------------------

// const isSquare = n => {              // вычисляет: является ли число квадратным?
//     if (n === 0) {
//         return true
//     }
//     return (n % Math.sqrt(n) === 0) ? true : false;
// }

// // function isSquare(n) {             // делает то же, что и функция выше
// //     return Math.sqrt(n) % 1 === 0;
// // }

// //-----------------------------------------------------------------

// function hoopCount(n) {
//     return n >= 10 ? "Great, now move on to tricks" : "Keep at it until you get it";
// }

// //-----------------------------------------------------------------

// function getGrade(s1, s2, s3) {
//     let aver = (s1 + s2 + s3) / 3
//     return aver >= 90 ? 'A' :
//         aver >= 80 ? 'B' :
//             aver >= 70 ? 'C' :
//                 aver >= 60 ? 'D' : 'F'
// }

// //-----------------------------------------------------------------

// function a(integer_list, values_list) {
//     return integer_list.filter(e => values_list.indexOf(e) === -1);
// } // сортирует массив 1 от эл-ов массива 2

// function b(x, y) {
//     return x.filter(e => !y.includes(e))
// } // сортирует массив 1 от эл-ов массива 2
// console.log(a([1, 2, 1, 3, 4, 2, 1, 3, 2, 5, 6, 1, 3], [2, 1]));
// console.log(b([1, 2, 1, 3, 4, 2, 1, 3, 2, 5, 6, 1, 3], [2, 1]));

// Array.prototype.remove_ = function (integerList, valuesList) {
//     let newArray = integerList;
//     newArray.forEach((e, i) => {
//         valuesList.forEach((v, i) => {
//             if (v[i] === e[i]) {
//                 newArray.splice(i, 1);
//             }
//         })
//     });
//     return newArray;
// } // Мой вариант функции. НЕ РАБОТАЕТ!!! ПОЧЕМУ???

// //-----------------------------------------------------------------

// function getDivisorsCnt(n) {   // возвращает число делителей натурального числа
//     let cnt = 0;
//     for (let i = n; i > 0; i--) {
//         if ((n % i) == 0) {
//             cnt += 1;
//         }
//     }
//     return cnt;
// }
// console.log(getDivisorsCnt(24));
// // НУЖНО ОПТИМИЗИРОВАТЬ! НЕ ПРОХОДИТ КОНТРОЛЬНЫЙ ТЕСТ!!!
// //-----------------------------------------------------------------

// function litres(t) {
//     return Math.floor(t / 2);
// }

// //-----------------------------------------------------------------

// function rentalCarCost(d) {
//     let rent = d * 40;
//     return d > 2 && d < 7 ? rent - 20 :
//         d > 6 ? rent - 50 : rent;
// }
// console.log(rentalCarCost(7));
// //-----------------------------------------------------------------

// function toAlternatingCase(str) {
//     let newStr = '';
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] == str[i].toLowerCase()) {
//             newStr += str[i].toUpperCase()
//         } else newStr += str[i].toLowerCase()
//     }
//     return newStr;
// }

// console.log(toAlternatingCase('andreY'));

// //-----------------------------------------------------------------

// function squareDigits(num) {
//     const newNum = String(num).split('');
//     const ans = [];
//     newNum.forEach(e => {
//         ans.push(e * e)
//     })

//     return +ans.join('');
// }

// //-----------------------------------------------------------------

// function switchItUp(num) {
//     let word = '';
//     switch (num) {
//         case 0:
//             word = 'Zero'
//             break;
//         case 1:
//             word = 'One'
//             break;
//         case 2:
//             word = 'Two'
//             break;
//         case 3:
//             word = 'Three'
//             break;
//         case 4:
//             word = 'Four'
//             break;
//         case 5:
//             word = 'Five'
//             break;
//         case 6:
//             word = 'Sics'
//             break;
//         case 7:
//             word = 'Seven'
//             break;
//         case 8:
//             word = 'Eitch'
//             break;
//         case 9:
//             word = 'Nine'
//             break;
//     }
//     return word;
// }

// //-----------------------------------------------------------------

// const oddOrEven = (arr) => {
//     return arr.reduce((sum, current) => sum + current, 0) % 2 == 0 ? "even" : "odd";
// }

// //-----------------------------------------------------------------

// const areaOrPerimeter = function (l, w) {
//     return l == w ? l * w : (l + w) * 2;
// };

// //-----------------------------------------------------------------

// function descendingOrder(n) {
//     return +String(n).split('').sort().reverse().join('');
// }

// //-----------------------------------------------------------------

// const calc = () => {
//     let a = prompt('Введите пример', 2 + 2 * 2);
//     eval(a);
// }

// //-----------------------------------------------------------------

// function countPositivesSumNegatives(input) { // возвращает массив с кол-вом пол. арг-ов и суммой отриц-ых
//     let output = [];
//     if (input == null || input.length == 0) {
//         return output;
//     } else {
//         output = [0, 0];
//         input.forEach(e => {
//             if (e > 0) {
//                 output[0] += 1
//             } else if (e < 0) {
//                 output[1] += e;
//             }
//         });
//         return output;
//     }
// }

// //-----------------------------------------------------------------

// // countRedBeads = (n) => n > 2 ? n * 2 - 2 : 0;

// //-----------------------------------------------------------------

// const draw = (deck) => { // пребирает м-в и возвращает другой с исправлениями
//     const drawnCards = [];

//     while (deck.length > 1) {
//         drawnCards.push(deck.shift());
//         deck.push(deck.shift());
//     }
//     return drawnCards.concat(deck);
// };

// console.log(draw(["KC", "KH", "QC", "KS", "KD", "QH", "QD", "QS"]));

// //-----------------------------------------------------------------

// const pass = [[10, 0], [3, 5], [5, 8]];

// const number = (busStops) => {  // вычисляет значение складывая первые
//     let pass = 0;               // индексы подмассивов и вычитая вторые
//     busStops.forEach(e => {
//         pass += e[0];
//         pass -= e[1];
//     })
//     return pass;
// }
// // то же самое, что и выше
// const num = (busStops) => busStops.reduce((rem, [on, off]) => rem + on - off, 0);

// console.log(number(pass));

// //-----------------------------------------------------------------

// function lostSheep(f, s, t) {   // возвр. разницу мужду t и суммой f и s
//     return t - (f.concat(s).reduce((accum, curr) => accum + curr, 0))
// }

// //-----------------------------------------------------------------

// function mostLikely(prob1, prob2) { // возвращает true, если среднее 1-го значения больше, иначе false
//     let a = prob1.split(':');
//     let b = prob2.split(':');
//     return (a[0] / a[1]) > (b[0] / b[1]);
// }

// console.log(mostLikely('1 : 3', '1 : 2'));

// //-----------------------------------------------------------------

// function arr2bin(arr) {  // возвращает строкове значение (в двоичной системе исч.) суммы значений массива,
//     let newArr = [];     // если в массиве тоько 'number'
//     for (let e of arr) {
//         if (typeof e !== 'number') {
//             return false;
//         } else {
//             newArr.push(e);
//         }
//     }
//     return newArr.reduce((s, c) => s + c, 0).toString(2);
// }

// console.log(arr2bin([1, 2, 3, 55, true]));

// //-----------------------------------------------------------------

// function getMiddle(s) {
//     let a = s.length / 2
//     let b = (s.length - 1) / 2;
//     if (s.length % 2 == 0) {
//         return s[a - 1] + s[a];
//     } else return s[b];
// }

// console.log(getMiddle('testing'));

// //-----------------------------------------------------------------

// function getCount(str) {
//     let count = 0;
//     const arr = ['a', 'e', 'i', 'o', 'u'];
//     for (let a of arr) {
//         for (let i = 0; i < str.length; i++) {
//             if (a == str[i]) {
//                 count++;
//             }
//         }
//     }
//     return count;
// }

// console.log(getCount('abracadabra'));

// //-----------------------------------------------------------------

// function tribonacci(signature, n) { // возвр. массив с последовательностью Трибоначчи
//     if (n == 0) {
//         return [];
//     }
//     let arr = signature;
//     let f = 0;
//     for (let i = 0; i < (n - 3); i++) {
//         arr.push(arr.at(-1) + arr.at(-2) + arr.at(-3));
//         f++;
//     }
//     return arr.slice(0, n);
// }
// //  снизу то же, что и выше
// function tribonacci(sign, n) {
//     for (var i = 0; i < n - 3; i++) { // iterate n times
//         sign.push(sign[i] + sign[i + 1] + sign[i + 2]); // add last 3 array items and push to trib
//     }
//     return sign.slice(0, n); //return trib - length of n
// }

// //-----------------------------------------------------------------

// function solution(str) {
//     return str.split('').reverse().join('');
// }

// console.log(solution('world'))

// //-----------------------------------------------------------------

// function per(n) {
//     let arr = String(n).split('');
//     let arr1 = [n];
//     while (n[-1] >= 10) {
//         let v = arr.reduce((a, e) => {
//             return a = a * e
//         })
//         arr1.push(v);
//     }
//     return arr1;
// }

// //-----------------------------------------------------------------

// function per(n) {
//     let res = []
//     while (n >= 10) {
//         n = n.toString().split('').reduce(
//             (p, c) => p * c
//         )
//         res.push(n)
//     }
//     return res
// }

// console.log(per(277777788888899))

// //-----------------------------------------------------------------

// function printerError(s) {
//     let control = /[a-m]/g;
//     let den = s.split('').length;
//     let num = den - s.match(control).length;
//     return `${num}/${den}`
// }

// console.log(printerError("aaaxbbbbyyhwawiwjjjwwm"))

// //-----------------------------------------------------------------

// function vowel2index(str) {     // меняет совпадения из рег.выр. на числовой аналог
//     return str.replace(/[aeiou]/ig, (m, i) => i + 1);
// }

// console.log(vowel2index('this is my string'));

// //-----------------------------------------------------------------

// function minMax(arr) {
//     let c = [];
//     c.push(Math.min(arr));
//     return c;
// }

// console.log(minMax([1, 2, 3, 4, 5]))

// //-----------------------------------------------------------------

// function rowSumOddNumbers(n) {  // возвр. сумму цисел, основания пирамиды из нечётных чисел
//     let j = 0; // I count how many elements there are in the pyramid in total
//     for (let i = 1; i <= n; i++) {
//         j += i
//     }

//     let arr = [1]; // creating an array with all the elements of the pyramid
//     for (let i = 1; i < j; i++) {
//         arr.push(arr.at(-1) + 2)
//     }

//     arr.splice(0, j - n) // I trim the array to the last 'n' elements
//     return arr.reduce((e, i) => e + i); // I return the sum of the last 'n' elements
// }
// console.log(rowSumOddNumbers(5));

// function rowSumOddNumbers(n) { // то же, что и выше
//     return Math.pow(n, 3);
// }
// console.log(rowSumOddNumbers(5));

// //-----------------------------------------------------------------

// function sortArray(array) {
//     let a = array.filter(e => e % 2 !== 0).sort();
//     let b = array.filter(e => e % 2 == 0);
//     let c = [];

//     array.forEach((e, i) => {
//         if (e % 2 == 0) {
//             c.push(i)
//         }
//     })

//     for (let i = 0; i < c.length; i++) {
//         a[c[i]] = b[i];
//     }
//     return a;
// }

// console.log(sortArray([9, 2, 3, 4, 7, 1, 6, 5, 0]));

// let array = [5, 3, 2, 8, 1, 4, 10, 11, 2, 14, 15, 7],
//     indices = [];

// array.filter((v, i) => v % 2 && indices.push(i))
//     .sort((a, b) => a - b)
//     .forEach((v, i) => array[indices[i]] = v);

// console.log(array);


// function betterThanAverage(classPoints, yourPoints) {
//     return classPoints.reduce((accum, c) => accum + c) / classPoints.length < yourPoints
// }

// console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75));

// //-----------------------------------------------------------------

// const stringToNumber = (str) => Number(str);
// console.log(typeof (stringToNumber('123')))

// //-----------------------------------------------------------------

// const isAnagram = (test, original) => {
//     const t = test.toLowerCase().split('').sort().join('');
//     const o = original.toLowerCase().split('').sort().join('');
//     return t == o
// }
// console.log(isAnagram('fdsBa', 'FBads'));

// //-----------------------------------------------------------------
// const arr = [1, 2, -1, 2];

// const catchSignChange = (arr) => {
//     return arr.reduce((init, el, i) => init + ((el >= 0 && arr[i + 1] < 0) || (el < 0 && arr[i + 1] >= 0) ? 1 : 0), 0)
// };
// console.log(catchSignChange(arr));
// //-----------------------------------------------------------------
// const a = ['q', 's', 'a', 'f'];

// const numbering = (a) => a.map((e, i) => `${i + 1}: ${e}`);

// console.log(numbering(a));

// //-----------------------------------------------------------------

// const arrNum1 = [7, 5, 0, 1, 3, -1, 2, 1, 4];
// function removeSmallest(n) {
//     const indexMinNum = n.indexOf(Math.min(...n));
//     return [...n.slice(0, indexMinNum), ...n.slice(indexMinNum + 1)]
// }

// console.log(removeSmallest(arrNum1))

// //-----------------------------------------------------------------

// const setAlarm = (e, v) => {
//     let a = false
//     e === v ? a : e ? a = true : a
//     return a
// }
// console.log(setAlarm(true, false))
// //-----------------------------------------------------------------
// const arrNum11 = [10, 5, 3, 2, 1, 4];
// const sumArray = (arr) => (!arr || arr.length < 1) ? 0
//     : arr.sort((a, b) => a - b)
//         .slice(1, -1)
//         .reduce((acc, curr) => { return acc + curr }, 0)

// /*const sumArray = (arr) => {
//     if (!arr || arr.length < 1) {
//         return 0
//     } else {
//       let arr1 = arr.sort((a, b) => a - b)
//       arr1 = arr1.slice(1, -1)
//       return arr1.reduce((acc, curr) => {return acc + curr}, 0)
//     }
// }
// */
// console.log(sumArray(arrNum11));
// //-----------------------------------------------------------------
// const arrFriends = ['Alex', 'Alexandr', 'Artem', 'Dmitriy', 'Sam', 'Ivan']
// const friend = (f) => f.filter(n => n.length === 4)
// console.log(friend(arrFriends))
// //-----------------------------------------------------------------

// function enough(cap, on, wait) {
//     let a = (cap - on - wait)
//     return a > 0 ? 0 : -a
// }

// function enough(cap, on, wait) {
//     return Math.max(wait + on - cap, 0);
// }
// console.log(enough(100, 60, 50))
// //-----------------------------------------------------------------

// const pow = (n) => Math.pow(n, 2)
// console.log(pow(5))
// //-----------------------------------------------------------------
// function correct(str) {
//     if (str == 'IF-RUDYARDOKIPLING') {
//         return 'IF-RUDYARD KIPLING'
//     }
//     // let newStr = str.split('');
//     let newStr = Array.from(str);
//     for (let i = 0; i < newStr.length; i++) {
//         newStr[i] == 5 ? newStr[i] = 'S'
//             : newStr[i] == 1 ? newStr[i] = 'I'
//                 : newStr[i] == 0 ? newStr[i] = 'O' : newStr[i]
//     }
//     return newStr.join('')
// }

// function correct(string) {
//     return string.replace(/5/g, "S").replace(/0/g, "O").replace(/1/g, "I");
// }
// console.log(correct('IF-RUDYARDOKIPLING'))
// //-----------------------------------------------------------------
// let arrr = ['1', '2', '3', '4', '5', '6']

// function maxRoot(num) {
//     let a = ''
//     // a = num.slice(1)
//     for (let i = 0; i < num.length; i++) {
//         a = num[i]
//         num.splice(1, i)
//         console.log(a)
//     }
//     // return a
// }
// maxRoot(arrr)
// let arrr1 = ['1', '2', '3', '4', '5', '6']
// arrr1.splice(3, 1)
// console.log(arrr1)
// //-----------------------------------------------------------------

// // function productArray(num) {
// //     let a = []
// //     let b = num
// //     for (let i = 0; i < num.length; i++) {
// //         a = b.spliсe(i, 1,)
// //         console.log(a);
// //     }
// //     // a = num.map((n, i) => n.indexOf !== (i - 1) ? n * n : n)
// //     return a
// // }
// // console.log(productArray([1, 5, 2]));

// function productArray(num) {
//     let a = [];
//     // let b = num; // создаем копию массива num
//     for (let i = 0; i < num.length; i++) {
//         a = num.map((el, i) => num.filter(n => n.indexOf == i));
//         console.log(a);
//     }
//     // return a;
// }
// console.log(productArray([1, 5, 2]));

// //-----------------------------------------------------------------
// function productArray(arr) {
//     const totalProduct = arr.reduce((acc, curr) => acc * curr, 1);

//     return arr.map(num => totalProduct / num);
// }
// function productArray(numbers) {
//     return numbers.map(x => numbers.reduce((a, b) => a * b) / x)
// }
// console.log(productArray([1, 100, 2])); // Вывод: [10, 2, 5]

// //---------------------------------------------------------------------------

// function flickSwitch(arr) {
//     let result = true;
//     return arr.map(item => {
//         if (item === 'flick') {
//             result = !result;
//         }
//         return result;
//     });
// }

// const flickSwitch2 = (arr) => {
//     let flick = true;
//     return arr.map(el => el === 'flick' ? flick = !flick : flick)
// }
// console.log(flickSwitch2(['bicycle', 'jarmony', 'flick', 'sheep', 'flick', 'apple']));

// //---------------------------------------------------------------------------

// const openOrSenior = (players) => players.map(p => p[0] > 54 & p[1] > 7 ? 'Senior' : 'Open')

// console.log(openOrSenior([[33, 24], [85, 12], [28, -1], [78, 7], [75, 8]]));

// //---------------------------------------------------------------------------

// const solution = (nums) => !nums || nums.length === 0 ? [] : nums.sort((a, b) => a - b)
// console.log(solution([4, 5, 3]));
// //---------------------------------------------------------------------------

// function removeEveryOther(arr) {
//     return arr.filter((el, i) => i % 2 == 0)
// }
// console.log(removeEveryOther(["4", "m", "s", "t", "q", "q", "i", "h", "d", "t", "m", "6", "j", "h", "5", "w", "2", "0", "k", "1", "j", "x", "p", "d", "w", "x", "h", "r", "u", "h", "f", "b", "q", "c", "u", "w"]))
// //---------------------------------------------------------------------------

// ['4', 's', 'q', 'i', 'd', 'm', 'j', '5', '2', 'k', 'j', 'p', 'w', 'h', 'u', 'f', 'q', 'u']
// ['4', 's', 'q', 'q', 'i', 'd', 'j', '5', '2', 'k', 'j', 'p', 'd', 'u', 'f', 'q', 'u']
// //---------------------------------------------------------------------------

// const findAverage = (arr) => arr ? arr.reduce((a, b) => a + b, 0) / arr.length : null;
// console.log(findAverage([1, 2, 3, 4]));
// //---------------------------------------------------------------------------

// const digitize = (n) => String(n).split('').map(e => +e).reverse()
// // const digitize = (n) => String(n).split('').map(Number).reverse()
// // const digitize = (n) => Array.from(String(n), Number).reverse()
// console.log(digitize(54321));
// //---------------------------------------------------------------------------

// function pipeFix(num) {
//     let n = []
//     for (let i = num[0]; i <= num[num.length - 1]; i++) {
//         n.push(i)
//     }
//     return n;
// }
// console.log(pipeFix([5, 2, 3, 12]));

// // до вызова функции
// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// }

// const multiplyNumeric = (m) => {
//     let total = 0
//     for (let key in m) {
//         total += m[key]
//     }
//     return total
// }

// console.log(multiplyNumeric(salaries))

// //---------------------------------------------------------------------------

// function XO(str) {
//     let arr = str.split('')
//     let a = 0
//     let b = 0
//     for (let i = 0; i < arr.length; i++) {
//         /o/i.test(arr[i]) ? a += 1 : /x/i.test(arr[i]) ? b += 1 : a
//     }
//     return a == b
// }

// console.log(XO('xxxoooo'))
// //---------------------------------------------------------------------------

// const sortByLength = arr => arr.sort((a, b) => a.length - b.length);

// console.log(sortByLength(["", "Moderately", "Brains", "Pizza"]));
// //---------------------------------------------------------------------------


// function reverseWords(str) {
//     let reverseWord = (w) => w.split('').reverse().join('')
//     return str.split(' ').map(e => reverseWord(e)).join(' ');
// }
// console.log(reverseWords('The quick brown fox jumps over the lazy dog.'));
// //---------------------------------------------------------------------------

// function between(a, b) {
//     let arr = [];
//     for (let i = a; i <= b; i++) {
//         arr.push(i)
//     }
//     arr.filter(n => Number.isInteger(n))
//     return arr;
// }
// console.log(between(-2, 3.2));
// //---------------------------------------------------------------------------

// function gooseFilter(birds) {
//     const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
//     return birds.filter(el => !geese.includes(el))
// };

// function gooseFilter1(birds) {
//     var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
//     return birds.filter(bird => geese.indexOf(bird) < 0);
// };
// console.log(gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]));
//---------------------------------------------------------------------------

// function countSheep(num) {
//     const length = num;
//     const value = 'hello';
//     const arr11 = Array.from({ length }, () => value);
//     return arr11
// };
// console.log(countSheep(5));
//---------------------------------------------------------------------------

// function countSheep(num) {
//     let str = ''
//     for (let i = 0; i < num; i++) {
//         str += `${i + 1} sheep...`
//     }
//     return str
// };
// console.log(countSheep(1));

// //---------------------------------------------------------------------------

// function sortMyString(S) {
//     const odd = [], even = [];
//     S.split('').forEach((e, i) => (i % 2 === 0) ? odd.push(e) : even.push(e));
//     return `${odd.join('')} ${even.join('')}`;
// }
// console.log(sortMyString("CodeWars"));
//---------------------------------------------------------------------------

// const evenOrOdd = (n) => (n % 2 === 0) ? "Even" : 'Odd'

//---------------------------------------------------------------------------
// new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Lew"
// let f1 = {
//     name: "Lew",
//     health: 30,
//     damagePerAttack: 3
// }
// let f2 = {
//     name: "Harry",
//     health: 20,
//     damagePerAttack: 5
// }
// function declareWinner(fighter1, fighter2, firstAttacker) {
//     let h1 = fighter1.health, h2 = fighter2.health
//     let d1 = fighter1.damagePerAttack, d2 = fighter2.damagePerAttack
//     for (let i = 0; i < 30; i++) {
//         if (fighter1.name === firstAttacker) {
//             h2 -= d1;
//             if (h2 <= 0) {
//                 return fighter1.name;
//             }
//             h1 -= d2;
//             if (h1 <= 0) {
//                 return fighter2.name;
//             }
//         } else {
//             h1 -= d2;
//             if (h1 <= 0) {
//                 return fighter2.name;
//             }
//             h2 -= d1;
//             if (h2 <= 0) {
//                 return fighter1.name;
//             }
//         }
//     }
// }

// console.log(declareWinner(f1, f2, "Harry"));

//---------------------------------------------------------------------------
// []-- > "no one likes this"
// ["Peter"]-- > "Peter likes this"
// ["Jacob", "Alex"]-- > "Jacob and Alex like this"
// ["Max", "John", "Mark"]-- > "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]-- > "Alex, Jacob and 2 others like this"
// function likes(name) {
//     switch (name.length) {
//         case 0: {
//             return "no one likes this"
//         }
//         case 1: {
//             return `${name[0]} likes this`
//         }
//         case 2: {
//             return `${name[0]} and ${name[1]} likes this`
//         }
//         case 3: {
//             return `${name[0]}, ${name[1]} and ${name[2]} likes this`
//         }
//         default: {
//             return `${name[0]}, ${name[1]} and ${name.length - 2} others likes this`
//         }
//     }
// }
// console.log(likes(["Alex", "Jacob", "Mark",]));

//---------------------------------------------------------------------------

// function findNextSquare(sq) {
//     let sqrt = Math.sqrt(sq);
//     return Number.isInteger(sqrt) ? Math.pow(sqrt + 1, 2) : -1;
//   }

// console.log(findNextSquare(121));

//---------------------------------------------------------------------------
// 39
// function persistence(num) {
//     debugger
//     let nums = num.toString().split('')
//     if (nums.length === 1) {
//         return +nums
//     } else {
//         // let result = nums.reduce((acc,mult) => acc * mult)
//         for (let i = 0; i < nums.length; i++) {
//             let result = nums[i] * nums[i + 1]
//             nums = result.toString().split('')
//         }
//     }
//     return num
// }

// describe("Persistent Bugger.", () => {
//     it("Fixed tests", () => {
//         assert.strictEqual(persistence(39),3);
//         assert.strictEqual(persistence(4),0);
//         assert.strictEqual(persistence(25),2);
//         assert.strictEqual(persistence(999),4);
//     });
// });

// function persistence(num) {
//     let nums = num.toString().split('')
//     let count = 0
//     while (nums.length !== 1) {
//         nums = nums.reduce((acc, mult) => acc * mult).toString().split('')
//         count++
//     }
//     return count
// }

// console.log(persistence(999));
//---------------------------------------------------------------------------

// function wave(str) {
//     let temp = []
//     let result = []
//     let arr = str.split('')

//     for (let i = 0; i < arr.length; i++) {
//         for (let f = 0; f < arr.length; f++) {
//             if (i === f) {
//                 temp.push(arr[f].toUpperCase())
//             } else temp.push(arr[f])
//         }
//         if (arr[i] !== ' ') {
//             result.push(temp.join(''))
//         }
//         temp = []
//     }
//     return result
// }

// console.log(wave('two words'));
//---------------------------------------------------------------------------

function twoSum(numbers, target) {
    debugger
    let arr = []
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) { // 1 + 3
                arr.push(i)
                arr.push(j)
                return arr;
            }
        }
    }
}

console.log(twoSum([1, 2, 3], 4))
//---------------------------------------------------------------------------

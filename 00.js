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


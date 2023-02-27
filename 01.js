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

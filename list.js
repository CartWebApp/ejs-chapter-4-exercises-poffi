function arrayToList(arr) {
  let arrayToList = []
  for(let i = inputArray.length - 1; i >= 0 ; i--){
      arrayToList.push(inputArray[i]);
  }
  return arrayToList;
}

function listToArray(list, arr) {
  for(let i = inputArray.length - 1; i >= 0 ; i--);
  return listToArray
}

// tests
console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20

function deepEqual(value, reference) {
  let outputArray = []
    for(let i = inputArray.length - 1; i >= 0 ; i--){
        outputArray.push(inputArray[i]);
    }
    return true
    

}






// tests
let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true

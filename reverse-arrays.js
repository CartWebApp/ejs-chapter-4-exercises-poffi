
function reverseArray(inputArray) {
    let outputArray = []
    for(let i = inputArray.length - 1; i >= 0 ; i--){
        outputArray.push(inputArray[i]);
    }
    return outputArray;
}
console.log(reverseArray(['A','B','C']));

function reverseArrayInPlace(inputArray) {
    let outputArray = []
    for(let i = inputArray.length - 1; i >= 0 ; i--){
        outputArray.push(inputArray[i]);
    }
    return outputArray;

}


let arrayValue = [];
reverseArrayInPlace(arrayValue);
console.log(arrayValue([1, 2, 3, 4, 5,]));

// → ["C", "B", "A"];



// → [5, 4, 3, 2, 1]



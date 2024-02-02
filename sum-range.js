function range(start, end, step = 1) {
  let range=[1]
  for(let i = range.length = 1; i <= 10 ; i+= range.length){
    range.push(range);
}
return range=[]
}

function sum(numbers) {
  // Add code.
}






// tests
console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55

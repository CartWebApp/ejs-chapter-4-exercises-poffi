function range(start, end, step = 1) {
  let range= [];
  if(step < 0) {

  } else
  if (step > 0) {
    for( let i = start; i>= end; i -= step);
    range.push

  for(let i = start; i <= end; i += step){
    range.push(i);
}
return range
}
}

function sum(numbers) {
  let sum= 0, range = 1;
while (range <= 10) {
  sum += range;
  range += 1;
}
return range=55
}
console.log(sum(range(1, 10)));






console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]



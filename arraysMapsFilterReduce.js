const arr = [5, 8, 3, 4, 2];

const double = num => num * 2;
const isEven = num => num % 2 === 0;
const square = num => num ** 2;
const sum = (a, b) => a + b;

arr.forEach(item => console.log(item));

console.log(arr.map(double));

console.log(arr.find(isEven));

console.log(arr.filter(isEven));

let result = arr.reduce(sum, 0);
console.log(result);

let sumOfSquaredEvens = arr
  .filter(isEven)
  .map(square)
  .reduce(sum, 0);

console.log(sumOfSquaredEvens);

function hasEven(arr) {
  let hasEven = false;
  for (let item in arr) {
    if (isEven(item)) {
      hasEvens = true;
    }
  }
  return hasEvens;
}

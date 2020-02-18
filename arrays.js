let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

/// For each loop

// for (let item of arr) {
//   console.log(item);
// }

// for (let key in arr) {
//   console.log(arr[key]);
// }

let arrDouble = [];
let evenNumberArray = [];
function arrayDouble(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    arr2[i] = arr1[i];
  }
  console.log(arr2);
}

arrayDouble(arr, arrDouble);
checkEvenNumber(arr);
catchFirstEvenNumber(arr);
returnArrayOfEvenNumbers(arr, arrDouble);
sumOfAllElementsInArray(arr);
getSumOfEvenNumbersAndSquare(evenNumberArray);

function checkEvenNumber(arr1) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] % 2 == 0) {
      console.log(arr[i] + ' is Even');
    }
  }
}

function catchFirstEvenNumber(arr1) {
  let count;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] % 2 == 0) {
      count++;
      console.log(arr1[i] + ' is First Even Number in Array');
      break;
    }
    if (count === 0) {
      console.log(-1);
    }
  }
}

function returnArrayOfEvenNumbers(arr1, arr2) {
  for (let i = 0; i < arr.length; i++) {
    arr2.push(arr[i] * 2);
  }
  console.log(arr2);
}

function sumOfAllElementsInArray(arr1) {
  let sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    sum += arr1[i];
  }
  console.log(sum);
}

function getSumOfEvenNumbersAndSquare(arr1) {
  let sum = 0;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] % 2 == 0) {
      sum = +Math.pow(arr1[i], arr1[i]);
    }
  }
  console.log('The Sum is ' + sum);
}

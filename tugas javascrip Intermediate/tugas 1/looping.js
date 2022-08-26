const arr = [1, 2, 3];
const arr2 = [8, 1, 5, 7];
function reverse(number) {
  number.reverse();
}

reverse(arr2);
const newArr = reverse(arr);
console.log(arr, newArr);
console.log(arr2);

// soal 2
// const arr1 = [1, 3, 4, 1, 2, 8];
// const arr3 = [5, 6, 7, 8, 1, 3];

// function getAverage() {}

// console.log(getAverage(arr1));
// console.log(getAverage(arr3));

// soal 3
const arr4 = [[10], [9, 7, 1], [2, 8]];

function searchInArray(arr, num) {
  const number = arr.map((item) => item === num);
  console.log(num);
}
console.log(searchInArray(arr4, 3));
console.log(searchInArray(arr4, 2));
console.log(searchInArray(arr4, 4));
console.log(searchInArray(arr4, 8));

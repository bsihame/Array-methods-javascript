console.log("Array Methods");
const arr = [
  "Marie",
  "Natalia",
  "Jamal",
  "Jake",
  "James",
  "Nadia",
  "Marie",
  "Natalia",
  "Jamal",
  "Jake",
  "James",
  "Nadia",
];
console.log(arr);
// New set will help to remove all duplicate words.

const obj1 = new Set(arr);
//==> this is an object ==> Set(6) { 'Marie', 'Natalia', 'Jamal', 'Jake', 'James', 'Nadia' }
console.log(obj1);

const arr1 = [...new Set(arr)];
// this will return a new array with non repetitive words
console.log(arr1);

const arr2 = [
  "Marie",
  "Natalia",
  "Jamal",
  "Jake",
  "James",
  "Nadia",
  "",
  ,
  ,
  ,
  ,
  "",
  "Marie",
  "Natalia",
  "Jamal",
  "Jake",
  "James",
  "Nadia",
];

const arr3 = [...new Set(arr2)];
// Using set it does not remove space or an empty string. the empty space will be defined as undefined
console.log(arr3);

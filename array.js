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
console.log(arr1); // [ 'Marie', 'Natalia', 'Jamal', 'Jake', 'James', 'Nadia' ]

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
console.log(arr3); // ['Marie', 'Natalia','Jamal', 'Jake','James', 'Nadia','', undefined]. A set creates a unique values but still have undefined and empty string

// To remove any empty string or undefined values we use filter . ==> if the value is falsy value we should remove it.
const arr4 = arr2.filter(Boolean);
console.log(arr4); // ['Marie', 'Natalia','Jamal', 'Jake','James', 'Nadia','Marie', 'Natalia','Jamal', 'Jake','James', 'nadia']

// to remove all falsy values like empty space, undefined, and remove all repetitive words, we combine set and filter method
const arr5 = [...new Set(arr2.filter(Boolean))];
console.log(5, arr5); // [ 'Marie', 'Natalia', 'Jamal', 'Jake', 'James', 'Nadia' ]

// loops
console.log("**For Loop**");
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
console.log("**While Loop**");
let i = 0;
while (i < arr.length) {
  console.log(arr[i]);
  i++;
}

console.log("**forEach**");
arr.forEach(() => {});

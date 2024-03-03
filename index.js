// TypeError: forEach is not a function in JavaScript

// EXAMPLE 1 - Solving the error when working with objects

const obj = {
  name: 'James',
  country: 'Chile',
};

// 👇️ ['name', 'country']
console.log(Object.keys(obj));

Object.keys(obj).forEach(key => {
  console.log(key); // 👉️ name, country
  console.log(obj[key]); // 👉️ James, Chile
});

// ------------------------------------------------------------------

// // EXAMPLE 2 - Using Object.values()

// const obj = {
//   name: 'James',
//   country: 'Chile',
// };

// // 👇️ ['James', 'Chile']
// console.log(Object.values(obj));

// Object.values(obj).forEach(value => {
//   console.log(value); // 👉️ James, Chile
// });

// ------------------------------------------------------------------

// // EXAMPLE 3 - Using Object.entries()

// const obj = {
//   name: 'James',
//   country: 'Chile',
// };

// // 👇️ [['name', 'James'], ['country', 'Chile']]
// console.log(Object.entries(obj));

// Object.entries(obj).forEach(([key, value]) => {
//   console.log(key); // 👉️ name, country
//   console.log(value); // 👉️ James, Chile
// });

// ------------------------------------------------------------------

// // EXAMPLE 4 - Convert the value to an Array before calling `forEach()`

// const set = new Set(['bobby', 'hadz', 'com']);

// const arr = [...set];

// arr.forEach(element => {
//   // bobby
//   // hadz
//   // com
//   console.log(element);
// });

// ------------------------------------------------------------------

// // EXAMPLE 5 - Check if the value is the correct type before calling `forEach()`

// const arr = null;

// // ✅ Check if the value is an array
// if (Array.isArray(arr)) {
//   arr.forEach(element => {
//     console.log(element);
//   });
// }

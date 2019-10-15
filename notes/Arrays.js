// Arrays

/* multiline comments */

const numbers = new Array(1,2,3,4,5);
const fruits = ['apples', 'oranges', 'pears'];

// To append new elements
fruits[3] = 'grapes';

fruits.push('mangos'); // like append() in python

// To add from the beginning
fruits.unshift('strawberries');

fruits.pop(); // remove the last element

// To check something in array
console.log(Array.isArray(fruits));

// Get index
console.log(fruits.indexOf('oranges'));

// console.log(numbers);
console.log(fruits);
console.log(fruits[0]);
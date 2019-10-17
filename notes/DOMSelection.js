// DOM Selection
// DOM - Document Object Model

// Selector
// console.log(window)

// Single element 
console.log(document.getElementById('my-form')) // print everything in my-form
console.log(document.querySelector('.container')) // select class

// Multiple element
console.log(document.querySelectorAll('.item')) // this will give us a nodelist
console.log(document.getElementsByClassName('item'))
console.log(document.getElementsByTagName('item'))

// in the future just use querySelectorAll()

// to iterate DOM
const items = document.querySelectorAll('.item')

items.forEach((item) => console.log(item))
